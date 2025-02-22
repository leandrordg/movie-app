import Image from "next/image";
import Link from "next/link";

import { ClapperboardIcon, SearchIcon, TvIcon } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-muted bg-background backdrop-blur-md">
      <div className="flex items-center gap-4 p-4">
        <Link href="/">
          <div className="relative size-8">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="dark:invert"
              priority
              fill
            />
          </div>
        </Link>

        <nav className="hidden md:flex gap-4">
          <Link
            href="/movies"
            className="px-4 py-1.5 border border-muted rounded-md cursor-pointer hover:bg-muted/80 flex items-center gap-2 shrink-0 transition"
          >
            <ClapperboardIcon className="size-4" />
            Filmes
          </Link>
          <Link
            href="/tvs"
            className="px-4 py-1.5 border border-muted rounded-md cursor-pointer hover:bg-muted/80 flex items-center gap-2 shrink-0 transition"
          >
            <TvIcon className="size-4" />
            Séries
          </Link>
        </nav>

        <div className="relative flex-1 max-w-md ml-auto">
          <input
            type="text"
            placeholder="buscar filmes e séries..."
            className="px-4 pr-12 py-1.5 border w-full border-muted rounded-md"
          />
          <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
        </div>
      </div>

      {/* mobile navigation */}
      <nav className="flex flex-nowrap md:hidden gap-4 p-4 overflow-x-auto scroll">
        <Link href="/movies" passHref>
          <button className="px-4 py-1.5 border border-muted rounded-md cursor-pointer hover:bg-muted/80 transition-colors flex items-center gap-2 shrink-0">
            <ClapperboardIcon className="size-4" />
            Filmes
          </button>
        </Link>
        <Link href="/tvs">
          <button className="px-4 py-1.5 border border-muted rounded-md cursor-pointer hover:bg-muted/80 transition-colors flex items-center gap-2 shrink-0">
            <TvIcon className="size-4" />
            Séries
          </button>
        </Link>
      </nav>
    </header>
  );
}
