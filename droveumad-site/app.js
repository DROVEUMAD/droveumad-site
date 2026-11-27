import * as THREE from 'three';
import Lenis from 'lenis';

/* ================= data ================= */
const P = [
  { id: 'dcaw', name: 'Delhi Contemporary Art Week', short: 'DCAW', what: 'Brand Design', year: '2025', tags: 'Branding / Motion', client: 'DCAW',
    media: ['dcaw-01.webp', 'dcaw-02.webp', 'dcaw-03.webp', 'dcaw-04.webp', 'dcaw-05.webp', 'dcaw-06.webp'],
    story: 'Branding for the eighth edition of Delhi Contemporary Art Week, a collaboration between six Delhi galleries at Bikaner House (31 August to 4 September 2025). The identity carried across save-the-dates, exhibition announcements, partner invites and print, with motion and sound design for social.' },
  { id: 'iaf', name: 'India Art Fair', short: 'India Art Fair', what: 'Motion Design & Content', year: '2025', tags: 'Motion / 3D', client: 'India Art Fair',
    media: ['iaf-01.mp4', 'iaf-02.mp4', 'iaf-03.mp4'],
    story: 'Motion design and content for India’s premier art event. From tote bags to timelines, the visuals lived across formats, feeds and print. Artist Ayesha Singh’s monumental facade was unveiled with motion that matched its scale, and bold animations and branded moments gave the fair a scroll-stopping social presence.' },
  { id: 'bud', name: 'Budweiser India', short: 'Budweiser', what: 'Animation for Holi Campaign', year: '2025', tags: 'Motion / 3D', client: 'Budweiser India',
    media: ['bud-01.mp4', 'bud-02.mp4'],
    story: 'Animation for Budweiser India’s Holi campaign, “Holi is yours to take”: the main film, built vertical for social, and a behind-the-scenes cut of the 3D can being built.' },
  { id: 'lat', name: 'Latitude 28', short: 'Latitude 28', what: 'Identity, Packaging & Collateral', year: '2026', tags: 'Branding', client: 'LATITUDE 28',
    media: ['lat-01.webp', 'lat-02.webp', 'lat-03.webp', 'lat-04.webp', 'lat-05.webp'],
    story: 'LATITUDE 28 relocated to a new coordinate in Defence Colony, New Delhi, timed with the gallery’s 15th year and the TAKE on Art x LATITUDE 28 milestone. I designed the announcement collateral, moving box and business cards, carrying the gallery’s line-and-dot mark across formats, from packaging to print.' },
  { id: 'overland', name: 'Overland', short: 'Overland', what: 'Exhibition Identity & Campaign', year: '2026', tags: 'Branding', client: 'LATITUDE 28',
    media: ['overland-01.webp', 'overland-02.webp', 'overland-03.webp', 'overland-04.webp', 'overland-05.webp'],
    story: 'Overland, there’s shorter time to dream was a group show at LATITUDE 28, New Delhi, curated by Shristi Sainani, on how migration reshapes language, body, land and home. I designed the exhibition identity and its campaign: the invite, an animated poster, the artist announcement, and a post and story for every artist in the show, carried by a soft pink horizon and a serif title that runs across each piece.' },
  { id: 'takeon', name: 'Take On Symposium', short: 'Take On', what: 'Branding', year: '2025', tags: 'Branding', client: 'Take On Art Magazine',
    media: ['takeon-03.mp4', 'takeon-01.webp', 'takeon-02.webp'],
    story: 'Branding, social media and print for Take On Symposium by TAKE on Art magazine: an international symposium on indigenous, resistant epistemologies and the normative frame of the contemporary, held at Arthshila, Delhi, on 22 and 23 August 2025. The system ran from the poster to a speaker card for every participant.' },
  { id: 'cohort10', name: '10K Designers — Cohort 10', short: '10K Designers', what: 'Animation, Artwork, Sound Design', year: '2024', tags: 'Motion / 3D', client: '10K Designers',
    media: ['cohort10-01.mp4'],
    story: 'Animation, artwork and sound design for the tenth cohort of 10K Designers: a 3D logo built like a piece of hardware, with sound to match.' },
  { id: 'badfit', name: 'BADFIT', short: 'BADFIT', what: 'Clothing Collection', year: '2023', tags: 'Fashion', client: 'BADFIT',
    media: ['badfit-01.mp4'],
    story: 'A clothing collection for BADFIT’s Summer ’23 drop, presented as 3D garments in an animated launch film.' },
  { id: 'celid', name: 'Celerus Astra', short: 'Celerus Astra', what: 'Identity, Editorial', year: '2024', tags: 'Branding', client: 'Celerus Astra',
    media: [],
    story: 'Identity and editorial design for Celerus Astra.' },
  { id: 'celani', name: 'Celerus Astra — Animation', short: 'Celerus Astra', what: 'Animation', year: '2023', tags: 'Motion / 3D', client: 'Celerus Astra',
    media: ['celani-01.mp4'],
    story: 'An animation for Celerus Astra.' },
  { id: 'social', name: 'SOCIAL, Saket', short: 'SOCIAL', what: 'Identity, Event Curation', year: '2022', tags: 'Branding', client: 'SOCIAL, Saket',
    media: ['social-01.webp', 'social-02.webp', 'social-03.webp'],
    story: 'Identity and event curation for SOCIAL in Saket, New Delhi, including High Key, a night of pop-ups, music and food, from the identity system to the posters.' },
  { id: 'sales', name: 'Salesfokuz', short: 'Salesfokuz', what: 'UI/UX for CRM', year: '2024', tags: 'Web', client: 'Salesfokuz',
    media: ['sales-01.mp4', 'sales-02.mp4'],
    story: 'UI/UX for Salesfokuz, a CRM, designed for both web and mobile.' },
  { id: 'provenance', name: 'Provenance Capital', short: 'Provenance', what: 'Brand Identity', year: '2023', tags: 'Branding', client: 'Provenance Capital',
    media: ['provenance-01.mp4', 'provenance-02.webp', 'provenance-03.webp'],
    story: 'Brand identity for Provenance Capital across its ventures, trading and asset management arms, from the mark and its animation to print and digital.' },
  { id: 'homehancer', name: 'Homehancer', short: 'Homehancer', what: 'Website', year: '2024', tags: 'Web', client: 'Homehancer',
    media: ['homehancer-01.webp', 'homehancer-02.webp', 'homehancer-03.webp'],
    story: 'A website for Homehancer, an interior design and furniture brand (interiors, modular furnishings, bespoke furniture), designed for desktop and mobile.' },
  { id: 'cohort9', name: '10K Designers — Cohort 9', short: '10K Designers', what: 'Animation, Artwork, Sound Design', year: '2024', tags: 'Motion / 3D', client: '10K Designers',
    media: ['cohort9-01.mp4', 'cohort9-02.webp'],
    story: 'Animation, artwork and sound design for the ninth cohort of 10K Designers, carried through to the cohort’s website.' },
  { id: 'cohort7', name: '10K Designers — Cohort 7', short: '10K Designers', what: 'Branding, 3D', year: '2023', tags: 'Branding / 3D', client: '10K Designers',
    media: ['cohort7-01.mp4'],
    story: 'Branding and 3D for the seventh cohort of 10K Designers, shown here as a vertical animation.' },
  { id: 'akari', name: 'Akari Trading', short: 'Akari', what: 'Brand Identity', year: '2023', tags: 'Branding', client: 'Akari Trading',
    media: ['akari-01.webp', 'akari-02.webp'],
    story: 'Brand identity for Akari Trading, from the mark to how it is used.' },
  { id: 'mvmnt', name: 'The MVMNT · Six5Six · DesignMBA', short: 'Identities', what: 'Identities', year: '2022', tags: 'Branding', client: 'THE MVMNT, SIX5SIX, DesignMBA',
    media: ['identities-01.webp', 'identities-02.webp', 'identities-03.webp'],
    story: 'Three identities: THE MVMNT, SIX5SIX and DesignMBA.' },
  { id: 'reflex', name: 'Reflex', short: 'Reflex', what: 'Interactive Experiment', year: '2026', tags: 'Lab', imgs: ['reflex'], media: [], lab: true,
    story: 'Thirteen feelings as glowing pills. Move closer and each one reacts the way it would to you.' }
];
const byId = Object.fromEntries(P.map((p) => [p.id, p]));
const WORK = P.filter((p) => !p.lab);
const num = (p) => (p.lab ? 'LAB' : String(WORK.findIndex((w) => w.id === p.id) + 1).padStart(2, '0'));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;


