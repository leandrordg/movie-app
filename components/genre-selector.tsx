import { getGenres } from "@/hooks/genres";

import { GenreSelect } from "@/components/genre-select";

export async function GenreSelector() {
  const genres = await getGenres();

  return (
    <section className="flex flex-nowrap gap-4 overflow-x-auto scrollbar p-4 bg-background border-b border-muted">
      <GenreSelect genres={genres} />
    </section>
  );
}
