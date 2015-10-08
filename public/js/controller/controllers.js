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
	       		for (var i = 0; i < data.length; i++) {
        			if (data[i].id == $routeParams.id) {
        				$scope.twitt = data[i];
        				
        			}};
        		}
        	});
	})();
}]).


controller('TrendsCtrl', ['$scope', '$routeParams',  'ajax', function ($scope, $routeParams, AJAX){
	console.log('under TrendsCtrl <<<<<<<<<<<<<<<<<<<');
	var trends = (function () {
		$scope.loading = true;

		AJAX.query({
			url: 'http://localhost:3000/trends?id=23424747',
        }, function (data) { // callback
        	$scope.loading = false;
        	console.log(data);
        	if (data) {
        		$scope.trends= data;
        	}
        });
	})();
}]).

controller('TrendsSearchCtrl',['$scope', '$routeParams', 'ajax',function ($scope, $routeParams, AJAX){
	console.log('controller TrendsListCtrl------------------------------');
	var trend = (function () {
		$scope.loading = true;
		console.log('http://localhost:3000/search?q=', $routeParams.query);
		console.log
		AJAX.query({
			url: ('http://localhost:3000/search?q='+ $routeParams.query),
        }, function (data) { // callback
        	console.log('con , http://localhost:3000/search?q=', $routeParams.query);
        	console.log('con + http://localhost:3000/search?q='+ $routeParams.query);
        	$scope.loading = false;
        	if (data) {
        		$scope.trend= data;
        		$scope.id = $routeParams.id;
	       		if (data) {
    				window.alert('adentro del if');
    				$scope.twitt = data[i];
        			};
        		}
        	});
	})();
}]).


;

