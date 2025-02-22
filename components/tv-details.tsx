import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getTv } from "@/utils/fetch-data";
import { formatAverageVote, formatReleaseDate } from "@/utils/format-values";

import {
  CalendarIcon,
  ChevronLeftIcon,
  InfoIcon,
  StarIcon,
} from "lucide-react";

export async function TvDetails({ tvId }: { tvId: string }) {
  const tv = await getTv(tvId, "details");

  if (!tv) return notFound();

  return (
    <div>
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
          alt={tv.name}
          className="bg-muted object-cover"
          sizes="90vw"
          priority
          fill
        />
      </div>

      <div className="flex items-start gap-8 max-w-7xl mx-auto py-12 px-4 space-y-4 relative">
        <div className="relative aspect-3/4 max-w-64 w-64 rounded-md overflow-clip hidden md:block">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
            alt={tv.name}
            className="bg-muted object-cover"
            sizes="30vw"
            fill
          />
        </div>

        <div className="space-y-4 flex-1">
          <div className="hidden md:block absolute -top-12 left-4">
            <Link
              href="/"
              className="flex items-center gap-4 text-sm w-64 h-10 px-4 py-2 rounded-sm bg-background shadow"
            >
              <ChevronLeftIcon className="size-4" />
              Voltar a página inicial
            </Link>
          </div>

          {tv.genres && (
            <div className="flex gap-2 flex-wrap">
              {tv.genres.map((genre) => (
                <div
                  key={genre.id}
                  className="text-xs border border-muted rounded-md px-2 py-0.5"
                >
                  {genre.name}
                </div>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance">
            {tv.name}
          </h1>

          {tv.tagline && <p className="text-muted-foreground">{tv.tagline}</p>}

          {tv.overview && <p className="line-clamp-3">{tv.overview}</p>}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="flex items-center gap-1 text-muted-foreground">
                <CalendarIcon className="size-4" /> Data de lançamento
              </p>
              <p>
                {formatReleaseDate(tv.first_air_date, { dateStyle: "medium" })}
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
        <h2 className="text-lg font-medium">Todas as temporadas</h2>

        <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar pb-4 snap-x snap-mandatory">
          {tv.seasons.map((season) => (
            <Link key={season.id} href={`/tv/${tvId}/season/${season.id}`}>
              <div className="aspect-3/4 w-64 max-w-64 relative shrink-0 group cursor-pointer snap-end">
                <Image
                  src={`https://image.tmdb.org/t/p/w300/${season.poster_path}`}
                  className="group-hover:scale-105 transition-transform duration-200 bg-muted"
                  alt={season.name}
                  loading="lazy"
                  sizes="30vw"
                  fill
                />
                <p className="text-center text-sm">{season.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
