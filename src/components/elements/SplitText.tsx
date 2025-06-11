"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
  // tag?: keyof JSX.IntrinsicElements;
  tag?: keyof React.ReactElement;
  sequenceDelay?: number; // Fixed typo from squenceDelay to sequenceDelay
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag: Tag = "p",
  sequenceDelay = 0, // Fixed prop name
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLElement>(null); // Changed to HTMLElement for broader compatibility

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state
    gsap.set(el, { visibility: "hidden" });

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    const splitter = new GSAPSplitText(el, {
      type: splitType,
      absolute: absoluteLines,
      linesClass: "split-line",
    });

    let targets: Element[];
    switch (splitType) {
      case "lines":
        targets = splitter.lines;
        break;
      case "words":
        targets = splitter.words;
        break;
      case "words, chars":
        targets = [...splitter.words, ...splitter.chars];
        break;
      default:
        targets = splitter.chars;
    }

    targets.forEach((t) => {
      (t as HTMLElement).style.willChange = "transform, opacity";
      gsap.set(t, { ...from }); // Apply initial state to each target
    });

    const startPct = (1 - threshold) * 100;
    const m = /^(-?\d+)px$/.exec(rootMargin);
    const raw = m ? parseInt(m[1], 10) : 0;
    const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
      },
      delay: sequenceDelay,
      onStart: () => {
        gsap.set(el, { visibility: "visible" }); // Make visible when animation starts
      },
      onComplete: onLetterAnimationComplete,
    });

    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(targets);
      splitter.revert();
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete, sequenceDelay]);

  return (
    <Tag
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-pre ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
        visibility: "hidden", // Default hidden state
      }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
