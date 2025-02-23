import { SearchIcon } from "lucide-react";

export function SearchBox() {
  return (
    <div className="flex items-center justify-between px-4 select-none bg-muted hover:bg-muted/90 cursor-pointer border border-muted h-8 rounded-md transition-colors">
      <p className="text-sm text-muted-foreground line-clamp-1">
        buscar filmes e séries...
      </p>

      <SearchIcon className="size-4 shrink-0" />
    </div>
  );
}
