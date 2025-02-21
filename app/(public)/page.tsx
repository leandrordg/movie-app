import { getDiscoverMovies } from "@/hooks/movies";
import { getDiscoverTvs } from "@/hooks/tv";

import { MovieList } from "@/components/movie-list";
import { TvList } from "@/components/tv-list";

export default async function HomePage() {
  const discoverMovies = await getDiscoverMovies();
  const allTvs = await getDiscoverTvs();

  return (
    <main className="p-4 space-y-8">
      <MovieList title="Descubrir filmes" data={discoverMovies} />

      <TvList title="Descubrir series" data={allTvs} />
    </main>
  );
}
