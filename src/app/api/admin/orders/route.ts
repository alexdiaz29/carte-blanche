import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'
import { DEMO_ORDERS } from '@/lib/demo-data'

function authMode(req: NextRequest): 'admin' | 'demo' | null {
  const token = req.headers.get('x-admin-token')
  if (token === process.env.ADMIN_PASSWORD) return 'admin'
  if (token === process.env.DEMO_PASSWORD) return 'demo'
  return null
}

export async function GET(req: NextRequest) {
  const mode = authMode(req)
  if (!mode) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  if (mode === 'demo') {
    return NextResponse.json({ orders: DEMO_ORDERS, demo: true })
  }

  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: 'DB error' }, { status: 500 })
  return NextResponse.json({ orders: data })
}
