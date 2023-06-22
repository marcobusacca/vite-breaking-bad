<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO APP_POKEMON_CARD
import AppPokemonCard from './AppPokemonCard.vue';

// IMPORTO APP_LOADER
import AppLoader from './AppLoader.vue';

// IMPORTO STORE.JS
import { store } from '../store.js';

export default {
    // OGGETTO COMPONENTS
    components: {
        // DICHIARO APP_POKEMON_CARD
        AppPokemonCard,

        // DICHIARO APP_LOADER
        AppLoader
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
            <div class="row main-row" v-if="store.loading === false">
                <!-- Main Col -->
                <div class="main-col" v-for="(pokemon, index) in store.pokemonList" :key="index" :class=" pokemon.type1 === 'Grass' ? 'bg-grass' : pokemon.type1 === 'Fire' ? 'bg-fire' : pokemon.type1 === 'Water' ? 'bg-water' : '' ">
                    <AppPokemonCard :pokemon="pokemon"/>
                </div>
            </div>
            <!-- Main Row -->
            <div class="row loader-row" v-else>
                <AppLoader/>
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
        width: 100%;
        background-color: #4B5156;
        overflow-y: scroll;

        .main-col {
            width: calc(100% / 5 - 20px);
            margin: 20px 10px;
            border-radius: 15px;
        }

        .bg-grass {
            background-color: $GrassColor;
        }

        .bg-fire {
            background-color: $FireColor;
        }

        .bg-water {
            background-color: $WaterColor;
        }
    }

    .loader-row {
        width: 100%;
        background: linear-gradient(115deg, rgba(0, 0, 0, 0.788) 0%, rgba(75, 81, 86, 1) 100%);
    }
}
</style>