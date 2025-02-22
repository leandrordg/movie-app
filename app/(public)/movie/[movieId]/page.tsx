import { Suspense } from "react";

import { DetailsFallback } from "@/components/details-fallback";
import { MovieDetails } from "@/components/movie-details";

interface Props {
  params: Promise<{ movieId: string }>;
}

export default async function MoviePage({ params }: Props) {
  const { movieId } = await params;

  return (
    <main>
      <Suspense fallback={<DetailsFallback />}>
        <MovieDetails movieId={movieId} />
      </Suspense>
    </main>
  );
}
