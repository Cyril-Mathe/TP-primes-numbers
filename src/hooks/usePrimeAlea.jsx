import { useQuery } from "@tanstack/react-query";
import { fetchNumberAlea } from "../api/fetchApi";

export function usePrimeAlea() {
  return useQuery({
    queryKey: ["primeNumber"],
    queryFn: fetchNumberAlea,
    retry: 1, // en cas d'erreur, une seule tentative
  });
}
