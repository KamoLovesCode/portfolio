"use client"

import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const services = [
  {
    id: "web-dev",
    label: "Web Development",
    icon: "💻",
    description: "Modern, responsive websites and web applications",
  },
  {
    id: "mobile-dev",
    label: "Mobile Development",
    icon: "📱",
    description: "Native and cross-platform mobile applications",
  },
  {
    id: "ui-design",
    label: "UI/UX Design",
    icon: "🎨",
    description: "User-centered design and interface development",
  },
  {
    id: "data-analysis",
    label: "Data Analysis",
    icon: "📊",
    description: "Data visualization and business intelligence",
  },
  {
    id: "consulting",
    label: "Technical Consulting",
    icon: "💡",
    description: "Architecture planning and technology strategy",
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: "📈",
    description: "SEO optimization and digital marketing solutions",
  },
]

export function Services() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Services & Expertise</h1>
          <p className="text-base sm:text-lg text-gray-600">What services are you interested in?</p>
        </div>

        <Card className="bg-white border-0 rounded-3xl shadow-sm p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                onClick={() => handleServiceToggle(service.id)}
              >
                <Checkbox
                  id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={() => handleServiceToggle(service.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-lg sm:text-2xl">{service.icon}</span>
                    <label
                      htmlFor={service.id}
                      className="font-semibold text-gray-900 cursor-pointer group-hover:text-indigo-600 transition-colors text-sm sm:text-base"
                    >
                      {service.label}
                    </label>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedServices.length > 0 && (
            <div className="border-t pt-6">
              <div className="bg-indigo-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <h4 className="font-semibold text-indigo-900 mb-2 text-sm sm:text-base">
                  Selected Services ({selectedServices.length})
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {selectedServices.map((serviceId) => {
                    const service = services.find((s) => s.id === serviceId)
                    return (
                      <span
                        key={serviceId}
                        className="bg-indigo-100 text-indigo-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {service?.icon} {service?.label}
                      </span>
                    )
                  })}
                </div>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium text-sm sm:text-base">
                Get Quote for Selected Services
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
