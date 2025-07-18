import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Data Analytics Dashboard",
    description: "A comprehensive dashboard for data visualization and analytics with real-time updates",
    image: "/placeholder.svg?height=240&width=400",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin panel",
    image: "/placeholder.svg?height=240&width=400",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    featured: true,
  },
  {
    title: "Mobile App Design",
    description: "UI/UX design for a social media mobile application with modern interface",
    image: "/placeholder.svg?height=240&width=400",
    tags: ["Figma", "React Native", "Design System"],
    featured: false,
  },
  {
    title: "Marketing Automation",
    description: "Automated marketing campaigns and lead generation system with analytics",
    image: "/placeholder.svg?height=240&width=400",
    tags: ["Python", "API Integration", "Analytics", "AWS"],
    featured: false,
  },
]

export function Portfolio() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, mobile apps, and design systems
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 rounded-xl text-xs sm:text-sm">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl border-gray-300 bg-transparent text-xs sm:text-sm"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-32 sm:h-40 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-xl border-gray-300 bg-transparent text-xs sm:text-sm"
                    >
                      View Project
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
