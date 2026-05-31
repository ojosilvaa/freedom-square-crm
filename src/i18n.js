export const translations = {
  en: {
    // Nav
    nav_dashboard: 'Dashboard',
    nav_leads: 'Leads',
    nav_templates: 'Templates',
    agency_tagline: 'Lead CRM',

    // Dashboard
    total_leads: 'Total Leads',
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
    filter_status: 'All Statuses',
    filter_niche: 'All Niches',
    col_company: 'Company',
    col_niche: 'Niche',
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

    // Niches
    niche_dental: 'Dental',
    niche_aesthetic: 'Aesthetic',
    niche_hotel: 'Hotel / Accommodation',
    niche_pilates: 'Pilates / Fitness',
    niche_restaurant: 'Restaurant',
    niche_other: 'Other',

    // Status labels
    status_to_contact: 'To Contact',
    status_contacted: 'Contacted',
    status_replied: 'Replied',
    status_meeting: 'Meeting Booked',
    status_proposal: 'Proposal Sent',
    status_closed: 'Closed',
    status_lost: 'Lost',
    status_no_reply: 'No Reply',

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
    nav_dashboard: 'Dashboard',
    nav_leads: 'Leads',
    nav_templates: 'Templates',
    agency_tagline: 'CRM de Leads',

    // Dashboard
    total_leads: 'Total de Leads',
    response_rate: 'Taxa de Resposta',
    close_rate: 'Taxa de Fecho',
    meetings_booked: 'Reuniões Marcadas',
    sales_funnel: 'Funil de Vendas',
    by_niche: 'Leads por Nicho',
    recent_activity: 'Requer Follow-up',
    no_followups: 'Sem follow-ups próximos',

    // Leads table
    add_lead: 'Adicionar Lead',
    search_placeholder: 'Pesquisar empresa, nicho, gancho…',
    filter_status: 'Todos os Status',
    filter_niche: 'Todos os Nichos',
    col_company: 'Empresa',
    col_niche: 'Nicho',
    col_source: 'Onde Encontrei',
    col_instagram: 'Instagram / Perfil',
    col_whatsapp: 'WhatsApp',
    col_hook: 'Gancho',
    col_status: 'Status',
    col_last_contact: 'Último Contacto',
    col_next_followup: 'Próximo Follow-up',
    col_notes: 'Observações',
    col_actions: '',
    no_leads: 'Nenhum lead encontrado.',
    delete_confirm: 'Apagar este lead?',

    // Add Lead modal
    modal_title_add: 'Adicionar Novo Lead',
    modal_title_edit: 'Editar Lead',
    field_company: 'Nome da Empresa',
    field_niche: 'Nicho',
    field_source: 'Onde Encontrei',
    field_instagram: 'Instagram / URL do Perfil',
    field_whatsapp: 'Número de WhatsApp',
    field_hook: 'Gancho de Abordagem',
    field_status: 'Status',
    field_last_contact: 'Último Contacto',
    field_next_followup: 'Próximo Follow-up',
    field_notes: 'Observações',
    btn_save: 'Guardar',
    btn_cancel: 'Cancelar',
    btn_delete: 'Apagar',
    required: 'obrigatório',

    // Niches
    niche_dental: 'Dentária',
    niche_aesthetic: 'Estética',
    niche_hotel: 'Hotel / Alojamento',
    niche_pilates: 'Pilates / Fitness',
    niche_restaurant: 'Restaurante',
    niche_other: 'Outro',

    // Status labels
    status_to_contact: 'A Contactar',
    status_contacted: 'Contactado',
    status_replied: 'Respondeu',
    status_meeting: 'Reunião Marcada',
    status_proposal: 'Proposta Enviada',
    status_closed: 'Fechado',
    status_lost: 'Perdido',
    status_no_reply: 'Sem Resposta',

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

export const NICHES = ['Dental', 'Aesthetic', 'Hotel / Accommodation', 'Pilates / Fitness', 'Restaurant', 'Other']
