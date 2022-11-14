<script>
import AppHeader from "./components/AppHeader.vue"
import AppSearch from "./components/AppSearch.vue"
import AppCards from "./components/AppCards.vue"
export default {
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppSearch,
    AppCards,
  },
  methods: {
    getData() {
      axios.get(store.URL)
    } 
  }
}
</script>


<template>
  <AppHeader />
  <AppSearch />
  <AppCards />
</template>

<style></style>