/* ================= the room: a path-traced render, relit live =================
   Two images from Blender: the room with the tube lights off, and the light the tubes add on their own (in white).
   The shader adds them back together in any colour, in linear light, then tone-maps (AgX) like the render. */
const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.toneMapping = THREE.AgXToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
stage.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

const IMG_A = 1920 / 1200;
const ANCH = {"dcaw": [0.6338, 0.4806], "sales": [0.6092, 0.4045], "lat": [0.5516, 0.4283], "iaf": [0.4378, 0.1857], "overland": [0.8689, 0.4528], "takeon": [0.9441, 0.486], "provenance": [0.8442, 0.6238], "akari": [0.8983, 0.6794], "social": [0.3826, 0.2478], "lab": [0.7742, 0.4869], "cohort10": [0.7342, 0.5085], "celid": [0.7594, 0.4201], "homehancer": [0.2417, 0.4133], "badfit": [0.1716, 0.4875], "bud": [0.268, 0.5731]};
const ld = new THREE.TextureLoader();
const loadRaw = (src) => { const t = ld.load(src); t.colorSpace = THREE.NoColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); return t; };
const tBase = loadRaw('room/base.webp'), tTube = loadRaw('room/tube.webp');

const U = {
  uBase: { value: tBase }, uTube: { value: tTube },
  uColor: { value: new THREE.Vector3(1, 0.86, 0.74) }, uK: { value: 1.15 },
  uScale: { value: new THREE.Vector2(1, 1) }, uOffset: { value: new THREE.Vector2(0, 0) },
  uContrast: { value: 1.12 }, uSat: { value: 1.08 }
};
const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
  uniforms: U,
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
  fragmentShader: `
    uniform sampler2D uBase, uTube; uniform vec3 uColor; uniform float uK, uContrast, uSat;
    uniform vec2 uScale, uOffset; varying vec2 vUv;
    // images are stored as (x/(1+x))^(1/2.4): this undoes it back to linear light
    vec3 dec(vec3 v){ vec3 p = pow(v, vec3(2.4)); return p / max(1.0 - p, vec3(0.001)); }
    void main(){
      vec2 uv = uOffset + vUv * uScale;
      if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
      vec3 col = dec(texture2D(uBase, uv).rgb) + dec(texture2D(uTube, uv).rgb) * uColor * uK;
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      // a touch of the render's "medium high contrast" look
      vec3 c = gl_FragColor.rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, uSat);
      c = (c - 0.5) * uContrast + 0.5;
      gl_FragColor.rgb = clamp(c, 0.0, 1.0);
    }`,
  depthTest: false, depthWrite: false
}));
scene.add(quad);
let loaded = 0;
THREE.DefaultLoadingManager.onLoad = () => { loaded = 1; document.body.classList.add('ready'); };
setTimeout(() => document.body.classList.add('ready'), 6000);

