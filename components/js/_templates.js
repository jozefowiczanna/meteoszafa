const info = {
	dayNr : 1,
	weekday : "Wtorek",
	date : "21.01.2019",
	city : "Poznań",
	icon : "cloud-moon",
	dailySummary : "Bezchmurnie",
	tempDay : "20°C",
	apparentTempDay : "18°C",
	tempNight : "12°C",
	apparentTempNight : "9°C",
	clouds : "11%",
	humidity : "23%",
	windSpeed : "12 km/h",
	windDeg : "123",
	clothes : ["lekka czapka", "chustka", "adidasy"],
	condition : 2,
	rainSnow : "20%"
}

test = {
	condition : "Temp < 5 stopni",
	list : ["czapka", "kalesony"]
}

function addForecastClothes(text, list) {
	let template = `
	<h4>${text}</h4>
	<ul class="list-take">
	`;
	for (let i = 0; i < list.length; i++) {
		template += `<li class="list-take_item">${list[i]}</li>`;
	}
	template += `</ul>`;
	return template;
}

function addForecast(info) {

	let template = `
	<div class="pair" data-day="${info.dayNr}">
			<div class="cardround cardround_weather">
				<div class="cardround_header no-border">
					<div class="forecast-header">
						<div class="date-group">
							<div>
								<span class="date-group_day">Dzień </span>
								<span>${info.dayNr}: </span>
							</div>
							<span class="date-group_weekday">${info.weekday} </span>
							<span>${info.date}</span>
						</div>
						<div class="icon-group">
							<div>
								<div class="icon-group_city">${info.city}</div>
								<div class="icon-group_big-temp">${info.tempDay}</div>
							</div>
							<div class="icon diw-${info.icon}"></div>
						</div>
						<div class="daily-summary align-left">
							${info.dailySummary}
						</div>
					</div>
				</div>
				<div class="cardround_body">
					<table class="table table-forecast">
						<tbody>
							<tr class="border-top">
								<td class="td td-col-1">Temperatura w dzień</td>
								<td class="td td-col-2 align-right">
									<span class="temp-day mr">${info.tempDay}</span>
								<span class="apparent-temp-day small-font">(18°C*)</span>
								</td>
							</tr>
							<tr>
								<td class="td td-col-1 border-top">Temperatura w nocy</td>
								<td class="td td-col-2 border-top align-right">
									<span class="temp-night mr"${info.tempNight}</span>
									<span class="apparent-temp-night small-font">(${info.apparentTempNight}*)</span>
								</td>
							</tr>
							<tr>
								<td class="td td-col-1">Zachmurzenie</td>
								<td class="td td-col-2 align-right clouds">11%</td>
							</tr>
							<tr>
								<td class="td td-col-1">Wilgotność</td>
								<td class="td td-col-2 align-right humidity">${info.clouds}</td>
							</tr>
							<tr>
								<td class="td td-col-1">Szansa opadów</td>
								<td class="td td-col-2 align-right humidity">${info.rainSnow}</td>
							</tr>
							<tr>
								<td class="td td-col-1">${info.windSpeed}</td>
								<td class="td td-col-2 align-right wind">
									<span class="wind-speed">12 km/h</span>
									<img class="windarrow" src="images/windarrow.svg" alt="kierunek wiatru" style="transform: rotate(${info.windDeg}deg);">
								</td>
							</tr>
							<tr>
								<td colspan="2" class="td td-col-2 align-right small-font no-border">*temperatura odczuwalna</td>
							</tr>
						</tbody>
					</table>
				</div><!-- cardround_body -->
			</div><!-- cardround -->
			<div class="cardround cardround_take">
				<h3>Zabierz:</h3>
				${info.listTemplate}
			</div>
		</div><!-- pair -->
	`;
	$(".forecast_content").append(template);
}


// addForecast(info);
