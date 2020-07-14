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
<gridLayout class="weather-info info" >
    <label class="weather-temp" text="{temp}°" />
    <label class="weather-des" text="{description}"/>
    <label class="weather-main" text={main}/>
</gridLayout>


<style>
    .weather-info {
        align-items: center;
    }
    .img-center {
        width: 500px;
        height: 500px;
        top: -400px;
    }
    .weather-temp {
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