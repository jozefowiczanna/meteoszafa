$(document).ready(function(){

const citiesGeo = {
		"Białystok": {
			"lat": 53.1325,
			"lon": 23.1688
		},
		"Bydgoszcz": {
			"lat": 53.1235,
			"lon": 18.0084
		},
		"Gdańsk": {
			"lat": 54.3520,
			"lon": 18.6466
		},
		"Katowice": {
			"lat": 50.2649,
			"lon": 19.0238
		},
		"Kraków": {
			"lat": 50.0647,
			"lon": 19.9450
		},
		"Lublin": {
			"lat": 51.2465,
			"lon": 22.5684
		},
		"Łódź": {
			"lat": 51.7592,
			"lon": 19.4560
		},
		"Poznań": {
			"lat": 52.4064,
			"lon": 16.9252
		},
		"Szczecin": {
			"lat": 53.4285,
			"lon": 14.5528
		},
		"Warszawa": {
			"lat": 52.2297,
			"lon": 21.0122
		},
		"Wrocław": {
			"lat": 51.1079,
			"lon": 17.0385
		}
	};

	const icons = {
		"clear-day" : {
			icon : "sun",
			pl : "Bezchmurnie"
		},
		"clear-night" : {
			icon : "moon-50",
			pl : "Bezchmurnie"
		},
		"rain" : {
			icon : "cloud-rain",
			pl : "Deszcz"
		},
		"snow" : {
			icon : "cloud-snow",
			pl : "Śnieg"
		},
		"sleet" : {
			icon : "cloud-drizzle",
			pl : "Deszcz ze śniegiem"
		},
		"wind" : {
			icon : "wind",
			pl : "Wiatr"
		},
		"fog" : {
			icon : "fog",
			pl : "Mgła"
		},
		"cloudy" : {
			icon : "cloud",
			pl : "Zachmurzenie"
		},
		"partly-cloudy-day" : {
			icon : "cloud-sun",
			pl : "Średnie zachmurzenie"
		},
		"partly-cloudy-night" : {
			icon : "cloud-moon",
			pl : "Średnie zachmurzenie"
		},
		"hail" : {
			icon : "sun",
			pl : "Grad"
		},
		"thunderstorm" : {
			icon : "cloud-lightning",
			pl : "Burzowo"
		},
		"tornado" : {
			icon : "tornado",
			pl : "Tornado"
		}
	};

	function template(){
		const cityName = "Poznań"
		const iconName = "partly-cloudy-night";
		const icon = document.querySelector(".icon");
		icon.classList.remove(icon.classList[1]);
		icon.classList.add("diw-" + icons[iconName].icon);
		const summary = "Niewielkie zachmurzenie, ustanie wieczorem, po południu słaby wiatr.";
		const shortSummary = "Średnie zachmurzenie";
		const sevenDaysSummary = "Dzisiaj niewielki deszcz, w sobotę ocieplenie do 17°C.";
		const temp = 3.7 + "°C";
		const apparentTemp = -2 + "°C";
		const clouds = 0.35 * 100 + "%";
		const humidity = .87 * 100 + "%";
		const windSpeed = 14 + " km/h";
		const windDeg = 310;
		// document.querySelector(".windarrow").style.transform = `rotate(${windDeg}deg)`;

		$(".city").text(cityName);
		$(".currently-temp").text(temp);
		$(".summary").text(summary);
		$(".temp").text(temp);
		$(".apparent-temp").text(apparentTemp);
		$(".clouds").text(clouds);
		$(".humidity").text(humidity);
		$(".wind").html(`
			<span class="wind-speed">${windSpeed}</span>
			<img class="windarrow" src="images/windarrow.svg" alt="kierunek wiatru">
			`);
		$(".windarrow").css("transform", `rotate(${windDeg}deg) scale(1.3)`);
	}

		template();

		// document.querySelector(".btn-city").addEventListener("click", template)

	function processData(data, city){
		console.log(data);
		const iconName = data.currently.icon;
		const icon = document.querySelector(".icon");
		icon.classList.remove(icon.classList[1]);
		icon.classList.add("diw-" + icons[iconName].icon);
		const summary = data.currently.summary;
		const shortSummary = icons[iconName].pl;
		const sevenDaysSummary = data.currently.daily.summary;
		const temp = data.currently.temperature + "°C";
		const apparentTemp = data.currently.apparentTemperature + "°C";
		const clouds = data.currently.cloudCover * 100 + "%";
		const humidity = data.currently.humidity * 100 + "%";
		const windSpeed = data.currently.windSpeed + " km/h";
		const windDeg = data.currently.windBearing;
		console.log(summary, temp, apparentTemp, clouds, humidity, windSpeed, windDeg);
		document.querySelector(".windarrow").style.transform = `rotate(${windDeg}deg)`;
	}

	// document.querySelector(".btn-city").addEventListener("click", function(){
	//
	// 	const city = document.querySelector(".select-city").value;
	// 	$.ajax({
	// 		 url: "https://api.darksky.net/forecast/82dd8519eb0941abad295fda7a5ed88e/"
	// 		 +citiesGeo[city].lat+","
	// 		 +citiesGeo[city].lon
	// 		 +"?lang=pl&units=ca",
	// 		 dataType: 'jsonp',
	// 		 success: function(data){
	// 			 processData(data, city);
 	// 		 }
 	//  });


	})

// clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night. (Developers should ensure that a sensible default is defined, as additional values, such as hail, thunderstorm, or tornado, may be defined in the future.)








// })
