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
  }).

factory('geolocalisation', function ($http) {
  var coords,
      getUserCoords = function (cb) { // cb = callback
        if (!coords && navigator.geolocation) { // if coords haven't been determined yet and if browser allows to get them
          navigator.geolocation.getCurrentPosition(function (pos) { // user shared his coords
            onUserChoice(cb, pos);
          }, function () { // user didn't share his coords
          onUserChoice(cb);
        });
        } else { // else, if coords are already determined or browser doesn't allow to get them
        cb(coords);
      }
    },
    onUserChoice = function (cb, pos) {
      if (pos) {
        coords = pos;
      }

      cb(coords);
    };

    return {
      canGetCoords: navigator.geolocation,
      getUserCoords: getUserCoords
    };
  });
