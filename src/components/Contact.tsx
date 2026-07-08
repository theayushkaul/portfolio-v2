import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
      <div className="rounded-2xl border border-card-border bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
        <p className="font-mono text-xs text-accent">
          {profile.sections.contact.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {profile.sections.contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {profile.sections.contact.subheading}
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="flex-shrink-0"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          {profile.email}
        </a>
      </div>
    </section>
  );
}
