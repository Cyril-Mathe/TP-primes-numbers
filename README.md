<!-- readme -->
# 🔢 Nombres Premiers - Projet Éducatif React

Un projet complet pour **apprendre React**, la **gestion d'état**, les **requêtes API** et les **bonnes pratiques**.

## 🎯 Fonctionnalités

✅ Vérifier si un nombre est premier  
✅ Génération aléatoire de nombres (1-50)  
✅ Saisie manuelle avec validation  
✅ Gestion d'erreurs intuitive  
✅ Architecture moderne et scalable  

## 🛠️ Stack Technique

- **React 19** — Librairie UI
- **Vite** — Bundler (fast dev server)
- **Zustand** — Gestion d'état léger
- **React Query** — Gestion des données du serveur
- **Zod** — Validation stricte des données
- **TanStack Router** — Routage
- **Tailwind CSS** — Styling
- **ESLint** — Qualité du code

## Auteurs 🙇 :

- ### Ousmane : [@GitHub](https://github.com/ENAK221)  
- ### Cyril : [@GitHub](https://github.com/Cyril-Mathe) 

## 📁 Structure du Projet

```
src/
├── api/              # Appels API/réseau
├── components/       # Composants réutilisables
├── hooks/            # Custom hooks (logique métier)
├── pages/            # Pages principales
├── routes/           # Configuration routage
├── schemas/          # Schémas de validation (Zod)
├── stores/           # État global (Zustand)
├── App.jsx           # Composant racine
└── main.jsx          # Point d'entrée
```

## 🚀 Démarrer

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvre http://localhost:5173 dans ton navigateur.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## 📚 Apprendre React

**Ce projet est fait pour APPRENDRE !**

Consulte [`LEARNING.md`](./LEARNING.md) pour :
- 📖 Explications des concepts clés
- 🎓 Exercices progressifs (Niveau 1, 2, 3)
- 🔍 Bonnes pratiques React
- 💡 Défis à relever

## 🔄 Flux de l'Application

```
User Input (nombre)
      ↓
Validation (Zod)
      ↓
Store (Zustand) → isPrime = true/false
      ↓
UI réaffiche le composant
```

## 🎓 Concepts Expliqués

### Zustand (État Global)
Stocke le nombre actuel et si c'est un nombre premier.

### React Query
Récupère les nombres aléatoires et gère le cache.

### Zod
Valide que le nombre est un entier entre 1 et 50.

### Custom Hooks
`usePrimeAlea()` encapsule la logique de récupération de nombres.

## 🐛 Dépannage

### "Too big: expected number to be <=50"
Le nombre saisi/généré dépasse 50. Modifie `numberSchema.jsx` pour augmenter la limite.

### Erreur "Cannot read property 'number'"
Vérifie que `fetchApi.js` retourne bien `{ number: ... }`.

### L'app ne réactualise pas
Assure-toi que `setNumber()` est appelé depuis `usePrimeStore()`.

## 📝 Exercices

Voir [`LEARNING.md`](./LEARNING.md) pour les exercices progressifs.

## 📖 Ressources

- [React Documentation](https://react.dev)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Query](https://tanstack.com/query)
- [Zod](https://zod.dev)
- [Vite](https://vitejs.dev)