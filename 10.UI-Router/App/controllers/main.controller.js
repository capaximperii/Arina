var app = angular.module('myApp');


app.controller('MainCtrl', function ($scope, $state) {
	$state.go('One');
});
