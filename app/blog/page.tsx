"use client"

import { useState } from "react"
import BlogCard from "@/components/blog-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const blogPosts = [
    {
      title: "Next.js Fundamentals",
      excerpt: "Master server-side rendering and static site generation",
      imageSrc: "/nextjs-cover.jpg",
      date: "April 15, 2023",
      readTime: "5 min read",
      slug: "nextjs-fundamentals",
      categories: ["Next.js", "React", "SSR"],
      officialUrl: "https://nextjs.org/docs"
    },
    {
      title: "Tailwind CSS Deep Dive",
      excerpt: "Advanced utility-first CSS workflow techniques",
      imageSrc: "/tailwind-cover.jpg",
      date: "March 22, 2023",
      readTime: "7 min read",
      slug: "tailwind-advanced",
      categories: ["CSS", "Tailwind", "Frontend"],
      officialUrl: "https://tailwindcss.com/docs"
    },
    {
      title: "Node.js API Development",
      excerpt: "Building REST APIs with Express and MongoDB",
      imageSrc: "/nodejs-cover.jpg",
      date: "February 10, 2023",
      readTime: "10 min read",
      slug: "nodejs-api",
      categories: ["Node.js", "API", "Backend"],
      officialUrl: "https://nodejs.org/en/docs/"
    },
    {
      title: "TypeScript Best Practices",
      excerpt: "Professional code structuring techniques",
      imageSrc: "/typescript-cover.jpg",
      date: "January 5, 2023",
      readTime: "8 min read",
      slug: "typescript-pro",
      categories: ["TypeScript", "JavaScript"],
      officialUrl: "https://www.typescriptlang.org/docs/"
    },
    {
      title: "GraphQL Basics",
      excerpt: "Modern API query language fundamentals",
      imageSrc: "/graphql-cover.jpg",
      date: "December 12, 2022",
      readTime: "6 min read",
      slug: "graphql-basics",
      categories: ["GraphQL", "API"],
      officialUrl: "https://graphql.org/learn/"
    },
    {
      title: "Vercel Deployment Guide",
      excerpt: "Optimizing Next.js deployments",
      imageSrc: "/vercel-cover.jpg",
      date: "November 28, 2022",
      readTime: "4 min read",
      slug: "vercel-deploy",
      categories: ["Deployment", "Vercel"],
      officialUrl: "https://vercel.com/docs"
    }
  ]

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const allCategories = Array.from(new Set(blogPosts.flatMap(post => post.categories)))

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
              Developer Knowledge Hub
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Official documentation references with practical implementation guides
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search documentation..."
                className="pl-10 py-5 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button 
                variant={searchQuery === "" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setSearchQuery("")}
              >
                All Technologies
              </Button>
              {allCategories.map(category => (
                <Button
                  key={category}
                  variant={searchQuery.toLowerCase() === category.toLowerCase() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSearchQuery(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                imageSrc={post.imageSrc}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
                officialUrl={post.officialUrl}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2 text-rose-500">No documentation found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try these official resources:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <a
                    href="https://developer.mozilla.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MDN Web Docs
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://www.w3schools.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    W3Schools
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}