/* ---------- view: cover the screen, zoom into a piece, swipe-pan on phones ---------- */
const view = { cx: 0.5, cy: 0.5, z: 1 }, goal = { cx: 0.5, cy: 0.5, z: 1 };
let vw = 1, vh = 1, HOME = { cx: 0.5, cy: 0.52 }, pan = 0, parX = 0, parY = 0;
function baseSize() {
  const a = (innerWidth || 1) / (innerHeight || 1);
  // cover the screen; on tall phones show a bit more width than "cover" would and let them swipe
  let w = a >= IMG_A ? 1 : a / IMG_A, h = a >= IMG_A ? IMG_A / a : 1;
  if (a < 0.9) { w = a / IMG_A; h = 1; }  // phones: fill the screen top to bottom, swipe across
  else if (a < IMG_A) { w = Math.max(a / IMG_A, 0.82); h = w * IMG_A / a; }  // squarer windows: keep most of the studio in view
  return [w, h];
}
function resize() {
  if (!innerWidth || !innerHeight) return;
  renderer.setSize(innerWidth, innerHeight, false);
  const [w] = baseSize();
  HOME = { cx: 0.5, cy: innerWidth / innerHeight < 0.9 ? 0.5 : 0.52 };
  if (!document.body.classList.contains('dim')) { goal.cx = HOME.cx + pan; goal.cy = HOME.cy; goal.z = 1; }
  pan = Math.max(-(0.5 - w / 2), Math.min(0.5 - w / 2, pan));
}
addEventListener('resize', resize); resize();
function applyView() {
  const [w, h] = baseSize();
  vw = w / view.z; vh = h / view.z;
  // keep the view inside the picture (unless the picture is shorter than a phone screen)
  const cx = vw >= 1 ? 0.5 : Math.min(1 - vw / 2, Math.max(vw / 2, view.cx + parX));
  const cy = vh >= 1 ? 0.5 : Math.min(1 - vh / 2, Math.max(vh / 2, view.cy + parY));
  U.uScale.value.set(vw, vh); U.uOffset.value.set(cx - vw / 2, (1 - cy) - vh / 2);
  return [cx, cy];
}
const toScreen = (a, cx, cy) => [((a[0] - (cx - vw / 2)) / vw) * innerWidth, ((a[1] - (cy - vh / 2)) / vh) * innerHeight];
function focusOn(key) {
  const a = ANCH[key]; if (!a) return false;
  goal.cx = a[0]; goal.cy = a[1] + 0.04; goal.z = innerWidth / innerHeight < 0.9 ? 1.6 : 2.3; return true;
}
function focusHome() { goal.cx = HOME.cx + pan; goal.cy = HOME.cy; goal.z = 1; }
// swipe to pan (phones)
let dragX = null;
addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') dragX = e.clientX; }, { passive: true });
addEventListener('pointermove', (e) => {
  if (dragX === null || document.body.classList.contains('dim')) return;
  const [w] = baseSize(), lim = Math.max(0, 0.5 - w / 2);
  pan = Math.max(-lim, Math.min(lim, pan - ((e.clientX - dragX) / innerWidth) * w)); dragX = e.clientX; goal.cx = HOME.cx + pan;
}, { passive: true });
addEventListener('pointerup', () => { dragX = null; }); addEventListener('pointercancel', () => { dragX = null; });
stage.style.touchAction = 'pan-y';

