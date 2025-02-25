import { cache } from "react";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export const getWatchProviders = cache(
  async (movieId: string): Promise<WatchProvidersRequest> => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?language=pt-BR`,
      options
    );

    const data: WatchProvidersRequest = await response.json();

    return data;
  }
);
