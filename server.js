/*
If running in production on server, pass 'prudction' as an argument:
	$ node server.js production
This will allow listening for https requests, otherwise it will just do http.	
*/
const DEV = "DevMode, wahoo!";
let mode;

if(process.argv.length > 2 && process.argv[2] === "production") {
	console.log("Server running in prodcution. Will listen for https requests.");
}
else {
	console.log("Server running in DEV mode. Will not listen for https requests");
	mode = DEV;
}

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs'); 
const busboy = require('connect-busboy');
const shell = require('shelljs');
const { spawn } = require('child_process');
const https = require('https'); 

const STRING_FILE_NAME = 'strings.json';
const CAROUSEL_IMG_FILE_NAME = "images.json";
const CAROUSEL_IMG_WIDTH = 500;
const CAROUSEL_IMG_HIGHT = 500;
const CAROUSEL_DIR = "./build/carouselImg";
const HTTP_PORT_NUM = 3000;
const HTTPS_PORT_NUM = 443;

// for https
let FULL_CHAIN;
let PRIVATE_KEY;
let OPTIONS = { };

if(mode != DEV) {
	FULL_CHAIN = '/etc/letsencrypt/live/www.owendavidsonguitars.com/fullchain.pem';
	PRIVATE_KEY = '/etc/letsencrypt/live/www.owendavidsonguitars.com/privkey.pem';
	OPTIONS = {
    	cert: fs.readFileSync(FULL_CHAIN),
    	key: fs.readFileSync(PRIVATE_KEY)
	};
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build'), { index : false })); // index : false is to allow request for the webroot to get caught by 'app.get('/*', function(req, res)', allowing http to https redirects
app.use(express.static(path.join(__dirname, 'public'), { index : false }));
app.use(busboy());

// global variables
let password;
let strings;
let carouselImgs = null;

// make directory where carousel images belong, if it doesnt exist
shell.mkdir('-p', 'public/carouselImg');

// make a file to hold carousel images if it doesnt exist
if(!fs.existsSync(CAROUSEL_IMG_FILE_NAME)) {
	writeObj([], CAROUSEL_IMG_FILE_NAME);
}
// make file to hold strings if it doesnt exist
if(!fs.existsSync(STRING_FILE_NAME)) {
	writeObj([], STRING_FILE_NAME);
}

/*
Logs to file
*/
function log(str) {
	fs.appendFile('log.txt', str + "\n", 'utf8', function(err) { 
        if (err) {
        	console.log("Problem writing to file: " + err)
        }
	}); 
}

/*
Returns password. Reads from memory if null.
*/
function getPassword() {
	if(password) {
		return password;
	}
	else {
		password = fs.readFileSync('password.txt').toString();
		return password;
	}
}

/*
Returns strings. Reads from file if necessary.
*/
function getStrings() {
	if(!strings) {
		strings = JSON.parse(fs.readFileSync('strings.json'));
	}

	return strings;
}

/*
Writes object to file as JSON
*/
function writeObj(obj, name) {
	fs.writeFile(name, JSON.stringify(obj, null, 2), function (err) {
		if (err) {
			console.log(error)
		}
		log(name + ": file update succeded, " + new Date());
	}); 
}

/*
Reads JSON object from file and returns it
*/
function readObj(name) {
	let obj = JSON.parse(fs.readFileSync(name));
	return obj;
}

/*
Returns carousel images. Reads from file if necessary.
*/
function getCarouselImages() {
	if(!carouselImgs) {
		carouselImgs = readObj(CAROUSEL_IMG_FILE_NAME);
	}
	return carouselImgs;
}

/*
Deletes image from carousel array
*/
function deleteImage(image) {
	if(!carouselImgs) {
		getCarouselImages();
	}

	let removed = false;

	let i = 0;
	while(i < carouselImgs.length) {
		if(image === carouselImgs[i]) {
			carouselImgs.splice(i, 1);
			removed = true;
			writeObj(carouselImgs, CAROUSEL_IMG_FILE_NAME);
			removeFile(__dirname + "/build" + image);
			removeFile(__dirname + image);
			break;
		}
		else {
			i++;
		}
	}

	if(!removed){
		throw("image not found!");
	}
}


/*
moves an image
*/
function moveCarouselImage(direction, image) {
	if(!carouselImgs) {
		getCarouselImages();
	}

	let imageIndex = 0;
	let found = false;

	while(imageIndex < carouselImgs.length) {
		if(carouselImgs[imageIndex] === image) {
			found = true;
			break;
		}
		else {
			imageIndex++;
		}
	}

	if(found) {
		let rightIndex, leftIndex, temp;

		if(imageIndex === 0) {
			leftIndex = carouselImgs.length -1;
			rightIndex = imageIndex + 1;
		}
		else if(imageIndex === carouselImgs.length - 1) {
			rightIndex = 0;
			leftIndex = imageIndex - 1;
		}
		else {
			rightIndex = imageIndex + 1;
			leftIndex = imageIndex -1;
		}

		temp = carouselImgs[imageIndex];
		if(direction === "RIGHT") {
			carouselImgs[imageIndex] = carouselImgs[rightIndex];
			carouselImgs[rightIndex] = temp;
		}
		if(direction === "LEFT") {
			carouselImgs[imageIndex] = carouselImgs[leftIndex];
			carouselImgs[leftIndex] = temp;
		}

		writeObj(carouselImgs, CAROUSEL_IMG_FILE_NAME);	
	}
	else {
		console.log("Can't move image. Image not found");
	}
}

/*
Removes a file
*/
function removeFile(path)
{
	console.log("Path: ", path);
	fs.unlink(path, (err) => {
		if (err) {
			console.log("Problem deleting file: " + err);
		}
		else {
			console.log("delete sucess!");
		}
	});

}

/*
API to get string resources.
*/
app.get('/api/strings', function(req, res) {
	res.json(getStrings());
});

/*API to get carousel images.*/
app.get('/api/carousel', function(req, res) {
	res.json(getCarouselImages());
});

/*
API to make sure its an authorized user
*/
app.post('/api/authenticate', function(req, res) {
	if(req.body.password === getPassword()) {
		log("User authenticated, " + new Date());
		res.status(200);
	} 
	else {
		log("Attempted login with password='" + req.body.password + "', " + new Date());
		res.status(400);	
	}
	res.send();

});

/*
API to update string resources.
*/
app.post('/api/updateStrings', function(req, res) {
	let result;
	if(req.body.password === getPassword()) {
		writeObj(req.body.data, STRING_FILE_NAME);
		strings = req.body.data;
		log("Sucessful post to '/api/updateStrings', " + new Date());
		result = "Update Sucessful!";
	}
	else {
		log("Someone hit '/api/updateStrings' with wrong password!, " + new Date());
		result = "";
	}
	res.json({result: result});
});

/*
API To handle carousel uploads
*/
app.post('/api/carouselUpload', function (req, res, next) {
    let fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);

        let src = '/tmp/' + filename;
        let dest = __dirname + '/public/carouselImg/' + filename;
        let finalAddr = '/carouselImg/' + filename;

        let i = 2;
        while(getCarouselImages().includes(finalAddr)) {
        	console.log("exists");
        	filename = "(" + i + ")" + filename;
        	src = '/tmp/' + filename;
        	dest = __dirname + '/public/carouselImg/' + filename;
        	finalAddr = '/carouselImg/' + filename;
        	i++;
        }

        //Path where image will be uploaded
        fstream = fs.createWriteStream(src);
        file.pipe(fstream);
        fstream.on('close', function () {    
            console.log("'" + filename + "' uploaded, now resizing...");
            
			resize(src, dest, CAROUSEL_IMG_WIDTH, CAROUSEL_IMG_HIGHT, function(destination){
				res.json({address: finalAddr})
				addCarouselImage(finalAddr);
				shell.rm(src); // delete temporary file
			});           
        });
    });
});

