<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO AXIOS
import axios from 'axios';

// IMPORTO STORE.JS
import { store } from './store.js';

// IMPORTO APP_HEADER
import AppHeader from './components/AppHeader.vue';

// IMPORTO APP_FILTER
import AppFilter from './components/AppFilter.vue';

// IMPORTO APP_MAIN
import AppMain from './components/AppMain.vue';

export default {
    // OGGETTO COMPONENTS
    components: {
        // DICHIARO APP_HEADER
        AppHeader,

        // IMPORTO APP_FILTER
        AppFilter,

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
        // CHIAMATA API POKEMONS TYPE
        axios.get(store.typeApiUrl).then((result) => {

            // INSERISCO L'ARRAY DI OGGETTI DENTRO STORE.JS
            store.pokemonTypeList = result.data;
        });

        // RICHIAMO LA FUNZIONE GET_POKEMON PER LA CHIAMATA API POKEMONS
        this.getPokemon();
    },
    methods: {
        getPokemon() {
            // IMPOSTO LA VARIABILE LOADING SU TRUE
            store.loading = true;

            // RECUPERO L'URL DELLA CHIAMATA API POKEMONS
            let myUrl = store.apiUrl;

            // CONTROLLO CHE L'UTENTE ABBIA INSERITO UNA STRINGA NEL CAMPO DI RICERCA NOME POKEMON
            if (store.nameSearched !== '') {

                // INSERISCO IL FILTRAGGIO SCELTO DALL'UTENTE NELL'URL DELLA CHIAMATA API POKEMONS
                myUrl += `?start[name]=${store.nameSearched}`;
            }

            // CONTROLLO CHE L'UTENTE ABBIA SELEZIONATO UN TIPO DIVERSO DA "ALL"
            if (store.typeSelected !== 'All') {

                // CONTROLLO CHE L'UTENTE ABBIA INSERITO UNA STRINGA NEL CAMPO DI RICERCA NOME POKEMON
                if (store.nameSearched !== '') {

                    // INSERISCO IL FILTRAGGIO SCELTO DALL'UTENTE NELL'URL DELLA CHIAMATA API POKEMONS
                    myUrl += `&eq[type1]=${store.typeSelected}`;
                } else {

                    // INSERISCO IL FILTRAGGIO SCELTO DALL'UTENTE NELL'URL DELLA CHIAMATA API POKEMONS
                    myUrl += `?eq[type1]=${store.typeSelected}`;
                }
            }
            // CHIAMATA API POKEMONS
            axios.get(myUrl).then((result) => {
                // INSERISCO L'ARRAY DI OGGETTI DENTRO STORE.JS
                store.pokemonList = result.data.docs;

                // APPENA LA CHIAMATA API è STATA COMPLETATA, SETTO LA VARIABILE LOADING SU FALSE
                store.loading = false;
            })
        }
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <header>
        <div class="container my-5">
            <div class="row">
                <AppHeader/>
                <AppFilter @search="getPokemon" @filter="getPokemon"/>
            </div>
        </div>  
    </header>
    <AppMain/>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use './styles/generals.scss' as *;
</style>