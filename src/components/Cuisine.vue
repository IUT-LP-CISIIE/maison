<template>
  
  <div class="cuisine">
    <h2>Vous êtes dans la cuisine.</h2>


	<div>
    	<img @click="lapinTrouve('cuisine')" src="@/assets/lapin.jpg">
    </div>

    
    <router-link to="/">Sortir de la cuisine</router-link>


  </div>

</template>

<script>

export default {
  name: 'Cuisine',
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
  color: blue;
}
</style>
