<template>
  
  <div class="chambre">
    <h2>Vous êtes dans la chambre.</h2>
    
    <router-link to="/">Sortir de la chambre</router-link>


  </div>

</template>

<script>

export default {
  name: 'Chambre',
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
  color: orange;
}
</style>
