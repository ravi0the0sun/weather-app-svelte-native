import { writable, derived } from "svelte/store";
import { API_KEY } from './environment';

const BASE_URL_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?';

export const latitude = writable(0);
export const longitude = writable(0);
export const unitSystem = writable("metric");

export const currentweather = writable({});



