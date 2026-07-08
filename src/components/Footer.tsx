import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 text-center">
      <p className="font-mono text-xs text-muted">{profile.footer}</p>
    </footer>
  );
}
