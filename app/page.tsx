import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 py-16 space-y-24">

      {/* HERO */}
      <section className="space-y-6">
        <h1 className="text-5xl font-serif">
          Data tools for cultural discovery
        </h1>

        <p className="text-lg max-w-2xl">
          Exploring art, culture, luxury and creative ecosystems through data.
        </p>

        <div className="flex gap-4">
          <Link href="/projects" className="px-4 py-2 bg-primary text-white">
            View projects
          </Link>
          <Link href="/explore" className="px-4 py-2 border border-black">
            Explore lab
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-softBlue/40 p-8">
        <h2 className="text-2xl font-serif mb-4">Featured project</h2>
        <p className="mb-4">
          Cultural recommendation system (placeholder)
        </p>
        <div className="w-full h-64 bg-white/60"></div>
      </section>

      {/* PILLARS */}
      <section className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-serif text-xl">Data Engineering</h3>
        </div>
        <div>
          <h3 className="font-serif text-xl">Analytics</h3>
        </div>
        <div>
          <h3 className="font-serif text-xl">Machine Learning</h3>
        </div>
      </section>

    </div>
  );
}