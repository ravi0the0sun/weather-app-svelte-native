import { writable } from "svelte/store";

export const currentweather = writable({});
export const latitude = writable(0);
export const longitude = writable(0);
export const unitSystem = writable("metric");
export const weather_API_KEY = writable("");
