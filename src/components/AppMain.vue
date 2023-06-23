<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO STORE.JS
import { store } from '../store.js';

// IMPORTO APP_POKEMON_CARD
import AppPokemonCard from './AppPokemonCard.vue';

// IMPORTO APP_LOADER
import AppLoader from './AppLoader.vue';

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
    methods: {
        changeBackgroundCard(pokemon) {

            // INSERISCO UNA VARIABILE CHE CONTERRA LA CLASSE DA APPLICARE
            let classCard;

            // L'UTENTE HA SELEZIONATO IL FILTRO "ALL"
            if (store.typeSelected === 'All') {

                // CONTROLLO IL TYPE DI OGNI POKEMON
                switch (pokemon.type1) {

                    // IL TIPO DEL POKEMON è "GRASS"
                    case 'Grass':
                        classCard = 'bg-grass';
                        break;

                    // IL TIPO DEL POKEMON è "FIRE"
                    case 'Fire':
                        classCard = 'bg-fire';
                        break;

                    // IL TIPO DEL POKEMON è "WATER"
                    case 'Water':
                        classCard = 'bg-water';
                        break;
                }

            } else { // L'UTENTE HA SELEZIONATO UN FILTRO DIVERSO DA "ALL"

                // CONTROLLO IL TYPE DI POKEMON SELEZIONATO DALL'UTENTE
                switch (store.typeSelected) {

                    // IL TIPO DEI POKEMON è "GRASS"
                    case 'Grass':
                        classCard = 'bg-grass';
                        break;

                    // IL TIPO DEI POKEMON è "FIRE"
                    case 'Fire':
                        classCard = 'bg-fire';
                        break;

                    // IL TIPO DEI POKEMON è "WATER"
                    case 'Water':
                        classCard = 'bg-water';
                        break;

                    // IL TIPO DEI POKEMON è "BUG"
                    case 'Bug':
                        classCard = 'bg-bug';
                        break;

                    // IL TIPO DEI POKEMON è "DARK"
                    case 'Dark':
                        classCard = 'bg-dark';
                        break;

                    // IL TIPO DEI POKEMON è "DRAGON"
                    case 'Dragon':
                        classCard = 'bg-dragon';
                        break;

                    // IL TIPO DEI POKEMON è "ELECTRIC"
                    case 'Electric':
                        classCard = 'bg-electric';
                        break;

                    // IL TIPO DEI POKEMON è "FAIRY"
                    case 'Fairy':
                        classCard = 'bg-fairy';
                        break;

                    // IL TIPO DEI POKEMON è "FIGHTING"
                    case 'Fighting':
                        classCard = 'bg-fighting';
                        break;

                    // IL TIPO DEI POKEMON è "FLYING"
                    case 'Flying':
                        classCard = 'bg-flying';
                        break;

                    // IL TIPO DEI POKEMON è "GHOST"
                    case 'Ghost':
                        classCard = 'bg-ghost';
                        break;

                    // IL TIPO DEI POKEMON è "GROUND"
                    case 'Ground':
                        classCard = 'bg-ground';
                        break;

                    // IL TIPO DEI POKEMON è "ICE"
                    case 'Ice':
                        classCard = 'bg-ice';
                        break;

                    // IL TIPO DEI POKEMON è "NORMAL"
                    case 'Normal':
                        classCard = 'bg-normal';
                        break;

                    // IL TIPO DEI POKEMON è "POISON"
                    case 'Poison':
                        classCard = 'bg-poison';
                        break;

                    // IL TIPO DEI POKEMON è "PSYCHIC"
                    case 'Psychic':
                        classCard = 'bg-psychic';
                        break;

                    // IL TIPO DEI POKEMON è "ROCK"
                    case 'Rock':
                        classCard = 'bg-rock';
                        break;

                    // IL TIPO DEI POKEMON è "STEEL"
                    case 'Steel':
                        classCard = 'bg-steel';
                        break;
                }

            }
            return classCard;
        }
    }
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
                <div class="main-col" v-for="(pokemon, index) in store.pokemonList" :key="index" :class="changeBackgroundCard(pokemon)">
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

        .bg-bug {
            background-color: $BugColor;
        }

        .bg-dark {
            background-color: $DarkColor;
            color: #fff;
        }

        .bg-dragon {
            background-color: $DragonColor;
            color: #fff;
        }

        .bg-electric {
            background-color: $ElectricColor;
        }

        .bg-fairy {
            background-color: $FairyColor;
        }

        .bg-fighting {
            background-color: $FightingColor;
            color: #fff;
        }

        .bg-flying {
            background-color: $FlyingColor;
        }

        .bg-ghost {
            background-color: $GhostColor;
            color: #fff;
        }

        .bg-ground {
            background-color: $GroundColor;
        }

        .bg-ice {
            background-color: $IceColor;
        }

        .bg-normal {
            background-color: $NormalColor;
        }

        .bg-poison {
            background-color: $PoisonColor;
            color: #fff;
        }

        .bg-psychic {
            background-color: $PsychicColor;
        }

        .bg-rock {
            background-color: $RockColor;
        }

        .bg-steel {
            background-color: $SteelColor;
        }
    }

    .loader-row {
        width: 100%;
        background: linear-gradient(115deg, rgba(0, 0, 0, 0.788) 0%, rgba(75, 81, 86, 1) 100%);
    }
}
</style>