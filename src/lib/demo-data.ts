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

## 1. Verdict en 5 lignes

Votre carte a trop de références pour guider le client — elle donne le choix, mais ne donne pas envie. Le principal frein au ticket moyen, c'est que rien ne se démarque : ni plat, ni dessert, ni formule. Le client compare les prix plutôt que de se laisser guider. Le levier prioritaire, c'est de réduire la carte et de mettre en scène les plats les plus forts, notamment les desserts que vous dites faire maison mais qui ne sont décrits nulle part. L'action la plus importante à faire en premier : écrire une description courte pour chaque dessert, dès cette semaine.

---

## 2. Ce qui bloque le ticket moyen

### Problème 1 — Trop de plats, pas assez de mise en avant

**Constat :** La carte présente 14 plats dans la même section, sans hiérarchie visuelle. Aucun plat n'est mis en avant — ni par une encadré, ni par un texte, ni par une position différente.
**Impact :** Le client revient vers le prix comme seul critère de choix. Les plats à plus forte valeur perçue sont noyés dans la liste.
**Correction recommandée :** Identifier vos 2 meilleurs plats (en termes de marge ou de retour client) et les placer en premier dans la section, avec une courte description de 1 à 2 lignes. Ajouter un symbole visuel discret — une étoile, un encadré fin, ou la mention "Recommandé" suffit.

### Problème 2 — Les desserts existent mais sont invisibles

**Constat :** 8 desserts listés sous forme de noms seuls. Aucune description. Vous indiquez qu'ils sont faits maison dans votre commentaire, mais ce n'est écrit nulle part sur la carte.
**Impact :** Le client ne sait pas ce qu'il va avoir. Sans description, un dessert à 7 € semble cher comparé à un dessert acheté ailleurs. Le taux de prise des desserts est structurellement bas avec ce format.
**Correction recommandée :** Ajouter une ligne descriptive sous chaque dessert. La mention "maison" ou "fait ici" doit être visible. Voir section 5 pour les textes prêts à intégrer.

### Problème 3 — La formule déjeuner est introuvable

**Constat :** La formule est mentionnée en bas de page, en petits caractères, après les boissons.
**Impact :** Le client qui cherche une formule — souvent la majorité au déjeuner — ne la trouve pas en moins de 5 secondes et finit par commander à la carte, parfois un plat seul moins rentable pour vous.
**Correction recommandée :** Placer la formule en tête de carte, dans un encadré ou une section dédiée. Elle doit être visible avant même que le client commence à lire les plats.

### Problème 4 — Des prix proches sur des plats sans lien visible

**Constat :** Deux plats à base de viande sont proposés à 17 € et 24 €, sans que la description justifie l'écart. Le client ne comprend pas pourquoi payer plus.
**Impact :** Méfiance. Le client prend le moins cher par défaut ou hésite, ce qui ralentit la décision et nuit à l'expérience.
**Correction recommandée :** Ajouter une description courte au plat à 24 € qui justifie la différence (type de viande, cuisson, accompagnement — à confirmer selon vos produits réels). Si l'écart n'est pas justifiable, réévaluer le prix du plat à 17 €.

---

## 3. Les changements prêts à copier-coller

**Note : les descriptions ci-dessous sont des suggestions de forme. Adaptez le contenu exact à vos ingrédients réels avant d'imprimer.**

