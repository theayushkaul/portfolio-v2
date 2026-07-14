import { profile, techStack } from "@/data/content";

function TechIcon({ name }: { name: string }) {
  const common = "h-10 w-10";

  switch (name) {
    case "React":
      return (
        <svg viewBox="0 0 48 48" className={`${common} text-[#38bdf8]`} fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="24" cy="24" rx="21" ry="8" />
          <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(120 24 24)" />
          <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "TypeScript":
      return (
        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#38bdf8] text-xl font-bold text-[#0e1726]">
          TS
        </span>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 48 48" className={`${common} text-[#6ee7a0]`} fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round">
          <path d="M24 3 40 12v24L24 45 8 36V12L24 3Z" />
          <path d="M19 17v14l10 5V22l-5-3" />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 48 48" className={common} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6h7c5 0 7 3 7 8v7H24c-5 0-8-2-8-7V13c0-5 3-7 8-7Z" fill="#ffd43b" />
          <path d="M24 42h-7c-5 0-7-3-7-8v-7h14c5 0 8 2 8 7v1c0 5-3 7-8 7Z" fill="#4dabf7" />
          <circle cx="30" cy="12" r="1.5" fill="#0a0b0f" />
          <circle cx="18" cy="36" r="1.5" fill="#0a0b0f" />
        </svg>
      );
    case "AWS":
      return (
        <svg viewBox="0 0 48 48" className={`${common} text-[#38bdf8]`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 36h22a8 8 0 0 0 1-15.9A13 13 0 0 0 12.5 24 6 6 0 0 0 14 36Z" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 48 48" className={`${common} text-[#4ade80]`} fill="currentColor">
          <path d="M24 4c-8 9-11 16-9 25 1 7 5 12 9 15 4-3 8-8 9-15 2-9-1-16-9-25Zm1 34-1 2-1-2c-1-7-1-15 1-24 2 9 2 17 1 24Z" />
        </svg>
      );
    case "Redis":
      return (
        <svg viewBox="0 0 48 48" className={`${common} text-[#fb7185]`} fill="currentColor">
          <path d="m8 17 16-7 16 7-16 7L8 17Zm0 8 16 7 16-7v7l-16 7-16-7v-7Zm16 0-10-4v4l10 4 10-4v-4l-10 4Z" />
        </svg>
      );
    case "Docker":
      return (
        <svg viewBox="0 0 48 48" className={`${common} text-[#38bdf8]`} fill="currentColor">
          <path d="M7 25h5v-5h5v5h5v-5h5v5h5c3 0 5-2 6-5 3 1 4 3 3 5-2 5-8 10-16 10H17C11 35 8 31 7 25Zm6-11h5v5h-5v-5Zm6 0h5v5h-5v-5Zm6 0h5v5h-5v-5Zm-6-6h5v5h-5V8Z" />
        </svg>
      );
    case "LangChain":
      return (
        <svg viewBox="0 0 48 48" className={`${common} text-[#e5edf9]`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M11 17h10l5 7 5-7h6" />
          <path d="m14 28 5 5 7-7 5 7 4-5" />
          <circle cx="9" cy="17" r="3" fill="currentColor" />
          <circle cx="39" cy="17" r="3" fill="currentColor" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 48 48" className={`${common} text-[#38bdf8]`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
          <ellipse cx="24" cy="10" rx="15" ry="5" />
          <path d="M9 10v24c0 3 7 5 15 5s15-2 15-5V10" />
          <path d="M9 22c0 3 7 5 15 5s15-2 15-5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TechToolkit() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
      <div className="text-center">
        <p className="font-mono text-xs font-semibold tracking-wide text-accent sm:text-sm">
          {profile.sections.toolkit.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {profile.sections.toolkit.heading}
        </h2>
      </div>

      <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex min-h-36 flex-col items-center justify-center gap-3 rounded-2xl border border-card-border bg-card px-4 py-6 text-center transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-[#151922] sm:min-h-40 sm:gap-4 sm:rounded-[1.75rem] sm:py-7"
          >
            <TechIcon name={tech.name} />
            <span className="text-sm font-medium text-[#f2f5fb] sm:text-base">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
