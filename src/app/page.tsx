import Link from 'next/link'

const STEPS = [
  { n: '1', title: 'Vous envoyez votre menu', desc: 'Photo, PDF ou lien vers votre carte en ligne. Ça prend 2 minutes.' },
  { n: '2', title: 'Nous analysons', desc: 'Structure, prix, lisibilité, mise en avant des plats, wording, opportunités commerciales.' },
  { n: '3', title: 'Vous recevez un rapport clair', desc: 'Actions concrètes, priorisées, applicables sans changer vos recettes. Livré en 48h.' },
]

const BENEFITS = [
  'Mieux mettre en avant les plats rentables',
  'Rendre la carte plus lisible et plus rapide à parcourir',
  "Améliorer les intitulés et descriptions",
  "Faciliter le choix du client — et réduire l'indécision",
  'Identifier les prix incohérents ou mal positionnés',
  'Créer des opportunités de ventes additionnelles',
  'Améliorer les menus, formules et catégories',
]

const DELIVERABLES = [
  'Diagnostic global de la carte',
  'Recommandations par catégorie (entrées, plats, desserts, boissons)',
  'Suggestions de mise en page et hiérarchie visuelle',
  "Conseils de wording et réécriture d'intitulés",
  'Identification des plats à mettre en avant',
  'Alertes : longueur, doublons, prix, manque de clarté',
  'Actions priorisées par impact',
]

const FAQ = [
  { q: 'Est-ce que je dois fournir mes coûts matière ?', a: "Non. L'analyse porte sur la lisibilité, la perception prix, la structure et les opportunités commerciales. Vos marges restent confidentielles." },
  { q: "Est-ce qu'on va me demander de changer mes recettes ?", a: "Jamais. On travaille uniquement sur la présentation de votre offre existante : comment la montrer, comment la nommer, comment la structurer pour mieux vendre." },
  { q: "Ça marche pour quel type d'établissement ?", a: "Restaurant, brasserie, snack, pizzeria, food truck, boulangerie-snacking — tout établissement qui a une carte ou un menu." },
  { q: 'Combien de temps pour recevoir le rapport ?', a: '48h ouvrées maximum après réception de votre menu et confirmation du paiement.' },
  { q: 'Comment je reçois le rapport ?', a: "Par email, au format lisible et prêt à utiliser. Vous pouvez aussi le consulter depuis votre page de confirmation." },
  { q: "Et si je ne suis pas satisfait ?", a: "Si le rapport ne vous apporte aucune recommandation concrète, on vous rembourse. Simple." },
]

export default function HomePage() {
  return (
    <main>
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">Carte Blanche</span>
          <Link href="/order" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Analyser ma carte — 49 €
          </Link>
        </div>
      </nav>

      <section className="bg-gray-950 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-orange-500/20 text-orange-400 text-sm font-medium px-3 py-1 rounded-full mb-6">
            Menu engineering professionnel
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Améliorez la rentabilité de votre carte en 48h
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Envoyez-nous votre menu. Recevez des recommandations concrètes pour vendre mieux, mettre en avant les bons plats et rendre votre carte plus efficace —{' '}
            <strong className="text-white">sans changer vos recettes.</strong>
          </p>
          <Link href="/order" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg">
            Analyser ma carte — 49 €
          </Link>
          <p className="text-gray-500 text-sm mt-4">Livraison du rapport en 48h ouvrées · Paiement sécurisé</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">Comment ça marche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ce que ça change concrètement</h2>
            <ul className="space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ce que vous recevez</h2>
            <ul className="space-y-3">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                  <span className="text-green-500 font-bold mt-0.5">→</span>
                  <span className="text-gray-700 text-sm">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Pas besoin de tout chambouler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🍽', text: 'Pas besoin de changer vos recettes' },
              { icon: '📊', text: 'Pas besoin de fournir vos coûts matière' },
              { icon: '🏪', text: "Adapté à tous types d'établissements" },
            ].map((item) => (
              <div key={item.text} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-700 font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Rapport complet pour 49 €</h2>
          <p className="text-gray-300 mb-8">Une analyse professionnelle. Des recommandations concrètes. Livrée en 48h.</p>
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 mb-6">
            <div className="text-5xl font-bold mb-1">49 €</div>
            <div className="text-gray-400 text-sm mb-6">paiement unique, sans abonnement</div>
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

      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-orange-500">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Votre carte mérite mieux qu'une liste de plats
          </h2>
          <p className="text-orange-100 mb-8">Commencez à vendre mieux — sans changer votre cuisine.</p>
          <Link href="/order" className="inline-block bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
            Analyser ma carte — 49 €
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 px-4 text-center text-sm text-gray-400">
        <span className="font-semibold text-gray-600">Carte Blanche</span> · Menu engineering pour restaurateurs
      </footer>
    </main>
  )
}
