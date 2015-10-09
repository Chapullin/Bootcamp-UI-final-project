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
    })

  .factory('geolocalisation', function () {
      var coords,
      getUserCoords = function () { 
        console.log('we are inside of function getUserCoords ' );
            if (!coords && navigator.geolocation) { // if coords haven't been determined yet and if browser allows to get them
              console.log(' we are inside of the if !coords && navigator.geolocation' );
              navigator.geolocation.getCurrentPosition(function (pos) { // user shared his coords
                onUserChoice(pos);
              }, function () { // user didn't share his coords
              onUserChoice(cb);
            });
            } else { // else, if coords are already determined or browser doesn't allow to get them
            cb(coords);
          }
        },
        onUserChoice = function (pos) {
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