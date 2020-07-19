import { writable, derived } from "svelte/store";

export const latitude = writable(0);
export const longitude = writable(0);
export const unitSystem = writable("metric");

export const currentweather = writable({
    weather: [],
});
export const weatherIconId = derived(currentweather, ($currentweather) => {
    const {
        weather: [details],
    } = $currentweather;
    const { icon } = details;
    return icon;
});
export const weatherId = derived(currentweather, ($currentweather) => {
    const {
        weather: [details],
    } = $currentweather;
    const { id } = details;
    return id;
});
