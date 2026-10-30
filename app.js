(() => {
'use strict';
const CAT = {food:'Φαγητό', coffee:'Καφές', stay:'Διαμονή', sight:'Αξιοθέατο', nature:'Φύση & θάλασσα', guide:'Άνθρωποι & υπηρεσίες', shop:'Ψώνια'};
const CATBG = {food:'var(--p-pink)', coffee:'var(--p-sand)', stay:'var(--p-blue)', sight:'var(--p-yellow)', nature:'var(--p-mint)', guide:'var(--p-lilac)', shop:'var(--p-rose)'};
const ICON = {
 food:'<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="52" r="26"/><circle cx="50" cy="52" r="15"/><path d="M14 20v22M20 20v22M26 20v22M20 42v38M86 20c-8 6-8 22 0 26v34"/></svg>',
 coffee:'<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 40h52v22a20 20 0 0 1-20 20H38a20 20 0 0 1-20-20z"/><path d="M70 46h8a10 10 0 0 1 0 20h-9M34 14c-6 6 6 8 0 14M50 14c-6 6 6 8 0 14"/></svg>',
 stay:'<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 80V30M12 62h76v18M88 62V46a10 10 0 0 0-10-10H44v26"/><circle cx="28" cy="48" r="8"/></svg>',
 sight:'<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 38L50 18l38 20zM18 38v34M38 38v34M62 38v34M82 38v34M10 72h80M6 84h88"/></svg>',
 nature:'<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="72" cy="28" r="9"/><path d="M6 82l26-42 18 26 12-14 32 30zM26 52l6-10 6 10"/></svg>',
 guide:'<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="34"/><path d="M62 38L54 58 38 62l8-20z"/></svg>',
 shop:'<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 34h60l5 48H15z"/><path d="M35 44V30a15 15 0 0 1 30 0v14"/></svg>'
};
const TRUST = {3:'Εμπιστεύομαι', 2:'Καλό', 1:'Όχι ξανά'};
const CITIES = [
 ['Αθήνα','Ελλάδα',37.98,23.73],['Θεσσαλονίκη','Ελλάδα',40.64,22.94],['Σαντορίνη','Ελλάδα',36.39,25.46],['Χανιά','Ελλάδα',35.51,24.02],
 ['Ρώμη','Ιταλία',41.90,12.50],['Βενετία','Ιταλία',45.44,12.33],['Φλωρεντία','Ιταλία',43.77,11.25],['Παρίσι','Γαλλία',48.86,2.35],
 ['Λονδίνο','Ηνωμένο Βασίλειο',51.51,-0.13],['Εδιμβούργο','Ηνωμένο Βασίλειο',55.95,-3.19],['Δουβλίνο','Ιρλανδία',53.35,-6.26],
 ['Βαρκελώνη','Ισπανία',41.39,2.17],['Μαδρίτη','Ισπανία',40.42,-3.70],['Λισαβόνα','Πορτογαλία',38.72,-9.14],['Πόρτο','Πορτογαλία',41.15,-8.61],
 ['Άμστερνταμ','Ολλανδία',52.37,4.90],['Βερολίνο','Γερμανία',52.52,13.40],['Βιέννη','Αυστρία',48.21,16.37],['Πράγα','Τσεχία',50.08,14.44],
 ['Βουδαπέστη','Ουγγαρία',47.50,19.04],['Κοπεγχάγη','Δανία',55.68,12.57],['Στοκχόλμη','Σουηδία',59.33,18.07],['Ρέικιαβικ','Ισλανδία',64.15,-21.94],
 ['Κωνσταντινούπολη','Τουρκία',41.01,28.98],['Κάιρο','Αίγυπτος',30.04,31.24],['Μαρακές','Μαρόκο',31.63,-8.01],['Κέιπ Τάουν','Νότια Αφρική',-33.92,18.42],
 ['Ντουμπάι','Ηνωμένα Αραβικά Εμιράτα',25.20,55.27],['Δελχί','Ινδία',28.61,77.21],['Βαγκόκ','Ταϊλάνδη',13.76,100.50],['Σιγκαπούρη','Σιγκαπούρη',1.35,103.82],
 ['Ντενπασάρ (Μπαλί)','Ινδονησία',-8.65,115.22],['Τόκιο','Ιαπωνία',35.68,139.69],['Κιότο','Ιαπωνία',35.01,135.77],['Σεούλ','Νότια Κορέα',37.57,126.98],
 ['Χονγκ Κονγκ','Κίνα',22.32,114.17],['Σίδνεϊ','Αυστραλία',-33.87,151.21],['Νέα Υόρκη','ΗΠΑ',40.71,-74.01],['Σαν Φρανσίσκο','ΗΠΑ',37.77,-122.42],
 ['Λος Άντζελες','ΗΠΑ',34.05,-118.24],['Πόλη του Μεξικού','Μεξικό',19.43,-99.13],['Ρίο ντε Τζανέιρο','Βραζιλία',-22.91,-43.17],['Μπουένος Άιρες','Αργεντινή',-34.60,-58.38]
];
const SEED = [
 {city:'Λισαβόνα',country:'Πορτογαλία',lat:38.72,lon:-9.14,start:'2023-05-12',end:'2023-05-17',note:'Ανηφόρες, κεραμίδια και ο ήχος από το τραμ 28.',spots:[
   ['Pastéis de Belém','food',3,5,'2023-05-13','Πήγαινε πριν τις 9 για να μην έχει ουρά.'],['Time Out Market','food',2,3,'2023-05-14','Τουριστικό, αλλά βολικό για πολλές επιλογές.'],['Αλφάμα','sight',3,5,'2023-05-15','Χάσου στα σοκάκια το πρωί.']]},
 {city:'Κιότο',country:'Ιαπωνία',lat:35.01,lon:135.77,start:'2024-04-02',end:'2024-04-10',note:'Η πιο ήσυχη πόλη που έχω επισκεφτεί.',spots:[
   ['Παραδοσιακό ryokan στο Gion','stay',3,5,'2024-04-02','Άξιζε κάθε ευρώ.'],['Fushimi Inari','sight',3,5,'2024-04-03','Ανέβα την αυγή, πριν φτάσουν οι εκδρομείς.'],['Καφές στο Arashiyama','coffee',2,3,'2024-04-06','Ωραία θέα, μέτριος καφές.']]},
 {city:'Κωνσταντινούπολη',country:'Τουρκία',lat:41.01,lon:28.98,start:'2022-10-07',end:'2022-10-10',note:'Μπακλαβάς, πορθμεία και απέραντη κίνηση.',spots:[
   ['Hafız Mustafa','food',3,5,'2022-10-07','Γλυκά όλη μέρα.'],['Αγία Σοφία','sight',3,5,'2022-10-08','Πήγαινε με ανοιχτό χρονοδιάγραμμα.'],['Μεγάλος Παζάρι','shop',1,2,'2022-10-09','Πολύ πιεστικοί πωλητές.']]},
 {city:'Ρέικιαβικ',country:'Ισλανδία',lat:64.15,lon:-21.94,start:'2027-02-14',end:'2027-02-19',note:'Βόρειο σέλας, αν ευνοήσει ο καιρός.',spots:[]}
];

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const KEY = 'odoiporiko-key', MODELKEY = 'odoiporiko-model';
const getKey = () => { try { return localStorage.getItem(KEY) || ''; } catch(e){ return ''; } };
const getModel = () => { try { return localStorage.getItem(MODELKEY) || 'claude-sonnet-5-5'; } catch(e){ return 'claude-sonnet-5-5'; } };
const hue = s => { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) % 360; return h; };
const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
const pad = n => String(n).padStart(2, '0');
const isoOf = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const TODAY = isoOf(new Date());
const parseISO = s => { const [y, m, d] = s.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); };
const dayDiff = (a, b) => Math.round((parseISO(b) - parseISO(a)) / 864e5);
const fmtD = (s, o) => s ? new Intl.DateTimeFormat('el-GR', {timeZone:'UTC', ...(o || {day:'numeric', month:'long', year:'numeric'})}).format(parseISO(s)) : '';
const fmtN = n => new Intl.NumberFormat('el-GR').format(n);
const STAR = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.6l2.5 5.4 5.9.7-4.4 4 1.2 5.8L10 14.6 4.8 17.5 6 11.7 1.6 7.7l5.9-.7z"/></svg>';
const stars = n => { n = Math.round(n || 0); return `<span class="stars" role="img" aria-label="${n} στα 5">${[1,2,3,4,5].map(i => `<i class="${i <= n ? 'on' : ''}">${STAR}</i>`).join('')}</span>`; };
const PINI = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.500-7 12-7 12z"/><circle cx="12" cy="10" r="2.600" fill="currentColor"/></svg>';
const PLANE = '<svg class="plane" width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path transform="rotate(90 12 12)" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>';
const FLAG = '<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M4 2h2v16H4zM7 3h9l-2.500 4L16 11H7z"/></svg>';
const ARR = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5l5 5-5 5M10 5l5 5-5 5"/></svg>';
function toast(t){ const el = $('#toast'); el.textContent = t; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => el.hidden = true, 2200); }

