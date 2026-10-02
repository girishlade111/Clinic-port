# Clinic — Premium Healthcare Landing Page

A modern, responsive healthcare landing page built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase medical services, specialties, and facilities with a premium, compassionate brand voice.

## Features

- **Hero Section** — Trust badges, stats, appointment CTA, emergency hotline, and animated floating cards
- **About Section** — Mission-driven narrative with trust-building content
- **Featured Departments** — Grid of medical departments with icons and descriptions
- **Service Cards** — Interactive card layout highlighting key medical services
- **Emergency CTA** — Prominent call-to-action for urgent care
- **Featured Services** — In-depth service breakdowns with imagery
- **Specialty Icons** — Visual icon grid of medical specialties
- **Find a Doctor** — Doctor discovery / search interface
- **Medical Care** — Comprehensive care information panel
- **Second CTA** — Secondary conversion prompt
- **Footer** — Site navigation, contact info, and links

## Tech Stack

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| React 19       | UI framework                   |
| TypeScript ~6.0| Type-safe development          |
| Vite 8         | Build tool & dev server        |
| Tailwind CSS 3 | Utility-first styling          |
| Framer Motion  | Animations & transitions       |
| Lucide React   | Icon library                   |
| Oxlint         | Linting                        |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with HMR.

### Build

```bash
npm run build
```

Outputs a production build to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
clinic-react/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── AnimationVariants.ts
│   │   ├── EmergencyCTA.tsx
│   │   ├── FeaturedDepartments.tsx
│   │   ├── FeaturedServices.tsx
│   │   ├── FindDoctor.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MedicalCare.tsx
│   │   ├── SecondCTA.tsx
│   │   ├── ServiceCards.tsx
│   │   └── SpecialtyIcons.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── .gitignore
```

## Scripts

| Command            | Description              |
| ------------------ | ------------------------ |
| `npm run dev`      | Start dev server         |
| `npm run build`    | Type-check & build       |
| `npm run preview`  | Preview production build |
| `npm run lint`     | Run Oxlint checks        |

## License

MIT

---

**Built by [Girish Lade](https://ladestack.in)** — part of the [LadeStack](https://ladestack.in) family of free, open-source tools.
