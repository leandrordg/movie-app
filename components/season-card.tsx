import Image from "next/image";
import Link from "next/link";

export function SeasonCard({ tvId, season }: { tvId: string; season: Season }) {
  return (
    <Link href={`/tv/${tvId}/season/${season.season_number}`}>
      <div className="aspect-3/5 w-72 max-w-72 relative shrink-0 group cursor-pointer snap-end">
        {season.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w300/${season.poster_path}`}
            className="group-hover:scale-105 transition-transform duration-200 bg-muted"
            alt={season.name}
            loading="lazy"
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
