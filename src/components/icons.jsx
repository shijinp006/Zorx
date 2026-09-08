/* Minimal stroke icon set (24x24, currentColor) — no emoji, no external assets */

function Base({ children, className = '', filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const IconTrend = ({ className = '' }) => (
  <Base className={className}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </Base>
)

export const IconChat = ({ className = '' }) => (
  <Base className={className}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <path d="M8 12h.01M12 12h.01M16 12h.01" />
  </Base>
)

export const IconSpark = ({ className = '' }) => (
  <Base className={className}>
    <path d="M12 2c.6 4.9 3.1 7.4 8 8-4.9.6-7.4 3.1-8 8-.6-4.9-3.1-7.4-8-8 4.9-.6 7.4-3.1 8-8Z" />
    <path d="M19 2v4M17 4h4" />
  </Base>
)

export const IconCode = ({ className = '' }) => (
  <Base className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Base>
)

export const IconSearch = ({ className = '' }) => (
  <Base className={className}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.5" y2="16.5" />
  </Base>
)

export const IconPlay = ({ className = '' }) => (
  <Base className={className}>
    <rect x="2" y="5" width="20" height="14" rx="3.5" />
    <path d="m10 9.5 5 2.5-5 2.5Z" />
  </Base>
)

export const IconCheck = ({ className = '' }) => (
  <Base className={className}>
    <polyline points="20 6 9 17 4 12" />
  </Base>
)

export const IconArrow = ({ className = '' }) => (
  <Base className={className}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </Base>
)

export const IconTarget = ({ className = '' }) => (
  <Base className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" filled="true" />
  </Base>
)

export const IconBolt = ({ className = '' }) => (
  <Base className={className}>
    <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12Z" />
  </Base>
)

export const IconUsers = ({ className = '' }) => (
  <Base className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Base>
)

export const IconStar = ({ className = '' }) => (
  <Base className={className} filled>
    <path d="M12 2.5l2.85 6.1 6.65.55-5.05 4.35 1.5 6.5L12 16.6 5.95 20l1.5-6.5-5.05-4.35 6.65-.55Z" />
  </Base>
)

export const IconPin = ({ className = '' }) => (
  <Base className={className}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
)
