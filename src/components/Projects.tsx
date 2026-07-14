"use client";

import { useEffect, useRef, useState } from "react";
import { profile, projects } from "@/data/content";

const previewAccents = [
  "from-[#163f57] via-[#0e1725] to-[#13234b] border-[#174d6d]",
  "from-[#123d35] via-[#0d171a] to-[#173447] border-[#185168]",
  "from-[#292651] via-[#11182b] to-[#183344] border-[#2d3969]",
  "from-[#123548] via-[#0e1820] to-[#192331] border-[#1b4c64]",
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20"
    >
      <p className="font-mono text-xs font-semibold tracking-wide text-accent sm:text-sm">
        {profile.sections.projects.eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
        {profile.sections.projects.heading}
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`project-card flex flex-col rounded-2xl border border-card-border bg-card p-2.5 transition duration-300 hover:-translate-y-1 hover:border-[#3b4657] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:rounded-[1.5rem] sm:p-3 ${
              isVisible ? "project-card-visible" : ""
            }`}
            style={{ animationDelay: `${index * 110}ms` }}
          >
            <div
              className={`flex min-h-40 shrink-0 flex-col justify-center rounded-[1rem] border bg-gradient-to-br p-5 sm:min-h-48 sm:rounded-[1.2rem] sm:p-6 ${previewAccents[index]}`}
            >
              <p className="break-words font-mono text-xs font-semibold leading-relaxed text-[#26a8ff] sm:text-sm">
                {project.snippet}
              </p>
              <p className="mt-2 break-words font-mono text-[11px] font-semibold leading-relaxed text-[#b9cbe4] sm:text-xs">
                {project.meta}
              </p>
            </div>

            <div className="flex flex-1 flex-col px-1 pb-1 pt-5 sm:px-1.5">
              <h3 className="text-lg font-semibold tracking-tight text-[#f4f7fc] sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9eb5d4] sm:text-[15px]">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold sm:text-[11px] ${
                      tagIndex === 0
                        ? "bg-[#0a2636] text-[#26a8ff]"
                        : "bg-[#1a202b] text-[#a7b7d0]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
                {project.visibility === "public" ?
              (<a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-[#a8bdd8] transition hover:text-accent"
              >
                View Code
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>)
              :
              (
                <span 
                className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-[#a8bdd8] transition cursor-pointer"
                >
                  Confidential - can discuss
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
