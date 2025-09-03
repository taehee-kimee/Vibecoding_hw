"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    number: "01",
    title: "Branding & Marketing",
    description:
      "Branding that builds trust and drives loyalty through clear visuals and messaging into an unforgettable online experience.",
    services: [
      "Brand Strategy and Messaging",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines & Frameworks",
      "Marketing materials",
      "Motion Design",
    ],
  },
  {
    number: "02",
    title: "Web Design & Development",
    description:
      "Creating responsive, user-friendly websites that convert visitors into customers through strategic design and seamless functionality.",
    services: [
      "UI/UX Design",
      "Responsive Web Development",
      "E-commerce Solutions",
      "Performance Optimization",
      "SEO Implementation",
      "Content Management Systems",
    ],
  },
 
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">Services</Badge>
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-balance">What I Do</h2>
        </div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 border-border hover:border-secondary/50 transition-colors group">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="text-6xl font-heading font-bold text-muted-foreground/20 mb-4 group-hover:text-secondary/30 transition-colors">
                    {service.number}
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.services.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm">{item}</span>
                        <div className="text-muted-foreground ml-auto">{String(idx + 1).padStart(2, "0")}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
