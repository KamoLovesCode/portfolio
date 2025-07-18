import { Card } from "@/components/ui/card"

const experiences = [
  {
    year: "2018-Present",
    company: "University of Johannesburg",
    role: "BSc Information Technology Student",
    icon: "🎓",
    description: "Computer Science & Informatics Major - Achieving academic excellence with 90% in Informatics 1A",
  },
  {
    year: "2018-2021",
    company: "Self-Taught Development",
    role: "Full Stack Developer",
    icon: "💻",
    description: "Mastered JavaScript, HTML, CSS, React, and UI/UX design through self-directed learning",
  },
  {
    year: "2014-Present",
    company: "Programming Journey",
    role: "Software Developer",
    icon: "🚀",
    description: "10+ years of hands-on experience in C#, C++, Java, .NET, and modern web technologies",
  },
  {
    year: "High School",
    company: "Academic Leadership",
    role: "Prefect & IT Excellence",
    icon: "🏆",
    description: "Achieved highest mark for IT in Matric exams and demonstrated leadership as school prefect",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Academic & Professional Journey
          </h2>
          <p className="text-lg text-gray-600 font-poppins">From academic excellence to practical expertise</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold z-10 shadow-lg group-hover:scale-110 transition-transform">
                  {exp.icon}
                </div>

                {/* Content */}
                <Card className="ml-6 p-6 flex-1 hover:shadow-lg transition-all group-hover:translate-x-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 font-montserrat">{exp.company}</h3>
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full font-poppins">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2 font-poppins">{exp.role}</p>
                  <p className="text-gray-600 text-sm font-poppins">{exp.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
