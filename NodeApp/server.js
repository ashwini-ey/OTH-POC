let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let port = process.env.PORT || 4000;
let path = require('path');
// Body Parser Middleware
app.use(bodyParser.json());

//console.log(process.env['NODE_ENV']);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


let studentRoute = require('./routes/student.route');
app.use(express.static(path.join(__dirname, '../'))); 
app.use('/student',studentRoute);
app.get('/', function(req, res) {    
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(port, function () {
    console.log("node api runnig at port:" + port);
});

module.exports = app;
