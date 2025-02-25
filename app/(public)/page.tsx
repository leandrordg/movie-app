import { Suspense } from "react";

import { MovieList } from "@/components/movie-list";
import { RowFallback } from "@/components/row-fallback";
import { TvList } from "@/components/tv-list";

export default function HomePage() {
  return (
    <main className="pt-16">
      <Suspense fallback={<RowFallback length={2} />}>
        <TvList title="Séries em Alta Hoje" type="dayTrending" />
        <MovieList title="Filmes em Alta Hoje" type="dayTrending" />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <TvList title="Séries Populares" type="popular" />
        <MovieList title="Filmes em Destaque" type="popular" />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <MovieList title="Mais Bem Avaliados" type="topRated" />
        <TvList title="Séries Mais Bem Avaliadas" type="topRated" />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <TvList title="Explorar Séries" type="discover" />
        <MovieList title="Descobrir Novos Filmes" type="discover" />
      </Suspense>

      <Suspense fallback={<RowFallback length={2} />}>
        <TvList title="Séries em Alta Esta Semana" type="weekTrending" />
        <MovieList title="Lançamentos em Breve" type="upcoming" />
      </Suspense>
    </main>
  );
}
