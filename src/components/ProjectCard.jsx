export default function ProjectCard({ project }) {
  return (
    <div className="flex gap-5 items-start">
      <div
        className="w-20 h-20 border-2 border-black rounded-2xl flex-shrink-0"
        aria-hidden="true"
      ></div>

      <div className="min-w-0">
        <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
          {project.title}
        </h3>
        <p className="text-lg">{project.description}</p>
      </div>
    </div>
  );
}
