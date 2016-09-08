


$(document).ready(function(){

	var myLatLng;

	var map = new google.maps.Map(document.getElementById('map'), {
          center: {
          	lat: 40.4703,
          	lng: 0.4756
          },
          scrollwheel: false,
          zoom: 14,
          disableDefaultUI: true,
          streetViewControl: true,
          mapTypeControl: true

        });

	navigator.geolocation.watchPosition(function (position){
		var myLatLng = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};

		var marker = new google.maps.Marker({
			    position: myLatLng,
			    map: map,
			    title: 'Aquí estoy yo',
			    icon: {
				path: google.maps.SymbolPath.CIRCLE,
					scale: 6
					}
		  	});
		});
});


