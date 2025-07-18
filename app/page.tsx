"use client"

import { useState, useEffect } from "react"
import { IntroPage } from "@/components/intro-page"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { ChatPage } from "@/components/chat-page"
import { BottomNavigation } from "@/components/bottom-navigation"

/**
 * Main App Component
 * Manages page navigation state and renders appropriate page components
 * Includes bottom navigation that persists across all pages
 */
export default function Home() {
  const [currentPage, setCurrentPage] = useState("intro")
  const [isLoading, setIsLoading] = useState(true)

  // Initialize app with smooth loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  /**
   * Page Navigation Handler
   * Smoothly transitions between different pages with loading state
   */
  const handlePageChange = (page: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsLoading(false)
    }, 200)
  }

  /**
   * Dynamic Page Renderer
   * Returns the appropriate page component based on current navigation state
   */
  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      )
    }

    switch (currentPage) {
      case "intro":
        return <IntroPage onPageChange={handlePageChange} />
      case "about":
        return (
          <div className="pb-24">
            <Hero onPageChange={handlePageChange} />
            <Experience />
          </div>
        )
      case "portfolio":
        return (
          <div className="pb-24">
            <Portfolio />
          </div>
        )
      case "services":
        return (
          <div className="pb-24">
            <Services />
          </div>
        )
      case "contact":
        return (
          <div className="pb-24">
            <Contact />
          </div>
        )
      case "chat":
        return (
          <div className="pb-24">
            <ChatPage onPageChange={handlePageChange} />
          </div>
        )
      default:
        return <IntroPage onPageChange={handlePageChange} />
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 transition-all duration-300 ease-in-out">
      {renderPage()}
      <BottomNavigation currentPage={currentPage} onPageChange={handlePageChange} />
    </main>
  )
}
