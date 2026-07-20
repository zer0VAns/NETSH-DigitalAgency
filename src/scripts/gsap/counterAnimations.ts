import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCounterAnimations() {
  document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
    const target = parseFloat(el.dataset.counter || "0");
    const suffix = el.dataset.counterSuffix || "";
    const counter = { value: 0 };

    gsap.to(counter, {
      value: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent = Math.round(counter.value) + suffix;
      },
    });
  });
}