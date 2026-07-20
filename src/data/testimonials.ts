export interface Testimonial {
  id: string;
  name: string;
  business: string;
  industry: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "cafe-central",
    name: "Marcela Ríos",
    business: "Café Central",
    industry: "Cafetería",
    quote:
      "Antes solo nos conocían los vecinos de siempre. Ahora la gente nos encuentra buscando 'cafetería' en Google y nos escribe directo por Instagram para reservar mesa.",
    initials: "MR",
  },
  {
    id: "la-parrilla",
    name: "Diego Fernández",
    business: "La Parrilla de Diego",
    industry: "Restaurante",
    quote:
      "Tener el menú online y fotos reales de los platos cambió todo. Los clientes llegan sabiendo qué van a pedir, y eso agilizó muchísimo el servicio.",
    initials: "DF",
  },
  {
    id: "estudio-fit",
    name: "Camila Suárez",
    business: "Estudio Fit",
    industry: "Gimnasio / Estudio",
    quote:
      "No sabía nada de redes ni de páginas web. NETSH se encargó de todo y en un mes ya tenía alumnos nuevos escribiendo para consultar por las clases.",
    initials: "CS",
  },
];