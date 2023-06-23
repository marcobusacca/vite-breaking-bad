<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="col">
        <!-- Blue Big Button -->
        <div class="circle big-circle circle-blue"></div>
        <!-- Red Button -->
        <div class="circle small-circle circle-red"></div>
        <!-- Yellow Button -->
        <div class="circle small-circle circle-yellow"></div>
        <!-- Green Button -->
        <div class="circle small-circle circle-green"></div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

.col {
    display: flex;

    * {
        margin: 0 15px;
    }

    .circle {
        border-radius: 50%;
        border-style: solid;
        border-color: #fff;
    }

    .small-circle {
        width: 50px;
        height: 50px;
        border-width: 3px;
    }

    .big-circle {
        width: 100px;
        height: 100px;
        border-width: 6px;
    }

    .circle-blue {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, rgba(73, 73, 255, 1) 50%);
    }

    .circle-red {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, #FF3E3E 50%);
    }

    .circle-yellow {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, #FFFF47 50%);
    }

    .circle-green {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, #3D9E3D 50%);
    }
}
</style>