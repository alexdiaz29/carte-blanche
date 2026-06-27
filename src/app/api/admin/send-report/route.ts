import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'
import { sendReportEmail } from '@/lib/emails'
import type { Order } from '@/types'

function authMode(req: NextRequest): 'admin' | 'demo' | null {
  const token = req.headers.get('x-admin-token')
  if (token === process.env.ADMIN_PASSWORD) return 'admin'
  if (token === process.env.DEMO_PASSWORD) return 'demo'
  return null
}

function reportToHtml(markdown: string): string {
  return markdown
    .split('\n')
    .map((line) => {
      if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`
      if (line.startsWith('**') && line.endsWith('**')) return `<p><strong>${line.slice(2, -2)}</strong></p>`
      if (line.startsWith('• ') || line.startsWith('- ')) return `<p style="padding-left:16px">${line}</p>`
      if (line.trim() === '') return ''
      return `<p>${line}</p>`
    })
    .join('\n')
}

export async function POST(req: NextRequest) {
  const mode = authMode(req)
  if (!mode) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (mode === 'demo') return NextResponse.json({ error: 'Mode démo — envoi désactivé.' }, { status: 403 })

  const { id } = await req.json()
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  }

  const supabase = createServiceClient()
  const { data: order, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 })
  }

  if (!order.report_content) {
    return NextResponse.json({ error: 'No report content' }, { status: 400 })
  }

  await sendReportEmail(order as Order, reportToHtml(order.report_content))

  await supabase
    .from('orders')
    .update({ order_status: 'delivered', delivered_at: new Date().toISOString() })
    .eq('id', id)

  return NextResponse.json({ sent: true })
}
