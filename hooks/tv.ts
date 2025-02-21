const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export const getDiscoverTvs = async (): Promise<TvsRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc",
    options
  );

  const data: TvsRequest = await response.json();

  return data;
};

export const getPopularTvs = async (): Promise<TvsRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1",
    options
  );

  const data: TvsRequest = await response.json();

  return data;
};

export const getTopRatedTvs = async (): Promise<TvsRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1",
    options
  );

  const data: TvsRequest = await response.json();

  return data;
};
