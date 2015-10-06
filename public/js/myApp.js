var app = angular.module('myApp', []);
var date;

console.log('BEFORE trying conect with the server');

app.controller('TwitterServerCtrl', function($scope, $http) {
	$http.get("http://localhost:3000/timeline")
	.success(function (response) {
		$scope.names = response;
		console.log('inside de function');
	});

	$scope.date = ((new date()) - $scope.names.user.created_at);
});

console.log('AFTER trying conect with the server');

