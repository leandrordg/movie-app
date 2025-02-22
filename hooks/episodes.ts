import { cache } from "react";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export const getEpisodeDetails = cache(
  async (
    tvId: string,
    seasonNumber: string,
    episodeNumber: string
  ): Promise<Episode> => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}?language=pt-BR`,
      options
    );

    const data: Episode = await response.json();

    return data;
  }
);
