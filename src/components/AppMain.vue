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
    <main>
        <div class="container main-container">
            <div class="row main-row">
                <div class="main-col">

                </div>
            </div>
        </div>
        <AppPokemonCard/>
    </main>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

.main-container {
    background-color: #DEDEDE;
    height: 30vh;
    padding: 50px 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .row {
        background-color: #4B5156;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
}
</style>