import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

const INITIAL_PROJECTS = [
  { id: 1, title: 'Project 1', description: 'Description of the project' },
  { id: 2, title: 'Project 2', description: 'Description of the project' },
  { id: 3, title: 'Project 3', description: 'Description of the project' },
];

export default function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [searchTerm, setSearchTerm] = useState('');

  function handleAddProject(newProject) {
    setProjects((prev) => [
      { id: crypto.randomUUID(), ...newProject },
      ...prev,
    ]);
  }

  const filteredProjects = projects.filter((p) => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-4xl mx-auto px-4 pb-10">
      <Header />

      <div className="space-y-6">
        <ProjectForm onAddProject={handleAddProject} />

        <div className="border-2 border-black rounded-2xl p-6 sm:p-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <ProjectList projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}
