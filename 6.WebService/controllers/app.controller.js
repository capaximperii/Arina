 
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {

	$scope.users = [{fName: "luv", lName: "singh" },{fName: "Arina", lName: "Zv"}];

	$scope.updateData = function() {
    $http.get("data/users.json")
    	.then( function(response) {
        	$scope.users = response.data;
    	});	
    }

});
