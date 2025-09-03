"use client"

import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-heading font-bold text-xl mb-4 md:mb-0">Portfolio</div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
