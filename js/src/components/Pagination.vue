<template>
  <div class="paginate">
    <vue-awesome-paginate
      :total-items="200"
      :items-per-page="5"
      :max-pages-shown="5"
      :current-page="getCurrentPage"
      :show-jump-buttons="true"
      :on-click="onClickHandler"
    />
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
const store =useStore()
const props = defineProps({
  query:String ,
  time:Array
})

//what API should be fetched after navigating on paginate-buttoms  ?
const onClickHandler = (page) => {
    store.commit('SET_CURRENT_PAGE' , page);

    //user is navigating trending movies witout any kind of searching
    // we fetch just trending movie list
    if(IsUserSearchByInput.value == null && isUserSearchByDatepicker.value[0] == undefined) {
       store.commit('SHOW_TRENDINGS' ,true);
       store.dispatch('FetchTrendingMovies')
    }

    if(IsUserSearchByInput.value === null && store.state.showTrendings == false) {
        //so user is search by time picker ...
        // we should fetch the Datapicker-api
        store.dispatch('getMoviesByDatePicker' , props.time)
        store.commit('SHOW_TRENDINGS' ,false)
    }
  
    else{ 
        //now user is search by search input ...
        // we should fetch the inputSearching-api
        store.dispatch('getMoviesBySearch' ,props.query)
        store.commit('SHOW_TRENDINGS' ,false)
    }
 
};
// to find out what manner user is serching his/her movie
const IsUserSearchByInput = computed(()=>{
    return store.state.userTyped
})

const isUserSearchByDatepicker = computed(()=>{
    return store.state.userTime
})

const getCurrentPage = computed(()=>{
  return store.state.currentPage
})


</script>

<style>
/* .paginate {
  width: 400px;
  margin: 0 auto !important;
} */
.pagination-container {
  display: flex !important;
  column-gap: 10px;
  
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
