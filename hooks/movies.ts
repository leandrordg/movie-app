"use server";

import { cache } from "react";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export const getDiscoverMovies = cache(
  async (genreId?: string): Promise<MoviesRequest> => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=pt-BR${
        genreId && `&with_genres=${genreId}`
      }&page=1`,
      options
    );

    const data: MoviesRequest = await response.json();

    return data;
  }
);

export const getNowPlayingMovies = cache(async (): Promise<MoviesRequest> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1`,
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
});

export const getPopularMovies = cache(async (): Promise<MoviesRequest> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`,
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
});

export const getTopRatedMovies = cache(async (): Promise<MoviesRequest> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1`,
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
});

export const getUpcomingMovies = cache(async (): Promise<MoviesRequest> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1`,
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
});

export const getMovieDetails = cache(
  async (movieId: string): Promise<MovieDetails> => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
      options
    );

    const data: MovieDetails = await response.json();

    return data;
  }
);

export const getDayTrendingMovies = cache(async (): Promise<MoviesRequest> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?language=pt-BR`,
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
});

export const getWeekTrendingMovies = cache(async (): Promise<MoviesRequest> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?language=pt-BR`,
    options
  );

  const data: MoviesRequest = await response.json();

  return data;
});
