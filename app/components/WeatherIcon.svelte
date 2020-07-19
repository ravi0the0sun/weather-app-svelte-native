<script>

    import { draw } from 'svelte/transition';
    import { currentweather } from '../stores';

    export let col;
    export let row;

    const {
        weather: [details],
    } = $currentweather;
    let { id, icon } = details;

</script>

{#if (id > 199 && id < 300)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf0e7;"/>
{:else if (id < 400)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf73d;"/>
{:else if (id > 501 && id < 505)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf743;"/>
{:else if (id > 505 && id < 532)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf740;"/>
{:else if (id === 500 || id < 700)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf2dc;"/>
{:else if (id < 800)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf75f;"/>
{:else if (id === 800)}
    {#if (icon == '01d')} 
        <label col="{col}" row="{row}" class="fas image" text="&#xf185;"/>
    {:else}
        <label col="{col}" row="{row}" class="fas image" text="&#xf186;"/>
    {/if}
{:else if (id < 900)}
    {#if (icon == '02d')} 
        <label col="{col}" row="{row}" class="fas image" text="&#xf6c4;"/>
    {:else if (icon == '02n')}
        <label col="{col}" row="{row}" class="fas image" text="&#xf6c3;"/>
    {:else}
        <label col="{col}" row="{row}" class="fas image" text="&#xf0c2;"/>
    {/if}
{:else}
    <activityIndicator col="{col}" row="{row}" busy="{true}" color="#ffffff" width="50" height="50"></activityIndicator>
{/if}
<style>
    .image {
        margin-top: 130px;
        font-size: 80px;
    }
</style>




