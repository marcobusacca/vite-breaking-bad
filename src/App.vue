<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO AXIOS
import axios from 'axios';

// IMPORTO APP_HEADER
import AppHeader from './components/AppHeader.vue';

// IMPORTO APP_MAIN
import AppMain from './components/AppMain.vue';

// IMPORTO STORE.JS
import { store } from './store.js';

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
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons').then((result) => {
            // INSERISCO L'ARRAY DI OGGETTI DENTRO STORE.JS
            store.pokemonList = result.data.docs;
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