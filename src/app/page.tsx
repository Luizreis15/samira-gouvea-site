'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

const viewport = { once: true, margin: '-48px' } as const

const LINK_CARDS = [
  {
    id: 'codigo',
    variant: 'wine' as const,
    thumb: 'CM',
    title: 'Código Magnético',
    description:
      'Destrave seu posicionamento e transforme o Instagram em um canal de atração, percepção de valor e vendas.',
    cta: 'Acessar',
    href: 'https://codigomagnetico.online',
    featured: false,
    event: false,
  },
  {
    id: 'maquina',
    variant: 'nude' as const,
    thumb: 'MC',
    title: 'Máquina de Conteúdo',
    description:
      'Clareza, constância e direção para criar conteúdo com intenção de posicionamento e autoridade.',
    cta: 'Acessar',
    href: 'https://maquina.samiragouvea.com.br',
    featured: true,
    event: false,
  },
  {
    id: 'empodhera',
    variant: 'wine' as const,
    thumb: '',
    title: 'EmpodHERA · 2ª edição',
    description:
      'Santo André · Agosto 2026. O encontro presencial de mulheres que constroem marcas com propósito. Vagas limitadas.',
    cta: 'Entrar na lista de espera',
    href: 'https://empodhera.com',
    featured: false,
    event: true,
  },
  {
    id: 'instagram',
    variant: 'nude' as const,
    thumb: 'IG',
    title: 'Instagram',
    description:
      'Branding, posicionamento e estratégia todos os dias.',
    cta: 'Seguir',
    href: 'https://instagram.com/samiragouvea.mkt',
    featured: false,
    event: false,
  },
]

