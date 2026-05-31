import { useState } from 'react'
import { useLang } from '../App'

const TEMPLATES_EN = [
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

I know you're busy running the clinic, so I'll keep it short — we specialise in helping dental clinics in Porto get more patient enquiries through targeted ads.

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
    category: 'Instagram DM — Hotels & Restaurants',
    items: [
      {
        title: 'First Contact — Hotel',
        body: `Hi! I discovered [Hotel Name] on Instagram — the photos are stunning, you really capture Porto's soul 🌟

I help boutique hotels increase direct bookings and reduce OTA dependency through Meta Ads and social media management.

Would love to share a couple of ideas — would a quick call work this week?`,
      },
      {
        title: 'First Contact — Restaurant',
        body: `Hi! Stumbled across [Restaurant Name] and honestly your food looks incredible 🍽️

I help restaurants in Porto drive more reservations and foot traffic through Meta Ads and professional content. No massive budget needed — we make it work efficiently.

Would you be open to a 15-min chat?`,
      },
    ],
  },
  {
    category: 'LinkedIn / Email — Tech & SaaS',
    items: [
      {
        title: 'First Contact — Tech Startup',
        body: `Hi [Name],

I came across [Company] and was impressed by [specific achievement — funding round / product / growth].

I'm Daria from Freedom Square, a marketing agency based in Porto. We help funded tech companies accelerate growth through performance marketing (Google Ads, Meta Ads, SEO and content).

Would it make sense to have a 20-minute call to explore if we could add value at this stage of your growth?

Best,
Daria
Freedom Square | freedomsquare.eu`,
      },
      {
        title: 'Follow-up — Tech (5 days later)',
        body: `Hi [Name],

Just following up on my previous message — I know your inbox is busy!

One quick thought: most funded startups we work with underinvest in paid acquisition early on and lose ground to competitors. We'd love to show you what a lean, high-ROI campaign could look like for [Company].

Happy to send over a short deck if that's easier than a call.

Best,
Daria`,
      },
    ],
  },
  {
    category: 'WhatsApp Templates',
    items: [
      {
        title: 'First Reach',
        body: `Hi [Name]! 👋 This is Daria from Freedom Square, a marketing agency based in Porto.

I specialise in helping businesses like [Business Name] get more clients through Meta Ads and social media.

I'd love to share a few ideas — would you have 15 minutes for a quick call this week? 🙏`,
      },
      {
        title: 'Follow-up After No Reply (5 days)',
        body: `Hi [Name]! Just following up on my previous message 😊

I know things get hectic — so I'll keep it short. We've been helping businesses in Porto get consistent new clients through targeted ads.

If there's a better time to connect, just let me know! 📲`,
      },
      {
        title: 'After Meeting (Warm Follow-up)',
        body: `Hi [Name]! It was great speaking with you today 🙏

As discussed, I'll put together a tailored proposal for [Business Name] and send it over by [date].

In the meantime, feel free to send over any questions. Excited about the potential here! 🚀`,
      },
    ],
  },
  {
    category: 'Partnership Outreach — Design Studios & Photographers',
    items: [
      {
        title: 'DM / Email — Design Studio Partner',
        body: `Hi [Name]! 👋

I've been following [Studio Name]'s work — the branding projects are really impressive.

I'm Daria from Freedom Square, a marketing agency in Porto. I noticed we serve a lot of the same clients (clinics, restaurants, hotels) but with completely different services — you handle brand and design, we handle paid ads and social media growth.

I'd love to explore a referral partnership: when your clients need marketing execution, you refer them to us (and earn 15%), and when our clients need design work, we send them your way.

Would a quick coffee or call make sense? 😊`,
      },
      {
        title: 'DM / WhatsApp — Photographer Partner',
        body: `Hi [Name]!

I love your work with [type of clients — hotels / restaurants / clinics].

I'm Daria from Freedom Square — we're a marketing agency in Porto and we work with exactly the same clients as you. The difference is: you capture the content, we make sure it reaches the right people through ads and social media strategy.

A lot of our clients ask us "who should I hire for photos?" — and I'd love to be able to recommend you. And vice versa.

Would you be open to a quick chat about a referral partnership? No cost, no contracts — just mutual referrals. 🤝`,
      },
    ],
  },
  {
    category: 'Partnership Outreach — Accountants & Consultants',
    items: [
      {
        title: 'Email — Accountant / TOC Partner',
        body: `Subject: Partnership proposal — referral fee for marketing leads

Hi [Name],

I'm Daria, founder of Freedom Square, a marketing agency based in Porto specialising in digital marketing for businesses with €1M+ revenue (clinics, hotels, restaurants, tech companies).

I'm reaching out because accountants like yourself often know before anyone else which clients are growing and ready to invest in marketing.

My proposal is simple: whenever one of your clients needs marketing support and you refer them to us, you receive a 15% referral fee on the first contract — with zero extra work on your end.

Would you be open to a 20-minute call to discuss how this could work?

Best regards,
Daria
Freedom Square | freedomsquare.eu`,
      },
      {
        title: 'Email — Business Consultant Partner',
        body: `Subject: Complementary services — partnership opportunity

Hi [Name],

I'm Daria from Freedom Square, a Porto-based marketing agency. I came across your consultancy and noticed we serve similar clients but with complementary services — you advise on business strategy, we execute the marketing side.

Many of your clients probably have growth targets that require a stronger marketing presence. We could be the execution partner you refer them to, and you'd earn a 15% referral commission on every contract.

Happy to explore a formal partnership agreement or simply an informal referral arrangement — whatever works best for you.

Would you have 20 minutes for a call this week?

Best,
Daria`,
      },
    ],
  },
  {
    category: 'Partnership Outreach — Aesthetic Equipment Suppliers',
    items: [
      {
        title: 'Email / LinkedIn — Equipment Distributor',
        body: `Subject: Partnership for your clinic clients — marketing support post-purchase

Hi [Name],

I'm Daria from Freedom Square, a marketing agency in Porto specialising in aesthetic and medical clinics.

I'd like to propose a partnership tailored to your business model: when a clinic purchases equipment from you (a Morpheus8, laser, etc.), they immediately need to attract new patients to get ROI on that investment. That's exactly what we do.

The idea: you refer newly equipped clinics to us, we offer them a priority onboarding and a discounted first month, and you receive a referral commission. Your client gets their investment paid off faster — which reflects well on you.

Would this be worth a conversation?

Best,
Daria
Freedom Square | freedomsquare.eu`,
      },
    ],
  },
  {
    category: 'General Follow-ups',
    items: [
      {
        title: 'Final Follow-up (10 days — clients)',
        body: `Hi! I know you're super busy so this is my last message 🙏

If the timing isn't right now, no problem at all — feel free to reach out whenever it makes sense. I'll leave the door open.

Wishing you all the best with [Business Name]! 🌟`,
      },
      {
        title: 'Re-engagement (60+ days no reply)',
        body: `Hi [Name]! It's been a while — hope [Business Name] is doing great! 🙂

I'm reaching out again because we've launched some new services specifically for [niche] businesses in Porto with really exciting results.

Would you be open to a quick catch-up call to see if the timing is better now?`,
      },
    ],
  },
]

