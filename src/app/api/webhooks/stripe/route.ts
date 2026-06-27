import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createServiceClient } from '@/lib/supabase'
import { sendConfirmationEmail, sendAdminNotification } from '@/lib/emails'
import type { Order } from '@/types'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event
  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const orderId = session.metadata?.order_id

    if (!orderId) {
      return NextResponse.json({ error: 'Missing order_id' }, { status: 400 })
    }

    const supabase = createServiceClient()
    const { data: order, error } = await supabase
      .from('orders')
      .update({
        payment_status: 'paid',
        order_status: 'processing',
      })
      .eq('id', orderId)
      .select()
      .single()

    if (error || !order) {
      return NextResponse.json({ error: 'Order update failed' }, { status: 500 })
    }

    await Promise.allSettled([
      sendConfirmationEmail(order as Order),
      sendAdminNotification(order as Order),
    ])
  }

  return NextResponse.json({ received: true })
}