function LinkCard({
  card,
  variants,
}: {
  card: (typeof LINK_CARDS)[number]
  variants: Variants
}) {
  if (card.event) {
    return (
      <motion.article
        className="link-card link-card--event"
        variants={variants}
      >
        {/* TODO: substituir placeholder por foto real do evento em /public/empodhera-evento.jpg */}
        <div className="event-image-wrap" aria-hidden>
          <Image
            src="/empodhera-evento.jpg"
            alt=""
            fill
            sizes="(max-width: 620px) 100vw, 620px"
            loading="lazy"
            className="object-cover"
          />
        </div>
        <span className="event-date-badge">AGO 2026</span>
        <div className="event-overlay">
          <span className="label-pill">2ª edição</span>
          <div className="link-card-body">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          <a
            className="btn btn-primary btn-arrow"
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{card.cta}</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </motion.article>
    )
  }

  const variantClass =
    card.variant === 'nude' ? 'link-card--nude' : 'link-card--wine'

  return (
    <motion.article
      className={`link-card ${variantClass}${card.featured ? ' link-card--featured' : ''}`}
      variants={variants}
    >
      <div className="link-card-head">
        <div className="link-card-thumb" aria-hidden>
          {card.thumb}
        </div>
        <div className="link-card-body">
          {card.featured && (
            <span className="label-pill">Destaque</span>
          )}
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </div>
      <a
        className="btn btn-primary btn-arrow"
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{card.cta}</span>
        <span aria-hidden>→</span>
      </a>
    </motion.article>
  )
}

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            Samira Gouvêa
          </a>
          <a
            className="btn btn-secondary"
            href="https://instagram.com/samiragouvea.mkt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* ── 1. Hero compacto ── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-stack">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="eyebrow">
                Branding · Posicionamento · Instagram
              </span>
              <h1 id="hero-title">Por onde sua marca começa?</h1>
            </motion.div>

            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease }}
            >
              Estratégia, branding e presença que sustentam desejo no Instagram
              — para marcas e especialistas que querem ser percebidas com
              intenção.
            </motion.p>

            <motion.div
              className="hero-photo-wrap"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease }}
              aria-label="Samira Gouvêa — especialista em branding"
            >
              <span className="orbital orbital--a">Branding</span>
              <span className="orbital orbital--b">Posicionamento</span>
              <span className="orbital orbital--c">Instagram</span>
              <span className="orbital orbital--d orbital--seal">
                Estratégia
              </span>

              <div className="hero-photo">
                {/* TODO: substituir placeholder por foto real em /public/samira-hero.jpg */}
                <Image
                  src="/samira-hero.jpg"
                  alt="Samira Gouvêa, especialista em branding e posicionamento no Instagram"
                  width={220}
                  height={293}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.p
              className="quote"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease }}
            >
              Sua marca não precisa ser mais uma presença online. Precisa
              ocupar um lugar certo na percepção de quem importa.
            </motion.p>
          </div>
        </section>

        {/* ── 2. Cards-link (protagonista) ── */}
        <section
          id="produtos"
          aria-label="Destinos e produtos"
        >
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="link-cards"
            >
              {LINK_CARDS.map((card) => (
                <LinkCard key={card.id} card={card} variants={fadeUp} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 3. Sobre ── */}
        <section id="sobre" className="about" aria-labelledby="about-title">
          <div className="container">
            <motion.div
              className="about-photo"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            >
              {/* TODO: substituir placeholder por foto real em /public/samira-about.jpg */}
              <Image
                src="/samira-about.jpg"
                alt="Samira Gouvêa em ambiente profissional"
                width={620}
                height={465}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="about-photo-overlay">
                <strong>Samira Gouvêa</strong>
                <span>Branding &amp; Posicionamento</span>
              </div>
            </motion.div>

            <motion.div
              className="about-stack"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.span className="eyebrow" variants={fadeUp}>
                Conheça a especialista
              </motion.span>
              <motion.h2 id="about-title" variants={fadeUp}>
                Quem é a Samira Gouvêa
              </motion.h2>
              <motion.p className="lead" variants={fadeUp}>
                Especialista em branding e marketing digital com foco em
                posicionamento estratégico no Instagram. Une branding,
                estratégia e conteúdo para transformar a presença digital de
                marcas e especialistas em um ativo de autoridade e vendas.
              </motion.p>

              <motion.div className="metrics" variants={fadeUp}>
                <div className="metric">
                  <strong>+500</strong>
                  <p>alunas em cursos e mentorias</p>
                </div>
                <div className="metric">
                  {/* TODO: número real de seguidores ou métrica confirmada */}
                  <strong>Instagram</strong>
                  <p>branding aplicado ao digital</p>
                </div>
                <div className="metric">
                  <strong>2ª ed.</strong>
                  <p>EmpodHERA · evento presencial</p>
                </div>
              </motion.div>

              <motion.p className="pull-quote" variants={fadeUp}>
                Sua presença digital deve parecer tão valiosa quanto a marca
                que você está construindo.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── 4. CTA + Footer fundidos ── */}
        <section className="site-bottom" aria-label="Chamada final">
          <div className="container">
            <motion.div
              className="cta-band"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            >
              <h2>
                Seu Instagram já existe. Sua marca precisa ocupar percepção.
              </h2>
              <p className="lead">
                Escolha o próximo passo para fortalecer sua presença com
                estratégia, clareza e intenção.
              </p>
              <div className="cta-actions">
                <a className="btn btn-light" href="#produtos">
                  Conhecer os produtos
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://instagram.com/samiragouvea.mkt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acompanhar no Instagram
                </a>
              </div>
            </motion.div>

            <footer className="footer">
              <a href="#inicio" className="footer-brand">
                Samira Gouvêa
              </a>
              <p className="footer-tagline">
                Branding, posicionamento e presença digital para marcas que
                querem ser percebidas com intenção.
              </p>
              <nav className="footer-links" aria-label="Links de produtos">
                <a
                  href="https://codigomagnetico.online"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código Magnético
                </a>
                <a
                  href="https://maquina.samiragouvea.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Máquina de Conteúdo
                </a>
                <a
                  href="https://empodhera.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EmpodHERA · lista de espera
                </a>
                <a
                  href="https://instagram.com/samiragouvea.mkt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @samiragouvea.mkt
                </a>
              </nav>
              <p className="footer-copy">
                © 2026 Samira Gouvêa · samiragouvea.com.br
              </p>
            </footer>
          </div>
        </section>
      </main>
    </>
  )
}
