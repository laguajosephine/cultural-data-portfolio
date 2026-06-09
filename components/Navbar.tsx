import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#A2C5D8] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* LOGO */}

        <Link href="/" className="flex flex-col leading-none">

          <span
            className="
              text-3xl
              font-semibold
              text-white
            "
          >
            Cultural Data Studio
          </span>

          <span
            className="
              text-sm
              italic
              text-white/80
              self-end
              mt-1
              tracking-wide
            "
          >
            by Joséphine Laguardia
          </span>

        </Link>

        {/* NAVIGATION */}

        <nav
          className="
            flex
            gap-8
            text-sm
            uppercase
            tracking-[0.15em]
            text-white
          "
        >

          <Link
            href="/projects"
            className="
              hover:text-[#CB1B03]
              transition-colors
            "
          >
            Projects
          </Link>

          <Link
            href="/explore"
            className="
              hover:text-[#CB1B03]
              transition-colors
            "
          >
            Explore
          </Link>

          <Link
            href="/about"
            className="
              hover:text-[#CB1B03]
              transition-colors
            "
          >
            About
          </Link>

        </nav>

      </div>
    </header>
  );
}