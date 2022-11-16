<script>

import {store} from "../store"
export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    },
   
}

</script>

<template>
    <label for="Search-bar"></label>
    <input  @keyup.enter="$emit(`getList`)" id="search-bar" type="text" v-model="Searchbar">
    <button @click="$emit(`getList`)">Search!</button>
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