// we can also delete this component ; (test-componsnt)

<template>
  <!-- <div>
    <div class="Movies-container" >
      <div v-for="result in searchResults" :key="result.id" @click="clickhandler(result.id)">
    <h3>{{ result.title }}</h3>
    <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path" />
  </div>
  </div>
  </div> -->
    <div >
    <div v-if="isLoading"> <Loading /> </div>
    <div v-else class="Movies-container" >
        <div  v-for="result in searchResults" :key="result.id" @click="clickhandler(result.id)" class="movie-items">
          <div class="img">
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path" />
          </div>
          <div class='detail-container'>
           <div>
             <h3>{{ result.title }}</h3>
           </div>
            <div>
            <p>{{result.release_date}} </p>
              <span class="material-symbols-outlined">
                 date_range
              </span>
             <ul>
              <!-- <li>{{genres}}</li> -->
             </ul>
            </div>
          </div>
       </div>
    </div>
  </div>
</template>


<script>
import Loading from '../Loading.vue'
import {  useRouter } from "vue-router";
import { useStore } from 'vuex' ;
import { computed } from '@vue/runtime-core';
import Datepicker from '../navbar/date-picker.vue';

export default {
  components: {Datepicker , Loading},
  setup() {
    const store = useStore() ;
    const router = useRouter()
    
    const clickhandler =  (movieID) => {
      store.dispatch('FetchMovieDetail' , movieID)
      // router.push({name:'detail' ,  params: { id: movieID}})
      store.commit('SET_DETAIL_PAGE' , true)
    }

    const searchResults = computed(()=> {
      return store.getters.showDatePickerResult
    })

     const isLoading = computed(()=> {
      return store.state.loading
    })

    return { isLoading ,  searchResults   , clickhandler};
  },
};
</script>

<style >
 
</style>
