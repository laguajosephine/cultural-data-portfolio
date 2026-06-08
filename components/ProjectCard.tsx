import Link from "next/link";

export default function ProjectCard({ title }: { title: string }) {
  return (
    <Link
      href="/projects/sample"
      className="p-6 bg-white/40 border border-black/10 hover:bg-white/60 transition"
    >
      <h3 className="font-serif text-xl">{title}</h3>
      <p className="text-sm mt-2">
        Case study placeholder
      </p>
    </Link>
  );
}