import { Suspense } from "react";

import { GenreFallback } from "@/components/genre-fallback";
import { GenreSelector } from "@/components/genre-selector";
import { MovieList } from "@/components/movie-list";
import { RowFallback } from "@/components/row-fallback";

interface Props {
  searchParams: Promise<{ genreId?: string }>;
}

export default async function MoviesPage({ searchParams }: Props) {
  const { genreId } = await searchParams;

  return (
    <main className="pt-16">
      <Suspense fallback={<GenreFallback />}>
        <GenreSelector />
      </Suspense>

      <Suspense fallback={<RowFallback length={1} />}>
        <MovieList title="Exibindo todos os filmes" type="discover" genreId={genreId} />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <MovieList title="Filmes em Alta Hoje" type="dayTrending" />
        <MovieList title="Mais Bem Avaliados" type="topRated" />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <MovieList title="Filmes em Destaque" type="popular" />
        <MovieList title="Em Cartaz" type="nowPlaying" />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <MovieList title="Filmes em Alta Esta Semana" type="weekTrending" />
        <MovieList title="Lançamentos em Breve" type="upcoming" />
      </Suspense>
    </main>
  );
}
