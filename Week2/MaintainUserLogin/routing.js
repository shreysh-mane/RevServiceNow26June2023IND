app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl:'signIn.html'
    }).when('/signup',{
        templateUrl:'signUp.html',
        controller:'signUpCtrl'
    }).when('/dashboard',{
        templateUrl:'dashboard.html'
    }).when('/category',{
    templateUrl:'category.html'
    }).otherwise({
        redirectTo: '/'
    });

});