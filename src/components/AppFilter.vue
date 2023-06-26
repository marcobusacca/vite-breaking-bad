<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO STORE.JS
import { store } from '../store.js';

export default {
    props: {
        pokemonTypeList: Object
    },
    data() {
        return {
            // DICHIARO STORE.JS
            store,
        }
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <!-- Type Col -->
    <div class="col">
        <!-- Name Input -->
        <input type="text" name="name-search" id="name-search" placeholder="Cerca un pokemon" v-model="store.nameSearched" @input="$emit('search')">
        <!-- Type Select -->
        <select name="type-select" id="type-select" class="form-select" v-model="store.typeSelected" @change="$emit('filter')">
            <option value="All" selected>All</option>
            <option v-for="(type, index) in store.pokemonTypeList" :key="index" :value="type" v-text="type"></option>
        </select>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

.col {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    * {
        margin: 0 20px;
    }

    #name-search {
        width: 300px;
        height: 35px;
        padding: 10px;
    }

    #type-select {
        width: 150px;
        height: 40px;
    }
}
</style>