export function EpisodeFallback() {
  const mockItemsLength = 12;

  return (
    <div>
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="relative aspect-6/3 md:aspect-6/2 md:rounded-md overflow-clip shadow bg-muted animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 space-y-4 relative">
        <div className="w-full lg:w-1/2 h-12 bg-muted rounded-md animate-pulse" />
        <div className="w-2/3 h-6 bg-muted rounded-md animate-pulse" />
        <div className="w-1/3 h-16 rounded-md bg-muted animate-pulse" />
      </div>

      <div className="bg-muted">
        <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 flex-1">
          <div className="w-1/3 h-6 bg-background rounded-md animate-pulse" />
          <section className="flex flex-nowrap gap-4 overflow-x-auto scrollbar snap-mandatory snap-x pb-4">
            {Array.from({ length: mockItemsLength }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 relative aspect-2/3 max-h-64 h-64 rounded-md overflow-clip snap-end bg-background animate-pulse"
              />
            ))}
          </section>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 flex-">
        <div className="w-1/3 h-6 bg-muted rounded-md animate-pulse" />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 snap-mandatory snap-x">
          {Array.from({ length: mockItemsLength }).map((_, index) => (
            <div
              key={index}
              className="flex items-start rounded-md border border-muted overflow-clip min-h-32 max-h-32 snap-end bg-muted animate-pulse"
            />
          ))}
        </section>
      </div>
    </div>
  );
}
