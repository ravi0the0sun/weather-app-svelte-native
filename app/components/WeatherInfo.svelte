<script>
    import { currentweather } from '../stores'

    const {
        main: { temp },
        weather: [details],
        name,
    } = $currentweather;
    const { icon, main, description } = details;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

</script>


<image class="img-center" src="{iconUrl}" />
<label class="weather-temp" text="{temp}°" />
<label class="weather-des" text="{description}"/>
<label class="weather-main" text={main}/>


<style>
    .img-center {
        position: absolute;
        width: 200px;
        height: 200px;
        top: 10%;
    }
    .weather-temp {
        position:absolute;
        font-size: 40px;
        color: #ffffff;
    }
    .weather-des {
        top:100px;
        color:#ffffff;
        text-transform: capitalize; 
    }
    .weather-main {
        font-size: 20;
        color: #ffffff;
        font-weight: 500px;
        margin-top: 10px;
    }
</style>