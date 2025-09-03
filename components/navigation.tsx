"use client"

interface NavigationProps {
  onScrollToAbout: () => void
  onScrollToServices: () => void
  onScrollToContact: () => void
}

export function Navigation({ onScrollToAbout, onScrollToServices, onScrollToContact }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-heading font-bold text-xl">TAEHEE KIM</div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={onScrollToAbout} className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button
              onClick={onScrollToServices}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={onScrollToContact}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
