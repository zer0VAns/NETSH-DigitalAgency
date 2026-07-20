export interface BeforeAfterItem {
  id: string;
  name: string;
  industry: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "cafe-central",
    name: "Café Central",
    industry: "Cafetería",
    description:
      "Sin redes activas ni forma de que lo encuentren online. Hoy tiene sitio propio y reservas por WhatsApp.",
    beforeImage: "/images/before-after/cafe-central-antes.jpg",
    afterImage: "/images/before-after/cafe-central-despues.jpg",
  },
  {
    id: "la-parrilla",
    name: "La Parrilla de Diego",
    industry: "Restaurante",
    description:
      "El menú se pasaba solo de boca en boca. Ahora está online, con fotos y pedidos para delivery.",
    beforeImage: "/images/before-after/parrilla-antes.jpg",
    afterImage: "/images/before-after/parrilla-despues.jpg",
  },
  {
    id: "estudio-fit",
    name: "Estudio Fit",
    industry: "Gimnasio",
    description:
      "No tenía forma de recibir consultas fuera del local. Ahora tiene inscripción y horarios online.",
    beforeImage: "/images/before-after/estudio-fit-antes.jpg",
    afterImage: "/images/before-after/estudio-fit-despues.jpg",
  },
];