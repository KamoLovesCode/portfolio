"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface HeroProps {
  onPageChange: (page: string) => void
}

/**
 * Hero/About Page Component
 * Displays detailed profile information and skills
 * Features responsive grid layout with animated cards
 */
export function Hero({ onPageChange }: HeroProps) {
  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Profile Information Section */}
          <div className="animate-slide-right">
            <div className="mb-6 sm:mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-indigo-600 rounded-full mb-4 sm:mb-6 flex items-center justify-center transform transition-all duration-300 hover:scale-105">
                <Image
                  src="/profile.jpg"
                  alt="Kamogelo Mosia"
                  width={120}
                  height={120}
                  className="rounded-full object-cover w-20 h-20 sm:w-28 sm:h-28"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Kamogelo Mosia</h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                A passionate Full Stack Application & Web Application Developer and UI/UX Designer with 10+ years of
                hands-on programming experience and strong academic background in Computer Science and Informatics.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
                <Button
                  onClick={() => onPageChange("contact")}
                  className="bg-indigo-600 hover:bg-indigo-700 rounded-xl text-sm sm:text-base transition-all duration-200 hover:scale-105"
                >
                  <span className="material-symbols-filled mr-2">mail</span>
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-gray-300 bg-transparent text-sm sm:text-base transition-all duration-200 hover:scale-105"
                >
                  <span className="material-symbols-filled mr-2">phone</span>
                  084 050 6525
                </Button>
              </div>

              {/* Contact Information */}
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-filled text-indigo-600">email</span>
                  <span>
                    <strong>Email:</strong> kamogelomosiah@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-filled text-indigo-600">language</span>
                  <span>
                    <strong>Languages:</strong> English, Afrikaans
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {[
                  { icon: "code", label: "GitHub" },
                  { icon: "work", label: "LinkedIn" },
                  { icon: "mail", label: "Email" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-gray-300 bg-transparent transition-all duration-200 hover:scale-110 hover:bg-indigo-50"
                  >
                    <span className="material-symbols-filled">{social.icon}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Cards Section */}
          <div className="space-y-4 sm:space-y-6 animate-slide-left">
            {/* Technical Skills Card */}
            <Card className="bg-white border-0 rounded-3xl p-4 sm:p-6 shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="material-symbols-filled text-indigo-600">code</span>
                </div>
                <span className="font-semibold text-gray-900 text-sm sm:text-base">Technical Skills</span>
              </div>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <p>
                  <strong>Languages:</strong> JavaScript, HTML, CSS, C++, Java, C#
                </p>
                <p>
                  <strong>Frameworks:</strong> React, Next.js, .NET, Node.js
                </p>
                <p>
                  <strong>Tools:</strong> Git, Postman, Figma
                </p>
              </div>
            </Card>

            {/* Education Card */}
            <Card className="bg-white border-0 rounded-3xl p-4 sm:p-6 shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="material-symbols-filled text-green-600">school</span>
                </div>
                <span className="font-semibold text-gray-900 text-sm sm:text-base">Education</span>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <p className="font-semibold text-gray-900 text-xs sm:text-sm">BSc in Information Technology</p>
                <p className="text-xs sm:text-sm text-gray-600">Computer Science & Informatics Major</p>
                <p className="text-xs sm:text-sm text-gray-600">University of Johannesburg</p>
                <span className="inline-block text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  90% in Informatics 1A
                </span>
              </div>
            </Card>

            {/* Personal Qualities Card */}
            <Card className="bg-white border-0 rounded-3xl p-4 sm:p-6 shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="material-symbols-filled text-purple-600">star</span>
                </div>
                <span className="font-semibold text-gray-900 text-sm sm:text-base">Personal Qualities</span>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {["Teamwork", "Problem-solving", "Communication", "Adaptability", "Time management", "Leadership"].map(
                  (quality, index) => (
                    <span
                      key={index}
                      className="text-xs bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded-full transition-all duration-200 hover:scale-105"
                    >
                      {quality}
                    </span>
                  ),
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
