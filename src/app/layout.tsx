import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carte Blanche — Analyse de carte pour restaurateurs',
  description:
    'Envoyez votre menu, recevez des recommandations concrètes pour vendre mieux en 48h. Menu engineering professionnel pour restaurants, brasseries, snacks et food trucks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  )
}
