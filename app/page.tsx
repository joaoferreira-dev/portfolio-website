import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "João Ferreira - Software Engineer",
  description: "Portfolio of João Ferreira, a Software Engineer specializing in building exceptional digital experiences.",
  openGraph: {
    title: "João Ferreira - Software Engineer",
    description: "Portfolio of João Ferreira, a Software Engineer specializing in building exceptional digital experiences.",
    type: "website",
    url: "https://joaoferreira.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Ferreira - Software Engineer",
    description: "Portfolio of João Ferreira, a Software Engineer specializing in building exceptional digital experiences.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Section>
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight">
                João Ferreira
              </h1>
              <p className="text-2xl md:text-3xl text-text-secondary mb-8 font-light">
                Software Engineer
              </p>
              <p className="text-lg text-text-secondary mb-12 max-w-2xl leading-relaxed">
                Building exceptional digital experiences with clean code and thoughtful design. 
                Passionate about creating scalable solutions that make a difference.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button href="/about" variant="primary">
                  About Me
                </Button>
                <Button href="/projects" variant="secondary">
                  View Projects
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}
