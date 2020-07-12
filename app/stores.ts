import { writable, derived } from "svelte/store";
import { API_KEY } from './environment'

const BASE_URL_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?';

export const latitude = writable(0);
export const longitude = writable(0);
export const unitSystem = writable("metric");

export const currentweather = derived([latitude, longitude, unitSystem], async ([$latitude, $longitude, $unitSystem]) => {
    return await fetch(`${BASE_URL_ADDRESS}lat=${$latitude}&lon=${$longitude}&units=${$unitSystem}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => data);
});


