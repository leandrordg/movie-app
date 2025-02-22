import Image from "next/image";
import Link from "next/link";

export function TvCard({ tv }: { tv: Tv }) {
  return (
    <Link href={`/tv/${tv.id}`}>
      <div className="aspect-3/5 w-72 max-w-72 relative shrink-0 group cursor-pointer snap-end">
        {tv.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
            className="group-hover:scale-105 transition-transform duration-200 bg-muted"
            loading="lazy"
            alt={tv.name}
            sizes="30vw"
            fill
          />
        ) : (
          <div className="bg-muted w-full h-full flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Sem imagem</p>
          </div>
        )}
      </div>
    </Link>
  );
}
