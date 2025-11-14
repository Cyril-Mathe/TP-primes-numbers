import { numberSchema } from "../schemas/numberSchema";

export async function fetchNumberAlea() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const raw = { number: Math.floor(Math.random() * 1000) };

  // Validation stricte avec Zod
  return numberSchema.parse(raw);
}
