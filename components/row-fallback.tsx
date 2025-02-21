export function RowFallback({ length = 1 }: { length?: number }) {
  const mockItemsLength = 12;

  return Array.from({ length }).map((_, index) => (
    <div key={index} className="space-y-4 py-12 pl-4">
      <div className="w-3/4 sm:w-1/2 md:w-1/3 h-6 bg-muted rounded animate-pulse" />
      <div className="flex flex-nowrap gap-2 overflow-x-hidden">
        {Array.from({ length: mockItemsLength }).map((_, index) => (
          <div
            key={index}
            className="aspect-3/4 w-64 max-w-64 relative shrink-0 bg-muted animate-pulse"
          />
        ))}
      </div>
    </div>
  ));
}
