import { cache } from "react";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export const getGenres = cache(async (): Promise<Genre[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR",
    options
  );

  const data: GenresRequest = await response.json();

  return data.genres;
});
