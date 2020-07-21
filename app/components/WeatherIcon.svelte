<script>

    import { draw } from 'svelte/transition';
    import { currentweather } from '../stores';

    export let col;
    export let row;

    let iconUnicode;
    let className;

    const {
        weather: [details],
    } = $currentweather;
    const { id, icon } = details;

    if (id > 199 && id < 300) {
        iconUnicode = '\uf0e7';
    } else if (id < 400) {
        iconUnicode = '\uf73d';
    } else if (id > 501 && id < 505) {
        iconUnicode = '\uf743';
    } else if (id > 505 && id < 532) {
        iconUnicode = '\uf740'
    } else if (id === 500 || id < 700) {
        iconUnicode = '\uf2dc';
    } else if (id < 800) {
        iconUnicode = '\uf75f';
    } else if (id === 800) {
        if (icon == '01d') {
            iconUnicode = '\uf185';
        } else {
            iconUnicode = '\uf186';
        }
    } else if (id < 900) {
        if (icon == '02d') {
            iconUnicode = '\uf6c4';
        } else if (icon == '02n') {
            iconUnicode = '\uf6c3';
        } else {
            iconUnicode = '\uf0c2';
        }
    }
    function animation() {
        className = '';
        setTimeout(() => {
            className = 'view';
        }, 1);
    }

</script>

{#if iconUnicode}
    <label col="{col}" row="{row}" class="fas image {className}" text="{iconUnicode}" on:tap="{animation}"/>
{:else}
    <activityIndicator 
        busy="{true}" color="#ffffff" width="50" height="50" col="{col}" row="{row}" >
    </activityIndicator>
{/if}


<style>
    .image {
        font-size: 80px;
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




