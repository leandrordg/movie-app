import Image from "next/image";
import Link from "next/link";

import { formatAverageVote, formatRuntime } from "@/utils/format-values";

import { StarIcon, TimerIcon } from "lucide-react";

export function EpisodeCard({
  tvId,
  season,
  episode,
}: {
  tvId: string;
  season: Season;
  episode: Episode;
}) {
  return (
    <Link
      href={`/tv/${tvId}/season/${season.season_number}/episode/${episode.episode_number}`}
    >
      <div className="bg-muted w-80 max-w-80 flex flex-col shrink-0 cursor-pointer snap-end group">
        <div className="relative w-full md:w-80 h-48 overflow-clip">
          {episode.still_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
              alt={episode.name}
              className="bg-muted object-cover group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
              sizes="30vw"
              fill
            />
          ) : (
            <div className="bg-muted w-full h-full flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Sem imagem</p>
            </div>
          )}
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
    </Link>
  );
}
