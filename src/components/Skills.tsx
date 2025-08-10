import { useState, useEffect, useRef } from 'react'
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaLinux,
  FaGithub,
  FaGitlab,
} from 'react-icons/fa'
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaJava
} from "react-icons/fa"
import {
  SiTypescript, SiDotnet, SiUnity, SiExpress, SiFigma, SiPostman, SiJest,
  SiTailwindcss, SiPython, SiFlutter, SiDart, SiSharp,
  SiMysql,
  SiMongodb
} from "react-icons/si"

import { MdLaptopMac } from 'react-icons/md'
import { IoHammerSharp } from 'react-icons/io5'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('techstack')
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
    { name: 'HTML', level: 'Junior', icon: <FaHtml5 className="w-8 h-8 text-orange-600" /> },
    { name: 'CSS', level: 'Junior', icon: <FaCss3Alt className="w-8 h-8 text-blue-600" /> },
    { name: 'JavaScript', level: 'Junior', icon: <FaJsSquare className="w-8 h-8 text-yellow-400" /> },
    { name: 'TypeScript', level: 'Junior', icon: <SiTypescript className="w-8 h-8 text-blue-500" /> },
    { name: 'C#', level: 'Junior', icon: <SiSharp className="w-8 h-8 text-green-600" /> },
    { name: 'ReactJS', level: 'Junior', icon: <FaReact className="w-8 h-8 text-sky-400" /> },
    { name: 'NodeJS', level: 'Junior', icon: <FaNodeJs className="w-8 h-8 text-green-700" /> },
    { name: '.NET', level: 'Junior', icon: <SiDotnet className="w-8 h-8" /> },
    { name: 'Unity', level: 'Junior', icon: <SiUnity className="w-8 h-8" /> },
    { name: 'ExpressJS', level: 'Junior', icon: <SiExpress className="w-8 h-8" /> },
    { name: 'Tailwind', level: 'Junior', icon: <SiTailwindcss className="w-8 h-8 text-sky-500" /> },
    { name: 'Bootstrap', level: 'Junior', icon: <FaBootstrap className="w-8 h-8 text-violet-600" /> },
    { name: 'Python', level: 'Fresher', icon: <SiPython className="w-8 h-8 text-blue-400" /> },
    { name: 'Java', level: 'Fresher', icon: <FaJava className="w-8 h-8 text-red-600" /> },
    { name: 'Flutter', level: 'Fresher', icon: <SiFlutter className="w-8 h-8 text-blue-400" /> },
    { name: 'Dart', level: 'Fresher', icon: <SiDart className="w-8 h-8 text-sky-400" /> },
  ]

  const tools = [
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8 text-orange-600" /> },
    { name: 'Docker', icon: <FaDocker className="w-8 h-8 text-sky-500" /> },
    { name: 'Figma', icon: <SiFigma className="w-8 h-8 text-pink-600" /> },
    { name: 'Postman', icon: <SiPostman className="w-8 h-8 text-orange-500" /> },
    { name: 'My Sql', icon: <SiMysql className="w-8 h-8 text-orange-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-green-600" /> },
    { name: 'Github', icon: <FaGithub className="w-8 h-8 text-black-700" /> },
    { name: 'Gitlab', icon: <FaGitlab className="w-8 h-8 tex-black" /> },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Senior':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800'
      case 'Middle':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
      case 'Junior':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800'
    }
  }

  const SkillCard = ({ skill, index }: { skill: typeof techStack[0], index: number }) => (
    <div
      className={`group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
        rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 
        hover:border-blue-300 dark:hover:border-blue-600 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
        }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <div>
              <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">{skill.name}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <span className={`px-3 py-1.5 text-sm font-medium rounded-full border ${getLevelColor(skill.level)}`}>
            {skill.level}
          </span>
        </div>
      </div>
    </div>
  )

  const tabs = [
    {
      id: 'techstack',
      label: 'Tech Stack',
      icon: <MdLaptopMac className="w-5 h-5" />,
      data: techStack
    },
    {
      id: 'tools',
      label: 'Tools & Platforms',
      icon: <IoHammerSharp className="w-5 h-5" />,
      data: tools
    }
  ]

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-background">
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
              >
                {tab.icon}
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-all duration-300 ${activeTab === tab.id
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-4 absolute'
                }`}
            >
              {activeTab === tab.id && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {tab.data.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills