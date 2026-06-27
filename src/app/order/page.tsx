'use client'

import { useState } from 'react'
import Link from 'next/link'
import { z } from 'zod'

const schema = z.object({
  restaurant_name: z.string().min(1, 'Requis'),
  contact_name: z.string().min(1, 'Requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  establishment_type: z.string().min(1, 'Requis'),
  main_goal: z.string().min(1, 'Requis'),
  menu_url: z.string().url('URL invalide').optional().or(z.literal('')),
  comment: z.string().optional(),
})

type FormErrors = Partial<Record<keyof z.infer<typeof schema>, string>>

const ESTABLISHMENT_OPTIONS = [
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'brasserie', label: 'Brasserie' },
  { value: 'snack', label: 'Snack' },
  { value: 'pizzeria', label: 'Pizzeria' },
  { value: 'food_truck', label: 'Food truck' },
  { value: 'boulangerie_snacking', label: 'Boulangerie-snacking' },
  { value: 'autre', label: 'Autre' },
]

const GOAL_OPTIONS = [
  { value: 'augmenter_ticket_moyen', label: 'Augmenter le ticket moyen' },
  { value: 'simplifier_carte', label: 'Simplifier la carte' },
  { value: 'ameliorer_lisibilite', label: 'Améliorer la lisibilité' },
  { value: 'mieux_vendre_plats', label: 'Mieux vendre certains plats' },
  { value: 'revoir_prix', label: 'Revoir les prix' },
  { value: 'autre', label: 'Autre' },
]

export default function OrderPage() {
  const [form, setForm] = useState({
    restaurant_name: '',
    contact_name: '',
    email: '',
    phone: '',
    establishment_type: '',
    main_goal: '',
    menu_url: '',
    comment: '',
  })
  const [file, setFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  function set(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }))
    setErrors((e) => ({ ...e, [k]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError('')

    const result = schema.safeParse(form)
    if (!result.success) {
      const fieldErrors: FormErrors = {}
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormErrors
        fieldErrors[key] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    if (!file && !form.menu_url) {
      setServerError('Veuillez fournir votre menu : uploadez un fichier ou entrez une URL.')
      return
    }

    setLoading(true)
    try {
      const data = new FormData()
      Object.entries(form).forEach(([k, v]) => data.append(k, v))
      if (file) data.append('file', file)

      const res = await fetch('/api/orders', { method: 'POST', body: data })
      const json = await res.json()

      if (!res.ok) {
        setServerError(json.error ?? 'Une erreur est survenue.')
        return
      }

      window.location.href = json.checkoutUrl
    } catch {
      setServerError('Une erreur est survenue. Réessayez.')
    } finally {
      setLoading(false)
    }
  }

  function Field({ label, error, children, optional }: { label: string; error?: string; children: React.ReactNode; optional?: boolean }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
          {optional && <span className="text-gray-400 font-normal ml-1">(optionnel)</span>}
        </label>
        {children}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }

  const inputCls = (err?: string) =>
    `w-full border ${err ? 'border-red-400' : 'border-gray-200'} rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all`

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="font-bold text-xl tracking-tight">Carte Blanche</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500 text-sm">Commander une analyse</span>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-950 text-white px-8 py-6">
            <h1 className="text-xl font-bold mb-1">Analyse de votre carte</h1>
            <p className="text-gray-400 text-sm">Remplissez ce formulaire — paiement ensuite par carte bancaire</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Nom du restaurant" error={errors.restaurant_name}>
                <input
                  className={`${inputCls(errors.restaurant_name)} col-span-2`}
                  value={form.restaurant_name}
                  onChange={(e) => set('restaurant_name', e.target.value)}
                  placeholder="Le Bistrot du Coin"
                />
              </Field>
              <Field label="Votre nom complet" error={errors.contact_name}>
                <input
                  className={inputCls(errors.contact_name)}
                  value={form.contact_name}
                  onChange={(e) => set('contact_name', e.target.value)}
                  placeholder="Marie Dupont"
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  className={inputCls(errors.email)}
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="marie@bistrotducoin.fr"
                />
              </Field>
              <Field label="Téléphone" optional error={errors.phone}>
                <input
                  type="tel"
                  className={inputCls(errors.phone)}
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder="06 12 34 56 78"
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Type d'établissement" error={errors.establishment_type}>
                <select
                  className={inputCls(errors.establishment_type)}
                  value={form.establishment_type}
                  onChange={(e) => set('establishment_type', e.target.value)}
                >
                  <option value="">Sélectionnez...</option>
                  {ESTABLISHMENT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </Field>
              <Field label="Objectif principal" error={errors.main_goal}>
                <select
                  className={inputCls(errors.main_goal)}
                  value={form.main_goal}
                  onChange={(e) => set('main_goal', e.target.value)}
                >
                  <option value="">Sélectionnez...</option>
                  {GOAL_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-700">Votre menu <span className="text-red-500">*</span></p>

              <Field label="Uploader un fichier" optional>
                <label className="block border-2 border-dashed border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:border-orange-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  />
                  {file ? (
                    <div className="text-sm text-gray-700">
                      <span className="text-green-600 font-medium">✓</span> {file.name}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-400">
                      <div className="text-2xl mb-1">📎</div>
                      Glissez un fichier ou cliquez pour sélectionner<br />
                      <span className="text-xs">JPG, PNG ou PDF — max 5 Mo</span>
                    </div>
                  )}
                </label>
              </Field>

              <div className="flex items-center gap-3">
                <div className="flex-1 border-t border-gray-200" />
                <span className="text-xs text-gray-400 uppercase tracking-wide">ou</span>
                <div className="flex-1 border-t border-gray-200" />
              </div>

              <Field label="URL de votre menu en ligne" optional error={errors.menu_url}>
                <input
                  type="url"
                  className={inputCls(errors.menu_url)}
                  value={form.menu_url}
                  onChange={(e) => set('menu_url', e.target.value)}
                  placeholder="https://bistrotducoin.fr/carte"
                />
              </Field>
            </div>

            <Field label="Commentaire libre" optional>
              <textarea
                className={`${inputCls()} resize-none`}
                rows={3}
                value={form.comment}
                onChange={(e) => set('comment', e.target.value)}
                placeholder="Contexte particulier, ce que vous aimeriez améliorer en priorité, contraintes spécifiques..."
              />
            </Field>

            {serverError && (
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600">
                {serverError}
              </div>
            )}

            <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-4 flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">Total</div>
                <div className="text-sm text-gray-500">Rapport livré en 48h ouvrées</div>
              </div>
              <div className="text-2xl font-bold text-orange-600">49 €</div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 px-6 rounded-xl transition-colors text-base"
            >
              {loading ? 'Redirection vers le paiement...' : 'Passer au paiement — 49 €'}
            </button>

            <p className="text-center text-xs text-gray-400">
              Paiement sécurisé par Stripe · Aucune carte enregistrée
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}
