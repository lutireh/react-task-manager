# Task Manager

A task management app built with React and Vite.

## Overview

Task Manager lets users create tasks, add descriptions, mark tasks as completed, delete tasks, and view task details on a separate page. Tasks are currently persisted in the browser with `localStorage`.

## Features

- Add tasks with a title and description
- Validate required fields
- Mark tasks as complete or incomplete
- Delete tasks
- View task details
- Persist tasks between page refreshes

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React
- UUID

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL printed in the terminal.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    AddTask.jsx
    Tasks.jsx
  pages/
    TaskDetails.jsx
  App.jsx
  main.jsx
  index.css
```

## Planned Improvements

- Replace `localStorage` with a fake API
- Add loading and error states
- Add task editing
- Add filters for completed and pending tasks
- Improve responsive styles
