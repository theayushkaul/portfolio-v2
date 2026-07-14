import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-6 text-center sm:px-6 sm:pb-10">
      <p className="font-mono text-xs text-muted">{profile.footer}</p>
    </footer>
  );
}
