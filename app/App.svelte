<script>
    import { onMount } from 'svelte';
    import { 
        longitude,
        latitude,
        unitSystem,
        currentweather,
        loading, 
        error
    } from './stores';
    import { getWeather } from './api/api'; 
    import * as GeoLocation from 'nativescript-geolocation';

    import WeatherInfo from './components/WeatherInfo.svelte';
    import ActionBar from './components/ActionBar.svelte';
    import ErrorBlock from './components/ErrorBlock.svelte';
    import WeatherDetails from './components/WeatherDetails.svelte';
    import WeatherCard from './components/WeatherCard.svelte';

    async function getLocation() {
        try {
            GeoLocation.enableLocationRequest(true).catch((err) => {
                throw new Error('Location Access Denied');
            });
            const response = await GeoLocation.isEnabled();
            if (!response) {
                throw new Error('Location Access Denied');
            }
            const location = await GeoLocation.getCurrentLocation({});
            $longitude = location.longitude || 0;
            $latitude = location.latitude || 0; 
            $currentweather = await getWeather($latitude, $longitude, $unitSystem);
            $loading = false;
        } catch (err) {
            $error = err.message;
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
        {:else if $error}
        <stackLayout orientation="vertical" textWrap="true" horizontalAlignment="center" verticalAlignment="center" >
            <ErrorBlock />
        </stackLayout>
        {:else}
            <stackLayout orientation="vertical" textWrap="true" horizontalAlignment="center" verticalAlignment="center" >
                <activityIndicator 
                    busy={$loading} color="#ffffff" width="50" height="50" col="0" row="0"  >
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