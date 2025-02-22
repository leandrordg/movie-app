import Image from "next/image";
import Link from "next/link";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="aspect-3/5 w-72 max-w-72 relative shrink-0 group cursor-pointer snap-end">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="group-hover:scale-105 transition-transform duration-200 bg-muted"
          alt={movie.title}
          loading="lazy"
          sizes="30vw"
          fill
        />
      </div>
    </Link>
  );
}
