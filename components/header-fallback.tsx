export function HeaderFallback() {
  return (
    <div className="space-y-4">
      <div className="w-full h-64 md:h-96 bg-muted animate-pulse" />
      <div className="max-w-4xl mx-auto p-4 space-y-4">
        <div className="w-1/2 h-12 bg-muted animate-pulse" />
        <div className="w-1/4 h-6 bg-muted animate-pulse" />
        <div className="w-1/3 h-6 bg-muted animate-pulse" />
        <div className="w-full h-24 bg-muted animate-pulse" />
        <div className="w-full h-16 bg-muted animate-pulse" />
      </div>
    </div>
  );
}
