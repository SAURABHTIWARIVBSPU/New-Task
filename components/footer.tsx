"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Saurabh Tiwari
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer passionate about creating innovative web solutions and delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links - Synced with Navbar */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="mr-2 text-blue-600 dark:text-blue-400 h-5 w-5" />
                <a
                  href="mailto:stw284701@gmail.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  stw284701@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="mr-2 text-blue-600 dark:text-blue-400 h-5 w-5" />
                <a
                  href="tel:+918948905711"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  +91 8948905711
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="mr-2 text-blue-600 dark:text-blue-400 h-5 w-5" />
                <span>Gonda, Uttar Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Saurabh Tiwari. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}