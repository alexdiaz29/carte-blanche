import type { Order } from '@/types'

export const DEMO_ORDERS: Order[] = [
  {
    id: 'demo-order-1',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    restaurant_name: 'Le Comptoir du Marché',
    contact_name: 'Marie Lefebvre',
    email: 'marie@lecomptoirdumarche.fr',
    phone: '06 12 34 56 78',
    establishment_type: 'brasserie',
    main_goal: 'augmenter_ticket_moyen',
    menu_url: undefined,
    file_url: undefined,
    comment: "Notre carte a été refaite il y a 6 mois mais le ticket moyen n'a pas bougé. On aimerait aussi mieux vendre nos desserts maison.",
    payment_status: 'paid',
    order_status: 'delivered',
    delivered_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    report_content: `# Analyse de carte — Le Comptoir du Marché

---

## Résumé exécutif

Votre carte présente une structure solide avec de bons produits, mais souffre de **3 problèmes majeurs** qui freinent votre ticket moyen et l'attractivité de vos desserts. Les recommandations ci-dessous sont applicables en moins d'une semaine, sans changer vos recettes.

---

## 1. Diagnostic global

| Critère | Note | Commentaire |
|---|---|---|
| Structure générale | 6/10 | Trop de catégories, lecture complexe |
| Lisibilité prix | 5/10 | Alignement à droite crée de l'anxiété prix |
| Intitulés | 6/10 | Neutres — ne font pas envie |
| Mise en avant des best-sellers | 4/10 | Aucun plat ne ressort visuellement |
| Desserts | 3/10 | Placés en bas, sans description, invisibles |

---

## 2. Problèmes identifiés

### 🔴 Problème #1 — Carte trop longue (impact fort)
Vous proposez **38 références** au total. La recherche en comportement client montre qu'au-delà de 7 choix par catégorie, le client subit un "paradoxe du choix" et commande le moins cher ou le plus connu. Réduire à 22-24 références augmente mécaniquement le ticket moyen.

**Symptômes observés :**
- 6 entrées, 14 plats, 8 desserts, 10 boissons
- Des doublons implicites (2 tartares, 3 salades composées)

### 🔴 Problème #2 — Aucun plat vedette identifié (impact fort)
Aucun plat n'est mis en avant visuellement ou textuellement. Le client n'a pas de point d'accroche. Sans "signature", il revient au réflexe prix.

### 🟠 Problème #3 — Desserts sans description (impact moyen)
Vos desserts sont listés avec uniquement leur nom ("Tarte tatin", "Crème brûlée"). Sans description ni ancrage émotionnel, ils sont perçus comme basiques. Le serveur doit compenser verbalement — ce qui ne fonctionne pas à plein service.

### 🟡 Problème #4 — Alignement des prix à droite (impact moyen)
Cette mise en page classique pousse l'œil à comparer les prix verticalement avant de lire les intitulés. Résultat : le client choisit "pas trop cher" plutôt que "ce qui me fait envie".

---

## 3. Recommandations par catégorie

### Entrées (actuellement 6 → recommandé : 4)
- Supprimer les 2 salades composées les moins commandées
- Renommer : "Velouté de saison" → **"Velouté de butternut rôti, crème épaisse et noisettes torréfiées"**
- Renommer : "Planche charcuterie" → **"Planche du Comptoir — sélection maison"**

### Plats (actuellement 14 → recommandé : 8)
- Identifier votre plat signature et l'encadrer ou le marquer ✦ dans la carte
- Regrouper les deux tartares en un seul (le meilleur) avec une description développée
- Renommer : "Filet de bœuf" → **"Filet de bœuf maturé 30 jours, jus corsé et pommes sarladaises"**

### Desserts (actuellement 8 → recommandé : 5 avec descriptions)
C'est votre levier de conversion le plus simple. Exemple de réécriture :

| Avant | Après |
|---|---|
| Tarte tatin | Tarte tatin tiède, caramel beurre salé, crème fraîche fermière |
| Crème brûlée | Crème brûlée vanille Bourbon, sucre caramélisé à la flamme |
| Fondant chocolat | Fondant chocolat Valrhona, cœur coulant, glace vanille maison |

---

## 4. Recommandations pricing

- **Ancrage haut** : Ajouter 1 plat à 28-32 € (poisson noble, viande de qualité) — il ne vendra pas forcément, mais il fait paraître vos 18-22 € comme raisonnables.
- **Formule déjeuner visible** : Si vous en avez une, la mettre en première page ou en encart couleur. La formule doit se voir en moins de 3 secondes.
- **Arrondir les prix impairs** : 17,50 € → 18 €. Les prix arrondis inspirent plus confiance.

---

## 5. Plan d'actions priorisé

| Priorité | Action | Effort | Impact |
|---|---|---|---|
| 1 | Réécrire les 5 descriptions de desserts | 1h | ⭐⭐⭐⭐⭐ |
| 2 | Réduire à 8 plats, identifier le plat signature | 2h | ⭐⭐⭐⭐ |
| 3 | Réécrire 4-6 intitulés clés (entrées + plats) | 1h | ⭐⭐⭐⭐ |
| 4 | Intégrer un ancrage prix haut | 30min | ⭐⭐⭐ |
| 5 | Revoir l'alignement des prix (supprimer la colonne prix à droite) | 30min | ⭐⭐⭐ |

---

*Rapport Carte Blanche — Livré le ${new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleDateString('fr-FR')}*`,
  },
  {
    id: 'demo-order-2',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
    restaurant_name: 'Pizza Napoli Express',
    contact_name: 'Karim Benali',
    email: 'karim@pizzanapoli.fr',
    phone: '07 65 43 21 09',
    establishment_type: 'pizzeria',
    main_goal: 'simplifier_carte',
    menu_url: 'https://pizzanapoli.fr/carte',
    file_url: undefined,
    comment: 'On a trop de pizzas et les clients mettent 10 minutes à choisir. Les extras ne se vendent pas non plus.',
    payment_status: 'paid',
    order_status: 'processing',
    delivered_at: undefined,
    report_content: `# Analyse de carte — Pizza Napoli Express

---

## Résumé exécutif

Votre diagnostic est correct : **trop de choix tue le choix**. Avec 27 pizzas, vos clients entrent en surcharge cognitive et finissent par commander la Margherita ou la 4 fromages par réflexe. Les recommandations ci-dessous visent à simplifier radicalement la carte tout en maintenant la perception de variété — et à activer vos extras, actuellement quasi invisibles.

---

## 1. Diagnostic global

| Critère | Note | Commentaire |
|---|---|---|
| Nombre de références | 3/10 | 27 pizzas = paralysie du choix |
| Lisibilité | 5/10 | Dense, peu aéré |
| Extras / options | 4/10 | Mal positionnés, pas mis en valeur |
| Intitulés | 6/10 | Corrects mais peu évocateurs |
| Structure de prix | 7/10 | Cohérent, bon échelonnage |

---

## 2. Problèmes identifiés

### 🔴 Problème #1 — 27 pizzas, c'est 15 de trop (impact fort)
Études comportementales en restauration rapide : au-delà de 12 références dans une catégorie, le taux de satisfaction client **baisse** (sentiment d'avoir mal choisi). Vous perdez aussi en efficacité cuisine avec autant de références.

### 🔴 Problème #2 — Les extras sont en bas de page, en petit (impact fort)
Supplément jambon cru, œuf, burrata — ces extras à 1,50-3 € peuvent représenter 10-15% du CA si bien présentés. Actuellement, moins de 10% des clients les voient avant de commander.

### 🟠 Problème #3 — Aucune pizza "signature" identifiée (impact moyen)
Toutes vos pizzas sont au même niveau visuel. Aucune ne se démarque comme votre création maison, votre best-seller, votre fierté. Les clients ne savent pas quoi commander "de chez vous".

---

## 3. Recommandations

### Structure de carte recommandée (12 pizzas)

**LES CLASSIQUES** (4 pizzas)
- Margherita, 4 Fromages, Reine, Végétarienne

**LES NAPOLI** — vos créations signature (5 pizzas)
- Vos 5 meilleures pizzas maison, présentées comme votre identité

**LA CARTE BLANCHE** (3 pizzas)
- 3 pizzas créatives, renouvelées selon les saisons — crée de l'anticipation et de la raison de revenir

### Extras — repositionnement

Sortir les extras de leur cache en bas de page. Les intégrer dans un encart visuel au moment de la commande :

> **Personnalisez votre pizza**
> + Jambon cru San Daniele · 2,50 €
> + Burrata fraîche · 3,00 €
> + Œuf fermier · 1,00 €
> + Supplément fromage · 1,50 €

Objectif : passer de ~8% à 25-30% de taux d'ajout d'extras.

---

## 4. Réécriture d'intitulés (exemples)

| Avant | Après |
|---|---|
| Pizza chèvre miel | **La Berger** — chèvre frais, miel de lavande, noix |
| Pizza saumon | **La Nordique** — saumon fumé, crème citronnée, câpres, aneth |
| Pizza 4 saisons | **La 4 Saisons** — jambon, champignons, artichaut, olives noires |

---

## 5. Plan d'actions priorisé

| Priorité | Action | Effort | Impact |
|---|---|---|---|
| 1 | Réduire à 12 pizzas, identifier les 5 signatures | 2h | ⭐⭐⭐⭐⭐ |
| 2 | Repositionner les extras en encart visible | 1h | ⭐⭐⭐⭐⭐ |
| 3 | Renommer 5-6 pizzas avec des noms évocateurs | 1h | ⭐⭐⭐⭐ |
| 4 | Créer le concept "Carte Blanche" saisonnière | 1h | ⭐⭐⭐ |

---

*Rapport Carte Blanche — En cours de finalisation*`,
  },
]
