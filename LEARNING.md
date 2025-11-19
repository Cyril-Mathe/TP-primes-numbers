# 📚 Guide d'Apprentissage React - Projet Nombres Premiers

## 🎯 Objectifs du Projet

Ce projet enseigne les **concepts fondamentaux de React** à travers une application pratique :
- **Gestion d'état** avec Zustand
- **Requêtes asynchrones** avec React Query
- **Validation de données** avec Zod
- **Composants réutilisables** et hooks personnalisés
- **Structure et organisation** d'un projet professionnel

---

## 🏗️ Architecture du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Prime.jsx       # Affiche un nombre premier
│   └── ui/Button.jsx   # Bouton générique
├── hooks/              # Logique métier (custom hooks)
│   └── usePrimeAlea.jsx    # Récupère nombres aléatoires
├── pages/              # Pages principales
│   └── PrimesPage.jsx  # Page de gestion des nombres premiers
├── api/                # Appels réseau
│   └── fetchApi.js     # Récupère données de l'API
├── stores/             # Gestion d'état globale (Zustand)
│   └── usePrimeStore.js    # Store nombres premiers
├── schemas/            # Validation (Zod)
│   └── numberSchema.jsx # Schéma validation nombres
└── routes/             # Routage (React Router)
```

---

## 🔄 Flux de Données

```
Utilisateur saisit nombre
        ↓
PrimesPage.jsx (input)
        ↓
handleSubmitManual()
        ↓
numberSchema.parse() ← Validation Zod
        ↓
usePrimeStore.setNumber()
        ↓
Zustand met à jour isPrime
        ↓
UI réaffiche le composant
```

---

## 📖 Concepts Clés à Comprendre

### 1️⃣ **Zustand - Gestion d'État**

**Qu'est-ce que c'est ?** Un système de gestion d'état léger et simple.

**Fichier :** `src/stores/usePrimeStore.js`

```javascript
// Créer un store Zustand
create((set) => ({
  number: null,           // État initial
  isPrime: false,
  setNumber: (num) => set({ ... }) // Action pour mettre à jour l'état
}))
```

**À retenir :**
- `number` = état du nombre actuel
- `setNumber()` = fonction pour changer le nombre
- `isPrimeNumber()` = fonction utilitaire pour vérifier si premier

---

### 2️⃣ **React Query - Requêtes Asynchrones**

**Qu'est-ce que c'est ?** Gère les données du serveur (fetch, cache, refetch).

**Fichier :** `src/hooks/usePrimeAlea.jsx`

```javascript
useQuery({
  queryKey: ["primeNumber"],  // Clé unique pour le cache
  queryFn: fetchNumberAlea,   // Fonction qui récupère les données
  retry: 1,                   // Nombre de tentatives en cas d'erreur
})
```

**À retenir :**
- `queryKey` = identifiant unique (si on change, React Query pense que les données sont différentes)
- `queryFn` = fonction async qui fetch les données
- `data` = les données récupérées
- `isLoading` = booléen si en train de charger
- `isError` / `error` = gestion d'erreur

---

### 3️⃣ **Zod - Validation de Données**

**Qu'est-ce que c'est ?** Vérifie que les données reçues sont valides avant de les utiliser.

**Fichier :** `src/schemas/numberSchema.jsx`

```javascript
const numberSchema = z.object({
  number: z.number().min(1).max(50)
})
```

**À retenir :**
- `.min(1)` = le nombre minimum est 1
- `.max(50)` = le nombre maximum est 50
- `.parse()` = lève une erreur si les données ne correspondent pas
- `.safeParse()` = retourne {success: true/false} sans erreur

---

### 4️⃣ **Custom Hooks - Encapsuler la Logique**

**Qu'est-ce que c'est ?** Des fonctions React réutilisables qui partagent la logique.

**Fichier :** `src/hooks/usePrimeAlea.jsx`

```javascript
export function usePrimeAlea() {
  const query = useQuery({ ... })
  return {
    ...query,
    refetch: query.refetch  // Expose la fonction refetch
  }
}
```

**À retenir :**
- Un custom hook commence par `use`
- Il peut utiliser d'autres hooks (useQuery, useState, etc.)
- Il retourne l'état et les fonctions

---

### 5️⃣ **Composants React - Rendu Conditionnel**

**Qu'est-ce que c'est ?** Afficher différentes choses selon l'état.

**Fichier :** `src/pages/PrimesPage.jsx`

```javascript
{isLoading && <p>Chargement...</p>}
{isError && <p>Erreur : {error.message}</p>}
{validationError && <p>{validationError}</p>}
{number !== null && <p>Nombre : {number}</p>}
```

**À retenir :**
- `&&` = n'affiche que si la condition est vraie
- `? :` = affiche une chose ou une autre (ternaire)
- `||` = affiche si la première valeur est falsy

---

## 🎓 Exercices Progressifs

### Niveau 1 - Comprendre le flux

**Exercice 1.1 :** Trace le chemin d'un nombre
1. Ouvre DevTools (F12) → Console
2. Saisir un nombre dans le champ input
3. Observe les logs `console.log()` dans PrimesPage.jsx
4. **Comprendre :** Quand setNumber() est appelé ? Qu'affiche Zustand ?

**Exercice 1.2 :** Teste la validation
1. Saisir `99` dans le champ
2. Observe le message d'erreur
3. **Comprendre :** Où est validé le nombre ? Dans quel fichier ?

### Niveau 2 - Modifier le comportement

**Exercice 2.1 :** Changer la plage de nombres
1. Ouvre `src/schemas/numberSchema.jsx`
2. Change `.max(50)` en `.max(100)`
3. Teste si tu peux saisir `75`
4. **Résultat attendu :** Pas d'erreur, le nombre s'affiche
5. **Apprentissage :** Comment la validation affecte l'app entière

**Exercice 2.2 :** Modifier la génération aléatoire
1. Ouvre `src/api/fetchApi.js`
2. Change `Math.floor(Math.random() * 50) + 1` en `Math.floor(Math.random() * 1000) + 1`
3. Clique "Obtenir un nombre aléatoire" plusieurs fois
4. **Résultat attendu :** Erreur de validation (nombre > 100)
5. **Apprentissage :** L'API doit respecter le schema Zod

### Niveau 3 - Ajouter une fonctionnalité

**Exercice 3.1 :** Ajouter un historique des nombres

**Fichiers à modifier :**
1. `src/stores/usePrimeStore.js` — Ajouter `history: []` au store
2. `src/pages/PrimesPage.jsx` — Afficher l'historique

**Code à ajouter dans le store :**
```javascript
history: [],
addToHistory: (num) => set((state) => ({
  history: [...state.history, num]
}))
```

**Appeler dans PrimesPage.jsx :**
```javascript
const { setNumber, addToHistory } = usePrimeStore();

