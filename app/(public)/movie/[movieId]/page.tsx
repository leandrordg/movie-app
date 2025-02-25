import { Suspense } from "react";

import { MovieDetails } from "@/components/movie-details";
import { MovieFallback } from "@/components/movie-fallback";
import { MovieList } from "@/components/movie-list";

interface Props {
  params: Promise<{ movieId: string }>;
}

export default async function MoviePage({ params }: Props) {
  const { movieId } = await params;

  return (
    <main>
      <Suspense fallback={<MovieFallback />}>
        <MovieDetails movieId={movieId} />
      </Suspense>

      <Suspense fallback={null}>
        <MovieList
          title="Similares a este filme"
          type="similar"
          movieId={movieId}
        />
      </Suspense>

      <Suspense fallback={null}>
        <MovieList
          title="Recomendações para você"
          type="recommendations"
          movieId={movieId}
        />
      </Suspense>
    </main>
  );
}
