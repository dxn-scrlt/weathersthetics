const NOMINATIM_REVERSE_URL = 'https://nominatim.openstreetmap.org/reverse';

/**
 * reverse geocodes coordinates using nominatim
 * 
 * endpoint: https://nominatim.openstreetmap.org/reverse
 * 
 * documentation: https://nominatim.org/release-docs/develop/api/Reverse
 * 
 * query parameters:
 * * `lat`: latitude coordinate
 * * `lon`: longitude coordinate
 * * `format`: response format (`jsonv2`)
 * 
 * @param {number} latitude - latitude coordinate
 * @param {number} longitude - longitude coordinate
 * @returns {Promise<Object>} raw nominatim response
*/
export async function getLocationDetails(latitude, longitude) {
    const url = `${NOMINATIM_REVERSE_URL}?lat=${latitude}&lon=${longitude}&format=jsonv2`;

    const response = await fetch(url);
    
    return response.json();
}