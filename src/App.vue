<template>
  <div id="app">

    <router-view/>

    <div v-if="$store.state.pieceDuLapin">
      Le lapin est dans la pièce : {{ $store.state.pieceDuLapin }}
      <button @click="cacherLapin">Cacher le lapin</button>
    </div>
    <div v-else>
      Mais où donc est le lapin ?
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('La maison est ouverte');

    /** code éxcuté quand le lapin a été trouvé **/
    this.$bus.$on('lapin-trouve',(piece) => {
        this.$store.commit('setPieceDuLapin', piece);
    });

  },
  methods : {
    cacherLapin() {
        this.$store.commit('setPieceDuLapin', false);

        this.$router.push('/');
    }
  }

};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 200px;
}

</style>
