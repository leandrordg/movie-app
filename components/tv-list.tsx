import { TvCard } from "@/components/tv-card";

interface Props {
  title: string;
  data: TvRequest;
}

export function TvList({ title, data }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-medium">{title}</h1>

      <section className="flex flex-nowrap gap-2 overflow-x-auto scrollbar pb-4 snap-x snap-mandatory">
        {data.results.map((tv) => (
          <TvCard key={tv.id} tv={tv} />
        ))}
      </section>
    </div>
  );
}