// Dans handleSubmitManual()
addToHistory(parsed);
```

**Résultat :** Liste des 5 derniers nombres testés

---

## 🔍 Bonnes Pratiques

### ✅ Faire

1. **Valider les données** — Toujours vérifier que les données reçues sont valides
2. **Séparer les responsabilités** — API dans `api/`, UI dans `pages/`, état dans `stores/`
3. **Réutiliser les hooks** — Encapsuler la logique dans des custom hooks
4. **Nommer clairement** — `usePrimeAlea`, `setNumber`, `handleSubmitManual`
5. **Commenter le code complexe** — Expliquer le "pourquoi", pas le "quoi"

### ❌ Ne pas faire

1. **State hell** — Trop d'états locaux (utiliser Zustand)
2. **Appels API directs** — Les faire toujours à travers des hooks (React Query)
3. **Valider après utilisation** — Valider AVANT de stocker les données
4. **Oublier gestion d'erreurs** — Toujours afficher les erreurs à l'utilisateur
5. **Fichiers trop gros** — Si > 200 lignes, diviser en plusieurs fichiers

---

## 🚀 Prochaines Étapes

### Défi 1 - Ajouter des statistiques
- Nombre total de nombres testés
- Pourcentage de nombres premiers
- Afficher dans une sidebar

### Défi 2 - Persistance
- Sauvegarder l'historique dans `localStorage`
- Récupérer au rechargement

### Défi 3 - Améliorer l'API
- Créer une vraie API (ex. Express.js)
- Retourner plus d'infos (factorisation, etc.)

### Défi 4 - Tests
- Écrire des tests pour `isPrimeNumber()`
- Tester la validation Zod

---

## 📚 Ressources

- **React :** https://react.dev
- **Zustand :** https://github.com/pmndrs/zustand
- **React Query :** https://tanstack.com/query
- **Zod :** https://zod.dev

---

## 💡 Résumé

Ce projet montre comment **faire une vraie app React** :
1. ✅ Récupérer des données (React Query)
2. ✅ Les valider (Zod)
3. ✅ Les stocker (Zustand)
4. ✅ Les afficher (Composants React)
5. ✅ Gérer les erreurs

**Ton mission :** Comprendre chaque partie, puis le modifier, puis créer ta propre app !
