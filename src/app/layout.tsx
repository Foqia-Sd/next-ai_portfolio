import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foqia Siddiqui — AI-Powered Product Builder & Full Stack Developer",
  description:
    "Portfolio of Foqia Siddiqui — building intelligent systems, AI agents, and full-stack products at the intersection of engineering and innovation.",
  keywords: [
    "AI Developer",
    "Full Stack Developer",
    "Next.js",
    "Python",
    "OpenAI",
    "Portfolio",
  ],
  openGraph: {
    title: "Foqia Siddiqui — AI-Powered Product Builder",
    description: "Building intelligent systems with Next.js, Python, and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#020617] text-slate-100`}>
        {/* Global ambient glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-600/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-600/8 rounded-full blur-[100px]" />
        </div>
        {/* Grid background */}
        <div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-60" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
