<template>
  <div class="navbar">
    <div v-if="isDetailPage">
      <div class="nav-detail-info">
        <button @click="backBtn" class="backBtn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.33331L3.60929 7.33331L7.18529 3.75731C7.44562 3.49698 7.44562 3.07481 7.18546 2.81465C6.92512 2.55431 6.50279 2.55431 6.24246 2.81465L1.52862 7.52865C1.49762 7.55965 1.46996 7.59381 1.44563 7.63015C1.43446 7.64698 1.42662 7.66515 1.41696 7.68265C1.40596 7.70331 1.39329 7.72298 1.38446 7.74481C1.37496 7.76731 1.36963 7.79065 1.36296 7.81398C1.35746 7.83248 1.35029 7.85015 1.34646 7.86915C1.33779 7.91248 1.33329 7.95615 1.33329 7.99998C1.33329 8.00048 1.33346 8.00098 1.33346 8.00148C1.33362 8.04465 1.33796 8.08798 1.34646 8.13048C1.35046 8.15048 1.35796 8.16898 1.36379 8.18865C1.37029 8.21081 1.37529 8.23331 1.38429 8.25481C1.39396 8.27798 1.40696 8.29898 1.41896 8.32081C1.42796 8.33715 1.43512 8.35381 1.44546 8.36948C1.46979 8.40631 1.49779 8.44065 1.52896 8.47181L6.24263 13.1853C6.50296 13.4456 6.92512 13.4456 7.18546 13.1855C7.44579 12.9251 7.44579 12.503 7.18546 12.2425L3.60946 8.66665L14 8.66665C14.3681 8.66665 14.6666 8.36815 14.6666 7.99998C14.6666 7.63181 14.3681 7.33331 14 7.33331Z" fill="white"/></svg>
          <p>Back</p>
        </button>
      </div>
    </div>
    <div v-else class="navbar">
      <SearchInput @searchHandler="inputHandler" />
      <Datepicker @searchBtn="searchBtn" />
    </div>
  </div>
</template>

<script lang='ts'>
import Datepicker from "./date-picker.vue";
import SearchInput from "./search-input.vue";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { computed, defineComponent } from '@vue/runtime-core';
import { useRouter } from 'vue-router';


export default defineComponent({
  components: { Datepicker, SearchInput },
  setup() {
    const store = useStore();
    const timeout = ref<number>();
    const router = useRouter();

    const backBtn = () => {
      router.go(-1)
    }

    const searchBtn = async (date:number[]) => {
      await store.dispatch("getMoviesByDatePicker", date);
      store.commit('SET_CURRENT_PAGE' , 1)
      store.commit('SET_USER_TYPE' , null)
      store.commit('SET_USER_TIME' , date);
      store.commit('SHOW_TRENDINGS' ,false)
    };

    const inputHandler = (query:String) => {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(function () {
        store.commit('SET_CURRENT_PAGE' , 1)
        store.dispatch("getMoviesBySearch", query);
        store.commit('SET_USER_TYPE' , query)
        store.commit('SET_USER_TIME' , []);
        store.commit('SHOW_TRENDINGS' ,false)
      }, 400);
    };

    const isDetailPage = computed(()=> {
      return store.state.isDetailPage
    })

    const MovieTitles = computed(()=> {
      return store.getters.selectedMovieDetails
    })

    return { searchBtn, inputHandler  , isDetailPage , backBtn , MovieTitles};
  },
});
</script>

<style >
  @import '../../assets/css-styles/css/navbar.css'
</style>
