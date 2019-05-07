const express = require('express');
const path = require('path');
const app = express();
const portNum = 9000;
const pw = "guitar";

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/getBlogPosts', (req, res) => {
	console.log("api hit!");
	let item = { title: "title", content: "content" };
	res.json(item);

});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(portNum, function() {
	console.log('App is listening on port ' + portNum)
});


