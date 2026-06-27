import Link from 'next/link'
import Image from 'next/image'

const PROBLEMS = [
  { icon: '😵', text: 'Votre carte est trop longue, le client ne sait plus quoi choisir' },
  { icon: '💸', text: 'Vos plats les plus rentables sont noyés dans la masse' },
  { icon: '📋', text: 'Les intitulés sont génériques, rien ne fait envie' },
  { icon: '🤷', text: 'Pas de formule claire, le ticket moyen stagne' },
]

const DELIVERABLES = [
  'Diagnostic global de la carte',
  'Recommandations par catégorie',
  'Suggestions de mise en page',
  "Réécriture d'intitulés et descriptions",
  'Identification des plats à mettre en avant',
  'Conseils pricing et perception prix',
  'Actions priorisées par impact',
]

const REPORT_PREVIEW = [
  { section: '⚠️ Problèmes identifiés', items: ['Carte trop longue : 34 plats, réduire à 20 max', 'Plat signature absent — rien ne se démarque', 'Formule midi introuvable en 3 secondes', 'Prix incohérents : écart de 8 € injustifié entre 2 plats similaires'] },
  { section: '✅ Actions cette semaine', items: ['Réduire à 6 entrées, 8 plats, 4 desserts', 'Encadrer "Bavette façon maison" comme plat vedette', 'Renommer "Salade verte" → "Salade du marché, vinaigrette maison"', 'Créer formule visible : Entrée + Plat à 18 €'] },
]

const FAQ = [
  { q: 'Est-ce que je dois fournir mes coûts matière ?', a: "Non. L'analyse porte sur la lisibilité, la structure, les intitulés et la perception prix. Vos marges restent confidentielles." },
  { q: "Est-ce qu'on va me demander de changer mes recettes ?", a: "Jamais. On travaille uniquement sur la présentation de votre offre existante." },
  { q: 'Ça marche pour quel type de restaurant ?', a: "Restaurant, brasserie, snack, pizzeria, food truck, boulangerie-snacking — tout établissement avec une carte." },
  { q: 'Comment je reçois le rapport ?', a: "Par email en 48h ouvrées, au format lisible et prêt à utiliser." },
  { q: "Et si je ne suis pas satisfait ?", a: "Si le rapport ne vous apporte aucune recommandation concrète, on vous rembourse." },
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
            alt="Restaurant"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-white text-center">
          <div className="inline-block bg-orange-500/90 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            Menu engineering professionnel
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Votre carte perd de l'argent.<br/>
            <span className="text-orange-400">On vous dit comment.</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Envoyez votre menu. Recevez un rapport concret pour vendre mieux, mettre en avant les bons plats et structurer votre carte — <strong className="text-white">sans changer vos recettes.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/order" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-xl">
              Analyser ma carte — 49 €
            </Link>
            <span className="text-gray-300 text-sm">Livraison en 48h · Paiement sécurisé</span>
          </div>
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vous vous reconnaissez ?</h2>
          <p className="text-gray-400 mb-12">Ces problèmes coûtent cher, et ils se règlent sans changer votre cuisine.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {PROBLEMS.map((p) => (
              <div key={p.text} className="flex items-start gap-4 bg-gray-900 rounded-xl p-5 text-left border border-gray-800">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-gray-200 text-sm leading-relaxed">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Comment ça marche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '1', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format&fit=crop', title: 'Envoyez votre menu', desc: "Photo, PDF ou lien. 2 minutes chrono." },
              { n: '2', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop', title: 'Nous analysons', desc: "Structure, prix, lisibilité, mise en avant, wording — tout y passe." },
              { n: '3', img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80&auto=format&fit=crop', title: 'Vous recevez le rapport', desc: "Actions concrètes, priorisées, applicables dès cette semaine." },
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

      {/* Aperçu du rapport */}
      <section className="py-20 px-4 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Un extrait de rapport, pour vous faire une idée</h2>
            <p className="text-gray-500">Ce que vous recevrez ressemble à ça — concret, direct, actionnable.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-950 text-white px-6 py-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-gray-400 text-sm font-mono">rapport-analyse-le-bistrot.pdf</span>
            </div>
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
              {REPORT_PREVIEW.map((block) => (
                <div key={block.section}>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">{block.section}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="md:col-span-2 bg-orange-50 rounded-xl p-4 border border-orange-100 text-sm text-orange-800">
                Le rapport complet contient 10 sections : diagnostic, points forts, problèmes, recommandations par catégorie, pricing, mise en page, wording, et un plan d'actions cette semaine.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance restaurant + ce que vous recevez */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop"
              alt="Restaurant interior"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ce que vous recevez</h2>
            <ul className="space-y-3 mb-8">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-700">{d}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-sm text-gray-500 mb-8">
              <strong className="text-gray-700">Pas besoin de :</strong> fournir vos coûts matière · changer vos recettes · avoir un designer
            </div>
            <Link href="/order" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Analyser ma carte — 49 €
            </Link>
          </div>
        </div>
      </section>

      {/* Types d'établissements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8 text-gray-600">Adapté à tous les types d'établissements</h2>
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
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">49 € — paiement unique</h2>
          <p className="text-gray-400 mb-8">Sans abonnement. Sans engagement. Livraison en 48h ouvrées.</p>
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 mb-6">
            <div className="text-6xl font-bold mb-1">49 <span className="text-3xl">€</span></div>
            <div className="text-gray-400 text-sm mb-8">une seule fois</div>
            <ul className="text-sm text-gray-300 space-y-2 text-left mb-8">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> {d}
                </li>
              ))}
            </ul>
            <Link href="/order" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors text-center text-lg">
              Analyser ma carte maintenant
            </Link>
          </div>
          <p className="text-gray-500 text-xs">Paiement sécurisé par Stripe · Remboursement si pas de valeur ajoutée</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Questions fréquentes</h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600&q=80&auto=format&fit=crop"
            alt="Restaurant"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Votre carte mérite mieux qu'une liste de plats</h2>
          <p className="text-gray-300 mb-8 text-lg">Commencez à vendre mieux — sans changer votre cuisine.</p>
          <Link href="/order" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors">
            Analyser ma carte — 49 €
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4 text-center text-sm text-gray-400 bg-white">
        <span className="font-semibold text-gray-600">Carte Blanche</span> · Menu engineering pour restaurateurs
      </footer>
    </main>
  )
}
