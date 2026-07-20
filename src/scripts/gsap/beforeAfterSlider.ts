export function initBeforeAfterSliders() {
  document
    .querySelectorAll<HTMLElement>("[data-comparison-slider]")
    .forEach((wrapper) => {
      const input = wrapper.querySelector<HTMLInputElement>("[data-ba-input]");
      if (!input) return;

      const update = (value: string) => {
        wrapper.style.setProperty("--pos", `${value}%`);
      };

      input.addEventListener("input", () => update(input.value));
    });
}