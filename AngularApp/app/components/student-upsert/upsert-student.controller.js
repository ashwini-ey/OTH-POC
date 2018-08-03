(function (app) {
    'use strict';

    let upsertStudentCtrl = function ($stateParams,upsertStudentService,$scope,$rootScope,$state) {

        $scope.student = $rootScope.studentDetails;

        $scope.upsertStudent = function() { 
            if($scope.student.id){
                upsertStudentService.updateStudent($scope.student).then(function (result) {
                    if (result.data) {
                            alert('Student updated successfully!');  
                            $state.go('getStudents');
                    }
                });
            }else{
                upsertStudentService.addStudent($scope.student).then(function (result) {
                    if (result.data) {
                            alert('Student added successfully!');  
                            $state.go('getStudents');
                    }
                });
            }
           
        };
    };

    upsertStudentCtrl.$inject = ['$stateParams','upsertStudentService','$scope','$rootScope','$state'];
    app.controller('upsertStudentCtrl', upsertStudentCtrl);
}(angular.module("app")));