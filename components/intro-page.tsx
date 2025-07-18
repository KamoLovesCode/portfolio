"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface IntroPageProps {
  onPageChange: (page: string) => void
}

/**
 * Introduction/Landing Page Component
 * Features hero section, AI chat preview, and profile card
 * Responsive design with smooth animations
 */
export function IntroPage({ onPageChange }: IntroPageProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Kamogelo's AI assistant. Ask me anything about his skills and experience!",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // Smooth image loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageLoaded(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  /**
   * AI Chat Message Handler
   * Processes user messages and generates AI responses
   * Includes typing animation and error handling
   */
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = { role: "user", content: inputMessage }
    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage,
          context:
            "You are an AI assistant representing Kamogelo Mosia's portfolio. He is a Full Stack Developer and UI/UX Designer with 10+ years of experience in C#, C++, Node.js, JavaScript, HTML, CSS, React, Next.js, and .NET. He's completing his BSc in Information Technology at University of Johannesburg with excellent grades including 90% in Informatics 1A. He speaks English and Afrikaans, has experience with Git and Postman, and excels in teamwork, problem-solving, communication, adaptability, and time management. Provide helpful, concise responses about his skills and experience.",
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      if (data.response) {
        setMessages((prev) => [...prev, { role: "assistant", content: "" }])

        // Typewriter effect for AI response
        const text = data.response
        let currentText = ""

        for (let i = 0; i < text.length; i++) {
          currentText += text[i]
          setMessages((prev) => {
            const newMessages = [...prev]
            newMessages[newMessages.length - 1].content = currentText
            return newMessages
          })
          await new Promise((resolve) => setTimeout(resolve, 15))
        }
      }
    } catch (error) {
      console.error("Chat Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in">
      {/* Category Pills Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <Button
            size="sm"
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105"
          >
            All
          </Button>
          {["Full Stack", "UI/UX Design", "React/Next.js", "Backend"].map((category) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-900 hover:bg-white rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Hero Quote Section */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-slide-up">
            "Code is poetry written in logic,
            <br className="hidden sm:block" />
            to be experienced."
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 animate-slide-up-delay">- Kamogelo Mosia</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start mb-12 sm:mb-16">
          {/* AI Chat Interface Card */}
          <Card className="bg-gray-100 border-0 rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  🤖<h2 className="text-xl sm:text-2xl font-bold text-gray-900">Get to know me</h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  Chat with my AI assistant to learn about my development experience and skills.
                </p>
              </div>

              {/* Chat Messages Container */}
              <div className="space-y-3 sm:space-y-4 mb-6 h-48 sm:h-64 overflow-y-auto custom-scrollbar">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-message-appear`}
                  >
                    <div
                      className={`max-w-[280px] sm:max-w-xs px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm transition-all duration-200 ${
                        message.role === "user"
                          ? "bg-indigo-600 text-white shadow-md"
                          : "bg-white text-gray-900 border border-gray-200 shadow-sm"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-message-appear">
                    <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-2xl border border-gray-200 shadow-sm">
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="flex gap-2 sm:gap-3 mb-4">
                <Input
                  placeholder="Ask about my skills..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-white border-gray-200 rounded-xl text-sm transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-indigo-600 hover:bg-indigo-700 rounded-xl shrink-0 transition-all duration-200 hover:scale-105"
                  disabled={isTyping}
                >
                  →
                </Button>
              </div>

              {/* Start Full Conversation Button */}
              <Button
                onClick={() => onPageChange("chat")}
                variant="outline"
                className="w-full rounded-xl border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent text-sm sm:text-base transition-all duration-200 hover:scale-[1.02]"
              >
                💬 Start full conversation
              </Button>
            </div>
          </Card>

          {/* Profile Card */}
          <div className="relative">
            <Card className="bg-indigo-600 border-0 rounded-3xl overflow-hidden text-white transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6 sm:p-8 relative z-10">
                <div className="mb-6 sm:mb-8">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-4 flex items-center justify-center backdrop-blur-sm transition-all duration-500 ${isImageLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
                  >
                    <Image
                      src="/profile.jpg"
                      alt="Kamogelo Mosia"
                      width={60}
                      height={60}
                      className="rounded-full object-cover w-12 h-12 sm:w-15 sm:h-15"
                      onLoad={() => setIsImageLoaded(true)}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Kamogelo Mosia</h3>
                  <p className="text-indigo-100 mb-4 text-sm sm:text-base">
                    Full Stack Developer & UI/UX Designer with 10+ years of experience
                  </p>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-indigo-100">
                    <div className="flex items-center gap-2">
                      📧<span>kamogelomosiah@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      📱<span>084 050 6525</span>
                    </div>
                    <div className="flex items-center gap-2">
                      🎓<span>BSc Information Technology (90% in Informatics 1A)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      🌐<span>English, Afrikaans</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => onPageChange("about")}
                  variant="secondary"
                  className="w-full bg-white text-indigo-600 hover:bg-gray-50 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 hover:scale-[1.02]"
                >
                  👤 View full portfolio
                </Button>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16 animate-float"></div>
              <div className="absolute bottom-0 left-0 w-18 h-18 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-9 -translate-x-9 sm:translate-y-12 sm:-translate-x-12 animate-float-delay"></div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => onPageChange("about")}
            variant="outline"
            size="lg"
            className="rounded-xl border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 bg-transparent text-sm sm:text-base transition-all duration-200 hover:scale-105"
          >
            🔍 Explore my work
          </Button>
        </div>
      </div>
    </div>
  )
}
