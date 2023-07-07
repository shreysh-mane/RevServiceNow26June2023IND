var app= angular.module("app",[]);
app.controller('LoginCtrl',['$scope','userService',function($scope,userService){
    $scope.toggle=true;
    // $scope.a=10;

    //User Array:

    // var userData=[];

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
        userService.registerUser(user,function(data){
            
            console.log(data);
        
        });


    }

    $scope.signIn=function(){
        var flag=true;

        userService.getUsers(function (data){
            
            userData=data;
            for(user of userData){
                if(user.email==$scope.useremail && user.password==$scope.userpass){
                    
                    console.log("Sucess");
                    $scope.failed=false;
                    flag=false;
                }
            }
            if(flag){
                $scope.failed=true;
                console.log("Failed");
            }
        });   

    }

}]);