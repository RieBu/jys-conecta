/**
 * IsometricPlayButton — botón 3D isométrico con glow en hover/focus/active.
 * Recoloreado a la paleta JyS (carmesí + ámbar) desde el original púrpura.
 */
export default function IsometricPlayButton({ label = "Ver demo", onClick, id = "iso-play" }) {
  const uid = (n) => `${id}-${n}`;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="iso-play cursor-pointer grid place-items-center focus:outline-none"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect className="iso-side" x="5.05" y="51" width="90.62" height="8" />
        <rect className="iso-side iso-side-back" width="57" height="57" rx="8" transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)" />
        <g clipPath={`url(#${uid("clip")})`}>
          <rect className="iso-top" width="57" height="57" rx="8" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" />
          <path className="iso-side iso-play-shape" d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z" />
          <g className="iso-glow-strong" filter={`url(#${uid("glow-strong")})`}>
            <path d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z" fill="white" />
          </g>
          <g className="iso-glow" opacity="0.5" filter={`url(#${uid("glow")})`}>
            <path d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z" fill="white" />
          </g>
        </g>
        <defs>
          <filter id={uid("glow-strong")} x="23.4353" y="34.5" width="48.7846" height="34.9282" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1" result="shape" />
          </filter>
          <filter id={uid("glow")} x="3.37613" y="20.9032" width="85.6716" height="62.9873" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="8" result="blur" />
          </filter>
          <clipPath id={uid("clip")}>
            <rect width="57" height="57" rx="8" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
