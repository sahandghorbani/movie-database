<template>
  <div id='container'>
    <MovieLists />
    <div v-if="showTrendings">
      <TrendingMovies />
    </div>
   <Pagination :query='query' :time='time'/>
  </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue'
import MovieLists from "../components/MovieLists/MovieLists.vue";
import ResultByDate from "../components/MovieLists/ResultByDate.vue";
import Pagination from "../components/Pagination.vue"
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
import TrendingMovies from '@/components/MovieLists/TrendingMovies.vue';
export default {
  components: { MovieLists, ResultByDate , Navbar , Pagination, TrendingMovies},
  setup() {
    let store = useStore()
    if(store.state.showTrendings) store.dispatch('FetchTrendingMovies')
    store.commit('SET_DETAIL_PAGE' , false)

    const query = computed(()=>{
      return store.state.userTyped
    })

    const time = computed(()=>{
      return store.state.userTime
    })

    const showTrendings = computed(()=>{
      return store.state.showTrendings
    })

  

    return {query , time , showTrendings }
  }
};
</script>

<style scoped>
  #container {
    width: 90%;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
</style>styl