"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Code2, Globe, Bot, Layers } from "lucide-react";

const journey = [
  {
    quarter: "Q1",
    year: "2024",
    title: "TypeScript Mastery",
    description:
      "Dove deep into TypeScript — type-safe development, generics, and building robust frontend architecture. Shifted from JavaScript to typed, scalable codebases.",
    icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    tags: ["TypeScript", "Type Systems", "OOP"],
    accent: "from-blue-600/20 to-blue-500/5",
    border: "border-blue-500/25",
    iconBg: "bg-blue-500/15 text-blue-400",
    dotColor: "border-blue-500/50 text-blue-400",
  },
  {
    quarter: "Q2",
    year: "2024",
    title: "Next.js & Full Stack",
    description:
      "Built production-grade apps with Next.js 14/15 — App Router, server components, API routes. Mastered full-stack patterns from UI to database integration.",
    icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
    tags: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    accent: "from-cyan-600/20 to-cyan-500/5",
    border: "border-cyan-500/25",
    iconBg: "bg-cyan-500/15 text-cyan-400",
    dotColor: "border-cyan-500/50 text-cyan-400",
  },
  {
    quarter: "Q3",
    year: "2024",
    title: "Python & OpenAI Agents",
    description:
      "Entered the AI space — built autonomous agents with OpenAI Agents SDK, designed LLM pipelines, and explored real-world AI system architectures.",
    icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6" />,
    tags: ["Python", "OpenAI SDK", "AI Agents", "LLMs"],
    accent: "from-indigo-600/20 to-indigo-500/5",
    border: "border-indigo-500/25",
    iconBg: "bg-indigo-500/15 text-indigo-400",
    dotColor: "border-indigo-500/50 text-indigo-400",
  },
  {
    quarter: "Q4",
    year: "2024",
    title: "Systems & Deployment",
    description:
      "Leveled up in the full product lifecycle — prompt & context engineering, MCP protocol, containerization with Docker, Kubernetes basics, cloud deployment, and building Digital FTE systems.",
    icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
    tags: ["Prompt Engineering", "MCP", "Docker", "Kubernetes", "Deployment", "Digital FTE"],
    accent: "from-emerald-600/20 to-emerald-500/5",
    border: "border-emerald-500/25",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    dotColor: "border-emerald-500/50 text-emerald-400",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-600/6 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10 sm:mb-14 md:mb-16">
          <SectionHeading
            badge="My Story"
            title="My Journey into"
            highlight="AI & Systems"
            subtitle="From TypeScript basics to shipping AI-powered products — a year of deep focus, rapid growth, and building things that matter."
          />
        </div>

        {/* Mobile: simple stacked cards. Desktop: alternating timeline */}
        <div className="relative">
          {/* Vertical connector line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/40 via-indigo-500/30 to-emerald-500/20 -translate-x-1/2" />

          <div className="flex flex-col gap-6 sm:gap-8">
            {journey.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-60px" }}
                  /* Mobile: single column. Desktop: alternating row */
                  className={`relative flex flex-col lg:flex-row items-stretch gap-0 lg:gap-6 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                  {/* Card */}
                  <div className="w-full lg:w-[calc(50%-2rem)]">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`glass rounded-2xl p-4 sm:p-6 border ${item.border} bg-gradient-to-br ${item.accent} transition-all duration-300 hover:glow-blue h-full`}
                    >
                      {/* Quarter badge — visible on mobile */}
                      <div className="flex items-center gap-2 mb-3 lg:hidden">
                        <div className={`w-8 h-8 rounded-full glass border ${item.dotColor} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                          {item.quarter}
                        </div>
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                          {item.quarter} · {item.year}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`p-2.5 sm:p-3 rounded-xl ${item.iconBg} flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="hidden lg:flex items-center gap-3 mb-1">
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                              {item.quarter} · {item.year}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-xl font-bold text-slate-100 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded-lg glass-lighter border border-slate-700/50 text-slate-300 text-[10px] sm:text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot — desktop only */}
                  <div className="hidden lg:flex w-16 flex-col items-center flex-shrink-0 z-10 pt-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                      viewport={{ once: true }}
                      className={`w-10 h-10 rounded-full glass border-2 ${item.dotColor} flex items-center justify-center glow-blue`}
                    >
                      <span className="text-xs font-bold">{item.quarter}</span>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side (desktop) */}
                  <div className="hidden lg:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
