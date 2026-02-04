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

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Header />
      <div className="space-y-6">
        <ProjectForm />
        <div>
          <SearchBar />
          <ProjectList projects={SAMPLE_PROJECTS} />
        </div>
      </div>
    </div>
  );
}
