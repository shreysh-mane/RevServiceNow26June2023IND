app.controller('signUpCtrl',['$scope','$location','$rootScope','$window',function($scope,$location,$rootScope,$window){

    $scope.name="Deepak";

    

    $scope.redirect=function(){
        $rootScope.loggedIn = true;

        $window.localStorage.setItem('user', JSON.stringify({name:"abc",age:20}));

        $location.path('/dashboard');
    }
}]);