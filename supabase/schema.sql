-- Carte Blanche — Schema SQL
-- Run this in your Supabase SQL editor

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now() not null,
  restaurant_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  establishment_type text not null,
  main_goal text not null,
  menu_url text,
  file_url text,
  comment text,
  stripe_session_id text,
  payment_status text not null default 'pending' check (payment_status in ('pending', 'paid', 'failed')),
  order_status text not null default 'pending_payment' check (order_status in ('pending_payment', 'processing', 'delivered')),
  report_content text,
  delivered_at timestamptz
);

-- Index for webhook lookups
create index if not exists orders_stripe_session_id_idx on orders(stripe_session_id);
create index if not exists orders_email_idx on orders(email);

-- RLS: public can insert (new orders), only service_role can read/update
alter table orders enable row level security;

create policy "Allow insert for all" on orders
  for insert to anon, authenticated with check (true);

create policy "Allow select for service_role" on orders
  for select to service_role using (true);

create policy "Allow update for service_role" on orders
  for update to service_role using (true);

-- Storage bucket for menus
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'menus',
  'menus',
  false,
  5242880, -- 5MB
  array['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
)
on conflict (id) do nothing;

-- Storage policy: service_role only
create policy "Service role can manage menus" on storage.objects
  for all to service_role using (bucket_id = 'menus');