/* ---------- torn paper ---------- */
(function(){
  let s = 7; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const pts = [];
  for (let x = 0; x <= 100; x += 3) pts.push(`${x}% ${(rnd() * 3.5).toFixed(1)}%`);
  for (let y = 12; y <= 88; y += 20) pts.push(`${(99.4 + rnd() * .6).toFixed(1)}% ${y}%`);
  for (let x = 100; x >= 0; x -= 3) pts.push(`${x}% ${(96.5 + rnd() * 3.5).toFixed(1)}%`);
  for (let y = 88; y >= 12; y -= 20) pts.push(`${(rnd() * .6).toFixed(1)}% ${y}%`);
  document.documentElement.style.setProperty('--torn', `polygon(${pts.join(',')})`);
  let d = 'M0 46 L0 20'; for (let x = 0; x <= 1200; x += 12) d += ` L${x} ${(10 + rnd() * 20 + Math.sin(x / 90) * 5).toFixed(1)}`; d += ' L1200 46Z';
  $('#tornPath').setAttribute('d', d);
})();

/* ---------- store: private db when available, else this browser ---------- */
const LS = 'travel-cards-v2';
let idb = null, items = [], ready = false, seeding = false;
const trips = () => items.filter(i => i.kind === 'trip');
const spots = () => items.filter(i => i.kind === 'spot');
const spotsOf = id => spots().filter(s => s.tripId === id);
const tripOf = id => items.find(i => i.id === id);
const isPlanned = t => !!(t.wish || (t.start && t.start > TODAY));
const tripYear = t => t.start ? +t.start.slice(0, 4) : (t.year || '');
const sortKey = t => t.start || ((t.year || 2000) + '-06-30');
const visited = () => trips().filter(t => !isPlanned(t)).sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
const planned = () => trips().filter(isPlanned).sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
const tColor = t => `hsl(${hue(t.city + t.country)} 70% 60%)`;
const avgRating = t => { const r = spotsOf(t.id).map(s => s.rating).filter(Boolean); return r.length ? r.reduce((a, b) => a + b, 0) / r.length : null; };
const rangeText = t => t.start ? (t.end && t.end !== t.start ? `${fmtD(t.start, {day:'numeric', month:'short'})} – ${fmtD(t.end, {day:'numeric', month:'short', year:'numeric'})}` : fmtD(t.start, {day:'numeric', month:'short', year:'numeric'})) : (t.year ? String(t.year) : '');

function persistLocal(){ try { localStorage.setItem(LS, JSON.stringify(items)); } catch(e){} }
function openDB(){ return new Promise((res, rej) => { const r = indexedDB.open('odoiporiko', 1); r.onupgradeneeded = () => r.result.createObjectStore('items', {keyPath:'id'}); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
const txn = (mode, fn) => new Promise((res, rej) => { const t = idb.transaction('items', mode), out = fn(t.objectStore('items')); t.oncomplete = () => res(out && out.result); t.onerror = () => rej(t.error); });
function save(item){ if (idb) txn('readwrite', s => s.put(item)).catch(() => {}); else persistLocal(); }
function put(item){
  const i = items.findIndex(x => x.id === item.id);
  if (i >= 0) items[i] = item; else items.push(item);
  save(item); renderAll();
}
function del(id){
  items = items.filter(x => x.id !== id);
  if (idb) txn('readwrite', s => s.delete(id)).catch(() => {}); else persistLocal();
}
function seed(){
  if (seeding) return; seeding = true;
  items.filter(i => i.example).forEach(i => del(i.id));
  const out = [{id:'meta2', kind:'meta', seeded:true}];
  for (const s of SEED) {
    const tid = uid('t');
    out.push({id:tid, kind:'trip', city:s.city, country:s.country, lat:s.lat, lon:s.lon, start:s.start, end:s.end, note:s.note, example:true});
    for (const [name, cat, trust, rating, date, note] of s.spots) out.push({id:uid('s'), kind:'spot', tripId:tid, name, cat, trust, rating, date, note, example:true});
  }
  for (const o of out) { items.push(o); save(o); }
}
function afterLoad(){
  if (!items.some(i => i.id === 'meta2')) seed();
  const first = !ready; ready = true;
  if (first) fitMap();
  renderAll();
}
async function initStore(){
  try { idb = await openDB(); items = (await txn('readonly', s => s.getAll())) || []; }
  catch(e){ idb = null; try { items = JSON.parse(localStorage.getItem(LS) || '[]') || []; } catch(_){ items = []; } }
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch(e){}
  afterLoad();
}

/* ---------- Claude (direct from this device, with your own API key) ---------- */
async function askClaude(messages, onText, max){
  const key = getKey();
  if (!key) { const e = new Error('nokey'); e.code = 'nokey'; throw e; }
  const res = await fetch('https://api.anthropic.com/v1/messages', {method:'POST',
    headers:{'content-type':'application/json', 'x-api-key':key, 'anthropic-version':'2023-06-01', 'anthropic-dangerous-direct-browser-access':'true'},
    body:JSON.stringify({model:getModel(), max_tokens:max || 1200, stream:!!onText, messages})});
  if (!res.ok) { const e = new Error('http ' + res.status); e.code = res.status === 401 ? 'auth' : res.status === 429 ? 'rate_limited' : 'http'; throw e; }
  if (!onText) { const j = await res.json(); return {text:(j.content || []).map(c => c.text || '').join('')}; }
  const rd = res.body.getReader(), dec = new TextDecoder(); let buf = '', text = '';
  for (;;) {
    const {done, value} = await rd.read(); if (done) break;
    buf += dec.decode(value, {stream:true}); const lines = buf.split('\n'); buf = lines.pop();
    for (const l of lines) { if (!l.startsWith('data:')) continue; try { const j = JSON.parse(l.slice(5)); if (j.type === 'content_block_delta' && j.delta && j.delta.text) { text += j.delta.text; onText(text); } } catch(_){} }
  }
  return {text};
}

/* ---------- map ---------- */
const map = $('#mapw'), world = $('#world'), pinsEl = $('#pins');
let k = 1, tx = 0, ty = 0, size = {w:800, h:400};
const px = (lon, lat) => [(lon + 180) * k + tx, (90 - lat) * k + ty];
function clampView(){
  const kmin = Math.max(size.w / 360, 1);
  k = Math.min(Math.max(k, kmin), 60);
  const ww = 360 * k, hh = 180 * k;
  tx = ww <= size.w ? (size.w - ww) / 2 : Math.min(0, Math.max(size.w - ww, tx));
  ty = hh <= size.h ? (size.h - hh) / 2 : Math.min(0, Math.max(size.h - hh, ty));
}
function applyView(){
  clampView();
  world.setAttribute('transform', `translate(${tx} ${ty}) scale(${k})`);
  map.classList.toggle('zoomed', k > 5);
  pinsEl.querySelectorAll('.pin').forEach(p => { const [x, y] = px(+p.dataset.lon, +p.dataset.lat); p.style.transform = `translate(${x - 12}px,${y - 31}px)`; });
}
function measure(){ const r = map.getBoundingClientRect(); if (r.width) size = {w:r.width, h:r.height}; }
function fitMap(){
  measure();
  const t = trips();
  if (!t.length) { k = size.w / 360; tx = 0; ty = (size.h - 180 * k) / 2; applyView(); return; }
  const lons = t.map(x => x.lon), lats = t.map(x => x.lat), p = 14;
  const w = Math.max(Math.max(...lons) - Math.min(...lons) + p * 2, 40), h = Math.max(Math.max(...lats) - Math.min(...lats) + p * 2, 30);
  k = Math.min(size.w / w, size.h / h);
  const cx = (Math.max(...lons) + Math.min(...lons)) / 2 + 180, cy = 90 - (Math.max(...lats) + Math.min(...lats)) / 2;
  tx = size.w / 2 - cx * k; ty = size.h / 2 - cy * k; applyView();
}
function zoomAt(f, cx, cy){
  const nk = Math.min(Math.max(k * f, Math.max(size.w / 360, 1)), 60), r = nk / k;
  tx = cx - (cx - tx) * r; ty = cy - (cy - ty) * r; k = nk; applyView();
}
(function(){ let d = ''; for (let x = 0; x <= 360; x += 30) d += `M${x},0V180`; for (let y = 0; y <= 180; y += 30) d += `M0,${y}H360`; $('#gridp').setAttribute('d', d); })();
const pinSvg = '<svg viewBox="0 0 24 32" width="24" height="32" aria-hidden="true"><path d="M12 31C12 31 2 19.5 2 12a10 10 0 0 1 20 0c0 7.500-10 19-10 19z" fill="#DF7A62" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="#fff"/></svg>';
function renderPins(){
  pinsEl.innerHTML = trips().map(t => `<button class="pin${isPlanned(t) ? ' plan' : ''}" type="button" data-act="openTrip" data-id="${esc(t.id)}" data-lat="${t.lat}" data-lon="${t.lon}" aria-label="${esc(t.city)}, ${esc(t.country)}">${pinSvg}<span class="lbl">${esc(t.city)}</span></button>`).join('');
  $('#mapEmpty').hidden = trips().length > 0; applyView();
}
const ptrs = new Map(); let dragMoved = 0, lastPinch = 0, picking = null;
map.addEventListener('pointerdown', e => {
  if (e.target.closest('.pin,.zoomctl,.pickbar')) return;
  map.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); dragMoved = 0; map.classList.add('dragging');
});
map.addEventListener('pointermove', e => {
  if (!ptrs.has(e.pointerId)) return;
  const prev = ptrs.get(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); const rect = map.getBoundingClientRect();
  if (ptrs.size === 2) {
    const [a, b] = [...ptrs.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
    if (lastPinch) zoomAt(d / lastPinch, (a[0] + b[0]) / 2 - rect.left, (a[1] + b[1]) / 2 - rect.top);
    lastPinch = d; dragMoved = 99; return;
  }
  const dx = e.clientX - prev[0], dy = e.clientY - prev[1]; dragMoved += Math.abs(dx) + Math.abs(dy); tx += dx; ty += dy; applyView();
});
const endPtr = e => {
  if (!ptrs.has(e.pointerId)) return; ptrs.delete(e.pointerId); lastPinch = 0;
  if (!ptrs.size) {
    map.classList.remove('dragging');
    if (picking && dragMoved < 6 && e.type === 'pointerup') {
      const r = map.getBoundingClientRect();
      finishPick(+(90 - (e.clientY - r.top - ty) / k).toFixed(3), +((e.clientX - r.left - tx) / k - 180).toFixed(3));
    }
  }
};
map.addEventListener('pointerup', endPtr); map.addEventListener('pointercancel', endPtr);
map.addEventListener('dblclick', e => { if (e.target.closest('.pin,.zoomctl')) return; const r = map.getBoundingClientRect(); zoomAt(1.8, e.clientX - r.left, e.clientY - r.top); });
map.addEventListener('wheel', e => { if (!e.ctrlKey && !e.metaKey) return; e.preventDefault(); const r = map.getBoundingClientRect(); zoomAt(e.deltaY < 0 ? 1.25 : .8, e.clientX - r.left, e.clientY - r.top); }, {passive:false});
$('#zin').onclick = () => zoomAt(1.6, size.w / 2, size.h / 2);
$('#zout').onclick = () => zoomAt(1 / 1.6, size.w / 2, size.h / 2);
$('#zfit').onclick = fitMap;
new ResizeObserver(() => { const o = size; measure(); if (Math.abs(o.w - size.w) > 1 || Math.abs(o.h - size.h) > 1) applyView(); }).observe(map);

/* ---------- art ---------- */
let artN = 0;
function art(t){
  const h = hue(t.city + t.country), h2 = (h + 48) % 360, gid = 'g' + (++artN);
  return `<svg class="art" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${h} 62% 58%)"/><stop offset="1" stop-color="hsl(${h2} 70% 76%)"/></linearGradient></defs><rect width="300" height="200" fill="url(#${gid})"/><circle cx="${70 + h % 140}" cy="62" r="24" fill="hsl(${h2} 90% 88%)" opacity=".9"/><path d="M0 140 Q40 118 80 138 T160 134 T240 138 T300 126 V200 H0Z" fill="hsl(${h} 45% 34%)" opacity=".7"/><path d="M0 164 Q50 148 100 163 T200 160 T300 156 V200 H0Z" fill="hsl(${h} 50% 22%)" opacity=".85"/></svg>`;
}
function postmark(t){
  const id = 'pm' + (++artN), txt = esc((t.city + ' · ' + t.country + ' · ').toUpperCase());
  return `<svg class="postmark" viewBox="0 0 100 100" aria-hidden="true"><defs><path id="${id}" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/></defs><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="50" cy="50" r="27" fill="none" stroke="currentColor" stroke-width="1"/><text><textPath href="#${id}">${txt}</textPath></text><text x="50" y="54" text-anchor="middle" style="font-size:13px">${esc(tripYear(t))}</text></svg>`;
}
function front(t, big){
  const style = t.photo ? ` style="background-image:url('${esc(t.photo)}')"` : '';
  return `<div class="air"><div class="face"${style}>${t.photo ? '' : art(t)}<div class="stamp${big ? ' big' : ''}"><i></i>${esc(tripYear(t))}</div>${postmark(t)}<div class="greet"><small>Χαιρετίσματα από</small><strong>${esc(t.city)}</strong><span>${esc(t.country)}</span></div></div></div>`;
}
const thumbStyle = t => t.photo ? `background-image:url('${esc(t.photo)}')` : `background:linear-gradient(150deg,hsl(${hue(t.city + t.country)} 62% 58%),hsl(${(hue(t.city + t.country) + 48) % 360} 70% 70%))`;

/* ---------- renders ---------- */
function renderHero(){
  const v = visited(), c = new Set(v.map(x => x.country)).size, s = spots().length;
  $('#heroLead').textContent = v.length ? `${v.length} ${v.length === 1 ? 'ταξίδι' : 'ταξίδια'}, ${c} ${c === 1 ? 'χώρα' : 'χώρες'} και ${s} ${s === 1 ? 'εμπειρία' : 'εμπειρίες'} που εμπιστεύομαι, όλα σε ένα μέρος.` : 'Κατέγραψε τα μέρη που έχεις επισκεφτεί και όσα έζησες σε καθένα.';
  $('#exChip').hidden = !items.some(i => i.example);
  const last = [...v].reverse().find(t => t.photo);
  const bg = $('#heroBg'); bg.style.backgroundImage = last ? `url('${last.photo}')` : 'none';
  $('#hills').style.display = last ? 'none' : '';
}
function renderSign(){
  const B = [
    ['r','var(--p-yellow)','Κατέγραψε μια εμπειρία','Ένα μέρος, ένας βαθμός, μια φράση.','newSpot'],
    ['l','var(--p-pink)','Σχεδίασε το επόμενο ταξίδι','Κάρφωσε το pin πριν φύγεις.','newPlan'],
    ['r','var(--p-blue)','Άνοιξε το ημερολόγιο','Πότε ήσουν πού, μέρα με τη μέρα.','go:calendar'],
    ['r','var(--p-mint)','Ρώτα για προτάσεις','Με βάση όσα εμπιστεύεσαι.','go:ask']
  ];
  $('#sign').innerHTML = B.map((b, i) => `${i ? '<div class="post"></div>' : ''}<button class="board ${b[0]} rv" type="button" style="background:${b[1]}" data-act="${b[4].startsWith('go:') ? 'go' : b[4]}" ${b[4].startsWith('go:') ? `data-to="${b[4].slice(3)}"` : ''}><b>${b[2]}</b><span>${b[3]}</span></button>`).join('');
}
let jFilter = 'all', jQuery = '', jAll = false;
function renderArches(){
  const sp = spots();
  $('#archScroll').innerHTML = Object.keys(CAT).map(c => { const n = sp.filter(s => s.cat === c).length;
    return `<button class="arch" type="button" data-act="filterCat" data-c="${c}"><span class="shape" style="background:${CATBG[c]}">${ICON[c]}</span><b>${CAT[c]}</b><small>${n} ${n === 1 ? 'εμπειρία' : 'εμπειρίες'}</small></button>`; }).join('');
}
function renderRibbons(){
  const v = visited().length ? visited() : planned();
  $('#ribbons').hidden = !v.length;
  if (!v.length) return;
  let list = []; while (list.length < 8) list = list.concat(v);
  const tick = (t, cls) => `<div class="tk ${cls}"><span class="ic">${PINI}</span><span><b>${esc(t.city)}</b><small>${esc(t.country)}</small></span></div>${cls === 'pl' ? PLANE : ''}`;
  const track = cls => { const one = list.map(t => tick(t, cls)).join(''); return `<div class="track">${one}${one}</div>`; };
  $('#stage').innerHTML = `<div class="band a">${track('')}</div><div class="band b">${track('pl')}</div>`;
}
function renderTrips(){
  const all = [...visited().reverse(), ...planned()];
  $('#tripScroll').innerHTML = all.length ? all.map(t => { const r = avgRating(t), n = spotsOf(t.id).length, pl = isPlanned(t);
    return `<button class="tcard" type="button" data-act="openTrip" data-id="${esc(t.id)}">
      <span class="top"><h3>${esc(t.city)}</h3>${pl ? '<span class="rate plan">Θέλω να πάω</span>' : r ? `<span class="rate">${STAR}${r.toFixed(1)}</span>` : ''}</span>
      <p>${esc(t.note || (n ? '' : 'Δεν έχεις γράψει ακόμα εμπειρίες εδώ.'))}</p>
      <span class="loc">${PINI}${esc(t.country)} • ${esc(t.city)}</span>
      <span class="sub">${esc(rangeText(t))}${n ? ' · ' + n + (n === 1 ? ' εμπειρία' : ' εμπειρίες') : ''}</span></button>`; }).join('')
    : '<p class="lead">Τα ταξίδια σου θα εμφανιστούν εδώ.</p>';
}
let cal = {y:new Date().getFullYear(), m:new Date().getMonth()}, calSel = null;
function renderCalendar(){
  const first = new Date(cal.y, cal.m, 1), dim = new Date(cal.y, cal.m + 1, 0).getDate(), lead = (first.getDay() + 6) % 7;
  $('#calTitle').textContent = new Intl.DateTimeFormat('el-GR', {month:'long', year:'numeric'}).format(first);
  const tr = trips().filter(t => t.start), sp = spots().filter(s => s.date), byDay = {};
  sp.forEach(s => (byDay[s.date] = byDay[s.date] || []).push(s));
  let html = '';
  for (let i = 0; i < lead; i++) html += '<span class="day empty0" aria-hidden="true"></span>';
  for (let d = 1; d <= dim; d++) {
    const key = `${cal.y}-${pad(cal.m + 1)}-${pad(d)}`, cover = tr.find(t => key >= t.start && key <= (t.end || t.start));
    const showLbl = cover && (key === cover.start || d === 1 || (new Date(cal.y, cal.m, d).getDay() === 1));
    const xs = byDay[key] || [];
    html += `<button class="day${cover ? ' in' + (isPlanned(cover) ? ' pl' : '') : ''}${key === TODAY ? ' today' : ''}${key === calSel ? ' sel' : ''}" type="button" data-act="calDay" data-d="${key}" ${cover ? `style="--tc:${tColor(cover)}"` : ''} aria-label="${esc(fmtD(key))}${cover ? ', ' + esc(cover.city) : ''}${xs.length ? ', ' + xs.length + ' εμπειρίες' : ''}"><span class="n">${d}</span>${showLbl ? `<span class="tl">${esc(cover.city)}</span>` : ''}<span class="xp">${xs.slice(0, 4).map(() => '<i></i>').join('')}</span></button>`;
  }
  $('#days').innerHTML = html;
  // next trip
  const nx = planned().find(t => t.start), cur = visited().find(t => t.start && TODAY >= t.start && TODAY <= (t.end || t.start));
  $('#next').innerHTML = cur ? `<small>Είσαι τώρα εδώ</small><b>${esc(cur.city)}</b><span>${esc(rangeText(cur))}</span><button class="btn small" type="button" data-act="newSpotFor" data-id="${esc(cur.id)}">Κατέγραψε κάτι</button>`
    : nx ? `<small>Επόμενο ταξίδι</small><b>${esc(nx.city)}</b><span>Σε ${fmtN(dayDiff(TODAY, nx.start))} ${dayDiff(TODAY, nx.start) === 1 ? 'ημέρα' : 'ημέρες'} · ${esc(rangeText(nx))}</span><button class="btn small" type="button" data-act="openTrip" data-id="${esc(nx.id)}">Άνοιξε την κάρτα</button>`
    : `<small>Επόμενο ταξίδι</small><b>Τίποτα ακόμα</b><span>Δεν έχεις προγραμματίσει ταξίδι.</span><button class="btn small" type="button" data-act="newPlan">Σχεδίασε ένα</button>`;
  // day box
  const db = $('#daybox');
  if (!calSel) { db.innerHTML = '<h4>Διάλεξε μια μέρα</h4><p class="hint">Θα δεις τα ταξίδια και τις εμπειρίες της.</p>'; return; }
  const ts = tr.filter(t => calSel >= t.start && calSel <= (t.end || t.start)), xs = byDay[calSel] || [];
  db.innerHTML = `<h4>${esc(fmtD(calSel, {weekday:'long', day:'numeric', month:'long', year:'numeric'}))}</h4>` +
    ts.map(t => `<button class="ditem" type="button" data-act="openTrip" data-id="${esc(t.id)}"><span style="width:12px;height:12px;border-radius:50%;background:${tColor(t)}"></span><span>${esc(t.city)}<small>${esc(t.country)}</small></span></button>`).join('') +
    xs.map(s => `<button class="ditem" type="button" data-act="openSpot" data-id="${esc(s.id)}"><span>${esc(s.name)}<small>${CAT[s.cat] || ''}</small></span></button>`).join('') +
    (!ts.length && !xs.length ? '<p class="hint">Τίποτα καταγεγραμμένο.</p>' : '') +
    `<button class="btn small" type="button" data-act="newSpotDay" data-d="${calSel}" style="align-self:flex-start">Νέα εμπειρία αυτή τη μέρα</button>`;
}
const hav = (a, b) => { const R = 6371, r = x => x * Math.PI / 180, dl = r(b.lat - a.lat), dn = r(b.lon - a.lon), q = Math.sin(dl / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(q)); };
const ghost = {};
function setCount(el, to){
  el.dataset.to = to; el.textContent = fmtN(to);
  if (el.dataset.run) return;
  if (el.dataset.seen && !reduced) animateCount(el);
}
function animateCount(el){
  const to = +el.dataset.to, t0 = performance.now(), from = +(el.dataset.from || 0); el.dataset.run = '1';
  const step = now => { const p = Math.min(1, (now - t0) / 1300), e = 1 - Math.pow(1 - p, 3); el.textContent = fmtN(Math.round(from + (to - from) * e)); if (p < 1) requestAnimationFrame(step); else { el.dataset.from = to; delete el.dataset.run; } };
  requestAnimationFrame(step);
}
function renderStats(){
  const v = visited(), sp = spots(), countries = new Set(v.map(x => x.country)).size;
  let km = 0; for (let i = 1; i < v.length; i++) km += hav(v[i - 1], v[i]);
  const X = t => (t.lon + 180) / 3, Y = t => (80 - t.lat) / 3;
  const pts = v.map(t => [X(t), Y(t)]);
  let d = ''; if (pts.length) { d = `M${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`; for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i], dist = Math.hypot(b[0] - a[0], b[1] - a[1]); d += ` Q${((a[0] + b[0]) / 2).toFixed(2)} ${(((a[1] + b[1]) / 2) - dist * .28).toFixed(2)} ${b[0].toFixed(2)} ${b[1].toFixed(2)}`; } }
  $('#routePath').setAttribute('d', d); $('#planeG').hidden = pts.length < 2;
  $('#avs').innerHTML = trips().map(t => `<span class="av" style="left:${(X(t) / 120 * 100).toFixed(2)}%;top:${(Y(t) / 46 * 100).toFixed(2)}%;${thumbStyle(t)}" title="${esc(t.city)}">${t.photo ? '' : esc(t.city.slice(0, 1))}</span>`).join('');
  const S = [['trips', v.length, 'Ταξίδια', 'Μέρη που έχω αφήσει pin.'], ['cn', countries, 'Χώρες', 'Από όλο τον κόσμο.'], ['xp', sp.length, 'Εμπειρίες', 'Καταγεγραμμένες στιγμές.'], ['km', Math.round(km), 'Χιλιόμετρα', 'Σε ευθεία γραμμή ανάμεσα στα ταξίδια.']];
  if (!$('#stats4').children.length) $('#stats4').innerHTML = S.map(s => `<div class="stat rv"><div class="num count" id="n-${s[0]}">0</div><span class="chipp">${FLAG}${s[2]}</span><p>${s[3]}</p></div>`).join('');
  S.forEach(s => setCount($('#n-' + s[0]), s[1]));
}
let memIdx = 0;
function renderMemory(){
  const sp = spots(), cand = sp.filter(s => s.photo).concat(sp.filter(s => !s.photo && (s.rating || 0) >= 4)), pool = cand.length ? cand : sp, box = $('#memBox');
  if (!pool.length && !trips().length) { box.innerHTML = '<p class="hint" style="grid-column:1/-1;text-align:center;color:#4A463E">Όταν καταγράψεις εμπειρίες, εδώ θα εμφανίζεται μια από αυτές.</p>'; return; }
  let item, t;
  if (pool.length) { item = pool[memIdx % pool.length]; t = tripOf(item.tripId); } else { t = trips()[memIdx % trips().length]; item = null; }
  if (!t) return;
  const photo = (item && item.photo) || t.photo, ph = photo ? `style="background-image:url('${esc(photo)}')"` : '';
  const sid = 'sm' + (++artN);
  box.innerHTML = `<div class="mem-l"><div class="polaroid"><span class="tape"></span><div class="ph" ${ph}>${photo ? '' : art(t)}</div></div></div>
    <div class="mem-r"><div>${stars(item ? item.rating : avgRating(t))}</div><p>${esc((item && item.note) || t.note || 'Μια στιγμή που αξίζει να θυμάσαι.')}</p>
      <div class="who">${esc(item ? item.name : t.city)}</div><div class="sub" style="color:#6B6558">${esc(t.city)}, ${esc(t.country)}${item && item.date ? ' · ' + esc(fmtD(item.date)) : ''}</div>
      <div class="tools"><button class="btn" type="button" data-act="memNext">Άλλη ανάμνηση</button><button class="btn" type="button" data-act="${item ? 'openSpot' : 'openTrip'}" data-id="${esc(item ? item.id : t.id)}">Άνοιξέ την</button></div>
      <svg class="stampc" viewBox="0 0 100 100" aria-hidden="true"><defs><path id="${sid}" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/></defs><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="1.2"/><text><textPath href="#${sid}">ΟΔΟΙΠΟΡΙΚΟ · ΟΔΟΙΠΟΡΙΚΟ · </textPath></text><path d="M38 52 L62 40 L54 62 L50 54Z" fill="currentColor"/></svg></div>`;
}
function renderJournal(){
  const all = spots(), cats = [...new Set(all.map(s => s.cat))];
  $('#filters').innerHTML = `<button class="fchip" type="button" data-act="filterCat" data-c="all" aria-pressed="${jFilter === 'all'}">Όλες</button>` + cats.map(c => `<button class="fchip" type="button" data-act="filterCat" data-c="${c}" aria-pressed="${jFilter === c}">${CAT[c]}</button>`).join('') +
    `<label class="search" for="jq"><span style="position:absolute;left:-9999px">Αναζήτηση εμπειριών</span><input id="jq" type="search" placeholder="Αναζήτηση…" value="${esc(jQuery)}"></label>`;
  const q = jQuery.trim().toLowerCase();
  let list = all.filter(s => (jFilter === 'all' || s.cat === jFilter) && (!q || (s.name + ' ' + (s.note || '') + ' ' + ((tripOf(s.tripId) || {}).city || '')).toLowerCase().includes(q)));
  list.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const shown = jAll ? list : list.slice(0, 6);
  $('#jgrid').innerHTML = shown.length ? shown.map(s => { const t = tripOf(s.tripId) || {};
    const img = s.photo ? `<span class="jimg" style="background-image:url('${esc(s.photo)}')"></span>` : `<span class="jimg" style="background:${CATBG[s.cat] || 'var(--p-sand)'}">${ICON[s.cat] || ''}</span>`;
    return `<button class="jc" type="button" data-act="openSpot" data-id="${esc(s.id)}">${img}<span class="jb"><span class="jm">${s.date ? esc(fmtD(s.date, {day:'numeric', month:'short', year:'numeric'})) : 'Χωρίς ημερομηνία'}<i>${CAT[s.cat] || ''}</i></span><h3>${esc(s.name)}</h3><span class="sub">${esc(t.city || '')}${t.country ? ', ' + esc(t.country) : ''}</span>${s.rating ? stars(s.rating) : ''}${s.note ? `<span class="nt">${esc(s.note)}</span>` : ''}</span></button>`; }).join('')
    : `<p class="lead" style="grid-column:1/-1">${all.length ? 'Καμία εμπειρία δεν ταιριάζει.' : 'Δεν έχεις καταγράψει ακόμα εμπειρίες. Πάτα «Νέα εμπειρία» για να ξεκινήσεις.'}</p>`;
  $('#jmore').innerHTML = list.length > 6 ? `<button class="btn" type="button" data-act="jmore">${jAll ? 'Λιγότερες' : 'Δες όλες (' + list.length + ')'}</button>` : '';
}
function renderAll(){
  if (!ready) return;
  renderHero(); renderSign(); renderPins(); renderArches(); renderRibbons(); renderTrips(); renderCalendar(); renderStats(); renderMemory(); renderJournal();
  observe(); updArrows();
  if (ovKind === 'card' && cur) showCard(cur, flipper && flipper.classList.contains('back'), true);
}

/* ---------- overlay ---------- */
const ov = $('#ov'); let cur = null, flipper = null, ovKind = null, confirmDel = false;
function openOv(html, narrow, kind){ ov.innerHTML = `<div class="sheet${narrow ? ' narrow' : ''}">${html}</div>`; ov.hidden = false; ovKind = kind || null; document.body.style.overflow = 'hidden'; }
function closeOv(){ ov.hidden = true; ov.innerHTML = ''; ovKind = null; cur = null; confirmDel = false; document.body.style.overflow = ''; }
ov.addEventListener('click', e => { if (e.target === ov) closeOv(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !ov.hidden) closeOv(); });

function openCard(id, flipped){ cur = id; confirmDel = false; showCard(id, !!flipped); }
function showCard(id, flipped, keepScroll){
  const t = tripOf(id); if (!t) { closeOv(); return; }
  const top = ov.scrollTop, sp = spotsOf(id);
  const groups = Object.keys(CAT).map(c => [c, sp.filter(s => s.cat === c).sort((a, b) => (b.rating || 0) - (a.rating || 0))]).filter(g => g[1].length);
  const list = groups.length ? groups.map(([c, arr]) => `<div class="grp"><h4>${CAT[c]}</h4><ul class="spots">${arr.map(s =>
    `<li><span><button class="nm" type="button" data-act="openSpot" data-id="${esc(s.id)}">${esc(s.name)}</button> ${s.rating ? stars(s.rating) : ''}</span><span class="t t${s.trust}">${TRUST[s.trust] || ''}</span>${s.note ? `<em>${esc(s.note)}</em>` : ''}</li>`).join('')}</ul></div>`).join('')
    : '<p class="note" style="color:var(--paper-muted)">Δεν έχεις γράψει ακόμα εμπειρίες. Πρόσθεσε την πρώτη παρακάτω.</p>';
  openOv(`
    <div class="closebar"><button class="btn" type="button" data-act="closeOv">Κλείσιμο</button><button class="btn" type="button" id="cFlip">Γύρνα την κάρτα</button></div>
    <div class="flip"><div class="flipper${flipped ? ' back' : ''}" id="flipper">
      <div class="fside">${front(t, true)}</div>
      <div class="fside rev"><div class="air"><div class="backface">
        <div class="bl">${t.note ? `<p class="note">«${esc(t.note)}»</p>` : ''}${list}</div>
        <div class="br"><div class="stamp"><i></i>${esc(tripYear(t))}</div><div class="addr"><div>${esc(t.city)}</div><div>${esc(t.country)}</div><div>${esc(rangeText(t))}</div></div></div>
      </div></div></div></div></div>
    <div class="tools">
      <button class="btn primary" type="button" data-act="newSpotFor" data-id="${esc(id)}">Νέα εμπειρία</button>
      <button class="btn" type="button" id="cPhoto">${t.photo ? 'Άλλαξε φωτογραφία' : 'Βάλε φωτογραφία'}</button>
      <button class="btn" type="button" data-act="editTrip" data-id="${esc(id)}">Επεξεργασία</button>
      <button class="btn danger" type="button" id="cDel">${confirmDel ? 'Σίγουρα; Πάτα ξανά' : 'Διαγραφή ταξιδιού'}</button>
      <input type="file" id="cFile" accept="image/*" hidden>
    </div>`, false, 'card');
  if (keepScroll) ov.scrollTop = top;
  flipper = $('#flipper');
  $('#cFlip').onclick = () => flipper.classList.toggle('back');
  $('#cPhoto').onclick = () => $('#cFile').click();
  $('#cFile').onchange = async e => { const f = e.target.files[0]; if (f) { put({...t, photo:await shrink(f, 1000)}); } };
  $('#cDel').onclick = () => { if (!confirmDel) { confirmDel = true; $('#cDel').textContent = 'Σίγουρα; Πάτα ξανά'; return; } const tid = id; closeOv(); spotsOf(tid).forEach(s => del(s.id)); del(tid); renderAll(); };
}
function shrink(file, m){
  return new Promise(res => {
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = () => { const r = Math.min(1, (m || 900) / Math.max(img.width, img.height)), c = document.createElement('canvas'); c.width = Math.round(img.width * r); c.height = Math.round(img.height * r); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url); res(c.toDataURL('image/jpeg', .72)); };
    img.src = url;
  });
}
function showSpot(id){
  const s = items.find(x => x.id === id); if (!s) return; const t = tripOf(s.tripId) || {};
  const img = s.photo ? `<div class="dimg" style="background-image:url('${esc(s.photo)}')"></div>` : `<div class="dimg" style="background:${CATBG[s.cat] || 'var(--p-sand)'}">${ICON[s.cat] || ''}</div>`;
  openOv(`<div class="closebar"><button class="btn" type="button" data-act="closeOv">Κλείσιμο</button><span class="sub">${CAT[s.cat] || ''}</span></div>
    <div class="dview">${img}<h2>${esc(s.name)}</h2>
    <div class="sub">${esc(t.city || '')}${t.country ? ', ' + esc(t.country) : ''}${s.date ? ' · ' + esc(fmtD(s.date)) : ''}</div>
    <div style="display:flex;gap:10px;align-items:center">${s.rating ? stars(s.rating) : ''}<span class="t t${s.trust}">${TRUST[s.trust] || ''}</span></div>
    ${s.note ? `<p>${esc(s.note)}</p>` : '<p class="hint">Χωρίς σημείωση.</p>'}
    <div class="tools"><button class="btn primary" type="button" data-act="editSpot" data-id="${esc(id)}">Επεξεργασία</button>${t.id ? `<button class="btn" type="button" data-act="openTrip" data-id="${esc(t.id)}">Η κάρτα του ταξιδιού</button>` : ''}<button class="btn danger" type="button" id="sDel">Διαγραφή</button></div></div>`, true, 'spot');
  let c = false; $('#sDel').onclick = () => { if (!c) { c = true; $('#sDel').textContent = 'Σίγουρα; Πάτα ξανά'; return; } del(id); closeOv(); renderAll(); toast('Διαγράφηκε'); };
}

/* ---------- experience form ---------- */
function spotForm(init){
  init = init || {};
  const T = trips().sort((a, b) => sortKey(b).localeCompare(sortKey(a)));
  if (!T.length) { openOv(`<h2>Πρώτα ένα ταξίδι</h2><p class="hint">Για να καταγράψεις μια εμπειρία χρειάζεται πρώτα το ταξίδι (η πόλη) στο οποίο ανήκει.</p><div class="tools"><button class="btn primary" type="button" data-act="newTrip">Πρόσθεσε ταξίδι</button><button class="btn" type="button" data-act="closeOv">Άκυρο</button></div>`, true, 'form'); return; }
  const tid = init.tripId || (visited().slice(-1)[0] || T[0]).id, trip = tripOf(tid);
  let rating = init.rating || 0, photo = init.photo || null;
  openOv(`<h2>${init.id ? 'Επεξεργασία εμπειρίας' : 'Νέα εμπειρία'}</h2>
    <form id="sf">
      <label for="sName">Τι έκανες ή πού πήγες;<input id="sName" required maxlength="90" value="${esc(init.name || '')}" placeholder="Π.χ. Βραδινό στην ταβέρνα του Γιάννη"></label>
      <div class="row">
        <label for="sTrip">Ταξίδι<select id="sTrip">${T.map(t => `<option value="${esc(t.id)}"${t.id === tid ? ' selected' : ''}>${esc(t.city)} · ${esc(rangeText(t))}</option>`).join('')}</select></label>
        <label for="sDate">Ημερομηνία<input id="sDate" type="date" value="${esc(init.date || (trip && trip.start && trip.start <= TODAY ? trip.start : TODAY))}"></label>
      </div>
      <div class="row">
        <label for="sCat">Κατηγορία<select id="sCat">${Object.entries(CAT).map(([c, v]) => `<option value="${c}"${c === (init.cat || 'food') ? ' selected' : ''}>${v}</option>`).join('')}</select></label>
        <label for="sTrust">Πόσο το εμπιστεύομαι<select id="sTrust">${[3, 2, 1].map(n => `<option value="${n}"${n === (init.trust || 3) ? ' selected' : ''}>${TRUST[n]}</option>`).join('')}</select></label>
      </div>
      <div><label>Βαθμολογία</label><div class="starpick" id="sStars" role="group" aria-label="Βαθμολογία">${[1,2,3,4,5].map(i => `<button type="button" data-v="${i}" aria-label="${i} στα 5" class="${i <= rating ? 'on' : ''}">${STAR}</button>`).join('')}</div></div>
      <label for="sNote">Σημείωση (τι να παραγγείλεις, πότε να πας, τι ένιωσες)<textarea id="sNote" maxlength="600">${esc(init.note || '')}</textarea></label>
      <div class="tools"><button class="btn" type="button" id="sPhotoB">${photo ? 'Άλλαξε φωτογραφία' : 'Πρόσθεσε φωτογραφία'}</button><span class="hint" id="sPhotoS">${photo ? 'Υπάρχει φωτογραφία.' : ''}</span><input type="file" id="sFile" accept="image/*" hidden></div>
      <p class="msg" id="sMsg" role="alert"></p>
      <div class="tools"><button class="btn primary" type="submit">Αποθήκευση</button><button class="btn" type="button" data-act="closeOv">Άκυρο</button></div>
    </form>`, true, 'form');
  $('#sName').focus();
  $('#sStars').onclick = e => { const b = e.target.closest('button'); if (!b) return; const v = +b.dataset.v; rating = rating === v ? 0 : v; $$('#sStars button').forEach(x => x.classList.toggle('on', +x.dataset.v <= rating)); };
  $('#sPhotoB').onclick = () => $('#sFile').click();
  $('#sFile').onchange = async e => { const f = e.target.files[0]; if (f) { photo = await shrink(f, 900); $('#sPhotoS').textContent = 'Η φωτογραφία προστέθηκε.'; } };
  $('#sf').onsubmit = e => {
    e.preventDefault();
    const item = {...init, id:init.id || uid('s'), kind:'spot', tripId:$('#sTrip').value, name:$('#sName').value.trim(), cat:$('#sCat').value, trust:+$('#sTrust').value, rating, date:$('#sDate').value || null, note:$('#sNote').value.trim(), photo};
    delete item.example; if (!item.photo) delete item.photo;
    closeOv(); put(item); toast('Αποθηκεύτηκε');
    if (init.fromCard) openCard(item.tripId, true);
  };
}

