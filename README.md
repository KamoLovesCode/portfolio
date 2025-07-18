# KamoCodes Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional layout
- **Responsive**: Works perfectly on all devices
- **Dark/Light Mode**: Theme switching capability
- **AI Chat Integration**: Interactive AI assistant powered by Gemini
- **Fast Performance**: Optimized for speed and SEO
- **GitHub Pages Ready**: Configured for static deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Domain**: kamocodes.xyz

## 🏗️ Project Structure

\`\`\`
├── app/                 # Next.js app directory
├── components/          # React components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
\`\`\`

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/KamoLovesCode/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

The project is configured for automatic deployment to GitHub Pages:

1. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to GitHub Pages**
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Site will be available at [https://kamocodes.xyz](https://kamocodes.xyz)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

\`\`\`env
GEMINI_API_KEY=your_gemini_api_key_here
\`\`\`

### Custom Domain Setup

The project is configured for the custom domain `kamocodes.xyz`:

1. **CNAME file**: Located in `public/CNAME`
2. **GitHub Pages**: Configure in repository settings
3. **DNS**: Point your domain to GitHub Pages

## 📱 Sections

- **Hero**: Introduction and main call-to-action
- **About**: Personal information and skills
- **Experience**: Work history and achievements
- **Portfolio**: Featured projects and work
- **Services**: Offered services and capabilities
- **Contact**: Contact information and form
- **AI Chat**: Interactive AI assistant

## 🎨 Customization

### Themes
- Light and dark mode support
- Customizable color schemes in `tailwind.config.ts`

### Content
- Update personal information in component files
- Replace placeholder images in `public/` directory
- Modify sections in respective component files

## 🤖 AI Integration

The portfolio includes an AI chat feature powered by Google's Gemini API:

- Interactive conversations
- Professional assistance
- Seamless integration with the portfolio

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Website**: [kamocodes.xyz](https://kamocodes.xyz)
- **GitHub**: [@KamoLovesCode](https://github.com/KamoLovesCode)
- **Email**: Contact through the website

---

Built with ❤️ by KamoCodes
