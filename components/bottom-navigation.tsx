"use client"

import { Button } from "@/components/ui/button"

interface BottomNavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

/**
 * Bottom Navigation Component
 * Persistent navigation bar with smooth animations
 * Responsive design with icon-only view on mobile
 */
const navItems = [
  { id: "intro", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
  { id: "chat", label: "Chat" },
]

export function BottomNavigation({ currentPage, onPageChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg px-2 sm:px-3 py-2 sm:py-3 transition-all duration-300 hover:shadow-xl mx-auto">
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Brand Logo - Hidden on mobile for space optimization */}
          <div className="hidden md:flex items-center px-3 py-2 gap-3 animate-fade-in">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
              <span className="text-white text-sm font-bold">KM</span>
            </div>
            <span className="text-sm font-bold text-gray-900">Kamogelo</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-gray-200"></div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = currentPage === item.id

              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onPageChange(item.id)}
                  className={`relative px-2 sm:px-3 py-2 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center">
                    <span className="text-xs sm:text-sm font-medium transition-all duration-200">{item.label}</span>
                  </div>

                  {/* Active indicator dot for mobile */}
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full sm:hidden animate-ping"></div>
                  )}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
