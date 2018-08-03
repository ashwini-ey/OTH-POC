(function () {
  "use strict";

  let app = angular.module("app", ['ui.router']);
  app.config(config);
  config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider'];
  function config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, adalProvider) {

    $locationProvider.hashPrefix('');
   
    $httpProvider.defaults.cache = false;

    $stateProvider
        .state('getStudents',
        {
            url: "/getStudents",
            templateUrl: "AngularApp/app/components/student-details/student-details.html",
            controller: 'studentDetailsCtrl',
            controllerAs: 'vm',
            
        })
        .state('addStudentPage',
        {
            url: "/addStudentPage",
            templateUrl: "AngularApp/app/components/student-upsert/upsert-student.html",
            controller: 'upsertStudentCtrl',
            controllerAs: 'vm',
            
        })
          
            .state('updateStudentPage',
            {
            url: "/updateStudentPage",
            templateUrl: "AngularApp/app/components/student-upsert/upsert-student.html",
            controller: 'upsertStudentCtrl',
            controlerAs: 'vm'
        })


        

    $urlRouterProvider.otherwise("/getStudents");
    
}

app.run(run);
    run.$inject = ['$rootScope'];
    function run($rootScope) {
        $rootScope._ = window._;
        
    }



  

})();
