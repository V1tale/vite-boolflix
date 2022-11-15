<script>
import axios from "axios";
import {store} from "../store"
export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    },
    methods: {
        getData() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&language=it&query=${this.Searchbar}`).then((resp) => {
                this.store.movies = resp.data.results
                console.log(store.movies);
            }
            )
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&language=it&query=${this.Searchbar}`).then((series) => {
                this.store.series = series.data.results
                console.log(store.series);
            })
            this.Searchbar = "";
    }
}
}

</script>

<template>
    <label for="Search-bar"></label>
    <input  @keyup.enter="getData()" id="search-bar" type="text" v-model="Searchbar">
    <button @click="getData()">Search!</button>
</template>

<style lang="scss">
button {
    margin-left:3px;
    padding:5px;
    color:white;
    background-color: black;
    border:2px solid red;
    border-radius: 5px;
    cursor:pointer;
}
button:hover {
    background-color: rgba(255, 0, 0, 0.3);
}
input:focus {
    outline: none;
}
</style>