export const translations = {
  en: {
    // Nav
    nav_dashboard: 'Dashboard',
    nav_leads: 'Leads',
    nav_templates: 'Templates',
    agency_tagline: 'Lead CRM',

    // Dashboard
    total_leads: 'Total Leads',
    hot_leads: 'Hot Leads (A)',
    to_contact_kpi: 'Ready to Contact',
    with_ig_kpi: 'With Instagram',
    response_rate: 'Response Rate',
    close_rate: 'Close Rate',
    meetings_booked: 'Meetings Booked',
    sales_funnel: 'Sales Funnel',
    by_niche: 'Leads by Niche',
    recent_activity: 'Needs Follow-up',
    no_followups: 'No upcoming follow-ups',

    // Leads table
    add_lead: 'Add Lead',
    search_placeholder: 'Search company, niche, hook…',
    tab_clients: 'Clients',
    tab_partners: 'Partners',
    tab_all: 'All',
    filter_status: 'All Statuses',
    filter_niche: 'All Niches',
    filter_priority: 'All Priorities',
    col_company: 'Company',
    col_niche: 'Niche',
    col_priority: 'Priority',
    col_source: 'Source',
    col_instagram: 'Instagram / Profile',
    col_whatsapp: 'WhatsApp',
    col_hook: 'Hook',
    col_status: 'Status',
    col_last_contact: 'Last Contact',
    col_next_followup: 'Next Follow-up',
    col_notes: 'Notes',
    col_actions: '',
    no_leads: 'No leads found.',
    delete_confirm: 'Delete this lead?',

    // Add Lead modal
    modal_title_add: 'Add New Lead',
    modal_title_edit: 'Edit Lead',
    field_company: 'Company Name',
    field_niche: 'Niche',
    field_priority: 'Priority',
    field_source: 'Where Found',
    field_instagram: 'Instagram / Profile URL',
    field_whatsapp: 'WhatsApp Number',
    field_hook: 'Approach Hook',
    field_status: 'Status',
    field_last_contact: 'Last Contact',
    field_next_followup: 'Next Follow-up',
    field_notes: 'Notes',
    btn_save: 'Save',
    btn_cancel: 'Cancel',
    btn_delete: 'Delete',
    required: 'required',

    // Templates page
    templates_title: 'Message Templates',
    templates_subtitle: 'Ready-to-use DM and WhatsApp templates. Click to copy.',
    copied: 'Copied!',
    copy: 'Copy',

    // General
    open_profile: 'Open Profile',
    edit: 'Edit',
    loading: 'Loading…',
    saving: 'Saving…',
    overdue: 'Overdue',
    today: 'Today',
    tomorrow: 'Tomorrow',
  },

  pt: {
    // Nav
    nav_dashboard: 'Painel',
    nav_leads: 'Leads',
    nav_templates: 'Templates',
    agency_tagline: 'CRM de Leads',

    // Dashboard
    total_leads: 'Total de Leads',
    hot_leads: 'Leads Quentes (A)',
    to_contact_kpi: 'Prontos a Contactar',
    with_ig_kpi: 'Com Instagram',
    response_rate: 'Taxa de Resposta',
    close_rate: 'Taxa de Fecho',
    meetings_booked: 'Reuniões Marcadas',
    sales_funnel: 'Funil de Vendas',
    by_niche: 'Leads por Nicho',
    recent_activity: 'Requer Follow-up',
    no_followups: 'Sem follow-ups próximos',

    // Leads table
    add_lead: 'Adicionar Lead',
    search_placeholder: 'Procurar empresa, nicho, gancho…',
    tab_clients: 'Clientes',
    tab_partners: 'Parceiros',
    tab_all: 'Todos',
    filter_status: 'Todos os Estados',
    filter_niche: 'Todos os Nichos',
    filter_priority: 'Todas as Prioridades',
    col_company: 'Empresa',
    col_niche: 'Nicho',
    col_priority: 'Prioridade',
    col_source: 'Fonte',
    col_instagram: 'Instagram / Perfil',
    col_whatsapp: 'WhatsApp',
    col_hook: 'Gancho',
    col_status: 'Estado',
    col_last_contact: 'Último Contacto',
    col_next_followup: 'Próximo Follow-up',
    col_notes: 'Notas',
    col_actions: '',
    no_leads: 'Nenhum lead encontrado.',
    delete_confirm: 'Eliminar este lead?',

    // Add Lead modal
    modal_title_add: 'Adicionar Novo Lead',
    modal_title_edit: 'Editar Lead',
    field_company: 'Nome da Empresa',
    field_niche: 'Nicho',
    field_priority: 'Prioridade',
    field_source: 'Onde Encontrei',
    field_instagram: 'Instagram / URL do Perfil',
    field_whatsapp: 'Número de WhatsApp',
    field_hook: 'Gancho de Abordagem',
    field_status: 'Estado',
    field_last_contact: 'Último Contacto',
    field_next_followup: 'Próximo Follow-up',
    field_notes: 'Notas',
    btn_save: 'Guardar',
    btn_cancel: 'Cancelar',
    btn_delete: 'Eliminar',
    required: 'obrigatório',

    // Templates page
    templates_title: 'Templates de Mensagens',
    templates_subtitle: 'Templates prontos para DM e WhatsApp. Clica para copiar.',
    copied: 'Copiado!',
    copy: 'Copiar',

    // General
    open_profile: 'Abrir Perfil',
    edit: 'Editar',
    loading: 'A carregar…',
    saving: 'A guardar…',
    overdue: 'Atrasado',
    today: 'Hoje',
    tomorrow: 'Amanhã',
  },
}

