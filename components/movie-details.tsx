import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getMovie } from "@/utils/fetch-data";
import {
  formatAverageVote,
  formatReleaseDate,
  formatRuntime,
} from "@/utils/format-values";

import {
  CalendarIcon,
  ChevronLeftIcon,
  StarIcon,
  TimerIcon,
} from "lucide-react";

export async function MovieDetails({ movieId }: { movieId: string }) {
  const movie = await getMovie(movieId, "details");

  if (!movie) return notFound();

  return (
    <div>
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className="bg-muted object-cover"
          sizes="90vw"
          priority
          fill
        />
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 space-y-4 relative">
        <div className="absolute -top-12 left-4">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm px-2 py-1 rounded-sm bg-background shadow"
          >
            <ChevronLeftIcon className="size-4" />
            Voltar a página inicial
          </Link>
        </div>

        {movie.genres && (
          <div className="flex gap-2 flex-wrap">
            {movie.genres.map((genre) => (
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
          {movie.title}
        </h1>

        {movie.tagline && (
          <p className="text-muted-foreground">{movie.tagline}</p>
        )}

        {movie.overview && <p className="line-clamp-3">{movie.overview}</p>}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="flex items-center gap-1 text-muted-foreground">
              <CalendarIcon className="size-4" /> Lançamento
            </p>
            <p>
              {formatReleaseDate(movie.release_date, { dateStyle: "medium" })}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-muted-foreground">
              <StarIcon className="size-4" /> Avaliação média
            </p>
            <p>
              {formatAverageVote(movie.vote_average, {
                fractionalSecondDigits: 1,
              })}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-muted-foreground">
              <TimerIcon className="size-4" /> Duração do filme
            </p>
            <p>{formatRuntime(movie.runtime)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
