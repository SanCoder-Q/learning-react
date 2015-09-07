var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fs=require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get('/comment', function (req, res) {
    res.send(fs.readFileSync("db/data.json", "utf8"));
});

app.post('/comment', function (req, res) {
    var file = fs.readFileSync("db/data.json", "utf8");
    var json = JSON.parse(file);
    json.push(req.body);
    fs.writeFileSync("db/data.json", JSON.stringify(json),"utf8");
    res.send(JSON.stringify(json));
});

app.get('/*', function(req, res) {
   res.send('Sorry, 404');
});

var server = app.listen(3000, function () {
    var port = server.address().port;

    console.log('Example app listening at http://localhost:%s', port);
});
