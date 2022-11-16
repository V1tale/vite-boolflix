<script>
import {store} from "../store"
export default {
    name: "AppCards",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <h2 v-if="store.movies != ''">Movies</h2>
        <h2 v-else>Benvenuto in BoolFlix, il miglior sito per conoscere film e serie tv. </h2>
        <div class="movies">
            <div class="card" v-for="(movie) in store.movies">
                <div class="cover">
                    <img v-if="movie.poster_path != null" :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
                    <img v-else src="/img/notfound.jpg" alt="">
                </div>
                <div class="details">
                    <h3>{{movie.title}}</h3>
                    <img class="flag" v-if="store.flags.includes(movie.original_language)" :src="`../img/${movie.original_language}.png`">
                    <h3 v-else>language: {{movie.original_language}}</h3>
                    <h3>Voto: <i v-for="s in 5" :key="s" :class="s <= Math.ceil(movie.vote_average / 2) ? 'fa-solid' : 'fa-regular'" class="fa-star"></i></h3>
                    <h3>{{movie.credits}}</h3>
                    <h3 v-if="movie.overview != ''">{{movie.overview}}</h3>
                    <h3 v-else>Descrizione non disponibile</h3>
                </div>
            </div>
            
        </div>
        <h2 v-if="store.series != '' ">Tv-Series</h2>
        <h2 v-else >Avvia la ricerca</h2>
        <div class="tv-series">
            <div class="card" v-for="(series) in store.series">
                <div class="cover">
                    <img v-if="series.poster_path != null" :src="`http://image.tmdb.org/t/p/w500/${series.poster_path}`" alt="">
                    <img v-else src="/img/notfound.jpg" alt="">
                </div>
                <div class="details">
                    <h3>{{series.name}}</h3>
                    <img class="flag" v-if="store.flags.includes(series.original_language)" :src="`../img/${series.original_language}.png`">
                    <h3 v-else>language: {{series.original_language}}</h3>
                    <h3>Voto: <i v-for="s in 5" :key="s" :class="s <= Math.ceil(series.vote_average / 2) ? 'fa-solid' : 'fa-regular'" class="fa-star"></i></h3>
                    <h3 v-if="series.overview !=''">{{series.overview}}</h3>
                    <h3 v-else>Descrizione non disponibile</h3>
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
        width:calc(100% / 4 - 10px);
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
        border: 1px solid white;
        object-fit: cover;
    }
    .details {
        width:100%;
        height: 400px;
        color:white;
        background-color: black;
        position:absolute;
        top:0;
        left:0;
        display:none;
        padding: 3px;
        overflow-y: auto;
        border: 1px solid white;
        h3:last-child {
            font-size: .8rem;
        }
        *:not(i) {
            margin: 10px;
        }
        i {
            color:orange;
            margin-left: 3px;
            font-size: 1rem;
        }
        .fa-regular {
            color:lightblue
        }
    }
    .card:hover .details {
        display:block;
    }
    h2 {
        color:white;
    }
</style>