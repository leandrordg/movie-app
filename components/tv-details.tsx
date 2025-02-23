import Image from "next/image";
import { notFound } from "next/navigation";

import { getTv } from "@/utils/fetch-data";
import { formatAverageVote, formatReleaseDate } from "@/utils/format-values";

import { SeasonCard } from "@/components/season-card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, InfoIcon, StarIcon } from "lucide-react";

export async function TvDetails({ tvId }: { tvId: string }) {
  const tv = await getTv(tvId, "details");

  if (!tv) return notFound();

  return (
    <div className="relative">
      <div className="absolute inset-0 h-64 md:h-96 -z-10">
        <div className="relative w-full h-64 md:h-96">
          {tv.backdrop_path && (
            <Image
              src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
              alt={tv.name}
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
          {tv.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
              alt={tv.name}
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
          {tv.genres && (
            <div className="flex gap-2 flex-wrap">
              {tv.genres.map((genre) => (
                <Badge key={genre.id}>{genre.name}</Badge>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance">
            {tv.name}
          </h1>

          {tv.tagline && <p>{tv.tagline}</p>}

          {tv.overview && <p>{tv.overview}</p>}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="flex items-center gap-1 text-muted-foreground">
                <CalendarIcon className="size-4" /> Data de lançamento
              </p>
              <p>
                {formatReleaseDate(tv.first_air_date, { dateStyle: "long" })}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1 text-muted-foreground">
                <StarIcon className="size-4" /> Avaliação média
              </p>
              <p>{formatAverageVote(tv.vote_average)} de 10.</p>
            </div>
            <div>
              <p className="flex items-center gap-1 text-muted-foreground">
                <InfoIcon className="size-4" />
                Status
              </p>
              <p>{tv.in_production ? "Em produção" : "Finalizado"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 pl-4 space-y-4">
        <h3 className="font-medium uppercase text-lg text-muted-foreground">
          Todas as temporadas ({tv.number_of_seasons})
        </h3>

        <section className="flex flex-nowrap gap-2 overflow-x-auto scrollbar pb-4 snap-x snap-mandatory">
          {tv.seasons.map((season) => (
            <SeasonCard key={season.id} tvId={tvId} season={season} />
          ))}
        </section>
      </div>
    </div>
  );
}
