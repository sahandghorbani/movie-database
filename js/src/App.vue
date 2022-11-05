<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
export default {
  components: {Navbar} ,
}
</script>
<style >
body{
  /* font-family: 'Roboto', sans-serif !important; */
  font-style: normal;
  border-top: 48px #11B980 solid;
}


</style>
