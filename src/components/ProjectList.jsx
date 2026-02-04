import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  return (
    <div className="space-y-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
