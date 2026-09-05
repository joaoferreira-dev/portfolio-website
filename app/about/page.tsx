import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - João Ferreira",
  description: "Learn more about João Ferreira, a Software Engineer with expertise in building modern web applications.",
  openGraph: {
    title: "About - João Ferreira",
    description: "Learn more about João Ferreira, a Software Engineer with expertise in building modern web applications.",
    type: "website",
    url: "https://joaoferreira.dev/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - João Ferreira",
    description: "Learn more about João Ferreira, a Software Engineer with expertise in building modern web applications.",
  },
};

export default function About() {
  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
  ];

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
    },
    {
      title: "Software Engineer",
      company: "Another Tech Company",
      period: "2020 - 2022",
      description: "Built and maintained full-stack applications with focus on performance and user experience.",
    },
    {
      title: "Junior Developer",
      company: "Startup",
      period: "2018 - 2020",
      description: "Developed web applications and learned best practices in software development.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Section>
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8">
                About Me
              </h1>
              
              <div className="mb-12">
                <p className="text-text-secondary leading-relaxed mb-4">
                  I'm a passionate Software Engineer with expertise in building modern web applications. 
                  I focus on creating clean, maintainable code and exceptional user experiences.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  With several years of experience in full-stack development, I've worked on various projects 
                  ranging from startups to enterprise applications. I enjoy solving complex problems and 
                  continuously learning new technologies.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-accent px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">
                Experience
              </h2>
              <div className="space-y-6 mb-12">
                {experience.map((exp) => (
                  <Card key={`${exp.company}-${exp.title}`} className="h-full">
                    <h3 className="font-serif text-xl font-medium mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-text-secondary font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-text-secondary text-sm mb-3">
                      {exp.period}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </Card>
                ))}
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">
                Get in Touch
              </h2>
              <Card>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="text-text-secondary hover:text-text transition-colors"
                  >
                    Email
                  </a>
                </div>
              </Card>
            </div>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}
