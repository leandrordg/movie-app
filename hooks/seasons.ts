import { cache } from "react";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export const getSeasonDetails = cache(
  async (tvId: string, seasonNumber: string): Promise<SeasonDetails> => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?language=pt-BR`,
      options
    );

    const data: SeasonDetails = await response.json();

    return data;
  }
);
