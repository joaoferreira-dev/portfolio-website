import type { Metadata } from "next";
import { sans, serif } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Ferreira - Software Engineer",
  description: "Portfolio of João Ferreira, a Software Engineer specializing in building exceptional digital experiences.",
  keywords: ["Software Engineer", "Full Stack Developer", "Web Development", "João Ferreira"],
  authors: [{ name: "João Ferreira" }],
  metadataBase: new URL('https://joaoferreira.dev'),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body className="bg-background text-text antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
