import { profile, projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="font-mono text-xs text-accent">
        {profile.sections.projects.eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {profile.sections.projects.heading}
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-card-border bg-card p-6 sm:p-7"
          >
            <div className="rounded-xl border border-card-border bg-background/40 p-5 sm:p-6">
              <p className="break-words font-mono text-sm text-accent">
                {project.snippet}
              </p>
              <p className="mt-2 break-words font-mono text-xs text-muted sm:text-sm">
                {project.meta}
              </p>
            </div>

            <h3 className="mt-5 text-lg font-semibold sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    i === 0
                      ? "bg-accent-soft text-accent"
                      : "border border-card-border text-muted"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-medium text-muted transition hover:text-accent"
            >
              View Code ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
