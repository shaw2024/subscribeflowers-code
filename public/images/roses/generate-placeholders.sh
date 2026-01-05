#!/bin/bash

# Red roses
cat > rose-red-closed.svg << 'SVG'
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c92a2a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="300" height="300" fill="url(#red-grad)"/>
  <text x="150" y="130" font-family="Arial" font-size="24" font-weight="bold" fill="white" text-anchor="middle">Red Rose</text>
  <text x="150" y="160" font-family="Arial" font-size="18" fill="white" text-anchor="middle">Closed Bud</text>
  <text x="150" y="190" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">rose-red-closed</text>
</svg>
SVG

cat > rose-red-open.svg << 'SVG'
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c92a2a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="300" height="300" fill="url(#red-grad)"/>
  <circle cx="150" cy="150" r="60" fill="rgba(255,255,255,0.3)"/>
  <text x="150" y="130" font-family="Arial" font-size="24" font-weight="bold" fill="white" text-anchor="middle">Red Rose</text>
  <text x="150" y="160" font-family="Arial" font-size="18" fill="white" text-anchor="middle">Full Bloom</text>
  <text x="150" y="190" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">rose-red-open</text>
</svg>
SVG

cat > rose-red-stem.svg << 'SVG'
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c92a2a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="300" height="300" fill="url(#red-grad)"/>
  <rect x="145" y="180" width="10" height="80" fill="rgba(0,100,0,0.5)"/>
  <text x="150" y="130" font-family="Arial" font-size="24" font-weight="bold" fill="white" text-anchor="middle">Red Rose</text>
  <text x="150" y="160" font-family="Arial" font-size="18" fill="white" text-anchor="middle">With Stem</text>
  <text x="150" y="190" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">rose-red-stem</text>
</svg>
SVG

echo "Created red rose SVG placeholders"

# Pink, white, yellow, orange, lavender roses with similar patterns...
for color in pink white yellow orange lavender; do
  case $color in
    pink) c1="#ffc0cb"; c2="#ff69b4"; tc="white" ;;
    white) c1="#f8f9fa"; c2="#dee2e6"; tc="#333" ;;
    yellow) c1="#ffd43b"; c2="#fab005"; tc="#333" ;;
    orange) c1="#ff922b"; c2="#fd7e14"; tc="white" ;;
    lavender) c1="#da77f2"; c2="#9c36b5"; tc="white" ;;
  esac
  
  for view in closed open stem; do
    cat > "rose-${color}-${view}.svg" << SVG
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${color}-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${c2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="300" height="300" fill="url(#${color}-grad)"/>
  <text x="150" y="130" font-family="Arial" font-size="24" font-weight="bold" fill="${tc}" text-anchor="middle">${color^} Rose</text>
  <text x="150" y="160" font-family="Arial" font-size="18" fill="${tc}" text-anchor="middle">${view^}</text>
  <text x="150" y="190" font-family="monospace" font-size="12" fill="${tc}" opacity="0.8" text-anchor="middle">rose-${color}-${view}</text>
</svg>
SVG
  done
done

echo "All 18 SVG placeholder files created!"
ls -1 *.svg
