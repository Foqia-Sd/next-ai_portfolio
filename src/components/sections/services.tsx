"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Code2, 
  Cpu, 
  Layout, 
  Database, 
  Smartphone, 
  Globe 
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    description: "Building production-grade web applications with Next.js, React, and TypeScript. Focused on performance, scalability, and type safety.",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    color: "blue",
    features: ["Next.js 15 & App Router", "TypeScript Integration", "Custom API Development"]
  },
  {
    title: "AI Integration & Agents",
    description: "Designing and deploying intelligent systems using OpenAI SDKs and LangChain. Creating autonomous agents that solve complex tasks.",
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    color: "cyan",
    features: ["LLM Pipeline Design", "Autonomous AI Agents", "RAG Implementations"]
  },
  {
    title: "SaaS Architecture",
    description: "Architecting cloud-native SaaS products with secure authentication, subscription billing, and multi-tenant database designs.",
    icon: <Globe className="w-6 h-6 text-indigo-400" />,
    color: "indigo",
    features: ["Authentication (Clerk/Auth.js)", "Stripe Payments", "Prisma & PostgreSQL"]
  },
  {
    title: "UI/UX Design Systems",
    description: "Crafting visually stunning, highly interactive user interfaces. Implementing modern design trends like glassmorphism and motion.",
    icon: <Layout className="w-6 h-6 text-emerald-400" />,
    color: "emerald",
    features: ["Framer Motion Animations", "Tailwind CSS Layouts", "Component Library Design"]
  }
];

const colorVariants: Record<string, string> = {
  blue: "hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  indigo: "hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
  emerald: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
};

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/5 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10 sm:mb-14 md:mb-16">
          <SectionHeading
            badge="Services"
            title="What I Can"
            highlight="Deliver"
            subtitle="I provide end-to-end technical solutions tailored to modern business needs, from AI integration to full-stack engineering."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`glass p-6 sm:p-8 rounded-2xl border border-slate-700/40 transition-all duration-300 group ${colorVariants[service.color]}`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 group-hover:border-blue-500/30 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
