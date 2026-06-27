import { Resend } from 'resend'
import type { Order } from '@/types'

let _resend: Resend | null = null
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY)
  return _resend
}
const FROM = process.env.FROM_EMAIL ?? 'contact@carteblanche.fr'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? ''
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://carteblanche.fr'

const ESTABLISHMENT_LABELS: Record<string, string> = {
  restaurant: 'Restaurant',
  brasserie: 'Brasserie',
  snack: 'Snack',
  pizzeria: 'Pizzeria',
  food_truck: 'Food truck',
  boulangerie_snacking: 'Boulangerie-snacking',
  autre: 'Autre',
}

const GOAL_LABELS: Record<string, string> = {
  augmenter_ticket_moyen: 'Augmenter le ticket moyen',
  simplifier_carte: 'Simplifier la carte',
  ameliorer_lisibilite: 'Améliorer la lisibilité',
  mieux_vendre_plats: 'Mieux vendre certains plats',
  revoir_prix: 'Revoir les prix',
  autre: 'Autre',
}

export async function sendConfirmationEmail(order: Order) {
  await getResend().emails.send({
    from: FROM,
    to: order.email,
    subject: `Votre analyse de carte est en préparation — ${order.restaurant_name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">Carte Blanche</h1>
        </div>
        <div style="padding: 32px; background: #f9f9f7; border-radius: 0 0 8px 8px;">
          <h2 style="margin-top: 0;">Commande confirmée ✓</h2>
          <p>Bonjour ${order.contact_name},</p>
          <p>Nous avons bien reçu votre paiement et votre demande d'analyse pour <strong>${order.restaurant_name}</strong>.</p>

          <div style="background: #fff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <h3 style="margin-top: 0; font-size: 14px; text-transform: uppercase; color: #666;">Récapitulatif</h3>
            <p style="margin: 4px 0;"><strong>Restaurant :</strong> ${order.restaurant_name}</p>
            <p style="margin: 4px 0;"><strong>Type :</strong> ${ESTABLISHMENT_LABELS[order.establishment_type] ?? order.establishment_type}</p>
            <p style="margin: 4px 0;"><strong>Objectif :</strong> ${GOAL_LABELS[order.main_goal] ?? order.main_goal}</p>
          </div>

          <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 16px; border-radius: 4px; margin: 24px 0;">
            <strong>Délai de livraison : 48h ouvrées</strong><br>
            Vous recevrez votre rapport par email dès qu'il sera prêt.
          </div>

          <p style="color: #666; font-size: 14px;">Une question ? Répondez directement à cet email.</p>
        </div>
      </div>
    `,
  })
}

export async function sendAdminNotification(order: Order) {
  if (!ADMIN_EMAIL) return

  await getResend().emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `[Carte Blanche] Nouvelle commande — ${order.restaurant_name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Nouvelle commande reçue</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Restaurant</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${order.restaurant_name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Contact</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${order.contact_name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${order.email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Type</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${ESTABLISHMENT_LABELS[order.establishment_type] ?? order.establishment_type}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Objectif</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${GOAL_LABELS[order.main_goal] ?? order.main_goal}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Menu URL</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${order.menu_url ?? '—'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Fichier</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${order.file_url ?? '—'}</td></tr>
          <tr><td style="padding: 8px;"><strong>Commentaire</strong></td><td style="padding: 8px;">${order.comment ?? '—'}</td></tr>
        </table>
        <p><a href="${APP_URL}/admin" style="background: #1a1a1a; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 16px;">Ouvrir l'admin</a></p>
      </div>
    `,
  })
}

export async function sendReportEmail(order: Order, reportHtml: string) {
  await getResend().emails.send({
    from: FROM,
    to: order.email,
    subject: `Votre analyse de carte est prête — ${order.restaurant_name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 700px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">Carte Blanche</h1>
        </div>
        <div style="padding: 32px; background: #f9f9f7; border-radius: 0 0 8px 8px;">
          <h2 style="margin-top: 0;">Votre analyse est prête</h2>
          <p>Bonjour ${order.contact_name},</p>
          <p>Voici le rapport d'analyse de la carte de <strong>${order.restaurant_name}</strong>.</p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
          ${reportHtml}
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
          <p style="color: #666; font-size: 14px;">Des questions sur les recommandations ? Répondez directement à cet email.</p>
        </div>
      </div>
    `,
  })
}
