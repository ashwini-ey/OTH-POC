(function (app) {
    'use strict';
    var upsertStudentService = ['$http', '$q', function ($http, $q) {
       
        return {
            addStudent: function (student) {
                var deferred = $q.defer();
                $http.post('/student/addStudent',{
                    body:{
                        firstName: student.firstName,
                        lastName: student.lastName
                    }
                }).then(function (data) {
                    deferred.resolve(data);
                },function (data, status) {
                    deferred.reject(data);
                });
                return deferred.promise;
            },
            updateStudent: function (student) {
                var deferred = $q.defer();
                $http.post('/student/updateStudent',{
                        studentId: student.id,
                        firstName: student.firstName,
                        lastName: student.lastName
                   
                }).then(function (data) {
                    deferred.resolve(data);
                },function (data, status) {
                    deferred.reject(data);
                });
                return deferred.promise;
            }


        };
    }];

    app.factory("upsertStudentService", upsertStudentService);
}(angular.module("app")));
