import Image from "next/image";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="aspect-3/4 w-64 max-w-64 relative shrink-0 group cursor-pointer snap-end">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="group-hover:scale-105 transition-transform duration-200"
        alt={movie.title}
        loading="lazy"
        sizes="30vw"
        fill
      />
    </div>
  );
}
