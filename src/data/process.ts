export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    id: "diagnostico",
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu negocio: qué tenés, qué falta y qué necesita realmente tu rubro para vender más online.",
  },
  {
    id: "diseno",
    number: "02",
    title: "Diseño",
    description:
      "Armamos una propuesta visual acorde a tu marca — colores, tono y estilo que reflejen tu negocio real.",
  },
  {
    id: "desarrollo",
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos el sitio y configuramos redes sociales con las tecnologías de nuestro stack, listo para producción.",
  },
  {
    id: "entrega",
    number: "04",
    title: "Entrega",
    description:
      "Te mostramos todo funcionando, te capacitamos para manejarlo vos mismo, y publicamos en vivo.",
  },
  {
    id: "soporte",
    number: "05",
    title: "Soporte",
    description:
      "Acompañamos los primeros 30 días por si surge cualquier duda o ajuste que necesites.",
  },
];