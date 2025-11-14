import React from "react";
import { usePrimeAlea } from "../hooks/usePrimeAlea";
import usePrimeStore from "../stores/usePrimeStore";

export default function PrimesPage() {
  const { data, isLoading, isError, error } = usePrimeAlea();
  const { setNumber, number, isPrime } = usePrimeStore();

  // Quand la donnée est reçue et validée par Zod
  React.useEffect(() => {
    if (data?.number) {
      setNumber(data.number);
    }
  }, [data, setNumber]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nombres Premiers</h1>

      {/* État de chargement */}
      {isLoading && <p className="text-blue-500">Chargement...</p>}

      {/* État d'erreur */}
      {isError && (
        <p className="text-red-500">
          Erreur : {error.message || "Impossible de récupérer le nombre"}
        </p>
      )}

      {/* Succès */}
      {number !== null && (
        <div className="mt-4">
          <p>
            Nombre reçu : <span className="font-bold">{number}</span>
          </p>
          <p>
            Est-ce premier ?{" "}
            <span className={isPrime ? "text-green-600" : "text-red-600"}>
              {isPrime ? "Oui ✅" : "Non ❌"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
