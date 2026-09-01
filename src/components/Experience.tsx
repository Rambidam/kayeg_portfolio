import FadeIn from "./FadeIn";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-glow py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Career
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            A track record of delivering high-quality e-commerce and web
            development solutions for clients.
          </p>
        </FadeIn>

        <div className="relative mt-14">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <FadeIn key={job.title} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden flex-1 md:block" />

                  <div className="absolute left-0 top-2 z-10 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-background ring-4 ring-accent/20" />
                  </div>

                  <div className="flex-1 pl-10 md:pl-0">
                    <div className="card-hover rounded-2xl border border-white/5 bg-surface p-7">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold">
                            {job.title}
                          </h3>
                          <p className="mt-1 text-accent-light">
                            {job.company}
                          </p>
                        </div>
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent-light">
                          {job.period}
                        </span>
                      </div>
                      <ul className="mt-5 space-y-2">
                        {job.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
