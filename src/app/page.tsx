'use client'

import { motion, type Variants } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Shared scroll-triggered variants
const cv: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const iv: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

const viewport = { once: true, margin: '-64px' } as const

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <strong>Samira Gouvêa</strong>
          </a>

          <nav className="nav">
            <a href="#sobre">Sobre</a>
            <a href="#metodo">Método</a>
            <a href="#produtos">Produtos</a>
            <a href="#resultados">Resultados</a>
            <a href="#instagram">Instagram</a>
          </nav>

          <div className="actions">
            <a className="btn btn-secondary" href="#instagram">
              Instagram
            </a>
            <a className="btn btn-primary" href="#produtos">
              Conheça os produtos
            </a>
          </div>
        </div>
      </header>

      <main id="inicio">
        {/* ── HERO ── */}
        <section className="hero section-dark">
          <div className="container hero-grid">
            <div className="hero-copy">
              <motion.span
                className="eyebrow"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
              >
                Branding • Posicionamento • Marketing Digital
              </motion.span>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                }}
              >
                <motion.div
                  className="hero-line"
                  style={{
                    width: '1px',
                    height: '120px',
                    background:
                      'linear-gradient(180deg, rgba(193,31,59,0.9), transparent)',
                    marginTop: '12px',
                    transformOrigin: 'top',
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.18, ease }}
                />

                <div className="hero-inner">
                  <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.16, ease }}
                  >
                    Posicione sua marca no Instagram com estratégia, branding e
                    presença que sustenta desejo.
                  </motion.h1>

                  <motion.p
                    className="lead"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.26, ease }}
                  >
                    Samira Gouvêa é especialista em branding e marketing digital
                    com foco em posicionamento estratégico no Instagram para
                    marcas, especialistas e negócios que querem crescer com mais
                    clareza, autoridade e valor percebido.
                  </motion.p>

                  <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.34, ease }}
                  >
                    <a className="btn btn-primary" href="#produtos">
                      Conheça os produtos
                    </a>
                    <a className="btn btn-secondary" href="#instagram">
                      Acompanhe no Instagram
                    </a>
                  </motion.div>

                  <motion.p
                    className="hero-quote"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.44, ease }}
                  >
                    Sua marca não precisa ser mais uma presença online. Precisa
                    ocupar um lugar certo na percepção de quem importa.
                  </motion.p>
                </div>
              </div>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease }}
            >
              <div className="portrait">
                <div className="portrait-card">
                  <h3>Presença com direção.</h3>
                  <p>
                    Uma marca forte no Instagram não grita. Ela sustenta
                    percepção, consistência e valor.
                  </p>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    left: '32px',
                    top: '34px',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    letterSpacing: '0.32em',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    color: 'rgba(247,238,232,0.22)',
                  }}
                >
                  branding estrategico
                </div>
              </div>

              <motion.div
                className="portrait-badge"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.62, ease }}
              >
                Posicionamento estratégico
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── AUTHORITY BAR ── */}
        <section className="authority-bar section-tight">
          <motion.div
            className="container authority-grid"
            variants={cv}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div className="authority-item" variants={iv}>
              Branding aplicado ao digital
            </motion.div>
            <motion.div className="authority-item" variants={iv}>
              Posicionamento estratégico no Instagram
            </motion.div>
            <motion.div className="authority-item" variants={iv}>
              Conteúdo com intenção de venda
            </motion.div>
            <motion.div className="authority-item" variants={iv}>
              Autoridade para marcas e especialistas
            </motion.div>
          </motion.div>
        </section>

        {/* ── SOBRE ── */}
        <section id="sobre" className="section section-dark">
          <div className="container split">
            <motion.div
              className="photo-block"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease }}
            >
              <div className="photo-caption">
                <strong>Marca forte não nasce de improviso.</strong>
                <p className="muted">
                  Nasce de mensagem clara, identidade coerente e presença
                  estratégica.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="stack"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.span className="eyebrow" variants={iv}>
                Sobre a Samira
              </motion.span>
              <motion.h2 variants={iv}>
                Mais do que aparecer, sua marca precisa ser percebida com
                intenção.
              </motion.h2>
              <motion.p variants={iv}>
                A presença digital certa não nasce de posts aleatórios. Nasce de
                posicionamento, direção e consistência.
              </motion.p>
              <motion.p variants={iv}>
                Samira Gouvêa une branding, marketing digital e estratégia para
                ajudar marcas e especialistas a transformarem o Instagram em um
                ativo de autoridade, conexão e vendas.
              </motion.p>
              <motion.p variants={iv}>
                Quando a mensagem é clara, a marca deixa de apenas publicar e
                começa a construir um lugar real na mente de quem precisa
                enxergar seu valor.
              </motion.p>
              <motion.div className="pull-quote" variants={iv}>
                Sua presença digital deve parecer tão valiosa quanto a marca que
                você está construindo.
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── MÉTODO ── */}
        <section id="metodo" className="section section-alt">
          <div className="container">
            <motion.div
              className="section-head"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.span className="eyebrow" variants={iv}>
                Método
              </motion.span>
              <motion.h2 variants={iv}>
                A estrutura por trás de uma marca magnética no Instagram
              </motion.h2>
              <motion.p className="lead" variants={iv}>
                Instagram não é só vitrine. É território de marca. Quando
                branding, posicionamento e conteúdo trabalham juntos, sua
                presença deixa de ser aleatória e passa a comunicar valor com
                densidade e direção.
              </motion.p>
            </motion.div>

            <motion.div
              className="cards-4"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.article className="card card-small" variants={iv}>
                <span className="label">01</span>
                <h3>Posicionamento</h3>
                <p>
                  Clareza de mensagem, diferenciação e direção para construir
                  uma presença que faz sentido para a marca e para o público
                  certo.
                </p>
              </motion.article>

              <motion.article className="card card-small" variants={iv}>
                <span className="label">02</span>
                <h3>Branding</h3>
                <p>
                  Percepção, identidade e valor. Porque ser lembrada não depende
                  só de frequência, mas da forma como sua marca é sentida.
                </p>
              </motion.article>

              <motion.article className="card card-small" variants={iv}>
                <span className="label">03</span>
                <h3>Conteúdo estratégico</h3>
                <p>
                  Conteúdo com intenção, coerência e função. Não apenas para
                  postar mais, mas para comunicar melhor.
                </p>
              </motion.article>

              <motion.article className="card card-small" variants={iv}>
                <span className="label">04</span>
                <h3>Conversão</h3>
                <p>
                  Uma presença que gera conexão, fortalece confiança e conduz o
                  público para a ação com mais naturalidade e consistência.
                </p>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* ── PRODUTOS ── */}
        <section id="produtos" className="section section-dark">
          <div className="container">
            <motion.div
              className="section-head"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.span className="eyebrow" variants={iv}>
                Produtos
              </motion.span>
              <motion.h2 variants={iv}>
                Escolha a próxima etapa da sua marca no digital
              </motion.h2>
              <motion.p className="lead" variants={iv}>
                Cada produto foi pensado para um momento diferente da sua
                jornada. Do destrave de posicionamento à construção de uma
                presença mais estratégica, aqui você encontra o próximo passo
                para fortalecer sua marca no Instagram.
              </motion.p>
            </motion.div>

            <motion.div
              className="cards-3"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.article
                className="card card-product offset-down"
                variants={iv}
              >
                <div className="stack">
                  <span className="label">Entrada</span>
                  <h3>Código Magnético</h3>
                  <p>
                    Para quem quer destravar posicionamento e transformar o
                    Instagram em um canal mais estratégico de atração, percepção
                    de valor e vendas.
                  </p>
                </div>
                <a
                  className="product-footer"
                  href="https://codigomagnetico.online"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Conhecer o Código Magnético</span>
                  <span>↗</span>
                </a>
              </motion.article>

              <motion.article
                className="card card-product featured"
                variants={iv}
              >
                <div className="stack">
                  <span className="label">Estrutura</span>
                  <h3>Máquina de Conteúdo</h3>
                  <p>
                    Para quem precisa de mais clareza, constância e direção na
                    criação de conteúdo com intenção de posicionamento,
                    crescimento e autoridade.
                  </p>
                </div>
                <a
                  className="product-footer"
                  href="https://maquina.samiragouvea.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Conhecer a Máquina de Conteúdo</span>
                  <span>↗</span>
                </a>
              </motion.article>

              <motion.article className="card card-product" variants={iv}>
                <div className="stack">
                  <span className="label">Ecossistema</span>
                  <h3>Samira Gouvêa</h3>
                  <p>
                    Conteúdos, visão estratégica e experiências para construir
                    uma marca forte, desejada e bem posicionada no Instagram.
                  </p>
                </div>
                <a
                  className="product-footer"
                  href="https://samiragouvea.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Explorar o universo da Samira</span>
                  <span>↗</span>
                </a>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* ── PARA QUEM É ── */}
        <section
          className="section section-alt"
          aria-labelledby="publico-title"
        >
          <div className="container split">
            <motion.div
              className="stack"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.span className="eyebrow" variants={iv}>
                Para quem é
              </motion.span>
              <motion.h2 id="publico-title" variants={iv}>
                Esse trabalho é para marcas que querem ser lembradas com mais
                força.
              </motion.h2>
              <motion.p className="lead" variants={iv}>
                Para quem quer construir uma presença mais coerente, estratégica
                e memorável no digital — sem depender de comunicação genérica ou
                estética sem direção.
              </motion.p>
            </motion.div>

            <motion.div
              className="list-grid"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="list-item" variants={iv}>
                <span className="dash" />
                <p>quer se posicionar com mais clareza no Instagram</p>
              </motion.div>
              <motion.div className="list-item" variants={iv}>
                <span className="dash" />
                <p>
                  sente que sua marca comunica menos valor do que realmente
                  entrega
                </p>
              </motion.div>
              <motion.div className="list-item" variants={iv}>
                <span className="dash" />
                <p>
                  quer transformar conteúdo em autoridade, conexão e atração de
                  clientes
                </p>
              </motion.div>
              <motion.div className="list-item" variants={iv}>
                <span className="dash" />
                <p>
                  precisa sair do improviso e construir uma presença mais
                  estratégica
                </p>
              </motion.div>
              <motion.div className="list-item" variants={iv}>
                <span className="dash" />
                <p>
                  quer vender com mais intenção, sem depender de posts
                  aleatórios
                </p>
              </motion.div>
              <motion.div className="list-item" variants={iv}>
                <span className="dash" />
                <p>
                  busca uma marca mais forte, coerente e memorável no digital
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── RESULTADOS ── */}
        <section id="resultados" className="section section-dark">
          <div className="container">
            <motion.div
              className="section-head"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.span className="eyebrow" variants={iv}>
                Resultados
              </motion.span>
              <motion.h2 variants={iv}>
                Percepção, posicionamento e transformação na prática
              </motion.h2>
              <motion.p className="lead" variants={iv}>
                Quando a estratégia certa encontra uma marca com direção, o
                resultado aparece na forma como o público percebe, responde e se
                conecta.
              </motion.p>
            </motion.div>

            <motion.div
              className="metrics"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="metric" variants={iv}>
                <strong>+X</strong>
                <p>
                  marcas impactadas com estratégia, conteúdo e posicionamento
                </p>
              </motion.div>
              <motion.div className="metric" variants={iv}>
                <strong>+X</strong>
                <p>
                  alunas e clientes que destravaram comunicação e presença
                  digital
                </p>
              </motion.div>
              <motion.div className="metric" variants={iv}>
                <strong>+X</strong>
                <p>
                  reposicionamentos com mais clareza, coerência e percepção de
                  valor
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="cards-3"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.article className="card" variants={iv}>
                <h3>
                  &ldquo;Hoje meu conteúdo faz sentido com a marca que eu quero
                  construir.&rdquo;
                </h3>
                <p className="muted">Depoimento de cliente</p>
              </motion.article>
              <motion.article className="card" variants={iv}>
                <h3>
                  &ldquo;Finalmente consegui comunicar meu valor com mais clareza.&rdquo;
                </h3>
                <p className="muted">Depoimento de cliente</p>
              </motion.article>
              <motion.article className="card" variants={iv}>
                <h3>
                  &ldquo;Meu Instagram deixou de parecer improvisado e começou a
                  transmitir autoridade.&rdquo;
                </h3>
                <p className="muted">Depoimento de cliente</p>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* ── INSTAGRAM ── */}
        <section id="instagram" className="section section-alt">
          <div className="container">
            <motion.div
              className="section-head"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.span className="eyebrow" variants={iv}>
                Instagram
              </motion.span>
              <motion.h2 variants={iv}>
                Acompanhe a Samira no Instagram
              </motion.h2>
              <motion.p className="lead" variants={iv}>
                Conteúdos sobre branding, posicionamento, presença digital e
                estratégia para transformar seu Instagram em uma marca mais
                forte, clara e magnética.
              </motion.p>
              <motion.div variants={iv}>
                <a
                  className="btn btn-secondary"
                  href="https://www.instagram.com/samiragouvea.mkt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir para o Instagram
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="feed"
              variants={cv}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="feed-item" variants={iv}>
                <div className="feed-copy">Posicionamento com clareza.</div>
              </motion.div>
              <motion.div className="feed-item" variants={iv}>
                <div className="feed-copy">
                  Branding aplicado ao Instagram.
                </div>
              </motion.div>
              <motion.div className="feed-item" variants={iv}>
                <div className="feed-copy">Conteúdo com intenção.</div>
              </motion.div>
              <motion.div className="feed-item" variants={iv}>
                <div className="feed-copy">Marca que atrai e vende.</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="section section-dark">
          <div className="container">
            <motion.div
              className="cta-band"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease }}
            >
              <motion.div
                className="stack"
                variants={cv}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.span className="eyebrow" variants={iv}>
                  Próximo passo
                </motion.span>
                <motion.h2 variants={iv}>
                  Seu Instagram pode até existir. Mas sua marca precisa dominar
                  percepção.
                </motion.h2>
                <motion.p className="lead" variants={iv}>
                  Escolha a próxima etapa para construir uma marca mais
                  estratégica, mais desejada e mais preparada para atrair as
                  pessoas certas.
                </motion.p>
                <motion.div className="cta-actions" variants={iv}>
                  <a className="btn btn-light" href="#produtos">
                    Conhecer os produtos
                  </a>
                  <a
                    className="btn btn-ghost-light"
                    href="https://www.instagram.com/samiragouvea.mkt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acompanhar a Samira
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#inicio" className="footer-brand-name">
                Samira Gouvêa
              </a>
              <p className="footer-tagline">
                Branding, posicionamento e presença digital para marcas que
                querem ser percebidas com intenção.
              </p>
            </div>

            <div className="footer-col">
              <h4>Navegação</h4>
              <a href="#sobre">Sobre</a>
              <a href="#metodo">Método</a>
              <a href="#produtos">Produtos</a>
              <a href="#resultados">Resultados</a>
              <a href="#instagram">Instagram</a>
            </div>

            <div className="footer-col">
              <h4>Produtos</h4>
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
                href="https://www.instagram.com/samiragouvea.mkt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @samiragouvea.mkt
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2025 Samira Gouvêa. Todos os direitos reservados.</span>
            <span>samiragouvea.com.br</span>
          </div>
        </div>
      </motion.footer>
    </>
  )
}
