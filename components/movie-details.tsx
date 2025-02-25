import Image from "next/image";
import { notFound } from "next/navigation";

import { getMovieDetails } from "@/hooks/movies";
import { getWatchProviders } from "@/hooks/watch-providers";
import {
  formatAverageVote,
  formatReleaseDate,
  formatRuntime,
} from "@/utils/format-values";

import {
  CalendarIcon,
  ShoppingBasketIcon,
  StarIcon,
  StoreIcon,
  TimerIcon,
} from "lucide-react";

export async function MovieDetails({ movieId }: { movieId: string }) {
  const movie = await getMovieDetails(movieId);
  const watchProviders = await getWatchProviders(movieId);

  if (!movie) return notFound();

  const currentProvider = watchProviders.results["BR"];

  return (
    <div>
      <div className="relative w-full h-48 md:h-72 pt-16">
        {movie.backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className="bg-muted object-cover"
            sizes="90vw"
            priority
            fill
          />
        )}
      </div>

      <div className="flex items-start gap-8 max-w-7xl mx-auto py-12 px-4 relative">
        <div className="relative aspect-3/5 w-72 max-w-72 rounded-md overflow-clip hidden md:block shadow">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
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

          {movie.overview && <p>{movie.overview}</p>}

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
              <p>{formatAverageVote(movie.vote_average)}</p>
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

      {currentProvider && (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-8">
          <h1 className="text-2xl font-bold tracking-tighter text-balance">
            Assistir em:
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x rounded-md border overflow-clip">
            {currentProvider.buy && (
              <div>
                <div className="flex items-center gap-2 font-medium p-4 border-b">
                  <StoreIcon className="size-4" />
                  Comprar filme
                </div>

                <ul className="grid grid-cols-1">
                  {currentProvider.buy.map((provider) => (
                    <li
                      key={provider.provider_id}
                      className="flex items-center gap-4 font-medium hover:bg-muted p-4"
                    >
                      <div className="relative size-8 rounded-md border overflow-clip">
                        <Image
                          src={`https://image.tmdb.org/t/p/w92/${provider.logo_path}`}
                          alt={provider.provider_name}
                          className="bg-muted object-cover"
                          priority
                          fill
                        />
                      </div>
                      {provider.provider_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {currentProvider.rent && (
              <div>
                <div className="flex items-center gap-2 font-medium p-4 border-b not-md:border-t">
                  <ShoppingBasketIcon className="size-4" />
                  Alugar filme
                </div>

                <ul className="grid grid-cols-1">
                  {currentProvider.rent.map((provider) => (
                    <li
                      key={provider.provider_id}
                      className="flex items-center gap-4 font-medium p-4 hover:bg-muted"
                    >
                      <div className="relative size-8 rounded-md border overflow-clip">
                        <Image
                          src={`https://image.tmdb.org/t/p/w92/${provider.logo_path}`}
                          alt={provider.provider_name}
                          className="bg-muted object-cover"
                          priority
                          fill
                        />
                      </div>
                      {provider.provider_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
