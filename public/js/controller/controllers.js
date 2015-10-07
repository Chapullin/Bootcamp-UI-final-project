app.controller('TimeLineCtrl', ['$scope', '$routeParams', '$location', 'ajax', function ($scope, $routeParams,$location, AJAX){
	console.log('controller TimeLineCtrl------------------------------');
	var timeline = (function () {
		$scope.loading = true;
		AJAX.query({
			url: 'http://localhost:3000/timeline',
        }, function (data) { // callback
        	$scope.loading = false;
        	if (data) {
        		$scope.timeline= data;
        	}
        });
	})();
	$scope.go = function ( path ) {
		$location.path( path );
		console.log('path = ',path);
	};
}]).

controller('TwittDetailCtrl',['$scope', '$routeParams', 'ajax',function ($scope, $routeParams, AJAX){
	console.log('controller TwittDetailCtrl------------------------------');
	var timeline = (function () {
		$scope.loading = true;
		AJAX.query({
			url: 'http://localhost:3000/timeline',
        }, function (data) { // callback
        	$scope.loading = false;
        	if (data) {
        		$scope.timeline= data;
        		$scope.id = $routeParams.id;
        		console.log('data =' , data);
        		console.log('$scope.timeline =' , $scope.timeline);
        		console.log('$routeParams.id =' , $routeParams.id);
        		console.log('data.length =' , data.length);
	       		for (var i = 0; i < data.length; i++) {
        			console.log('estoy dentro del for');
        			console.log(' $routeParams.id=', $routeParams.id );
        			console.log('data[i].id = ', data[i].id);
        			if (data[i].id == $routeParams.id) {
        				console.log('estoy dentro del if');
        				window.alert('adentro del if');
        				console.log('we are inside de if data[i].id === $routeParams !!!!');
        				$scope.twitt = data[i];
        				console.log(' data[i]=', data[i]);
        				console.log(' i=',i );
        				
        			}};
        		}
        	});
	})();
}]).

controller('TrendsCtrl',  function ($scope, $http, $routeParams) {
	$http.get("http://localhost:3000/trends?id=23424747")
	.success(function (response) {
		$scope.trends = response;
	})
});

