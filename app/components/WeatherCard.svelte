<script>
    let className;

    export let icon;
    export let heading;
    export let data;
    export let location; 
    let { col, row } = location;
    function animation() {
        className = '';
        setTimeout(() => {
            className = 'view';
        }, 0);
    }
</script>

<gridLayout columns="50,*" rows="auto,auto,auto" class="card" col="{col}" row="{row}">
    <label row="0" col="0" rowSpan="2" class="fas icon {className}" text="{icon}" on:tap="{animation}"/>
    <label row="0" col="1" class="heading" text="{heading}"/>
    <label row="1" col="1" text="{data}" class="feel"/>
</gridLayout>

<style>
    .card {
        margin-top: 50px;
        text-align: center;
        font-size: 15px;
        
    }
    .icon {
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 30px;
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