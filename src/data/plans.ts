export interface Plan {
  id: string;
  name: string;
  tagline: string;
  featured?: boolean;
  featuredStyle?: "soft" | "solid";
  featuredLabel?: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    tagline: "Para empezar a existir online.",
    featured: true,
    featuredStyle: "soft",
    featuredLabel: "RECOMENDADO PARA EMPEZAR",
    features: [
      "Sitio web de una página (landing)",
      "Diseño responsive",
      "Dominio y hosting configurados",
      "Botón de contacto por WhatsApp",
      "SEO básico",
      "Capacitación de uso",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Para negocios que quieren crecer en serio.",
    featured: true,
    featuredStyle: "solid",
    featuredLabel: "MÁS ELEGIDO",
    features: [
      "Todo lo del plan Básico",
      "Sitio multi-página (inicio, servicios, contacto, etc.)",
      "Configuración completa de redes sociales",
      "Identidad de marca (logo y colores)",
      "Carga de contenido y fotos",
      "30 días de soporte incluidos",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Para negocios que quieren destacarse del resto.",
    features: [
      "Todo lo del plan Pro",
      "Animaciones e interacciones a medida",
      "Fotografía profesional de producto/local",
      "Estrategia de contenido para redes",
      "SEO avanzado",
      "Soporte extendido y prioritario",
    ],
  },
];