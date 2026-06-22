import "./reset.css";
import "./style.css";

const API_KEY = "GRZT3UE6Q5K6D9UC6FSWX8RAR";
const URL =
	"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/<LOCATION_HERE>?unitGroup=uk&include=current&key=<API_KEY_HERE>&contentType=json";

async function getWeather(location) {
	const url = URL.split("<LOCATION_HERE>")
		.join(location)
		.split("<API_KEY_HERE>")
		.join(API_KEY);
	const response = await fetch(url);
	const weatherData = await response.json();
	return weatherData;
}

function createWeatherObject(weatherData) {
	const currentConidtions = weatherData.currentConditions;
	return {
		location: weatherData.address,
		temperature: currentConidtions.temp,
		feelsLike: currentConidtions.feelslike,
		coniditions: currentConidtions.conditions,
		coniditionsIcon: currentConidtions.icon,
		windSpeed: currentConidtions.windspeed,
		windGusts: currentConidtions.windGust,
		windDirection: currentConidtions.winddir,
	};
}

async function main() {
	const weatherData = await getWeather("Manchester");
	const weatherDataObject = await createWeatherObject(weatherData);
}

main();
