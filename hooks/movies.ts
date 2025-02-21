const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export const getDiscoverMovies = async (): Promise<MoviesRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc",
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
};

export const getNowPlayingMovies = async (): Promise<MoviesRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1",
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
};

export const getPopularMovies = async (): Promise<MoviesRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
};

export const getTopRatedMovies = async (): Promise<MoviesRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1",
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
};

export const getUpcomingMovies = async (): Promise<MoviesRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1",
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
};

export const getMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
    options
  );

  const data: MovieDetails = await response.json();

  return data;
};
