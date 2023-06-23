// IMPORTO REACTIVE DA VUE
import { reactive } from "vue";

// ESPORTO LA CONSTANTE STORE CONTENENTE TUTTI GLI ELEMENTI ACCESSIBILI AD OGNI COMPONENTE VUE
export const store = reactive({
    apiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
    typeApiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1',
    pokemonList: [],
    pokemonTypeList: [],
    typeSelected: 'All',
    loading: true,
});