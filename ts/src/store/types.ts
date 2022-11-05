import { Movie } from "@/types/movie";
import { PersonDetails } from "@/types/personDetails";
import { TvShowDetails } from "@/types/tv-show-details";
import { Commit } from "vuex";

export interface ProfileState {
  showTrendings: Boolean;
  trendingMovies: Array<Movie>;
  searchResult: Array<Movie>;
  datePickerResult: Array<Movie>;
  selectedMovie: TvShowDetails | any;
  movieStars: Array<PersonDetails>;
  loading: Boolean;
  genres: any;
  isDetailPage: Boolean;
  currentPage: number;
  //what user type despite movie-name or release-range, store here 👇🏻 :
  userTyped: Array<string> | null;
  userTime: Array<number> | null;
}

export type ActionTree = {
  commit: Commit;
  state: ProfileState;
}
