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
      "Depende del plan y la complejidad, pero en general un proyecto Básico está listo en 1 a 2 semanas, y uno Pro o Premium entre 2 y 4 semanas.",
  },
  {
    id: "no-se-nada",
    question: "No sé nada de tecnología, ¿puedo igual?",
    answer:
      "Sí, es justamente para quién es esto. Vos te encargás de tu negocio, nosotros de la parte digital — y al final te capacitamos para que sepas manejar lo básico vos mismo.",
  },
  {
    id: "mantenimiento",
    question: "¿Qué pasa después de la entrega? ¿Necesito pagar algo más?",
    answer:
      "Cada plan incluye un período de soporte post-entrega sin costo. Después de eso, ofrecemos mantenimiento opcional para cambios de contenido, actualizaciones o mejoras.",
  },
  {
    id: "redes-propias",
    question: "Ya tengo Instagram, ¿lo pueden mejorar en vez de crear todo de cero?",
    answer:
      "Sí, trabajamos tanto con negocios que arrancan de cero como con los que ya tienen algo armado y quieren ordenarlo, mejorarlo o darle una identidad más profesional.",
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
      "Sí, esos son solo los rubros con los que trabajamos más seguido. Si tu negocio es otro tipo, escribinos igual y vemos cómo encarar tu proyecto.",
  },
];