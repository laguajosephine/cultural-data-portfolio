export default function ProjectPage() {
  return (
    <div className="px-8 py-16 max-w-4xl space-y-12">

      <div>
        <h1 className="text-4xl font-serif">Project Title</h1>
        <p className="text-sm text-gray-600">Category</p>
      </div>

      <div className="h-80 bg-softBlue/40" />

      <section>
        <h2 className="font-serif text-2xl">Context</h2>
        <div className="h-24 bg-white/40 mt-4"></div>
      </section>

      <section>
        <h2 className="font-serif text-2xl">Methodology</h2>
        <div className="h-40 bg-white/40 mt-4"></div>
      </section>

      <section>
        <h2 className="font-serif text-2xl">Insights</h2>
        <div className="h-32 bg-white/40 mt-4"></div>
      </section>

    </div>
  );
}