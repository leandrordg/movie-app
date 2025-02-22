import { getMovies } from "@/utils/fetch-data";

import { MovieCard } from "@/components/movie-card";

interface Props {
  title: string;
  type: GetMoviesType;
}

export async function MovieList({ title, type }: Props) {
  const movies = await getMovies(type);

  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold pl-4">{title}</h1>

      <section className="flex flex-nowrap gap-2 overflow-x-auto scrollbar p-4 snap-x snap-mandatory">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
