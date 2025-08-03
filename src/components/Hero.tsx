import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profileImage from '@/assets/profile-avatar.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="gradient-hero min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-0">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
          <div className={`flex-1 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Cao Tuan Anh
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 leading-relaxed">
              Software Developer passionate about creating beautiful,
              functional product experiences with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <Button
                onClick={() => scrollToSection('projects')}
                variant="hero-outline"
                size="lg"
                className="font-medium"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="hero-outline"
                size="lg"
                className="font-medium"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/caoahn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a> */}
              <a
                href="mailto:caotanh04@gmail.com"
                className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg"
                  alt="Cao Anh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-white/20 to-transparent blur-xl opacity-50" />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}

export default Hero