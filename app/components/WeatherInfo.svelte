<script>
    import { currentweather, weatherIconId, unitSystem } from '../stores'

    const {
        main: { temp },
        weather: [details],
        name,
    } = $currentweather;
    const { icon, main, description } = details;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

</script>
<gridLayout columns="*" rows="auto,auto,auto,auto,auto">
    <image col="0" row="0" class="img-center" src="{iconUrl}" />
    <label col="0" row="1" class="weather-temp" text="{temp}°{$unitSystem==='metric'? 'C' : 'F'}" />
    <label col="0" row="2" class="weather-des" text="{description}"/>
    <label col="0" row="3" class="weather-main" text="{main}"/>
    <label col="0" row="4" class="weather-main" text="{$weatherIconId}"/>
</gridLayout>


<style>
    .img-center {
        text-align: center;
        position: absolute;
        width: 300px;
        height: 300px;
    }
    .weather-temp {
        position: absolute;
        text-align: center;
        position:absolute;
        font-size: 40px;
    }
    .weather-des {
        position: absolute;
        text-align: center;
        top:100px;
        text-transform: capitalize; 
    }
    .weather-main {
        position: absolute;
        text-align: center;
        font-size: 20px;
        font-weight: 500px;
        margin-top: 10px;
    }
</style>