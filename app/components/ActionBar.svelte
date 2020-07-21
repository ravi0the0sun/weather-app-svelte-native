<script>
    import {
        currentweather, 
        unitSystem, 
        latitude, 
        longitude, 
        loading, 
        iconUnicode,
        error 
    } from '../stores';

    import { getWeather } from '../api';

    let className;
    
    async function changeUnit() {
        if ($unitSystem == 'metric') {
            $loading = true;
            $error = false;
            $unitSystem = 'imperial';
            $currentweather = await getWeather($latitude, $longitude, $unitSystem);
            $loading = false;
        } else {
            $loading = true;
            $error = false;
            if ($currentweather.main.temp < 77) {
                $currentweather = {main: {temp: 0}};
            };
            $unitSystem = 'metric';
            $currentweather = await getWeather($latitude, $longitude, $unitSystem);
            $loading = false;
        }
    }
    async function reload() {
        className = '';
        setTimeout(() => {
            className = 'view';
        }, 0);
        $loading = true;
        $error = false;
        $currentweather = await getWeather($latitude, $longitude, $unitSystem);
        $loading = false;
    }
</script>

<actionBar class="fas action-bar" title="">
    <actionItem icon="font://{$iconUnicode}" class="fas icon" ios.position="right" on:tap="{changeUnit}" />
    <actionItem icon="font://{'\uf2f9'}" class="fas icon {className}" ios.position="right" on:tap="{reload}" />
</actionBar>

<style>
    .icon {
        font-size: 7px;
    }
    .action-bar {
        color: #ffffff;
        text-align: center;
        border-style: hidden;
        background-color: rgba(1, 1, 1, 0);
        z-index: -1;
    }
    .view {
        animation-name: rotate;
        animation-duration: 1s;
    }
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
</style>