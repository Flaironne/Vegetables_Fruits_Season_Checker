import type { Month } from "./month";

// Type pour chaque produit
export type Product = {
  id: string;
  name: string;
  category: "Fruit" | "Légume";
  seasons: Month[]; // mois où le produit est de saison
  image?: string; // URL ou chemin relatif pour illustration
};

// Exemple de “base de données” en dur
export const products: Product[] = [
  {
    id: "pomme",
    name: "Pomme",
    category: "Fruit",
    seasons: ["Janvier", "Février", "Mars", "Octobre", "Novembre", "Décembre"],
  },
  {
    id: "poire",
    name: "Poire",
    category: "Fruit",
    seasons: ["Août", "Septembre", "Octobre", "Novembre"],
  },
  {
    id: "fraise",
    name: "Fraise",
    category: "Fruit",
    seasons: ["Avril", "Mai", "Juin", "Juillet"],
  },
  {
    id: "carotte",
    name: "Carotte",
    category: "Légume",
    seasons: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
  },
  {
    id: "courgette",
    name: "Courgette",
    category: "Légume",
    seasons: ["Juin", "Juillet", "Août", "Septembre"],
  },
];
