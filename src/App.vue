<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppSearch from "./components/AppSearch.vue"
import {store} from "./store";
import axios from "axios";
export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppSearch,
  },
  methods: {
        getData() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&language=it&query=${this.store.Searchbar}`).then((resp) => {
                this.store.movies = resp.data.results
                console.log(store.movies);
            }
            ),
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&language=it&query=${this.store.Searchbar}`).then((series) => {
                this.store.series = series.data.results
                console.log(store.series);
            })
    }
}
}

</script>


<template>
  <AppHeader @getList="getData()"/>
  <AppMain />
</template>

<style lang="scss">
</style>