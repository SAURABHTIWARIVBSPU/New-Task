'use client'

import Image from "next/image"
import Counter from "@/components/counter"
import TechBadge from "@/components/tech-badge"

const TimelineItem = ({ year, title, subtitle, description, side }: {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
}) => (
  <div className={`flex ${side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col gap-6 md:gap-8 items-start`}>
    {/* Year Display */}
    <div className="md:w-1/2 flex md:justify-center">
      <div className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform">
        {year}
      </div>
    </div>

    {/* Content Card */}
    <div className="md:w-1/2 relative w-full">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">{subtitle}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      {/* Mobile Connector */}
      <div className="absolute top-6 -left-4 md:hidden w-4 h-px bg-gray-300 dark:bg-gray-600"></div>
    </div>
  </div>
)

export default function AboutPage() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Tailwind CSS",
    "Git",
    "Figma",
    "Bootstrap",
    "REST APIs",
    "AWS Basics"
  ]

  const experiences = [
    {
      year: "2024",
      title: "Campus Ambassador",
      subtitle: "GeeksforGeeks",
      description: "Organized 15+ tech workshops and coding events for 1000+ students",
    },
    {
      year: "2023",
      title: "Freelance Developer",
      subtitle: "Self-Employed",
      description: "Delivered 10+ client projects including web apps and e-commerce platforms",
    },
    {
      year: "2022",
      title: "Tech Intern",
      subtitle: "StartupX",
      description: "Developed full-stack applications using MERN stack with agile methodologies",
    },
    {
      year: "2021-2025",
      title: "B.Tech in IT",
      subtitle: "VBSPU Jaunpur (67%)",
      description: "Balancing academic excellence with practical development experience",
    },
  ]

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image with Floating Animation */}
            <div className="relative h-80 w-80 mx-auto lg:h-96 lg:w-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-2xl opacity-30" />
              <Image
                src="/placeholder-user.jpg"
                alt="Saurabh Tiwari"
                width={400}
                height={400}
                className="rounded-full object-cover z-10 border-4 border-white dark:border-gray-800 shadow-xl"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="space-y-6 animate-slide-in">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aspiring Full-Stack Developer
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Hi! I'm <span className="font-semibold text-blue-600">Saurabh Tiwari</span>, currently pursuing my B.Tech in IT at VBSPU Jaunpur. Passionate about creating modern web solutions with 10+ completed projects.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[10, 15, 2, 20].map((value, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <Counter 
                      end={value} 
                      suffix={index !== 2 ? "+" : ""} 
                      className={`text-2xl font-bold ${index % 2 === 0 ? "text-purple-600" : "text-blue-600"}`}
                    />
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                      {["Projects", "Webinars", "Internships", "Clients"][index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Technologies I've mastered through hands-on projects and internships
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <TechBadge 
                key={skill}
                name={skill}
                className="text-base px-4 py-2 hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Combining academic learning with real-world experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-600 h-full -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-16 md:space-y-12">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  year={exp.year}
                  title={exp.title}
                  subtitle={exp.subtitle}
                  description={exp.description}
                  side={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}