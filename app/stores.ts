import { writable, derived } from "svelte/store";

export const latitude = writable(0);
export const longitude = writable(0);
export const unitSystem = writable("metric");

export const currentweather = writable({});
