"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Zap,
  GitBranch,
  Activity,
  Clock,
  ChevronDown,
  Download,
} from "lucide-react";

const stats = [
  {
    icon: <GitBranch className="w-4 h-4 text-blue-400" />,
    label: "Projects Shipped",
    value: "12+",
    change: "+3 this quarter",
  },
  {
    icon: <Zap className="w-4 h-4 text-cyan-400" />,
    label: "AI Systems Built",
    value: "8",
    change: "Agents & pipelines",
  },
  {
    icon: <Activity className="w-4 h-4 text-indigo-400" />,
    label: "System Uptime",
    value: "99.9%",
    change: "↑ Stable",
  },
  {
    icon: <Clock className="w-4 h-4 text-emerald-400" />,
    label: "Experience",
    value: "2 Yrs",
    change: "AI & Full Stack",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden"
    >
      {/* Radial spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-blue-600/8 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[150px] sm:w-[250px] md:w-[300px] h-[150px] sm:h-[250px] md:h-[300px] bg-indigo-600/10 rounded-full blur-[60px] sm:blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[120px] sm:w-[200px] md:w-[250px] h-[120px] sm:h-[200px] md:h-[250px] bg-cyan-600/8 rounded-full blur-[50px] sm:blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
          <span>Open to opportunities · Building in public</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight"
        >
          <span className="text-slate-100">AI-Powered</span>
          <br />
          <span className="gradient-text">Product Builder</span>
          <br />
          <span className="text-slate-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            &amp; Full Stack Developer
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed px-2"
        >
          I design and engineer{" "}
          <span className="text-blue-400 font-medium">intelligent systems</span>{" "}
          — from AI agents and LLM pipelines to full-stack web products. Turning
          complex ideas into elegant, scalable software.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="md"
            href="#projects"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto justify-center"
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            size="md"
            href="https://drive.google.com/file/d/1i9_3255QI5sa-ZNnGIWKskcrX3NoFndP/view?usp=sharing"
            icon={<Download className="w-4 h-4" />}
            className="w-full sm:w-auto justify-center"
          >
            Download Resume
          </Button>
          <Button
            variant="ghost"
            size="md"
            href="#contact"
            className="w-full sm:w-auto justify-center"
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Dashboard-style stat cards */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full mt-4 sm:mt-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="glass rounded-xl p-3 sm:p-4 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="p-1.5 rounded-lg bg-slate-800/80 flex-shrink-0">
                    {stat.icon}
                  </div>
                  <span className="text-slate-500 text-[10px] sm:text-xs font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">{stat.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-3 sm:mt-4 glass rounded-xl px-4 py-2.5 border border-slate-700/40 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs text-slate-500"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>All systems operational</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap text-slate-600">
              <span>Next.js ✓</span>
              <span>Python ✓</span>
              <span className="hidden xs:inline">OpenAI SDK ✓</span>
              <span className="hidden sm:inline">Docker ✓</span>
            </div>
            <span className="hidden md:block text-slate-700">v2.0 · 2025</span>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ delay: 1.6, duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-slate-600 text-xs mt-2"
        >
          <ChevronDown className="w-5 h-5" />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
