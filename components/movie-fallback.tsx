export function MovieFallback() {
  const mockItemsLength = 12;

  return (
    <div>
      <div className="w-full h-48 md:h-72 bg-muted animate-pulse" />
      <div className="flex items-start gap-8 max-w-7xl mx-auto py-12 px-4 space-y-4 relative">
        <div className="aspect-3/5 w-72 max-w-72 rounded-md overflow-clip hidden md:block bg-muted animate-pulse" />
        <div className="space-y-4 flex-1">
          <div className="w-full lg:w-1/2 h-12 bg-muted rounded-md animate-pulse" />
          <div className="w-2/3 lg:w-1/3 h-6 bg-muted rounded-md animate-pulse" />
          <div className="w-1/3 lg:w-1/4 h-6 rounded-md bg-muted animate-pulse" />
          <div className="w-full h-24 rounded-md bg-muted animate-pulse" />
          <div className="w-full h-16 rounded-md bg-muted animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 pl-4 space-y-4">
        <div className="w-3/4 sm:w-1/2 md:w-1/3 h-6 bg-muted rounded-md animate-pulse" />
        <section className="flex flex-nowrap gap-2 overflow-x-auto scrollbar pb-4 snap-x snap-mandatory">
          {Array.from({ length: mockItemsLength }).map((_, index) => (
            <div
              key={index}
              className="aspect-3/5 w-72 max-w-72 relative shrink-0 bg-muted animate-pulse"
            />
          ))}
        </section>
      </div>
    </div>
  );
}
