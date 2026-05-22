# Le portfolio d'Audouard Florian

Portfolio personnel construit avec **Vite**, **React + TypeScript** et **Tailwind CSS v4**.

## Scripts

```bash
npm install     # installer les dépendances
npm run dev     # serveur de développement (http://localhost:5173)
npm run build   # build de production (tsc + vite) -> dist/
npm run preview # prévisualiser le build de production
```

## Stack

- [Vite](https://vite.dev/) 6 — bundler & dev server
- [React](https://react.dev/) 18 + [react-router-dom](https://reactrouter.com/) 6
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`)
- [react-pdf](https://github.com/wojtekmaj/react-pdf) 9 — rendu du CV

> Requiert Node.js 18+. Tailwind est épinglé sur la branche 4.1.x car la 4.2+ exige Node 20.
