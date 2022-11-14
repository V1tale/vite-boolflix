import { reactive } from 'vue'
export const store = reactive({
    // URL: `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=it&query=${this.query}`,
    apiKey: `8b8eab531e0cb697ecebdaae0f359829`,
    movies: [],
    query:"ciao",
    value: "",
});