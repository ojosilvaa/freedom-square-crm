import { useLang } from '../App'
import { STATUS_COLORS, STATUSES, NICHES, NICHE_COLORS } from '../i18n'

export default function Dashboard({ leads }) {
  const { t } = useLang()

  const total = leads.length
  const hot = leads.filter(l => l.priority === 'A').length
  const toContact = leads.filter(l => l.status === 'To Contact').length
  const withIg = leads.filter(l => l.instagram && l.instagram.trim()).length
  const withIgPct = total ? Math.round((withIg / total) * 100) : 0
  const responded = leads.filter(l => ['Replied', 'Meeting Booked', 'Proposal Sent', 'Closed'].includes(l.status)).length
  const closed = leads.filter(l => l.status === 'Closed').length
  const meetings = leads.filter(l => l.status === 'Meeting Booked').length
  const responseRate = total ? Math.round((responded / total) * 100) : 0
  const closeRate = responded ? Math.round((closed / responded) * 100) : 0

  const statusCounts = STATUSES.map(s => ({
    status: s,
    count: leads.filter(l => l.status === s).length,
    colors: STATUS_COLORS[s],
  }))

  const nicheCounts = NICHES.map(n => ({
    niche: n,
    count: leads.filter(l => l.niche === n).length,
    colors: NICHE_COLORS[n] || NICHE_COLORS['Other'],
  })).filter(n => n.count > 0).sort((a, b) => b.count - a.count)

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const upcoming = leads
    .filter(l => l.next_followup)
    .map(l => ({ ...l, followupDate: new Date(l.next_followup + 'T00:00:00') }))
    .filter(l => l.followupDate <= new Date(today.getTime() + 7 * 86400000))
    .sort((a, b) => a.followupDate - b.followupDate)
    .slice(0, 5)

  function followupLabel(dateStr) {
    const d = new Date(dateStr + 'T00:00:00')
    const diff = Math.round((d - today) / 86400000)
    if (diff < 0) return <span style={{ color: '#DC2626', fontWeight: 600 }}>{t.overdue}</span>
    if (diff === 0) return <span style={{ color: '#D97706', fontWeight: 600 }}>{t.today}</span>
    if (diff === 1) return <span style={{ color: '#2563EB', fontWeight: 600 }}>{t.tomorrow}</span>
    return <span style={{ color: '#6B7280' }}>+{diff}d</span>
  }

  const maxStatus = Math.max(...statusCounts.map(s => s.count), 1)
  const maxNiche = Math.max(...nicheCounts.map(n => n.count), 1)

  return (
    <div className="page-container">
      <h1 className="page-title">{t.nav_dashboard}</h1>

      {/* KPI cards */}
      <div className="kpi-grid">
        <KpiCard label={t.total_leads} value={total} color="#1F3864" />
        <KpiCard label={t.hot_leads} value={hot} color="#DC2626" />
        <KpiCard label={t.to_contact_kpi} value={toContact} color="#2E75B6" />
        <KpiCard label={t.with_ig_kpi} value={`${withIgPct}%`} color="#E1306C" />
        <KpiCard label={t.meetings_booked} value={meetings} color="#7C3AED" />
        <KpiCard label={t.response_rate} value={`${responseRate}%`} color="#0EA5E9" />
        <KpiCard label={t.close_rate} value={`${closeRate}%`} color="#16A34A" />
      </div>

      <div className="dashboard-bottom">
        {/* Funnel */}
        <div className="card funnel-card">
          <h2 className="card-title">{t.sales_funnel}</h2>
          <div className="funnel">
            {statusCounts.map(({ status, count, colors }) => (
              <div key={status} className="funnel-row">
                <div className="funnel-label">
                  <span className="status-pill" style={{
                    background: colors.bg,
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                  }}>{status}</span>
                </div>
                <div className="funnel-bar-wrap">
                  <div
                    className="funnel-bar"
                    style={{
                      width: `${(count / maxStatus) * 100}%`,
                      background: colors.border,
                      minWidth: count > 0 ? '4px' : '0',
                    }}
                  />
                </div>
                <div className="funnel-count">{count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Follow-ups */}
        <div className="card">
          <h2 className="card-title">{t.recent_activity}</h2>
          {upcoming.length === 0 ? (
            <p className="empty-msg">{t.no_followups}</p>
          ) : (
            <div className="followup-list">
              {upcoming.map(l => (
                <div key={l.id} className="followup-row">
                  <div>
                    <div className="followup-company">{l.company}</div>
                    <div className="followup-niche">{l.niche}</div>
                  </div>
                  <div>{followupLabel(l.next_followup)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* By niche — full width */}
      <div className="card niche-card">
        <h2 className="card-title">{t.by_niche}</h2>
        <div className="niche-grid">
          {nicheCounts.map(({ niche, count, colors }) => (
            <div key={niche} className="niche-chip" style={{ borderLeft: `4px solid ${colors.border}` }}>
              <div className="niche-chip-top">
                <span className="niche-chip-name">{niche}</span>
                <span className="niche-chip-count" style={{ color: colors.text }}>{count}</span>
              </div>
              <div className="niche-chip-bar-wrap">
                <div className="niche-chip-bar" style={{ width: `${(count / maxNiche) * 100}%`, background: colors.border }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function KpiCard({ label, value, color }) {
  return (
    <div className="kpi-card" style={{ borderTop: `4px solid ${color}` }}>
      <div className="kpi-value" style={{ color }}>{value}</div>
      <div className="kpi-label">{label}</div>
    </div>
  )
}
