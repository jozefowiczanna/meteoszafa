$(document).ready(function(){

const citiesGeo = {
		"Poznań": {
			"name": "poznan",
			"lat": 52.4064,
			"lon": 16.9252
		},
		"Lizbona": {
			"name": "lizbona",
			"lat": 38.736946,
			"lon": -9.142685
		},
		"Londyn": {
			"name": "londyn",
			"lat": 51.509865,
			"lon": -0.118092
		},
		"Reykjavik": {
			"name": "reykjavik",
			"lat": 64.128288,
			"lon": -21.827774
		},
		"Novosibirsk": {
			"name": "novosibirsk",
			"lat": 55.018803,
			"lon": 82.933952
		},
	};

	const clothes = {
		"kurtki" :
			["kurtka jesienna", "kurtka letnia", "kurtka wiosenna", "kurtka zimowa", "płaszcz jesienny", "płaszcz letni", "płaszcz wiosenny", "płaszcz zimowy"],

		"czapki" :
			["czapka z daszkiem", "czapka zimowa", "kapelusz", "lekka czapka", "nauszniki"],

		"szaliki" :
			["chustka", "cienki szalik", "gruby szalik", "komin"],

		"rękawiczki" :
			["rękawiczki", "rękawiczki bez palców"],

		"buty" :
			["adidasy", "baleriny", "botki", "japonki", "kalosze", "kozaki", "obuwie trekkingowe", "sandały", "trampki", "śniegowce"]
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
		const icon = "";
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
		const iconName = data.currently.icon;
		const icon = "";
		const summary = data.currently.summary;
		const shortSummary = icons[iconName].pl;
		const sevenDaysSummary = data.currently.daily.summary;
		const temp = data.currently.temperature + "°C";
		const apparentTemp = data.currently.apparentTemperature + "°C";
		const clouds = data.currently.cloudCover * 100 + "%";
		const humidity = data.currently.humidity * 100 + "%";
		const windSpeed = data.currently.windSpeed + " km/h";
		const windDeg = data.currently.windBearing;
		// console.log(summary, temp, apparentTemp, clouds, humidity, windSpeed, windDeg);
		document.querySelector(".windarrow").style.transform = `rotate(${windDeg}deg)`;
	}


function getData(){
	const city = "Novosibirsk";
	$.ajax({
		 url: "https://api.darksky.net/forecast/82dd8519eb0941abad295fda7a5ed88e/"
		 +citiesGeo[city].lat+","
		 +citiesGeo[city].lon
		 +"?lang=pl&units=ca",
		 dataType: 'jsonp',
		 success: function(data){
			 processData(data, city);
		 }
 });
}

function addCitiesToList(){
	const boxroundSelect = document.querySelector(".boxround_select");
	boxroundSelect.innerHTML = "";
	for (city in citiesGeo){
		const optionEl = document.createElement("option");
		// console.log(city);
		// console.log(city["name"]);
		optionEl.value = citiesGeo[city]["name"];
		optionEl.innerText = city;
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
		s = s.replace(" ", "-");
		return s;
}



function createDefaultClothesList(){
	const clothesList = document.querySelector(".settings-table_select");
	clothesList.innerHTML = "";
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
		clothesList.appendChild(optgroupEl);
	}
};

const defaultClothes = {
	"condition-1": ["czapka zimowa", "szalik", "buty zimowe", "rękawiczki"]
}

function addClothes(selector, cloth){
	const list = document.querySelector(selector);
	const listItem = document.createElement("li");
	listItem.classList.add("list-item");
	listItem.innerHTML =
	`
		<div class="list-item_text">${cloth}</div>
		<button type="button" class="btn-remove"><i class="fas fa-minus-circle"></i></button>
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

addCitiesToList();
createDefaultClothesList();
addDefaultClothes(1);

const conditionLists = document.querySelectorAll(".condition");
for (list of conditionLists){
	list.addEventListener("click", function(e){
		if (e.target.parentNode.classList.contains("btn-remove")){
			const t = e.target.closest(".list-item");
			t.remove();
		} else if (e.target.parentNode.classList.contains("btn-add")) {
			const btn = e.target.parentNode;
			// wyszukanie nr listy do ktorej zostanie dolaczony element
			const card = e.target.closest(".cardround_body");
			const nr = card.querySelector("[data-condition-list]").dataset.conditionList;
			const selector = `[data-condition-list="${nr}"]`;

			// pobranie nazwy ubrania, ktore ma zostac dolaczone do listy
			if (btn.classList.contains("btn-add-select")){
				const val = card.querySelector("select").value; // warrtosc elementu
				const cloth = card.querySelector(`[value=${val}]`).innerHTML; // wlasciwa nazwa z polskimi literami
				addClothes(selector, cloth);
			} else if (btn.classList.contains("btn-add-input")){
				const cloth = card.querySelector("input").value;
				addClothes(selector, cloth);
			}
		}
	})
}

// const conditionLists = document.querySelectorAll(".list-condition");
// for (list of conditionLists){
// 	list.addEventListener("click", function(e){
// 		if (e.target.tagName === "I"){
// 			t = e.target.closest(".list-item");
// 			t.remove();
// 		}
// 	})
// }


 // getData()
})
