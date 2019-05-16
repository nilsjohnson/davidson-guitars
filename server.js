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
			throw err;
		}
		console.log('Strings Saved!');
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
	console.log("fetching strings");
	//console.log(strings);
	res.json(getStrings());
});

/*
API to make sure its an authorized user
*/
app.post('/api/authenticate', function(req, res) {
	console.log(req.body.password);
	console.log(getPassword());
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
		req.body.password = "";
		writeStrings(req.body.data);
		console.log(req.body.data);
		strings = req.body.data;
		console.log("Sucessful string update, " + new Date());
	}
	else {
		console.log("someone hit this api with wrong password!, " + new Date());
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





