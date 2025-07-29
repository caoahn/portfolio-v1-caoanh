import { useState, useEffect, useRef } from 'react'

const Skills = () => {
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

  const techStack = [
    { name: 'React', level: 'Senior', icon: '⚛️' },
    { name: 'TypeScript', level: 'Senior', icon: '🔷' },
    { name: 'Node.js', level: 'Middle', icon: '🟢' },
    { name: 'Next.js', level: 'Middle', icon: '▲' },
    { name: 'Python', level: 'Middle', icon: '🐍' },
    { name: 'PostgreSQL', level: 'Middle', icon: '🐘' },
    { name: 'MongoDB', level: 'Middle', icon: '🍃' },
    { name: 'GraphQL', level: 'Junior', icon: '◇' },
  ]

  const tools = [
    { name: 'Git', level: 'Senior', icon: '📝' },
    { name: 'Docker', level: 'Middle', icon: '🐳' },
    { name: 'AWS', level: 'Middle', icon: '☁️' },
    { name: 'Figma', level: 'Middle', icon: '🎨' },
    { name: 'VS Code', level: 'Senior', icon: '💻' },
    { name: 'Postman', level: 'Senior', icon: '📬' },
    { name: 'Jest', level: 'Middle', icon: '🃏' },
    { name: 'Linux', level: 'Middle', icon: '🐧' },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Senior':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'Middle':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
      case 'Junior':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    }
  }

  const SkillCard = ({ skill, index }: { skill: typeof techStack[0], index: number }) => (
    <div
      className={`skill-card p-4 rounded-lg transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}>
          {skill.level}
        </span>
      </div>
    </div>
  )

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-background">
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tech Stack */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
              <span className="text-3xl">💻</span>
              Tech Stack
            </h3>
            <div className="grid gap-3">
              {techStack.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
              <span className="text-3xl">🛠️</span>
              Tools & Platforms
            </h3>
            <div className="grid gap-3">
              {tools.map((tool, index) => (
                <SkillCard key={tool.name} skill={tool} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills