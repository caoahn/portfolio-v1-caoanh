import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg'
        : 'bg-background/10 backdrop-blur-sm'
        }`}>
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-xl font-bold transition-colors hover:scale-105 ${isScrolled
                ? 'text-primary hover:text-primary/80'
                : 'text-white hover:text-white/80'
                }`}
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${isScrolled
                    ? 'text-foreground/80 hover:text-primary'
                    : 'text-white/90 hover:text-white'
                    }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-primary' : 'bg-white'
                    }`} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 transition-colors ${isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-white/80'
                  }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <div className="fixed top-0 right-0 h-full w-72 bg-background/95 backdrop-blur-lg border-l border-border/50 shadow-lg transform transition-transform duration-300 ease-in-out">
            {/* Menu header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-border/50">
              <span className="text-lg font-semibold text-foreground">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu items */}
            <div className="px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b border-border/20 hover:border-primary/30"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation