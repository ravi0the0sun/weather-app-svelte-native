<script>
    export let currentweather; 

    const {
        main: { temp },
        weather: [details],
        name,
    } = currentweather;
    const { icon, main, description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

</script>

<label class="info" horizontalAlignment="center" verticalAlignment="center" textWrap="true">
    <formattedString>
        <image scr="{iconUrl}" class="img-center" />
        <span class="weather-temp" text="{temp}°" />
        <span class="weather-des" text="{description}" />
        <span class="weather-main" text="{main}" />
    </formattedString>
</label>

<style>
    .img-center {
        width: 100px;
        height: 100px;
    }
    .weather-temp {
        font-size: 40px;
        color: #ff304f;
    }
    .weather-des {
        text-transform: capitalize;   
    }
    .weather-main {
        font-size: 20;
        color: #002651;
        font-weight: 500px;
        margin-top: 10px;
    }
</style>