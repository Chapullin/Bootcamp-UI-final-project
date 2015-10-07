app.factory('responseTimeline', function ($http) {
	var query = function (params, cb) { // cb = callback
		 if (params && params.url && params.url.length) {
		$http({
			method: params.methos || 'GET',
			url: params.url,
			data: params.data || {}
		} )
	.then(function (res) { // success
		cb(res.data);
        }, function (res) { // error
        	console.log('an error was ocurred' , error , ' res= ' , res);
        })
}
	};

	return {
		query: query
	};
});


