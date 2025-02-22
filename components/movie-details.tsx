import Image from "next/image";
import { notFound } from "next/navigation";

import { getMovie } from "@/utils/fetch-data";
import {
  formatAverageVote,
  formatReleaseDate,
  formatRuntime,
} from "@/utils/format-values";

import { CalendarIcon, StarIcon, TimerIcon } from "lucide-react";

export async function MovieDetails({ movieId }: { movieId: string }) {
  const movie = await getMovie(movieId, "details");

  if (!movie) return notFound();

  return (
    <div>
      <div className="relative w-full h-48 md:h-72">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className="bg-muted object-cover"
          sizes="90vw"
          priority
          fill
        />
      </div>

      <div className="flex items-start gap-8 max-w-7xl mx-auto py-12 px-4 relative">
        <div className="relative aspect-3/5 w-72 max-w-72 rounded-md overflow-clip hidden md:block shadow">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="bg-muted object-cover"
            sizes="30vw"
            fill
          />
        </div>

        <div className="space-y-4 md:pt-12 flex-1">
          {movie.genres && (
            <div className="flex gap-2 flex-wrap">
              {movie.genres.map((genre) => (
                <button
                  key={genre.id}
                  className="text-xs border border-muted rounded-md px-2 py-0.5"
                >
                  {genre.name}
                </button>
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
              <p>{formatAverageVote(movie.vote_average)} de 10.</p>
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
    </div>
  );
}
