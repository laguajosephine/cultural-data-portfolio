import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-8 py-6 flex justify-between items-center border-b border-black/10">
      <div className="font-serif text-xl tracking-wide">
        Cultural Data Studio
      </div>

      <nav className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}