import { useState } from 'react';

import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

export default function App() {
  const SAMPLE_PROJECTS = [
    { id: 1, title: 'Project 1', description: 'Description of the project' },
    { id: 2, title: 'Project 2', description: 'Description of the project' },
    { id: 3, title: 'Project 3', description: 'Description of the project' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = SAMPLE_PROJECTS.filter((p) => {
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
        <ProjectForm />

        <div className="border-2 border-black rounded-2xl p-6 sm:p-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <ProjectList projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}
