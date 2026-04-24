"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI Agent Orchestration Platform",
    description:
      "A multi-agent system built with the OpenAI Agents SDK. Agents collaborate to perform research, summarize, and generate structured outputs autonomously.",
    tech: ["Python", "OpenAI SDK", "FastAPI", "Docker"],
    github: "https://github.com/Foqia-Sd",
    live: "",
    color: "blue",
    badge: "AI Agents",
    image: "/projects/ai_agent.png",
  },
  {
    title: "Full-Stack SaaS Dashboard",
    description:
      "A production-grade Next.js 15 SaaS application with authentication, billing, real-time data, and a pixel-perfect dashboard UI.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    github: "https://github.com/Foqia-Sd",
    live: "",
    color: "cyan",
    badge: "Full Stack",
    image: "/projects/saas_dashboard.png",
  },
  {
    title: "Full Stack E-commerce",
    description:
      "A modern, high-conversion e-commerce platform built with Next.js, featuring secure authentication via Clerk and a sleek dark-mode UI.",
    tech: ["Next.js", "Clerk", "Tailwind", "Stripe"],
    github: "https://github.com/Foqia-Sd",
    live: "",
    color: "indigo",
    badge: "E-commerce",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Digital FTE Automation System",
    description:
      "An end-to-end automation system that mimics a full-time employee's workflow — intake, processing, reporting — powered by AI and Python scripts.",
    tech: ["Python", "MCP", "Docker", "OpenAI"],
    github: "https://github.com/Foqia-Sd",
    live: "",
    color: "emerald",
    badge: "Automation",
    image: "/projects/automation.png",
  },
  {
    title: "Containerized Microservices API",
    description:
      "Loosely coupled microservices deployed with Docker and Kubernetes, featuring API gateway routing, health checks, and zero-downtime deployments.",
    tech: ["Docker", "Kubernetes", "Node.js", "Nginx"],
    github: "https://github.com/Foqia-Sd",
    live: "",
    color: "rose",
    badge: "DevOps",
    image: "/projects/microservices.png",
  },
  {
    title: "AI-Powered Portfolio",
    description:
      "This portfolio — built to feel like an AI-powered SaaS product. Glassmorphism UI, Framer Motion, futuristic design in Next.js 15.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    github: "https://github.com/Foqia-Sd",
    live: "#",
    color: "purple",
    badge: "Portfolio",
    image: "/projects/portfolio.png",
  },
];

const colorMap: Record<string, { badge: string; border: string; glow: string; grad: string }> = {
  blue: { badge: "bg-blue-500/15 text-blue-400 border-blue-500/20", border: "hover:border-blue-500/40", glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]", grad: "from-blue-900/60 via-blue-800/30 to-slate-900" },
  cyan: { badge: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20", border: "hover:border-cyan-500/40", glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]", grad: "from-cyan-900/60 via-cyan-800/30 to-slate-900" },
  indigo: { badge: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20", border: "hover:border-indigo-500/40", glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]", grad: "from-indigo-900/60 via-indigo-800/30 to-slate-900" },
  emerald: { badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20", border: "hover:border-emerald-500/40", glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]", grad: "from-emerald-900/60 via-emerald-800/30 to-slate-900" },
  rose: { badge: "bg-rose-500/15 text-rose-400 border-rose-500/20", border: "hover:border-rose-500/40", glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]", grad: "from-rose-900/60 via-rose-800/30 to-slate-900" },
  purple: { badge: "bg-purple-500/15 text-purple-400 border-purple-500/20", border: "hover:border-purple-500/40", glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]", grad: "from-purple-900/60 via-purple-800/30 to-slate-900" },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-blue-600/6 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10 sm:mb-14 md:mb-16">
          <SectionHeading
            badge="Work"
            title="Projects I've"
            highlight="Shipped"
            subtitle="A selection of real systems I've designed, built, and deployed — from AI agents to full-stack applications."
          />
        </div>

        {/* 1 col mobile → 2 col sm → 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, i) => {
            const c = colorMap[project.color] ?? colorMap.blue;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`glass rounded-2xl border border-slate-700/40 overflow-hidden flex flex-col transition-all duration-300 group ${c.border} ${c.glow}`}
              >
                {/* Gradient image area */}
                <div className={`relative h-36 sm:h-44 overflow-hidden flex-shrink-0`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.grad} opacity-30 z-10 mix-blend-overlay`} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-grid opacity-40 z-10 pointer-events-none" />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold border ${c.badge} z-20 shadow-sm backdrop-blur-md`}>
                    {project.badge}
                  </span>
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg glass border border-slate-600/50 text-slate-300 hover:text-white transition-colors"
                        aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg glass border border-slate-600/50 text-slate-300 hover:text-white transition-colors"
                        aria-label="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-2 group-hover:text-blue-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1 mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t}
                        className="px-2 py-0.5 rounded-md glass-lighter border border-slate-700/40 text-slate-400 text-[10px] sm:text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
