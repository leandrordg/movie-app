"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { HeaderLink } from "@/components/header-link";
import { SearchBoxDialog } from "@/components/search-box-dialog";
import { Button } from "@/components/ui/button";
import { UserRoundIcon } from "lucide-react";

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full transition-colors duration-300 z-10 h-16 px-4",
        prevScrollPos < 10 ? "bg-transparent" : "bg-white"
      )}
    >
      <div className="flex items-center h-full gap-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <div className="relative size-8 transform transition-all hover:scale-110 duration-200">
              <Image src="/logo.svg" alt="Logo" priority fill />
            </div>
          </Link>

          <nav className="hidden lg:flex gap-4">
            <HeaderLink title="Filmes" href="/movies" />
            <HeaderLink title="Séries" href="/tvs" />
          </nav>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <SearchBoxDialog />

          <Button variant="outline">
            <UserRoundIcon className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
