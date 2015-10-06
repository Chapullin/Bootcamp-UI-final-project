var app = angular.module('myApp', []);
var date;

app.controller('TwitterServerCtrl', function($scope, $http) {
	$http.get("http://localhost:3000/timeline")
	.success(function (response) {
		$scope.names = response;
		
	});

	$scope.date = ((new date()) - $scope.names.user.created_at);
}).
	controller('TrendsCtrl', function ($scope, $scope.names) {
		
	}

		)
	;


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/trends.html',
        controller: 'TrendsCtrl'
      }).
      when('/movies/:id', {
        templateUrl: 'app/partial/movie-detail.html',
        controller: 'MovieDetailsCtrl'
      }).
      when('/edit/:id', {
        templateUrl: 'app/partial/movie-form.html',
        controller: 'MovieEditCtrl'
      }).
      
      otherwise({
        redirectTo: '/'
      });
  }]); 