| Élément actuel | Nouvelle version recommandée | Pourquoi |
|---|---|---|
| Velouté de saison | Velouté du moment — à confirmer avec vos ingrédients du jour | Crée de l'anticipation et montre que c'est vivant |
| Planche charcuterie | Planche du Comptoir — sélection du maison *(à préciser selon contenu réel)* | "Du Comptoir" ancre l'identité du lieu |
| Pavé de bœuf | Pavé de bœuf, sauce au choix, accompagnement du jour — *à compléter selon vos produits* | Donne de la matière sans inventer |
| Tarte tatin | Tarte tatin tiède, caramel maison *(à utiliser uniquement si le caramel est fait ici)* | "Tiède" et "maison" justifient le prix |
| Crème brûlée | Crème brûlée maison, caramel à la flamme *(à utiliser si c'est exact)* | Le procédé visible rassure et valorise |
| Moelleux chocolat | Moelleux chocolat du moment, cœur fondant *(à confirmer)* | "Du moment" laisse de la souplesse |
| Café gourmand | Café gourmand — café + 3 mignardises maison *(à adapter selon ce que vous servez)* | Concret, ça vend mieux qu'un mot seul |

---

## 4. Plat signature recommandé

**Plat recommandé :** Le plat à 24 € (viande) — à condition de pouvoir le décrire correctement.
**Pourquoi :** C'est le prix le plus haut de la carte en plats. Il peut servir d'ancrage. Si le client le voit décrit avec soin en premier, les autres plats à 16-18 € semblent accessibles.
**Mise en avant :** Le placer en tête de la section plats, dans un encadré léger ou avec la mention "Notre pièce maîtresse" ou "Recommandé".
**Texte prêt à intégrer (à adapter) :**
> ✦ *[Nom du plat]* — [type de viande], [cuisson], [accompagnement]. Notre valeur sûre.

Si ce plat ne peut pas être décrit correctement, choisissez le plat avec le retour client le plus constant et appliquez la même logique.

---

## 5. Desserts : plan pour vendre plus

Les desserts sont votre principal levier inexploité. Vous dites qu'ils sont faits maison — c'est un argument fort qui n'apparaît nulle part sur la carte.

**À faire :**

Ajouter la mention "Maison" ou "Fait ici" visible dans la section desserts — pas seulement sur chaque item, mais en titre de section. Exemple :
> **Nos desserts — faits maison**

Placer le dessert le plus différenciant en premier (celui que vous vendez le mieux ou celui qui se distingue le plus).

Ajouter un court encart en bas de la section desserts :
> *Notre conseil : dessert + café à [prix] € — demandez à votre serveur*

**Textes prêts à intégrer (à adapter selon vos produits réels) :**
- Tarte tatin : *"Servie tiède, caramel préparé ici"* — si c'est exact
- Crème brûlée : *"Caramel à la flamme, servi à la commande"* — si c'est exact
- Moelleux : *"Cœur fondant, à partager ou pas"*
- Dessert du jour : *"Demandez à votre serveur — ça change souvent"*

---

## 6. Actions concrètes pour augmenter le ticket moyen

| Action | Exemple précis | Effort | Impact attendu |
|---|---|---|---|
| Réécrire les intitulés desserts avec "maison" | "Tarte tatin maison, servie tiède" | 30 min | Hausse du taux de prise des desserts |
| Mettre la formule déjeuner en haut de carte | Encadré en première position, avant les entrées | 15 min | Plus de formules commandées, service plus fluide |
| Identifier 1 plat signature et le mettre en avant | Encadré ✦ sur le plat à 24 €, avec description courte | 30 min | Ancrage prix, hausse perçue de la qualité |
| Ajouter une suggestion café + dessert | Encart en bas de la section desserts | 10 min | Augmentation mécanique du ticket par table |
| Réduire les plats à 8-9 références | Retirer les plats les moins identitaires *(sans données de vente : tester la suppression temporaire)* | 1h | Décision plus rapide, moins de comparaison de prix |

---

## 7. Pricing et présentation des prix

- Deux plats très proches en description avec 7 € d'écart : cela crée de la méfiance. Soit vous justifiez l'écart par une description, soit vous réévaluez les prix.
- Si les prix sont alignés à droite dans une colonne séparée, le client les compare verticalement avant de lire les plats. Préférez les prix intégrés à la fin de la description, moins anxiogènes.
- Votre dessert le plus cher est à 7,50 €. Arrondir à 7 € ou 8 € selon ce qui correspond à votre positionnement — les prix en virgule-cinquante sur les desserts semblent peu soignés.
- La formule doit afficher clairement l'économie réalisée si elle existe : *"Entrée + Plat + Dessert — au lieu de [X] €, formule à [Y] €"*.

---

## 8. Nouvelle organisation recommandée de la carte

1. **Formule déjeuner** ← encadré visible, en haut, avant tout le reste
2. **Entrées** ← maximum 5, la plus forte en premier
3. **Nos plats** ← 8 maximum, plat signature encadré en tête
4. **Nos desserts — faits maison** ← titre clair, descriptions sur chaque item
5. **Boissons** ← à la fin, avec suggestion d'accord si possible

Ce qui doit être **encadré** : formule + plat signature.
Ce qui doit être **réduit** : plats (14 → 8), desserts (8 → 5-6 avec descriptions).
Ce qui doit être **déplacé** : formule déjeuner, de bas de page en haut de carte.

---

## 9. Phrases serveur prêtes à utiliser

- *"Nos desserts sont faits maison ici — la tarte tatin est notre best-seller, vous voulez que je vous la conseille ?"*
- *"On a une formule déjeuner à [prix] € qui inclut le dessert — ça vous intéresse ?"*
- *"Si vous hésitez entre les deux viandes, le [nom du plat signature] est notre référence."*
- *"Vous prenez un café ? On peut y ajouter un dessert maison pour [prix] €."*
- *"Le dessert du jour aujourd'hui c'est [X] — c'est fait ce matin."*

---

## 10. Plan d'action sur 7 jours

| Jour | Action | Objectif |
|---|---|---|
| Jour 1 | Réécrire les 5-6 intitulés desserts avec description courte + mention maison | Augmenter le taux de prise des desserts |
| Jour 2 | Déplacer la formule déjeuner en tête de carte dans un encadré | Capter les clients formule dès la première lecture |
| Jour 3 | Choisir le plat signature et l'encadrer avec une description | Créer un ancrage et simplifier la décision |
| Jour 4 | Réduire à 8-9 plats *(retirer les moins identitaires — test temporaire si aucune donnée de vente)* | Réduire la paralysie du choix |
| Jour 5 | Briefer l'équipe en salle sur les 5 phrases de vente | Activer la vente additionnelle desserts et formules |
| Jour 6 | Mettre en service la nouvelle carte | Premier test réel |
| Jour 7 | Observer : combien de desserts vendus ? Combien de formules ? Ticket moyen en hausse ? | Mesurer l'impact et ajuster |

---

## 11. Résumé final

**Les 3 changements prioritaires :**
1. Écrire une description courte sur chaque dessert + ajouter "maison" visible dans le titre de section
2. Remonter la formule déjeuner en tête de carte
3. Identifier et encadrer un plat signature avec une description courte

**Ce que vous pouvez attendre :** un service plus fluide, moins d'hésitation, et un taux de commande des desserts structurellement plus élevé. Sans données de vente actuelles, il est impossible de quantifier précisément — mais ces changements ont un impact direct sur la décision du client.

**La première action à faire dès demain :** ouvrez votre carte, trouvez la section desserts, et écrivez une ligne sous chaque dessert. 30 minutes. C'est le changement le plus rapide avec le plus d'impact.

---

*Rapport Carte Blanche — ${new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleDateString('fr-FR')}*`,
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
    comment: "On a trop de pizzas et les clients mettent 10 minutes à choisir. Les extras ne se vendent pas non plus.",
    payment_status: 'paid',
    order_status: 'processing',
    delivered_at: undefined,
    report_content: `# Analyse de carte — Pizza Napoli Express

---

## 1. Verdict en 5 lignes

27 pizzas, c'est trop. Le problème n'est pas la qualité de vos produits — c'est que la carte ne guide pas le client. Résultat : il commande ce qu'il connaît déjà (Margherita, 4 fromages) ou ce qui coûte le moins cher. Vos extras sont en bas de carte, en petits caractères, et personne ne les voit avant de commander. Le levier prioritaire : réduire à 12-14 pizzas et repositionner les extras en suggestion active plutôt qu'en liste cachée. L'action la plus urgente : simplifier la structure de la carte cette semaine.

---

## 2. Ce qui bloque le ticket moyen

### Problème 1 — 27 pizzas = paralysie du choix

**Constat :** 27 pizzas dans la même section, sans sous-catégories, sans mise en avant. Le client doit tout lire pour décider.
**Impact :** Au-delà de 12 références dans une catégorie unique, le taux de satisfaction baisse et le client se replie sur le choix le plus sûr — généralement le moins cher. Vous perdez aussi en lisibilité sur les pizzas à plus forte valeur perçue.
**Correction recommandée :** Réduire à 12-14 pizzas maximum, organisées en 2-3 sous-groupes (Classiques / Créations maison / Végétariennes par exemple). Sans données de vente, procédez par test : retirez temporairement les 10 pizzas que vous estimez les moins demandées. Observez sur 2 semaines.

### Problème 2 — Les extras sont invisibles

**Constat :** Les suppléments (jambon, œuf, anchois, fromage supplémentaire, etc.) apparaissent en bas de carte, après les boissons, sans mise en avant.
**Impact :** Moins de 15% des clients les voient avant de commander. C'est du chiffre d'affaires perdu à chaque commande.
**Correction recommandée :** Intégrer un encart "Personnalisez votre pizza" juste après la liste des pizzas, avec les extras les plus courants et leur prix. Le client doit le voir avant de fermer la carte.

### Problème 3 — Aucune pizza identitaire

**Constat :** Toutes les pizzas ont le même poids visuel. Il n'y a pas de "pizza du chef", de "création maison", de "signature Napoli". Rien ne dit au client ce qui est propre à votre établissement.
**Impact :** Vous êtes perçu comme une pizzeria standard. Le client n'a pas de raison de revenir pour "votre" pizza en particulier.
**Correction recommandée :** Choisir 1 à 3 pizzas que vous revendiquez comme vos créations et les distinguer clairement — voir section 4.

### Problème 4 — Les boissons ne jouent pas leur rôle

**Constat :** Les boissons sont listées sans suggestion d'accord ni mise en valeur. Aucune boisson n'est présentée comme un accompagnement naturel.
**Impact :** Les clients commandent souvent une boisson par défaut (eau, Coca) sans que la carte ait proposé autre chose.
**Correction recommandée :** Ajouter une boisson "accord maison" ou une suggestion simple du type *"Accompagné d'une bière artisanale ou d'un verre de rouge — demandez à la commande"* — à adapter selon ce que vous proposez réellement.

---

## 3. Les changements prêts à copier-coller

**Note : ne modifier les intitulés qu'avec les ingrédients réellement présents dans vos recettes.**

| Élément actuel | Nouvelle version recommandée | Pourquoi |
|---|---|---|
| Margherita | Margherita — tomate, mozzarella *(à compléter si d'autres ingrédients)* | Préciser rassure le client sur ce qu'il reçoit |
| 4 fromages | 4 Fromages — *(lister les 4 fromages réels)* | Nommer les fromages justifie le prix et valorise |
| Pizza végétarienne | Pizza du jardin — *(lister les légumes présents)* | Plus évocateur, moins générique |
| Pizza au saumon | Pizza saumon — *(ajouter sauce, garniture réelles)* | "Saumon" seul ne suffit pas à 13-14 € |
| Suppléments (liste bas de page) | **Encart : Personnalisez votre pizza** / + [Ingrédient] [Prix] / + [Ingrédient] [Prix] | Visible avant la commande = taux d'ajout x3 |
| Desserts (liste seule) | *(Ajouter 1 ligne descriptive sous chaque dessert — voir section 5)* | Sans description, pas de décision |

---

## 4. Plat signature recommandé

**Plat recommandé :** La pizza au prix le plus élevé de votre carte (ou celle avec les ingrédients les plus distincts).
**Pourquoi :** Elle peut jouer un rôle d'ancrage prix. Si le client la voit en premier avec une description soignée, les pizzas à 10-12 € semblent raisonnables.
**Mise en avant :** Créer une sous-section "Notre signature" ou "La Napoli" avec 1 à 3 pizzas présentées différemment des autres.
**Texte prêt à intégrer (à adapter avec vos ingrédients réels) :**

> ✦ **[Nom de la pizza]** — Notre création. [Décrire les ingrédients réels]. Disponible en [taille(s)].

Si aucune pizza ne se démarque suffisamment, créez une "Pizza du moment" qui change chaque semaine — elle n'a pas besoin d'être sur la carte imprimée, elle peut être sur un tableau ou annoncée verbalement.

---

## 5. Desserts : plan pour vendre plus

**Constat :** Les desserts sont listés sans description. Sans description, un dessert à 5-6 € semble cher pour un client qui ne sait pas ce qu'il va recevoir.

**À faire immédiatement :**

Ajouter une ligne descriptive sous chaque dessert. Exemples de format (à adapter selon vos produits réels) :
- Tiramisu : *"Préparation maison *(à confirmer)*, servi en verrine"*
- Fondant chocolat : *"Cœur fondant, servi tiède *(à utiliser si c'est exact)*"*
- Panna cotta : *"Sauce [saveur réelle], *(à compléter)*"*

**Suggestion café + dessert :**
Ajouter un encart simple en bas de la section desserts :
> *Café + dessert — [prix] € / Demandez à la caisse*

**Position :** Le dessert avec la meilleure description doit être listé en premier.

---

## 6. Actions concrètes pour augmenter le ticket moyen

| Action | Exemple précis | Effort | Impact attendu |
|---|---|---|---|
| Créer l'encart "Personnalisez votre pizza" avec extras visibles | Juste après la liste des pizzas, avant les boissons | 20 min | Hausse immédiate du taux d'ajout d'extras |
| Réduire à 12-14 pizzas en sous-groupes | Classiques / Nos créations / Végétariennes | 1h | Décision plus rapide, commande plus confiante |
| Identifier 1-3 pizzas signatures avec description | Sous-section "Notre signature" ou "La Napoli" | 30 min | Différenciation, ancrage prix |
| Ajouter description courte sur chaque dessert | 1 ligne par dessert *(avec ingrédients réels uniquement)* | 20 min | Hausse du taux de commande desserts |
| Suggérer café + dessert en encart | "Café + dessert — [prix] €" à la fin de la section desserts | 10 min | Ticket moyen en hausse par table |

---

## 7. Pricing et présentation des prix

- Si les pizzas sont listées avec le prix dans une colonne à droite, le client compare les prix verticalement avant de lire les noms. Intégrez le prix à la fin du nom ou de la description.
- Vérifiez les arrondis : des prix comme 11,50 € ou 13,50 € semblent peu soignés sur une carte pizza. Préférez 11 €, 12 €, 13 € ou 14 €.
- Si vous avez des pizzas en deux tailles (individuelle / partagée), indiquez les deux prix côte à côte : *"12 € / 19 €"* — cela simplifie la lecture et évite les questions.
- Ne créez pas un ancrage prix élevé artificiel si vos pizzas les plus chères sont à 14-15 €. Un plat à 22 € dans ce contexte serait perçu comme incohérent. Restez dans la logique de votre positionnement.

---

## 8. Nouvelle organisation recommandée de la carte

1. **Nos pizzas**
   - Classiques ← 4-5 références bien connues
   - Nos créations / La Napoli ← 4-5 pizzas signature avec descriptions
   - Végétariennes ← 2-3 références claires
2. **Personnalisez votre pizza** ← encart suppléments visible
3. **Desserts** ← avec descriptions, le meilleur en premier
4. **Boissons** ← avec 1 suggestion d'accord si possible
5. **Formule / Menu** ← si vous en avez une, encadré visible en haut ou en première page

Ce qui doit être **encadré** : suppléments + pizzas signatures.
Ce qui doit être **supprimé ou regroupé** : les doublons implicites (2 pizzas très proches).
Ce qui doit être **déplacé** : suppléments de bas de page vers après la liste pizzas.

---

## 9. Phrases serveur / caisse prêtes à utiliser

- *"On peut personnaliser votre pizza — un supplément fromage ou jambon, ça vous tente ?"*
- *"Notre [nom de la pizza signature] c'est notre spécialité, vous pouvez y aller les yeux fermés."*
- *"Vous prenez un dessert ? Le tiramisu *(ou le dessert de votre choix)* est fait ici."*
- *"Un café avec votre dessert ? C'est [prix] € pour les deux."*
- *"Si vous hésitez entre deux pizzas, dites-moi — je peux vous aider à choisir selon ce que vous aimez."*

---

## 10. Plan d'action sur 7 jours

| Jour | Action | Objectif |
|---|---|---|
| Jour 1 | Créer l'encart extras "Personnalisez votre pizza" | Activer les suppléments immédiatement |
| Jour 2 | Réduire à 12-14 pizzas, créer 2-3 sous-groupes | Simplifier la lecture, réduire le temps de décision |
| Jour 3 | Choisir et mettre en avant 1-3 pizzas signatures avec description | Différenciation, ancrage |
| Jour 4 | Ajouter descriptions courtes sur les desserts | Augmenter le taux de commande desserts |
| Jour 5 | Mettre en place la suggestion café + dessert | Ticket moyen en hausse |
| Jour 6 | Briefer l'équipe caisse/salle sur les 5 phrases de vente | Vente additionnelle active |
| Jour 7 | Observer : suppléments commandés ? Desserts ? Quelle pizza en tête ? | Mesurer l'impact et arbitrer |

---

## 11. Résumé final

**Les 3 changements prioritaires :**
1. Créer l'encart "Personnalisez votre pizza" avec les extras visibles — c'est votre levier le plus rapide
2. Réduire à 12-14 pizzas en sous-groupes clairs — simplifier, c'est vendre mieux
3. Ajouter une description courte à chaque dessert + suggestion café + dessert en encart

**Ce que vous pouvez attendre :** des clients qui décident plus vite, qui voient les suppléments avant de commander, et un taux de dessert structurellement plus élevé. Sans données de vente de référence, il est impossible de promettre un chiffre précis — mais ces changements agissent directement sur le comportement d'achat.

**La première action à faire dès demain :** créer l'encart suppléments. 20 minutes. Vous le mettez juste après la liste des pizzas. C'est le changement le plus rapide avec l'impact le plus direct sur le ticket moyen.

---

*Rapport Carte Blanche — En cours de finalisation*`,
  },
]
