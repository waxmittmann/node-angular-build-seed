var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public/static'));
app.use('/resources', express.static(__dirname + '/public/resources'));
//app.use(express.static(__dirname + '/public'));

app.listen(8000);
console.log("Server is running on 8000");
