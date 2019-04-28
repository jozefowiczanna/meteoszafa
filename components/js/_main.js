// _main.js

// NOTE skróty używane przy ANCHOR: c = const, f = function, e = event

$(document).ready(function(){

// ANCHOR c. lista miast, dł. i szer. geograficzna 

const citiesGeo = {
		"poznan": {
			"name": "Poznań",
			"lat": 52.4064,
			"lon": 16.9252
		},
		"lizbona": {
			"name": "Lizbona",
			"lat": 38.736946,
			"lon": -9.142685
		},
		"londyn": {
			"name": "Londyn",
			"lat": 51.509865,
			"lon": -0.118092
		},
		"reykjavik": {
			"name": "Reykjavik",
			"lat": 64.128288,
			"lon": -21.827774
		},
		"novosibirsk": {
			"name": "Novosibirsk",
			"lat": 55.018803,
			"lon": 82.933952
		},
		"kair": {
			"name": "Kair",
			"lat": 30.0626,
			"lon": 31.2497
		},
		"miedzywodzie": {
			"name": "Międzywodzie",
			"lat": 54.0064,
			"lon": 14.6958
		}
	};

	// ANCHOR c. lista ciuchów podzielona na kategorie
	const clothes = {
		"kurtki" :
			["kurtka jesienna", "kurtka letnia", "kurtka wiosenna", "kurtka zimowa", "kurtka przeciwwiatrowa", "płaszcz jesienny", "płaszcz letni", "płaszcz wiosenny", "płaszcz zimowy"],

		"czapki" :
			["czapka z daszkiem", "czapka zimowa", "kapelusz", "lekka czapka", "nauszniki"],

		"szaliki" :
			["chustka", "cienki szalik", "gruby szalik", "komin"],

		"rękawiczki" :
			["rękawiczki", "rękawiczki bez palców"],

		"buty" :
			["adidasy", "baleriny", "botki", "japonki", "kalosze", "kozaki", "obuwie trekkingowe", "sandały", "trampki", "śniegowce"]
	};
	
	// ANCHOR c. ikony pogody - główna wartość obiektów odpowiada nazwie z API; wartość "icon" odpowiada nazwie grafiki
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

	// ANCHOR  c. domyślna lista ciuchów dla każdego z warunków z osobna
	const defaultClothes = {
		"condition-1": ["czapka zimowa", "szalik", "buty zimowe", "rękawiczki"],
		"condition-2": ["lekka czapka", "chustka", "adidasy"],
		"condition-3": ["japonki", "krótkie spodenki"],
		"condition-4": ["nauszniki", "kurtka przeciwwiatrowa"],
		"condition-5": ["parasol", "peleryna"]
	}

// ANCHOR f. funkcja zwracająca tablicę z dniem tygodnia i data; dayNr = 0 oznacza dzisiaj, 1 - jutro, itd.

function getDate(dayNr) {
	function leadingZero(nr){
		nr = nr + "";
		const output = (nr.length === 1) ? "0" + nr : nr;
		return output;
	}
	const weekdays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
	let date = new Date();
	date.setDate(date.getDate() + dayNr);
	const day = leadingZero(date.getDate());
	const month = leadingZero(date.getMonth() + 1);
	const year = date.getFullYear();
	const weekday = weekdays[date.getDay()];
	return dateInfo = [weekday, `${day}.${month}.${year}`];
}

// ANCHOR f. dodanie do HTML listy miast do wyboru

function addCitiesToList(){
	const boxroundSelect = document.querySelector(".boxround_select");
	boxroundSelect.innerHTML = "";
	for (city in citiesGeo){
		const optionEl = document.createElement("option");
		optionEl.value = city;
		optionEl.innerText = citiesGeo[city]["name"];
		boxroundSelect.appendChild(optionEl);
	}
}

function escapeDiacritics(str){
	let s = str;
		s = s.replace(/ż/ig,'z');
    s = s.replace(/ó/ig,'o');
    s = s.replace(/ł/ig,'l');
    s = s.replace(/ć/ig,'c');
    s = s.replace(/ś/ig,'s');
    s = s.replace(/ź/ig,'z');
    s = s.replace(/ń/ig,'n');
    s = s.replace(/ą/ig,'a');

		//add "-" between words
		s = s.replace(/ /ig, "-");
		return s;
}

// ANCHOR f. dodanie do HTML listy ciuchów możliwych do dodania

function createDefaultselectClothes(){
	const selectClothes = document.querySelectorAll(".js-select-clothes");
	// stworzenie i dodanie pierwszej listy
	selectClothes[0].innerHTML = "";
	for (cloth in clothes) {

		const optgroupEl = document.createElement("optgroup");
		optgroupEl.label =  cloth;
		let options = "";

		for (var i = 0; i < clothes[cloth].length; i++) {
			const name = clothes[cloth][i];
			const value = escapeDiacritics(name);
			const optionEl = `<option value="${value}">${name}</option>`;
			options = options + optionEl;
		}
		optgroupEl.innerHTML = options;
		selectClothes[0].appendChild(optgroupEl);
	}
	// skopiowanie listy do pozostałych
	for (var i = 1; i < selectClothes.length; i++) {
		selectClothes[i].innerHTML = selectClothes[0].innerHTML;
	}
};



function addClothes(selector, cloth){
	const list = document.querySelector(selector);
	const listItem = document.createElement("li");
	listItem.classList.add("list-item");
	listItem.innerHTML =
	`
		<div class="list-item_text">${cloth}</div>
		<button type="button" class="remove_btn">
			<i class="fas fa-minus-circle"></i>
		</button>
	`;
	list.appendChild(listItem);
}

function addDefaultClothes(conditionNr){
	const list = document.querySelector(`[data-condition-list="${conditionNr}"]`);
	list.innerHTML = "";
	const selector = `[data-condition-list="${conditionNr}"]`;
	const condition = "condition-" + conditionNr;
	for (i=0; i<defaultClothes[condition].length; i++){
		addClothes(selector, defaultClothes[condition][i])
	}
};

// ANCHOR f. funkcje uruchamiane tylko raz po załadowaniu strony - wypełnienie HTML template'ami
addCitiesToList(); // dodanie listy miast
createDefaultselectClothes(); // dodanie rozwijanej listy z ciuchami
for (let i= 1; i<6; i++){
	addDefaultClothes(i); // dodanie domyślnej listy ciuchów - innej dla każdego warunku
}

// ANCHOR e. buttony - możliwość usunięcia lub dodania wybranych elementów ubioru
const conditionLists = document.querySelectorAll(".js-condition");
for (list of conditionLists){
	list.addEventListener("click", function(e){
		if (e.target.parentNode.classList.contains("remove_btn")){
			const t = e.target.closest(".list-item");
			t.remove();
		} else if (e.target.parentNode.classList.contains("add_btn")) {
			const btn = e.target.parentNode;
			// wyszukanie nr listy do ktorej zostanie dolaczony element
			const card = e.target.closest(".cardround_body");
			const nr = card.querySelector("[data-condition-list]").dataset.conditionList;
			const selector = `[data-condition-list="${nr}"]`;

			// dodanie ubrania do listy
			if (btn.classList.contains("js-add_btn-select")){ // rozwijana lista
				const val = card.querySelector("select").value; // wartość elementu
				const cloth = card.querySelector(`[value=${val}]`).innerHTML; // wlasciwa nazwa z polskimi literami
				addClothes(selector, cloth);
			} else if (btn.classList.contains("js-add_btn-input")){ // pole input
				const cloth = card.querySelector("input").value;
				addClothes(selector, cloth);
			}
		}
	})
}

// SECTION f. główna funkcja przetwarzająca dane z API
function processData(data, city){
	$(".forecast").removeClass("hidden");
	console.log(data);
	const fullForecast = [];
	// pobranie prognozy na 8 dni - pierwszy dzień = 0;
	for (let i = 0; i < data.daily.data.length; i++) {
		const iconFromAPI = data.daily.data[i].icon;
		const info = {
			dayNr : i + 1,
			weekday : getDate(i)[0],
			date : getDate(i)[1],
			city : city,
			// dailySummary - dodanie podsumowania
			// czasami podsumowanie nie jest dostępne, wtedy można dodac opis z ikony
			dailySummary : (data.daily.data[i].summary !== undefined) ? data.daily.data[i].summary : icons[iconName].pl,
			tempDay : Math.round(data.daily.data[i].temperatureHigh) + "°C",
			apparentTempDay : Math.round(data.daily.data[i].apparentTemperatureHigh) + "°C",
			tempNight : Math.round(data.daily.data[i].temperatureLow) + "°C",
			apparentTempNight : Math.round(data.daily.data[i].apparentTemperatureLow) + "°C",
			clouds : Math.round(data.daily.data[i].cloudCover * 100) + "%",
			humidity : Math.round(data.daily.data[i].humidity * 100) + "%",
			rainSnow : Math.round(data.daily.data[i].precipProbability * 100) + "%",
			windSpeed : Math.round(data.daily.data[i].windSpeed) + " km/h",
			windDeg : data.daily.data[i].windBearing,
			icon : icons[iconFromAPI].icon,
			listTemplate : "",
			condition : "",
		}
		
		// ANCHOR c. f. sprawdzenie, ktory warunek został spełniony i załadowanie listy z ubraniami
		const condition1 = parseInt(document.querySelector("#condition-1").value);
		const condition2a = parseInt(document.querySelector("#condition-2a").value);
		const condition2b = parseInt(document.querySelector("#condition-2b").value);
		const condition3 = parseInt(document.querySelector("#condition-3").value);
		const condition4 = parseInt(document.querySelector("#condition-4").value);
		const condition5 = parseInt(document.querySelector("#condition-5").value);
		const temp = parseInt(info.tempDay);
		const windSpeed = parseInt(data.daily.data[i].windSpeed);
		const rainSnow = Math.round(data.daily.data[i].precipProbability * 100);
		let selected = "";
		let nr = 0;
		let text = "";
		let clothes = [];

		if (temp < condition1) {
			nr = 1;
			text = `Temperatura poniżej ${condition1}°C`;
		} else if (temp >= condition2a && temp <= condition2b) {
			nr = 2;
			text = `Temperatura od ${condition2a} do ${condition2b}°C`;
		} else if (temp > condition3) {
			nr = 3;
			text = `Temperatura powyżej ${condition3}°C`;
		} else {
			console.log("Coś się nie zgadza. Sprawdź czy warunki są poprawne!");
		}

		// dodanie listy spelniajacej 1 z 3 pierwszych warunkow
		if (nr !== 0) {
			selected = $(`[data-condition-list="${nr}"] li div`);
			for (let i = 0; i < selected.length; i++) {
				clothes.push(selected[i].innerText);
			}
		}
		let listTemplate = addForecastClothes(text, clothes);

		// dodanie listy spelniajacej 4 warunek (wiatr)
		if (windSpeed > condition4) {
			clothes = [];
			text = `Prędkość wiatru powyżej ${condition4} km/h`;
			selected = $(`[data-condition-list="4"] li div`);
			for (let i = 0; i < selected.length; i++) {
				clothes.push(selected[i].innerText);
			}
			listTemplate += addForecastClothes(text, clothes);
		}

		// dodanie listy spelniajacej 5 warunek (opady)
		if (rainSnow > condition5) {
			clothes = [];
			text = `Szansa opadów powyżej ${condition5}%`;
			selected = $(`[data-condition-list="5"] li div`);
			for (let i = 0; i < selected.length; i++) {
				clothes.push(selected[i].innerText);
			}
			listTemplate += addForecastClothes(text, clothes);
		}

		info.listTemplate = listTemplate;
		fullForecast.push(info);
	}
	$(".forecast_content").html("");
	$(".forecast_content").append(forecastHeader);
	for (var i = 0; i < fullForecast.length; i++) {
		addForecast(fullForecast[i]);
	}
	moveToPlugin();
}
// !SECTION

// TODO  f. połączenie z API 
function getData(){
	const city = document.querySelector("#select-city").value;
	$.ajax({
		 url: "https://api.darksky.net/forecast/82dd8519eb0941abad295fda7a5ed88e/"
		 +citiesGeo[city].lat+","
		 +citiesGeo[city].lon
		 +"?lang=pl&units=ca",
		 dataType: 'jsonp',
		 success: function(data){
			 processData(data, citiesGeo[city].name);
		 }
	});
}

document.querySelector(".btn-apply").addEventListener("click", getData);
document.querySelector(".toggle-btn").addEventListener("click", function(){
	document.querySelector(".sidebar").classList.toggle("active");
	document.querySelector(".hamburger-icon").classList.toggle("active");
});

// ANCHOR pokazywanie i chowanie submenu w sidebar
function toggleSubmenu(icon, menu) {
	icon.toggleClass("active");
	if (icon.hasClass("active")) {
		menu.slideDown();
	} else {
		menu.slideUp();
	}
}

$(".show-cons-btn").click(() => toggleSubmenu($(".show-cons-btn .fa-chevron-down"), $(".slide-cons")));
$(".show-days-btn").click(() => toggleSubmenu($(".show-days-btn .fa-chevron-down"), $(".slide-days")));


// ANCHOR plugin "moveTo.js" (smooth scroll), funkcja uruchomiona po wczytaniu strony i ponownie po załadowniu do html sekcji forecast
const moveTo = new MoveTo();
function moveToPlugin() {
	const triggers = document.getElementsByClassName('js-trigger');
	for (trigger of triggers) { moveTo.registerTrigger(trigger);}
}
moveToPlugin();


})