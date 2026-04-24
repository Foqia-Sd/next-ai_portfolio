"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Brain, Monitor, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "AI / ML",
    icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "blue",
    accent: "from-blue-600/15 to-transparent",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/15 text-blue-400",
    bar: "bg-gradient-to-r from-blue-600 to-blue-400",
    skills: [
      { name: "OpenAI Agents SDK", level: 90 },
      { name: "Prompt Engineering", level: 92 },
      { name: "Context Engineering", level: 85 },
      { name: "LLM Pipelines", level: 85 },
      { name: "MCP Protocol", level: 75 },
      { name: "RAG Systems", level: 78 },
    ],
  },
  {
    category: "Frontend",
    icon: <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "cyan",
    accent: "from-cyan-600/15 to-transparent",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/15 text-cyan-400",
    bar: "bg-gradient-to-r from-cyan-600 to-cyan-400",
    skills: [
      { name: "Next.js 14/15", level: 90 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "indigo",
    accent: "from-indigo-600/15 to-transparent",
    border: "border-indigo-500/20",
    iconBg: "bg-indigo-500/15 text-indigo-400",
    bar: "bg-gradient-to-r from-indigo-600 to-indigo-400",
    skills: [
      { name: "Python", level: 88 },
      { name: "FastAPI", level: 82 },
      { name: "Node.js", level: 78 },
      { name: "REST APIs", level: 90 },
      { name: "Database Design", level: 75 },
      { name: "Prisma ORM", level: 80 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "emerald",
    accent: "from-emerald-600/15 to-transparent",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    bar: "bg-gradient-to-r from-emerald-600 to-emerald-400",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 65 },
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD", level: 72 },
      { name: "Cloud Deployment", level: 78 },
      { name: "Linux / CLI", level: 80 },
    ],
  },
];

const extraTech = [
  "JavaScript", "PostgreSQL", "MongoDB", "Redis", "Vercel",
  "Supabase", "Langchain", "Jupyter", "Zod", "React Query",
  "tRPC", "WebSockets", "OpenAPI", "Nginx", "OpenClaw",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-48 sm:w-80 h-48 sm:h-80 bg-cyan-600/5 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10 sm:mb-14 md:mb-16">
          <SectionHeading
            badge="Expertise"
            title="My"
            highlight="Technical Skills"
            subtitle="A curated look at the technologies and tools I use to build AI-powered products and full-stack systems."
          />
        </div>

        {/* 1 col mobile → 2 col md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.01, y: -3 }}
              className={`glass rounded-2xl p-4 sm:p-6 border ${group.border} bg-gradient-to-br ${group.accent} transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-2.5 rounded-xl ${group.iconBg}`}>
                  {group.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {group.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-[10px] sm:text-xs text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: gi * 0.08 + si * 0.05, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${group.bar}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 md:mt-10 glass rounded-2xl p-4 sm:p-6 border border-slate-700/40"
        >
          <p className="text-slate-500 text-xs font-medium mb-3 sm:mb-4 text-center uppercase tracking-widest">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {extraTech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08 }}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg glass-lighter border border-slate-700/40 text-slate-400 text-xs sm:text-sm hover:text-blue-300 hover:border-blue-500/30 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
