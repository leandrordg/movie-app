import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-muted-foreground">
      <div className="flex items-center gap-4 p-4">
        <div className="relative size-8">
          <Image src="/logo.svg" alt="Logo" className="dark:invert" fill />
        </div>
      </div>
    </header>
  );
}