/* ---------- the light: presets, a custom colour, per-project tints, remembered ---------- */
const PRESETS = [['Warm', '#ffd9b8'], ['Pink', '#ff4f9a'], ['Red', '#ff2a1f'], ['Blue', '#3f6bff'], ['Violet', '#8a5cff'], ['Mint', '#3fffc8']];
const DEFAULT_LIGHT = '#ffd9b8';
// each project's own light, used while you hover it
const TINT = {
  bud: '#ff2a1f', overland: '#ff6fa3', iaf: '#ff7a1a', dcaw: '#c9b6ff', lab: '#ff3fb0', cohort10: '#8a5cff', social: '#3fffc8',
  sales: '#3f8cff', lat: '#ffb36b', takeon: '#ffffff', provenance: '#e8c98a', akari: '#ff5a4d', homehancer: '#ffc2a8', badfit: '#f4f4f4', celid: '#3fd0ff'
};
const lin = (hex) => { const c = new THREE.Color(hex); const m = Math.max(c.r, c.g, c.b, 1e-4); return new THREE.Vector3(c.r / m, c.g / m, c.b / m); };
let userHex = DEFAULT_LIGHT;
try { userHex = localStorage.getItem('dm-light') || DEFAULT_LIGHT; } catch (e) {}
let lightGoal = lin(userHex);
U.uColor.value.copy(lightGoal);
const lightEl = document.getElementById('light');
function renderLight() {
  lightEl.innerHTML = '<span class="mono lbl">LIGHT</span>';
  PRESETS.forEach(([name, hex]) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'sw'; b.style.setProperty('--c', hex);
    b.setAttribute('aria-label', name + ' light'); b.setAttribute('aria-pressed', String(userHex.toLowerCase() === hex)); b.title = name;
    b.addEventListener('click', () => setLight(hex)); lightEl.appendChild(b);
  });
  const custom = PRESETS.some(([, h]) => h === userHex.toLowerCase()) ? null : userHex;
  const lab = document.createElement('label'); lab.className = 'sw pick'; lab.title = 'Any colour';
  lab.setAttribute('aria-pressed', String(!!custom)); if (custom) lab.style.setProperty('--c', custom);
  lab.innerHTML = `<input type="color" value="${userHex}" aria-label="Pick any light colour">`;
  lab.querySelector('input').addEventListener('input', (e) => setLight(e.target.value, true));
  lightEl.appendChild(lab);
}
function setLight(hex, live = false) {
  userHex = hex.toLowerCase(); lightGoal = lin(userHex);
  try { localStorage.setItem('dm-light', userHex); } catch (e) {}
  if (!live) renderLight(); else { lightEl.querySelectorAll('.sw').forEach((s) => s.setAttribute('aria-pressed', 'false')); const p = lightEl.querySelector('.pick'); p.setAttribute('aria-pressed', 'true'); p.style.setProperty('--c', userHex); }
}
renderLight();
function tint(key) { lightGoal = key && TINT[key] ? lin(TINT[key]) : lin(userHex); }

