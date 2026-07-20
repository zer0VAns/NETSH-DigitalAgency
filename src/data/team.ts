export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "Nombre Apellido",
    role: "Fundador · Estrategia digital",
    bio: "Define el rumbo de cada proyecto: qué necesita realmente el negocio antes de tocar una sola línea de código.",
    initials: "NA",
  },
  {
    id: "design",
    name: "Nombre Apellido",
    role: "Diseño de producto",
    bio: "Traduce la identidad del negocio (colores, tono, vibra) en una interfaz que se sienta suya, no genérica.",
    initials: "NA",
  },
  {
    id: "dev",
    name: "Nombre Apellido",
    role: "Desarrollo & código",
    bio: "Construye el sitio con las tecnologías del stack: rápido, responsive y fácil de mantener.",
    initials: "NA",
  },
  {
    id: "social",
    name: "Nombre Apellido",
    role: "Redes & contenido",
    bio: "Arma la presencia en redes sociales para que el negocio no dependa solo del boca en boca.",
    initials: "NA",
  },
];