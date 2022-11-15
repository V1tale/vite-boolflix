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
    <div class="bg">
        <div class="container">
            <div class="content">
                <div id="logo">
                    <h1>BOOLFLIX</h1>
                </div>
                <div class="app-search">
                    <AppSearch />
                </div>
            </div> 
        </div>
    </div>
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
.bg {
        background-color: black;
    }
</style>