# Job Application Tracker

A personal dashboard for tracking job applications through the hiring process — built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- Add, edit, and delete job applications
- Kanban board with drag-and-drop (Applied → Interview → Offer → Rejected)
- Stats dashboard showing application totals and response rates
- Filter and search by company or status
- Persistent storage via localStorage
- Fully typed with TypeScript

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Build tool | Vite |
| Drag and drop | @dnd-kit/core |
| Charts | Recharts |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/Job-Application-Tracker-Project.git
cd Job-Application-Tracker-Project
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

## Project Structure

```
src/
  types/          # TypeScript interfaces and types
  hooks/          # Custom hooks (useApplications)
  features/       # Page-level components (ApplicationForm, ApplicationList, KanbanBoard)
  components/     # Reusable UI components (Button, Modal, Badge)
  App.tsx         # Root component
  main.tsx        # Entry point
```

## Data

All data is stored in the browser's localStorage under the key `jobApplications`. No account or backend required. If you clear your browser data, applications will be lost — a Supabase backend is planned as a future enhancement.

## Deployment

The app is deployed to Vercel and automatically redeploys on every push to `main`.

Live URL: _add your Vercel URL here once deployed_

## Roadmap

- [x] Project scaffolding and TypeScript types
- [x] useApplications hook with localStorage persistence
- [ ] Add / edit / delete form with modal
- [ ] Application list view
- [ ] Kanban board with drag-and-drop
- [ ] Stats dashboard
- [ ] Filter and search
- [ ] Supabase auth and database

## Author

Hudayfa Omar  
[LinkedIn](https://linkedin.com/in/your-link) · [GitHub](https://github.com/your-username)