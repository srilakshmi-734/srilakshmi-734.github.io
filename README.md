# Data Science Portfolio - Elluri Sri Lakshmi

A modern, high-performance personal portfolio built for Data Scientists and AI/ML Engineers. This project uses React, Tailwind CSS, and Framer Motion to create a "product-style" showcase of professional work and research.

## 🚀 Features

- **Product-Style UI**: Minimalist dark theme with indigo accents, inspired by modern SaaS dashboards.
- **Data-Driven Architecture**: All project content is managed through a central `data/projects.js` layer.
- **Dynamic Case Studies**: Dedicated routes for detailed project breakdowns (Problem, Approach, Impact).
- **AI Architecture Visualization**: Specialized flow diagram for the CampusAI Hub project.
- **Interactive Tech Stack**: Dashboard-style skills visualization with hover effects.
- **Framer Motion Animations**: Smooth page transitions, fade-ins, and interactive hover states.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **GitHub Pages Compatible**: Uses `HashRouter` and relative base paths for seamless deployment.

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router (HashRouter)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Build & Deployment

1. Build the production version:
   ```bash
   npm run build
   ```
2. The output will be in the `dist/` folder.
3. For **GitHub Pages**:
   - The project is configured with `base: './'` in `vite.config.js`.
   - Ensure you use the repository name in `base` if your URL is `username.github.io/repo-name/`.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── ui/           # Button, ProjectCard, SkillCard
│   └── features/     # Hero, About, Skills, Projects, Experience, Contact, AIArchitecture
├── pages/            # Home, ProjectDetails
├── data/             # projects.js (Content management)
├── App.jsx           # Routing & Layout
└── main.jsx          # Entry point
```

## 👤 Author

**Elluri Sri Lakshmi**
- Role: Data Scientist | Machine Learning | NLP | AI Systems
- GitHub: [srilakshmi-734](https://github.com/srilakshmi-734)
- Location: India
