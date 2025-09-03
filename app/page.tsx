"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (isScrolling) return
    setIsScrolling(true)
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    setTimeout(() => setIsScrolling(false), 1000)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const sections = [heroRef.current, aboutRef.current, servicesRef.current, contactRef.current]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      e.preventDefault()
      setIsScrolling(true)

      const sections = [heroRef.current, aboutRef.current, servicesRef.current, contactRef.current]
      const currentSection = sections.find((section) => {
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      const currentIndex = sections.indexOf(currentSection!)
      let targetIndex = currentIndex

      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        targetIndex = currentIndex + 1
      } else if (e.deltaY < 0 && currentIndex > 0) {
        targetIndex = currentIndex - 1
      }

      if (targetIndex !== currentIndex && sections[targetIndex]) {
        sections[targetIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      setTimeout(() => setIsScrolling(false), 1000)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      observer.disconnect()
      window.removeEventListener("wheel", handleWheel)
    }
  }, [isScrolling])

  return (
    <div className="min-h-screen bg-background scroll-smooth overflow-y-scroll h-screen">
      {/* Navigation */}
      <Navigation
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToServices={() => scrollToSection(servicesRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />

      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroSection onScrollToAbout={() => scrollToSection(aboutRef)} />
      </div>

      {/* About Section */}
      <div ref={aboutRef}>
        <AboutSection onScrollToServices={() => scrollToSection(servicesRef)} />
      </div>

      {/* Services Section */}
      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      {/* Contact Section */}
      <div ref={contactRef}>
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
