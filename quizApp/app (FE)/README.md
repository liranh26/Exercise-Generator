# Front-End Quiz Application (FE)

## Overview

This front-end project is a React application built with Vite and Tailwind CSS. It fetches quiz questions from the back-end API and renders a dynamic multiple-choice quiz interface.

## Prerequisites

- Node.js v14+
- npm (or yarn)

## Installation

1. Clone the repository (or copy the `project-one` folder).
2. Navigate into the FE folder:
   ```bash
   cd app (FE)
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running Locally

- **Start development server**

  ```bash
  npm run dev
  ```

  Opens at `http://localhost:5173` by default.

- **Build for production**

  ```bash
  npm run build
  ```

- **Preview production build**

  ```bash
  npm run preview
  ```

## Architecture & Key Decisions

- **Vite**: Chosen for fast cold starts and Hot Module Replacement (HMR).
- **React Functional Components**: Uses hooks (`useState`, `useEffect`, `useContext`) for state and side effects.
- **Tailwind CSS**: Utility-first styling for rapid UI development without custom CSS files.
- **Component Structure**:
  - `<App>`: Root component, sets up routing and Context provider.
  - `<Header>`: Displays the title, language switcher, and restart button.
  - `<QuestionCard>`: Renders the current question and options via `<OptionButton>`.
  - `<Results>`: Shows the last quiz results.
  - `<History>`: Shows past questions and the user’s answers.
- **State Management**: React Context shares quiz state across components, avoiding prop drilling.
- **API Client**: A small fetch-wrapper module calling `/api/questions`, handling loading and error states.

## Limitations & Trade-offs

- **In-Memory State**: Quiz history is lost on page refresh; no persistence.
- **No SSR**: Client-side only; initial load performance and SEO could be improved with server-side rendering.
- **Basic Error Handling**: Only basic error messages; lacks retry/fallback logic.
- **Bundle Size**: Tailwind CSS can increase bundle size; consider PurgeCSS or tree-shaking.
- **No Automated Tests**: Lacks unit/integration tests for components and API calls.

## Future Improvements

- Persist quiz state to `localStorage` or a backend datastore.
- Add Jest & React Testing Library tests for components and hooks.
- Migrate to Next.js (or similar) for SSR and better SEO.
- Enhance the API client with retries and user-friendly notifications.
- Optimize bundle size via code splitting and PurgeCSS.

