export type EstablishmentType =
  | 'restaurant'
  | 'brasserie'
  | 'snack'
  | 'pizzeria'
  | 'food_truck'
  | 'boulangerie_snacking'
  | 'autre'

export type MainGoal =
  | 'augmenter_ticket_moyen'
  | 'simplifier_carte'
  | 'ameliorer_lisibilite'
  | 'mieux_vendre_plats'
  | 'revoir_prix'
  | 'autre'

export type PaymentStatus = 'pending' | 'paid' | 'failed'
export type OrderStatus = 'pending_payment' | 'processing' | 'delivered'

export interface Order {
  id: string
  created_at: string
  restaurant_name: string
  contact_name: string
  email: string
  phone?: string
  establishment_type: EstablishmentType
  main_goal: MainGoal
  menu_url?: string
  file_url?: string
  comment?: string
  stripe_session_id?: string
  payment_status: PaymentStatus
  order_status: OrderStatus
  report_content?: string
  delivered_at?: string
}

export interface OrderFormData {
  restaurant_name: string
  contact_name: string
  email: string
  phone?: string
  establishment_type: EstablishmentType
  main_goal: MainGoal
  menu_url?: string
  comment?: string
}
