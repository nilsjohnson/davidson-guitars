const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
var fs = require('fs'); 

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './build')));

let password;
const portNum = 3000;
let strings;
var running = false;


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
function writeStrings(obj) {
	fs.writeFile('strings.json', JSON.stringify(obj, null, 2), function (err) {
		if (err) {
			console.log(error)
		}
		log("String Update!, " + new Date());
	}); 
}

/*
Reads strings from file.
*/
function getStrings() {
	if(!strings){
		strings = JSON.parse(fs.readFileSync('strings.json').toString());
	}

	return strings;
}

/*
API to get string resources.
*/
app.get('/api/strings', function(req, res) {
	res.json(getStrings());
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
	if(req.body.password === getPassword()) {
		writeStrings(req.body.data);
		strings = req.body.data;
		log("Sucessful string update, " + new Date());
	}
	else {
		log("Someone hit this api with wrong password!, " + new Date());
	}
	res.json({result: "Update Sucessful!"})
	
});

/*
Redirects all other requests to be handled by client.
*/
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*
Starts server listening.
*/
app.listen(portNum, function() {
	console.log('App is listening on port ' + portNum)
});





