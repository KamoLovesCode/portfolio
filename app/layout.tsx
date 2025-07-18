import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Kamogelo Mosia - Full Stack Developer & UI/UX Designer",
  description: "Portfolio of Kamogelo Mosia - Full Stack Developer and UI/UX Designer with 10+ years of experience",
  keywords: "Full Stack Developer, UI/UX Designer, React, Next.js, JavaScript, C#, Portfolio",
  authors: [{ name: "Kamogelo Mosia" }],
  openGraph: {
    title: "Kamogelo Mosia - Full Stack Developer & UI/UX Designer",
    description: "Portfolio showcasing full-stack development and UI/UX design expertise",
    type: "website",
    url: "https://kamocodes.xyz",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Poppins font link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://kamocodes.xyz" />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
