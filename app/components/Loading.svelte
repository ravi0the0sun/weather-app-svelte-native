<absoluteLayout class="cv-wrapper">
    <absoluteLayout class="cv0">
        <label class="cv-ring" />
        <lable class="cv-lbl1" />
    </absoluteLayout>

    <absoluteLayout class="cv1">
        <label class="cv-lbl1" />
        <label class="inner-circle2" />
    </absoluteLayout>
</absoluteLayout>

<style>
    .cv-wrapper {
        height: 200;
        width: 200;
    }

    .cv0 {
        height: 200;
        width: 200;
        animation-name: rotate;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-delay: 200ms;
        animation-timing-function: ease-in-out;
    }

    .cv1 {
        height: 200;
        width: 200;
        animation-name: rotate;
        animation-duration: 2s;
        animation-timing-function: ease-out;
    }

    .cv-lbl1 {
        height: 100;
        width: 200;
    }

    .cv-ring {
        top: 36;
        left: 36;
        height: 128;
        width: 128;
        background-color: #ffe9b0;
        border-radius: 64;
    }

    .inner-circle2 {
        height: 100;
        width: 100;
        border-radius: 50%;
        top: 50;
        left: 50;
    }

    @keyframes rotate {
        from { transform: rotate(0deg); }
        to {transform: rotate(360deg); }
    }
</style>