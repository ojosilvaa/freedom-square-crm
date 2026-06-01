import { useState, useEffect } from 'react'
import { useLang } from '../App'
import { STATUS_COLORS, STATUSES, NICHES, NICHE_COLORS, PARTNER_NICHES } from '../i18n'
import LeadModal from '../components/LeadModal'

const isPartner = (niche) => PARTNER_NICHES.includes(niche)

export default function Leads({ leads, onAdd, onUpdate, onDelete }) {
  const { t } = useLang()
  const [viewType, setViewType] = useState('clients') // 'clients' | 'partners' | 'all'
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterNiche, setFilterNiche] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [editingLead, setEditingLead] = useState(null)
  const [editingCell, setEditingCell] = useState(null)

  const filtered = leads.filter(l => {
    const q = search.toLowerCase()
    const matchSearch = !q || [l.company, l.niche, l.hook, l.notes, l.instagram].some(f => f?.toLowerCase().includes(q))
    const matchStatus = !filterStatus || l.status === filterStatus
    const matchNiche = !filterNiche || l.niche === filterNiche
    const matchView = viewType === 'all'
      ? true
      : viewType === 'partners'
        ? isPartner(l.niche)
        : !isPartner(l.niche)
    return matchSearch && matchStatus && matchNiche && matchView
  })

  const clientCount = leads.filter(l => !isPartner(l.niche)).length
  const partnerCount = leads.filter(l => isPartner(l.niche)).length

  function openAdd() {
    setEditingLead(null)
    setModalOpen(true)
  }

  function openEdit(lead) {
    setEditingLead(lead)
    setModalOpen(true)
  }

  function handleSave(data) {
    if (editingLead) {
      onUpdate(editingLead.id, data)
    } else {
      onAdd(data)
    }
    setModalOpen(false)
  }

  function handleDelete(id) {
    if (window.confirm(t.delete_confirm)) {
      onDelete(id)
    }
  }

  async function handleInlineEdit(id, field, value) {
    await onUpdate(id, { [field]: value })
    setEditingCell(null)
  }

  return (
    <div className="page-container">
      <div className="leads-header">
        <h1 className="page-title">{t.nav_leads} <span className="leads-count">{filtered.length}</span></h1>
        <button className="btn-primary" onClick={openAdd}>+ {t.add_lead}</button>
      </div>

      <div className="view-tabs">
        <button className={`view-tab ${viewType === 'clients' ? 'active' : ''}`} onClick={() => { setViewType('clients'); setFilterNiche('') }}>
          🎯 {t.tab_clients} <span className="tab-count">{clientCount}</span>
        </button>
        <button className={`view-tab ${viewType === 'partners' ? 'active' : ''}`} onClick={() => { setViewType('partners'); setFilterNiche('') }}>
          🤝 {t.tab_partners} <span className="tab-count">{partnerCount}</span>
        </button>
        <button className={`view-tab ${viewType === 'all' ? 'active' : ''}`} onClick={() => setViewType('all')}>
          {t.tab_all}
        </button>
      </div>

      <div className="filters-row">
        <input
          className="search-input"
          placeholder={t.search_placeholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="filter-select" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="">{t.filter_status}</option>
          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {viewType !== 'partners' && (
          <select className="filter-select" value={filterNiche} onChange={e => setFilterNiche(e.target.value)}>
            <option value="">{t.filter_niche}</option>
            {NICHES.filter(n => viewType === 'all' || !isPartner(n)).map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        )}
      </div>

      <div className="table-wrap">
        <table className="leads-table">
          <thead>
            <tr>
              <th>{t.col_company}</th>
              <th>{t.col_niche}</th>
              <th>{t.col_instagram}</th>
              <th>{t.col_status}</th>
              <th>{t.col_hook}</th>
              <th>{t.col_last_contact}</th>
              <th>{t.col_next_followup}</th>
              <th>{t.col_notes}</th>
              <th>{t.col_actions}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={9} style={{ textAlign: 'center', padding: '2rem', color: '#9CA3AF' }}>{t.no_leads}</td></tr>
            ) : filtered.map(lead => (
              <LeadRow
                key={lead.id}
                lead={lead}
                t={t}
                editingCell={editingCell}
                setEditingCell={setEditingCell}
                onInlineEdit={handleInlineEdit}
                onEdit={() => openEdit(lead)}
                onDelete={() => handleDelete(lead.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <LeadModal
          lead={editingLead}
          onSave={handleSave}
          onDelete={editingLead ? () => { handleDelete(editingLead.id); setModalOpen(false) } : null}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}

// Top-level components avoid React hooks-in-nested-function violation
function EditableText({ leadId, field, value, multiline, isEditing, setEditingCell, onInlineEdit }) {
  const [val, setVal] = useState(value || '')

  useEffect(() => { setVal(value || '') }, [value])

  if (isEditing) {
    const sharedProps = {
      autoFocus: true,
      value: val,
      onChange: e => setVal(e.target.value),
      onBlur: () => onInlineEdit(leadId, field, val),
      onKeyDown: e => {
        if (e.key === 'Enter' && !e.shiftKey) onInlineEdit(leadId, field, val)
        if (e.key === 'Escape') setEditingCell(null)
      },
      className: 'inline-input',
    }
    return multiline ? <textarea rows={2} {...sharedProps} /> : <input type="text" {...sharedProps} />
  }
  return (
    <span
      className="editable-cell"
      onClick={() => setEditingCell({ id: leadId, field })}
      title="Click to edit"
    >
      {value || <span style={{ color: '#D1D5DB' }}>—</span>}
    </span>
  )
}

function EditableDate({ leadId, field, value, isEditing, setEditingCell, onInlineEdit }) {
  if (isEditing) {
    return (
      <input
        type="date"
        autoFocus
        defaultValue={value || ''}
        className="inline-input"
        onBlur={e => onInlineEdit(leadId, field, e.target.value || null)}
        onKeyDown={e => { if (e.key === 'Escape') setEditingCell(null) }}
      />
    )
  }
  return (
    <span className="editable-cell" onClick={() => setEditingCell({ id: leadId, field })}>
      {value ? formatDate(value) : <span style={{ color: '#D1D5DB' }}>—</span>}
    </span>
  )
}

function EditableStatus({ leadId, status, isEditing, setEditingCell, onInlineEdit }) {
  if (isEditing) {
    return (
      <select
        autoFocus
        defaultValue={status}
        className="inline-input"
        onChange={e => onInlineEdit(leadId, 'status', e.target.value)}
        onBlur={() => setEditingCell(null)}
      >
        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
    )
  }
  const colors = STATUS_COLORS[status] || STATUS_COLORS['To Contact']
  return (
    <span
      className="status-pill"
      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}`, cursor: 'pointer' }}
      onClick={() => setEditingCell({ id: leadId, field: 'status' })}
    >
      {status}
    </span>
  )
}

function EditableNiche({ leadId, niche, isEditing, setEditingCell, onInlineEdit }) {
  if (isEditing) {
    return (
      <select
        autoFocus
        defaultValue={niche}
        className="inline-input"
        onChange={e => onInlineEdit(leadId, 'niche', e.target.value)}
        onBlur={() => setEditingCell(null)}
      >
        {NICHES.map(n => <option key={n} value={n}>{n}</option>)}
      </select>
    )
  }
  const colors = NICHE_COLORS[niche] || NICHE_COLORS['Other']
  return (
    <span
      className="niche-pill"
      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}`, cursor: 'pointer' }}
      onClick={() => setEditingCell({ id: leadId, field: 'niche' })}
    >
      {niche || '—'}
    </span>
  )
}

function LeadRow({ lead, t, editingCell, setEditingCell, onInlineEdit, onEdit, onDelete }) {
  const isEditing = (field) => editingCell?.id === lead.id && editingCell?.field === field

  const igHandle = lead.instagram
    ? lead.instagram.replace('https://instagram.com/', '@').replace('https://', '')
    : ''

  return (
    <tr className="lead-row">
      <td className="td-company">
        <EditableText leadId={lead.id} field="company" value={lead.company} isEditing={isEditing('company')} setEditingCell={setEditingCell} onInlineEdit={onInlineEdit} />
        <div className="td-source">{lead.source}</div>
      </td>
      <td>
        <EditableNiche leadId={lead.id} niche={lead.niche} isEditing={isEditing('niche')} setEditingCell={setEditingCell} onInlineEdit={onInlineEdit} />
      </td>
      <td>
        {lead.instagram ? (
          <div className="instagram-cell">
            <a href={lead.instagram} target="_blank" rel="noopener noreferrer" className="ig-link" title={t.open_profile}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <span className="ig-handle">{igHandle}</span>
          </div>
        ) : <span style={{ color: '#D1D5DB' }}>—</span>}
      </td>
      <td>
        <EditableStatus leadId={lead.id} status={lead.status} isEditing={isEditing('status')} setEditingCell={setEditingCell} onInlineEdit={onInlineEdit} />
      </td>
      <td className="td-hook">
        <EditableText leadId={lead.id} field="hook" value={lead.hook} multiline isEditing={isEditing('hook')} setEditingCell={setEditingCell} onInlineEdit={onInlineEdit} />
      </td>
      <td>
        <EditableDate leadId={lead.id} field="last_contact" value={lead.last_contact} isEditing={isEditing('last_contact')} setEditingCell={setEditingCell} onInlineEdit={onInlineEdit} />
      </td>
      <td>
        <EditableDate leadId={lead.id} field="next_followup" value={lead.next_followup} isEditing={isEditing('next_followup')} setEditingCell={setEditingCell} onInlineEdit={onInlineEdit} />
      </td>
      <td className="td-notes">
        <EditableText leadId={lead.id} field="notes" value={lead.notes} multiline isEditing={isEditing('notes')} setEditingCell={setEditingCell} onInlineEdit={onInlineEdit} />
      </td>
      <td>
        <div className="action-btns">
          <button className="btn-icon" onClick={onEdit} title={t.edit}>✏️</button>
          <button className="btn-icon btn-icon-danger" onClick={onDelete} title={t.btn_delete}>🗑</button>
        </div>
      </td>
    </tr>
  )
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const [y, m, d] = dateStr.split('-')
  return `${d}/${m}/${y}`
}
