import {
  getDiscoverMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/hooks/movies";
import { getDiscoverTvs, getPopularTvs, getTopRatedTvs } from "@/hooks/tv";

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