/* ---------- hotspots ---------- */
/* ---------- SOCIAL standee: the poster plays on the screen, warped to its corners ---------- */
const SCREEN = [[0.36151, 0.19637], [0.39968, 0.20301], [0.4022, 0.30109], [0.36498, 0.29418]];   // TL, TR, BR, BL in picture coords
const sdEl = document.getElementById('standee'), SDW = 360, SDH = 638;
const sdLayers = [...sdEl.querySelectorAll('.sd-layer')];
const sdMain = sdEl.querySelector('.sd-main');
function adj(m) { return [m[4] * m[8] - m[5] * m[7], m[2] * m[7] - m[1] * m[8], m[1] * m[5] - m[2] * m[4], m[5] * m[6] - m[3] * m[8], m[0] * m[8] - m[2] * m[6], m[2] * m[3] - m[0] * m[5], m[3] * m[7] - m[4] * m[6], m[1] * m[6] - m[0] * m[7], m[0] * m[4] - m[1] * m[3]]; }
function mm(a, b) { const c = []; for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { let t = 0; for (let k = 0; k < 3; k++) t += a[3 * i + k] * b[3 * k + j]; c[3 * i + j] = t; } return c; }
function mv(m, v) { return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]]; }
function basis(x1, y1, x2, y2, x3, y3, x4, y4) { const m = [x1, x2, x3, y1, y2, y3, 1, 1, 1]; const v = mv(adj(m), [x4, y4, 1]); return mm(m, [v[0], 0, 0, 0, v[1], 0, 0, 0, v[2]]); }
// warp a flat element (w x h) onto four picture-space corners
function warp(el, quad, w, h, cx, cy) {
  const [tl, tr, br, bl] = quad.map((p) => toScreen(p, cx, cy));
  const S = basis(0, 0, w, 0, 0, h, w, h), D = basis(tl[0], tl[1], tr[0], tr[1], bl[0], bl[1], br[0], br[1]);
  const t = mm(D, adj(S)); for (let i = 0; i < 9; i++) t[i] /= t[8];
  el.style.transform = `matrix3d(${t[0]},${t[3]},0,${t[6]},${t[1]},${t[4]},0,${t[7]},0,0,1,0,${t[2]},${t[5]},0,${t[8]})`;
  el.style.visibility = 'visible';
}
function placeStandee(cx, cy) { warp(sdEl, SCREEN, SDW, SDH, cx, cy); if (ovEl) warp(ovEl, OVERLAND, OVW, OVH, cx, cy); }
/* ---------- Overland: the animated poster plays inside its frame ---------- */
const OVERLAND = [[0.84399, 0.37097], [0.90621, 0.41088], [0.89252, 0.53521], [0.83267, 0.49368]];
const OVW = 300, OVH = 400;
let ovEl = null;
{
  const v = document.createElement('video');
  v.id = 'ovscreen'; v.src = 'media/overland-anim.mp4'; v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true; v.setAttribute('aria-hidden', 'true');
  v.addEventListener('loadeddata', () => { ovEl = v; v.play().catch(() => {}); }, { once: true });
  v.addEventListener('error', () => v.remove(), { once: true });
  document.getElementById('stage').appendChild(v);
}
// the loop: poster in, hold, out; then the High Key marks cut through their colours
const SD_LOOP = 13;
function playStandee(t) {
  const u = reduce ? 1 : t % SD_LOOP;
  const ease = (x) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
  sdLayers.forEach((l) => { l.style.opacity = 0; });
  const p = sdLayers[0];
  if (u < 6.4 || reduce) {
    const a = ease(u / 0.8), o = 1 - ease((u - 5.9) / 0.5);
    p.style.opacity = Math.min(a, o);
    p.style.transform = `translateY(${(1 - a) * 8 + (1 - o) * -6}%) scale(${1.06 - a * 0.06})`;
    // the poster fills the screen top to bottom and pans across it, so every edge is seen
    const img = sdMain, over = Math.max(0, img.offsetWidth - SDW), k = reduce ? 0.5 : Math.min(1, Math.max(0, (u - 0.6) / 5.0));
    img.style.transform = `translateX(${-over * (0.5 - 0.5 * Math.cos(Math.PI * k))}px)`;
  } else {
    const k = Math.min(5, Math.floor((u - 6.4) / 1.1)), f = (u - 6.4) % 1.1;
    const l = sdLayers[1 + k]; l.style.opacity = 1; l.style.transform = `scale(${1.08 - ease(f / 0.35) * 0.08})`;
  }
}
const LABSPOT = { id: 'lab', name: 'Lab', short: 'Lab', what: 'Experiments', year: '2026', lab: true };
const ALIAS = { celani: 'celid', cohort9: 'cohort10', cohort7: 'cohort10', reflex: 'lab' };
const anchorOf = (id) => ANCH[id] || ANCH[ALIAS[id]];
const hsWrap = document.getElementById('hotspots');
const arrow = '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3"/></svg>';
const spots = Object.keys(ANCH).map((id) => {
  const p = id === 'lab' ? LABSPOT : byId[id];
  const b = document.createElement('button');
  b.className = 'hotspot'; b.type = 'button';
  b.setAttribute('aria-label', p.lab ? 'Open the Lab' : `Open ${p.name}, ${p.what}, ${p.year}`);
  b.innerHTML = arrow + '<span class="lead"></span><span class="pin"></span>' + `<span class="tag"><b>${p.short}</b><span class="mono">${num(p)} · ${p.year}</span></span>`;
  b.addEventListener('click', () => { location.hash = id; });
  b.addEventListener('pointerenter', () => tint(id)); b.addEventListener('focus', () => tint(id));
  b.addEventListener('pointerleave', () => tint(null)); b.addEventListener('blur', () => tint(null));
  hsWrap.appendChild(b);
  return { id, el: b, a: ANCH[id] };
});
function placeSpots(cx, cy) {
  const w = innerWidth, h = innerHeight;
  for (const s of spots) {
    const [x, y] = toScreen(s.a, cx, cy);
    const off = x < 20 || x > w - 20 || y < 40 || y > h - 60;
    s.el.classList.toggle('flip', y < 110);
    s.el.style.translate = `${x}px ${y}px`;
    s.el.style.visibility = off ? 'hidden' : 'visible';
  }
}

