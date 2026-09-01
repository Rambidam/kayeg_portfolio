"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { projects } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Featured projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            A selection of websites I&apos;ve built and maintained. Hover over or
            tap each card to view the full project details.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <motion.div
                layout
                onHoverStart={() => setActiveIndex(i)}
                onHoverEnd={() => setActiveIndex(null)}
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
                className="card-hover group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-surface"
              >
                <div
                  className={`relative flex h-48 items-end bg-gradient-to-br ${project.gradient} p-6`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,132,95,0.15),transparent_60%)]" />
                  <div className="relative">
                    <span
                      className={`inline-block h-1 w-12 rounded-full ${project.accent}`}
                    />
                    <h3 className="mt-3 text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent-light">
                      {project.role} · {project.period}
                    </p>
                  </div>
                  <ExternalLink
                    size={20}
                    className="absolute right-6 top-6 text-muted opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>

                <AnimatePresence>
                  {(activeIndex === i) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <div className="p-6">
                        <p className="text-muted">{project.description}</p>
                        <ul className="mt-4 space-y-2">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
