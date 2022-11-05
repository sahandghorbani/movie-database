<template>
  <div class='single-movie-con'>
      <div v-if="movieDetail" class="single-movie">
      <img :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}`" alt="picure not found"/>
      <div class="texts">
          <div class='item'>
            <p>Budget:</p>
            <p>{{movieDetail.budget  ? movieDetail.budget : 'no-data'}}</p>
          </div>

          <div class='item'>
            <p>Revenue:</p>
            <p>{{movieDetail.revenue ? movieDetail.revenue : 'no-data'}}</p>
          </div>

          <div class='item'>
            <p>Relase time:</p>
            <p>{{movieDetail.release_date ? movieDetail.release_date : 'no-data'}}</p>
          </div>

          <div class='item'>
            <p>Runtime</p>
            <p>{{movieRuntime(movieDetail.runtime)}}</p>
          </div>

          <div class='item'>
            <p>Score:</p>
            <p>{{movieDetail.vote_average}}</p>
          </div>

          <div class='item'>
            <p>Genres :</p>
             <ul class="categories">
               <li v-for="genre in movieDetail.genres" v-bind:key="genre.id">{{ genre.name }}</li>
             </ul>
          </div>

          <div class='item'>
            <p>IMDB link :</p>
            <a :href="IMDBLinkGenerator(movieDetail.imdb_id)" target="_blank">link</a>
          </div>
      </div>        
  </div>  
  <div class='movie-info'>
    <span>{{ movieDetail.overview }}</span>
    <h2>Credits</h2>
    <ol class="movie-stars" v-if='getMovieStars.length'>
      <li v-for='star in getMovieStars' key="star.id">{{star.original_name}} , </li> 
    </ol>
    <p v-else>no-data</p>
  </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted , onBeforeMount} from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import {useStore} from 'vuex' ;
export default defineComponent({
  setup() {
    let store = useStore()
    let router = useRouter()
    
    onBeforeMount(()=>{
      // by refreshin the page , selectedMovie state will be null , w should handel it 
      if(!store.state.selectedMovie) {
        // first , we should again set the navbar to detailPage state
        store.commit('SET_DETAIL_PAGE' , true)
        // second , we read the localSorage to get the movieDetail (we had set detail object when we click on movie)
        let injectedFromLS :any =localStorage.getItem('singleMovieDetail')
        store.commit('FETCH_MOVIE_DETAIL' , JSON.parse(injectedFromLS))
      }
    })


    onMounted(() =>{
      store.dispatch('FetchMovieStars' , movieDetail.value.id)
    })

    let movieDetail = computed(() => {
      return store.state.selectedMovie
    })

    let getMovieStars = computed(()=>{
      return store.getters.getMovieStars
    })

    let IMDBLinkGenerator = ((id : Number)=>{
      let url = `https://www.imdb.com/title/${id}/`
      return url ;
    })

    let movieRuntime = ((minute : number)=>{
        let hours = Math.trunc(minute/60);
        let minutes = minute % 60;
        return `${hours}h ${minutes}m`
    })

    return {movieDetail , movieRuntime  , getMovieStars , IMDBLinkGenerator}
  },
});
</script>

<style scoped >
  @import "../assets/css-styles/css/detailView.css"
</style>