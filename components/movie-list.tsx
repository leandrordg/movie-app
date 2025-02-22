import { getMovies } from "@/utils/fetch-data";

import { MovieCard } from "@/components/movie-card";

interface Props {
  title: string;
  type: GetMoviesType;
}

export async function MovieList({ title, type }: Props) {
  const movies = await getMovies(type);

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-lg font-medium">{title}</h1>

      <section className="flex flex-nowrap gap-2 overflow-x-auto scrollbar pb-4 snap-x snap-mandatory">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
