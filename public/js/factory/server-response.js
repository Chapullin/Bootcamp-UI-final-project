app.factory('responseTimeline', function ($http) {
	var query = function (params, cb) { // cb = callback
		$http.get("http://localhost:3000/timeline")
	.then(function (res) { // success
		cb(res.data);
        }, function (res) { // error
        	console.log('an error was ocurred' + error + ' res= ' + res);
        })

	};

	return {
		query: query
	};
});


