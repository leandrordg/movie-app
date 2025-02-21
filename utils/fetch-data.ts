import {
  getDiscoverMovies,
  getMovieDetails,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/hooks/movies";
import {
  getDiscoverTvs,
  getPopularTvs,
  getTopRatedTvs,
  getTvDetails,
} from "@/hooks/tv";

export async function getMovie(movieId: string, type: GetMovieType) {
  switch (type) {
    case "details":
      return await getMovieDetails(movieId);
  }
}

export async function getMovies(type: GetMoviesType) {
  switch (type) {
    case "discover":
      return await getDiscoverMovies();
    case "nowPlaying":
      return await getNowPlayingMovies();
    case "popular":
      return await getPopularMovies();
    case "topRated":
      return await getTopRatedMovies();
    case "upcoming":
      return await getUpcomingMovies();
  }
}

export async function getTv(tvId: string, type: GetTvType) {
  switch (type) {
    case "details":
      return await getTvDetails(tvId);
  }
}

export async function getTvs(type: GetTvsType) {
  switch (type) {
    case "discover":
      return await getDiscoverTvs();
    case "popular":
      return await getPopularTvs();
    case "topRated":
      return await getTopRatedTvs();
  }
}
