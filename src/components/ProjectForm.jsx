export default function ProjectForm() {
  return (
    <div className="border-2 border-black rounded-2xl p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-5">Add Project</h2>
      <form className="space-y-5">
        <div className="space-y-2">
          <label className="block text-lg font-medium">Title</label>
          <input className="w-full border-2 border-black rounded-xl px-4 py-3 text-lg focus:outline-non"
          type="text" placeholder="e.g. Portfolio Website" />
        </div>
        <div className="space-y-2">
          <label className="block text-lg font-medium">Description</label>
          <textarea className="w-full border-2 border-black rounded-xl px-4 py-3 text-lg focus:outline-none"
          name="" rows="4" placeholder="What is the project about" />
        </div>
        <button className="border-2 border-black rounded-xl px-6 py-2 text-lg font-medium"
        type="submit">Add</button>
      </form>
    </div>
  );
}
