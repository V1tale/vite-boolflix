<script>
import axios from "axios";
import {store} from "../store"
export default {
    name: "AppSearch",
    data() {
        return {

        }
    },
    methods: {
        getData() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&language=it&query=${this.Searchbar}`).then((resp) => {
            store.movies = resp.data.result
            console.log(resp.data.results);
        })}}}

</script>

<template>
    <label for="Search-bar"></label>
    <input id="search-bar" type="text" v-model="Searchbar">
    <button @click="getData()">Search!</button>
</template>

<style></style>