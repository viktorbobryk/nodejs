var express = require('express');
var bodyParser = require("body-parser");
var indexPage = require('./indexPage.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/', function (req, res) {
   console.log(req.body);
  res.send(indexPage.getPage(req.body));
});
app.get('/', function (req, res) {
  res.send("Hello World");
});

app.listen(/*port*/3000, /*callback*/function () {
  console.log('Example app listening on port 3000!');
});