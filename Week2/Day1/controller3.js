var app=angular.module("app",[]);

app.controller("demoController",['$scope',function($scope){
    $scope.a="A";

    var arr=[10,20,30,40];

    $scope.arr=arr;

    $scope.userObj={
        name:"Raj",
        age:20
    }


    
}]);