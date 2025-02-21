import { Suspense } from "react";

import { MovieList } from "@/components/movie-list";
import { RowFallback } from "@/components/row-fallback";
import { TvList } from "@/components/tv-list";

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<RowFallback length={2} />}>
        <TvList title="Séries Populares" type="popular" />
        <TvList title="Mais Bem Avaliadas" type="topRated" />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <MovieList title="Descobrir Novos Filmes" type="discover" />
        <MovieList title="Filmes em Destaque" type="popular" />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <TvList title="Explorar Séries" type="discover" />
        <MovieList title="Filmes Recomendados" type="popular" />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <MovieList title="Mais Bem Avaliados" type="topRated" />
        <MovieList title="Lançamentos em Breve" type="upcoming" />
      </Suspense>
    </main>
  );
}
