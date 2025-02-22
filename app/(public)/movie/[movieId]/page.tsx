import { Suspense } from "react";

import { MovieDetails } from "@/components/movie-details";
import { MovieFallback } from "@/components/movie-fallback";

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
    </main>
  );
}
