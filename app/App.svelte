<script>
    import { onMount } from 'svelte';
    import * as GeoLocation from 'nativescript-geolocation';
    import { Accuracy } from "tns-core-modules/ui/enums";
    import { 
        longitude,
        latitude,
        unitSystem,
        currentweather,
    } from './stores';
    import { API_KEY } from './environment';
    import WeatherInfo from './components/WeatherInfo.svelte';

    let show = false;

    const BASE_URL_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?';

    async function getAss() {
        try {
            const request = await GeoLocation.enableLocationRequest(true);
            const response = await GeoLocation.isEnabled();
            if (!response) {
                throw Error();
            }
            const location = await GeoLocation.getCurrentLocation({});
            $longitude = location.longitude;
            $latitude = location.latitude; 
            $currentweather = await getWeather();
            show = true;
        } catch (err) {
            console.log(err);
        }
    }

    async function getWeather() {
        return await fetch(`${BASE_URL_ADDRESS}lat=${$latitude}&lon=${$longitude}&units=${$unitSystem}&appid=${API_KEY}`)
        .then(res => res.json())
        .finally(data => data);
    }
    onMount(getAss);
</script>

<page actionBarHidden="true">
    <gridLayout horizontalAlignment="center" verticalAlignment="center" textWrap="true">
        {#if show}
            <WeatherInfo />
        {:else}
            <label text="{$latitude}, {$longitude}" />
        {/if}
    </gridLayout>
</page>

<style>

</style>