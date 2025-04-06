import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import TechBadge from "@/components/tech-badge"

export default function Home() {
  const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"]

  // 🧩 Custom Featured Projects
  const projects = [
    {
      id: 1,
      title: "E-Waste Management System",
      description: "A full-stack application to manage e-waste pickup and rewards.",
      image: "/ewaste.jpg", // अगर यह image भी public/projects में है
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js, Tailwind CSS, and animations.",
      image: "/portfolio.png", // ✅ Correct Path (public/doctor.png)
    },
  
  
    {
      id: 3,
      title: "Doctor Finder App",
      description: "A responsive app to search and filter doctors by specialty.",
      image: "/doctor.png",
    },
  ]

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-16">
        <AnimatedBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-destructive animate-gradient">
                Full Stack Developer
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                I build modern, responsive web applications with cutting-edge technologies. Let's bring your ideas to
                life.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/ST.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative h-80 w-80 mx-auto lg:h-96 lg:w-96 rounded-full overflow-hidden profile-image-glow">
                <Image
                  src="/placeholder-user.jpg?height=400&width=400"
                  alt="Developer Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#featured-projects" scroll={false}>
            <div className="w-10 h-10 rounded-full border-2 border-primary dark:border-primary-dark flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-primary dark:text-primary-dark rotate-90" />
            </div>
          </Link>
        </div>
      </section>

      {/* 🎯 Featured Projects */}
      <section id="featured-projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Check out some of my recent work that showcases my skills and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-fade-in card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <Button asChild>
                    <Link href={`/projects#project-${project.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 💼 Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm currently available for freelance work and open to new opportunities. Let's build something amazing
              together.
            </p>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