/* ---------- trip form ---------- */
let draft = null;
function tripForm(existing, mode){
  const d = draft || existing || {}, isNew = !(existing && existing.id), wish = d.wish ?? (mode === 'plan');
  openOv(`<h2>${isNew ? (wish ? 'Νέο ταξίδι που θέλω να κάνω' : 'Νέο ταξίδι') : 'Επεξεργασία ταξιδιού'}</h2>
    <form id="tf">
      <div class="row">
        <label for="fCity">Πόλη<input id="fCity" list="cities" required autocomplete="off" value="${esc(d.city || '')}" placeholder="Π.χ. Λισαβόνα"></label>
        <label for="fCountry">Χώρα<input id="fCountry" required value="${esc(d.country || '')}"></label>
      </div>
      <datalist id="cities">${CITIES.map(c => `<option value="${esc(c[0])}">${esc(c[1])}</option>`).join('')}</datalist>
      <div class="row">
        <label for="fStart">Από<input id="fStart" type="date" value="${esc(d.start || '')}"></label>
        <label for="fEnd">Έως<input id="fEnd" type="date" value="${esc(d.end || '')}"></label>
      </div>
      <label class="chk"><input type="checkbox" id="fWish"${wish ? ' checked' : ''}> Δεν έχω πάει ακόμα (το θέλω στη λίστα μου)</label>
      <div class="row">
        <label for="fLat">Γεωγρ. πλάτος<input id="fLat" type="number" step="any" min="-90" max="90" value="${d.lat ?? ''}"></label>
        <label for="fLon">Γεωγρ. μήκος<input id="fLon" type="number" step="any" min="-180" max="180" value="${d.lon ?? ''}"></label>
      </div>
      <div class="tools"><button class="btn small" type="button" id="fPick">Διάλεξε στον χάρτη</button><button class="btn small" type="button" id="fFind" hidden>Βρες τη θέση με το Claude</button></div>
      <p class="hint" id="fHint">Αν η πόλη είναι στη λίστα, η θέση συμπληρώνεται μόνη της.</p>
      <label for="fNote">Μια φράση για το ταξίδι (θα φαίνεται στην κάρτα)<textarea id="fNote" maxlength="240">${esc(d.note || '')}</textarea></label>
      <p class="msg" id="fMsg" role="alert"></p>
      <div class="tools"><button class="btn primary" type="submit">Αποθήκευση</button><button class="btn" type="button" id="fCancel">Άκυρο</button></div>
    </form>`, true, 'form');
  const city = $('#fCity');
  const grab = () => ({...(existing || {}), city:city.value.trim(), country:$('#fCountry').value.trim(), start:$('#fStart').value || null, end:$('#fEnd').value || null, wish:$('#fWish').checked, lat:$('#fLat').value === '' ? null : +$('#fLat').value, lon:$('#fLon').value === '' ? null : +$('#fLon').value, note:$('#fNote').value.trim()});
  city.addEventListener('input', () => { const c = CITIES.find(x => x[0] === city.value.trim()); if (c) { $('#fCountry').value = c[1]; $('#fLat').value = c[2]; $('#fLon').value = c[3]; $('#fHint').textContent = 'Βρέθηκε η θέση της πόλης.'; } });
  $('#fCancel').onclick = () => { draft = null; if (existing && existing.id) openCard(existing.id); else closeOv(); };
  $('#fPick').onclick = () => startPick(grab(), existing);
  if (getKey()) {
    $('#fFind').hidden = false;
    $('#fFind').onclick = async () => {
      const c = $('#fCity').value.trim(); if (!c) { $('#fMsg').textContent = 'Γράψε πρώτα την πόλη.'; return; }
      $('#fMsg').textContent = ''; $('#fHint').textContent = 'Αναζήτηση…';
      try {
        const out = await askClaude([{role:'user', content:`Δώσε μου τις συντεταγμένες του κέντρου της πόλης "${c}"${$('#fCountry').value ? ' (' + $('#fCountry').value + ')' : ''}. Απάντησε μόνο με JSON της μορφής {"lat":number,"lon":number,"country":"όνομα χώρας στα ελληνικά"}.`}], null, 200);
        const m = out.text.match(/\{[\s\S]*\}/), r = m ? JSON.parse(m[0]) : {};
        if (typeof r.lat === 'number' && typeof r.lon === 'number') { $('#fLat').value = r.lat; $('#fLon').value = r.lon; if (r.country && !$('#fCountry').value) $('#fCountry').value = r.country; $('#fHint').textContent = 'Βρέθηκε. Έλεγξε το pin στον χάρτη μετά την αποθήκευση.'; }
        else $('#fHint').textContent = 'Δεν βρέθηκε. Διάλεξε στον χάρτη.';
      } catch(e){ $('#fHint').textContent = 'Η αναζήτηση δεν ήταν διαθέσιμη. Διάλεξε στον χάρτη.'; }
    };
  }
  $('#tf').onsubmit = e => {
    e.preventDefault(); const v = grab();
    if (v.lat == null || v.lon == null) { $('#fMsg').textContent = 'Λείπει η θέση. Διάλεξε πόλη από τη λίστα ή πάτησε στον χάρτη.'; return; }
    if (v.start && v.end && v.end < v.start) { $('#fMsg').textContent = 'Η ημερομηνία λήξης είναι πριν την έναρξη.'; return; }
    const item = {...v, id:v.id || uid('t'), kind:'trip'}; delete item.example; if (!item.wish) delete item.wish;
    draft = null; closeOv(); put(item); toast('Αποθηκεύτηκε');
    const [x, y] = px(item.lon, item.lat); if (x < 0 || y < 0 || x > size.w || y > size.h) fitMap();
  };
}
function startPick(d, existing){
  draft = d; ov.hidden = true; document.body.style.overflow = ''; picking = existing || {}; map.classList.add('picking');
  const bar = document.createElement('div'); bar.className = 'pickbar'; bar.id = 'pickbar';
  bar.innerHTML = '<span>Πάτησε στον χάρτη εκεί που ήσουν</span><button type="button">Άκυρο</button>';
  bar.querySelector('button').onclick = () => finishPick(null, null);
  map.appendChild(bar); $('#map').scrollIntoView({behavior:'smooth', block:'start'});
}
function finishPick(lat, lon){
  const ex = picking; picking = null; map.classList.remove('picking'); const b = $('#pickbar'); if (b) b.remove();
  if (lat != null) { draft.lat = lat; draft.lon = lon; }
  tripForm(ex && ex.id ? ex : null);
}

