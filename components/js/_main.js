// NOTE skróty używane przy ANCHOR: c = const, f = function, e = event

// ANCHOR c. lista miast, dł. i szer. geograficzna
const citiesGeo = {
	"amsterdam": {
		"name": "Amsterdam",
		"lat": 52.366667,
		"lon": 4.9
	},
	"andora": {
		"name": "Andora",
		"lat": 42.5,
		"lon": 1.5
	},
	"ankara": {
		"name": "Ankara",
		"lat": 39.943889,
		"lon": 32.856111
	},
	"astana": {
		"name": "Astana",
		"lat": 51.166667,
		"lon": 71.416667
	},
	"ateny": {
		"name": "Ateny",
		"lat": 38,
		"lon": 23.716667
	},
	"belgrad": {
		"name": "Belgrad",
		"lat": 44.8,
		"lon": 20.466667
	},
	"berlin": {
		"name": "Berlin",
		"lat": 52.518611,
		"lon": 13.408333
	},
	"berno": {
		"name": "Berno",
		"lat": 46.94798,
		"lon": 7.44743
	},
	"bratyslawa": {
		"name": "Bratysława",
		"lat": 48.146825,
		"lon": 17.107239
	},
	"bruksela": {
		"name": "Bruksela",
		"lat": 50.833333,
		"lon": 4.35
	},
	"budapeszt": {
		"name": "Budapeszt",
		"lat": 47.5,
		"lon": 19.05
	},
	"bukareszt": {
		"name": "Bukareszt",
		"lat": 44.416667,
		"lon": 26.1
	},
	"dublin": {
		"name": "Dublin",
		"lat": 53.333333,
		"lon": -6.25
	},
	"gdansk": {
		"name": "Gdańsk",
		"lat": 54.3475,
		"lon": 18.645278
	},
	"helsinki": {
		"name": "Helsinki",
		"lat": 60.166667,
		"lon": 24.933333
	},
	"kair": {
		"name": "Kair",
		"lat": 30.0626,
		"lon": 31.2497
	},
	"kijow": {
		"name": "Kijów",
		"lat": 50.45,
		"lon": 30.5
	},
	"kiszynow": {
		"name": "Kiszyniów",
		"lat": 47.013889,
		"lon": 28.85
	},
	"kopenhaga": {
		"name": "Kopenhaga",
		"lat": 55.666667,
		"lon": 12.566667
	},
	"krakow": {
		"name": "Kraków",
		"lat": 50.061389,
		"lon": 19.938333
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
	"lublana": {
		"name": "Lublana",
		"lat": 46.056389,
		"lon": 14.507778
	},
	"luksemburg": {
		"name": "Luksemburg",
		"lat": 49.610556,
		"lon": 6.132778
	},
	"madryt": {
		"name": "Madryt",
		"lat": 40.417778,
		"lon": -3.694722
	},
	"minsk": {
		"name": "Mińsk",
		"lat": 53.9,
		"lon": 27.55
	},
	"monako": {
		"name": "Monako",
		"lat": 43.731245,
		"lon": 7.419744
	},
	"moskwa": {
		"name": "Moskwa",
		"lat": 55.75,
		"lon": 37.616667
	},
	"novosibirsk": {
		"name": "Novosibirsk",
		"lat": 55.018803,
		"lon": 82.933952
	},
	"oslo": {
		"name": "Oslo",
		"lat": 59.912997,
		"lon": 10.737997
	},
	"paryz": {
		"name": "Paryż",
		"lat": 48.866667,
		"lon": 2.35
	},
	"podgorica": {
		"name": "Podgorica",
		"lat": 42.466667,
		"lon": 19.266667
	},
	"poznan": {
		"name": "Poznań",
		"lat": 52.4064,
		"lon": 16.9252
	},
	"praga": {
		"name": "Praga",
		"lat": 50.087778,
		"lon": 14.421111
	},
	"reykjavik": {
		"name": "Reykjavik",
		"lat": 64.128288,
		"lon": -21.827774
	},
	"ryga": {
		"name": "Ryga",
		"lat": 56.966667,
		"lon": 24.133333
	},
	"rzym": {
		"name": "Rzym",
		"lat": 41.893056,
		"lon": 12.482778
	},
	"sanmarino": {
		"name": "San Marino",
		"lat": 43.932011,
		"lon": 12.44845
	},
	"sarajewo": {
		"name": "Sarajewo",
		"lat": 43.85,
		"lon": 18.366667
	},
	"skopje": {
		"name": "Skopje",
		"lat": 42,
		"lon": 21.433333
	},
	"sztokholm": {
		"name": "Sztokholm",
		"lat": 59.333333,
		"lon": 18.05
	},
	"tallinn": {
		"name": "Tallinn",
		"lat": 59.433333,
		"lon": 24.75
	},
	"tirana": {
		"name": "Tirana",
		"lat": 41.316667,
		"lon": 19.816667
	},
	"vaduz": {
		"name": "Vaduz",
		"lat": 47.140972,
		"lon": 9.521111
	},
	"valletta": {
		"name": "Valletta",
		"lat": 35.897778,
		"lon": 14.5125
	},
	"warszawa": {
		"name": "Warszawa",
		"lat": 52.232222,
		"lon": 21.008333
	},
	"wieden": {
		"name": "Wiedeń",
		"lat": 48.216667,
		"lon": 16.366667
	},
	"wilno": {
		"name": "Wilno",
		"lat": 54.683333,
		"lon": 25.283333
	},
	"zagrzeb": {
		"name": "Zagrzeb",
		"lat": 45.8,
		"lon": 15.966667
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

// ANCHOR  c. domyślna lista ciuchów dla każdego z warunków z osobna
const defaultClothes = {
	"con-1": ["czapka zimowa", "gruby szalik", "kurtka zimowa", "buty zimowe", "rękawiczki"],
	"con-2": ["lekka czapka", "adidasy", "płaszcz"],
	"con-3": ["kapelusz", "t-shirt", "krótkie spodenki", "sandały"],
	"con-4": ["nauszniki", "kurtka przeciwwiatrowa"],
	"con-5": ["parasol", "kalosze"]
}

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

// ANCHOR domyślne wartości temperatury, prędkości wiatru i szansy opadów
const defaultValues = [5, 5, 18, 18, 20, 70];

// SECTION template
// ANCHOR f. lista ciuchów dołączana do prognozy na każdy dzień
function addForecastClothes(text, list) {
	let template = `
	<h4>${text}</h4>
	<ul class="list-take">
	`;
	for (let i = 0; i < list.length; i++) {
		template += `<li class="list-take-item">${list[i]}</li>`;
	}
	template += `</ul>`;
	return template;
}

const forecastHeader = `
<div class="bg pb0">
	<div class="wrapper">
		<h2 id="forecast">Pakuj się</h2>
		<p>Poniżej znajduje się 8-dniowa prognoza pogody dla wybranego miasta wraz z listą rzeczy do zabrania.</p>
	</div>
</div>
`;

// ANCHOR template z prognozą pogody
function addForecast(info) {
	let template = `
	<div class="bg" id="day-${info.dayNr}">
		<div class="wrapper">
			<div class="pair" data-day="${info.dayNr}" >
				<div class="card card-weather">
					<div class="card-header no-border">
						<div class="forecast-header">
							<div class="date-group">
								<div>
									<span class="date-group-day">Dzień </span>
									<span>${info.dayNr}: </span>
								</div>
								<span class="date-group-weekday">${info.weekday} </span>
								<span>${info.date}</span>
							</div>
							<div class="icon-group">
								<div>
									<div class="icon-group-city">${info.city}</div>
									<div class="icon-group-big-temp">${info.tempDay}</div>
								</div>
								<div class="icon diw-${info.icon}"></div>
							</div>
							<div class="daily-summary align-left">
								${info.dailySummary}
							</div>
						</div>
					</div>
					<div class="card-body">
						<table class="table table-forecast">
							<tbody>
								<tr class="border-top">
									<td class="td td-col-1">Temperatura w dzień</td>
									<td class="td td-col-2 align-right">
										<span class="temp-day mr">${info.tempDay}</span>
									<span class="apparent-temp-day small-font">(${info.apparentTempDay}*)</span>
									</td>
								</tr>
								<tr>
									<td class="td td-col-1 border-top">Temperatura w nocy</td>
									<td class="td td-col-2 border-top align-right">
										<span class="temp-night mr">${info.tempNight}</span>
										<span class="apparent-temp-night small-font">(${info.apparentTempNight}*)</span>
									</td>
								</tr>
								<tr>
									<td class="td td-col-1">Zachmurzenie</td>
									<td class="td td-col-2 align-right clouds">${info.clouds}</td>
								</tr>
								<tr>
									<td class="td td-col-1">Wilgotność</td>
									<td class="td td-col-2 align-right humidity">${info.humidity}</td>
								</tr>
								<tr>
									<td class="td td-col-1">Szansa opadów</td>
									<td class="td td-col-2 align-right humidity">${info.rainSnow}</td>
								</tr>
								<tr>
									<td class="td td-col-1">Prędkość wiatru</td>
									<td class="td td-col-2 align-right wind">
										<span class="wind-speed">${info.windSpeed}</span>
										<img class="windarrow" src="images/windarrow.svg" alt="kierunek wiatru" style="transform: rotate(${info.windDeg}deg);">
									</td>
								</tr>
								<tr>
									<td colspan="2" class="td td-col-2 align-right small-font no-border">*temperatura odczuwalna</td>
								</tr>
							</tbody>
						</table>
					</div><!-- card-body -->
				</div><!-- card -->
				<div class="card card-take">
					<h3>Zabierz:</h3>
					${info.listTemplate}
				</div>
			</div><!-- pair -->
		</div>
	</div>
	`;
	$(".forecast-content").append(template);
}
// !SECTION

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
function addCitiesToList() {
	const boxroundSelect = document.querySelector(".boxround-select");
	boxroundSelect.innerHTML = "";
	for (city in citiesGeo){
		const optionEl = document.createElement("option");
		optionEl.value = city;
		optionEl.innerText = citiesGeo[city]["name"];
		boxroundSelect.appendChild(optionEl);
	}
}

function escapeDiacritics(str) {
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

// ANCHOR f. dodanie do HTML rozwijanej listy wyboru z ciuchami
function createDefaultselectClothes() {
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
		<div class="list-item-text">${cloth}</div>
		<button type="button" class="remove-btn">
			<i class="fas fa-minus-circle"></i>
		</button>
	`;
	list.appendChild(listItem);
}

// dodanie listy ciuchów do każdego z warunków
function addClothesToConditions(clothes){
	for (let i= 1; i<6; i++){
		const list = document.querySelector(`[data-con-list="${i}"]`);
		list.innerHTML = "";
		const selector = `[data-con-list="${i}"]`;
		const con = "con-" + i;
		for (let i=0; i<clothes[con].length; i++){
			addClothes(selector, clothes[con][i])
		}
	}
};

// ANCHOR f. funkcje uruchamiane tylko raz po załadowaniu strony - wypełnienie HTML template'ami
addCitiesToList(); // dodanie listy miast
createDefaultselectClothes(); // dodanie rozwijanej listy z ciuchami
addClothesToConditions(defaultClothes);

// ANCHOR e. buttony - możliwość usunięcia lub dodania wybranych elementów ubioru
const conditionLists = document.querySelectorAll(".js-con");
for (list of conditionLists){
	list.addEventListener("click", function(e){
		if (e.target.parentNode.classList.contains("remove-btn")){
			const t = e.target.closest(".list-item");
			t.remove();
		} else if (e.target.parentNode.classList.contains("add-btn")) {
			const btn = e.target.parentNode;
			// wyszukanie nr listy do ktorej zostanie dolaczony element
			const card = e.target.closest(".card-body");
			const nr = card.querySelector("[data-con-list]").dataset.conList;
			const selector = `[data-con-list="${nr}"]`;

			// dodanie ubrania do listy
			if (btn.classList.contains("js-add-btn-select")){ // rozwijana lista
				const val = card.querySelector("select").value; // wartość elementu
				const cloth = card.querySelector(`[value=${val}]`).innerHTML; // wlasciwa nazwa z polskimi literami
				addClothes(selector, cloth);
			} else if (btn.classList.contains("js-add-btn-input") && !btn.hasAttribute("disabled")){ // pole input
				if (btn.closest(".add-row").querySelector(".add-input").value !== "") { // spr czy input ma jakąś wartość
					const cloth = card.querySelector("input").value;
					addClothes(selector, cloth);
				}
			}
		}
	})
}

// SECTION walidacja inputów i przeniesienie ich wartości do innych elementów html
// f. uruchamiana po wczytaniu strony i zmianie wartości input w warunkach

const displayFieldError = function(row, elem) {
	const fieldRow = elem.closest(row);
	const fieldError = fieldRow.querySelector(".field-error");
	if (fieldError === null) {
		const errorText = elem.dataset.error;
		const divError = document.createElement("div");
		divError.classList.add("field-error");
		divError.innerText = errorText;
		fieldRow.appendChild(divError);
	}
};

const hideFieldError = function(row, elem) {
	const fieldRow = elem.closest(row);
	const fieldError = fieldRow.querySelector(".field-error");
	// sprawdzenie czy w rzędzie istnieje drugi input z błędną wartością
	const error = fieldRow.querySelector(".error");
	if (fieldError !== null && error === null) {
		fieldError.remove();
	}
};

// ANCHOR f. (sekcja z warunkami) kopiowanie wartości atmosf. z inputów do ikonek
function copyInputData(input, output) {
	for (let i = 0; i < input.length; i++) {
		output[i].innerText = input[i].value;
	}
}

const conOutputs = document.querySelectorAll(".js-con-output");
const conInputs = document.querySelectorAll(".con-input");
copyInputData(conInputs, conOutputs);
for (let i = 0; i < conInputs.length; i++) {
	conInputs[i].addEventListener("input", function() {
		if (this.checkValidity() === true && this.value !== "") {
			this.classList.remove("error");
			hideFieldError(".card-header", this);
			conOutputs[i].innerText = this.value;
		} else {
			this.classList.add("error");
			displayFieldError(".card-header", this);
			conOutputs[i].innerText = "";
		}
	})
}

const clothesInputs = document.querySelectorAll(".add-input"); // pole za pomnocą którego można dodać własne ubranie
[...clothesInputs].forEach(el => {
	el.addEventListener("input", function() {
		const btn = this.closest(".add").querySelector(".js-add-btn-input");
		if (this.checkValidity() === true) {
			this.classList.remove("error");
			hideFieldError(".add", this);
			btn.removeAttribute("disabled");
		} else {
			this.classList.add("error");
			displayFieldError(".add", this);
			btn.setAttribute("disabled", "disabled");
		}
	})
})
// !SECTION

// ANCHOR e. okno z informacją: Aby zobaczyć prognozę, wybierz cel podróży
let forecastLoaded = false;
document.querySelector(".slide-days-flex").addEventListener("click", function(){
	if (forecastLoaded === false) {
		$(".js-forecast-msg").slideDown("fast");
	}
});
document.querySelector(".js-forecast-msg .remove-msg-btn").addEventListener("click", function(){
	$(".js-forecast-msg").slideUp("fast");
})

// SECTION f. główna funkcja przetwarzająca dane z API
function processData(data, city){
	forecastLoaded = true;
	$(".forecast").removeClass("hidden");
	console.log(data);
	const fullForecast = [];
	// pobranie prognozy na 8 dni - pierwszy dzień = 0;
	for (let i = 0; i < data.daily.data.length; i++) {
		const {
			icon, summary, temperatureHigh, apparentTemperatureHigh, temperatureLow, apparentTemperatureLow, cloudCover, humidity, precipProbability, windSpeed, windBearing
		} = data.daily.data[i];
		const iconFromAPI = icon;
		const info = {
			dayNr : i + 1,
			weekday : getDate(i)[0],
			date : getDate(i)[1],
			city : city,
			dailySummary : (summary !== undefined) ? summary : icons[iconName].pl, // czasami podsumowanie nie jest dostępne, wtedy można dodac opis z ikony
			tempDay : Math.round(temperatureHigh) + "°C",
			apparentTempDay : Math.round(apparentTemperatureHigh) + "°C",
			tempNight : Math.round(temperatureLow) + "°C",
			apparentTempNight : Math.round(apparentTemperatureLow) + "°C",
			clouds : Math.round(cloudCover * 100) + "%",
			humidity : Math.round(humidity * 100) + "%",
			rainSnow : Math.round(precipProbability * 100) + "%",
			windSpeed : Math.round(windSpeed) + " km/h",
			windDeg : windBearing,
			icon : icons[iconFromAPI].icon,
			listTemplate : "",
			condition : "",
		}

		// ANCHOR c. f. sprawdzenie, ktory warunek został spełniony i załadowanie listy z ubraniami
		const con1 = parseInt(document.querySelector("#input-con-1").value);
		const con2a = parseInt(document.querySelector("#input-con-2a").value);
		const con2b = (document.querySelector("#input-con-2b").value);
		const con3 = (document.querySelector("#input-con-3").value);
		const con4 = parseInt(document.querySelector("#input-con-4").value);
		const con5 = parseInt(document.querySelector("#input-con-5").value);
		const temp = parseInt(info.tempDay);
		const wind = parseInt(data.daily.data[i].windSpeed);
		const rainSnow = Math.round(data.daily.data[i].precipProbability * 100);
		let selected = "";
		let nr = 0;
		let text = "";
		let clothes = [];
		if (temp < con1) {
			nr = 1;
			text = `Temperatura poniżej ${con1}°C`;
		}
		if (temp >= con2a && temp <= con2b) {
			nr = 2;
			text = `Temperatura od ${con2a} do ${con2b}°C`;
		}
		
		if (temp > con3) {
			nr = 3;
			text = `Temperatura powyżej ${con3}°C`;
		}

		// dodanie listy spelniajacej 1 z 3 pierwszych warunkow
		if (nr !== 0) {
			selected = $(`[data-con-list="${nr}"] li div`);
			for (let i = 0; i < selected.length; i++) {
				clothes.push(selected[i].innerText);
			}
		}
		let listTemplate = addForecastClothes(text, clothes);

		// dodanie listy spelniajacej 4 warunek (wiatr)
		if (wind > con4) {
			clothes = [];
			text = `Prędkość wiatru powyżej ${con4} km/h`;
			selected = $(`[data-con-list="4"] li div`);
			for (let i = 0; i < selected.length; i++) {
				clothes.push(selected[i].innerText);
			}
			listTemplate += addForecastClothes(text, clothes);
		}

		// dodanie listy spelniajacej 5 warunek (opady)
		if (rainSnow > con5) {
			clothes = [];
			text = `Szansa opadów powyżej ${con5}%`;
			selected = $(`[data-con-list="5"] li div`);
			for (let i = 0; i < selected.length; i++) {
				clothes.push(selected[i].innerText);
			}
			listTemplate += addForecastClothes(text, clothes);
		}
		info.listTemplate = listTemplate;
		fullForecast.push(info);
	}
	$(".forecast-content").html("");
	$(".forecast-content").append(forecastHeader);
	for (var i = 0; i < fullForecast.length; i++) {
		addForecast(fullForecast[i]);
	}
	moveToPlugin();
}
// !SECTION

// ANCHOR  f. połączenie z API
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

$(".js-btn-apply").on("click", getData);

$(".toggle-btn").on("click", function(){
	$(".sidebar").toggleClass("active");
	$(".hamburger-icon").toggleClass("active");
});

// ANCHOR e. f. pokazywanie i chowanie submenu w sidebar
function toggleSubmenu(icon, menu) {
	icon.toggleClass("active");
	if (icon.hasClass("active")) {
		menu.slideDown();
	} else {
		menu.slideUp();
	}
}

$(".js-show-cons-btn").click(() => toggleSubmenu($(".js-show-cons-btn .fa-chevron-down"), $(".slide-cons")));
$(".js-show-days-btn").click(() => toggleSubmenu($(".js-show-days-btn .fa-chevron-down"), $(".slide-days")));

// ANCHOR plugin "moveTo.js" (smooth scroll), funkcja uruchomiona po wczytaniu strony i ponownie po załadowniu do html sekcji forecast
const moveTo = new MoveTo();
function moveToPlugin() {
	const triggers = document.getElementsByClassName('js-trigger');
	for (trigger of triggers) { moveTo.registerTrigger(trigger);}
}
moveToPlugin();