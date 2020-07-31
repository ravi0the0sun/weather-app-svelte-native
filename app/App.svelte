<script>
    import { onMount } from 'svelte';
    import * as GeoLocation from 'nativescript-geolocation';
    import { Accuracy } from "tns-core-modules/ui/enums";
    import { 
        longitude,
        latitude,
        unitSystem,
        currentweather,
        loading, 
        error
    } from './stores';
    import { getWeather } from './api/api'; 

    import WeatherInfo from './components/WeatherInfo.svelte';
    import ActionBar from './components/ActionBar.svelte';
    import ErrorBlock from './components/ErrorBlock.svelte';
    import WeatherDetails from './components/WeatherDetails.svelte';
    import WeatherCard from './components/WeatherCard.svelte';

    async function getLocation() {
        try {
            const request = await GeoLocation.enableLocationRequest(true);
            const response = await GeoLocation.isEnabled();
            if (!response) {
                $error = false;
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
    <ActionBar getWeather={getWeather}/>
    
        {#if !$loading}
            <stackLayout orientation="vertical" textWrap="true">
                <WeatherInfo />
                <WeatherDetails />
            </stackLayout>
        {:else if !$error}
        <stackLayout orientation="vertical" textWrap="true" horizontalAlignment="center" verticalAlignment="center" >
            <ErrorBlock />
        </stackLayout>
        {:else}
            <stackLayout orientation="vertical" textWrap="true" horizontalAlignment="center" verticalAlignment="center" >
                <activityIndicator 
                    busy="{$loading}" color="#ffffff" width="50" height="50" col="0" row="0"  >
                </activityIndicator>
            </stackLayout>
        {/if}
</page>

<style>
    .main {
        font-size: 20px;
        color: #ffffff;
        background-image: linear-gradient(to bottom right, #19ffec, #0077ff);
    }
    
</style>