"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Pak Fashion Store (E-Commerce)",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring secure Clerk user authentication, product catalog browsing, shopping cart, and Stripe checkout integration.",
    tech: ["Next.js", "Clerk Auth", "Tailwind CSS", "Stripe", "TypeScript"],
    github: "https://github.com/Foqia-Sd",
    live: "https://full-stack-ecommerce-clerk.vercel.app/",
    color: "indigo",
    badge: "E-Commerce",
    image: "/projects/ecommerce_clerk.png",
  },
  {
    title: "Lumina Glow Salon & Booking",
    description:
      "An elegant luxury salon platform featuring traditional bridal glamour makeovers, service catalogs, and an intelligent appointment booking system.",
    tech: ["Next.js", "AI Agent", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Foqia-Sd",
    live: "https://salon-demo-sage-three.vercel.app/",
    color: "cyan",
    badge: "AI Salon",
    image: "/projects/salon_booking.png",
  },
  {
    title: "BLOG Sphere",
    description:
      "A modern, high-performance blog platform featuring rich article showcases, category navigation, clean typography, and responsive modern layout.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Foqia-Sd",
    live: "https://blog-red-beta-62.vercel.app/",
    color: "purple",
    badge: "Blog Site",
    image: "/projects/tech_blog.png",
  },
  {
    title: "Madina Builders Real Estate",
    description:
      "A comprehensive real estate platform for browsing luxury property listings, modern home architectures, interactive viewings, and agent inquiries.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Foqia-Sd",
    live: "https://real-estate-website-pi-two.vercel.app/",
    color: "blue",
    badge: "Real Estate",
    image: "/projects/real_estate.png",
  },
  {
    title: "AI Social Media Employee",
    description:
      "An autonomous AI employee agent system designed to create, schedule, and automatically post rich content across LinkedIn, Facebook, and Instagram.",
    tech: ["Python", "OpenAI API", "Meta API", "LinkedIn API", "Docker"],
    github: "https://github.com/Foqia-Sd",
    live: "https://github.com/Foqia-Sd",
    color: "emerald",
    badge: "AI Automation",
    image: "/projects/ai_social_employee.png",
  },
  {
    title: "AI-Powered Developer Portfolio",
    description:
      "This interactive portfolio — built to feel like an AI-powered SaaS application. Features glassmorphism UI, Framer Motion, and Next.js 15 App Router.",
    tech: ["Next.js 15", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Foqia-Sd",
    live: "https://github.com/Foqia-Sd",
    color: "rose",
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
            subtitle="A selection of real applications and AI systems I've designed, built, and deployed live."
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
                <div className={`relative h-40 sm:h-48 overflow-hidden flex-shrink-0`}>
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
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t}
                        className="px-2 py-0.5 rounded-md glass-lighter border border-slate-700/40 text-slate-400 text-[10px] sm:text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action links footer */}
                  <div className="pt-3 mt-auto border-t border-slate-800/80 flex items-center justify-between gap-2">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-500">Live Demo</span>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
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

