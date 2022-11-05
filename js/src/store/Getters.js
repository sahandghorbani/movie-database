export default {
    searchResult(state) {
        return state.searchResult
      },
      showDatePickerResult(state) {
        return state.datePickerResult
      },
      selectedMovieDetails(state) {
        return state.selectedMovie.title
      } ,
      getMovieStars(state) {
        const topTenCredits = state.movieStars.slice(0, 10);
        return topTenCredits
      },

      genre(state) {
        //genre is an object contain two parametere , genre-id and genre-name ; we select name here 
        // return state.genres[0]['name']
        return state.genres[0]['name']
      }
}