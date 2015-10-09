app.controller('TimeLineCtrl', ['$scope', '$routeParams', '$location', 'ajax', function ($scope, $routeParams,$location, AJAX){
	console.log('controller TimeLineCtrl------------------------------');
	var timeline = (function () {
		$scope.loading = true;
		AJAX.query({
			url: 'http://localhost:3000/timeline',
        }, function (data) { // callback
        	$scope.loading = false;
            console.log('data= ', data);
            if (data) {
              $scope.timeline= data;
          }
      });
	})();
    }]).

    controller('TrendsListCtrl', ['$scope', '$routeParams', 'ajax', 'geolocalisation', function ($scope, $routeParams, AJAX, GEOLOCALISATION){
       console.log('under TrendsCtrl <<<<<<<<<<<<<<<<<<<');
       var geo = function (){
            GEOLOCALISATION.getUserCoords(function (coordinates) {
              //http://localhost:3000/myplace?lat=-38.7116780&long=-62.2680780
              $scope.msgCoordinates = coordinates
                                  ? 'lat=' + coordinates.coords.latitude + '\&long=' + coordinates.coords.longitude
                                  : 'Coordinates couldn\'t be determined.';
              $scope.$apply(); // assure that $scope changes are applied to the view
          });
        };

        $scope.geo = geo;
        $scope.coordsAvailable = GEOLOCALISATION.canGetCoords;
       

        if ($scope.coordsAvailable) {
            AJAX.query({
             url: ('http://localhost:3000/myplace?'+ $scope.msgCoordinates),
                }, function (data) { // callback
                  if (data) {
                      $scope.idCountry = data.woeid;
                  }
              });
        } else{
            $scope.idCountry = 23424747;
        };

        



       var trends = (function () {
          $scope.loading = true;

          AJAX.query({
             url: ('http://localhost:3000/trends?id='+ $scope.idCountry),
                }, function (data) { // callback
                	$scope.loading = false;
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
          AJAX.query({
             url: ('http://localhost:3000/search?q='+ $routeParams.query),
                }, function (data) { // callback
                	console.log('con + http://localhost:3000/search?q='+ $routeParams.query);
                	$scope.loading = false;
                	if (data) {
                     $scope.id = $routeParams.id;
                     $scope.trend = data;   
                 }
             });
      })();
    }]).

    controller('TrendTwitDetailCtrl',['$scope', '$routeParams', 'ajax',function ($scope, $routeParams, AJAX){
        console.log('controller TrendTwitDetailCtrl ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        var trend = (function () {
            console.log('$routeParams.query= ',$routeParams.query);
            $scope.loading = true;
            console.log('$routeParams.query= ',$routeParams.query);
            window.alert('no estamos todos localhost');
            AJAX.query({
                url: ('http://localhost:3000/search?q='+ $routeParams.query),
                }, function (data) { // callback
                    $scope.loading = false;
                    if (data) {
                        $scope.trend= data;
                        window.alert('mira la console guapeton!!!');
                        console.log('$routeParams= ', $routeParams);
                        $scope.id = $routeParams.id;
                        for (var i = 0; i < data.length; i++) {
                            window.alert('mira la console guapeton!!!');
                            console.log('data= ', data);
                            if (data[i].id == $routeParams.id) {
                                $scope.twitt = data[i];
                                
                            }};
                        }
                    });
        })();
    }])
;