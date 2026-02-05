import { useState } from 'react';

export default function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (!cleanTitle || !cleanDescription) return;

    onAddProject({
      title: cleanTitle,
      description: cleanDescription,
    });

    setTitle('');
    setDescription('');
  }

  return (
    <section className="border-2 border-black rounded-2xl p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-5">Add Project</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-lg font-medium" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className="w-full border-2 border-black rounded-xl px-4 py-3 text-lg focus:outline-none"
            type="text"
            placeholder="e.g. Portfolio Website"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="w-full border-2 border-black rounded-xl px-4 py-3 text-lg focus:outline-none"
            rows="4"
            placeholder="What is the project about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="border-2 border-black rounded-xl px-6 py-2 text-lg font-medium"
          type="submit"
        >
          Add
        </button>
      </form>
    </section>
  );
}
