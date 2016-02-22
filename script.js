// Code goes here

var app = angular.module('myApp', ['ui.bootstrap.datetimepicker', 'ui.dateTimeInput']);

/* $http ajax calls really belongs in a service, 
but I'll be using them inside the controller for this demo */ 

app.controller('myCtrl', function($scope, $http) {
  /*$http.get('path/to/json').then(function(data) {
    $scope.languages = data;
  });*/
  //inputting json directly for this example
  $scope.test = {date2: 1455238150000};
  
  $scope.save = function() {
    		
    /*		$http.post('http://10.12.177.207:8000/dd_v1/manager/', $scope.test).success(function(data) {
    			//$scope.submitter="success";
      			$scope.response = data;
    		}).error(function(data) {
	  	  		//console.log("data posting failure");
	  	  		//$scope.submitter="error";
	  	  		$scope.response = data;
  	  		}); 
  	 */		
    /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
      $scope.msg = 'Data saved';
    });*/
    $scope.msg = 'Data sent: '+ JSON.stringify($scope.test);
  };

});
