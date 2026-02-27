/**
 * Generates a tiny shimmer SVG encoded as a base64 data URL.
 * Used as blurDataURL for next/image placeholder="blur".
 */

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e2e0dc" offset="20%" />
      <stop stop-color="#d4d1cc" offset="50%" />
      <stop stop-color="#e2e0dc" offset="80%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e2e0dc" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)">
    <animate attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite" />
  </rect>
</svg>`;

function toBase64(str: string) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

export function shimmerBlur(w = 700, h = 475): string {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
}

/** Pre-generated blur placeholder for common use */
export const BLUR_DATA_URL = shimmerBlur();
