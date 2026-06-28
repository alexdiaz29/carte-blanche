'use client'

import { useState, useEffect, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'

interface Order {
  id: string
  created_at: string
  restaurant_name: string
  contact_name: string
  email: string
  phone?: string
  establishment_type: string
  main_goal: string
  menu_url?: string
  file_url?: string
  comment?: string
  payment_status: string
  order_status: string
  report_content?: string
  delivered_at?: string
}

const STATUS_COLORS: Record<string, string> = {
  pending_payment: 'bg-yellow-100 text-yellow-700',
  processing: 'bg-blue-100 text-blue-700',
  delivered: 'bg-green-100 text-green-700',
}

const STATUS_LABELS: Record<string, string> = {
  pending_payment: 'En attente paiement',
  processing: 'En cours',
  delivered: 'Livré',
  pending: 'En attente',
  paid: 'Payé',
  failed: 'Échoué',
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [isDemo, setIsDemo] = useState(false)
  const [orders, setOrders] = useState<Order[]>([])
  const [selected, setSelected] = useState<Order | null>(null)
  const [report, setReport] = useState('')
  const [saving, setSaving] = useState(false)
  const [sending, setSending] = useState(false)
  const [msg, setMsg] = useState('')
  const [filter, setFilter] = useState('all')
  const [reportView, setReportView] = useState<'edit' | 'preview'>('preview')

  const fetchOrders = useCallback(async () => {
    const res = await fetch('/api/admin/orders', {
      headers: { 'x-admin-token': password },
    })
    if (res.ok) {
      const data = await res.json()
      setOrders(data.orders)
      if (data.demo) setIsDemo(true)
    }
  }, [password])

  useEffect(() => {
    if (authed) fetchOrders()
  }, [authed, fetchOrders])

  async function login(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/admin/orders', {
      headers: { 'x-admin-token': password },
    })
    if (res.ok) {
      const data = await res.json()
      setOrders(data.orders)
      if (data.demo) setIsDemo(true)
      setAuthed(true)
    } else {
      setMsg('Mot de passe incorrect.')
    }
  }

  async function updateStatus(id: string, order_status: string) {
    setSaving(true)
    setMsg('')
    const res = await fetch('/api/admin/update-order', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json', 'x-admin-token': password },
      body: JSON.stringify({ id, order_status }),
    })
    if (res.ok) {
      await fetchOrders()
      if (selected?.id === id) setSelected((o) => o ? { ...o, order_status } : null)
      setMsg('Statut mis à jour.')
    }
    setSaving(false)
  }

  async function saveReport() {
    if (!selected) return
    setSaving(true)
    setMsg('')
    const res = await fetch('/api/admin/update-order', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json', 'x-admin-token': password },
      body: JSON.stringify({ id: selected.id, report_content: report }),
    })
    if (res.ok) {
      setMsg('Rapport sauvegardé.')
      await fetchOrders()
    }
    setSaving(false)
  }

  async function sendReport() {
    if (!selected) return
    setSending(true)
    setMsg('')
    await saveReport()
    const res = await fetch('/api/admin/send-report', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-admin-token': password },
      body: JSON.stringify({ id: selected.id }),
    })
    if (res.ok) {
      setMsg('Rapport envoyé par email.')
      await fetchOrders()
    } else {
      const d = await res.json()
      setMsg(d.error ?? 'Erreur envoi.')
    }
    setSending(false)
  }

  function selectOrder(order: Order) {
    setSelected(order)
    setReport(order.report_content ?? '')
    setMsg('')
  }

  const filtered = orders.filter((o) => {
    if (filter === 'all') return true
    return o.order_status === filter
  })

  if (!authed) {
    return (
      <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <form onSubmit={login} className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl">
          <h1 className="text-xl font-bold mb-6 text-center">Carte Blanche Admin</h1>
          <input
            type="password"
            placeholder="Mot de passe admin"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {msg && <p className="text-red-500 text-sm mb-3">{msg}</p>}
          <button type="submit" className="w-full bg-gray-950 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Accéder
          </button>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-lg">Admin · Carte Blanche</h1>
            {isDemo && (
              <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">DÉMO</span>
            )}
          </div>
          <div className="flex gap-2 mt-3">
            {['all', 'processing', 'delivered'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${filter === f ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {f === 'all' ? 'Tous' : STATUS_LABELS[f]}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 && (
            <div className="p-6 text-sm text-gray-400 text-center">Aucune commande</div>
          )}
          {filtered.map((order) => (
            <button
              key={order.id}
              onClick={() => selectOrder(order)}
              className={`w-full text-left px-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${selected?.id === order.id ? 'bg-orange-50 border-l-2 border-l-orange-500' : ''}`}
            >
              <div className="font-medium text-sm truncate">{order.restaurant_name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{order.email}</div>
              <div className="flex items-center gap-2 mt-1.5">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[order.order_status] ?? 'bg-gray-100 text-gray-500'}`}>
                  {STATUS_LABELS[order.order_status] ?? order.order_status}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${order.payment_status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {STATUS_LABELS[order.payment_status] ?? order.payment_status}
                </span>
              </div>
              <div className="text-xs text-gray-300 mt-1">{new Date(order.created_at).toLocaleDateString('fr-FR')}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {!selected ? (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Sélectionnez une commande
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-3xl mx-auto space-y-6">
              {msg && (
                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm text-green-700">
                  {msg}
                </div>
              )}

              {/* Info */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="font-semibold text-lg mb-4">{selected.restaurant_name}</h2>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    ['Contact', selected.contact_name],
                    ['Email', selected.email],
                    ['Téléphone', selected.phone ?? '—'],
                    ['Type', selected.establishment_type],
                    ['Objectif', selected.main_goal],
                    ['Date', new Date(selected.created_at).toLocaleString('fr-FR')],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="text-gray-400 text-xs">{label}</div>
                      <div className="font-medium text-gray-800">{value}</div>
                    </div>
                  ))}
                </div>
                {selected.comment && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-gray-400 text-xs mb-1">Commentaire</div>
                    <p className="text-sm text-gray-700">{selected.comment}</p>
                  </div>
                )}
                <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2 flex-wrap">
                  {selected.menu_url && (
                    <a href={selected.menu_url} target="_blank" rel="noreferrer"
                      className="text-sm text-orange-600 hover:underline">
                      Voir menu en ligne →
                    </a>
                  )}
                  {selected.file_url && (
                    <a href={selected.file_url} target="_blank" rel="noreferrer"
                      className="text-sm text-orange-600 hover:underline">
                      Voir fichier menu →
                    </a>
                  )}
                </div>
              </div>

              {/* Actions statut */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold mb-4">Statut de la commande</h3>
                <div className="flex gap-3">
                  {['processing', 'delivered'].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected.id, s)}
                      disabled={saving || selected.order_status === s || isDemo}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selected.order_status === s || isDemo
                          ? 'bg-gray-100 text-gray-400 cursor-default'
                          : 'bg-gray-900 text-white hover:bg-gray-700'
                      }`}
                    >
                      Marquer "{STATUS_LABELS[s]}"
                    </button>
                  ))}
                  {isDemo && <span className="text-xs text-gray-400 italic">Actions désactivées en mode démo</span>}
                </div>
              </div>

              {/* Rapport */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Rapport d'analyse</h3>
                  <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                    {(['preview', 'edit'] as const).map((v) => (
                      <button
                        key={v}
                        onClick={() => setReportView(v)}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${reportView === v ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        {v === 'preview' ? 'Aperçu' : 'Éditer'}
                      </button>
                    ))}
                  </div>
                </div>

                {reportView === 'preview' ? (
                  <div className="min-h-[400px] border border-gray-100 rounded-lg p-5 prose prose-sm prose-gray max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900
                    prose-h1:text-xl prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-3 prose-h1:mb-4
                    prose-h2:text-base prose-h2:mt-6 prose-h2:mb-2
                    prose-h3:text-sm prose-h3:mt-4 prose-h3:mb-1 prose-h3:text-gray-700
                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-sm
                    prose-li:text-gray-600 prose-li:text-sm
                    prose-strong:text-gray-900
                    prose-table:text-sm prose-td:py-2 prose-td:px-3 prose-th:py-2 prose-th:px-3
                    prose-table:border prose-td:border prose-th:border prose-th:bg-gray-50
                    prose-hr:my-6 prose-hr:border-gray-200">
                    {report ? (
                      <ReactMarkdown>{report}</ReactMarkdown>
                    ) : (
                      <p className="text-gray-300 italic text-sm">Aucun rapport rédigé pour l'instant.</p>
                    )}
                  </div>
                ) : (
                  <textarea
                    className="w-full border border-gray-200 rounded-lg p-4 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                    rows={24}
                    placeholder="Collez ici le rapport d'analyse (Markdown)..."
                    value={report}
                    onChange={(e) => setReport(e.target.value)}
                  />
                )}

                <div className="flex gap-3 mt-4 flex-wrap items-center">
                  <button
                    onClick={saveReport}
                    disabled={saving || isDemo}
                    className="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
                  >
                    {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                  </button>
                  <button
                    onClick={sendReport}
                    disabled={sending || !report.trim() || isDemo}
                    className="px-5 py-2.5 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors disabled:opacity-50"
                  >
                    {sending ? 'Envoi...' : 'Envoyer par email'}
                  </button>
                  {isDemo && <span className="text-xs text-gray-400 italic">Lecture seule en mode démo</span>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