/* ---------- actions ---------- */
const go = id => { const el = document.getElementById(id); if (el) el.scrollIntoView({behavior:reduced ? 'auto' : 'smooth', block:'start'}); };
const A = {
  go: (id, el) => go(el.dataset.to),
  newSpot: () => spotForm(),
  newSpotFor: id => spotForm({tripId:id, fromCard:ovKind === 'card'}),
  newSpotDay: (id, el) => { const day = el.dataset.d, t = trips().find(x => x.start && day >= x.start && day <= (x.end || x.start)); spotForm({date:day, tripId:t && t.id}); },
  newTrip: () => { draft = null; tripForm(null); },
  newPlan: () => { draft = null; tripForm(null, 'plan'); },
  editTrip: id => tripForm(tripOf(id)),
  editSpot: id => spotForm(items.find(x => x.id === id)),
  openTrip: id => openCard(id),
  openSpot: id => showSpot(id),
  closeOv: () => closeOv(),
  clearEx: () => { items.filter(i => i.example).forEach(i => del(i.id)); renderAll(); toast('Τα παραδείγματα σβήστηκαν'); },
  scr: (id, el) => { const s = document.getElementById(el.dataset.t); s.scrollBy({left:+el.dataset.d * Math.max(260, s.clientWidth * .75), behavior:'smooth'}); },
  filterCat: (id, el) => { jFilter = el.dataset.c; jAll = false; renderJournal(); observe(); if (el.closest('.arch')) go('journal'); },
  jmore: () => { jAll = !jAll; renderJournal(); },
  calPrev: () => { cal.m--; if (cal.m < 0) { cal.m = 11; cal.y--; } renderCalendar(); },
  calNext: () => { cal.m++; if (cal.m > 11) { cal.m = 0; cal.y++; } renderCalendar(); },
  calDay: (id, el) => { calSel = el.dataset.d; renderCalendar(); },
  memNext: () => { memIdx++; renderMemory(); },
  settings: () => settingsForm(),
  importPick: () => $('#impFile').click(),
  export: async () => {
    const data = JSON.stringify(items.filter(i => i.kind !== 'meta'), null, 2), name = 'odoiporiko-' + TODAY + '.json';
    try { const f = new File([data], name, {type:'application/json'}); if (navigator.canShare && navigator.canShare({files:[f]})) { await navigator.share({files:[f], title:'Οδοιπορικό'}); toast('Το αντίγραφο ετοιμάστηκε'); return; } } catch(e){ if (e && e.name === 'AbortError') return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data], {type:'application/json'})); a.download = name; document.body.appendChild(a); a.click(); a.remove(); toast('Το αντίγραφο αποθηκεύτηκε');
  }
};
function settingsForm(){
  openOv(`<h2>Ρυθμίσεις</h2>
    <form id="stf">
      <label for="stKey">Κλειδί Anthropic API (για τη συνομιλία και την εύρεση θέσης)<input id="stKey" type="password" autocomplete="off" placeholder="sk-ant-…" value="${esc(getKey())}"></label>
      <label for="stModel">Μοντέλο<select id="stModel"><option value="claude-sonnet-5-5">Sonnet 5.5 (πιο έξυπνο)</option><option value="claude-haiku-5-5">Haiku 5.5 (πιο φθηνό)</option></select></label>
      <p class="hint">Το κλειδί αποθηκεύεται μόνο σε αυτή τη συσκευή και στέλνεται μόνο στο Anthropic. Οι ερωτήσεις χρεώνονται στον δικό σου λογαριασμό.</p>
      <div class="tools"><button class="btn primary" type="submit">Αποθήκευση</button><button class="btn" type="button" data-act="closeOv">Κλείσιμο</button></div>
    </form>
    <h2 style="font-size:20px;margin-top:10px">Αντίγραφο ασφαλείας</h2>
    <p class="hint">Τα δεδομένα σου υπάρχουν μόνο σε αυτό το κινητό. Αν σβήσεις τα δεδομένα του browser ή την εφαρμογή, χάνονται. Κάνε αντίγραφο κάθε τόσο και κράτα το στο Drive, στο iCloud ή στο email σου.</p>
    <div class="tools"><button class="btn" type="button" data-act="export">Κάνε αντίγραφο</button><button class="btn" type="button" data-act="importPick">Επαναφορά από αντίγραφο</button><input id="impFile" type="file" accept="application/json,.json" hidden></div>`, true, 'form');
  $('#stModel').value = getModel();
  $('#stf').onsubmit = e => { e.preventDefault(); try { localStorage.setItem(KEY, $('#stKey').value.trim()); localStorage.setItem(MODELKEY, $('#stModel').value); } catch(_){} closeOv(); toast('Οι ρυθμίσεις αποθηκεύτηκαν'); };
  $('#impFile').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try {
      const arr = JSON.parse(await f.text()); if (!Array.isArray(arr)) throw 0;
      let n = 0; for (const it of arr) { if (it && it.id && (it.kind === 'trip' || it.kind === 'spot')) { const i = items.findIndex(x => x.id === it.id); if (i >= 0) items[i] = it; else items.push(it); save(it); n++; } }
      closeOv(); renderAll(); toast('Επαναφέρθηκαν ' + n + ' στοιχεία');
    } catch(_){ toast('Το αρχείο δεν είναι έγκυρο αντίγραφο'); }
  };
}
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const fn = A[el.dataset.act]; if (fn) fn(el.dataset.id, el, e);
});
document.addEventListener('input', e => { if (e.target.id === 'jq') { jQuery = e.target.value; const pos = e.target.selectionStart; renderJournal(); const n = $('#jq'); if (n) { n.focus(); n.setSelectionRange(pos, pos); } observe(); } });

