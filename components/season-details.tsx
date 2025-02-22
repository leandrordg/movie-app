import Image from "next/image";
import { notFound } from "next/navigation";

import { getSeasonDetails } from "@/hooks/seasons";
import {
  formatAverageVote,
  formatReleaseDate,
  formatRuntime,
} from "@/utils/format-values";

import { CalendarIcon, StarIcon, TimerIcon, TvIcon } from "lucide-react";

export async function SeasonDetails({
  tvId,
  seasonNumber,
}: {
  tvId: string;
  seasonNumber: string;
}) {
  const season = await getSeasonDetails(tvId, seasonNumber);

  if (!season) return notFound();

  return (
    <div>
      <div className="absolute inset-0 h-64 md:h-96 -z-10">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
            alt={season.name}
            className="bg-muted object-cover"
            sizes="90vw"
            priority
            fill
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="flex items-start gap-8 max-w-7xl mx-auto py-12 px-4 relative">
        <div className="relative aspect-3/5 w-72 max-w-72 rounded-md overflow-clip hidden md:block shadow">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
            alt={season.name}
            className="bg-muted object-cover"
            sizes="30vw"
            fill
          />
        </div>

        <div className="space-y-4 md:pt-12 flex-1">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance">
            {season.name}
          </h1>

          <div className="flex flex-wrap gap-4">
            {season.air_date && (
              <p className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="size-4" />
                {formatReleaseDate(season.air_date, { dateStyle: "long" })}
              </p>
            )}

            <p className="flex items-center gap-2 text-muted-foreground">
              <TvIcon className="size-4" />
              {season.episodes.length} episódios.
            </p>
          </div>

          <p>{season.overview}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 space-y-4">
        <h2 className="text-lg font-medium">Todas as temporadas</h2>

        <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar pb-4 snap-x snap-mandatory">
          {season.episodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-muted w-80 max-w-80 flex flex-col shrink-0 cursor-pointer snap-end group"
            >
              <div className="relative w-full md:w-80 h-48 overflow-clip">
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                  alt={episode.name}
                  className="bg-muted object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                  sizes="30vw"
                  fill
                />
              </div>

              <div className="p-4 space-y-2">
                <h2 className="text-lg font-medium">
                  {episode.episode_number}. {episode.name}
                </h2>

                <div className="flex flex-wrap gap-4">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <TimerIcon className="size-4" />
                    {formatRuntime(episode.runtime)}
                  </p>
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <StarIcon className="size-4" />
                    {formatAverageVote(episode.vote_average)} de 10.
                  </p>
                </div>

                <p>{episode.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
