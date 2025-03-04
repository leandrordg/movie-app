"use server";

import { cache } from "react";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export const getDiscoverTvs = cache(async (): Promise<TvsRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc",
    options
  );

  const data: TvsRequest = await response.json();

  return data;
});

export const getPopularTvs = cache(async (): Promise<TvsRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1",
    options
  );

  const data: TvsRequest = await response.json();

  return data;
});

export const getTopRatedTvs = cache(async (): Promise<TvsRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1",
    options
  );

  const data: TvsRequest = await response.json();

  return data;
});

export const getTvDetails = cache(async (tvId: string): Promise<TvDetails> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}?language=pt-BR`,
    options
  );

  const data: TvDetails = await response.json();

  return data;
});

export const getDayTrendingTvs = cache(async (): Promise<TvsRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/tv/day?language=pt-BR",
    options
  );

  const data: TvsRequest = await response.json();

  return data;
});

export const getWeekTrendingTvs = cache(async (): Promise<TvsRequest> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/tv/week?language=pt-BR",
    options
  );

  const data: TvsRequest = await response.json();

  return data;
});