/* ================= index ================= */
const list = document.getElementById('indexList');
const FILTERS = [['all', 'All'], ['Branding', 'Branding'], ['Motion', 'Motion'], ['3D', '3D'], ['Web', 'Web'], ['Fashion', 'Fashion'], ['Lab', 'Lab']];
let filter = 'all';
const filtersEl = document.getElementById('filters');
function buildList(shown, animate) {
  list.innerHTML = '';
  shown.forEach((p, i) => {
    const li = document.createElement('li');
    const b = document.createElement('button'); b.type = 'button';
    if (anchorOf(p.id)) b.dataset.room = '1';
    b.innerHTML = `<span class="n">${num(p)}</span><span>${p.name}</span><span class="y">${p.year}</span>`;
    b.style.transitionDelay = (i * 18) + 'ms';
    b.addEventListener('click', () => { closeIndex(); location.hash = p.id; });
    li.appendChild(b); list.appendChild(li);
    if (animate && !reduce) {
      b.animate([{ opacity: 0, transform: 'translateY(18px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }],
        { duration: 520, delay: 40 + i * 32, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' });
    }
  });
}
const shownFor = (f) => P.filter((p) => (f === 'all' ? !p.lab : p.tags.split(' / ').includes(f)));
const countEl = () => document.querySelector('#index .head span');
const countText = (n, f) => `INDEX — ${n} ${f === 'Lab' ? (n === 1 ? 'EXPERIMENT' : 'EXPERIMENTS') : (n === 1 ? 'PROJECT' : 'PROJECTS')}`;
// a lavender pill that glides between categories
const pill = document.createElement('span'); pill.className = 'fpill'; pill.setAttribute('aria-hidden', 'true');
function movePill(instant) {
  const b = filtersEl.querySelector('button[aria-pressed=true]'); if (!b) return;
  if (instant) pill.style.transition = 'none';
  pill.style.width = b.offsetWidth + 'px'; pill.style.transform = `translate(${b.offsetLeft}px, ${b.offsetTop}px)`; pill.style.height = b.offsetHeight + 'px';
  if (instant) { pill.offsetWidth; pill.style.transition = ''; }
}
let switching = null;
function setFilter(k) {
  if (k === filter) return;
  filter = k;
  filtersEl.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.k === k)));
  movePill(false);
  const shown = shownFor(k);
  const c = countEl();
  if (reduce) { buildList(shown, false); c.textContent = countText(shown.length, k); return; }
  c.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, fill: 'forwards' }).onfinish = () => {
    c.textContent = countText(shown.length, k); c.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, fill: 'forwards' });
  };
  const old = [...list.querySelectorAll('li button')];
  if (switching) clearTimeout(switching);
  old.forEach((b, i) => b.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-14px)', filter: 'blur(4px)' }],
    { duration: 240, delay: Math.min(i, 8) * 14, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' }));
  switching = setTimeout(() => { buildList(shown, true); switching = null; }, 260 + Math.min(old.length, 8) * 14);
}
function renderIndex() {
  const shown = shownFor(filter);
  buildList(shown, false);
  countEl().textContent = countText(shown.length, filter);
  filtersEl.innerHTML = ''; filtersEl.appendChild(pill);
  FILTERS.forEach(([k, label]) => {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.dataset.k = k; b.setAttribute('aria-pressed', String(filter === k));
    b.addEventListener('click', () => setFilter(k));
    filtersEl.appendChild(b);
  });
  requestAnimationFrame(() => movePill(true));
}
renderIndex();
// the list area always keeps the height of the full ("All") list: switching categories never moves the header or filters
function reserveListHeight() {
  { list.style.minHeight = ''; return; }  // the index is top-anchored and scrolls: nothing to reserve
  const keep = filter; const cur = [...list.children];
  list.style.minHeight = ''; buildList(shownFor('all'), false);
  const h = list.offsetHeight;
  list.innerHTML = ''; cur.forEach((c) => list.appendChild(c));
  if (keep === 'all') { /* already the full list */ }
  list.style.minHeight = h + 'px';
}
reserveListHeight();
addEventListener('resize', () => { movePill(true); reserveListHeight(); });
const indexEl = document.getElementById('index');
const indexBtn = document.getElementById('indexBtn');
function openIndex() {
  document.body.classList.add('dim', 'index-open');
  requestAnimationFrame(() => { reserveListHeight(); movePill(true); });
  indexEl.setAttribute('aria-hidden', 'false'); indexBtn.setAttribute('aria-expanded', 'true'); indexBtn.textContent = 'Close';
  setTimeout(() => list.querySelector('button')?.focus({ preventScroll: true }), 50);
}
function closeIndex() {
  document.body.classList.remove('index-open');
  if (!document.body.classList.contains('case-open')) document.body.classList.remove('dim');
  indexEl.setAttribute('aria-hidden', 'true'); indexBtn.setAttribute('aria-expanded', 'false'); indexBtn.textContent = 'Index';
}
document.querySelectorAll('[data-open-index]').forEach((b) => b.addEventListener('click', () => {
  document.body.classList.contains('index-open') ? closeIndex() : openIndex();
}));

