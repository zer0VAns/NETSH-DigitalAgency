import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay || "0");

    gsap.set(el, { opacity: 0, y: 32 });

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
    const children = Array.from(group.children) as HTMLElement[];

    gsap.set(children, { opacity: 0, y: 28 });

    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: group,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}