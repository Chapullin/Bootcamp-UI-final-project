var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: '/timeline.html',
			controller: 'TimeLineCtrl'
		}). 
		when('/trends', {
			templateUrl: '/trends.html',
			controller: 'TrendsListCtrl'
		}).
		when('/search/trends/:query', {
			templateUrl: '/trends-search.html',
			controller: 'TrendsSearchCtrl'
		}).
		when('/search/trends/twit/:query', {
			templateUrl: '/trend-tweet-detail.html',
			controller: 'TrendTwitDetailCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]); 

