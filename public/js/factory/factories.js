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
      getUserCoords = function (cb) { 
        console.log('we are inside of function getUserCoords ' );
            if (!coords && navigator.geolocation) { // if coords haven't been determined yet and if browser allows to get them
              console.log(' we are inside of the if !coords && navigator.geolocation' );
              navigator.geolocation.getCurrentPosition(function (pos) { // user shared his coords
                onUserChoice(pos);
                console.log('ohhhsole mio');
                console.log('pos=', pos);
              }, function () { // user didn't share his coords
              onUserChoice(cb);
              console.log('ohhhsole mio 2');
            }); 
            } else { // else, if coords are already determined or browser doesn't allow to get them
            cb(coords);
            window.alert('uops!! coords are already determined or browser doesnt allow to get them');
          }
        },
        onUserChoice = function (pos) {
          console.log('we are inside of onUserChoice');
          if (pos) {
            console.log('we are inside the if');
            coords = pos;
            console.log('coords = ', coords);
          }
        };

        return {
          canGetCoords: navigator.geolocation,
          getUserCoords: getUserCoords
        };
      });