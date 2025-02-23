export function MovieFallback() {
  const mockItems = Array.from({ length: 12 });

  return (
    <div>
      <div className="w-full h-48 md:h-72 bg-muted animate-pulse" />
      <div className="flex items-start gap-8 max-w-7xl mx-auto py-12 px-4 relative">
        <div className="hidden md:block aspect-3/5 w-72 rounded-md bg-muted animate-pulse" />
        <div className="space-y-4 flex-1">
          {[12, 6, 6, 24, 16].map((h, i) => (
            <div
              key={i}
              className={`w-${
                i < 3
                  ? i === 0
                    ? "full lg:w-1/2"
                    : i === 1
                    ? "2/3 lg:w-1/3"
                    : "1/3 lg:w-1/4"
                  : "full"
              } h-${h} bg-muted rounded-md animate-pulse`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 pl-4">
        <div className="w-3/4 sm:w-1/2 md:w-1/3 h-6 bg-muted rounded-md animate-pulse" />
        <section className="flex gap-2 overflow-x-hidden pb-4">
          {mockItems.map((_, index) => (
            <div
              key={index}
              className="aspect-3/5 w-72 shrink-0 bg-muted animate-pulse"
            />
          ))}
        </section>
      </div>
    </div>
  );
}
