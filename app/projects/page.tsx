import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - João Ferreira",
  description: "Explore João Ferreira's software engineering projects and technical work.",
  openGraph: {
    title: "Projects - João Ferreira",
    description: "Explore João Ferreira's software engineering projects and technical work.",
    type: "website",
    url: "https://joaoferreira.dev/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - João Ferreira",
    description: "Explore João Ferreira's software engineering projects and technical work.",
  },
};

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design. Built with Next.js, Node.js, and PostgreSQL.",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/example",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive UI. Features drag-and-drop task organization and progress tracking.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/example",
    },
    {
      title: "Weather Dashboard",
      description: "A weather forecasting dashboard with location-based forecasts, historical data visualization, and severe weather alerts. Integrates with multiple weather APIs for accurate data.",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/example",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Section>
          <Container>
            <div className="max-w-6xl">
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Projects
              </h1>
              <p className="text-text-secondary text-lg mb-12 max-w-2xl">
                A selection of my recent work and personal projects.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <h3 className="font-serif text-xl font-medium mb-3">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-background px-3 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        href={project.liveUrl}
                        variant="primary"
                        className="flex-1 text-sm py-2"
                      >
                        Live Demo
                      </Button>
                      <Button
                        href={project.repoUrl}
                        variant="secondary"
                        className="flex-1 text-sm py-2"
                      >
                        Code
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}
