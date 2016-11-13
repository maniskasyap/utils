var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var fs = require('fs');
var cloudinary = require('cloudinary');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var cloud_name = 'leanowl';
// var base_url = 'http://api.cloudinary.com/api/v1_1/' + cloud_name;

// var creds = {
//     api_key: "174497384943137"
//     api_secret: "j73C5gjof7bXaygyZjM8cXPB_9o"
// };

cloudinary.config({
    cloud_name: 'leanowl',
    api_key: '174497384943137',
    api_secret: 'j73C5gjof7bXaygyZjM8cXPB_9o'
});
// var img = "http://www.logospike.com/wp-content/uploads/2015/11/Logo_Image_03.png";

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
    return res.sendFile('index.html');
});

app.post('/upload', function(req, res) {
    console.log(req.body);
    cloudinary.uploader.upload(req.body, function(result) {
        res.send(result);
    });
});
app.listen(3000, function() {
    console.log('image uploader running on port 3000!');
});
