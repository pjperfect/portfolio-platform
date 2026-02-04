import ProjectCard from './ProjectCard';

export default function ProjectList({ projects = [], onDelete }) {
  return (
    <div className="space-y-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onDelete={onDelete} />
      ))}
    </div>
  );
}
