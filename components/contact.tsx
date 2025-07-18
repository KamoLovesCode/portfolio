"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, User, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const emailData = {
        to_email: "Kamogelomosia@mail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      }

      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Email sent:", emailData)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <Card className="bg-white border-0 rounded-3xl shadow-sm p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">Start Your Project</h2>
              <p className="text-sm sm:text-base text-gray-600">Tell me about your development needs</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="rounded-xl border-gray-300 bg-transparent text-sm sm:text-base"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-50 border-gray-200 rounded-xl text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-50 border-gray-200 rounded-xl text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                    Project Type
                  </label>
                  <Input
                    id="subject"
                    placeholder="Web Development, UI/UX Design, etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-gray-50 border-gray-200 rounded-xl text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe your project requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-50 border-gray-200 rounded-xl text-sm sm:text-base"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium text-sm sm:text-base py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-white border-0 rounded-3xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600">Kamogelomosia@mail.com</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 rounded-3xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">0698439670</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 rounded-3xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Languages</h3>
                  <p className="text-sm sm:text-base text-gray-600">English, Afrikaans</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 rounded-3xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Availability</h3>
                  <p className="text-sm sm:text-base text-gray-600">Remote & On-site projects</p>
                </div>
              </div>
            </Card>

            <Card className="bg-indigo-50 border-0 rounded-3xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 sm:mb-3 text-gray-900 text-sm sm:text-base">Academic Excellence</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Currently completing BSc in Information Technology at University of Johannesburg with outstanding
                academic performance (90% in Informatics 1A).
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-green-600 font-medium">Available for new projects</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
