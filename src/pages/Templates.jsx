import { useState } from 'react'
import { useLang } from '../App'

const TEMPLATES = [
  {
    category: 'Instagram DM — Dental Clinics',
    items: [
      {
        title: 'First Contact — Dental',
        body: `Hi! 👋 I came across [Clinic Name] on Instagram and I love what you're building.

I work with dental clinics in Porto to help them attract more patients through Meta Ads and professional social media management.

Would you be open to a quick 15-minute call this week to see if we could help you grow? No commitment — just a conversation. 😊`,
      },
      {
        title: 'Follow-up #1 (3 days later)',
        body: `Hey! Just following up on my message from earlier this week 🙏

I know you're busy running the clinic, so I'll keep it short — we specialize in helping dental clinics in Porto get more patient enquiries through targeted ads.

Would a quick call make sense? Happy to fit around your schedule.`,
      },
    ],
  },
  {
    category: 'Instagram DM — Aesthetic Clinics',
    items: [
      {
        title: 'First Contact — Aesthetic',
        body: `Hi! I've been following [Clinic Name] for a while — your content is really polished 👌

I help aesthetic clinics in Porto scale their patient bookings with Meta Ads and strategic content. Most clients see results within the first 30 days.

Would you be open to a quick conversation this week?`,
      },
      {
        title: 'Follow-up #1 (3 days later)',
        body: `Hey! Just checking in — did you get a chance to see my previous message?

I know running a clinic keeps you incredibly busy, so I'll be direct: we've helped similar aesthetic clinics in Porto increase their enquiries by 40–60% in 60 days.

Worth a 15-minute chat? 📲`,
      },
    ],
  },
  {
    category: 'Instagram DM — Fitness & Pilates Studios',
    items: [
      {
        title: 'First Contact — Studio',
        body: `Hi! Love what [Studio Name] is doing in Porto 🙌

I work with fitness studios and pilates spaces to fill their classes with targeted local ads. Most studios we work with see new trial bookings within the first week.

Would it make sense to jump on a quick call and explore if this could work for you?`,
      },
      {
        title: 'Follow-up #1 (3 days later)',
        body: `Hey! Just following up 🙏

Running a studio takes everything you've got — so I'll make this simple. We run Meta Ads campaigns specifically for fitness studios in Porto, typically getting 10–20 new leads per month.

Free 15-min call this week to see if it's a fit?`,
      },
    ],
  },
  {
    category: 'Instagram DM — Hotels & Boutique Stays',
    items: [
      {
        title: 'First Contact — Hotel',
        body: `Hi! I discovered [Hotel Name] on Instagram — the photos are stunning, you really capture Porto's soul 🌟

I help boutique hotels and guesthouses increase direct bookings and reduce OTA dependency through targeted Meta Ads and social media management.

Would love to share a couple of ideas specific to you — would a quick call work this week?`,
      },
    ],
  },
  {
    category: 'Instagram DM — Restaurants',
    items: [
      {
        title: 'First Contact — Restaurant',
        body: `Hi! Stumbled across [Restaurant Name] and honestly your food looks incredible 🍽️

I help local restaurants in Porto drive more reservations and foot traffic through Meta Ads and professional content. No massive budget needed — we make it work efficiently.

Would you be open to a 15-min chat to explore what's possible?`,
      },
    ],
  },
  {
    category: 'WhatsApp Templates',
    items: [
      {
        title: 'WhatsApp — First Reach',
        body: `Hi [Name]! 👋 This is [Your Name] from Freedom Square, a marketing agency based in Porto.

I specialise in helping local businesses like [Business Name] get more clients through Meta Ads and social media.

I'd love to share a few ideas — would you have 15 minutes for a quick call this week? 🙏`,
      },
      {
        title: 'WhatsApp — Follow-up After No Reply (5 days)',
        body: `Hi [Name]! Just following up on my previous message 😊

I know things get hectic — so I'll keep it short. We've been helping businesses in Porto get consistent new clients through targeted ads.

If there's a better time to connect, just let me know! Happy to work around you 📲`,
      },
      {
        title: 'WhatsApp — After Meeting (Warm Follow-up)',
        body: `Hi [Name]! It was great speaking with you today 🙏

As discussed, I'll put together a tailored proposal for [Business Name] and send it over by [date].

In the meantime, feel free to send over any questions. Excited about the potential here! 🚀`,
      },
    ],
  },
  {
    category: 'General Follow-up Templates',
    items: [
      {
        title: 'Final Follow-up (10 days after first contact)',
        body: `Hi! I know you're super busy so this is my last message 🙏

If the timing isn't right now, no problem at all — feel free to reach out whenever it makes sense. I'll leave the door open.

Wishing you all the best with [Business Name]! 🌟`,
      },
      {
        title: 'Re-engagement (after "Lost" / no reply in 60+ days)',
        body: `Hi [Name]! It's been a while — hope [Business Name] is doing great! 🙂

I'm reaching out again because we've launched some new services specifically for [niche] businesses in Porto with really exciting results.

Would you be open to a quick catch-up call to see if the timing is better now?`,
      },
    ],
  },
]

export default function Templates() {
  const { t } = useLang()
  const [copied, setCopied] = useState(null)

  function copyText(idx, text) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(idx)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <div className="page-container">
      <h1 className="page-title">{t.templates_title}</h1>
      <p className="page-subtitle">{t.templates_subtitle}</p>

      <div className="templates-grid">
        {TEMPLATES.map((section, si) => (
          <div key={si} className="template-section">
            <h2 className="template-category">{section.category}</h2>
            <div className="template-cards">
              {section.items.map((tpl, ti) => {
                const idx = `${si}-${ti}`
                return (
                  <div key={ti} className="template-card">
                    <div className="template-card-header">
                      <span className="template-title">{tpl.title}</span>
                      <button
                        className={`copy-btn ${copied === idx ? 'copied' : ''}`}
                        onClick={() => copyText(idx, tpl.body)}
                      >
                        {copied === idx ? `✓ ${t.copied}` : t.copy}
                      </button>
                    </div>
                    <pre className="template-body" onClick={() => copyText(idx, tpl.body)}>{tpl.body}</pre>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
