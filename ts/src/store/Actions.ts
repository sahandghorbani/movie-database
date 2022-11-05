import axios from "axios";
import {BASE_URL , API_KEY} from '../config/env' ;
import {ActionTree} from './types';

export default {
    getMoviesBySearch({commit , state} : ActionTree , payload : String) {
        state.loading = true
        axios
        .get(`${BASE_URL}/search/movie?${API_KEY}&language=en-US&page=${state.currentPage}&query=` +payload)
        .then((response) => {
          let movieList = [...response.data.results]
          commit(('GET_MOVIES_BY_SEARCH') , movieList)
          state.loading = false
        });
      },


      getMoviesByDatePicker({commit , state} : ActionTree, payload :Array<any>) {
        let x = payload[0].split('T');
        let y = payload[1].split('T');
        let startDate = x[0];
        let endDate = y[0];
  
        state.loading = true
        axios
        .get(`${BASE_URL}/discover/movie?${API_KEY}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&page=${state.currentPage}`)
        .then((response) => {
          let movieList = [...response.data.results]
          commit(('GET_MOVIES_BY_SEARCH') , movieList)
          state.loading = false
        });
      },
      // both actions are updating 'searchResult' statement👆🏻

  
     async FetchMovieDetail({commit , state }:ActionTree , payload : any) {
      state.loading = true
      await axios
        .get(`${BASE_URL}/movie/${payload}?${API_KEY}&language=en-US` )
        .then((response) => {
          let TheSelectedMovie = response.data
          commit(('FETCH_MOVIE_DETAIL') , TheSelectedMovie)
          state.loading = false
        });
      },


      async FetchMovieStars({commit}:ActionTree , payload : any) {
        await axios
        .get(`${BASE_URL}/movie/${payload}/credits?${API_KEY}&language=en-US`)
        .then((response) => {
          let movieStars = response.data.cast
          commit(('FETCH_MOVIE_STARS') , movieStars)
        });
        
      },


      async FetchTrendingMovies({commit , state}:ActionTree) {
        state.loading = true
        await axios
          .get(`${BASE_URL}/trending/all/day?${API_KEY}&page=${state.currentPage}`)
          .then((response) => {
            let trendingMovieList = response.data.results
            commit(('FETCH_TRENDING_MOVIES') , trendingMovieList)
            state.loading = false
          });
      },
      

      async FetchingGeneres({commit }:ActionTree , payload : Number) {
        let data = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US"
        );
        let res = await data.json();
        let myGenre = res.genres.filter((element : any) => {
          return element.id== payload
        });
        commit(('FETCH_GENRES' ) , myGenre)
      }
    
}
// 👋🏻 note for code reviewer
// Hi, i know some of the structures are same and i duplicated ;
// it was better to make a "fetch" hook(composable ) and use that instead;
// but here i did not do that . i think its more clean in this project scale