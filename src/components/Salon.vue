<template>
  
  <div class="salon">
    <h2>Vous êtes dans le salon.</h2>
    
    <router-link to="/">Sortir du salon</router-link>


  </div>

</template>

<script>

export default {
  name: 'Salon',
  data () {
    return {

    }
  },
  mounted() {

  }
};

</script>

<style scoped>
h2{
  color: green;
}
</style>
