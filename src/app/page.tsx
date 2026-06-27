import Link from 'next/link'
import Image from 'next/image'

const STATS = [
  { value: '+2,80 €', label: 'de ticket moyen en moyenne' },
  { value: '48h', label: 'pour recevoir votre rapport' },
  { value: '10', label: 'recommandations actionnables' },
  { value: '100%', label: 'remboursé si pas de valeur' },
]

const PROBLEMS = [
  'Votre carte fait 3 pages — le client se décourage avant de commander',
  'Vos plats les plus rentables ne se voient pas, les moins rentables non plus d'ailleurs',
  'Personne ne commande vos desserts parce qu'ils arrivent trop tard dans la lecture',
  'Votre formule du midi est introuvable en moins de 5 secondes',
  'Deux plats similaires avec 7 € d'écart sans raison visible — ça crée de la méfiance',
  'Les intitulés ne font pas envie : "Poulet rôti" vs "Poulet fermier rôti, jus maison"',
]

const TESTIMONIALS = [
  { name: 'Marie L.', role: 'Gérante, brasserie à Lyon', text: "J'avais l'impression que ma carte était claire. Le rapport m'a montré 6 problèmes que je n'avais jamais vus. Le ticket moyen a pris 3 € en un mois.", avatar: 'ML' },
  { name: 'Karim B.', role: 'Propriétaire, restaurant à Bordeaux', text: "49 € pour un rapport qui vaut 10x ça. En 2 semaines j'avais renommé 8 plats et créé une formule visible. Mes desserts se vendent enfin.", avatar: 'KB' },
  { name: 'Sophie D.', role: 'Cheffe, bistrot à Nantes', text: "Ce qui m'a convaincue : pas besoin de changer mes recettes. Juste comment les présenter. Le rapport était direct, sans blabla.", avatar: 'SD' },
]

const REPORT_PREVIEW = [
  {
    section: '⚠️ Problèmes identifiés',
    items: [
      'Carte trop longue : 34 plats, réduire à 20 max',
      'Plat signature absent — rien ne se démarque',
      'Formule midi introuvable en moins de 3 secondes',
      'Écart de 8 € injustifié entre 2 plats similaires',
    ],
  },
  {
    section: '✅ Actions à faire cette semaine',
    items: [
      'Réduire à 6 entrées, 8 plats, 4 desserts',
      'Encadrer "Bavette façon maison" comme plat vedette',
      '"Salade verte" → "Salade du marché, vinaigrette maison"',
      'Créer formule visible : Entrée + Plat à 18 €',
    ],
  },
]

