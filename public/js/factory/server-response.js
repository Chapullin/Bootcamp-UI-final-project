app.factory('ajax', function ($http) {
  var query = function (params, cb) { // cb = callback
    if (params && params.url && params.url.length) {
      $http({ // ajax
          method: params.method || 'GET',
          url: params.url,
          data: params.data || {}
        })
        .then(function (res) { // success
          cb(res.data);
        }, function (res) { // error

        });
    }
  };

  return {
    query: query
  };
});
