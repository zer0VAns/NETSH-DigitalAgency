export interface IncludeItem {
  id: string;
  label: string;
}

export const projectIncludes: IncludeItem[] = [
  { id: "domain", label: "Dominio propio (tunegocio.com)" },
  { id: "hosting", label: "Hosting configurado y funcionando" },
  { id: "responsive", label: "Diseño responsive (celular, tablet y PC)" },
  { id: "seo-basic", label: "SEO básico para aparecer en Google" },
  { id: "social-setup", label: "Configuración de redes sociales" },
  { id: "content-load", label: "Carga de contenido inicial (textos, fotos, menú/catálogo)" },
  { id: "whatsapp", label: "Botón de contacto directo por WhatsApp" },
  { id: "analytics", label: "Estadísticas de visitas (Google Analytics)" },
  { id: "training", label: "Capacitación para que sepas manejarlo vos mismo" },
  { id: "support-30", label: "30 días de soporte post-entrega incluidos" },
];