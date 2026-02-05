# Portfolio Platform (React SPA)

A responsive single-page application for showcasing projects. Users can add new projects, search/filter projects, and delete projects dynamically.

## Features

- Landing page displays a list of projects
- Add a new project using the form (updates the list immediately)
- Search projects by title or description (case-insensitive)
- Delete a project from the list
- Responsive layout inspired by the provided mockup

## Tech Stack

- React (Vite)
- Tailwind CSS (CDN)
- Vitest + React Testing Library

## Getting Started

### 1) Clone the repository

```bash
git clone <YOUR_REPO_URL>
cd portfolio-platform
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Running Tests

```bash
npx vitest run
```

## Project Structure (High Level)

- `src/App.jsx` – holds main state (`projects`, `searchTerm`), derives `filteredProjects`, and passes props to components
- `src/components/Header.jsx` – page header/title
- `src/components/ProjectForm.jsx` – controlled form inputs + submit handler (calls `onAddProject`)
- `src/components/SearchBar.jsx` – controlled search input (`value`, `onChange`)
- `src/components/ProjectList.jsx` – renders the list of projects
- `src/components/ProjectCard.jsx` – renders a single project item + delete action

## State & Props Summary

- `App.jsx`
  - State
    - `projects`: array of `{ id, title, description }`
    - `searchTerm`: string
  - Derived data
    - `filteredProjects`: `projects` filtered by `searchTerm`
  - Props
    - `ProjectForm` receives `onAddProject(newProject)`
    - `SearchBar` receives `value={searchTerm}` and `onChange={setSearchTerm}`
    - `ProjectList` receives `projects={filteredProjects}` and `onDelete={handleDeleteProject}`
