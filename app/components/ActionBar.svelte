<script>
    import {
        currentweather, 
        unitSystem, 
        latitude, 
        longitude, 
        loading, 
        iconUnicode 
    } from '../stores';

    import { getWeather } from '../api';
    

    async function changeUnit() {
        if ($unitSystem == 'metric') {
            $loading = true;
            $unitSystem = 'imperial';
            $currentweather = await getWeather($latitude, $longitude, $unitSystem);
            $loading = false;
        } else {
            $loading = true;
            if ($currentweather.main.temp < 77) {
                $currentweather = {main: {temp: 0}};
            };
            $unitSystem = 'metric';
            $currentweather = await getWeather($latitude, $longitude, $unitSystem);
            $loading = false;
        }
    }
</script>

<actionBar class="fas action-bar" title="">
    <actionItem icon="font://{$iconUnicode}" class="fas icon" ios.position="right" on:tap="{changeUnit}" />
</actionBar>

<style>
    .icon {
        font-size: 10px;
    }
    .action-bar {
        color: #ffffff;
        text-align: center;
        border-style: hidden;
        background-color: rgba(1, 1, 1, 0);
        z-index: -1;
    }
</style>