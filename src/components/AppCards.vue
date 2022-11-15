<script>
import {store} from "../store"
export default {
    name: "AppCards",
    data() {
        return {
            store,
            flags:["it", "en", "es", "de", "fr", "us", "cn"]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="movies">
            <h2>Movies</h2>
            <div class="card" v-for="(movie) in store.movies">
                <h3>{{movie.title}}</h3>
                <h3>{{movie.overview}}</h3>
                <img v-if="flags.includes(movie.original_language)" :src="`../img/${movie.original_language}.png`">
                <h3 v-else>language: {{movie.original_language}}</h3>
                <h3>{{movie.vote_average}}</h3>
            </div>
            
        </div>
        <div class="tv-series">
            <h2>Tv-Series</h2>
            <div class="card" v-for="(series) in store.series">
                <h3>{{series.name}}</h3>
                <h3>{{series.overview}}</h3>
                <img v-if="flags.includes(series.original_language)" :src="`../img/${series.original_language}.png`">
                <h3 v-else>language: {{series.original_language}}</h3>
                <h3>{{series.vote_average}}</h3>
            </div>
        </div>
    </div>


</template>

<style></style>