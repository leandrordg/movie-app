import { getTvs } from "@/utils/fetch-data";

import { TvCard } from "@/components/tv-card";

interface Props {
  title: string;
  type: GetTvsType;
}

export async function TvList({ title, type }: Props) {
  const tvs = await getTvs(type);

  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold pl-4">{title}</h1>

      <section className="flex flex-nowrap gap-2 overflow-x-auto scrollbar p-4 snap-x snap-mandatory">
        {tvs.results.map((tv) => (
          <TvCard key={tv.id} tv={tv} />
        ))}
      </section>
    </div>
  );
}
