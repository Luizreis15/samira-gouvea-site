import { siteData } from '@/data/site'

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        backdropFilter: 'blur(16px)',
        background: 'rgba(14, 9, 12, 0.72)',
        borderBottom: '1px solid rgba(255, 240, 233, 0.10)',
      }}
    >
      <div
        style={{
          width: 'min(calc(100% - 40px), 1180px)',
          margin: '0 auto',
          minHeight: '82px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        <a
          href="#inicio"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            minWidth: '210px',
          }}
        >
          <strong
            style={{
              fontSize: '2rem',
              lineHeight: 0.88,
              fontWeight: 600,
              color: 'var(--text)',
            }}
          >
            {siteData.brand.name}
          </strong>
          <span
            style={{
              fontSize: '0.82rem',
              color: 'var(--muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {siteData.brand.tagline}
          </span>
        </a>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '26px',
            fontSize: '0.95rem',
            color: 'var(--text-soft)',
          }}
        >
          {siteData.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <a
            href="#instagram"
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
            Instagram
          </a>

          <a
            href="#produtos"
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
            Conheça os produtos
          </a>
        </div>
      </div>
    </header>
  )
}