/*
API to handle carousel image deletes
*/
app.delete('/api/carouselImgDelete', function(req, res) {
	let result
	console.log(req.body.image);
	try {
		deleteImage(req.body.image);
		result = "Delete Success!";
	}
	catch(err) {
		console.log(err);
		res.status(400);
		result = "Delete Failed."
	}

	res.json({result: result});
});

/*
API to shift carousel images left or right
*/
app.put('/api/carouselImgs/move', function(req, res) {
	let result;
	try {
		moveCarouselImage(req.body.direction, req.body.image);
		result = "Image moved."
	}
	catch(err) {
		console.log(err);
		result = err;
		res.status(400);
	}

	res.json({result: result});
});


/*
Redirects all other requests to be handled by client.
*/
app.get('/*', function(req, res) {
	if(!req.secure && mode != DEV){
    	res.redirect("https://" + req.headers.host + req.url);
  	}
  	else {
  		res.sendFile(path.join(__dirname, 'public', 'index.html'));
  	}
});

/*
To resize images. Spawns a Java program. 
	-Will take src image, crop to proper aspect ratio and resize.
	-Sections of edge may be lost, but image will not appear "smooshed"
*/
function resize(src, dest, width, height, callback) {
	let args = ['Resize', src, dest, width, height];
	const resizer = spawn('java', args);

	resizer.stdout.on('data', (data) => {
		console.log(`stdout: ${data}`);
	});

	resizer.stderr.on('data', (data) => {
		console.log(`stderr: ${data}`);
	});

	resizer.on('close', (code) => {
	 	//console.log(`child process exited with code ${code}.`);
	  	if(code === 0) {
	  		//console.log("Image was resized.");
	  		callback(dest)
	  	}
	  	else {
	  		console.log("Image not resized.");
	  	}
	});
}

/*
to add carousel images to list
*/
function addCarouselImage(image) {
	if(!carouselImgs) {
		carouselImgs = getCarouselImages();
	}
	console.log("carouselImgs: " + carouselImgs);
	carouselImgs.push(image);
	writeObj(carouselImgs, CAROUSEL_IMG_FILE_NAME);
}

/*
Starts server listening.
*/
app.listen(HTTP_PORT_NUM, function() {
	console.log('App is listening on port ' + HTTP_PORT_NUM)
});

/*
Starts listening for https requests
*/
if(mode != DEV) {
	https.createServer(OPTIONS, app).listen(HTTPS_PORT_NUM);
}
























