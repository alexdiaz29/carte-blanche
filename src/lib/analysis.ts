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
    title: '1. Diagnostic global',
    content: `Votre carte présente un potentiel commercial réel, mais souffre de plusieurs freins à la décision d'achat. La structure actuelle demande trop d'effort cognitif au client : trop de choix, des catégories peu hiérarchisées, et des intitulés génériques qui n'appuient pas la valeur perçue. Les plats les plus rentables ne sont pas mis en avant. La carte fonctionne comme une liste de stock plutôt que comme un outil de vente.`,
  },
  {
    title: '2. Points forts',
    content: `• Offre complète couvrant différents profils de clients\n• Présence de formules midi, bon levier de fidélisation\n• Gamme de prix cohérente avec le positionnement\n• Quelques intitulés évocateurs à conserver et développer`,
  },
  {
    title: '3. Problèmes identifiés',
    content: `• **Carte trop longue** : au-delà de 7 choix par catégorie, le client est paralysé et commande ce qu'il connaît déjà\n• **Catégories peu lisibles** : pas de hiérarchie visuelle claire entre les sections\n• **Plats rentables pas mis en avant** : les marges fortes sont noyées dans la masse\n• **Intitulés trop génériques** : "Salade mixte", "Plat du jour" — aucune valeur perçue\n• **Manque de plat signature** : rien qui différencie votre établissement\n• **Ventes additionnelles absentes** : pas de suggestion de suppléments ou d'accompagnements\n• **Descriptions trop courtes ou absentes** : le client ne sait pas ce qu'il achète\n• **Prix sans stratégie d'ancrage** : les prix premium ne sont pas positionnés pour sembler raisonnables`,
  },
  {
    title: '4. Recommandations prioritaires',
    content: `**Impact fort / Facile à faire (cette semaine)**\n• Réduire chaque catégorie à 5-7 items maximum — supprimer ou regrouper\n• Ajouter une étoile ★ ou un encadré visuel sur 2-3 plats "coups de cœur"\n• Réécrire 5 intitulés clés (voir section 8)\n• Afficher le plat signature en premier dans sa catégorie\n\n**Impact fort / Demande un peu plus de travail**\n• Restructurer l'ordre des catégories : Apéritif → Entrées → Plats → Desserts → Boissons\n• Créer une formule "entrée + plat + dessert" à prix attractif\n• Ajouter 2-3 suggestions de suppléments (fromage, sauce, accompagnement)\n\n**Impact moyen**\n• Améliorer les descriptions des plats premium (2-3 lignes max)\n• Ajouter des labels visuels : "Maison", "Du terroir", "Végétarien"`,
  },
  {
    title: '5. Recommandations par catégorie',
    content: `**Entrées**\nRéduire à 5 entrées maximum. Mettre en avant la plus rentable avec une courte description. Ajouter un tarif planche/partage si pertinent.\n\n**Plats**\nIdentifier vos 2-3 plats à plus forte marge et les positionner en premier et/ou en encadré. Ne garder que 6-8 plats. Supprimer les doublons (ex : deux plats au poulet très proches).\n\n**Desserts**\nSouvent sous-exploités. Ajouter une description courte et appétissante. Proposer un dessert du jour simple à valoriser verbalement.\n\n**Boissons**\nPenser à proposer des suggestions d'accords (vin/plat). Un vin "coup de cœur du chef" au verre augmente le ticket moyen.\n\n**Formules/Menus**\nLes formules doivent être visuellement séparées et en tête de carte. Le client doit trouver la formule en 3 secondes.`,
  },
  {
    title: '6. Pricing et perception prix',
    content: `• **Arrondis psychologiques** : préférer 14,50 € à 14,00 € (perçu comme plus précis/juste) ou 15 € (simplifié)\n• **Prix d'appel** : avoir un plat entrée à prix accessible pour ne pas effrayer à la première lecture\n• **Effet d'ancrage** : placer un plat premium en premier ou en évidence rend les autres prix plus acceptables\n• **Écarts incohérents** : si deux plats très proches ont 6 € d'écart sans justification perçue, cela crée de la méfiance\n• **Formules** : l'économie doit être visible (afficher "Économisez 4 €" ou "au lieu de 32 €")`,
  },
  {
    title: '7. Mise en page et lisibilité',
    content: `• **Ordre des rubriques** : toujours aller du début au repas (apéritif → entrée → plat → dessert → boisson), pas l'inverse\n• **Hiérarchie visuelle** : titres de catégorie plus grands, sous-catégories différenciées, prix bien alignés\n• **Réduction du bruit** : supprimer les logos, encadrés décoratifs inutiles, couleurs qui fatiguent la lecture\n• **Mise en avant** : utiliser une boîte colorée ou un filet sur le plat signature ou la formule phare\n• **Taille de police** : minimum 10pt en impression, minimum 14px sur digital\n• **Pictos/Labels** : V (végétarien), M (maison), ★ (recommandé) — max 3 labels pour ne pas surcharger`,
  },
  {
    title: '8. Wording commercial',
    content: `Exemples de réécriture (sans changer les recettes) :\n\n❌ "Salade verte" → ✅ "Salade du marché, vinaigrette maison"\n❌ "Poulet rôti" → ✅ "Poulet fermier rôti, jus de cuisson, légumes de saison"\n❌ "Dessert du jour" → ✅ "Surprise du chef — demandez à votre serveur"\n❌ "Steak haché" → ✅ "Steak haché façon maison, 180g, cuit à votre goût"\n❌ "Formule midi" → ✅ "Formule Express — Entrée + Plat ou Plat + Dessert, servi en 20 min"\n\nPrincipe : décrire ce qui est là, pas ce qui n'est pas là. Évoquer le soin, la fraîcheur, la générosité.`,
  },
  {
    title: '9. Actions concrètes à faire cette semaine',
    content: `1. Réduire la carte à 5-7 items par catégorie\n2. Identifier vos 2 plats les plus rentables → les mettre en premier + les encadrer\n3. Réécrire 5 intitulés en ajoutant un adjectif concret (maison, frais, du jour, fermier…)\n4. Créer ou mettre en avant une formule visible dès la première lecture\n5. Ajouter un plat "coup de cœur du chef" clairement identifié\n6. Vérifier la cohérence des prix : aucun écart injustifié de plus de 5 € entre plats comparables`,
  },
  {
    title: '10. Synthèse finale',
    content: `Votre carte a les ingrédients d'une bonne offre. Le travail à faire n'est pas de changer vos plats, c'est de mieux les vendre. En raccourcissant la carte, en mettant en avant les bons plats et en réécrivant quelques intitulés, vous pouvez augmenter votre ticket moyen sans toucher à votre cuisine. Ces changements peuvent être appliqués en une semaine pour un coût quasi nul. Commencez par les 6 actions listées ci-dessus — elles auront le plus d'impact immédiat.`,
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
  return `Tu es un expert en menu engineering pour les restaurants.

Analyse la carte du restaurant suivant et rédige un rapport complet et actionnable.

**Restaurant** : ${order.restaurant_name}
**Type d'établissement** : ${order.establishment_type}
**Objectif principal du restaurateur** : ${order.main_goal}
**Commentaire** : ${order.comment ?? 'Aucun'}
**URL du menu** : ${order.menu_url ?? 'Non fournie'}

Rédige le rapport avec ces 10 sections exactes :
1. Diagnostic global
2. Points forts
3. Problèmes identifiés
4. Recommandations prioritaires
5. Recommandations par catégorie
6. Pricing et perception prix
7. Mise en page et lisibilité
8. Wording commercial
9. Actions concrètes à faire cette semaine
10. Synthèse finale

Sois concret, terrain, sans jargon. Ne promets pas de résultats chiffrés garantis. Ne réinvente pas les recettes. Focus sur la lisibilité, la mise en avant des plats rentables, le wording et la structure.

Format de réponse : JSON avec structure { sections: [{title: string, content: string}] }`
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
