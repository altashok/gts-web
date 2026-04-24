"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ParsedCountText = {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
};

function parseCountText(text: string): ParsedCountText {
  const trimmed = (text ?? "").trim();
  const match = /^([^\d-]*)(-?[\d,.]+)(.*)$/.exec(trimmed);
  if (!match) {
    return { prefix: "", target: 0, suffix: trimmed, decimals: 0 };
  }

  const prefix = match[1] ?? "";
  const rawNumber = (match[2] ?? "").replace(/,/g, "");
  const suffix = (match[3] ?? "").trim();
  const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1]?.length ?? 0 : 0;
  const target = Number.parseFloat(rawNumber);

  return {
    prefix,
    target: Number.isFinite(target) ? target : 0,
    suffix,
    decimals,
  };
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function isInViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  return rect.bottom >= 0 && rect.right >= 0 && rect.top <= viewportHeight && rect.left <= viewportWidth;
}

export function CountUpText({
  text,
  durationMs = 1200,
  delayMs = 150,
  respectReducedMotion = true,
  className,
}: {
  text: string;
  durationMs?: number;
  delayMs?: number;
  respectReducedMotion?: boolean;
  className?: string;
}) {
  const parsed = React.useMemo(() => parseCountText(text), [text]);
  const spanRef = React.useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = React.useRef(false);
  const rafRef = React.useRef<number | null>(null);
  const timeoutRef = React.useRef<number | null>(null);

  const [current, setCurrent] = React.useState<number>(0);

  React.useEffect(() => {
    hasAnimatedRef.current = false;
    setCurrent(0);
  }, [parsed.target, parsed.decimals, parsed.prefix, parsed.suffix]);

  React.useEffect(() => {
    const element = spanRef.current;
    if (!element) return;

    const prefersReducedMotion =
      respectReducedMotion &&
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const start = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      if (prefersReducedMotion || durationMs <= 0) {
        setCurrent(parsed.target);
        return;
      }

      const from = 0;
      const to = parsed.target;

      const begin = () => {
        const startTime = performance.now();
        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / durationMs);
          const eased = easeOutCubic(progress);
          const next = from + (to - from) * eased;
          setCurrent(next);

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            setCurrent(to);
          }
        };

        rafRef.current = requestAnimationFrame(tick);
      };

      timeoutRef.current = window.setTimeout(begin, Math.max(0, delayMs));
    };

    const tryStart = () => {
      if (hasAnimatedRef.current) return;
      if (isInViewport(element)) start();
    };

    tryStart();

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting) start();
        },
        { threshold: 0.35 }
      );
      observer.observe(element);
    }

    const onScrollOrResize = () => tryStart();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [delayMs, durationMs, parsed.target, respectReducedMotion]);

  const formatted =
    parsed.decimals > 0
      ? current.toFixed(parsed.decimals)
      : Math.round(current).toLocaleString();

  return (
    <span ref={spanRef} className={cn("tabular-nums", className)}>
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </span>
  );
}
