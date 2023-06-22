<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO AXIOS
import axios from 'axios';

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
    }
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