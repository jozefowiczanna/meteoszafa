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

const forecastHeader = `
<div class="bg pb0">
	<div class="wrapper">
		<h2 id="forecast">Pakuj się</h2>
		<p>Poniżej znajduje się 8-dniowa prognoza pogody dla wybranego miasta wraz z listą rzeczy do zabrania.</p>
	</div>
</div>
`

function addForecast(info) {

	let template = `
	<div class="bg" id="day-${info.dayNr}">
		<div class="wrapper">
			<div class="pair" data-day="${info.dayNr}" >
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
									<td class="td td-col-2 align-right humidity">${info.clouds}</td>
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
				<div class="cardround cardround_take">
					<h3>Zabierz:</h3>
					${info.listTemplate}
				</div>
			</div><!-- pair -->
		</div>
	</div>
	`;
	$(".forecast_content").append(template);
}


// addForecast(info);
