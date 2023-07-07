var app=angular.module('app',[]);

app.controller('demoCtrl',['$scope', 'demoService',function($scope,demoService){

    
    demoService.getData(function(data){
        console.log(data);
        $scope.arr=data;
    });
    

    // Won't work
    //  var data=demoService.getData();
    //  console.log(data);
  

}]);


app.controller('addCtrl',['$scope', 'demoService',function($scope,demoService){

    
    $scope.addEle=function(num){
        demoService.addData(num);
    }

}]);



