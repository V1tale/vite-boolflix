<script>
import AppSearch from "../components/AppSearch.vue"
export default {
    name: "AppHeader",
    data() {
        return {

        }
    },
    components: {
        AppSearch,
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="content">
                <div id="logo">
                    <h1>BOOLFLIX</h1>
                </div>
                <div class="app-search">
                    <AppSearch @getList="$emit('getList')"/>
                </div>
            </div> 
        </div>
    </header>
</template>

<style lang="scss">
.content {
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    #logo {
        font-size: 1.2rem;
    }
    h1 {
        color: red;
    }

}
header {
        background-color: black;
        height:10vh;
    }
</style>