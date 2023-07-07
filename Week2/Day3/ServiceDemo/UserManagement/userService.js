app.service('userService',['$http',function($http){

    

    this.getUsers=function(cb){
       
        $http({
            method:'GET',
            url:("http://localhost:3000/users")
        }).then(function(myData){
                  cb(myData.data);
        },function(error){
            console.log(error);
        });

    }


    this.registerUser=function(user){
        console.log("Inside Service");
        console.log(user);

        $http({
            method:'POST',
            url:("http://localhost:3000/users"),
            data:user
        }).then(function (response) {
            console.log(response)
        },function(error) {
            console.log(error)
        })

    }


}]);