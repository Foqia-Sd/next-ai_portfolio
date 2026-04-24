"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook, Zap } from "lucide-react";

const socials = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Foqia-Sd",
    icon: <Github className="w-5 h-5" />,
    color: "hover:text-slate-100 hover:border-slate-400/60 hover:shadow-[0_0_16px_rgba(148,163,184,0.25)]",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/foqia-siddiqui-3357152b5/",
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:text-blue-400 hover:border-blue-400/60 hover:shadow-[0_0_16px_rgba(59,130,246,0.3)]",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/foqia.sd78/",
    icon: <Instagram className="w-5 h-5" />,
    color: "hover:text-pink-400 hover:border-pink-400/60 hover:shadow-[0_0_16px_rgba(236,72,153,0.3)]",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61562307717172",
    icon: <Facebook className="w-5 h-5" />,
    color: "hover:text-blue-500 hover:border-blue-500/60 hover:shadow-[0_0_16px_rgba(59,130,246,0.3)]",
  },
];

const navLinks = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative pt-12 pb-8 px-4 border-t border-slate-800/60"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-32 bg-blue-600/6 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* CTA Block */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 sm:p-10 border border-blue-500/15 max-w-2xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-blue-500/15 text-blue-400">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Intelligent</span>
            </h2>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              Have a project in mind? Want to collaborate on AI systems or
              full-stack products? I&apos;m open to exciting opportunities.
            </p>
            <motion.a
              href="mailto:hello@foqiasiddiqui.devfo"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 glow-blue hover:glow-blue-lg transition-all duration-300 border border-blue-500/50 text-sm sm:text-base"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent mb-8" />

        {/* Footer Bar — stacked on mobile, row on md+ */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <span className="text-blue-400 font-black text-sm">F</span>
            </div>
            <span className="text-slate-300 font-semibold text-sm sm:text-base">
              foqia.sd99@gmail.com
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.id}
                id={`social-${s.id}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className={`p-2.5 rounded-xl glass border border-slate-700/50 text-slate-500 transition-all duration-300 ${s.color}`}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-slate-700 text-xs">
          © {new Date().getFullYear()} Foqia Siddiqui. Built with Next.js &
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
