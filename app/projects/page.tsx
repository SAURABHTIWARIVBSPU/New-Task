// app/projects/page.tsx
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
      imageSrc: "/placeholder1.png",
      liveUrl: "https://smartestore.netlify.app/",
      technologies: ["JavaScript", "React.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Razorpay Clone",
      description:
        "A fully responsive payment gateway UI built with modern animations and smooth transitions.",
      imageSrc: "/placeholder3.png",
      liveUrl: "https://razorpayclonedemo.netlify.app/",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Material UI"],
    },
    {
      title: "Fitness Tracker",
      description:
        "A fitness tracking application that allows users to log workouts, track progress, and set goals with data visualization.",
      imageSrc: "/placeholder2.png",
      liveUrl: "https://gymfluencerd.netlify.app/",
      technologies: ["React.js", "Tailwind CSS", "Redux", "MongoDB"],
    },
    {
      title: "PrescriptoCare - Doctor Appointment Platform",
      description:
        "An online doctor appointment platform where patients can book consultations, view doctor profiles, and access healthcare services seamlessly.",
      imageSrc: "/doctor.png",
      liveUrl: "https://prescriptocare.netlify.app/",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white tracking-tight">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my curated collection of full-stack and frontend projects crafted with modern tools and clean design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-200 dark:border-gray-700 p-6 group"
              >
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition duration-500 ease-in-out"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-100 text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition"
                >
                  Live Preview
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
