export default {
  SHOW_TRENDINGS(state, payload) {
    state.showTrendings = payload;
  },
  FETCH_TRENDING_MOVIES(state, payload) {
    state.trendingMovies = payload;
  },
  GET_MOVIES_BY_SEARCH(state, payload) {
    state.searchResult = payload;
  },
  FETCH_MOVIE_DETAIL(state, payload) {
    state.selectedMovie = payload;
    localStorage.setItem('singleMovieDetail', JSON.stringify(payload));
    // we save the detail object into LS , whenenver we go through movie deaitl page by clicking on them.
  },
  FETCH_MOVIE_STARS(state, payload) {
    state.movieStars = payload;
  },
  SET_DETAIL_PAGE(state, payload) {
    state.isDetailPage = payload;
  },
  SET_CURRENT_PAGE(state, payload) {
    state.currentPage = payload;
  },
  SET_USER_TYPE(state, payload) {
    state.userTyped = payload;
  },
  SET_USER_TIME(state, payload) {
    state.userTime = payload;
  },
  FETCH_GENRES(state, payload) {
    state.genres = payload;
  },
};
