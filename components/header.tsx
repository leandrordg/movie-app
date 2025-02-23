import Image from "next/image";
import Link from "next/link";

import { UserRoundIcon } from "lucide-react";

import { HeaderLink } from "@/components/header-link";
import { SearchBoxDialog } from "@/components/search-box-dialog";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background border-b border-muted backdrop-blur-md">
      <div className="flex items-center gap-4 p-4">
        <div className="flex items-center gap-4 lg:flex-1">
          <Link href="/">
            <div className="relative size-8 transform transition-all hover:scale-105 hover:rotate-360 ease-in-out opacity-85 hover:opacity-100 duration-300">
              <Image
                src="/logo.svg"
                alt="Logo"
                className="dark:invert"
                priority
                fill
              />
            </div>
          </Link>

          <nav className="hidden lg:flex gap-4">
            <HeaderLink title="Filmes" href="/movies" />
            <HeaderLink title="Séries" href="/tvs" />
          </nav>
        </div>

        <div className="flex-1">
          <SearchBoxDialog />
        </div>

        <div className="flex items-center gap-4 lg:flex-1 justify-end">
          <Button variant="outline" size="icon">
            <UserRoundIcon className="size-4" />
          </Button>
        </div>
      </div>

      {/* mobile navigation */}
      <nav className="flex flex-nowrap lg:hidden gap-4 p-4 overflow-x-auto scroll">
        <HeaderLink title="Filmes" href="/movies" />
        <HeaderLink title="Séries" href="/tvs" />
      </nav>
    </header>
  );
}
