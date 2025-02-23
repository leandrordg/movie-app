export function RowFallback({ length = 1 }: { length?: number }) {
  const randomScreenWidth = Math.floor(Math.random() * 50) + 250;

  return Array.from({ length }).map((_, rowIndex) => (
    <div key={rowIndex} className="py-4">
      <div className="px-4">
        <div
          style={{ width: `${randomScreenWidth}px` }}
          className="h-10 bg-muted rounded-md animate-pulse"
        />
      </div>
      <section className="flex gap-2 overflow-x-hidden p-4">
        {Array.from({ length: 12 }).map((_, itemIndex) => (
          <div
            key={itemIndex}
            className="aspect-3/5 w-72 shrink-0 bg-muted animate-pulse"
          />
        ))}
      </section>
    </div>
  ));
}
