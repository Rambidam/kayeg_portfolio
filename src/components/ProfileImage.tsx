"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/portfolio";

export default function ProfileImage() {
  const [error, setError] = useState(false);
  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent-dark/20 to-surface-elevated">
        <span className="font-display text-6xl font-bold text-accent-light/80">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/profile.jpg"
      alt={siteConfig.name}
      fill
      className="object-cover object-top"
      priority
      sizes="(max-width: 768px) 288px, 320px"
      onError={() => setError(true)}
    />
  );
}
