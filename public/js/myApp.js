var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/', {
				templateUrl: '/timeline.html',
				controller: 'TimeLineCtrl'
      }). 
			when('/twit/:id', {
				templateUrl: '/twitt-detail.html',
				controller: 'TwittDetailCtrl'
			}).
			when('/trends', {
				templateUrl: '/trends.html',
				controller: 'TrendsCtrl'
			}).

			otherwise({
				redirectTo: '/'
			});
		}]); 

	