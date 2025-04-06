"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogCardProps {
  title: string
  excerpt: string
  imageSrc: string
  date: string
  readTime: string
  slug: string
  officialUrl: string
}

export default function BlogCard({ 
  title, 
  excerpt, 
  imageSrc, 
  date, 
  readTime, 
  slug,
  officialUrl 
}: BlogCardProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={imageSrc || "/placeholder.svg"} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-2">
          <Calendar className="h-4 w-4 text-rose-500 dark:text-rose-400" />
          <span className="transition-colors duration-300 group-hover:text-rose-500 dark:group-hover:text-rose-400">{date}</span>
          <span className="text-rose-500">•</span>
          <span className="transition-colors duration-300 group-hover:text-rose-500 dark:group-hover:text-rose-400">{readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent dark:from-rose-400 dark:to-indigo-400">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
          {excerpt}
        </p>
        
        <Button 
          asChild 
          variant="default" 
          className="w-full bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 dark:from-rose-400 dark:to-indigo-400 text-white shadow-md hover:shadow-lg transition-all"
        >
          <a 
            href={officialUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Read Documentation
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </Button>
      </div>
    </div>
  )
}