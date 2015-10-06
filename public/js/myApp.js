var app = angular.module('myApp', ['ngRoute']);


app.controller('TimeLineCtrl',  function ($scope, $http) {
	$http.get("http://localhost:3000/timeline")
	.success(function (response) {
		$scope.timeline = response;
	})}).

	controller('TwittDetailCtrl',  function ($scope, $http, $routeParams) {
		$http.get("http://localhost:3000/timeline?count=100")
		.success(function (response, $scope, $routeParams) {
			$scope.timeline = response;
			$scope.id = $routeParams.id;
			for (var i = 0; i < 100; i++) {
				if ($scope.timeline[i].id === $routeParams.id) {
					$scope.twitt = $scope.timeline[i];
				}};
			})}).

	controller('TrendsCtrl',  function ($scope, $http, $routeParams) {
		$http.get("http://localhost:3000/trends?id=23424747")
		.success(function (response, $scope, $routeParams) {
			$scope.trends = response;
			})
	});


	app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/', {
				templateUrl: '/timeline.html',
				controller: 'TimeLineCtrl'
      }). 
			when('/:id', {
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