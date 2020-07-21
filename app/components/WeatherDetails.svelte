<script>
    import { currentweather, unitSystem } from '../stores';
    import WeatherCard from './WeatherCard.svelte'

    const { main: { feels_like, pressure, humidity, }, wind: { speed } } = $currentweather;
    const feelsLike = `${feels_like}°${$unitSystem == 'metric' ? 'C' : 'F'}`;
    const windSpeed = `${speed}${$unitSystem == 'metric' ? 'm/s' : 'mhp'}`;
    const feeds = [
        { icon: '\uf2c9', heading: 'Feels Like', data: feelsLike, location: {col: 0, row: 0} },
        { icon: '\uf3fd', heading: 'Pressure', data: `${pressure}hPa`, location: {col: 0, row: 1} },
        { icon: '\uf043', heading: 'Humidity', data: `${humidity}%`, location: {col: 1, row: 0} },
        { icon: '\uf72e', heading: 'Wind Speed', data: windSpeed, location: {col: 1, row: 1} }
    ];
</script>

<gridLayout columns="*,*" rows="auto,auto" width="330" height="150">
    {#each feeds as { icon, heading, data, location}}
        <WeatherCard icon={icon} heading={heading} data={data} location={location} />
    {/each}
</gridLayout>

<style>
</style>
