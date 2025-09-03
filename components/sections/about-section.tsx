"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface AboutSectionProps {
  onScrollToServices: () => void
}

export function AboutSection({ onScrollToServices }: AboutSectionProps) {
  return (
    <section className="min-h-screen bg-primary text-primary-foreground py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-secondary text-secondary-foreground">About</Badge>
            <h2 className="font-heading font-bold text-4xl md:text-6xl mb-8 text-balance">
              I'm a versatile <span className="text-secondary">designer who</span> partners with founders to turn ideas
              into real products.
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed text-pretty">
              I focus on clear interfaces, sharp decisions, and fast execution. Bringing your vision to life quickly and
              efficiently—whether it's branding, apps, or websites—I've got it covered, delivering smooth and effective
              solutions from start to finish.
            </p>
            <Button
              onClick={onScrollToServices}
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              See My Work
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-muted/10 rounded-lg overflow-hidden">
              <img src="/creative-designer-bw.png" alt="Professional portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
