var app = angular.module('myApp');

app.config(function ($stateProvider) {
	$stateProvider
		.state('menubar-page', {
	        'abstract': true,
	        views: {
	            'menubar@': {
	                templateUrl: '/html/leftmenu.html'
	            }
	        }
	    })
		.state('One', {
			parent: 'menubar-page',
			url: '/One',
			views: {
				'content@': {
					templateUrl: '/html/one.html',
					controller: 'OneCtrl'
				}
			}
		})
		.state('Two', {
			parent: 'menubar-page',
			url: '/Two',
			views: {
				'content@': {
					templateUrl: '/html/two.html',
					controller: 'TwoCtrl'
				}
			}
		});
	});