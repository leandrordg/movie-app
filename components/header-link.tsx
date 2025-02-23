"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderLink({ title, href }: { title: string; href: string }) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`px-4 h-8 border border-transparent rounded-md cursor-pointer text-sm flex items-center gap-2 shrink-0 transition ${
        isActive
          ? "bg-blue-900 border-blue-900 hover:bg-blue-900/90"
          : "bg-muted border-muted hover:bg-muted/90"
      }`}
    >
      {title}
    </Link>
  );
}
