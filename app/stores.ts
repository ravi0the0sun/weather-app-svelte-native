import { writable, derived } from "svelte/store";

export const latitude = writable(0);
export const longitude = writable(0);
export const unitSystem = writable("metric");

export const currentweather = writable({ main: {temp: 0}});
export const error: any = writable(true);


export const loading = writable(true);
export const iconUnicode = derived([currentweather, unitSystem], ([$currentweather, $unitSystem]) =>{
    if ($currentweather.main.temp > 25 && $unitSystem == 'metric') {
        return '\uf769';
    } else if ($currentweather.main.temp > 77 && $unitSystem == 'imperial') {
        return '\uf769';
    } else {
        return '\uf76b';
    }
});
