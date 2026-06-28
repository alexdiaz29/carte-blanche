import type { Order } from '@/types'

export interface ReportSection {
  title: string
  content: string
}

export interface AnalysisReport {
  sections: ReportSection[]
  generatedAt: string
  isAiGenerated: boolean
}

const MOCK_REPORT: ReportSection[] = [
  {
    title: '1. Verdict en 5 lignes',
    content: `Votre carte ne guide pas suffisamment le client vers les choix les plus rémunérateurs. Elle présente les plats, mais ne les vend pas. Le client compare les prix au lieu de se laisser porter par l'envie. Le levier prioritaire est de mettre en scène vos plats forts et vos desserts, et de réduire le nombre de références pour simplifier la décision. L'action la plus importante à faire en premier : identifier votre plat signature et lui donner une place et une description qui lui correspondent.`,
  },
  {
    title: '2. Ce qui bloque le ticket moyen',
    content: `### Problème 1 — Trop de choix, pas de hiérarchie

**Constat :** Plusieurs catégories dépassent 7 références sans sous-groupes ni mise en avant. Le client doit tout lire pour décider.
**Impact :** Paralysie du choix. Le client se replie sur ce qu'il connaît ou sur le moins cher.
**Correction recommandée :** Réduire à 5-7 items par catégorie. Sans données de vente, tester la suppression temporaire des références les moins identitaires.

### Problème 2 — Desserts sous-valorisés

**Constat :** Les desserts sont listés sans description. Aucun élément ne justifie le prix ni ne donne envie.
**Impact :** Taux de prise des desserts structurellement bas. Le client perçoit 6-7 € comme cher pour un inconnu.
**Correction recommandée :** Ajouter une ligne descriptive sous chaque dessert avec les éléments réellement présents. Ajouter la mention "maison" uniquement si c'est exact.

### Problème 3 — Aucun plat signature identifiable

**Constat :** Tous les plats ont le même poids visuel. Rien ne se distingue comme votre référence, votre fierté, votre identité.
**Impact :** Le client n'a pas de point d'ancrage. Il choisit au prix plutôt qu'à l'envie.
**Correction recommandée :** Choisir 1 plat à mettre en avant avec description courte et position prioritaire dans sa catégorie.

### Problème 4 — Ventes additionnelles absentes

**Constat :** Pas de suggestion de suppléments, d'accompagnements ou d'accords visibles sur la carte.
**Impact :** Le client ne pense pas à ajouter — personne ne lui propose.
**Correction recommandée :** Ajouter un encart simple avec 2-3 suggestions d'extras ou d'accompagnements, positionné après les plats principaux.`,
  },
  {
    title: '3. Les changements prêts à copier-coller',
    content: `**Important : n'utiliser les versions enrichies qu'avec les ingrédients réellement présents dans vos recettes.**

| Élément actuel | Nouvelle version recommandée | Pourquoi |
|---|---|---|
| Salade verte | Salade du moment *(à compléter avec les éléments réels)* | Plus vivant, plus identitaire |
| Plat du jour | Suggestion du jour — demandez à votre serveur | Crée de l'anticipation et une interaction |
| Dessert du jour | Dessert maison du moment *(à utiliser si fait ici)* | "Maison" justifie le prix sans inventer |
| Steak / Viande | *(Nom) — ajouter le grammage et la cuisson proposée* | Concret, rassure, valorise |
| Formule midi | Formule du midi — Entrée + Plat ou Plat + Dessert *(à adapter)* | Plus clair, plus rapide à lire |

Pour chaque plat de votre carte que vous souhaitez valoriser : ajoutez le type exact de produit, le mode de cuisson et l'accompagnement réel. Ce sont les 3 éléments qui font passer un intitulé neutre à un intitulé qui vend.`,
  },
  {
    title: '4. Plat signature recommandé',
    content: `**Plat recommandé :** Le plat au prix le plus élevé de votre carte — ou celui qui vous représente le mieux.
**Pourquoi :** Un plat premium bien décrit en tête de catégorie crée un ancrage. Les autres plats semblent alors accessibles par comparaison.
**Mise en avant :** Première position dans sa catégorie + encadré léger ou symbole ✦ + description courte de 1 à 2 lignes.
**Texte prêt à intégrer (à adapter avec vos ingrédients réels) :**

> ✦ **[Nom du plat]** — [décrire avec les éléments réels : type de produit, cuisson, accompagnement]. Notre référence.

Si aucun plat ne se démarque suffisamment, créez une "Suggestion du chef" hebdomadaire — elle peut être écrite sur un tableau ou annoncée verbalement, sans être sur la carte imprimée.`,
  },
  {
    title: '5. Desserts : plan pour vendre plus',
    content: `Les desserts sont presque toujours le levier le plus rapide à activer — et le plus négligé.

**Actions immédiates :**

1. Ajouter le titre de section : **Nos desserts** *(+ "maison" ou "faits ici" uniquement si c'est exact)*
2. Écrire 1 ligne descriptive sous chaque dessert — avec les éléments réels uniquement
3. Placer le dessert le plus différenciant en premier
4. Ajouter un encart en bas de section :
   > *Notre conseil : dessert + café — [prix] € / Demandez à votre serveur*

**Format de description recommandé :**
- *[Nom du dessert]* — [texture ou température si distinctif], [élément clé réel], [1 adjectif concret]
- Exemple de format (contenu à remplacer par vos ingrédients réels) : *"Tarte du moment — servie tiède, [garniture réelle]"*`,
  },
  {
    title: '6. Actions concrètes pour augmenter le ticket moyen',
    content: `| Action | Exemple précis | Effort | Impact attendu |
|---|---|---|---|
| Réécrire les intitulés desserts + ajouter "maison" si exact | Une ligne descriptive par dessert | 30 min | Hausse du taux de prise desserts |
| Mettre en avant 1 plat signature | Encadré ✦ + description courte en première position | 20 min | Ancrage prix, décision plus rapide |
| Créer un encart suppléments / extras visibles | Après la section plats principaux | 15 min | Hausse directe du ticket par table |
| Remonter la formule en tête de carte si elle existe | Encadré visible avant les entrées | 15 min | Plus de formules commandées |
| Briefer l'équipe sur 3-5 phrases de vente active | Voir section 9 | 30 min (briefing) | Vente additionnelle desserts et extras |`,
  },
  {
    title: '7. Pricing et présentation des prix',
    content: `• Si les prix sont alignés dans une colonne à droite, le client les compare verticalement avant de lire les noms. Intégrez les prix à la fin de la description — moins anxiogène, plus naturel à la lecture.
• Vérifiez les arrondis : les prix en virgule-cinquante (14,50 €) semblent peu soignés sur des plats à forte valeur perçue. Préférez 14 € ou 15 €.
• Un écart de plus de 5 € entre deux plats comparables sans justification visible dans la description crée de la méfiance. Soit vous ajoutez une description qui explique l'écart, soit vous réévaluez.
• La formule doit afficher clairement l'économie réalisée si elle existe : *"au lieu de [X] €, formule à [Y] €"*.
• N'ajoutez pas de plat premium artificiel pour créer un ancrage si votre positionnement global ne le supporte pas. L'ancrage doit être crédible.`,
  },
  {
    title: '8. Nouvelle organisation recommandée de la carte',
    content: `Structure recommandée (à adapter à votre établissement) :

1. **Formule / Menu du moment** ← encadré visible, en premier si vous en avez une
2. **Entrées** ← maximum 5, la plus forte en premier
3. **Plats** ← maximum 7-8, plat signature encadré en tête
4. **Desserts** ← avec descriptions, le plus différenciant en premier
5. **Boissons** ← avec suggestion d'accord si pertinent

**Ce qui doit être encadré :** formule + plat signature.
**Ce qui doit être réduit :** chaque catégorie au-dessus de 7 références.
**Ce qui doit être déplacé :** formule si en bas de carte, suppléments si cachés après les boissons.
**Ce qui doit être regroupé :** les références trop proches ou en doublon implicite.`,
  },
  {
    title: '9. Phrases serveur prêtes à utiliser',
    content: `• *"Notre plat le plus demandé en ce moment, c'est [nom du plat signature] — je vous le conseille."*
• *"Si vous hésitez, dites-moi ce que vous aimez, je vous aide à choisir."*
• *"On a un dessert qui fonctionne très bien après ce plat — vous voulez que je vous en parle ?"*
• *"Vous prenez un café ? On peut y ajouter un dessert maison pour [prix] €."*
• *"La formule du midi inclut le dessert — c'est [prix] € au total, ça vous va ?"*`,
  },
  {
    title: '10. Plan d\'action sur 7 jours',
    content: `| Jour | Action | Objectif |
|---|---|---|
| Jour 1 | Réécrire les intitulés desserts avec description courte | Augmenter le taux de prise desserts |
| Jour 2 | Identifier et mettre en avant le plat signature | Ancrage prix, décision plus rapide |
| Jour 3 | Réduire les catégories au-dessus de 7 références *(test temporaire sans données de vente)* | Moins de paralysie du choix |
| Jour 4 | Créer ou déplacer l'encart formule en tête de carte | Capter les clients formule dès la lecture |
| Jour 5 | Briefer l'équipe en salle sur les 5 phrases de vente | Activer la vente additionnelle |
| Jour 6 | Mettre en service la nouvelle version de la carte | Premier test réel |
| Jour 7 | Observer : desserts vendus ? Plat signature commandé ? Ticket moyen en hausse ? | Mesurer et ajuster |`,
  },
  {
    title: '11. Résumé final',
    content: `**Les 3 changements prioritaires :**
1. Écrire une description courte sur chaque dessert *(avec vos ingrédients réels)* + mention "maison" si applicable
2. Identifier et mettre en avant un plat signature avec description et position prioritaire
3. Réduire les catégories au-dessus de 7 références — simplifier, c'est vendre mieux

**Ce que vous pouvez attendre :** un service plus fluide, des clients qui décident plus vite, et un taux de commande des desserts structurellement plus élevé. Sans données de vente actuelles, il est impossible de quantifier précisément — mais ces changements agissent directement sur le comportement d'achat.

**La première action à faire dès demain :** ouvrez votre carte, trouvez la section desserts, et ajoutez une ligne descriptive sous chaque dessert. 30 minutes. C'est le changement le plus rapide avec le plus d'impact.`,
  },
]

