console.log ('test')

function initMap() {
	var mapOptions = {
		center: {lat: 30.2500, lng: -97.7500},
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		mapTypeControl: false,
		streetViewControl: false,
			zoomControlOptions: {
        	position: google.maps.ControlPosition.RIGHT_TOP
        }

	}

	var map = new google.maps.Map(document.getElementById("map"),mapOptions);

	var myMapStyles = [
	  {
	    stylers: [
	      { hue: "#00ffe6" },
	      { saturation: -20 }
	    ]
	  },{
	    featureType: "road",
	    elementType: "geometry",
	    stylers: [
	      { visibility: "simplified" }
	    ]
	  },{
	    featureType: "road",
	    elementType: "labels",
	    stylers: [
	      { color: "#ef6a5a" },
	      { weight: "1" }
	    ]
	  }
	];

	map.setOptions({styles: myMapStyles});
}



// function initMap() {
//   var mapOptions = {
//     zoom: 4,
//     center: {lat: -33, lng: 151},
//     disableDefaultUI: true
//   }
//   var map = new google.maps.Map(document.getElementById("map"),
//        mapOptions);
// }

// mapTypeID: google.maps.MapTypeID.TERRAIN;