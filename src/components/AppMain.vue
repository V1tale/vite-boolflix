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
    <div class="container">
            
        <AppCards />
    </div>
</template>

<style lang="scss">
    .container h2 {
        padding: 1rem 0;
    }
</style>