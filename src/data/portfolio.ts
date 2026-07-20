export interface PortfolioItem {
  id: string;
  name: string;
  industry: string;
  description: string;
  image: string;
  demoUrl?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: "cafe-central",
    name: "Café Central",
    industry: "Cafetería",
    description: "Sitio de una página con menú digital, ubicación y reservas por WhatsApp.",
    image: "/images/portfolio/coffee.png",
    demoUrl: "https://landing-coffee-template.vercel.app/",
  },
  {
    id: "la-parrilla",
    name: "La Parrilla del Sur",
    industry: "Restaurante",
    description: "Menú completo con fotos, precios, etc",
    image: "/images/portfolio/menu.png",
    demoUrl: "https://menu-template-rust.vercel.app/",
  },
  {
    id: "estudio-fit",
    name: "Estudio Fit",
    industry: "Gimnasio",
    description: "Landing con planes, horarios de clases y formulario de inscripción.",
    image: "/images/portfolio/estudio-fit.png",
    demoUrl: "https://gymfit-orcin.vercel.app/",
  },
  {
    id: "barber-house",
    name: "Barber House",
    industry: "Peluquería",
    description: "Reserva de turnos online y galería de trabajos realizados.",
    image: "/images/portfolio/barber-house.png",
    demoUrl: "https://barber-house-delta.vercel.app/",
  },
];