const TEMPLATES_PT = [
  {
    category: 'Instagram DM — Clínicas Dentárias',
    items: [
      {
        title: 'Primeiro Contacto — Dentária',
        body: `Olá! 👋 Encontrei a [Nome da Clínica] no Instagram e adorei o que estão a construir.

Trabalho com clínicas dentárias no Porto para as ajudar a atrair mais pacientes através de Meta Ads e gestão profissional de redes sociais.

Estariam abertos a uma chamada rápida de 15 minutos esta semana para ver se podemos ajudar no crescimento? Sem compromisso — só uma conversa. 😊`,
      },
      {
        title: 'Follow-up #1 (3 dias depois)',
        body: `Olá! Só a fazer follow-up da minha mensagem do início da semana 🙏

Sei que estão muito ocupados a gerir a clínica, por isso vou ser breve — especializamo-nos em ajudar clínicas dentárias no Porto a conseguir mais marcações através de anúncios segmentados.

Faz sentido uma chamada rápida? Disponível para encaixar no vosso horário.`,
      },
    ],
  },
  {
    category: 'Instagram DM — Clínicas Estéticas',
    items: [
      {
        title: 'Primeiro Contacto — Estética',
        body: `Olá! Tenho seguido a [Nome da Clínica] há algum tempo — o conteúdo está muito profissional 👌

Ajudo clínicas estéticas no Porto a escalar as suas marcações com Meta Ads e conteúdo estratégico. A maioria dos clientes vê resultados nos primeiros 30 dias.

Estariam abertos a uma conversa rápida esta semana?`,
      },
      {
        title: 'Follow-up #1 (3 dias depois)',
        body: `Olá! Só a verificar — tiveram oportunidade de ver a minha mensagem anterior?

Sei que gerir uma clínica ocupa todo o tempo, por isso vou ser directa: ajudámos clínicas estéticas semelhantes no Porto a aumentar as suas consultas em 40–60% em 60 dias.

Vale uma conversa de 15 minutos? 📲`,
      },
    ],
  },
  {
    category: 'Instagram DM — Hotéis e Restaurantes',
    items: [
      {
        title: 'Primeiro Contacto — Hotel',
        body: `Olá! Descobri o [Nome do Hotel] no Instagram — as fotos são deslumbrantes, captam mesmo a alma do Porto 🌟

Ajudo hotéis boutique a aumentar as reservas directas e a reduzir a dependência das OTAs através de Meta Ads e gestão de redes sociais.

Adorava partilhar algumas ideias específicas — uma chamada rápida esta semana seria possível?`,
      },
      {
        title: 'Primeiro Contacto — Restaurante',
        body: `Olá! Encontrei o [Nome do Restaurante] e honestamente a comida parece incrível 🍽️

Ajudo restaurantes no Porto a conseguir mais reservas e afluência através de Meta Ads e conteúdo profissional. Não é preciso um grande orçamento — trabalhamos de forma eficiente.

Estariam abertos a uma conversa de 15 min?`,
      },
    ],
  },
  {
    category: 'LinkedIn / Email — Tech & SaaS',
    items: [
      {
        title: 'Primeiro Contacto — Startup Tech',
        body: `Olá [Nome],

Encontrei a [Empresa] e fiquei impressionada com [conquista específica — ronda de financiamento / produto / crescimento].

Sou a Daria da Freedom Square, uma agência de marketing baseada no Porto. Ajudamos empresas tech financiadas a acelerar o crescimento através de marketing de performance (Google Ads, Meta Ads, SEO e conteúdo).

Faria sentido uma chamada de 20 minutos para explorar se podemos acrescentar valor nesta fase do vosso crescimento?

Cumprimentos,
Daria
Freedom Square | freedomsquare.eu`,
      },
      {
        title: 'Follow-up — Tech (5 dias depois)',
        body: `Olá [Nome],

Só a fazer follow-up da minha mensagem anterior — sei que a caixa de entrada está sempre cheia!

Um pensamento rápido: a maioria das startups financiadas com quem trabalhamos subinvestem em aquisição paga no início e perdem terreno para a concorrência. Adorávamos mostrar-vos como seria uma campanha eficiente para a [Empresa].

Posso enviar um deck curto se for mais fácil do que uma chamada.

Cumprimentos,
Daria`,
      },
    ],
  },
  {
    category: 'WhatsApp',
    items: [
      {
        title: 'Primeiro Contacto',
        body: `Olá [Nome]! 👋 Sou a Daria da Freedom Square, uma agência de marketing baseada no Porto.

Especializo-me em ajudar negócios como a [Nome do Negócio] a conseguir mais clientes através de Meta Ads e redes sociais.

Adorava partilhar algumas ideias — teria 15 minutos para uma chamada rápida esta semana? 🙏`,
      },
      {
        title: 'Follow-up Sem Resposta (5 dias)',
        body: `Olá [Nome]! Só a fazer follow-up da minha mensagem anterior 😊

Sei que as coisas ficam agitadas — por isso vou ser breve. Temos ajudado negócios no Porto a conseguir clientes novos de forma consistente através de anúncios segmentados.

Se houver uma altura melhor para falar, é só dizer! 📲`,
      },
      {
        title: 'Após Reunião (Follow-up Quente)',
        body: `Olá [Nome]! Foi óptimo falar consigo hoje 🙏

Conforme combinámos, vou preparar uma proposta personalizada para a [Nome do Negócio] e enviar até [data].

Entretanto, fique à vontade para enviar qualquer questão. Estou entusiasmada com o potencial aqui! 🚀`,
      },
    ],
  },
  {
    category: 'Parcerias — Estúdios de Design e Fotógrafos',
    items: [
      {
        title: 'DM / Email — Estúdio de Design Parceiro',
        body: `Olá [Nome]! 👋

Tenho seguido o trabalho da [Nome do Estúdio] — os projectos de branding são realmente impressionantes.

Sou a Daria da Freedom Square, uma agência de marketing no Porto. Reparei que servimos muitos dos mesmos clientes (clínicas, restaurantes, hotéis) mas com serviços completamente diferentes — vocês tratam da marca e design, nós tratamos de anúncios pagos e crescimento nas redes sociais.

Adorava explorar uma parceria de referral: quando os vossos clientes precisam de execução de marketing, referem-nos (e ganham 15%), e quando os nossos clientes precisam de design, enviamo-los para vocês.

Faria sentido um café ou uma chamada rápida? 😊`,
      },
      {
        title: 'DM / WhatsApp — Fotógrafo Parceiro',
        body: `Olá [Nome]!

Adoro o vosso trabalho com [tipo de clientes — hotéis / restaurantes / clínicas].

Sou a Daria da Freedom Square — somos uma agência de marketing no Porto e trabalhamos exactamente com os mesmos clientes que vocês. A diferença é: vocês captam o conteúdo, nós garantimos que chega às pessoas certas através de anúncios e estratégia de redes sociais.

Muitos dos nossos clientes perguntam-nos "quem devo contratar para fotografias?" — e adorava poder recomendar-vos. E vice-versa.

Estariam abertos a uma conversa rápida sobre uma parceria de referral? Sem custos, sem contratos — apenas referências mútuas. 🤝`,
      },
    ],
  },
  {
    category: 'Parcerias — Contabilistas e Consultores',
    items: [
      {
        title: 'Email — Contabilista / TOC Parceiro',
        body: `Assunto: Proposta de parceria — comissão de referral em leads de marketing

Olá [Nome],

Sou a Daria, fundadora da Freedom Square, uma agência de marketing baseada no Porto especializada em marketing digital para empresas com faturamento €1M+ (clínicas, hotéis, restaurantes, empresas tech).

Contacto-o porque contabilistas como o senhor muitas vezes sabem antes de qualquer outra pessoa quais os clientes que estão a crescer e prontos para investir em marketing.

A minha proposta é simples: sempre que um dos seus clientes precisar de apoio de marketing e nos recomendar, recebe uma comissão de 15% sobre o primeiro contrato — sem trabalho extra da sua parte.

Estaria aberto a uma chamada de 20 minutos para discutir como isto poderia funcionar?

Com os melhores cumprimentos,
Daria
Freedom Square | freedomsquare.eu`,
      },
      {
        title: 'Email — Consultor de Negócios Parceiro',
        body: `Assunto: Serviços complementares — oportunidade de parceria

Olá [Nome],

Sou a Daria da Freedom Square, uma agência de marketing baseada no Porto. Encontrei a vossa consultoria e reparei que servimos clientes semelhantes mas com serviços complementares — vocês aconselham em estratégia empresarial, nós executamos a componente de marketing.

Muitos dos vossos clientes têm provavelmente objectivos de crescimento que requerem uma presença de marketing mais forte. Poderíamos ser o parceiro de execução para o qual os encaminham, e receberiam uma comissão de referral de 15% em cada contrato.

Disponível para explorar um acordo de parceria formal ou simplesmente um arranjo informal de referral — o que funcionar melhor para vocês.

Teriam 20 minutos para uma chamada esta semana?

Cumprimentos,
Daria`,
      },
    ],
  },
  {
    category: 'Parcerias — Fornecedores de Equipamento Estético',
    items: [
      {
        title: 'Email / LinkedIn — Distribuidor de Equipamento',
        body: `Assunto: Parceria para os vossos clientes — apoio de marketing pós-compra

Olá [Nome],

Sou a Daria da Freedom Square, uma agência de marketing no Porto especializada em clínicas estéticas e médicas.

Gostaria de propor uma parceria adaptada ao vosso modelo de negócio: quando uma clínica compra equipamento (um Morpheus8, laser, etc.), precisa imediatamente de atrair novos pacientes para obter ROI nesse investimento. É exactamente isso que fazemos.

A ideia: referem-nos as clínicas recém-equipadas, oferecemos-lhes um onboarding prioritário e um primeiro mês com desconto, e recebem uma comissão de referral. O vosso cliente recupera o investimento mais rápido — o que reflecte bem em vocês.

Valeria a pena uma conversa?

Cumprimentos,
Daria
Freedom Square | freedomsquare.eu`,
      },
    ],
  },
  {
    category: 'Follow-ups Gerais',
    items: [
      {
        title: 'Último Follow-up (10 dias — clientes)',
        body: `Olá! Sei que está muito ocupado, por isso esta é a minha última mensagem 🙏

Se o momento não for o certo agora, não há problema — fique à vontade para entrar em contacto quando fizer sentido. Fico com a porta aberta.

Desejo-lhe o melhor com o [Nome do Negócio]! 🌟`,
      },
      {
        title: 'Reactivação (60+ dias sem resposta)',
        body: `Olá [Nome]! Já passou algum tempo — espero que o [Nome do Negócio] esteja a correr bem! 🙂

Estou a contactar novamente porque lançámos novos serviços especificamente para negócios do sector [nicho] no Porto com resultados muito interessantes.

Estaria aberto a uma chamada rápida para ver se o momento é melhor agora?`,
      },
    ],
  },
]

export default function Templates() {
  const { lang, t } = useLang()
  const [copied, setCopied] = useState(null)

  const TEMPLATES = lang === 'pt' ? TEMPLATES_PT : TEMPLATES_EN

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
