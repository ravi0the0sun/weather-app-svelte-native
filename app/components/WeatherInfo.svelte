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
<gridLayout class="weather-info info" horizontalAlignment="center" verticalAlignment="center" textWrap="true">
    <label >
        <formattedString>
            <span class="weather-temp" text="{temp}°" />
        </formattedString>
    </label>
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
        color: #ff304f;
    }
    .weather-des {
        top:100px;
        text-transform: capitalize; 
    }
    .weather-main {
        font-size: 20;
        color: #002651;
        font-weight: 500px;
        margin-top: 10px;
    }
</style>