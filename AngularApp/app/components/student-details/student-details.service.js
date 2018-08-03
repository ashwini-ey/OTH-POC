(function (app) {
    'use strict';
    var studentDetailsService = ['$http', '$q', function ($http, $q) {
        let ServiceURL = 'http://localhost:4000/';
        return {
            getStudents: function () {
                var deferred = $q.defer();
                $http.get('/student').then(function (data) {
                    deferred.resolve(data);
                },function (data, status) {
                    deferred.reject(data);
                });
                return deferred.promise;
            },
            deleteStudent: function (id) {
                var deferred = $q.defer();
                $http.post('/student/deleteStudent/'+id
            ).then(function (data) {
                    deferred.resolve(data);
                },function (data, status) {
                    deferred.reject(data);
                });
                return deferred.promise;
            },
            findStudent: function (firstName) {
                var deferred = $q.defer();
                $http.get('/student/getStudent/'+firstName).then(function (data) {
                    deferred.resolve(data);
                },function (data, status) {
                    deferred.reject(data);
                });
                return deferred.promise;
            },
        };
    }];

    app.factory("studentDetailsService", studentDetailsService);
}(angular.module("app")));
