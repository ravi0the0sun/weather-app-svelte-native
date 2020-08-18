import { writable, derived } from 'svelte/store';

import { CurrentWeather } from './api/types/CurrentWeather';

export const latitude = writable(null);
export const longitude = writable(null);
export const unitSystem = writable('metric');

export const currentweather = writable({});
export const error = writable('');

export const loading = writable(true);
export const iconUnicode = derived(
	[currentweather, unitSystem],
	([$currentweather, $unitSystem]) => {
		let current_weather: CurrentWeather = $currentweather;
		if (current_weather?.main?.temp > 25 && $unitSystem === 'metric') {
			return '\uf769';
		} else if (current_weather?.main?.temp > 77 && $unitSystem === 'imperial') {
			return '\uf769';
		} else {
			return '\uf76b';
		}
	}
);
