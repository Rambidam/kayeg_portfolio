"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { siteConfig } from "@/data/portfolio";
import { Copy, Check, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-glow py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Have a Shopify project or web development challenge? I&apos;d love to
            hear about it.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="card-hover flex items-center gap-4 rounded-2xl border border-white/5 bg-surface p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <p className="font-medium">{siteConfig.email}</p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="card-hover flex items-center gap-4 rounded-2xl border border-white/5 bg-surface p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted">Phone</p>
                  <p className="font-medium">{siteConfig.phone}</p>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex items-center gap-4 rounded-2xl border border-white/5 bg-surface p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted">LinkedIn</p>
                  <p className="font-medium">Connect on LinkedIn</p>
                </div>
              </a>

              <div className="card-hover flex items-center gap-4 rounded-2xl border border-white/5 bg-surface p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="font-medium">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/5 bg-surface p-8"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-surface-elevated px-4 py-3 text-foreground outline-none transition-colors focus:border-accent/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-surface-elevated px-4 py-3 text-foreground outline-none transition-colors focus:border-accent/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-white/10 bg-surface-elevated px-4 py-3 text-foreground outline-none transition-colors focus:border-accent/50"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="rounded-full bg-accent px-7 py-3 font-medium text-background transition-colors hover:bg-accent-light"
                >
                  Send a Message
                </motion.button>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm transition-colors hover:border-accent/40 hover:bg-accent/10"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
