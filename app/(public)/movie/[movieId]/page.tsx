import { Suspense } from "react";

import { HeaderFallback } from "@/components/header-fallback";
import { MovieDetails } from "@/components/movie-details";

interface Props {
  params: Promise<{ movieId: string }>;
}

export default async function MoviePage({ params }: Props) {
  const { movieId } = await params;

  return (
    <main>
      <Suspense fallback={<HeaderFallback />}>
        <MovieDetails movieId={movieId} />
      </Suspense>
    </main>
  );
}
