const OPEN_METEO_FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';

/**
 * gets weather data from open-meteo
 * 
 * endpoint: https://api.open-meteo.com/v1/forecast
 *
 * documentation: https://open-meteo.com/en/docs
 *  
 * query parameters:
 * * `latitude`: latitude coordinate
 * * `longitude`: longitude coordinate
 * * `current`: current weather fields (`temperature_2m`, `apparent_temperature`, `weather_code`)
 * 
 * @param {number} latitude - latitude coordinate
 * @param {number} longitude - longitude coordinate
 * @returns {Promise<Object>} raw open-meteo response
*/
export async function getWeather(latitude, longitude) {
    const url = `${OPEN_METEO_FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code`;

    const response = await fetch(url);

    return response.json();
}