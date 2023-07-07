var app= angular.module("app",[]);
app.controller('LoginCtrl',['$scope','userService',function($scope,userService){
    $scope.toggle=true;
    // $scope.a=10;

    //User Array:

    var userData=[];

    $scope.changeView=function(){
    
    $scope.toggle=!$scope.toggle;

    }

    // Registration Handling
    $scope.username;
    $scope.useremail;
    $scope.userpass;

    $scope.signUp=function(){
     
      
        var user={
            name:$scope.username,
            email:$scope.useremail,
            password:$scope.userpass
        }
        userService.registerUser(user);


    }

    $scope.signIn=function(){
        var flag=true;
        for(user of userData){
            if(user.email==$scope.useremail && user.password==$scope.userpass){
                
                console.log("Sucess");
                flag=false;
            }
        }
        if(flag){
            console.log("Failed");
        }

    }

}]);