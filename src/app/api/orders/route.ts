import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServiceClient } from '@/lib/supabase'
import { getStripe, PRICE_CENTS, CURRENCY } from '@/lib/stripe'

const schema = z.object({
  restaurant_name: z.string().min(1),
  contact_name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  establishment_type: z.string().min(1),
  main_goal: z.string().min(1),
  menu_url: z.string().url().optional().or(z.literal('')),
  comment: z.string().optional(),
})

export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const raw = Object.fromEntries(
    Array.from(formData.entries()).filter(([, v]) => typeof v === 'string')
  )

  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Données invalides.' }, { status: 400 })
  }

  const data = parsed.data
  const file = formData.get('file') as File | null

  let file_url: string | undefined

  if (file && file.size > 0) {
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Fichier trop volumineux (max 5 Mo).' }, { status: 400 })
    }
    const supabase = createServiceClient()
    const ext = file.name.split('.').pop()
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const bytes = await file.arrayBuffer()

    const { error: uploadError } = await supabase.storage
      .from('menus')
      .upload(filename, bytes, { contentType: file.type })

    if (uploadError) {
      return NextResponse.json({ error: "Erreur upload fichier." }, { status: 500 })
    }

    const { data: urlData } = supabase.storage.from('menus').getPublicUrl(filename)
    file_url = urlData.publicUrl
  }

  const supabase = createServiceClient()
  const { data: order, error: dbError } = await supabase
    .from('orders')
    .insert({
      restaurant_name: data.restaurant_name,
      contact_name: data.contact_name,
      email: data.email,
      phone: data.phone || null,
      establishment_type: data.establishment_type,
      main_goal: data.main_goal,
      menu_url: data.menu_url || null,
      file_url: file_url || null,
      comment: data.comment || null,
      payment_status: 'pending',
      order_status: 'pending_payment',
    })
    .select()
    .single()

  if (dbError || !order) {
    return NextResponse.json({ error: 'Erreur lors de la création de la commande.' }, { status: 500 })
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  const session = await getStripe().checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: CURRENCY,
          unit_amount: PRICE_CENTS,
          product_data: {
            name: 'Analyse de carte — Carte Blanche',
            description: `Rapport complet pour ${data.restaurant_name} — livraison 48h`,
          },
        },
        quantity: 1,
      },
    ],
    metadata: { order_id: order.id },
    customer_email: data.email,
    success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/order`,
  })

  await supabase
    .from('orders')
    .update({ stripe_session_id: session.id })
    .eq('id', order.id)

  return NextResponse.json({ checkoutUrl: session.url })
}
