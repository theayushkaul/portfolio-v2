import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-6 pt-[4.5rem] sm:px-6 sm:pb-10 sm:pt-28">
      <div className="contact-panel rounded-xl border border-[#164360] px-5 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:rounded-2xl sm:px-12 sm:py-20">
        <p className="font-mono text-xs font-semibold tracking-wide text-accent sm:text-sm">
          {profile.sections.contact.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
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
