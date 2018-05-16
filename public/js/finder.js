$("#ratings").hide();
var map, infoWindow, infoWindowo;
window.onload = function () {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {
            direction: 'left'
        });
    });
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.5696112, lng: -111.8955148 },
        zoom: 19
    });
    let autocomplete = new google.maps.places.Autocomplete();

    autocomplete.bindTo('bounds', map);
    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
    })

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var mymarker = new google.maps.Marker({
                map: map,
                position: pos,
                title: 'current location',
                icon: '../images/yourloc.png'

            });


            //infoWindow.setPosition(pos);
            //infoWindow.setContent('Location found.');
            //infoWindow.open(map);
            map.setCenter(pos);
            // google places search to find Bathrooms and plotting them on the map            
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location: pos,
                radius: 100,
                type: ['bathroom']
            }, callback);
        });

        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                icon: '../images/maptoilet.svg'
            });
            var contentString =
                '<link rel="stylesheet" href="css/style.css">' +
                '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">' +
                '<h1 id="firstHeading" class="firstHeading">Omega Review</h1>' +
                '<h3>' + place.name + '</h3>' +
                '<h4>' + place.vicinity + '</h4>' +
                // '<h4>' + stars + '</h4>'
                // '<h4>' + comment+ '</h4>'
                // '<span class="fa fa-star checked"></span>' +
                // '<span class="fa fa-star checked"></span>' +
                // '<span class="fa fa-star checked"></span>' +
                // '<span class="fa fa-star"></span>' +
                // '<span class="fa fa-star"></span>' +
                // '<br>' +
                // '<br>' +
                // '<img src="../images/publicbathroom.jpeg">' +
                '<div id="dmap"></div>' +
                // '<div class="hidden" id=location>' + place.id + '</div>' +
                '<a href="../rating.html"><button id="rateButton">Rate This Bathroom</button></a>';
            const infoWindowo = new google.maps.InfoWindow({
                content: contentString
            });
            marker.addListener('click', function () {
                $.get("/api/rating/location/" + place.id, function (data, status) {
                    //WORKING
                    // console.log("Data", data[0].comment, data[0].stars);
                    var comment = data[0].comment;
                    var stars = data[0].stars;
                    $("#ratings").html("Comment: " + comment + "<br>" + "Rating: " + stars);
                    $("#ratings").show();
                });
                google.maps.event.addDomListener(window, 'resize', function() {
                    infoWindowo.open(map, marker);
                  });
                
            });

        }
    } function handleLocationError() {
        handleLocationError(true, infoWindow, map.getCenter());
    };
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

const colculateAndRenderDirections = (origin, destination) => {
    let directionsService = new google.maps.DirectionsService(),
        directionsDisplay = new google.maps.DirectionRenderer(),
        request = {
            origin: origin,
            destination: destination,
            travelMode: 'WALKING'
        }
    directionsDisplay.setMap(dmap);
    directionsService.route(request, (result, status) => {
        if (status == 'ok') {
            directionsDisplay.setDirections(result);
        }
    })
}

//This function grabs the location from the database and updates the view
function getRatings(location) {
    var placeId = location || "";
    if (placeId) {
      placeId = "/rating/location/: " + placeId;
    }
    $.get("/api/rating/location/: " + placeId, function(data) {
      console.log("Comments" + data.comments);
    //   ratings = data;
    //   if (!ratings || !ratings.length) {
    //     displayEmpty();
    //   }
    //   else {
    //     initializeRows();
    //   }
    });
  }


