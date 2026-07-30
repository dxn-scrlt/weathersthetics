import { WEATHER_CODES } from './weather-codes.js';

/**
 * provides icon, background, and favicon paths
 * 
 * @typedef {Object} WeatherAssetPaths
 * @property {string} icon
 * @property {string} background
 * @property {string} favicon
*/

const ASSETS_PATH = 'assets/';
const ICONS_PATH = `${ASSETS_PATH}icons/`;
const BACKGROUNDS_PATH = `${ASSETS_PATH}backgrounds/`;
const FAVICONS_PATH = `${ASSETS_PATH}favicons/`;

function normalizeCondition(condition) {
    switch (condition) {
        case WEATHER_CODES[0]:
        case WEATHER_CODES[1]:
            return 'sunny';
        case WEATHER_CODES[2]:
        case WEATHER_CODES[3]:
            return 'cloudy';
        case WEATHER_CODES[45]:
        case WEATHER_CODES[48]:
            return 'foggy';
        case WEATHER_CODES[51]:
        case WEATHER_CODES[53]:
        case WEATHER_CODES[55]:
        case WEATHER_CODES[61]:
        case WEATHER_CODES[63]:
        case WEATHER_CODES[65]:
        case WEATHER_CODES[80]:
        case WEATHER_CODES[81]:
        case WEATHER_CODES[82]:
            return 'rainy';
        case WEATHER_CODES[56]:
        case WEATHER_CODES[57]:
        case WEATHER_CODES[66]:
        case WEATHER_CODES[67]:
            return 'sleety';
        case WEATHER_CODES[71]:
        case WEATHER_CODES[73]:
        case WEATHER_CODES[75]:
        case WEATHER_CODES[77]:
        case WEATHER_CODES[85]:
        case WEATHER_CODES[86]:
            return 'snowy';
        case WEATHER_CODES[95]:
        case WEATHER_CODES[96]:
        case WEATHER_CODES[99]:
            return 'stormy';
    }
}

function getIconPath(condition) {
    return `${ICONS_PATH}${normalizeCondition(condition)}.png`;
}

function getBackgroundPath(condition) {
    return `${BACKGROUNDS_PATH}${normalizeCondition(condition)}.gif`;
}

function getFaviconPath(condition) {
    return `${FAVICONS_PATH}${normalizeCondition(condition)}.png`;
}

/**
 * 
 * @param {string} condition - weather description to get asset paths
 * @returns {WeatherAssetPaths} weather asset paths
*/
export function getWeatherAssetPaths(condition) {
    const normalizedCondition = normalizeCondition(condition);
    
    return {
        icon: getIconPath(condition),
        background: getBackgroundPath(condition),
        favicon: getFaviconPath(condition)
    };
}