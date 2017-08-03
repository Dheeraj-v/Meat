
var app = angular.module('newsApp', ['ngRoute']); //angularjs in-built directive

app.config(function($routeProvider) { //router for single page application 
  
$routeProvider
    .when('/', { //default path
      templateUrl : 'home.html', //home.html is a view file
      controller : 'mainCtrl' //respective controller for home.html
    })
    // login
    .when('/login', {
      templateUrl : 'login.html',
      controller : 'mainCtrl'
    })
    // register
    .when('/register', {
      templateUrl : 'register.html',
      controller : 'mainCtrl'
    })
});

app.controller('mainCtrl',function(){ //main controller
   
});





