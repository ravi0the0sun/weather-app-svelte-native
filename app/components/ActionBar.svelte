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

    async function changeUnit() {
        if ($unitSystem == 'metric') {
            $unitSystem = 'imperial';
            await reload();
        } else {
            if ($currentweather.main.temp < 77) {
                $currentweather = {main: {temp: 0}};
            };
            $unitSystem = 'metric';
            await reload();
        }
    }
    async function reload() {
        $loading = true;
        $error = false;
        $currentweather = await getWeather($latitude, $longitude, $unitSystem);
        $loading = false;
    }
</script>

<actionBar class="fas action-bar" title="">
    <actionItem icon="font://{$iconUnicode}" class="fas icon" ios.position="right" on:tap="{changeUnit}" />
    <actionItem icon="font://{'\uf2f9'}" class="fas icon " ios.position="right" on:tap="{reload}" />
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

</style>