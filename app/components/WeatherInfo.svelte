<script>
    import { currentweather, unitSystem } from '../stores'
    import WeatherIcon from './WeatherIcon.svelte';

    const {
        main: { temp },
        weather: [details],
        name,
    } = $currentweather;
    const { main, description } = details;

</script>

<gridLayout columns="*" rows="auto,auto,auto,auto,auto" class="weather-info">

    <label class="weather-name" >
        <formattedString>
            <span class="fas" text="&#xf3c5;" />
            <span text=" {name}" />
        </formattedString>
    </label>

    <WeatherIcon col="0" row="1" />

    <label col="0" row="2" class="weather-temp" text="{temp}°{$unitSystem === 'metric'? 'C' : 'F'}" />

    <label col="0" row="3" class="weather-des" text="{description}"/>

    <label col="0" row="4" class="weather-main" text="{main}"/>

</gridLayout>


<style>
    .weather-info {
        padding-top: 490px;
        padding-bottom: 260px;
        text-align: center;
        font-size: 20px;
        text-transform: capitalize;
    }
    .weather-temp {
        font-size: 40px;
    }
    .weather-name {
        font-size: 13px;
    }
    .weather-des {
        text-transform: capitalize;
    }
    .weather-main {
        font-weight: 500;
        color: rgba(255, 255, 255, .9);
    }
</style>