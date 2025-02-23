export function EpisodeFallback() {
  return (
    <div>
      <div className="max-w-7xl mx-auto md:p-4">
        <div className="relative aspect-6/3 md:aspect-6/2 md:rounded-md shadow bg-muted animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 space-y-4 relative">
        {[12, 6, 16].map((h, i) => (
          <div
            key={i}
            className={`w-${
              i === 0 ? "full lg:w-1/2" : i === 1 ? "2/3" : "1/3"
            } h-${h} bg-muted rounded-md animate-pulse`}
          />
        ))}
      </div>

      <div className="bg-muted">
        <div className="max-w-7xl mx-auto space-y-4 py-12 px-4 flex-1">
          <div className="w-1/3 h-6 bg-background rounded-md animate-pulse" />
          <section className="flex gap-4 overflow-x-hidden pb-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 aspect-2/3 h-64 rounded-md bg-background animate-pulse"
              />
            ))}
          </section>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-4 py-12 px-4">
        <div className="w-1/3 h-6 bg-muted rounded-md animate-pulse" />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="flex items-start rounded-md border border-muted overflow-clip min-h-32 max-h-32 bg-muted animate-pulse"
            />
          ))}
        </section>
      </div>
    </div>
  );
}
