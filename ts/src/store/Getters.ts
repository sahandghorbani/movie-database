import {ProfileState} from './types';

export default {
    searchResult(state :ProfileState ) {
        return state.searchResult
      },
      showDatePickerResult(state :ProfileState ) {
        return state.datePickerResult 
      },
      selectedMovieDetails(state :ProfileState ) {
        return state.selectedMovie.title
      } ,
      getMovieStars(state :ProfileState ) {
        const topTenCredits = state.movieStars.slice(0, 10);
        return topTenCredits
      },

      genre(state :ProfileState ) {
        //genre is an object contain two parametere , genre-id and genre-name ; we select name here 
        // return state.genres[0]['name']
        return state.genres[0]['name']
      }
}