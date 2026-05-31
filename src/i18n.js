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
    tab_clients: 'Clients',
    tab_partners: 'Partners',
    tab_all: 'All',
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

  es: {
    // Nav
    nav_dashboard: 'Dashboard',
    nav_leads: 'Leads',
    nav_templates: 'Plantillas',
    agency_tagline: 'CRM de Leads',

    // Dashboard
    total_leads: 'Total de Leads',
    response_rate: 'Tasa de Respuesta',
    close_rate: 'Tasa de Cierre',
    meetings_booked: 'Reuniones Agendadas',
    sales_funnel: 'Embudo de Ventas',
    by_niche: 'Leads por Nicho',
    recent_activity: 'Requiere Seguimiento',
    no_followups: 'Sin seguimientos próximos',

    // Leads table
    add_lead: 'Añadir Lead',
    search_placeholder: 'Buscar empresa, nicho, gancho…',
    tab_clients: 'Clientes',
    tab_partners: 'Socios',
    tab_all: 'Todos',
    filter_status: 'Todos los Estados',
    filter_niche: 'Todos los Nichos',
    col_company: 'Empresa',
    col_niche: 'Nicho',
    col_source: 'Fuente',
    col_instagram: 'Instagram / Perfil',
    col_whatsapp: 'WhatsApp',
    col_hook: 'Gancho',
    col_status: 'Estado',
    col_last_contact: 'Último Contacto',
    col_next_followup: 'Próximo Seguimiento',
    col_notes: 'Notas',
    col_actions: '',
    no_leads: 'No se encontraron leads.',
    delete_confirm: '¿Eliminar este lead?',

    // Add Lead modal
    modal_title_add: 'Añadir Nuevo Lead',
    modal_title_edit: 'Editar Lead',
    field_company: 'Nombre de la Empresa',
    field_niche: 'Nicho',
    field_source: 'Dónde Encontré',
    field_instagram: 'Instagram / URL del Perfil',
    field_whatsapp: 'Número de WhatsApp',
    field_hook: 'Gancho de Aproximación',
    field_status: 'Estado',
    field_last_contact: 'Último Contacto',
    field_next_followup: 'Próximo Seguimiento',
    field_notes: 'Notas',
    btn_save: 'Guardar',
    btn_cancel: 'Cancelar',
    btn_delete: 'Eliminar',
    required: 'requerido',

    // Niches
    niche_dental: 'Dental',
    niche_aesthetic: 'Estética',
    niche_hotel: 'Hotel / Alojamiento',
    niche_pilates: 'Pilates / Fitness',
    niche_restaurant: 'Restaurante',
    niche_other: 'Otro',

    // Status labels
    status_to_contact: 'Por Contactar',
    status_contacted: 'Contactado',
    status_replied: 'Respondió',
    status_meeting: 'Reunión Agendada',
    status_proposal: 'Propuesta Enviada',
    status_closed: 'Cerrado',
    status_lost: 'Perdido',
    status_no_reply: 'Sin Respuesta',

    // Templates page
    templates_title: 'Plantillas de Mensajes',
    templates_subtitle: 'Plantillas listas para DM y WhatsApp. Haz clic para copiar.',
    copied: '¡Copiado!',
    copy: 'Copiar',

    // General
    open_profile: 'Abrir Perfil',
    edit: 'Editar',
    loading: 'Cargando…',
    saving: 'Guardando…',
    overdue: 'Vencido',
    today: 'Hoy',
    tomorrow: 'Mañana',
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

export const NICHES = ['Dental', 'Aesthetic', 'Hotel / Accommodation', 'Pilates / Fitness', 'Restaurant', 'Tech / SaaS', 'Design Partner', 'Other']
