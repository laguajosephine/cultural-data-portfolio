import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="px-8 py-16 space-y-8">
      <h1 className="text-4xl font-serif">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard title="Cultural Recommender" />
        <ProjectCard title="Art Market Explorer" />
      </div>
    </div>
  );
}