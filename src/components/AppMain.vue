<script>
import AppCards from "./AppCards.vue";
export default {
  data() {
    return {

    }
  },
  components: {
    AppCards,
  }
}

</script>


<template>
    <main class="container">
            
        <AppCards />
    </main>
</template>

<style lang="scss">
main {
  height: 90vh;
}
    .container h2 {
        padding: 1rem 0;
    }
</style>