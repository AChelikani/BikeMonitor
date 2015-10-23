var x = document.getElementById("weather");
var y = document.getElementById("weatherDescription");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	console.log(lat + " " + lon);
	var url = "http://api.wunderground.com/api/08a9bb3c593a3b4d/conditions/forecast/alert/q/" + lat + "," + lon + ".json";
	$.getJSON(url, function(data) {
		x.innerHTML = data.current_observation.temp_f + " °F";
		y.innerHTML = data.current_observation.weather;
	});
}

getLocation();