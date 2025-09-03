"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

interface HeroSectionProps {
  onScrollToAbout: () => void
}

export function HeroSection({ onScrollToAbout }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl mb-4 text-balance">
            UX Designer
            <span className="block text-secondary">Taehee Kim</span>
          </h1>
        </div>

        <Button onClick={onScrollToAbout} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
          Explore My Work
          <ArrowDown className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  )
}
