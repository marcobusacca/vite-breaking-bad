<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO AXIOS
import axios from 'axios';

// IMPORTO STORE.JS
import { store } from './store.js';

// IMPORTO APP_HEADER
import AppHeader from './components/AppHeader.vue';

// IMPORTO APP_MAIN
import AppMain from './components/AppMain.vue';

export default {
    // OGGETTO COMPONENTS
    components: {
        // DICHIARO APP_HEADER
        AppHeader,

        // DICHIARO APP_MAIN
        AppMain
    },
    data() {
        return {
            // DICHIARO STORE.JS
            store,
        }
    },
    created() {
        // CHIAMATA API POKEMONS
        axios.get(store.apiUrl).then((result) => {
            // INSERISCO L'ARRAY DI OGGETTI DENTRO STORE.JS
            store.pokemonList = result.data.docs;

            // CHIAMATA API POKEMONS TYPE
            axios.get(store.typeApiUrl).then((result) => {
                // INSERISCO L'ARRAY DI OGGETTI DENTRO STORE.JS
                store.pokemonTypeList = result.data;

                // INSERISCO DENTRO POKEMON_TYPE_LIST 'ALL' COME PRIMO ELEMENTO
                store.pokemonTypeList.unshift('All');
            });

            // APPENA LA CHIAMATA API è STATA COMPLETATA, SETTO LA VARIABILE LOADING SU FALSE
            store.loading = false;
        })
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
  <AppHeader/>
  <AppMain/>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use './styles/generals.scss' as *;
</style>