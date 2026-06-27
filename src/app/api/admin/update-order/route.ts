import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'

function authMode(req: NextRequest): 'admin' | 'demo' | null {
  const token = req.headers.get('x-admin-token')
  if (token === process.env.ADMIN_PASSWORD) return 'admin'
  if (token === process.env.DEMO_PASSWORD) return 'demo'
  return null
}

export async function PATCH(req: NextRequest) {
  const mode = authMode(req)
  if (!mode) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (mode === 'demo') return NextResponse.json({ demo: true })

  const { id, order_status, report_content } = await req.json()
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  }

  const updates: Record<string, unknown> = {}
  if (order_status) updates.order_status = order_status
  if (report_content !== undefined) updates.report_content = report_content
  if (order_status === 'delivered') updates.delivered_at = new Date().toISOString()

  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('orders')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }

  return NextResponse.json({ order: data })
}
