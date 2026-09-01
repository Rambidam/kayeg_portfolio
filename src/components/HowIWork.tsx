"use client";

import FadeIn from "./FadeIn";
import { howIWork } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function HowIWork() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            How I work
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {howIWork.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                className="card-hover group relative rounded-2xl border border-white/5 bg-surface p-8"
              >
                <span className="font-display text-5xl font-bold text-accent/20 transition-colors group-hover:text-accent/40">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
