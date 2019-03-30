const express = require('express');

const app = express();

app.use(express.static('build'));
var router = express.Router();

app.listen(3000, function () {
    console.log('App started on port 3000');
});

var requests = ["hi", "hello", "cat"];




for(let i = 0; i < 3; i++)
{
	app.get('/' + requests[i], function (req, res) {
  	res.send('hello world' + i)
})
}