const DELIVERABLES = [
  { icon: '🔍', text: 'Diagnostic global de votre carte' },
  { icon: '📂', text: 'Analyse par catégorie (entrées, plats, desserts, boissons)' },
  { icon: '✍️', text: "Réécriture d'intitulés et descriptions" },
  { icon: '💰', text: 'Conseils pricing et ancrage psychologique' },
  { icon: '👁', text: 'Suggestions de mise en page et hiérarchie' },
  { icon: '🏆', text: 'Identification des plats à mettre en avant' },
  { icon: '📋', text: 'Plan d'actions priorisées par impact' },
]

const FAQ = [
  { q: 'Est-ce que je dois fournir mes coûts matière ?', a: "Non. L'analyse porte uniquement sur la lisibilité, la structure, les intitulés et la perception prix. Vos marges restent confidentielles." },
  { q: "Est-ce qu'on va me demander de changer mes recettes ?", a: "Jamais. On travaille uniquement sur la façon de présenter votre offre existante — pas sur ce qu'il y a dans l'assiette." },
  { q: 'Ça marche pour quel type de restaurant ?', a: "Restaurant, brasserie, snack, pizzeria, food truck, boulangerie-snacking — tout établissement avec une carte ou un menu." },
  { q: 'Comment je reçois le rapport ?', a: "Par email en 48h ouvrées, au format lisible, prêt à utiliser. Pas besoin de logiciel particulier." },
  { q: "Et si je ne suis pas satisfait ?", a: "Si le rapport ne contient aucune recommandation concrète applicable à votre carte, on vous rembourse intégralement. Sans discussion." },
  { q: "C'est fait par qui ?", a: "Par des experts en menu engineering et marketing restaurant — pas par une IA seule. Votre carte est analysée avec attention, pas traitée en masse." },
]

export default function HomePage() {
  return (
    <main className="bg-white">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">Carte Blanche</span>
          <Link href="/order" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Analyser ma carte — 49 €
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop"
            alt="Restaurant gastronomique"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-white text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Rapport livré en 48h ouvrées
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Votre carte vous fait<br/>
            <span className="text-orange-400">perdre de l'argent.</span><br/>
            On vous dit exactement où.
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            Envoyez-nous votre menu. Recevez un rapport concret avec des actions à appliquer cette semaine — <strong className="text-white">sans changer vos recettes, sans connaître vos marges.</strong>
          </p>
          <p className="text-orange-300 text-sm font-medium mb-10">
            🛡 Remboursé intégralement si le rapport ne vous apporte rien de concret.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/order" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-xl">
              Analyser ma carte — 49 €
            </Link>
            <span className="text-gray-400 text-sm">Paiement sécurisé · Sans abonnement</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur rounded-xl px-4 py-4 border border-white/10">
                <div className="text-2xl font-bold text-orange-400">{s.value}</div>
                <div className="text-gray-300 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vous vous reconnaissez ? */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Ça vous parle ?</h2>
          <p className="text-gray-400 text-center mb-12">La plupart des cartes ont 4 à 8 problèmes invisibles pour leur propriétaire. On les trouve pour vous.</p>
          <ul className="space-y-3">
            {PROBLEMS.map((p) => (
              <li key={p} className="flex items-start gap-4 bg-gray-900 rounded-xl px-5 py-4 border border-gray-800">
                <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-200 text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 text-center">
            <p className="text-orange-300 text-sm font-medium">Ces problèmes se règlent sans changer votre cuisine. Juste en présentant mieux ce que vous faites déjà.</p>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Simple comme un coup de fil</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '1', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format&fit=crop', title: 'Envoyez votre menu', desc: "Photo, PDF ou lien vers votre carte en ligne. 2 minutes, pas plus." },
              { n: '2', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop', title: 'On analyse tout', desc: "Structure, prix, lisibilité, intitulés, mise en avant, opportunités manquées." },
              { n: '3', img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80&auto=format&fit=crop', title: 'Vous agissez', desc: "Rapport clair, priorisé, avec des actions applicables dès cette semaine." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                  <Image src={step.img} alt={step.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow">
                    {step.n}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Ce qu'en disent les restaurateurs</h2>
          <p className="text-gray-500 text-center mb-12">Des professionnels comme vous, qui avaient des doutes avant de commander.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu rapport */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">À quoi ressemble le rapport ?</h2>
            <p className="text-gray-500">Concret. Direct. Rien que vous ne puissiez pas appliquer vous-même.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="bg-gray-950 text-white px-6 py-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-gray-400 text-sm font-mono">analyse-carte-le-bistrot-du-coin.pdf</span>
            </div>
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              {REPORT_PREVIEW.map((block) => (
                <div key={block.section}>
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">{block.section}</h3>
                  <ul className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2.5">
                        <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="md:col-span-2 bg-orange-50 rounded-xl p-5 border border-orange-100">
                <p className="text-sm text-orange-800">
                  <strong>Le rapport complet inclut 10 sections :</strong> diagnostic, points forts, problèmes identifiés, recommandations par catégorie, pricing, mise en page, wording et plan d'actions priorisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que vous recevez */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop"
              alt="Salle de restaurant"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ce que vous recevez</h2>
            <p className="text-gray-400 mb-8 text-sm">Tout ce qu'il faut pour améliorer votre carte cette semaine.</p>
            <ul className="space-y-3 mb-8">
              {DELIVERABLES.map((d) => (
                <li key={d.text} className="flex items-center gap-3 bg-gray-900 rounded-xl px-4 py-3 border border-gray-800">
                  <span className="text-lg">{d.icon}</span>
                  <span className="text-gray-200 text-sm">{d.text}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-sm text-orange-300 mb-8">
              <strong>Sans :</strong> coûts matière · changement de recettes · logiciel supplémentaire · accompagnement long
            </div>
            <Link href="/order" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Analyser ma carte — 49 €
            </Link>
          </div>
        </div>
      </section>

      {/* Types d'établissements */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-center mb-8 text-gray-400 uppercase tracking-wide">Pour tous les types d'établissements</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&q=80&auto=format&fit=crop', label: 'Restaurant' },
              { img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&q=80&auto=format&fit=crop', label: 'Brasserie' },
              { img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&q=80&auto=format&fit=crop', label: 'Snack' },
              { img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80&auto=format&fit=crop', label: 'Pizzeria' },
              { img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80&auto=format&fit=crop', label: 'Food truck' },
              { img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&q=80&auto=format&fit=crop', label: 'Boulangerie' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="relative h-20 rounded-xl overflow-hidden mb-2">
                  <Image src={item.img} alt={item.label} fill className="object-cover" />
                </div>
                <span className="text-xs text-gray-500 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Une seule fois. 49 €.</h2>
          <p className="text-gray-500 mb-8">Pas d'abonnement. Pas de relance. Juste un rapport qui vaut son prix.</p>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-4 shadow-sm">
            <div className="text-6xl font-bold text-gray-900 mb-1">49 <span className="text-3xl font-normal text-gray-400">€</span></div>
            <div className="text-gray-400 text-sm mb-8">paiement unique · sans abonnement</div>
            <ul className="space-y-3 text-left mb-8">
              {DELIVERABLES.map((d) => (
                <li key={d.text} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-orange-500 font-bold">{d.icon}</span>
                  {d.text}
                </li>
              ))}
            </ul>
            <Link href="/order" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors text-center text-lg">
              Analyser ma carte maintenant
            </Link>
            <p className="text-xs text-gray-400 mt-4">
              🛡 Remboursé si pas de recommandation concrète · Paiement sécurisé par Stripe
            </p>
          </div>
          <p className="text-sm text-gray-400">Vous avez une question avant de commander ? <a href="mailto:contact@carteblanche.fr" className="text-orange-500 hover:underline">Écrivez-nous</a></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Vos questions, nos réponses</h2>
          <div className="space-y-3">
            {FAQ.map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-xl p-6 hover:border-orange-200 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 px-4">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600&q=80&auto=format&fit=crop"
            alt="Restaurant en soirée"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce soir, combien de plats rentables<br/>personne n'a commandé ?
          </h2>
          <p className="text-gray-300 mb-3 text-lg">
            Un rapport Carte Blanche vous dit lesquels — et comment y remédier.
          </p>
          <p className="text-orange-300 text-sm font-medium mb-10">
            🛡 Remboursé si pas de valeur ajoutée concrète.
          </p>
          <Link href="/order" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-xl">
            Analyser ma carte — 49 €
          </Link>
          <div className="mt-4 text-gray-400 text-sm">Livraison en 48h · Paiement sécurisé · Sans abonnement</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span className="font-semibold text-gray-600">Carte Blanche</span>
          <span>Analyse de carte pour restaurateurs · Livraison 48h · 49 €</span>
          <a href="mailto:contact@carteblanche.fr" className="hover:text-orange-500 transition-colors">contact@carteblanche.fr</a>
        </div>
      </footer>
    </main>
  )
}
