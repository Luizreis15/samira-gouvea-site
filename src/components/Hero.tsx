import { siteData } from '@/data/site'

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        padding: '56px 0 70px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-10% auto auto 48%',
          width: '620px',
          height: '620px',
          background:
            'radial-gradient(circle, rgba(193,31,59,0.22) 0%, rgba(193,31,59,0) 68%)',
          transform: 'translateX(-10%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: 'min(calc(100% - 40px), 1180px)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.08fr 0.92fr',
          gap: '72px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '26px',
            paddingRight: '20px',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '12px',
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            <span
              style={{
                width: '42px',
                height: '1px',
                background: 'rgba(247,238,232,0.45)',
                display: 'inline-block',
              }}
            />
            {siteData.hero.eyebrow}
          </span>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '18px',
            }}
          >
            <div
              style={{
                width: '1px',
                height: '120px',
                background:
                  'linear-gradient(180deg, rgba(193,31,59,0.9), transparent)',
                marginTop: '12px',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '26px',
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(3.6rem, 7vw, 6.8rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.03em',
                  maxWidth: '760px',
                  color: 'var(--text)',
                }}
              >
                {siteData.hero.title}
              </h1>

              <p
                style={{
                  margin: 0,
                  fontSize: '1.16rem',
                  color: 'var(--text-soft)',
                  maxWidth: '680px',
                }}
              >
                {siteData.hero.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  paddingTop: '10px',
                }}
              >
                <a
                  href={siteData.hero.primaryCta.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px 22px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: '#fff',
                    background:
                      'linear-gradient(135deg, var(--accent-strong) 0%, var(--accent) 100%)',
                    boxShadow: '0 18px 36px rgba(193, 31, 59, 0.32)',
                    fontWeight: 600,
                    fontSize: '0.96rem',
                  }}
                >
                  {siteData.hero.primaryCta.label}
                </a>

                <a
                  href={siteData.hero.secondaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px 22px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255, 240, 233, 0.16)',
                    color: 'var(--text)',
                    background: 'rgba(255,255,255,0.02)',
                    fontWeight: 600,
                    fontSize: '0.96rem',
                  }}
                >
                  {siteData.hero.secondaryCta.label}
                </a>
              </div>

              <p
                style={{
                  margin: 0,
                  paddingLeft: '24px',
                  borderLeft: '1px solid rgba(193,31,59,0.5)',
                  maxWidth: '480px',
                  color: 'rgba(247,238,232,0.9)',
                  fontSize: '1rem',
                }}
              >
                {siteData.hero.quote}
              </p>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)), linear-gradient(135deg, #2A151D 0%, #4D1725 42%, #190F14 100%)',
              borderRadius: '34px',
              minHeight: '760px',
              boxShadow: 'var(--shadow)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '32px',
              display: 'grid',
              alignItems: 'end',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 70% 25%, rgba(193,31,59,0.32), transparent 25%), radial-gradient(circle at 35% 70%, rgba(255,255,255,0.06), transparent 30%)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'absolute',
                right: '-18px',
                bottom: '8px',
                fontSize: 'clamp(6rem, 13vw, 9.5rem)',
                lineHeight: 0.8,
                letterSpacing: '-0.06em',
                color: 'rgba(255,255,255,0.06)',
                fontWeight: 600,
              }}
            >
              SAMIRA
            </div>

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                background: 'rgba(18,11,15,0.58)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '26px',
                padding: '34px',
                width: '78%',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 18px 40px rgba(0,0,0,0.24)',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: '2.2rem',
                  marginBottom: '10px',
                  color: 'var(--text)',
                }}
              >
                Presença com direção.
              </h3>

              <p
                style={{
                  margin: 0,
                  color: 'rgba(247,238,232,0.72)',
                }}
              >
                Uma marca forte no Instagram não grita. Ela sustenta percepção,
                consistência e valor.
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

          <div
            style={{
              position: 'absolute',
              top: '28px',
              right: '-10px',
              background: 'rgba(20,12,16,0.86)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '999px',
              padding: '12px 18px',
              fontSize: '0.8rem',
              color: 'rgba(247,238,232,0.92)',
              boxShadow: 'var(--shadow)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Posicionamento estratégico
          </div>
        </div>
      </div>
    </section>
  )
}
