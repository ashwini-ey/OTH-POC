(function (app) {
    'use strict';

    let studentDetailsCtrl = function ($stateParams,studentDetailsService, $scope, $location,$rootScope,$state,$window) {
        let vm = this;
        vm.getStudents = function(){
            studentDetailsService.getStudents().then(function (result) {
                if (result) {
                    $scope.students = result.data;
                        
                }
            });
        };
        vm.addStudentPage = function(){
            $rootScope.studentDetails = {};
            $state.go('addStudentPage');
        };
        vm.deleteStudent = function(id){
            studentDetailsService.deleteStudent(id).then(function (result) {
                if (result.data) {
                    alert(result.data);
                    $window.location.reload();
                 }
            });
        };
        vm.updateStudentPage = function(student){
            $rootScope.studentDetails = student;
            $state.go('updateStudentPage');
        };
        vm.findStudent = function(){
            studentDetailsService.findStudent($scope.firstName).then(function (result) {
                if (result) {
                    $scope.students = result.data;
                        
                }
            });
        };
        vm.clear = function(student){
            $scope.firstName = '';
            vm.getStudents();
        };
        vm.getStudents();
    };

    studentDetailsCtrl.$inject = ['$stateParams','studentDetailsService','$scope','$location','$rootScope','$state','$window'];
    app.controller('studentDetailsCtrl', studentDetailsCtrl);
}(angular.module("app")));