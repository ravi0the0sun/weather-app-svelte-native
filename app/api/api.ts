import { API_KEY } from '../../environment';
const BASE_URL_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?';

export async function getWeather(latitude, longitude, unitSystem) {
	if (longitude && latitude) {
		return await fetch(
			`${BASE_URL_ADDRESS}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => data)
			.catch((err) => {
				throw new Error('Connection Failed!');
			});
	} else {
		throw new Error('Location Access Denied')
	}
}
