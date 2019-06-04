const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs'); 
const busboy = require('connect-busboy');
const shell = require('shelljs'); 

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './build')));
app.use(busboy());

const STRING_FILE_NAME = 'strings.json';
const CAROUSEL_FILE_NAME = "carousel.json";

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
	if(!carouselImg) {
		carouselImg = JSON.parse(fs.readFileSync('strings.json').toString());
	}

	return carouselImg;
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
	res.json(carouselImgs);
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
            console.log("Upload Finished of " + filename);
            
            let src = __dirname + '/carouselImg/' + filename;
            console.log("src: " + src);

            let dest = __dirname + '/build/carouselImg/' + filename;
            console.log("dest: " + dest);

            let addr = '/carouselImg/' + filename;
            console.log("addr: " + addr);

            //let args = 'Resize, ' + src + ", " + dest + " 500 500";
            let args = ['Resize', src, dest, '500', '500'];
            console.log(args);
			const ls = spawn('java', args);

			ls.stdout.on('data', (data) => {
			  console.log(`stdout: ${data}`);
			});

			ls.stderr.on('data', (data) => {
			  console.log(`stderr: ${data}`);
			});

			ls.on('close', (code) => {
			  console.log(`child process exited with code ${code}`);
			});
			            
            //shell.cp(src, dest);
            carouselImgs.push(addr);
            writeObj(carouselImgs, CAROUSEL_FILE_NAME);
            res.json({status: addr})              
        });
    });
});

// setup
let password;
const portNum = 3000;
let strings;
let carouselImgs = [];

shell.rm('-rf', 'build/carouselImg');
shell.cp('-R', 'carouselImg/', 'build/carouselImg')

const { spawn } = require('child_process');

/*const child = execFile('java', ['Hi'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});*/




/*
Starts server listening.
*/
app.listen(portNum, function() {
	console.log('App is listening on port ' + portNum)
});
























