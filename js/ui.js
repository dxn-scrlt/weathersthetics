const body = document.body;
const favicon = document.querySelector('link[rel="icon"]');

const locationName = document.getElementById('location-name');

const weatherIcon = document.getElementById('weather-icon');

const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const currentTime = document.getElementById('current-time');

/**
 * updates displayed time
 * 
 * @param {Date} date - date to format and display
*/
export function updateTime(date) {
    currentTime.textContent = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    }).toLowerCase();
}

/**
 * updates displayed location name
 * 
 * @param {string} place - name of place to display
*/
export function updateLocation(place) {
    locationName.textContent = place.toLowerCase();
}

/**
 * updates weather card
 * 
 * @param {Object} weather - weather data to display
 * @param {number} weather.temperature - temperature value
 * @param {string} weather.condition - weather description
 * @param {Object} weather.assets - visual assets based on condition
 * @param {string} weather.assets.icon - card icon path
*/
export function updateWeather(weather) {
    temperature.textContent = `${weather.temperature}°f`;
    condition.textContent = weather.condition;
    
    weatherIcon.src = weather.assets.icon;
}

/**
 * updates weather-themed page assets
 * 
 * @param {Object} weather - weather data to display
 * @param {Object} weather.assets - visual assets based on condition
 * @param {string} weather.assets.background - background path
 * @param {string} weather.assets.favicon - favicon path
*/
export function updateWeatherTheme(weather) {
    const assets = weather.assets;

    body.style.backgroundImage = `url('${assets.background}')`;
    favicon.href = assets.favicon;
}

/**
 * sets initial ui display
 * 
 * @param {Object} placeholder - placeholder data with location, weather, and assets 
 * @param {string} placeholder.place - name of place to display
 * @param {Object} placeholder.weather - weather data to display
 * @param {number} placeholder.weather.temperature - temperature value
 * @param {string} placeholder.weather.condition - weather description
 * @param {Object} placeholder.weather.assets - visual assets
 * @param {string} placeholder.weather.assets.icon - card icon path
 * @param {string} placeholder.weather.assets.background - background path
 * @param {string} placeholder.weather.assets.favicon - favicon path
*/
export function setPlaceholder(placeholder) {
    updateLocation(placeholder.place);
    updateWeather(placeholder.weather);
    updateWeatherTheme(placeholder.weather);
}