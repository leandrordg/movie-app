import {
  getDayTrendingMovies,
  getDiscoverMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getRecomendationsMovies,
  getSimilarMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getWeekTrendingMovies,
} from "@/hooks/movies";
import {
  getDayTrendingTvs,
  getDiscoverTvs,
  getPopularTvs,
  getTopRatedTvs,
  getWeekTrendingTvs,
} from "@/hooks/tv";

export async function getMovies(
  type: GetMoviesType,
  genreId?: string,
  movieId?: string
) {
  switch (type) {
    case "discover":
      return await getDiscoverMovies(genreId);
    case "nowPlaying":
      return await getNowPlayingMovies();
    case "popular":
      return await getPopularMovies();
    case "topRated":
      return await getTopRatedMovies();
    case "upcoming":
      return await getUpcomingMovies();
    case "dayTrending":
      return await getDayTrendingMovies();
    case "weekTrending":
      return await getWeekTrendingMovies();
    case "recommendations":
      return await getRecomendationsMovies(movieId);
    case "similar":
      return await getSimilarMovies(movieId);
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
    case "dayTrending":
      return await getDayTrendingTvs();
    case "weekTrending":
      return await getWeekTrendingTvs();
  }
}
