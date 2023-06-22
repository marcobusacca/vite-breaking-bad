<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {

}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <header>
        <div class="container my-5">
            <div class="row">
                <div class="header-col">
                    <!-- Blue Big Button -->
                    <div class="btn-big-blue"></div>
                    <!-- Red Button -->
                    <div class="circle btn-red"></div>
                    <!-- Yellow Button -->
                    <div class="circle btn-yellow"></div>
                    <!-- Green Button -->
                    <div class="circle btn-green"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

.header-col {
    display: flex;

    * {
        margin: 0 15px;
    }

    .btn-big-blue {
        width: 100px;
        height: 100px;
        background-color: #4949FF;
        border: 6px solid #fff;
        border-radius: 50%;
    }

    .circle {
        width: 50px;
        height: 50px;
        background-color: #4949FF;
        border: 3px solid #fff;
        border-radius: 50%;
    }

    .btn-red {
        background-color: #FF3E3E;
    }

    .btn-yellow {
        background-color: #FFFF47;
    }

    .btn-green {
        background-color: #3D9E3D;
    }
}
</style>