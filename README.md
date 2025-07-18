# Kamogelo Mosia's Professional Portfolio

This is the official repository for Kamogelo Mosia's professional portfolio website, showcasing full-stack development and UI/UX design projects.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)
- [Custom Domain](#custom-domain)
- [Contact](#contact)
- [License](#license)

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile).
- **AI Chat Integration**: An AI-powered chat assistant to answer questions about the portfolio.
- **Smooth Animations**: Enhanced user experience with subtle and engaging animations.
- **Theming**: Light and dark mode support.
- **Project Showcase**: Dedicated sections for portfolio projects, services, and experience.
- **Contact Form**: Easy way for visitors to get in touch.

## Technologies Used

- **Next.js**: React framework for production.
- **React**: Frontend library for building user interfaces.
- **TypeScript**: Strongly typed JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Shadcn/ui**: Reusable UI components built with Radix UI and Tailwind CSS.
- **Lucide React**: Beautifully crafted open-source icons.
- **Vercel AI SDK**: For integrating AI models (e.g., Gemini API).
- **GitHub Actions**: For continuous integration and deployment to GitHub Pages.

## Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/KamoLovesCode/portfolio.git
   cd portfolio
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   # or if you prefer pnpm
   # pnpm install
   \`\`\`

### Running Locally

To run the development server:

\`\`\`bash
npm run dev
# or
# pnpm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is configured for deployment to GitHub Pages using GitHub Actions.

### GitHub Pages

The `.github/workflows/deploy.yml` workflow automates the build and deployment process.
It will:
1. Checkout the repository.
2. Set up Node.js.
3. Install dependencies.
4. Build the Next.js application for static export (`npm run export`).
5. Configure GitHub Pages.
6. Upload the built artifacts to GitHub Pages.
7. Deploy the site to GitHub Pages.

The deployment is triggered on pushes to the `main` branch and pull requests to `main`.

## Custom Domain

This project is configured to use the custom domain `kamocodes.xyz`.

To ensure your custom domain works correctly with GitHub Pages and HTTPS:

1.  **DNS Configuration**:
    -   In your domain registrar's settings, create `A` records pointing to GitHub Pages IP addresses:
        -   `185.199.108.153`
        -   `185.199.109.153`
        -   `185.199.110.153`
        -   `185.199.111.153`
    -   (Optional) Create a `CNAME` record for `www.kamocodes.xyz` pointing to `kamocodes.xyz`.

2.  **GitHub Repository Settings**:
    -   Go to your repository on GitHub.
    -   Navigate to `Settings` > `Pages`.
    -   Under "Custom domain", enter `kamocodes.xyz` and click "Save".
    -   **Crucially, check the "Enforce HTTPS" box.** This will provision an SSL certificate for your domain and resolve the security warning.

The `public/CNAME` file is already included in the project to inform GitHub Pages about your custom domain.

## Contact

For any inquiries, please reach out to Kamogelo Mosia:
- Email: kamogelomosiah@gmail.com
- Website: [https://kamocodes.xyz](https://kamocodes.xyz)

## License

This project is licensed under the MIT License.
