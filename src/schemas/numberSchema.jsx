import { z } from "zod";

const numberSchema = z.object({
  number: z.number().min(1).max(50),
});

async function fetchNumberAlea() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const raw = { number: Math.floor(Math.random() * 1000) };

  return numberSchema.parse(raw);
}