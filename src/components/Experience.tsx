import { profile, experience } from "@/data/content";

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="font-mono text-xs text-accent">
        {profile.sections.experience.eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {profile.sections.experience.heading}
      </h2>

      <div className="mt-10 space-y-5">
        {experience.map((job) => (
          <div
            key={`${job.role}-${job.company}`}
            className="flex gap-4 rounded-2xl border border-card-border bg-card p-6 sm:p-7"
          >
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
            <div>
              <h3 className="text-base font-semibold sm:text-lg">
                {job.role} · {job.company}
              </h3>
              <p className="mt-1 font-mono text-xs text-accent sm:text-sm">
                {job.duration} · {job.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
