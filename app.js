const express = require('express');
const app = express();
const path = require('path');

app.set('port', 3000);

//Standard route to homepage.

app.get('/', function(req, res) {
  console.log("Get the hooooooooomepage!")
  res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Delivers json to the browser.

app.get('/json', function(req, res) {
  console.log("Get the json")
  res
    .status(200)
    .json({ "jsonData": true });
});

//Delivers a static file to the browser.

app.get('/file', function(req, res) {
  console.log("Get the file")
  res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
});

const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
  console.log('Magic happens on port ' + port);
});
