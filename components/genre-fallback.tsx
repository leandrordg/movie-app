export function GenreFallback() {
  return (
    <section className="flex gap-4 overflow-x-hidden p-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="min-w-20 h-6 rounded-md shadow shrink-0 bg-muted animate-pulse"
        />
      ))}
    </section>
  );
}
