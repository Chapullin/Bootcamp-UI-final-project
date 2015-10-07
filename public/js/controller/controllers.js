app.controller('TimeLineCtrl', ['$scope', '$routeParams', 'responseTimeline', function ($scope, $routeParams, response){
	console.log('controller TimeLineCtrl------------------------------');

	var timeline = function () {
		$scope.loading = true;
		AJAX.query({
		url: 'http://localhost:3000/timeline',
        }, function (data) { // callback
        	$scope.loading = false;
        	if (data) {
        		/*$scope.timeline = data;*/
        		console.log('we entry to the if');
        		console.log('data= ', data);
        		console.log('$scope.timeline= ' , $scope.timeline);
        		console.log('$scope.timeline[0]= ' , $scope.timeline[0]);
        	}
        });
	};
	$scope.timeline= timeline;
	
		/*console.log('$routeParams.id= ' + $routeParams.id);	
			console.log('$routeParams= ' + $routeParams);
			console.log('$scope.timeline[i].id= ' + $scope.timeline[i].id); */
		}]).

	/*controller('TwittDetailCtrl',  function ($scope, $routeParams, $http) {
		$http.get("http://localhost:3000/timeline?count=10")
		.success(function (response) {
			$scope.timeline = response;
			$scope.id = $routeParams.id;
			console.log('$routeParams.id= ' + $routeParams.id);	
			console.log('$routeParams= ' + $routeParams);
			console.log('response= ' + response);
			console.log('$scope.timeline= ' + $scope.timeline);
			console.log('$scope.timeline[i]= ' + $scope.timeline[i]);
			console.log('$scope.timeline[i].id= ' + $scope.timeline[i].id);
			for (var i = 0; i < 100; i++) {
				if ($scope.timeline[i].id === $routeParams.id) {
					$scope.twitt = $scope.timeline[i];
				}};
			})}). */

controller('TrendsCtrl',  function ($scope, $http, $routeParams) {
	$http.get("http://localhost:3000/trends?id=23424747")
	.success(function (response) {
		$scope.trends = response;
	})
});

