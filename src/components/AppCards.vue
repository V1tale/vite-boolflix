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
        <h2>Movies</h2>
        <div class="movies">
            <div class="card" v-for="(movie) in store.movies">
                <div class="cover">
                    <img :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
                </div>
                <div class="details">
                    <h3>{{movie.title}}</h3>
                    <img class="flag" v-if="flags.includes(movie.original_language)" :src="`../img/${movie.original_language}.png`">
                    <h3 v-else>language: {{movie.original_language}}</h3>
                    <h3>Rate: {{movie.vote_average}}</h3>
                    <h3>{{movie.overview}}</h3>
                </div>
            </div>
            
        </div>
        <h2>Tv-Series</h2>
        <div class="tv-series">
            <div class="card" v-for="(series) in store.series">
                <div class="cover">
                    <img :src="`http://image.tmdb.org/t/p/w500/${series.poster_path}`" alt="">
                </div>
                <div class="details">
                    <h3>{{series.name}}</h3>
                    <img class="flag" v-if="flags.includes(series.original_language)" :src="`../img/${series.original_language}.png`">
                    <h3 v-else>language: {{series.original_language}}</h3>
                    <h3>Rate: {{series.vote_average}}</h3>
                    <h3>{{series.overview}}</h3>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss">
.movies, .tv-series {
    display: flex;
    flex-wrap: wrap;
}
    .card {
        position:relative;
        width:300px;
        height:400px;
        margin:3px;
        .cover img {
            width:100%;
            height:400px;
        }
    }
    .flag {
        width:30px;
        height:25px;
    }
    .details {
        width:calc(300px - 6px);
        height:calc(400px - 6px);
        color:white;
        background-color: rgb(26, 26, 26);
        position:absolute;
        top:0;
        left:0;
        display:none;
        transition: 2s;
        padding: 3px;
        overflow-y: auto;
    }
    .details h3:last-child {
        font-size: .8rem;
    }
    .card:hover .details {
        display:block;
    }
</style>