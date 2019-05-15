const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const shell = require('shelljs');
var fs = require('fs'); 


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './build')));

const portNum = 3000;
let Strings;
var running = false;


function writeObject(obj) {
	fs.writeFile('Strings.json', JSON.stringify(obj, null, 2), function (err) {
		if (err) {
			throw err;
		}
		console.log('Saved!');
	}); 
}

function readStrings() {
	fs.readFile('Strings.json', 'utf8', function(err, data) {
		if(err) {
			console.log(err);
		}
		else {
			Strings = data;
			if(!running) {
				startServer();
				running = true;
			}
		}
	});
}

function startServer() {
	app.listen(portNum, function() {
		console.log('App is listening on port ' + portNum)
	});
}


/*
to get string resources
*/
app.get('/api/strings', function(req, res) {
	console.log("fetching strings");
	//console.log(Strings);
	res.json(Strings);
});

/*
to make sure its the correct user
*/
app.post('/api/authenticate', function(req, res) {
	console.log("body: " + req.body);
	console.log("pw: " + req.body.password);
	if(req.body.password === "pass") {
		console.log("correct pw");
		res.json({status: 'true'});
	} 
	else {
		console.log("incorrect pw");
		res.json({status: 'false'});
	}
	
});


/*
to update string resources
*/
app.post('/api/updateStrings', function(req, res) {
	writeObject(req.body);
	readStrings();
});

/*
redirects all other requests to client
*/
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

readStrings();




