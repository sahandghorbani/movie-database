import { createStore } from 'vuex'
import actions from "./Actions.js" ;
import mutations from "./Mutations" ;
import getters from "./Getters"

export default createStore({
  state: {
    showTrendings : true,
    trendingMovies:[],
    searchResult : [],
    datePickerResult : [],
    selectedMovie: null,
    movieStars: [] ,
    loading: false ,
    genres: null ,
    isDetailPage : false,
    currentPage: 1,
    //what user type despite movie-name or release-range, store here
    userTyped : null , 
    userTime : []
  },
  getters,
  mutations ,
  actions  ,

  modules: {
  }
})