function updArrows(){ $$('.rail').forEach(r => { const s = r.querySelector('.scroller'), hide = s.scrollWidth <= s.clientWidth + 4; r.querySelectorAll('.arrow').forEach(a => a.style.display = hide ? 'none' : ''); }); }
addEventListener('resize', updArrows);
/* ---------- scroll: reveal, counters, parallax ---------- */
let io = null;
function observe(){
  if (!('IntersectionObserver' in window)) { $$('.rv').forEach(x => x.classList.add('in')); $$('.count').forEach(c => c.dataset.seen = '1'); return; }
  if (!io) io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; const el = en.target; el.classList.add('in');
    el.querySelectorAll && el.querySelectorAll('.count').forEach(c => { if (!c.dataset.seen) { c.dataset.seen = '1'; c.dataset.from = 0; if (!reduced) animateCount(c); } });
    if (el.classList.contains('count') && !el.dataset.seen) { el.dataset.seen = '1'; el.dataset.from = 0; if (!reduced) animateCount(el); }
    io.unobserve(el);
  }), {threshold:.12, rootMargin:'0px 0px -4% 0px'});
  $$('.rv:not(.in)').forEach(x => io.observe(x));
}
const layers = $$('#hills [data-sp]'); let tick = false;
function onScroll(){ if (tick || reduced) return; tick = true; requestAnimationFrame(() => { const y = Math.min(window.scrollY, 900); layers.forEach(g => g.setAttribute('transform', `translate(0 ${(y * +g.dataset.sp).toFixed(1)})`)); tick = false; }); }
addEventListener('scroll', onScroll, {passive:true});

