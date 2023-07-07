app.service('demoService',['$http',function($http){

    var arr=[10,20,13];

    this.getData=function(cb){
       
        $http({
            method:'GET',
            url:("http://localhost:3000/users")
        }).then(function(response){

            cb(response.data);
            // return response.data;

        },function(error){
            console.log(error);
        })

       

    }


    this.addData=function(ele){
        arr.push(ele);
    }


}]);