<template>
  
  <div class="maison">
    <h1>Bienvenue dans la maison</h1>
    
    <ul>
	    <li>
	    	<router-link to="/Salon">Aller dans le salon</router-link>
	    </li>
	    <li>
	  		<router-link to="/Cuisine">Aller dans la cuisine</router-link>
		</li>
	    <li>
	  		<router-link to="/Chambre">Aller dans la chambre</router-link>
		</li>
	    <li>
	  		<router-link to="/Grenier">Aller dans le grenier</router-link>
		</li>
    </ul>


  </div>

</template>

<script>

export default {
  name: 'Maison',
  data () {
    return {
    }
  },
};

</script>

<style scoped>
h1{
  color: red;
}
</style>
