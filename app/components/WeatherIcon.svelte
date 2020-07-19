<script>

    import { draw } from 'svelte/transition';
    import { weatherIconId, weatherId } from '../stores';

    export let col;
    export let row;

    const iconId = $weatherIconId;
    const id = $weatherId;

</script>

{#if (id < 300)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf0e7;"/>
{:else if (id < 400)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf73d;"/>
{:else if (id < 505)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf743;"/>
{:else if (id === 500 || id < 700)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf2dc;"/>
{:else if (id < 532)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf740;"/>
{:else if (id < 800)}
    <label col="{col}" row="{row}" class="fas image" text="&#xf75f;"/>
{:else if (id === 800)}
    {#if (iconId == '01d')} 
        <label col="{col}" row="{row}" class="fas image" text="&#xf185;"/>
    {:else}
        <label col="{col}" row="{row}" class="fas image" text="&#xf186;"/>
    {/if}
{:else if (id < 900)}
    {#if (iconId == '02d')} 
        <label col="{col}" row="{row}" class="fas image" text="&#xf6c4;"/>
    {:else if (iconId == '02n')}
        <label col="{col}" row="{row}" class="fas image" text="&#xf6c3;"/>
    {:else}
        <label col="{col}" row="{row}" class="fas image" text="&#xf0c2;"/>
    {/if}
{:else}
    <label col="{col}" row="{row}" class="fas image" text="&#xf743;"/>
{/if}

<style>
    .image {
        margin-top: 20px;
        font-size: 80px;
    }
</style>




