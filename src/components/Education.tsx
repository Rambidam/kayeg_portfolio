import FadeIn from "./FadeIn";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Background
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Academic foundation in software development and professional
            technical skills.
          </p>
        </FadeIn>

        <div className="mt-14 space-y-8">
          {education.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 0.15}>
              <div className="card-hover rounded-2xl border border-white/5 bg-surface p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="mt-1 text-accent-light">{edu.school}</p>
                        <p className="text-sm text-muted">{edu.pathway}</p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                        {edu.period}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-2">
                      {edu.highlights.map((h) => (
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
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
