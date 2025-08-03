import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: "personalwebsite",
      title: "Personal Website",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com",
      live: "https://example.com",
      image: "./img/portfolio.png"
    },
    {
      id: "WebShopShoe",
      title: "Web Shop Shoe",
      description: "An e-commerce platform for selling shoes online, featuring user authentication, product listings, and a shopping cart.",
      tech: ["React", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      image: "./img/image1.png"
    },
    {
      id: "webshopshoeadmin",
      title: "Web Shop Shoe Admin",
      description: "An admin dashboard for managing the Web Shop Shoe e-commerce platform, featuring user management, order tracking, and inventory control.",
      tech: ["React", "Redux", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      image: "./img/image4.png"
    }
  ]

  return (
    <>
      <section id="projects" ref={sectionRef} className="section-padding section-background">
        <div className="section-container">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I'm passionate about
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group overflow-hidden border-border/50 hover:border-border transition-all duration-500 hover:shadow-lg cursor-pointer ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => navigate(`/project/${project.id}`)}
                      size="sm"
                      className="flex-1"
                    >
                      <Eye size={16} className="mr-2" />
                      View Details
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects