import { MovieCard } from "@/components/movie-card";

interface Props {
  title: string;
  data: MovieRequest;
}

export function MovieList({ title, data }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-medium">{title}</h1>

      <section className="flex flex-nowrap gap-2 overflow-x-auto scrollbar pb-4 snap-x snap-mandatory">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
