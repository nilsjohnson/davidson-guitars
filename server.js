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
Writes strings to file.
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
Returns strings. Reads from file if necessary.
*/
function getStrings() {
	if(!strings) {
		strings = JSON.parse(fs.readFileSync('strings.json').toString());
	}

	return strings;
}

/*
Returns carousel images. Reads from file if necessary.
*/
function getCarouselImages() {
	if(!carouselImgs){
		carouselImgs = [];
		let files = fs.readdirSync(CAROUSEL_DIR);
		
		for(let i = 0; i < files.length; i++) {
			console.log(files[i]);
			carouselImgs.push("/carouselImg/" + files[i]);
		}
	}
	return carouselImgs;
}

function writeCarouselImages() {
	fs.writeFile('carousel.json', JSON.stringify(obj, null, 2), function (err) {
		if (err) {
			console.log(error)
		}
		log("String update write succeded, " + new Date());
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
Redirects all other requests to be handled by client.
*/
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*
To handle carousel uploads
*/
app.post('/carouselUpload', function (req, res, next) {
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
				res.json({adress: finalAddr})
				addCarouselImage(finalAddr);
				shell.cp(dest, src); // this is to have the same size pictures outside the build directory
			});           
        });
    });
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
		  console.log(`child process exited with code ${code}, image resized!`);
		  if(code === 0) {
		  	callback(dest)
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
	carouselImgs.push(image);
}

/*
----Initial setup before running----
*/
let password;
let strings;
let carouselImgs = null;

shell.mkdir('-p', 'build/carouselImg');
shell.rm('-rf', 'build/carouselImg');
shell.cp('-R', 'carouselImg/', 'build/carouselImg')


/*-----END----*/

/*
Starts server listening.
*/
app.listen(PORT_NUM, function() {
	console.log('App is listening on port ' + PORT_NUM)
});
























