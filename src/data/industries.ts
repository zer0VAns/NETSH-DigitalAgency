export interface Industry {
  id: string;
  name: string;
  icon: "coffee" | "utensils" | "dumbbell" | "scissors" | "shirt" | "store";
}

export const industries: Industry[] = [
  { id: "cafeterias", name: "Cafeterías", icon: "coffee" },
  { id: "restaurantes", name: "Restaurantes", icon: "utensils" },
  { id: "gimnasios", name: "Gimnasios / Estudios", icon: "dumbbell" },
  { id: "peluquerias", name: "Peluquerías / Barberías", icon: "scissors" },
  { id: "indumentaria", name: "Indumentaria", icon: "shirt" },
  { id: "comercios", name: "Comercios en general", icon: "store" },
];