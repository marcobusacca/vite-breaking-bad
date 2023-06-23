<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
    props: {
        pokemon: Object
    },
    computed: {
        UpperCasePokemon() {
            return this.pokemon.name.toUpperCase();
        }
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <!-- Main Card -->
    <div class="main-card py-3">
        <!-- Card Image -->
        <div class="card-image" :style="`background-image: url('${pokemon.imageUrl}')`"></div>
        <!-- Card Number -->
        <div class="card-number my-2">
            <span v-text="pokemon.number"></span>
        </div>
        <!-- Card Name -->
        <div class="card-name">
            <h1 v-text="UpperCasePokemon" class="fs-5 fw-bold"></h1>
        </div>
        <!-- Card Type -->
        <div class="card-type">
            <span v-text="pokemon.type1" class="fs-5 fst-italic"></span>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

.main-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    .card-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #fff;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
}
</style>