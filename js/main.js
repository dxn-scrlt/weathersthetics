import { WEATHER_CODES } from './weather-codes.js';
import { getLocationDetails } from './location-api.js';
import { getWeather } from './weather-api.js';
import { updateTime, updateLocation, updateWeather, updateWeatherTheme } from './ui.js';

async function init() {
    updateTime(new Date());

    const coordinates = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position.coords),
            reject
        );
    });
    const { latitude, longitude } = coordinates;
}

init();