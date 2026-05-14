# Portfolio Website

A modern, data-driven portfolio designed for centralized content management,
perfect for showcasing your work and experience. all content is stored in JSON
and Markdown files, making it easy to update without touching the codebase. The
site features a clean, responsive design with dark mode support and a dynamic
project showcase.

## Tech Stack

- **Framework**: Astro 5
- **Styling**: Tailwind CSS v4, centralized in `src/styles`
- **Deployment**: deployed as static site with Github actions
- **Dark Mode**: Class-based toggle with `localStorage` persistence

## Architecture

- **Content Management**: All content is stored in JSON and Markdown files,
  allowing for easy updates without modifying the codebase.
- **Component-Based**: The site is built using reusable components for sections
  like projects, experience, and project-details.
- **Responsive Design**: The layout adapts to different screen sizes, mobile and
  desktop
- **Dark Mode**: Users can toggle between light and dark themes, with their
  preference saved in `localStorage` for a consistent experience across
  sessions.
