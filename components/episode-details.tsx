import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getEpisodeDetails } from "@/hooks/episodes";
import {
  formatAverageVote,
  formatReleaseDate,
  formatRuntime,
} from "@/utils/format-values";

import { CalendarIcon, StarIcon, TimerIcon } from "lucide-react";

interface Props {
  tvId: string;
  seasonNumber: string;
  episodeNumber: string;
}

export async function EpisodeDetails({
  tvId,
  seasonNumber,
  episodeNumber,
}: Props) {
  const episode = await getEpisodeDetails(tvId, seasonNumber, episodeNumber);

  if (!episode) return notFound();

  return (
    <div>
      <div className="max-w-7xl mx-auto md:p-4">
        <div className="relative aspect-6/3 md:aspect-6/2 md:rounded-md overflow-clip shadow">
          {episode.still_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
              alt={episode.name}
              className="bg-muted object-cover"
              sizes="80vw"
              priority
              fill
            />
          ) : (
            <div className="bg-muted w-full h-full flex items-center justify-center">
              <p className="text-balance text-xs text-muted-foreground">
                Sem imagem
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 flex-1">
        <h3 className="font-medium uppercase text-sm text-muted-foreground">
          Temporada {seasonNumber} - Episódio {episodeNumber}
        </h3>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance">
          {episode.name}
        </h1>

        <p>{episode.overview}</p>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-4" />
            <p className="text-sm text-muted-foreground">
              {formatReleaseDate(episode.air_date, { dateStyle: "long" })}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <TimerIcon className="size-4" />
            <p className="text-sm text-muted-foreground">
              {formatRuntime(episode.runtime)}.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <StarIcon className="size-4" />
            <p className="text-sm text-muted-foreground">
              {formatAverageVote(episode.vote_average)} de 10.
            </p>
          </div>
        </div>
      </div>

      {episode.guest_stars.length > 0 && (
        <div className="bg-muted">
          <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 flex-1">
            <h3 className="font-medium uppercase text-lg text-muted-foreground">
              Elenco
            </h3>

            <section className="flex flex-nowrap gap-4 overflow-x-auto scrollbar snap-mandatory snap-x pb-4">
              {episode.guest_stars.map((person) => (
                <Link key={person.credit_id} href={`/person/${person.id}`}>
                  <div className="flex flex-col gap-2 relative aspect-2/3 max-h-64 h-64 rounded-md overflow-clip snap-end">
                    {person.profile_path && (
                      <Image
                        src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                        alt={person.name}
                        className="bg-background object-cover z-10"
                        sizes="30vw"
                        priority
                        fill
                      />
                    )}

                    <div className="flex flex-col h-full justify-end bg-gradient-to-b from-background/30 to-background p-4 z-20">
                      <h3 className="text-lg font-bold text-balance">
                        {person.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {person.character}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          </div>
        </div>
      )}

      {episode.crew.length > 0 && (
        <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 flex-1">
          <h3 className="font-medium uppercase text-lg text-muted-foreground">
            Equipe
          </h3>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 snap-mandatory snap-x">
            {episode.crew.map((person) => (
              <Link key={person.credit_id} href={`/person/${person.id}`}>
                <div className="flex items-start rounded-md border border-muted overflow-clip snap-end">
                  <div className="relative aspect-2/3 min-h-32 max-h-32">
                    {person.profile_path ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                        alt={person.name}
                        className="bg-muted object-cover"
                        loading="lazy"
                        sizes="30vw"
                        fill
                      />
                    ) : (
                      <div className="bg-muted w-full h-full flex items-center justify-center">
                        <p className="text-balance text-xs text-muted-foreground">
                          Sem imagem
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="w-full h-full p-4">
                    <p className="text-sm text-muted-foreground">
                      {person.job}
                    </p>

                    <h3 className="text-lg font-bold text-balance">
                      {person.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {person.department} - {person.known_for_department}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
