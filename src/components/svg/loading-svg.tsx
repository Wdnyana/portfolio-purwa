export function LoadingSvg() {
  return (
    <>
      <svg
        id="Layer_Logos"
        data-name="Layer Logos"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 165.33 193.89"
        width={100}
        height={120}
      >
        <defs>
          <style>
            {`
              @keyframes highlight {
                0% { fill: #e85a2455; }
                50% { fill: #e85a24; }
                100% { fill: #e85a2455; }
              }
              .cls-1 {
                fill: #e85a24;
                stroke-width: 0;
                animation: highlight 2.5s ease-in-out infinite;
              }
              .cls-1:nth-child(1) { animation-delay: 0s; }
              .cls-1:nth-child(2) { animation-delay: 0.4s; }
              .cls-1:nth-child(3) { animation-delay: 0.8; }
              .cls-1:nth-child(4) { animation-delay: 1.2s; }
            `}
          </style>
        </defs>
        <polygon
          className="cls-1"
          points="44.3 4.69 56.92 24.62 22.83 128.81 76.18 97.21 99.21 25.11 87.03 4.69 44.3 4.69"
        />
        <polygon
          className="cls-1"
          points="91.78 4.69 102.99 24.61 81.16 94.65 121.41 70.02 132.95 23.75 122.97 4.69 91.78 4.69"
        />
        <polygon
          className="cls-1"
          points="127.35 4.69 137.3 23.3 126.45 67.2 155.93 50.27 162.24 22.36 153.93 4.69 127.35 4.69"
        />
        <polygon
          className="cls-1"
          points="61.04 190.4 46.97 174.62 74.95 102.37 21.85 133.15 3.91 178.84 17.62 190.97 61.04 190.4"
        />
      </svg>
    </>
  )
}
