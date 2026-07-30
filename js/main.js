import { WEATHER_CODES } from './weather-codes.js';
import { getLocationDetails } from './location-api.js';
import { getWeather } from './weather-api.js';
import { updateTime, updateLocation, updateWeather, updateWeatherTheme, setPlaceholder } from './ui.js';

async function init() {
    const placeholder = {
        place: 'jersey city',
        weather: {
            temperature: 72,
            condition: WEATHER_CODES[0],
            assets: {
                icon: '',
                background: '',
                favicon: ''
            }
        }
    };
    setPlaceholder(placeholder);
    updateTime(new Date());

    const coordinates = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position.coords),
            reject
        );
    });
    const { latitude, longitude } = coordinates;

    const locationData = await getLocationDetails(latitude, longitude);
    const weatherData = await getWeather(latitude, longitude);

    const address = locationData.address;
    const place =
        address.city ??
        address.town ??
        address.municipality ??
        address.village ??
        address.hamlet;
    updateLocation(place);

    const currentWeather = weatherData.current;
    const weather = {
        temperature: currentWeather.temperature_2m,
        condition: WEATHER_CODES[currentWeather.weather_code],
        assets: {
            icon: '',
            background: '',
            favicon: ''
        }
    };
    updateWeather(weather);
    updateWeatherTheme(weather);

    updateTime(new Date());
}

init();