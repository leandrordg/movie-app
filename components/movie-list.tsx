import { getMovies } from "@/utils/fetch-data";

import { MovieCard } from "@/components/movie-card";
import { formatGenreIds } from "@/utils/format-values";

interface Props {
  title?: string;
  type: GetMoviesType;
  genreId?: string;
}

export async function MovieList({ title, type, genreId }: Props) {
  const movies = await getMovies(type, genreId);

  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold pl-4">
        {title} {formatGenreIds(genreId)}
      </h1>

      <section className="flex flex-nowrap gap-2 overflow-x-auto scrollbar p-4 snap-x snap-mandatory">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
