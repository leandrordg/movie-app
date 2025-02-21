import { getTvs } from "@/utils/fetch-data";

import { TvCard } from "@/components/tv-card";

interface Props {
  title: string;
  type: GetTvsType;
}

export async function TvList({ title, type }: Props) {
  const tvs = await getTvs(type);

  return (
    <div className="space-y-4 py-12 pl-4 odd:bg-muted">
      <h1 className="text-lg font-medium">{title}</h1>

      <section className="flex flex-nowrap gap-2 overflow-x-auto scrollbar pb-4 snap-x snap-mandatory">
        {tvs.results.map((tv) => (
          <TvCard key={tv.id} tv={tv} />
        ))}
      </section>
    </div>
  );
}
