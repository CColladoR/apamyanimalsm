// Elegant, warm minimalist mystery teaser portraits for kittens coming soon to the sanctuary

export const createMysteryCatImage = (name: string, note = 'Muy pronto'): string => {
  const isNikki = name.toLowerCase().includes('nikki');
  const accentColor = isNikki ? '#e0a96d' : '#d49b6a';
  const highlightColor = isNikki ? '#fef08a' : '#fed7aa';
  const softBg = isNikki ? '#fcf9f5' : '#faf6f0';
  const midBg = isNikki ? '#f4ece2' : '#f2e8dc';
  const darkBg = isNikki ? '#ece0d1' : '#eae0d2';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <!-- Warm luxury ambient background -->
    <radialGradient id="bgGlow" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="${softBg}"/>
      <stop offset="60%" stop-color="${midBg}"/>
      <stop offset="100%" stop-color="${darkBg}"/>
    </radialGradient>

    <!-- Warm golden inner halo -->
    <radialGradient id="sunHalo" cx="50%" cy="42%" r="42%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.30"/>
      <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>

    <!-- Metallic warm gold gradient -->
    <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="35%" stop-color="#d97706"/>
      <stop offset="70%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>

    <!-- Soft charcoal bronze for kitten silhouette -->
    <linearGradient id="charcoalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#44403c"/>
      <stop offset="100%" stop-color="#292524"/>
    </linearGradient>

    <!-- Drop shadow filter -->
    <filter id="gentleShadow" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#78350f" flood-opacity="0.12"/>
    </filter>
    <filter id="softBadgeShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="800" fill="url(#bgGlow)"/>

  <!-- Subtle ornamental corner frames -->
  <path d="M 60 90 L 60 60 L 90 60" fill="none" stroke="#d6c7b2" stroke-width="2" stroke-linecap="round"/>
  <path d="M 740 90 L 740 60 L 710 60" fill="none" stroke="#d6c7b2" stroke-width="2" stroke-linecap="round"/>
  <path d="M 60 710 L 60 740 L 90 740" fill="none" stroke="#d6c7b2" stroke-width="2" stroke-linecap="round"/>
  <path d="M 740 710 L 740 740 L 710 740" fill="none" stroke="#d6c7b2" stroke-width="2" stroke-linecap="round"/>

  <!-- Golden warm light halo -->
  <circle cx="400" cy="380" r="280" fill="url(#sunHalo)"/>

  <!-- Outer medallion circle with dashed orbit -->
  <circle cx="400" cy="380" r="230" fill="none" stroke="#e7dac7" stroke-width="1.5"/>
  <circle cx="400" cy="380" r="215" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="6 8" opacity="0.45"/>
  
  <!-- Central circular card -->
  <circle cx="400" cy="380" r="195" fill="#ffffff" filter="url(#gentleShadow)"/>
  <circle cx="400" cy="380" r="195" fill="none" stroke="url(#goldRibbon)" stroke-width="2" opacity="0.6"/>

  <!-- Floating delicate gold sparkles around medallion -->
  <path d="M400 130 Q400 144 414 144 Q400 144 400 158 Q400 144 386 144 Q400 144 400 130Z" fill="#d97706"/>
  <path d="M230 220 Q230 230 240 230 Q230 230 230 240 Q230 230 220 230 Q230 230 230 220Z" fill="#f59e0b" opacity="0.8"/>
  <path d="M570 220 Q570 230 580 230 Q570 230 570 240 Q570 230 560 230 Q570 230 570 220Z" fill="#f59e0b" opacity="0.8"/>
  <circle cx="210" cy="340" r="3" fill="#d97706" opacity="0.4"/>
  <circle cx="590" cy="340" r="3" fill="#d97706" opacity="0.4"/>
  <circle cx="225" cy="460" r="2.5" fill="#b45309" opacity="0.35"/>
  <circle cx="575" cy="460" r="2.5" fill="#b45309" opacity="0.35"/>

  <!-- ADORABLE & ELEGANT KITTEN SILHOUETTE -->
  <g transform="translate(400, 385)">
    <!-- Cat body and tail -->
    <!-- Tail curving upwards gracefully -->
    <path d="M 45 60 C 85 55, 105 10, 85 -30 C 78 -45, 62 -40, 68 -22 C 75 0, 60 40, 20 60 Z" fill="url(#charcoalGrad)"/>
    
    <!-- Body back and chest -->
    <path d="M -55 80 C -60 40, -45 5, -20 -15 C -10 -25, 10 -25, 20 -15 C 45 5, 60 40, 55 80 C 45 88, -45 88, -55 80 Z" fill="url(#charcoalGrad)"/>

    <!-- Paws sitting neatly -->
    <ellipse cx="-22" cy="78" rx="14" ry="9" fill="#292524"/>
    <ellipse cx="22" cy="78" rx="14" ry="9" fill="#292524"/>

    <!-- Kitten Head -->
    <circle cx="0" cy="-45" r="48" fill="url(#charcoalGrad)"/>

    <!-- Left and Right Ears (curved, cute kitten proportions) -->
    <path d="M -40 -60 L -54 -115 C -45 -118, -25 -105, -12 -78 Z" fill="url(#charcoalGrad)"/>
    <path d="M 40 -60 L 54 -115 C 45 -118, 25 -105, 12 -78 Z" fill="url(#charcoalGrad)"/>

    <!-- Inner ear soft warm pink/gold accents -->
    <path d="M -36 -66 L -46 -104 C -40 -105, -28 -95, -18 -78 Z" fill="#fed7aa" opacity="0.75"/>
    <path d="M 36 -66 L 46 -104 C 40 -105, 28 -95, 18 -78 Z" fill="#fed7aa" opacity="0.75"/>

    <!-- Cute delicate kitten eyes (warm, kind & curious) -->
    <ellipse cx="-18" cy="-44" rx="7" ry="9" fill="#fbbf24"/>
    <ellipse cx="-18" cy="-44" rx="3.5" ry="8" fill="#1c1917"/>
    <circle cx="-16" cy="-47" r="2.5" fill="#ffffff"/>
    
    <ellipse cx="18" cy="-44" rx="7" ry="9" fill="#fbbf24"/>
    <ellipse cx="18" cy="-44" rx="3.5" ry="8" fill="#1c1917"/>
    <circle cx="20" cy="-47" r="2.5" fill="#ffffff"/>

    <!-- Tiny sweet nose -->
    <polygon points="0,-28 -4,-33 4,-33" fill="#fca5a5"/>

    <!-- Delicate mouth -->
    <path d="M -5 -24 Q 0 -21 5 -24" fill="none" stroke="#78716c" stroke-width="1.5" stroke-linecap="round"/>

    <!-- Whiskers (fine, elegant) -->
    <path d="M -12 -28 Q -45 -34 -70 -30 M -12 -25 Q -45 -25 -68 -18 M -12 -22 Q -45 -16 -62 -6" fill="none" stroke="#a8a29e" stroke-width="1.2" opacity="0.75" stroke-linecap="round"/>
    <path d="M 12 -28 Q 45 -34 70 -30 M 12 -25 Q 45 -25 68 -18 M 12 -22 Q 45 -16 62 -6" fill="none" stroke="#a8a29e" stroke-width="1.2" opacity="0.75" stroke-linecap="round"/>

    <!-- Delicate golden collar ribbon with little heart charm -->
    <path d="M -22 -12 Q 0 -6 22 -12 Q 20 -3 0 1 Q -20 -3 -22 -12 Z" fill="url(#goldRibbon)"/>
    <circle cx="0" cy="2" r="5" fill="#d97706"/>
    <!-- Small heart in charm -->
    <path d="M 0 0 C -2 -3, -4 -1, 0 4 C 4 -1, 2 -3, 0 0 Z" fill="#fef08a"/>
  </g>

  <!-- Top Ribbon Badge: "NUEVA LLEGADA" -->
  <g transform="translate(400, 155)" filter="url(#softBadgeShadow)">
    <rect x="-95" y="-16" width="190" height="32" rx="16" fill="#fdfbf7" stroke="#e7dac7" stroke-width="1.2"/>
    <text x="0" y="5" font-family="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" letter-spacing="2.5" fill="#92400e" text-anchor="middle">
      ✨ NUEVA LLEGADA
    </text>
  </g>

  <!-- Bottom Mystery Badge with Name -->
  <g transform="translate(400, 625)" filter="url(#softBadgeShadow)">
    <!-- Pill button container -->
    <rect x="-160" y="-24" width="320" height="48" rx="24" fill="#ffffff" stroke="url(#goldRibbon)" stroke-width="1.6"/>
    <text x="0" y="6" font-family="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="800" letter-spacing="3" fill="#78350f" text-anchor="middle">
      ✦ ${name.toUpperCase()} ✦
    </text>
  </g>

  <!-- Subtitle note -->
  <text x="400" y="695" font-family="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12.5" font-weight="600" letter-spacing="1.5" fill="#8c7e6d" text-anchor="middle">
    PRÓXIMAMENTE EN ADOPCIÓN
  </text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const NIKKI_MYSTERY_IMAGE = createMysteryCatImage('Nikki');
export const TOFU_MYSTERY_IMAGE = createMysteryCatImage('Tofu');
export const EVOLE_MYSTERY_IMAGE = createMysteryCatImage('Évole');
export const MYSTERY_CAT_IMAGE = NIKKI_MYSTERY_IMAGE;
