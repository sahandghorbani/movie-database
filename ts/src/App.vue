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
 border-top: 48px #11B980 solid;
}


</style>
