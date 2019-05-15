const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
var fs = require('fs'); 
let password;

function getPassword() {
	if(password) {
		return password;
	}
	else {
		return fs.readFileSync('password.txt').toString();
	}
}

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
			console.log(data);
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
to update string resources
*/
app.post('/api/updateStrings', function(req, res) {
	if(req.body.password === getPassword()) {
		req.body.password = "";
		writeObject(req.body.data);
		console.log(req.body.data);
		Strings = req.body.data;
		console.log("Sucessful string update, " + new Date());
	}
	else {
		console.log("someone hit this api with wrong password!, " + new Date());
	}
	res.json({result: "Update Sucessful!"})
	
});

/*
redirects all other requests to client
*/
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

readStrings();




