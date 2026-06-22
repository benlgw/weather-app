import "./reset.css";
import "./style.css";

import Condition from "./assets/modules/condition";
import Temp from "./assets/modules/temp";
import Wind from "./assets/modules/wind";

const API_KEY = "GRZT3UE6Q5K6D9UC6FSWX8RAR";
const URL =
	"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[LOCATION_HERE]?unitGroup=uk&include=current&key=[API_KEY_HERE]&contentType=json";

const conditionCard = document.querySelector("#condition");
const tempCard = document.querySelector("#temp");
const windCard = document.querySelector("#wind");

async function getLocation() {
	return new Promise((resolve) => {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				resolve(`${position.coords.latitude},${position.coords.longitude}`);
			},
			async () => {
				const locationAPI = await fetch("https://ipapi.co/json");
				const locationData = await locationAPI.json();
				resolve(locationData.city);
			},
		);
	});
}

async function getWeather(location) {
	const url = URL.split("[LOCATION_HERE]")
		.join(location)
		.split("[API_KEY_HERE]")
		.join(API_KEY);
	const response = await fetch(url);
	const weatherData = await response.json();
	return weatherData;
}

async function createWeatherObject(weatherData) {
	const currentConditions = weatherData.currentConditions;
	return {
		location: weatherData.address,
		temperature: currentConditions.temp,
		feelsLike: currentConditions.feelslike,
		condition: currentConditions.conditions,
		conditionIcon: currentConditions.icon,
		windSpeed: currentConditions.windspeed,
		windGusts: currentConditions.windgust,
		windDirection: currentConditions.winddir,
	};
}

async function createCardContent(weatherDataObject) {
	conditionCard.textContent = "";
	const condition = new Condition(weatherDataObject.condition);
	const conditionCardText = condition.getCardText();
	conditionCard.textContent = conditionCardText;

	tempCard.textContent = "";
	const temp = new Temp(
		weatherDataObject.temperature,
		weatherDataObject.feelsLike,
	);
	const tempCardText = temp.getCardText();
	tempCard.textContent = tempCardText;

	windCard.textContent = "";
	const wind = new Wind(
		weatherDataObject.windSpeed,
		weatherDataObject.windGusts,
		weatherDataObject.windDirection,
	);
	const windCardText = wind.getCardText();
	windCard.textContent = windCardText;
}

async function main() {
	const location = await getLocation();
	const weatherData = await getWeather(location);
	const weatherDataObject = await createWeatherObject(weatherData);
	await createCardContent(weatherDataObject);
}

main();
