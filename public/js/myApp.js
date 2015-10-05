var app = angular.module('myApp', []);

console.log('BEFORE trying conect with the server');

app.controller('TwitterServerCtrl', function($scope, $http) {
	$http.get("http://localhost:3000/timeline")
	.success(function (response) {
		$scope.names = response;
		console.log('inside de function');
	});
});

console.log('AFTER trying conect with the server');

