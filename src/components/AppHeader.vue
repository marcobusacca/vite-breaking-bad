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
        border: 6px solid #fff;
        border-radius: 50%;
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, rgba(73, 73, 255, 1) 50%);
    }

    .circle {
        width: 50px;
        height: 50px;
        background-color: #4949FF;
        border: 3px solid #fff;
        border-radius: 50%;
    }

    .btn-red {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, #FF3E3E 50%);
    }

    .btn-yellow {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, #FFFF47 50%);
    }

    .btn-green {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, #3D9E3D 50%);
    }
}
</style>