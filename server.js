const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs'); 
const busboy = require('connect-busboy');
const shell = require('shelljs');
const { spawn } = require('child_process'); 

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './build')));
app.use(busboy());

const STRING_FILE_NAME = 'strings.json';
const CAROUSEL_IMG_FILE_NAME = "images.json";
const CAROUSEL_IMG_WIDTH = 500;
const CAROUSEL_IMG_HIGHT = 500;
const CAROUSEL_DIR = "./build/carouselImg";
const PORT_NUM = 3000;

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

	for(let i = 0; i < carouselImgs.length; i++) {
		if(image === carouselImgs[i]) {
			carouselImgs.splice(i, 1);
			removed = true;
		}
	}

	if(!removed){
		throw("image not found!");
	}
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
	log("User authenticated, " + new Date());
	if(req.body.password === getPassword()) {
		res.json({status: 'true'});
	} 
	else {
		res.json({status: 'false'});
	}
});

/*
API to update string resources.
*/
app.post('/api/updateStrings', function(req, res) {
	let result;

	if(req.body.password === getPassword()) {
		writeStrings(req.body.data, STRING_FILE_NAME);
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

        //Path where image will be uploaded
        fstream = fs.createWriteStream(__dirname + '/carouselImg/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {    
            console.log("'" + filename + "' uploaded, now resizing...");
            
            let src = __dirname + '/carouselImg/' + filename;
            let dest = __dirname + '/build/carouselImg/' + filename;
            let finalAddr = '/carouselImg/' + filename;

			resize(src, dest, CAROUSEL_IMG_WIDTH, CAROUSEL_IMG_HIGHT, function(destination){
				res.json({address: finalAddr})
				addCarouselImage(finalAddr);
				shell.cp(dest, src); // this is to have the same size pictures outside the build directory
			});           
        });
    });
});

/*
API to handle carousel image deletes
*/
app.delete('/api/carouselImgDelete', function(req, res) {
	console.log(req.body.data);
	let result;
	try {
		deleteImage(req.body.data);
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
Redirects all other requests to be handled by client.
*/
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
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
	 	console.log(`child process exited with code ${code}.`);
	  	if(code === 0) {
	  		console.log("Image was resized.");
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
----Initial setup before running----
*/
let password;
let strings;
let carouselImgs = null;


shell.mkdir('-p', 'build/carouselImg');
shell.mkdir('-p', 'carouselImg');
shell.rm('-rf', 'build/carouselImg');
shell.cp('-R', 'carouselImg/', 'build/carouselImg')

if(!fs.existsSync(CAROUSEL_IMG_FILE_NAME)) {
	writeObj([], CAROUSEL_IMG_FILE_NAME);
}


/*-----END setup----*/

/*
Starts server listening.
*/
app.listen(PORT_NUM, function() {
	console.log('App is listening on port ' + PORT_NUM)
});
























