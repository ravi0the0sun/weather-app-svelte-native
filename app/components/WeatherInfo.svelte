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
<gridLayout horizontalAlignment="center" verticalAlignment="center" textWrap="true">
    <image col="0" class="img-center" src="{iconUrl}" />
    <label col="1" class="weather-temp" text="{temp}°" />
    <label col="2" class="weather-des" text="{description}"/>
    <label col="3" class="weather-main" text={main}/>
</gridLayout>


<style>
    .img-center {
        background-color: blue;
        position: absolute;
        width: 200px;
        height: 200px;
        top: 10%;
    }
    .weather-temp {
        background-color: red;
        position:absolute;
        font-size: 40px;
        color: #ffffff;
    }
    .weather-des {
        background-color: pink;
        top:100px;
        color:#ffffff;
        text-transform: capitalize; 
    }
    .weather-main {
        background-color: yellow;
        font-size: 20;
        color: #ffffff;
        font-weight: 500px;
        margin-top: 10px;
    }
</style>