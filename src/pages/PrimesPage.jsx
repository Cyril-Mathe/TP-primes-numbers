import React from "react";
import { usePrimeAlea } from "../hooks/usePrimeAlea";
import usePrimeStore from "../stores/usePrimeStore";
import { numberSchema } from '../schemas/numberSchema';

export default function PrimesPage() {
  const { data, isLoading, isError, error, refetch } = usePrimeAlea();
  const { setNumber, number, isPrime } = usePrimeStore();
  const [validationError, setValidationError] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  // Quand la donnée est reçue et validée par Zod
  React.useEffect(() => {
    if (data?.number) {
      console.log('Received number:', data.number);
      try {
        numberSchema.parse({ number: data.number });
        setNumber(data.number);
        setValidationError(null);
      } catch (err) {
        setValidationError(err.errors[0].message);
      }
    }
  }, [data, setNumber]);

  // Soumettre un nombre saisi manuellement
  const handleSubmitManual = () => {
    const parsed = Number(inputValue);
    if (Number.isNaN(parsed)) {
      setValidationError("Veuillez entrer un nombre valide");
      return;
    }

    try {
      numberSchema.parse({ number: parsed });
      setNumber(parsed);
      setValidationError(null);
    } catch (err) {
      // Zod error: afficher le message
      setValidationError(err.errors?.[0]?.message || "Nombre invalide");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nombres Premiers</h1>

      {/* Bouton pour obtenir un nouveau nombre */}
      <button
        onClick={() => refetch()}
        disabled={isLoading}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isLoading ? "Chargement..." : "Obtenir un nombre aléatoire"}
      </button>

      {/* Saisie manuelle d'un nombre */}
      <div className="mb-4">
        <label className="block mb-2">Saisir un nombre (1-50) :</label>
        <div className="flex gap-2">
          <input
            type="number"
            min={1}
            max={50}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSubmitManual(); }}
            className="border rounded px-2 py-1"
            placeholder="Entrez un nombre"
          />
          <button
            onClick={handleSubmitManual}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Valider
          </button>
        </div>
      </div>

      {/* État de chargement */}
      {isLoading && <p className="text-blue-500">Chargement...</p>}

      {/* État d'erreur */}
      {isError && (
        <p className="text-red-500">
          Erreur : {error.message || "Impossible de récupérer le nombre"}
        </p>
      )}

      {/* État d'erreur de validation */}
      {validationError && <p className="text-red-500">{validationError}</p>}

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
