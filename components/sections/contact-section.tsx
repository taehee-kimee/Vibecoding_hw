"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950 animate-gradient-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-red-950/20 to-black/80 animate-gradient-reverse"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Badge className="mb-6 bg-red-600/20 text-red-400 border-red-600/30">Contact</Badge>
        <h2 className="font-heading font-bold text-4xl md:text-6xl mb-8 text-balance text-white">
          Let's Create Something Amazing Together
        </h2>
        <p className="text-lg text-gray-300 mb-12 text-pretty">
          Ready to bring your vision to life? I'd love to hear about your project and discuss how we can work together
          to create something extraordinary.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Mail className="mr-2 w-5 h-5" />
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
          >
            <ExternalLink className="mr-2 w-5 h-5" />
            View Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
