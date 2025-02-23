import Image from "next/image";
import { notFound } from "next/navigation";

import { getSeasonDetails } from "@/hooks/seasons";
import { formatReleaseDate } from "@/utils/format-values";

import { EpisodeCard } from "@/components/episode-card";
import { CalendarIcon, TvIcon } from "lucide-react";

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
    <div className="relative">
      <div className="absolute inset-0 h-64 md:h-96 -z-10">
        <div className="relative w-full h-64 md:h-96">
          {season.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
              alt={season.name}
              className="bg-muted object-cover"
              sizes="90vw"
              priority
              fill
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="flex items-start gap-8 max-w-7xl mx-auto py-12 px-4 relative">
        <div className="relative aspect-3/5 w-72 max-w-72 rounded-md overflow-clip hidden md:block shadow">
          {season.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
              alt={season.name}
              className="bg-muted object-cover"
              sizes="30vw"
              fill
            />
          ) : (
            <div className="bg-muted w-full h-full flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Sem imagem</p>
            </div>
          )}
        </div>

        <div className="space-y-4 md:pt-12 flex-1">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance">
            {season.name}
          </h1>

          <div className="flex flex-wrap gap-4">
            <p className="flex items-center gap-2">
              <CalendarIcon className="size-4" />
              {formatReleaseDate(season.air_date, { dateStyle: "long" })}.
            </p>

            <p className="flex items-center gap-2">
              <TvIcon className="size-4" />
              {season.episodes.length} episódios.
            </p>
          </div>

          <p>{season.overview}</p>
        </div>
      </div>

      {season.episodes.length > 0 && (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-4">
          <h3 className="font-medium uppercase text-lg text-muted-foreground">
            Episódios ({season.episodes.length})
          </h3>

          <section className="flex flex-nowrap gap-2 overflow-x-auto pb-4 snap-x snap-mandatory">
            {season.episodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                tvId={tvId}
                season={season}
                episode={episode}
              />
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
