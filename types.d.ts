type GetMoviesType =
  | "discover"
  | "nowPlaying"
  | "popular"
  | "topRated"
  | "upcoming";

type GetTvsType = "discover" | "popular" | "topRated";

interface MovieRequest {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface TvRequest {
  page: number;
  results: Tv[];
  total_pages: number;
  total_results: number;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Tv {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
