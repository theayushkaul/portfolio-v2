import { profile, techStack } from "@/data/content";

export default function TechToolkit() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="font-mono text-xs text-accent">
        {profile.sections.toolkit.eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {profile.sections.toolkit.heading}
      </h2>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center gap-3 rounded-xl border border-card-border bg-card px-4 py-8 text-center transition hover:border-accent/40"
          >
            <span className="text-sm font-medium sm:text-base">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
