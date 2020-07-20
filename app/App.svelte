<script>
    import { onMount } from 'svelte';
    import * as GeoLocation from 'nativescript-geolocation';
    import { Accuracy } from "tns-core-modules/ui/enums";
    import { 
        longitude,
        latitude,
        unitSystem,
        currentweather,
        loading
    } from './stores';
    import { getWeather } from './api';

    import WeatherInfo from './components/WeatherInfo.svelte';
    import ActionBar from './components/ActionBar.svelte';

    async function getLocation() {
        try {
            const request = await GeoLocation.enableLocationRequest(true);
            const response = await GeoLocation.isEnabled();
            if (!response) {
                throw Error();
            }
            const location = await GeoLocation.getCurrentLocation({});
            $longitude = location.longitude;
            $latitude = location.latitude; 
            $currentweather = await getWeather($latitude, $longitude, $unitSystem);
            $loading = false;
        } catch (err) {
            console.log(err);
        }
    }

    onMount(getLocation);
</script>

<page class="main">
    <ActionBar getWeather ={getWeather}/>
    <gridLayout col="auto" row="auto" horizontalAlignment="center" verticalAlignment="center" textWrap="true">
        {#if !$loading}
            <WeatherInfo col="0" row="0" />
        {:else}
            <activityIndicator 
                busy="{$loading}" color="#ffffff" width="100" height="100" col="0" row="0" >
            </activityIndicator>
        {/if}
    </gridLayout>
</page>

<style>
    .main {
        font-size: 20px;
        color: #ffffff;
        background-image: linear-gradient(to bottom right, #0077ff, #19ffec);
        background-size: 1100% 1100%;
    }
    
    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>