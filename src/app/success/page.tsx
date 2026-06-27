import Link from 'next/link'
import { createServiceClient } from '@/lib/supabase'

interface Props {
  searchParams: Promise<{ session_id?: string }>
}

export default async function SuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams

  let order = null
  if (session_id) {
    const supabase = createServiceClient()
    const { data } = await supabase
      .from('orders')
      .select('*')
      .eq('stripe_session_id', session_id)
      .single()
    order = data
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link href="/" className="font-bold text-xl tracking-tight">Carte Blanche</Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Commande confirmée !</h1>
            <p className="text-gray-500 mb-8">
              Votre paiement a été reçu. L'analyse de votre carte est en préparation.
            </p>

            {order && (
              <div className="bg-gray-50 rounded-xl p-5 text-left mb-8 space-y-2">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Récapitulatif</h2>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Restaurant</span>
                  <span className="font-medium">{order.restaurant_name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">{order.email}</span>
                </div>
              </div>
            )}

            <div className="space-y-3 mb-8">
              {[
                { label: 'Commande reçue', done: true },
                { label: 'Analyse en cours', done: false, active: true },
                { label: 'Rapport livré par email', done: false },
              ].map((step) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    step.done ? 'bg-green-500 text-white' :
                    step.active ? 'bg-orange-500 text-white' :
                    'bg-gray-100 text-gray-400'
                  }`}>
                    {step.done ? '✓' : '•'}
                  </div>
                  <span className={`text-sm ${step.done || step.active ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-4 text-sm text-blue-700 mb-6">
              Vous recevrez votre rapport par email dans <strong>48h ouvrées</strong>.
            </div>

            <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
