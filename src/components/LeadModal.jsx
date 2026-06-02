import { useState } from 'react'
import { useLang } from '../App'
import { STATUSES, NICHES, PRIORITIES, PRIORITY_LABELS } from '../i18n'

export default function LeadModal({ lead, onSave, onDelete, onClose }) {
  const { t } = useLang()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    company: lead?.company || '',
    niche: lead?.niche || 'Dental',
    priority: lead?.priority || '',
    source: lead?.source || '',
    instagram: lead?.instagram || '',
    whatsapp: lead?.whatsapp || '',
    hook: lead?.hook || '',
    status: lead?.status || 'To Contact',
    last_contact: lead?.last_contact || '',
    next_followup: lead?.next_followup || '',
    notes: lead?.notes || '',
  })

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.company.trim()) return
    setSaving(true)
    const payload = {
      ...form,
      priority: form.priority || null,
      last_contact: form.last_contact || null,
      next_followup: form.next_followup || null,
    }
    await onSave(payload)
    setSaving(false)
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <h2>{lead ? t.modal_title_edit : t.modal_title_add}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-grid">
            <div className="form-field">
              <label>{t.field_company} <span className="required">*</span></label>
              <input
                type="text"
                required
                value={form.company}
                onChange={e => set('company', e.target.value)}
                placeholder="e.g. Porto Smile Clinic"
              />
            </div>

            <div className="form-field">
              <label>{t.field_niche}</label>
              <select value={form.niche} onChange={e => set('niche', e.target.value)}>
                {NICHES.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>

            <div className="form-field">
              <label>{t.field_priority}</label>
              <select value={form.priority} onChange={e => set('priority', e.target.value)}>
                <option value="">—</option>
                {PRIORITIES.map(p => <option key={p} value={p}>{PRIORITY_LABELS[p]}</option>)}
              </select>
            </div>

            <div className="form-field">
              <label>{t.field_source}</label>
              <input
                type="text"
                value={form.source}
                onChange={e => set('source', e.target.value)}
                placeholder="e.g. Instagram, Google Maps"
              />
            </div>

            <div className="form-field">
              <label>{t.field_status}</label>
              <select value={form.status} onChange={e => set('status', e.target.value)}>
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="form-field form-field-full">
              <label>{t.field_instagram}</label>
              <input
                type="url"
                value={form.instagram}
                onChange={e => set('instagram', e.target.value)}
                placeholder="https://instagram.com/handle"
              />
            </div>

            <div className="form-field">
              <label>{t.field_whatsapp}</label>
              <input
                type="tel"
                value={form.whatsapp}
                onChange={e => set('whatsapp', e.target.value)}
                placeholder="+351 9XX XXX XXX"
              />
            </div>

            <div className="form-field">
              <label>{t.field_last_contact}</label>
              <input type="date" value={form.last_contact} onChange={e => set('last_contact', e.target.value)} />
            </div>

            <div className="form-field">
              <label>{t.field_next_followup}</label>
              <input type="date" value={form.next_followup} onChange={e => set('next_followup', e.target.value)} />
            </div>

            <div className="form-field form-field-full">
              <label>{t.field_hook}</label>
              <textarea
                rows={2}
                value={form.hook}
                onChange={e => set('hook', e.target.value)}
                placeholder="What's the angle to approach them?"
              />
            </div>

            <div className="form-field form-field-full">
              <label>{t.field_notes}</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={e => set('notes', e.target.value)}
                placeholder="Any observations, call notes, etc."
              />
            </div>
          </div>

          <div className="modal-actions">
            {onDelete && (
              <button type="button" className="btn-danger" onClick={onDelete}>{t.btn_delete}</button>
            )}
            <div style={{ flex: 1 }} />
            <button type="button" className="btn-secondary" onClick={onClose}>{t.btn_cancel}</button>
            <button type="submit" className="btn-primary" disabled={saving}>
              {saving ? t.saving : t.btn_save}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
