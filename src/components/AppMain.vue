<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO APP_POKEMON_CARD
import AppPokemonCard from './AppPokemonCard.vue';

// IMPORTO STORE.JS
import { store } from '../store.js';

export default {
    // OGGETTO COMPONENTS
    components: {
        // DICHIARO APP_POKEMON_CARD
        AppPokemonCard
    },
    data() {
        return {
            // DICHIARO STORE.JS
            store,
        }
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <main>
        <!-- Main Container -->
        <div class="container main-container">
            <!-- Main Row -->
            <div class="row main-row">
                <!-- Main Col -->
                <div class="main-col" v-for="(pokemon, index) in store.pokemonList" :key="index" :class=" pokemon.type1 === 'Grass' ? 'bg-green' : pokemon.type1 === 'Fire' ? 'bg-red' : pokemon.type1 === 'Water' ? 'bg-blue' : '' ">
                    <AppPokemonCard :pokemon="pokemon"/>
                </div>
            </div>
        </div>
    </main>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

.main-container {
    background-color: #DEDEDE;
    padding: 50px 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .main-row {
        background-color: #4B5156;
        width: 100%;
        height: 100%;
        overflow-y: scroll;

        .main-col {
            width: calc(100% / 5 - 20px);
            margin: 20px 10px;
            border-radius: 15px;
        }

        .bg-green {
            background-color: #DEFDE0;
        }

        .bg-red {
            background-color: #FDDFDF;
        }

        .bg-blue {
            background-color: #DEF3FD;
        }
    }
}
</style>