export async function generateMenuAnalysis(order: Partial<Order>): Promise<AnalysisReport> {
  const provider = process.env.AI_PROVIDER ?? 'mock'

  if (provider === 'claude') {
    return generateWithClaude(order)
  }

  if (provider === 'openai') {
    return generateWithOpenAI(order)
  }

  return {
    sections: MOCK_REPORT,
    generatedAt: new Date().toISOString(),
    isAiGenerated: false,
  }
}

async function generateWithClaude(order: Partial<Order>): Promise<AnalysisReport> {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Anthropic = require('@anthropic-ai/sdk').default
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const prompt = buildPrompt(order)

  const message = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = message.content[0].type === 'text' ? message.content[0].text : ''
  return parseAiResponse(text)
}

async function generateWithOpenAI(order: Partial<Order>): Promise<AnalysisReport> {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const OpenAI = require('openai').default
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const prompt = buildPrompt(order)

  const completion = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 4096,
  })

  const text = completion.choices[0]?.message?.content ?? ''
  return parseAiResponse(text)
}

function buildPrompt(order: Partial<Order>): string {
  return `Tu es un expert senior en menu engineering, restauration et optimisation du ticket moyen. Tu produis un livrable ultra-concret pour un restaurateur qui a payé 50 € pour des recommandations actionnables.

RÈGLES CRITIQUES (à respecter absolument) :
1. Ne jamais inventer d'ingrédients, labels, origines, marques ("Valrhona", "maturé 30 jours", "fermier", "bio", "local") sauf si explicitement visible dans les informations fournies.
2. Si une amélioration nécessite une hypothèse, l'indiquer clairement : "si c'est exact", "à confirmer", "à adapter selon vos produits".
3. Ne jamais dire "supprimez les plats les moins vendus" — aucune donnée de vente n'est disponible. Dire : "sans données de vente, testez la suppression temporaire de…"
4. Chaque recommandation doit être accompagnée d'une action concrète immédiatement applicable.
5. Être direct et utile. Pas de blabla marketing. Pas de phrases génériques comme "votre carte présente une structure solide".
6. Ne pas surpromettre une hausse chiffrée du ticket moyen sans données.

CONTEXTE DU RESTAURANT :
- Nom : ${order.restaurant_name}
- Type : ${order.establishment_type}
- Objectif principal : ${order.main_goal}
- Commentaire du restaurateur : ${order.comment ?? 'Aucun'}
- URL du menu : ${order.menu_url ?? 'Non fournie'}

Rédige le rapport avec ces 11 sections exactes :

1. Verdict en 5 lignes — diagnostic direct : principal frein, levier prioritaire, clarté de la carte, potentiel d'amélioration rapide, action la plus importante en premier
2. Ce qui bloque le ticket moyen — 3 à 5 problèmes concrets avec : constat / impact / correction recommandée
3. Les changements prêts à copier-coller — tableau Markdown : Élément actuel | Nouvelle version recommandée | Pourquoi. Minimum 3 plats, 3 desserts, 1 entrée. Ne réécrire que ce qui est réellement présent. Marquer "à confirmer" si hypothèse.
4. Plat signature recommandé — 1 candidat avec : plat / pourquoi / mise en avant / texte exact à intégrer (adapté aux infos disponibles)
5. Desserts : plan pour vendre plus — descriptions à réécrire, dessert à mettre en avant, textes prêts à intégrer, suggestion café+dessert
6. Actions concrètes pour augmenter le ticket moyen — tableau : Action | Exemple précis | Effort | Impact attendu
7. Pricing et présentation des prix — analyse des prix existants, recommandations adaptées au positionnement réel
8. Nouvelle organisation recommandée de la carte — structure améliorée avec ce qui doit être encadré, déplacé, réduit, regroupé
9. Phrases serveur prêtes à utiliser — 3 à 5 phrases naturelles et courtes adaptées au restaurant
10. Plan d'action sur 7 jours — tableau : Jour | Action | Objectif
11. Résumé final — 3 changements prioritaires, gain attendu qualitatif, première action à faire dès demain

Format de réponse : JSON avec structure { sections: [{title: string, content: string}] }
Le contenu de chaque section doit être en Markdown.`
}

function parseAiResponse(text: string): AnalysisReport {
  try {
    const json = JSON.parse(text)
    return {
      sections: json.sections,
      generatedAt: new Date().toISOString(),
      isAiGenerated: true,
    }
  } catch {
    return {
      sections: [{ title: 'Rapport', content: text }],
      generatedAt: new Date().toISOString(),
      isAiGenerated: true,
    }
  }
}

export function reportToMarkdown(report: AnalysisReport): string {
  return report.sections
    .map((s) => `## ${s.title}\n\n${s.content}`)
    .join('\n\n---\n\n')
}
