"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "blue" | "cyan" | "indigo" | "none";
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  glow = "none",
  hover = false,
  onClick,
}: GlassCardProps) {
  const glowClass = {
    blue: "hover:glow-blue hover:border-blue-500/30",
    cyan: "hover:glow-cyan hover:border-cyan-500/30",
    indigo: "hover:glow-indigo hover:border-indigo-500/30",
    none: "",
  }[glow];

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300",
        hover && "cursor-pointer",
        glow !== "none" && glowClass,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
