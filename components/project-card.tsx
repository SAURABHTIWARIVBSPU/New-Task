"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechBadge from "@/components/tech-badge"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  liveUrl?: string
  technologies: string[]
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  liveUrl,
  technologies,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="card-hover glassmorphism rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 sm:h-64">
        <Image
          src={imageSrc || "/placeholder-logo.png"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
        <div className="flex space-x-3">
          {liveUrl && (
            <Button asChild variant="default" size="sm">
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
         
        </div>
      </div>
    </div>
  )
}

