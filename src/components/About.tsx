import { useState, useEffect, useRef } from 'react'
import { Code, Lightbulb, Users } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices and design patterns."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions through creative thinking."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly."
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with 3+ years of experience 
                creating digital solutions that combine beautiful design with robust functionality. 
                My journey in tech started with curiosity about how websites work, and it has 
                evolved into a deep love for crafting user experiences.
              </p>
              <p>
                I specialize in React, TypeScript, and Node.js, with a strong focus on 
                modern development practices. I believe in writing clean, maintainable code 
                and staying up-to-date with the latest technologies and industry trends.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good book on software architecture.
              </p>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`skill-card p-6 rounded-lg transition-all duration-500 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About