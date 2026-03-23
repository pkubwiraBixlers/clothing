# ThePaulin Blog

A modern fashion blog for ThePaulin, built with React Router v7 and Tailwind CSS.

## Tech Stack

- **Framework:** React Router v7
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Content:** Markdown with gray-matter and marked
- **Deployment:** Docker

## Features

- Responsive blog with parallax hero section
- Markdown-based blog posts
- Blue and amber color scheme
- Mobile-friendly navigation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Type Checking

```bash
npm run typecheck
```

### Building for Production

```bash
npm run build
```

### Production Server

```bash
npm start
```

## Project Structure

```
app/
├── components/       # React components (Navigation, Hero)
├── data/            # Static data (hero product info)
├── lib/             # Utilities (post loading)
├── posts/           # Blog posts in Markdown
├── routes/          # Route components (home, blog)
└── app.css         # Tailwind theme configuration
```

## Adding Blog Posts

Create a new `.md` file in `app/posts/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2026-01-15"
excerpt: "A brief description of your post"
coverImage: "/path/to/image.jpg"
---

Your content here...
```

## Docker Deployment

Build and run with Docker:

```bash
docker build -t thepaulin-blog .
docker run -p 3000:3000 thepaulin-blog
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with React Router v7.
