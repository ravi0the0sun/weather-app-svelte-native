import { writable, derived } from "svelte/store";

export const currentweather = writable({});
export const latitude = writable(0);
export const longitude = writable(0);
export const unitSystem = writable("metric");




