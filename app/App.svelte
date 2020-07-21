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
    import { getWeather } from './api'; 

    import WeatherInfo from './components/WeatherInfo.svelte';
    import ActionBar from './components/ActionBar.svelte';
    import ErrorBlock from './components/ErrorBlock.svelte'
    import WeatherDetails from './components/WeatherDetails.svelte';
    import WeatherCard from './components/WeatherCard.svelte'

    async function getLocation() {
        try {
            const request = await GeoLocation.enableLocationRequest(true);
            const response = await GeoLocation.isEnabled();
            if (!response) {
                $error = true;
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
    <stackLayout orientation="vertical" horizontalAlignment="center" verticalAlignment="center" textWrap="true">
        {#if !$loading}
            <WeatherInfo />
            <WeatherCard />
            <!--<WeatherDetails />-->
        {:else if ($error)}
            <ErrorBlock />
        {:else}
            <activityIndicator 
                busy="{$loading}" color="#ffffff" width="100" height="100" col="0" row="0" >
            </activityIndicator>
        {/if}
    </stackLayout>
</page>

<style>
    .main {
        font-size: 20px;
        color: #ffffff;
        background-image: linear-gradient(to bottom right, #0077ff, #19ffec);
    }
    
</style>