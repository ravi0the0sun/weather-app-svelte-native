<script>
    import { currentweather } from '../stores';
    let className;

    // export let icon = '\uf2c9';
    // export let heading = 'Feels Like';
    let icon = '\uf2c9';
    let { main: { feels_like } } = $currentweather;
    let heading = 'Feels Like';
    // export let data;
    // export let location; 
    // let { col, row } = location;
    function animation() {
        className = '';
        setTimeout(() => {
            className = 'view';
        }, 1); 
    }
</script>

<gridLayout columns="*,*" rows="auto,auto,auto" class="card">
    <label row="0" col="0" rowSpan="2" class="fas icon view {className}" text="{icon}" on:tap="{animation}"/>
    <label row="0" col="1" class="heading" text="{heading}"/>
    <label row="1" col="1" text="{feels_like}" class="feel"/>
</gridLayout>

<style>
    .card {
        margin-top: 30px;
        text-align: center;
    }
    .icon {
        font-size: 40px;
    }
    .heading {
        font-weight: 500;
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