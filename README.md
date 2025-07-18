# 🚀 Kamogelo Mosia – Portfolio Website

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://kamocodes.xyz)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

> Professional portfolio website for **Kamogelo Mosia** – Full-Stack Developer & UI/UX Designer with 10+ years of experience.  
> Includes an AI-powered chat assistant, responsive layouts and smooth animations.

**Live site:** <https://kamocodes.xyz>

---

## ✨ Features

• 🤖 **AI Chat Assistant** – ask questions about skills, projects & experience  
• 📱 **Fully Responsive** – mobile-first, works on every device  
• 🎨 **Modern UI/UX** – Poppins font, clean layout, Tailwind animations  
• ⚡ **Fast & Static** – exportable build ready for GitHub Pages  
• ♿ **Accessible** – keyboard navigation & ARIA-friendly components

---

## 🛠️ Tech Stack

| Layer            | Tools / Libraries                                   |
| ---------------- | --------------------------------------------------- |
| Front-end        | **Next.js 14** (App Router), React 18               |
| Styling          | **Tailwind CSS v3**, shadcn/ui, Radix UI primitives |
| Icons            | Lucide React                                        |
| AI Integration   | Google Gemini API (via `/api/chat` route)           |
| Deployment       | GitHub Pages (static export)                        |

---

## 🚀 Local Development

\`\`\`bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
\`\`\`

The app will be available at <http://localhost:3000>.

---

## 📦 Static Export & Deployment

The project is configured to export a static build that can be hosted on GitHub Pages.

\`\`\`bash
# generate the static site in the /out folder
npm run export
\`\`\`

A GitHub Actions workflow in `.github/workflows/` automatically builds and deploys the `/out` folder to the `gh-pages` branch whenever you push to `main`.

---

## 📄 License

This project is released under the MIT License. Feel free to fork and adapt for your own portfolio.
