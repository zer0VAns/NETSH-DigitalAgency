import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function initHeroAnimation() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const tagEl = document.querySelector<HTMLElement>('[data-hero="tag"]');
  const titleEl = document.querySelector<HTMLElement>('[data-hero="title"]');
  const subtitleEl = document.querySelector<HTMLElement>('[data-hero="subtitle"]');
  const ctasEl = document.querySelector<HTMLElement>('[data-hero="ctas"]');
  const illustrationEl = document.querySelector<HTMLElement>('[data-hero="illustration"]');
  const scanLine = document.querySelector<SVGRectElement>("#scanLine");
  const cells = document.querySelectorAll<SVGRectElement>("[data-cell]");

  if (!titleEl) return;

  if (prefersReducedMotion) {
    gsap.set([tagEl, subtitleEl, ctasEl, illustrationEl], { opacity: 1, y: 0 });
    gsap.set(cells, { fillOpacity: 1 });
    gsap.set(scanLine, { y: 340,opacity: 0 });
    return;
  }

  const split = new SplitText(titleEl, { type: "lines", linesClass: "hero-line" });

  gsap.set(split.lines, { yPercent: 110, opacity: 0 });

 const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(tagEl, { opacity: 1, duration: 0.5 })
    .to(
      split.lines,
      { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
      "-=0.2"
    )
    .to(subtitleEl, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
    .to(ctasEl, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
    .to(illustrationEl, { opacity: 1, duration: 0.6 }, "-=0.6")
    .to(
      scanLine,
      {
        y: 320,
        duration: 1.8,
        ease: "power1.inOut",
      },
      "-=0.3"
    )
    .to(
      cells,
      {
        fillOpacity: 1,
        duration: 0.3,
        stagger: {
          each: 0.035,
          from: "start",
        },
      },
      "<"
    )
    .to(
      scanLine,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.15"
    );
}