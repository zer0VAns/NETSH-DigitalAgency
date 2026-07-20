export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "web",
    title: "Sitio web a medida",
    description:
      "Diseño y desarrollo de un sitio propio, rápido y responsive, hecho para tu rubro — no una plantilla genérica.",
    icon: "layout",
  },
  {
    id: "social",
    title: "Redes sociales",
    description:
      "Configuración y puesta a punto de Instagram / Facebook, con identidad visual coherente con tu sitio.",
    icon: "share",
  },
  {
    id: "branding",
    title: "Identidad de marca",
    description:
      "Logo, colores y tipografía definidos (o mejorados) para que tu negocio se vea igual de profesional en todos lados.",
    icon: "palette",
  },
  {
    id: "seo",
    title: "SEO local",
    description:
      "Configuración para que tu negocio aparezca cuando alguien busca tu rubro cerca de tu zona en Google.",
    icon: "search",
  },
  {
    id: "content",
    title: "Fotografía & contenido",
    description:
      "Dirección de fotos de producto, local o menú, listas para usar en el sitio y en redes.",
    icon: "camera",
  },
  {
    id: "support",
    title: "Soporte y mantenimiento",
    description:
      "Acompañamiento después de la entrega: cambios de contenido, dudas técnicas y actualizaciones.",
    icon: "wrench",
  },
];