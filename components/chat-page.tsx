"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface ChatPageProps {
  onPageChange: (page: string) => void
}

/**
 * Dedicated AI Chat Page Component
 * Full-screen chat interface with enhanced features
 * Includes quick action buttons and smooth animations
 */
export function ChatPage({ onPageChange }: ChatPageProps) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to my dedicated chat space! I'm here to answer any questions about Kamogelo's skills, experience, projects, or anything else you'd like to know. What would you like to learn about?",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  /**
   * Enhanced AI Message Handler
   * Includes improved error handling and typing effects
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
            "You are an AI assistant representing Kamogelo Mosia's portfolio. He is a Full Stack Developer and UI/UX Designer with 10+ years of experience in C#, C++, Node.js, JavaScript, HTML, CSS, React, Next.js, and .NET. He's completing his BSc in Information Technology at University of Johannesburg with excellent grades including 90% in Informatics 1A. He speaks English and Afrikaans, has experience with Git and Postman, and excels in teamwork, problem-solving, communication, adaptability, and time management. Provide helpful, detailed responses about his skills and experience.",
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

        // Enhanced typewriter effect
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

  /**
   * Quick Action Handler
   * Sets predefined messages for common questions
   */
  const handleQuickAction = (message: string) => {
    setInputMessage(message)
  }

  return (
    <div className="h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Chat Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8 animate-slide-down">
          <Button
            onClick={() => onPageChange("intro")}
            variant="outline"
            size="icon"
            className="rounded-xl border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200 hover:scale-105"
          >
            ←
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-full flex items-center justify-center animate-pulse-gentle">
              🤖
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Chat with AI Assistant</h1>
              <p className="text-xs sm:text-sm text-gray-600">Ask me anything about Kamogelo's portfolio</p>
            </div>
          </div>
        </div>

        {/* Main Chat Container */}
        <Card className="bg-white border-0 rounded-3xl shadow-sm transform transition-all duration-300 hover:shadow-md">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Messages Area */}
            <div className="space-y-4 sm:space-y-6 mb-6 h-[70vh] sm:h-[75vh] overflow-y-auto custom-scrollbar">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-message-appear`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 max-w-[85%] sm:max-w-[80%]">
                    {/* AI Avatar */}
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 mt-1 animate-bounce-gentle">
                        🤖
                      </div>
                    )}
                    {/* Message Bubble */}
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm sm:text-base leading-relaxed transition-all duration-200 ${
                        message.role === "user"
                          ? "bg-indigo-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-900 shadow-sm"
                      }`}
                    >
                      {message.content}
                    </div>
                    {/* User Avatar */}
                    {message.role === "user" && (
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shrink-0 mt-1">
                        👤
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Enhanced Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start animate-message-appear">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 animate-pulse">
                      🤖
                    </div>
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl shadow-sm">
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="flex gap-3 mb-4">
              <Input
                placeholder="Type your message here..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 bg-gray-50 border-gray-200 rounded-xl text-sm sm:text-base py-3 transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-indigo-600 hover:bg-indigo-700 rounded-xl shrink-0 h-12 w-12 transition-all duration-200 hover:scale-105"
                disabled={isTyping}
              >
                →
              </Button>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { text: "Technical Skills", icon: "code" },
                { text: "Projects", icon: "work" },
                { text: "Education", icon: "school" },
                { text: "What makes him unique?", icon: "star" },
              ].map((action, index) => (
                <Button
                  key={index}
                  onClick={() => handleQuickAction(`Tell me about Kamogelo's ${action.text.toLowerCase()}`)}
                  variant="outline"
                  size="sm"
                  className="rounded-full border-gray-300 bg-transparent text-xs sm:text-sm transition-all duration-200 hover:scale-105 hover:bg-indigo-50"
                >
                  {action.icon === "code" && <> 💻 </>}
                  {action.icon === "work" && <> 💼 </>}
                  {action.icon === "school" && <> 🎓 </>}
                  {action.icon === "star" && <> ⭐ </>}
                  {action.text}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
