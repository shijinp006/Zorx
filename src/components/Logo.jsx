/* Official ZORX lockup — geometric green wordmark + "Fueling Brands Growth"
   tagline, recreated as a crisp vector (no image dependency).
   tone="green" for light surfaces, tone="white" for dark surfaces. */

export default function Logo({ variant = 'nav', tone = 'green', className = '' }) {
  const dims =
    variant === 'loader'
      ? 'w-44 md:w-56'
      : variant === 'footer'
        ? 'w-40 md:w-48'
        : 'w-28 md:w-32'

  const color = tone === 'white' ? '#F4F1E6' : '#12914A'

  return (
    <svg viewBox="0 0 320 104" className={`${dims} ${className}`} role="img" aria-label="ZORX — Fueling Brands Growth">
      <g fontFamily="'Sora', Arial, sans-serif">
        <text
          x="160"
          y="62"
          textAnchor="middle"
          fontSize="66"
          fontWeight="800"
          letterSpacing="4"
          fill={color}
        >
          ZORX
        </text>
      </g>
      <text
        x="160"
        y="92"
        textAnchor="middle"
        fontSize="16.5"
        fontWeight="600"
        letterSpacing="3.2"
        fill={color}
        opacity="0.85"
        fontFamily="'Manrope', Arial, sans-serif"
      >
        Fueling Brands Growth
      </text>
    </svg>
  )
}
