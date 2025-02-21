import { Suspense } from "react";

import { HeaderFallback } from "@/components/header-fallback";
import { MovieHeader } from "@/components/movie-header";

interface Props {
  params: Promise<{ movieId: string }>;
}

export default async function MoviePage({ params }: Props) {
  const { movieId } = await params;

  return (
    <main>
      <Suspense fallback={<HeaderFallback />}>
        <MovieHeader movieId={movieId} />
      </Suspense>
    </main>
  );
}
