import { useState, useEffect, createContext, useContext } from 'react'
import { supabase } from './lib/supabase'
import { translations } from './i18n'
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
import Templates from './pages/Templates'
import './App.css'

export const LangContext = createContext()
export const useLang = () => useContext(LangContext)

function App() {
  const [lang, setLang] = useState('en')
  const [page, setPage] = useState('leads')
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const t = translations[lang]

  useEffect(() => {
    fetchLeads()
    const channel = supabase
      .channel('leads-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'leads' }, () => {
        fetchLeads()
      })
      .subscribe()
    return () => supabase.removeChannel(channel)
  }, [])

  async function fetchLeads() {
    const { data } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) {
      setLeads(data)
      setLoading(false)
    }
  }

  async function addLead(lead) {
    const { error } = await supabase.from('leads').insert([lead])
    if (!error) fetchLeads()
    return error
  }

  async function updateLead(id, updates) {
    const { error } = await supabase.from('leads').update(updates).eq('id', id)
    if (!error) fetchLeads()
    return error
  }

  async function deleteLead(id) {
    await supabase.from('leads').delete().eq('id', id)
    fetchLeads()
  }

  const navItems = [
    { key: 'dashboard', label: t.nav_dashboard, icon: '◉' },
    { key: 'leads', label: t.nav_leads, icon: '≡' },
    { key: 'templates', label: t.nav_templates, icon: '✉' },
  ]

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      <div className="app">
        <aside className="sidebar">
          <div className="sidebar-logo">
            <div className="sidebar-logo-mark">FS</div>
            <div>
              <div className="sidebar-brand">Freedom Square</div>
              <div className="sidebar-tagline">{t.agency_tagline}</div>
            </div>
          </div>

          <nav className="sidebar-nav">
            {navItems.map(item => (
              <button
                key={item.key}
                className={`nav-item ${page === item.key ? 'active' : ''}`}
                onClick={() => setPage(item.key)}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <span className="lang-divider">|</span>
            <button className={`lang-btn ${lang === 'pt' ? 'active' : ''}`} onClick={() => setLang('pt')}>PT</button>
          </div>
        </aside>

        <main className="main-content">
          {loading ? (
            <div className="loading-screen">{t.loading}</div>
          ) : page === 'dashboard' ? (
            <Dashboard leads={leads} />
          ) : page === 'leads' ? (
            <Leads leads={leads} onAdd={addLead} onUpdate={updateLead} onDelete={deleteLead} />
          ) : (
            <Templates />
          )}
        </main>
      </div>
    </LangContext.Provider>
  )
}

export default App
