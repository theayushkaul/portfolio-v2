import { profile, stats } from "@/data/content";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Left column: eyebrow, heading, bio, CTAs */}
        <div>
          <span className="inline-block rounded-full border border-card-border bg-card px-4 py-1.5 font-mono text-xs text-accent">
            {profile.eyebrow}
          </span>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            {profile.heading}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              View My Work →
            </a>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-card-border bg-card px-6 py-3 text-sm font-medium transition hover:border-accent/50"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right column: terminal widget */}
        <div className="rounded-2xl border border-card-border bg-card p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
            <span className="font-mono text-xs text-muted">
              {profile.terminal.prompt}
            </span>
          </div>

          <p className="font-mono text-sm text-accent">
            $ {profile.terminal.whoamiLabel}
          </p>
          <p className="mt-2 font-mono text-sm leading-relaxed text-muted">
            {profile.terminal.whoamiText}
          </p>

          <p className="mt-6 font-mono text-sm text-accent">
            $ {profile.terminal.signalLabel}
          </p>
          <ul className="mt-2 space-y-2">
            {profile.terminal.signal.map((line) => (
              <li
                key={line}
                className="font-mono text-sm leading-relaxed text-muted"
              >
                <span className="mr-2 text-foreground">✓</span>
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-card-border bg-background/40 p-3 sm:p-4"
              >
                <p className="text-lg font-semibold sm:text-2xl">
                  {stat.value}
                </p>
                <p className="font-mono text-[11px] leading-tight text-muted sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
