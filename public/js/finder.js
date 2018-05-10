
var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.5696112, lng: -111.8955148 },
        zoom: 19
    });

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
// google places search to find Bathrroms and plotting them on the map            
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
            var infoWindow = new google.maps.InfoWindow({
                content: '<h1>Whatever we want</h1>' 
            });
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
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
        directionsDisplay = new googl.maps.DirectionRenderer(),
        request = { 
            origin: origin,
            destination: destination,
            travelMode: 'WALKING'
        }
    directionsDisplay.setMap(map);
    directionsService.route(request, (result, status) => {
        if (status == 'ok') {
            directionsDisplay.setDirections(result);
        }
    })
}


