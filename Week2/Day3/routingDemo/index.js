var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl:'signIn.html'
    }).when('/signup',{
        templateUrl:'signUp.html',
        controller:'signUpCtrl'
    }).when('/dashboard',{
        templateUrl:'dashboard.html'
    }).otherwise({
        redirectTo: '/'
    });

});