<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {

}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <!-- Loader Container -->
    <div class="loader-wrapper">
        <!-- Loader Image -->
        <img src="/pokemon-icon.svg" alt="pokemon-icon">
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

.loader-wrapper {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 150px;
        animation: spin 1.2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>