
import {ProfileState} from './types';

export default {
  SHOW_TRENDINGS(state :ProfileState, payload:Boolean) {
    state.showTrendings = payload;
  },
  FETCH_TRENDING_MOVIES(state :ProfileState, payload : Array<any>) {
    state.trendingMovies = payload;
  },
  GET_MOVIES_BY_SEARCH(state :ProfileState, payload : Array<any>) {
    state.searchResult = payload;
  },
  FETCH_MOVIE_DETAIL(state :ProfileState, payload : any) {
    state.selectedMovie = payload;
    localStorage.setItem('singleMovieDetail', JSON.stringify(payload));
    // we save the detail object into LS , whenenver we go through movie deaitl page by clicking on them.
  },
  FETCH_MOVIE_STARS(state :ProfileState, payload : Array<any>) {
    state.movieStars = payload;
  },
  SET_DETAIL_PAGE(state :ProfileState, payload : Boolean) {
    state.isDetailPage = payload;
  },
  SET_CURRENT_PAGE(state :ProfileState, payload : number) {
    state.currentPage = payload;
  },
  SET_USER_TYPE(state :ProfileState, payload : null | any) {
    state.userTyped = payload;
  },
  SET_USER_TIME(state :ProfileState, payload : null | Array<any>) {
    state.genres = payload;
  },
};