/* ---------- chat ---------- */
let chat = [], busy = false, chatReady = false;
const SUGG = ['Πού να πάω την επόμενη φορά;', 'Βρες μου μέρη που μοιάζουν με αυτά που εμπιστεύομαι', 'Τι κοινό έχουν τα ταξίδια μου;', 'Ιδέες για ένα σαββατοκύριακο κοντά στην Ευρώπη'];
const inl = s => s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
function md(t){
  let out = '', ul = false;
  for (const l of esc(t).split('\n')) { const m = l.match(/^\s*(?:[-*•]|\d+\.)\s+(.*)/);
    if (m) { if (!ul) { out += '<ul>'; ul = true; } out += '<li>' + inl(m[1]) + '</li>'; } else { if (ul) { out += '</ul>'; ul = false; } if (l.trim()) out += '<p>' + inl(l) + '</p>'; } }
  return out + (ul ? '</ul>' : '');
}
function memory(){
  return trips().map(t => ({πόλη:t.city, χώρα:t.country, κατάσταση:isPlanned(t) ? 'θέλω να πάω / προγραμματισμένο' : 'έχω πάει', από:t.start || undefined, έως:t.end || undefined, σημείωση:t.note || undefined, δείγμα:t.example || undefined,
    εμπειρίες:spotsOf(t.id).map(s => ({όνομα:s.name, κατηγορία:CAT[s.cat], εμπιστοσύνη:TRUST[s.trust], βαθμολογία:s.rating || undefined, ημερομηνία:s.date || undefined, σημείωση:s.note || undefined}))}));
}
function preamble(){
  return 'Είσαι ο προσωπικός ταξιδιωτικός σύμβουλος του χρήστη. Σήμερα είναι ' + TODAY + '. Παρακάτω είναι η μνήμη του: τα ταξίδια του (και όσα θέλει να κάνει) και οι εμπειρίες που έχει καταγράψει, με βαθμολογία και βαθμό εμπιστοσύνης (Εμπιστεύομαι, Καλό, Όχι ξανά). ' +
    'Πρότεινε προορισμούς και μέρη με βάση τα γούστα που φαίνονται εδώ και εξήγησε σύντομα ποιες συγκεκριμένες εμπειρίες του ταιριάζουν. Μην προτείνεις μέρη που δεν είσαι σίγουρος ότι υπάρχουν, και πες το όταν δεν είσαι σίγουρος. ' +
    'Ό,τι έχει δείγμα:true είναι παράδειγμα και όχι πραγματική εμπειρία του χρήστη. Απάντα στα ελληνικά, σύντομα και χωρίς εισαγωγές.\n\nΜΝΗΜΗ:\n' + JSON.stringify(memory()) + '\n\nΣυζήτηση:\n';
}
function bubble(role, html){ const d = document.createElement('div'); d.className = 'bub ' + (role === 'user' ? 'me' : 'ai'); d.innerHTML = html; $('#log').appendChild(d); return d; }
async function initChat(){
  if (chatReady) return; chatReady = true;
  bubble('assistant', getKey() ? '<p>Γεια σου! Έχω μπροστά μου τα ταξίδια και τις εμπειρίες που έχεις αποθηκεύσει. Ρώτα με ό,τι θέλεις για το επόμενο ταξίδι.</p>'
    : '<p>Για να σου απαντά το Claude χρειάζεται το κλειδί σου από το Anthropic API. Το βάζεις μία φορά στις ρυθμίσεις και μένει μόνο σε αυτό το κινητό.</p><p><button class="btn small" type="button" data-act="settings">Άνοιξε τις ρυθμίσεις</button></p>');
  $('#sugg').innerHTML = SUGG.map(s => `<button type="button">${esc(s)}</button>`).join('');
}
new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { initChat(); o.disconnect(); } }, {rootMargin:'300px'}).observe($('#ask'));
$('#sugg').addEventListener('click', e => { const b = e.target.closest('button'); if (b) send(b.textContent); });
$('#chatForm').addEventListener('submit', e => { e.preventDefault(); const v = $('#chatIn').value.trim(); if (v) { $('#chatIn').value = ''; send(v); } });
$('#chatIn').addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); $('#chatForm').requestSubmit(); } });
async function send(text){
  if (busy) return;
  if (!getKey()) { A.settings(); return; }
  busy = true; $('#chatSend').disabled = true; $('#sugg').innerHTML = '';
  chat.push({role:'user', content:text}); bubble('user', '<p>' + esc(text) + '</p>');
  const msgs = chat.map((m, i) => i === 0 ? {role:m.role, content:preamble() + m.content} : m), b = bubble('assistant', '<p>…</p>');
  try {
    const r = await askClaude(msgs, t => { b.innerHTML = md(t) || '<p>…</p>'; });
    chat.push({role:'assistant', content:r.text}); b.innerHTML = md(r.text);
  } catch(err) {
    chat.pop(); b.innerHTML = '<p>' + esc(err && err.code === 'auth' ? 'Το κλειδί δεν έγινε δεκτό. Έλεγξέ το στις ρυθμίσεις.' : err && err.code === 'rate_limited' ? 'Πολλά μηνύματα σε λίγο χρόνο. Περίμενε λίγο και ξαναδοκίμασε.' : 'Κάτι πήγε στραβά. Δοκίμασε ξανά.') + '</p>';
  }
  busy = false; $('#chatSend').disabled = false;
}

/* ---------- boot ---------- */
measure(); applyView(); observe();
initStore();
})();

if ('serviceWorker' in navigator) addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
