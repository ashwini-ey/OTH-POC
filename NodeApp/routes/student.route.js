let express = require('express');
var Client = require('node-rest-client').Client;


let studentRoute = express.Router();
let serviceUrl = "http://localhost:8090/";

studentRoute.route('/').get((req, res) => {
    var client = new Client();
     let url = serviceUrl + 'getAllStudents';
     client.get(url, function (data, response) {
        res.send(data);
    });
});

studentRoute.route('/getStudent/:studentName').get((req, res) => {
    var client = new Client();
    let url = serviceUrl + "getStudent/" + req.params.studentName;
    client.get(url, function (data, response) {
        res.send(data);
       });
});

studentRoute.route('/addStudent').post(function (req, res) {
    var client = new Client();
    let args = {
        data:  {
            "firstName": req.body.body.firstName,
            "lastName": req.body.body.lastName
        },
        headers: { 'Content-Type': 'application/json' },
    };
    let url = serviceUrl + 'addStudent';
    client.post(url, args, function (data, response) {
     res.send(data);
    });
});

studentRoute.route('/updateStudent').post(function(req, res){
    var client = new Client();
    console.log(req);
    let args = {
        data:  {
            "id":req.body.studentId,
            "firstName": req.body.firstName,
            "lastName": req.body.lastName
        },
        headers: { 'Content-Type': 'application/json' },
    };
    let url = serviceUrl + 'updateStudent';
    client.put(url,args, function(data,response){
        res.send(data);
    });
    
});

studentRoute.route('/deleteStudent/:studentId').post((req, res) => {
    var client = new Client();
    let url = serviceUrl + 'deleteStudent/' +  req.params.studentId;
    let httpMethod = "DELETE";
    client.delete(url, function(data, response) { 
        res.send(data);
       });
});


module.exports = studentRoute;
