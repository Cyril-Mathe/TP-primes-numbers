import { useQuery } from "@tanstack/react-query";
import { fetchNumberAlea } from "../api/fetchApi";

export function usePrimeAlea() {
  const query = useQuery({
    queryKey: ["primeNumber"],
    queryFn: fetchNumberAlea,
    retry: 1, // en cas d'erreur, une seule tentative
  });

  return {
    ...query,
    refetch: query.refetch, // Expose refetch pour relancer la requête
  };
}
