app.controller('signUpCtrl',['$scope','$location',function($scope,$location){

        $scope.name="Deepak";

        $scope.redirect=function(){
            $location.path('/dashboard');
        }
}]);