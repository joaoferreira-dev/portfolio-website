import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-accent/30 mt-20">
      <Container>
        <div className="py-8 text-center text-text-secondary">
          <p>© {new Date().getFullYear()} João Ferreira. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