export const STATUS_COLORS = {
  'To Contact':     { bg: '#E8EDF5', text: '#1F3864', border: '#1F3864' },
  'Contacted':      { bg: '#DBEAFE', text: '#1D4ED8', border: '#2563EB' },
  'Replied':        { bg: '#FEF9C3', text: '#92400E', border: '#F59E0B' },
  'Meeting Booked': { bg: '#EDE9FE', text: '#5B21B6', border: '#7C3AED' },
  'Proposal Sent':  { bg: '#FFEDD5', text: '#9A3412', border: '#EA580C' },
  'Closed':         { bg: '#DCFCE7', text: '#15803D', border: '#16A34A' },
  'Lost':           { bg: '#FEE2E2', text: '#B91C1C', border: '#DC2626' },
  'No Reply':       { bg: '#F3F4F6', text: '#374151', border: '#6B7280' },
}

export const STATUSES = Object.keys(STATUS_COLORS)

// Niche taxonomy. Order = display order in filters & dashboard.
export const NICHE_COLORS = {
  'Dental':                { bg: '#CCFBF1', text: '#0F766E', border: '#14B8A6' },
  'Aesthetic':             { bg: '#FCE7F3', text: '#9D174D', border: '#EC4899' },
  'Health / Medical':      { bg: '#FEE2E2', text: '#B91C1C', border: '#EF4444' },
  'Beauty & Wellness':     { bg: '#FAE8FF', text: '#86198F', border: '#D946EF' },
  'Pilates / Fitness':     { bg: '#DCFCE7', text: '#15803D', border: '#22C55E' },
  'Hotel / Accommodation': { bg: '#DBEAFE', text: '#1D4ED8', border: '#3B82F6' },
  'Restaurant':            { bg: '#FEF3C7', text: '#92400E', border: '#F59E0B' },
  'Wine & Tourism':        { bg: '#F5E1E4', text: '#9F1239', border: '#BE123C' },
  'Real Estate':           { bg: '#E0E7FF', text: '#3730A3', border: '#6366F1' },
  'Retail / Luxury':       { bg: '#FEF9C3', text: '#854D0E', border: '#CA8A04' },
  'Veterinary':            { bg: '#ECFCCB', text: '#3F6212', border: '#84CC16' },
  'Education':             { bg: '#E0F2FE', text: '#075985', border: '#0EA5E9' },
  'Professional Services': { bg: '#E2E8F0', text: '#334155', border: '#64748B' },
  'Tech / SaaS':           { bg: '#EDE9FE', text: '#5B21B6', border: '#8B5CF6' },
  'Design Partner':        { bg: '#E8EDF5', text: '#1F3864', border: '#2E75B6' },
  'Other':                 { bg: '#F3F4F6', text: '#374151', border: '#9CA3AF' },
}

export const NICHES = Object.keys(NICHE_COLORS)

// Niches that represent partners (referral / white-label), not direct clients.
export const PARTNER_NICHES = ['Design Partner', 'Professional Services']

// Outreach priority
export const PRIORITY_COLORS = {
  'A': { bg: '#FEE2E2', text: '#B91C1C', border: '#DC2626' },
  'B': { bg: '#FEF3C7', text: '#92400E', border: '#F59E0B' },
  'C': { bg: '#F1F5F9', text: '#64748B', border: '#94A3B8' },
}

export const PRIORITIES = Object.keys(PRIORITY_COLORS)

export const PRIORITY_LABELS = { A: 'A · Hot', B: 'B · Medium', C: 'C · Low' }
