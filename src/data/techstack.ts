export interface Tech {
  id: string;
  name: string;
  category: string;
}

export const techstack: Tech[] = [
  { id: "astro", name: "Astro", category: "Framework" },
  { id: "react", name: "React", category: "UI" },
  { id: "blazor", name: "Blazor", category: "Framework" },
  { id: "gsap", name: "GSAP", category: "Animación" },
  { id: "tailwind", name: "Tailwind CSS", category: "Estilos" },
  { id: "typescript", name: "TypeScript", category: "Lenguaje" },
  { id: "figma", name: "Figma", category: "Diseño" },
  { id: "vercel", name: "Vercel", category: "Hosting" },
];