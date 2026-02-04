export default function ProjectCard({ project, onDelete }) {
  return (
    <div className="flex gap-5 items-start">
      <button
        type="button"
        onClick={() => onDelete(project.id)}
        className="w-24 h-24 border-2 border-black rounded-2xl flex-shrink-0 flex items-center justify-center text-4xl font-semibold leading-none select-none"
        aria-label={`Delete ${project.title}`}
        title="Delete"
      >
        X
      </button>

      <div className="min-w-0">
        <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
          {project.title}
        </h3>
        <p className="text-lg">{project.description}</p>
      </div>
    </div>
  );
}
