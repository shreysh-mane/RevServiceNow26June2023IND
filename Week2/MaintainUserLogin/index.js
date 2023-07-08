var app=angular.module('app',['ngRoute']);

app.run(['$rootScope', function($rootScope) {
    $rootScope.loggedIn = false;
}]);

app.controller("indexCtrl",['$scope','$rootScope','$window',function($scope,$rootScope,$window){
    $scope.username="a";
    $scope.city="Mumbai";

    var storedData = $window.localStorage.getItem('user');
    if (storedData) {
        $rootScope.loggedIn=true;

    }else{
        $rootScope.loggedIn=false;
    }

}]);

