"use client";

import ProfileImage from "./ProfileImage";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="hero-glow absolute inset-0" />

      {/* Decorative orbs */}
      <motion.div
        className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-20 h-60 w-60 rounded-full bg-accent-dark/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16 lg:py-28">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-light"
          >
            <Sparkles size={14} />
            {siteConfig.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            {siteConfig.name.split(" ")[0]}{" "}
            <span className="gradient-text">
              {siteConfig.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-accent-light sm:text-2xl"
          >
            {siteConfig.title} · {siteConfig.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-medium text-background transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
            >
              Contact Me
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent/10"
            >
              <ExternalLink size={18} />
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent/10"
            >
              <Mail size={18} />
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="animate-float relative">
            <div className="absolute -inset-1 rounded-2xl shimmer-border opacity-60" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated p-1">
              <div className="relative h-80 w-72 overflow-hidden rounded-xl sm:h-96 sm:w-80">
                <ProfileImage />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg glass px-4 py-2 text-center text-sm">
                <span className="text-accent-light">Open to freelance & full-time</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
