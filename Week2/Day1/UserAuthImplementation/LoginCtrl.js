var app= angular.module("app",[]);
app.controller('LoginCtrl',['$scope',function($scope){
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
     
      
        var obj={
            name:$scope.username,
            email:$scope.useremail,
            password:$scope.userpass
        }

        userData.push(obj);
        console.log(userData);

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