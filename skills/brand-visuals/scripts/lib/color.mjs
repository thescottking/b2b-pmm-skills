// Color math for brand-visuals. No dependencies.
// Contrast follows WCAG 2.x. Perceptual work happens in OKLab.
// Color-vision simulation uses the Machado, Oliveira and Fernandes (2009)
// matrices at full severity, applied in linear RGB.

export function parseHex(hex) {
  if (typeof hex !== 'string') return null;
  let h = hex.trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
}

export function toHex([r, g, b]) {
  const c = (v) => Math.round(Math.min(1, Math.max(0, v)) * 255).toString(16).padStart(2, '0');
  return ('#' + c(r) + c(g) + c(b)).toUpperCase();
}

export const normHex = (hex) => { const p = parseHex(hex); return p ? toHex(p) : null; };

const toLinear = (v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
const toGamma = (v) => (v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055);

export function luminance(hex) {
  const [r, g, b] = parseHex(hex).map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a, b) {
  const la = luminance(a), lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

export const isDark = (hex) => luminance(hex) < 0.18;

// OKLab
export function toOklab(hex) {
  const [r, g, b] = parseHex(hex).map(toLinear);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

export function fromOklab([L, a, b]) {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  return toHex(lin.map((v) => toGamma(Math.min(1, Math.max(0, v)))));
}

// Mix two colors in OKLab. t = share of b.
export function mix(a, b, t) {
  const A = toOklab(a), B = toOklab(b);
  return fromOklab(A.map((v, i) => v + (B[i] - v) * t));
}

// Move a color's lightness, keeping hue and chroma, until it reaches the
// target contrast against bg. Returns null if no lightness gets there.
export function ensureContrast(fg, bg, target) {
  if (contrast(fg, bg) >= target) return normHex(fg);
  const [L0, a, b] = toOklab(fg);
  const goLighter = isDark(bg);
  let best = null;
  for (let i = 1; i <= 100; i++) {
    const L = goLighter ? L0 + ((1 - L0) * i) / 100 : L0 - (L0 * i) / 100;
    // shrink chroma a little as we approach white or black so the color stays in gamut
    const k = goLighter ? 1 - (i / 100) * 0.35 : 1;
    const c = fromOklab([L, a * k, b * k]);
    if (contrast(c, bg) >= target) { best = c; break; }
  }
  return best;
}

// Pick the candidate with the highest contrast against bg.
export function bestOn(bg, candidates) {
  return candidates.filter(Boolean).reduce((best, c) => (contrast(c, bg) > contrast(best, bg) ? c : best));
}

// Perceptual distance, OKLab, scaled by 100. Around 2 is a just-noticeable
// difference; categorical colors want 10 or more.
export function deltaE(a, b) {
  const A = toOklab(a), B = toOklab(b);
  return Math.hypot(A[0] - B[0], A[1] - B[1], A[2] - B[2]) * 100;
}

const CVD = {
  protanopia: [0.152286, 1.052583, -0.204868, 0.114503, 0.786281, 0.099216, -0.003882, -0.048116, 1.051998],
  deuteranopia: [0.367322, 0.860646, -0.227968, 0.280085, 0.672501, 0.047413, -0.01182, 0.04294, 0.968881],
  tritanopia: [1.255528, -0.076749, -0.178779, -0.078411, 0.930809, 0.147602, 0.004733, 0.691367, 0.3039],
};

export function simulate(hex, type) {
  const m = CVD[type];
  const [r, g, b] = parseHex(hex).map(toLinear);
  const out = [
    m[0] * r + m[1] * g + m[2] * b,
    m[3] * r + m[4] * g + m[5] * b,
    m[6] * r + m[7] * g + m[8] * b,
  ];
  return toHex(out.map((v) => toGamma(Math.min(1, Math.max(0, v)))));
}

export const CVD_TYPES = Object.keys(CVD);

// Every hex and rgb() literal in a string, normalized to #RRGGBB.
export function findColors(text) {
  const found = [];
  for (const m of text.matchAll(/#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g)) found.push({ raw: m[0], hex: normHex(m[0]), index: m.index });
  for (const m of text.matchAll(/rgba?\(\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})/g)) {
    found.push({ raw: m[0], hex: toHex([m[1], m[2], m[3]].map((v) => +v / 255)), index: m.index });
  }
  return found;
}
