import { numberSchema } from "../schemas/numberSchema";

export async function fetchNumberAlea() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // Génère un nombre aléatoire entre 1 et 50 pour rester dans la validation
  const raw = { number: Math.floor(Math.random() * 50) + 1 };

  // Validation stricte avec Zod
  return numberSchema.parse(raw);
}