/* ================= case panel ================= */
const caseEl = document.getElementById('case');
function fitHeroes() {
  document.querySelectorAll('#case .hero h1, #nextBlock > span:last-child').forEach((h) => {
    h.style.fontSize = '';
    const avail = h.clientWidth; if (avail < 120) return; let fs = parseFloat(getComputedStyle(h).fontSize);
    for (let i = 0; i < 12 && h.scrollWidth > avail + 1 && fs > 24; i++) { fs *= avail / h.scrollWidth * 0.98; h.style.fontSize = fs + 'px'; }
  });
}
addEventListener('resize', fitHeroes);
if (window.ResizeObserver) new ResizeObserver(() => fitHeroes()).observe(document.getElementById('case'));
document.fonts?.ready.then(fitHeroes);
const caseBody = document.getElementById('caseBody');
let current = null;
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const isVid = (f) => /\.(mp4|webm)$/i.test(f);
function fig(p, f, extra = '') {
  const bg = p.bg ? `background:${p.bg};` : '';
  const el = isVid(f)
    ? `<video src="media/${f}" muted loop playsinline preload="metadata" aria-label="${esc(p.name)}"></video>`
    : `<img src="media/${f}" alt="${esc(p.name)}" loading="lazy" decoding="async">`;
  return `<figure class="mf" style="${bg}${extra}">${el}</figure>`;
}
// videos play only while on screen
const vidIO = new IntersectionObserver((es) => es.forEach((e) => { const v = e.target; if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }), { threshold: 0.25 });
function nextOf(id, d = 1) { const i = P.findIndex((p) => p.id === id); return P[(i + d + P.length) % P.length]; }
function renderCase(p) {
  const n = num(p), nextP = nextOf(p.id), client = p.client || p.name;
  const storyHtml = `<p class="story">${esc(p.story || '')}</p>`;
  const info = `<div class="blk" style="grid-column:span 5;padding:22px 20px;display:flex;flex-direction:column;justify-content:space-between;gap:36px">
      <div class="pills"><span class="pill">${esc(p.what)}</span><span class="pill in">${esc(p.short)}</span><span class="pill">${p.year}</span></div>
      ${storyHtml}
      <div class="mono" style="font-size:12px;line-height:2;color:#c8c8c8;border-top:1px solid #262626;padding-top:14px">CLIENT — ${esc(client).toUpperCase()}<br>DISCIPLINE — ${esc(p.tags).toUpperCase()}<br>YEAR — ${p.year}</div>
    </div>`;
  let media = '';
  const list = p.media || [];
  if (p.lab) media = `<figure class="mf" style="grid-column:span 7"><img src="img/reflex.jpg" alt="Reflex"></figure>` + info;
  else if (!list.length) media = `<div class="blk ph mono" style="grid-column:span 7">MEDIA COMING SOON</div>` + info;
  else {
    media += fig(p, list[0], 'grid-column:span 7') + info;
    const rest = list.slice(1); const span = rest.length === 1 ? 12 : rest.length % 3 === 0 ? 4 : 6;
    rest.forEach((f, i) => { const last = span === 6 && rest.length % 2 === 1 && i === rest.length - 1; media += fig(p, f, `grid-column:span ${last ? 12 : span}`); });
  }
  caseBody.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:2px">
      <header class="blk hero" style="padding:16px 18px 0;overflow:hidden">
        <div class="meta mono"><span>${n === 'LAB' ? 'LAB' : n + ' / 18'} — ${esc(p.tags).toUpperCase()}</span><span>${p.year}</span></div>
        <h1 style="margin-bottom:-.1em">${esc(p.short)}</h1>
      </header>
      <div class="grid">${media}</div>
      <button type="button" class="blk" id="nextBlock" style="border:0;cursor:pointer;text-align:left;padding:20px 20px 120px;color:var(--paper);overflow-x:clip;display:flex;flex-direction:column;gap:14px;width:100%">
        <span class="mono" style="display:flex;justify-content:space-between;width:100%;font-size:11px;letter-spacing:.08em;color:#8e8e8e"><span>NEXT ↘</span><span>${num(nextP)} — ${nextP.year}</span></span>
        <span class="nxt" style="line-height:.95;font-weight:700;letter-spacing:-.055em;text-transform:uppercase;white-space:nowrap;width:100%;padding-bottom:.04em">${esc(nextP.short)} →</span>
      </button>
    </div>`;
    requestAnimationFrame(fitHeroes);
  document.getElementById('nextBlock').addEventListener('click', () => go(1));
  caseBody.querySelectorAll('video').forEach((v) => vidIO.observe(v));
  document.getElementById('pdNum').textContent = n;
  document.getElementById('pdNum').textContent = n;
  document.getElementById('pdName').textContent = p.short.toUpperCase();
}
let lenis = null;
function startLenis() {
  if (reduce) return;
  lenis?.destroy();
  lenis = new Lenis({ wrapper: caseEl, content: caseBody, lerp: 0.1, smoothWheel: true });
}
(function raf(t) { lenis?.raf(t); requestAnimationFrame(raf); })(0);
function go(d) { location.hash = nextOf(current, d).id; }
function showSheet(withProjectNav) {
  document.body.classList.add('dim');
  caseEl.scrollTop = 0;
  ['prevBtn', 'nextBtn'].forEach((i) => { document.getElementById(i).style.display = withProjectNav ? '' : 'none'; });
  const wasOpen = document.body.classList.contains('case-open');
  setTimeout(() => {
    document.body.classList.add('case-open'); caseEl.setAttribute('aria-hidden', 'false');
    startLenis(); lenis?.scrollTo(0, { immediate: true });
  }, wasOpen ? 0 : 50);
}
function openProject(id) {
  current = id;
  const a = anchorOf(id);
  const already = document.body.classList.contains('case-open');
  if (a) { const k = ANCH[id] ? id : ALIAS[id]; focusOn(k); tint(k); }
  document.body.classList.add('dim');
  renderCase(byId[id]);
  setTimeout(() => showSheet(true), a && !reduce && !already ? 700 : 0);
}
const CLIENTS = ['India Art Fair', 'Delhi Contemporary Art Week', 'Budweiser India', 'Latitude 28', 'adidas', 'SOCIAL', '10K Designers', 'Six5Six', 'Lemonade', 'BADFIT', 'Provenance Capital', 'Akari Trading', 'Salesfokuz'];
function openAbout() {
  current = null; focusHome();
  caseBody.innerHTML = `<div style="display:flex;flex-direction:column;gap:2px">
    <header class="blk hero" style="padding:16px 18px 0;overflow:hidden"><div class="meta mono"><span>ABOUT</span><span>NEW DELHI</span></div><h1 style="margin-bottom:-.1em">Dhruv Mehta</h1></header>
    <div class="grid">
      <div class="blk" style="grid-column:span 8;padding:28px 22px;display:flex;flex-direction:column;gap:28px"><p class="story" style="font-size:clamp(22px,2.6vw,38px);font-weight:600;letter-spacing:-.01em">Dhruv Mehta is a Creative Director &amp; Technologist bridging the gap between high-end design and technical execution.</p><p class="story mono" style="font-size:14px;color:#8e8e8e">[ Longer bio — in your words ]</p></div>
      <div class="blk" style="grid-column:span 4;padding:28px 22px;display:flex;flex-direction:column;gap:18px"><span class="mono" style="font-size:11px;letter-spacing:.08em;color:#8e8e8e">SERVICES</span><div style="font-size:18px;font-weight:600;line-height:1.6">Creative Direction<br>Design<br>3D Illustration<br>Web Development<br>Strategy</div><span class="mono" style="font-size:11px;letter-spacing:.08em;color:#8e8e8e;margin-top:10px">CONTACT</span><span style="font-size:18px;font-weight:600">hello@droveumad.com</span></div>
      <div class="blk" style="grid-column:span 12;padding:28px 22px"><span class="mono" style="font-size:11px;letter-spacing:.08em;color:#8e8e8e">WORKED WITH</span><div style="margin-top:18px;display:flex;flex-wrap:wrap;gap:8px 28px;font-size:clamp(20px,2.4vw,34px);font-weight:700;text-transform:uppercase">${CLIENTS.map((c) => `<span>${c}</span>`).join('')}</div></div>
    </div></div>`;
    requestAnimationFrame(fitHeroes);
  document.getElementById('pdNum').textContent = ''; document.getElementById('pdName').textContent = 'ABOUT';
  showSheet(false);
}
function openLab() {
  current = null; focusOn('lab'); tint('lab');
  caseBody.innerHTML = `<div style="display:flex;flex-direction:column;gap:2px">
    <header class="blk hero" style="padding:16px 18px 0;overflow:hidden"><div class="meta mono"><span>LAB — EXPERIMENTS</span><span>SELF-INITIATED</span></div><h1 style="margin-bottom:-.1em">Lab</h1></header>
    <div class="grid">
      <a href="#reflex" style="grid-column:span 8;aspect-ratio:4/3;border-radius:4px;overflow:hidden;display:block"><img src="img/reflex.jpg" alt="Reflex" style="width:100%;height:100%;object-fit:cover;display:block"></a>
      <div class="blk" style="grid-column:span 4;padding:24px 20px;display:flex;flex-direction:column;justify-content:space-between;gap:24px"><div style="display:flex;flex-direction:column;gap:10px"><span class="mono" style="font-size:11px;color:#8e8e8e">01 · INTERACTIVE EXPERIMENT · 2026</span><span style="font-size:44px;font-weight:700;letter-spacing:-.02em">REFLEX</span><span style="font-size:16px;line-height:1.45;color:#d0d0d0">Thirteen feelings as glowing pills. Move closer and each one reacts the way it would to you.</span></div><a href="#reflex" class="pill in" style="width:max-content;text-decoration:none">Open →</a></div>
      ${[2, 3, 4].map((i) => `<div class="ph mono" style="grid-column:span 4;min-height:240px;border:1.5px dashed #9a9a9a;border-radius:4px;color:#555">0${i} — [ Next experiment ]</div>`).join('')}
    </div></div>`;
    requestAnimationFrame(fitHeroes);
  document.getElementById('pdNum').textContent = ''; document.getElementById('pdName').textContent = 'LAB';
  showSheet(false);
}
function closeProject() {
  document.body.classList.remove('case-open', 'dim'); caseEl.setAttribute('aria-hidden', 'true');
  focusHome(); tint(null);
  lenis?.destroy(); lenis = null;
  const s = spots.find((x) => x.id === current || x.id === ALIAS[current]);
  if (s) setTimeout(() => s.el.focus({ preventScroll: true }), 400);
  current = null;
}
function route() {
  const h = location.hash.replace('#', '');
  if (document.body.classList.contains('index-open')) closeIndex();
  if (byId[h]) openProject(h);
  else if (h === 'about') openAbout();
  else if (h === 'lab') openLab();
  else if (document.body.classList.contains('case-open')) closeProject();
}
addEventListener('hashchange', route);
document.getElementById('backBtn').addEventListener('click', () => { history.pushState(null, '', location.pathname + location.search); route(); });
document.getElementById('prevBtn').addEventListener('click', () => go(-1));
document.getElementById('nextBtn').addEventListener('click', () => go(1));
addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (document.body.classList.contains('index-open')) closeIndex();
  else if (document.body.classList.contains('case-open')) document.getElementById('backBtn').click();
});


/* ================= loop ================= */
const clock = new THREE.Clock();
const _sz = new THREE.Vector2();
new ResizeObserver(() => resize()).observe(document.documentElement);
function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const k = reduce ? 1 : 1 - Math.pow(0.004, dt), kc = reduce ? 1 : 1 - Math.pow(0.03, dt);
  view.cx += (goal.cx - view.cx) * k; view.cy += (goal.cy - view.cy) * k; view.z += (goal.z - view.z) * k;
  U.uColor.value.lerp(lightGoal, kc);
  // the preview frame can start at zero size and grow without a resize event: keep the canvas matched every frame
  renderer.getSize(_sz);
  if (innerWidth && innerHeight && (_sz.x !== innerWidth || _sz.y !== innerHeight)) resize();
  const [cx, cy] = applyView();
  renderer.render(scene, cam);
  placeSpots(cx, cy);
  placeStandee(cx, cy); playStandee(clock.elapsedTime);
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
setTimeout(route, 600);
