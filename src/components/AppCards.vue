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
        <div class="card" v-for="(title) in store.movies">
            <h3>{{title.title}}</h3>
            <h3>{{title.overview}}</h3>
            <img v-if="flags.includes(title.original_language)" :src="`../img/${title.original_language}.png`">
            <h3 v-else>language: {{title.original_language}}</h3>
            <h3>{{title.vote_average}}</h3>
        </div>
    </div>


</template>

<style></style>