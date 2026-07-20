import { gsap } from "gsap";

const STORAGE_KEY = "netsh_curtain_shown";

function dispatchComplete() {
  (window as any).__curtainDone = true;
  window.dispatchEvent(new CustomEvent("netsh:curtain-complete"));
}

export function initCurtain() {
  const curtain = document.querySelector<HTMLElement>("[data-curtain]");


  const isVisible = curtain && curtain.style.display !== "none";

  if (!curtain || !isVisible) {
    curtain?.remove();
    dispatchComplete();
    return;
  }

  const leftPanel = curtain.querySelector<HTMLElement>('[data-curtain-panel="left"]');
  const rightPanel = curtain.querySelector<HTMLElement>('[data-curtain-panel="right"]');
  const content = curtain.querySelector<HTMLElement>("[data-curtain-content]");
  const counterEl = curtain.querySelector<HTMLElement>("[data-curtain-counter]");

  const counter = { value: 0 };

  document.documentElement.style.overflow = "hidden";

  const tl = gsap.timeline({
    onComplete: () => {
      document.documentElement.style.overflow = "";
      sessionStorage.setItem(STORAGE_KEY, "1");
      curtain.remove();
      dispatchComplete();
    },
  });

  tl.to(counter, {
    value: 100,
    duration: 1.4,
    ease: "power2.inOut",
    onUpdate: () => {
      if (counterEl) counterEl.textContent = `${Math.round(counter.value)}%`;
    },
  })
    .to(content, { opacity: 0, y: -12, duration: 0.35, ease: "power2.out" }, "+=0.15")
    .to(leftPanel, { xPercent: -100, duration: 0.9, ease: "power4.inOut" }, "<")
    .to(rightPanel, { xPercent: 100, duration: 0.9, ease: "power4.inOut" }, "<");
}

export function onCurtainComplete(callback: () => void) {
  if ((window as any).__curtainDone) {
    callback();
    return;
  }
  window.addEventListener("netsh:curtain-complete", callback, { once: true });
}