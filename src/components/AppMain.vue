<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO APP_POKEMON_CARD
import AppPokemonCard from './AppPokemonCard.vue';

export default {
    // OGGETTO COMPONENTS
    components: {
        // DICHIARO APP_POKEMON_CARD
        AppPokemonCard
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <AppPokemonCard/>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>