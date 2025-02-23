"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export function HeaderLink({ title, href }: { title: string; href: string }) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(href);

  return (
    <Button variant={isActive ? "active" : "outline"} asChild>
      <Link href={href}>{title}</Link>
    </Button>
  );
}
