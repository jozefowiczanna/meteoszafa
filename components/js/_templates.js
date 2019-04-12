const info = {
	dayNr : 1,
	weekday : "Wtorek",
	date : "21.01.2019",
	city : "Poznań",
	icon : "diw-cloud-moon",
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
	<div>${text}</div>
	<ul class="list-take">
	`;
	for (let i = 0; i < list.length; i++) {
		template += `<li class="list-take-item">${list[i]}</li>`;
	}
	template += `</ul>`;
	return template;
}

function addForecast(info) {
	let template = `
	<div class="pair" data-day="${info.dayNr}">
		<div class="cardround cardround_weather width-big">
			<div class="cardround_header no-border">
				<div class="forecast-header">
					<div class="date-group">
						<span>Dzień </span><span class="day-nr">${info.dayNr}: </span><span class="weekday">${info.weekday}</span> <span class="date">${info.date}</span>
					</div>
					<div class="icon-group">
						<div>
							<div class="city">${info.city}</div>
							<div class="big-temp">${info.tempDay}</div>
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
						<tr>
							<td class="td td-col-1 border-top">Temperatura w dzień</td>
							<td class="td td-col-2 border-top align-right">
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
			</div><!-- cardround_body -->
		</div><!-- cardround -->
		<div class="cardround take width-small">
			<div class="cardround_header no-border">
				<h3>Zabierz:</h3>
				${info.listTemplate}
			</div>
			<div class="cardround_body no-border plr-2" data-forecast-list="${info.dayNr}">
			</div>
		</div>
	</div><!-- pair -->
	`;
	$(".forecast_content").append(template);
}



addForecast(info);
