export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "tiempo",
    question: "¿Cuánto tiempo tarda en estar listo mi sitio?",
    answer:
      "Depende del plan y la complejidad, pero en general un proyecto Básico está listo en 1 a 2 semanas, y uno mas avanzado entre 2 y 4 semanas.",
  },
  {
    id: "no-se-nada",
    question: "No sé nada de tecnología, ¿puedo igual?",
    answer:
      "Sí, esta pensado para vos.",
  },
  {
    id: "mantenimiento",
    question: "¿Qué pasa después de la entrega? ¿Necesito pagar algo más?",
    answer:
      "Cada plan incluye un período de soporte post-entrega sin costo. Después de eso, ofrecemos mantenimiento opcional para cambios de contenido, actualizaciones o mejoras.",
  },
  {
    id: "redes-propias",
    question: "Ya tengo un Sitio Web, ¿lo pueden mejorar en vez de crear todo de cero?",
    answer:
      "Depende el caso. Si tienes acceso al codigo fuente, si. Si no, habria que crearla desde cero",
  },
  {
    id: "que-necesito",
    question: "¿Qué tengo que darles yo para arrancar?",
    answer:
      "Lo básico: información de tu negocio, algunas fotos si tenés, y contarnos cómo trabajás. Si no tenés fotos profesionales, también podemos ayudarte con eso.",
  },
  {
    id: "rubro-especifico",
    question: "Mi rubro no está en la lista de industrias, ¿igual pueden ayudarme?",
    answer:
      "Sí. Si tu negocio es otro tipo, escribinos igual y vemos cómo encarar tu proyecto.",
  },
];