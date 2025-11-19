import { create } from "zustand";

// Fonction pour vérifier si un nombre est premier
const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

export default create((set) => ({
  number: null,
  isPrime: false,
  setNumber: (num) =>
    set({
      number: num,
      isPrime: isPrimeNumber(num),
    }),
}));