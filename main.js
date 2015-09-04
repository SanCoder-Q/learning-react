var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/*', function(req, res) {
   res.send('Sorry, 404');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:%s', port);
});
