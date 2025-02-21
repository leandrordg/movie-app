import Image from "next/image";

export function TvCard({ tv }: { tv: Tv }) {
  return (
    <div className="aspect-3/4 w-64 max-w-64 relative shrink-0 group cursor-pointer snap-end">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
        className="group-hover:scale-105 transition-transform duration-200"
        loading="lazy"
        alt={tv.name}
        sizes="30vw"
        fill
      />
    </div>
  );
}
