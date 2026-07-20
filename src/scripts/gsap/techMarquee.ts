import { gsap } from "gsap";

export function initTechMarquee() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const track = document.querySelector<HTMLElement>("[data-marquee-track]");
  if (!track) return;

  if (prefersReducedMotion) return;

  const tween = gsap.to(track, {
    xPercent: -50,
    duration: 22,
    ease: "none",
    repeat: -1,
  });

  const wrapper = track.closest("[data-marquee]");
  wrapper?.addEventListener("mouseenter", () => tween.pause());
  wrapper?.addEventListener("mouseleave", () => tween.play());
}