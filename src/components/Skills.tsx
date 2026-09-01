"use client";

import FadeIn from "./FadeIn";
import { skillCategories } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="section-glow py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Expertise
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            A comprehensive toolkit for building, customizing, and maintaining
            e-commerce websites and web applications.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-hover h-full rounded-2xl border border-white/5 bg-surface p-7"
              >
                <h3 className="text-lg font-semibold text-accent-light">
                  {category.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/8 bg-surface-elevated px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
