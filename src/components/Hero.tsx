"use client";

import { useEffect, useRef, useState } from "react";
import { profile, stats } from "@/data/content";

const TYPEWRITER_SPEED = 52;

function SocialIcon({ label }: { label: string }) {
  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.93c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.06.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect width="20" height="20" x="2" y="2" rx="2" fill="#38bdf8" />
      <path d="M8.2 9.2h3.1V18H8.2V9.2ZM9.75 5.7a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM12.9 9.2h3v1.2h.05c.42-.8 1.45-1.65 2.98-1.65 3.19 0 3.78 2.1 3.78 4.83V18h-3.1v-3.84c0-.92-.02-2.1-1.28-2.1-1.28 0-1.48 1-1.48 2.03V18h-3.1V9.2Z" fill="#0b111a" transform="translate(-1.35) scale(.95)" />
    </svg>
  );
}

function useTypedText(text: string, isActive: boolean) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!isActive) return;

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(text.slice(0, index));
      if (index === text.length) window.clearInterval(timer);
    }, TYPEWRITER_SPEED);

    return () => window.clearInterval(timer);
  }, [isActive, text]);

  return typedText;
}

export default function Hero() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [whoamiOutputVisible, setWhoamiOutputVisible] = useState(false);
  const [signalStarted, setSignalStarted] = useState(false);
  const [completedSignals, setCompletedSignals] = useState(0);
  const [terminalStyle, setTerminalStyle] = useState<
    { height: string; marginTop: string } | undefined
  >();
  const whoami = useTypedText(profile.terminal.whoamiLabel, true);
  const signal = useTypedText(profile.terminal.signalLabel, signalStarted);

  useEffect(() => {
    const outputTimer = window.setTimeout(
      () => setWhoamiOutputVisible(true),
      profile.terminal.whoamiLabel.length * TYPEWRITER_SPEED + 420,
    );
    const signalTimer = window.setTimeout(
      () => setSignalStarted(true),
      profile.terminal.whoamiLabel.length * TYPEWRITER_SPEED + 1250,
    );

    return () => {
      window.clearTimeout(outputTimer);
      window.clearTimeout(signalTimer);
    };
  }, []);

  useEffect(() => {
    if (!signalStarted || signal.length !== profile.terminal.signalLabel.length) {
      return;
    }

    const timers = profile.terminal.signal.map((_, index) =>
      window.setTimeout(() => setCompletedSignals(index + 1), 550 + index * 650),
    );

    return () => timers.forEach(window.clearTimeout);
  }, [signal, signalStarted]);

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const intro = introRef.current;
    const terminal = terminalRef.current;
    if (!leftColumn || !intro || !terminal) return;

    const syncTerminalHeight = () => {
      if (!window.matchMedia("(min-width: 1024px)").matches) {
        setTerminalStyle(undefined);
        return;
      }

      const leftColumnBounds = leftColumn.getBoundingClientRect();
      const introBounds = intro.getBoundingClientRect();
      setTerminalStyle({
        height: `${Math.ceil(introBounds.height)}px`,
        marginTop: `${Math.ceil(introBounds.top - leftColumnBounds.top)}px`,
      });
    };

    const observer = new ResizeObserver(syncTerminalHeight);
    observer.observe(leftColumn);
    observer.observe(intro);
    window.addEventListener("resize", syncTerminalHeight);
    syncTerminalHeight();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncTerminalHeight);
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-5 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-10">
        <div ref={leftColumnRef}>
          <span className="inline-block rounded-full border border-card-border bg-card px-4 py-1.5 font-mono text-xs text-accent">
            {profile.eyebrow}
          </span>

          <div ref={introRef} className="mt-6">
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              {profile.heading}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.bio}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#07101d] transition hover:opacity-90 lg:w-auto"
            >
              View My Work
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-card-border bg-card px-5 py-3 text-sm font-medium transition hover:border-accent/50 lg:w-auto"
              >
                <SocialIcon label={social.label} />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div
          ref={terminalRef}
          className="terminal-shell flex flex-col overflow-hidden rounded-xl border border-[#252d3a] shadow-[0_24px_80px_rgba(0,0,0,0.36)] sm:rounded-2xl"
          style={terminalStyle}
        >
          <div className="terminal-header flex items-center justify-between border-b border-[#2a313e] px-5 py-4 sm:px-8 sm:py-5 lg:px-6 lg:py-3.5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="font-mono text-[10px] font-semibold tracking-wide text-[#a8bfdc] sm:text-sm">
              {profile.terminal.prompt}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-8 lg:p-5">
            <p className="font-mono text-[15px] font-semibold text-[#26a8ff] sm:text-base lg:text-[15px]">
              <span className="mr-2">$</span>
              {whoami}
              {!whoamiOutputVisible && <span className="terminal-cursor" />}
            </p>
            <div
              className={`terminal-output ${
                whoamiOutputVisible ? "terminal-output-visible" : ""
              }`}
            >
              <p className="mt-6 max-w-[35rem] font-mono text-[13px] font-medium leading-relaxed text-[#9fbce3] sm:text-sm lg:mt-3 lg:text-[13px]">
                {profile.terminal.whoamiText}
              </p>
            </div>

            <p className="mt-7 font-mono text-[15px] font-semibold text-[#26a8ff] sm:text-base lg:mt-4 lg:text-[15px]">
              <span className="mr-2">$</span>
              {signal}
              {signalStarted && completedSignals === 0 && (
                <span className="terminal-cursor" />
              )}
            </p>
            <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4 lg:mt-3 lg:space-y-2">
              {profile.terminal.signal.map((line, index) => (
                <li
                  key={line}
                  className={`terminal-signal font-mono text-[13px] font-medium leading-relaxed text-[#d6e3f7] sm:text-sm lg:text-[13px] ${
                    completedSignals > index ? "terminal-signal-visible" : ""
                  }`}
                >
                  <span className="mr-2 inline-block w-3 text-[#d6e3f7]">
                    {completedSignals > index ? "\u2713" : "\u00b7"}
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-auto grid grid-cols-3 gap-2 pt-6 sm:gap-3 sm:pt-7 lg:pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#252d3a] bg-[#12171f] p-2.5 first:border-[#0d4968] first:bg-[#0a1d2a] sm:rounded-[1.25rem] sm:p-4 lg:rounded-xl lg:p-3"
                >
                  <p className="text-lg font-semibold text-[#f3f7ff] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] leading-tight text-[#9fbce3] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
