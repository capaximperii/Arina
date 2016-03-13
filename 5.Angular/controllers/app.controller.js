 
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

	$scope.form = {};
	$scope.form.email = "az@epita.com";
	$scope.form.password = "secret";
	$scope.rememberMe = false;

	$scope.submitClicked = function() {
		$scope.form.email = $scope.form.email.toUpperCase();
		$scope.form.password = $scope.form.password.toUpperCase();
	}

});
