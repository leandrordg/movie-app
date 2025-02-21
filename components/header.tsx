import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="flex items-center gap-4 p-4">
        <Link href="/">
          <div className="relative size-8">
            <Image src="/logo.svg" alt="Logo" className="dark:invert" fill />
          </div>
        </Link>
      </div>
    </header>
  );
}
