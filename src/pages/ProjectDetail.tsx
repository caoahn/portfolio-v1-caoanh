import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()

  // Project data - in a real app, this would come from an API or database
  const projects = {
    'e-commerce-platform': {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      longDescription: "This comprehensive e-commerce platform provides a complete solution for online retail businesses. Built with modern technologies, it offers a seamless shopping experience for customers and powerful management tools for administrators. The platform includes advanced features like real-time inventory management, automated email notifications, analytics dashboard, and mobile-responsive design.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy&auto=format",
      duration: "3 months",
      team: "Solo project",
      status: "Completed",
      features: [
        "User authentication and authorization",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and notifications",
        "Responsive design for all devices"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Optimizing database queries for large product catalogs",
        "Creating an intuitive admin interface"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format"
      ]
    },
    'task-management-app': {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription: "A powerful task management application designed for teams and individuals to organize their work efficiently. The app features real-time collaboration, intuitive drag-and-drop interfaces, and comprehensive project tracking capabilities.",
      tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy&auto=format",
      duration: "2 months",
      team: "3 developers",
      status: "Completed",
      features: [
        "Real-time collaboration with Socket.io",
        "Drag-and-drop task management",
        "Team member assignments",
        "Progress tracking and analytics",
        "File attachments and comments",
        "Mobile-responsive interface"
      ],
      challenges: [
        "Implementing real-time synchronization",
        "Optimizing drag-and-drop performance",
        "Managing complex state in collaborative environment"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&auto=format",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&auto=format",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&auto=format"
      ]
    },
    'weather-dashboard': {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive charts, and personalized weather alerts.",
      longDescription: "An advanced weather dashboard that provides comprehensive weather information with beautiful visualizations. The application features location-based forecasts, interactive charts, and personalized weather alerts to keep users informed about weather conditions.",
      tech: ["React", "D3.js", "OpenWeather API", "PWA"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&crop=entropy&auto=format",
      duration: "1 month",
      team: "Solo project",
      status: "Completed",
      features: [
        "Location-based weather forecasts",
        "Interactive charts with D3.js",
        "Personalized weather alerts",
        "Progressive Web App capabilities",
        "Offline functionality",
        "Multi-location tracking"
      ],
      challenges: [
        "Creating responsive data visualizations",
        "Implementing offline functionality",
        "Optimizing API calls for performance"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=entropy&auto=format",
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=entropy&auto=format",
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=entropy&auto=format"
      ]
    }
  }

  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Duration</h3>
              </div>
              <p className="text-muted-foreground">{project.duration}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Team</h3>
              </div>
              <p className="text-muted-foreground">{project.team}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Status</h3>
              </div>
              <p className="text-muted-foreground">{project.status}</p>
            </CardContent>
          </Card>
        </div>

        {/* Overview */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </CardContent>
        </Card>

        {/* Features & Challenges */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Challenges Solved</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Gallery */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProjectDetail