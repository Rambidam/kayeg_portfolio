import FadeIn from "./FadeIn";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-glow py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {about.heading}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            {about.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
