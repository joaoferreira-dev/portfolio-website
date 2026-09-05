import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="border-b border-accent/30">
      <Container>
        <nav className="flex items-center justify-between py-6">
          <Link href="/" className="font-serif text-2xl font-medium">
            João Ferreira
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-text transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-text transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-text-secondary hover:text-text transition-colors"
            >
              Projects
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
