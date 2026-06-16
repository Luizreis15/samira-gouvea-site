'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
}

const viewport = { once: true, margin: '-40px' } as const

const LINK_CARDS = [
  {
    id: 'codigo',
    thumb: 'CM',
    thumbImg: null as string | null,
    title: 'Código Magnético',
    description:
      'Destrave seu posicionamento e transforme o Instagram em um canal de atração, percepção de valor e vendas.',
    href: 'https://codigomagnetico.online',
  },
  {
    id: 'maquina',
    thumb: 'MC',
    thumbImg: null,
    title: 'Máquina de Conteúdo',
    description:
      'Clareza, constância e direção para criar conteúdo com intenção de posicionamento e autoridade.',
    href: 'https://maquina.samiragouvea.com.br',
  },
  {
    id: 'empodhera',
    thumb: '',
    thumbImg: '/empodhera-evento.jpg',
    title: 'EmpodHERA · 2ª edição',
    description:
      'Santo André · Agosto 2026. O encontro presencial de mulheres que constroem marcas com propósito. Vagas limitadas.',
    href: 'https://empodhera.com',
  },
  {
    id: 'instagram',
    thumb: 'IG',
    thumbImg: null,
    title: 'Instagram',
    description:
      'Branding, posicionamento e estratégia todos os dias.',
    href: 'https://instagram.com/samiragouvea.mkt',
  },
]

function LinkCard({
  card,
  variants,
}: {
  card: (typeof LINK_CARDS)[number]
  variants: Variants
}) {
  return (
    <motion.article className="link-card" variants={variants}>
      <div className="link-card-row">
        <div className="link-card-thumb" aria-hidden>
          {card.thumbImg ? (
            <Image
              src={card.thumbImg}
              alt=""
              width={56}
              height={56}
              loading="lazy"
            />
          ) : (
            card.thumb
          )}
        </div>
        <div className="link-card-body">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </div>
      <a
        className="btn btn-cta btn-arrow"
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Acesse agora</span>
        <span aria-hidden>→</span>
      </a>
    </motion.article>
  )
}

export default function Home() {
  return (
    <main id="inicio">
      {/* Hero — referência: foto circular + orbitais → marca → headline */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="orbital orbital--a">Branding</span>
            <span className="orbital orbital--b">Posicionamento</span>
            <span className="orbital orbital--c">Instagram</span>
            <span className="orbital orbital--d">Estratégia</span>

            <div className="hero-photo">
              {/* TODO: substituir placeholder por foto real em /public/samira-hero.jpg */}
              <Image
                src="/samira-hero.jpg"
                alt="Samira Gouvêa, especialista em branding e posicionamento"
                width={260}
                height={260}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.span
            className="hero-brand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
          >
            Samira Gouvêa
          </motion.span>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease }}
          >
            Por onde sua marca começa?
          </motion.h1>
        </div>
      </section>

      {/* Cards-link — protagonista */}
      <section id="produtos" aria-label="Destinos e produtos">
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

      {/* Sobre — referência: foto, pill, bio, métricas, citação */}
      <section id="sobre" className="about" aria-labelledby="about-title">
        <div className="container">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45, ease }}
          >
            {/* TODO: substituir placeholder por foto real em /public/samira-about.jpg */}
            <Image
              src="/samira-about.jpg"
              alt="Samira Gouvêa, especialista em branding"
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
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.a
              className="btn btn-outline"
              href="#sobre"
              variants={fadeUp}
              style={{ marginBottom: 16, display: 'inline-flex' }}
            >
              Conheça a especialista
            </motion.a>

            <motion.div className="about-intro" variants={fadeUp}>
              <h2 id="about-title">
                Quem é a <em>Samira Gouvêa</em>
              </h2>
              <p>
                Especialista em branding e marketing digital com foco em
                posicionamento estratégico no Instagram. Une branding,
                estratégia e conteúdo para transformar a presença digital de
                marcas e especialistas em um ativo de autoridade e vendas.
              </p>
            </motion.div>

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

            <motion.blockquote
              className="quote-card"
              variants={fadeUp}
              cite="Samira Gouvêa"
            >
              <p>
                Sua presença digital deve parecer tão valiosa quanto a marca
                que você está construindo.
              </p>
              <cite>— Samira Gouvêa</cite>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Footer — referência: logo + links + legal */}
      <footer className="footer">
        <div className="container">
          <a href="#inicio" className="footer-brand">
            Samira Gouvêa
          </a>
          <nav className="footer-links" aria-label="Links">
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
          <div className="footer-legal">
            <a href="#inicio">Termos de uso</a>
            <a href="#inicio">Política de Privacidade</a>
          </div>
          <p className="footer-copy">
            © 2026 Samira Gouvêa · samiragouvea.com.br
          </p>
        </div>
      </footer>
    </main>
  )
}
