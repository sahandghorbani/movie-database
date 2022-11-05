<template>
  <div v-if="searchResults.length">
    <div v-if="isLoading"> <Loading /> </div>
    <div v-else class="Movies-container" >
        <div  v-for="result in searchResults" :key="result.id" @click="clickhandler(result.id)" class="movie-items">
          <div class="img">
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path" alt="picure not found"/>
          </div>
          <div class='detail-container'>
           <div>
             <h3>{{ result.title }}</h3>
           </div>
            <div>
              <div class='time-calender'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="16" height="16" fill="url(#pattern0)"/>
                  <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_8_70" transform="translate(0 -0.015625) scale(0.03125)"/>
                  </pattern>
                  <image id="image0_8_70" width="32" height="33" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAQAAAASL2HaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiAwoOOCiX8bOWAAAA8ElEQVRIx+2VTw7BUBCHv9afBVsShxHHEAcQcQaLLiyqV+AGIjiDOAzClkVbxkbrTUkpEpv+ZtHk9958b+a9ZAr/lvXgtGkBa6YJv0MTWDFLBzrILYbKH8a+kw7YIHi4CAfl7xFcPIRtOiBEKABnxGjPQjgDBYRQJxRv3yp96oBtrI2eHmHjAVsmnEx7Efd4r0BHVEEUC809ZgYcdQslA1YnfPK8FrV4t5ERbfQV4h0FlElc2kcyixpweTPLxk1aPqJgr44V/Ij1pXJADsgBPwIU4/lSopthHkCgreXDEH0Vcz0TK/RoZKh8x1j/F/6nK0D2d+Xdbd9cAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAzLTEwVDE0OjU2OjQwKzAwOjAwQn9tOgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMy0xMFQxNDo1Njo0MCswMDowMDMi1YYAAAAASUVORK5CYII="/>
                  </defs>
                </svg>
                <p>{{result.release_date}} </p>
              </div>
             <ul>
              <!-- <li>{{genres}}</li> -->
             </ul>
            </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Loading from '../Loading.vue'
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { useStore } from 'vuex' ;
import { computed, defineComponent, onMounted } from '@vue/runtime-core';


export default defineComponent({
  components: { Loading },
  setup() {
    const store = useStore() ;
    const searchInput = ref<HTMLDivElement>();
    const router = useRouter() ;
    let genreID = ref(null)

    onMounted(()=>{
      searchInput.value?.focus()

    })
  
    const clickhandler = async (movieID :number ) => {
     await store.dispatch('FetchMovieDetail' , movieID)
     await router.push({name:'detail' ,  params: { id: movieID}})
     store.commit('SET_DETAIL_PAGE' , true)
    }

    //extremely essential : both action are updating this "searchResult" state ;
    //and here we are getting that list ...
    const searchResults = computed(()=> {
      return store.getters.searchResult
    })

    const isLoading = computed(()=> {
      return store.state.loading
    })

    const genres = computed(()=>{
      return store.getters.genre
    })

    return { searchResults , searchInput , clickhandler , isLoading , genres};
  },
});
</script>

<style >
@import '../../assets/css-styles/css/movieList.css' ;
</style>
