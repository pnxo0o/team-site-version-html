var mapLocation = new google.maps.LatLng(-33.03679, -71.5324478); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 11, //change zoom here
        center: mapLocation,
        scrollwheel: false,
				styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]
                
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    
    
    //change address details here
    var contentString = '<div class="map-info-box">' 
    + '<div class="map-head">' 
    + '<h3>Launch</h3></div>' 
    + '<p class="map-address"><i class="fa fa-map-marker"></i> Viña del Mar, Chile <br><i class="fa fa-phone"></i> +56 9 5879 6712<br><span class="map-email"><i class="fa fa-envelope"></i> braindev@gmail.com</span></p>' 
    + '<p><a href="https://www.google.com/maps/place/Miraflores,+Vi%C3%B1a+del+Mar,+Regi%C3%B3n+de+Valpara%C3%ADso,+Chile/@-33.03679,-71.5324478,17z/data=!3m1!4b1!4m2!3m1!1s0x9689de63fb06f1b7:0x9aa7bfce62d57b12" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    
    
    var image = 'img/flag.png';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Site Name', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
