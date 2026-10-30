(() => {
'use strict';
const CAT = {food:'Φαγητό', coffee:'Καφές & ποτό', stay:'Διαμονή', sight:'Αξιοθέατο', culture:'Τέχνη & μουσεία', nature:'Φύση', beach:'Θάλασσα', night:'Βραδινή έξοδος', shop:'Ψώνια', move:'Μετακίνηση', guide:'Άνθρωποι & υπηρεσίες'};
const PICK = ['food','coffee','stay','sight','culture','nature','beach','night','shop','move'];
const CATBG = {food:'#F4B9B3', coffee:'#F5E3BB', stay:'#B9C8F8', sight:'#F3F8AE', culture:'#E2CDF5', nature:'#C6F5D2', beach:'#BFE6F2', night:'#CFC9F5', shop:'#F9D1E6', move:'#F0D9C0', guide:'#E2CDF5'};
const MOOD = {joy:'Χαρά', calm:'Ηρεμία', wow:'Δέος', fun:'Διασκέδαση', love:'Αγάπη', nost:'Νοσταλγία'};
const WHO = {solo:'Μόνη/ος', couple:'Ζευγάρι', friends:'Φίλοι', family:'Οικογένεια'};
const TRUST = {3:'Θα το ξανάκανα', 2:'Καλό', 1:'Όχι ξανά'};
const IC = {
 home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
 map:'<path d="M12 21s-7-6.200-7-11.500a7 7 0 0 1 14 0C19 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/>',
 trips:'<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
 me:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 camera:'<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.500" r="3.500"/>',
 img:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 9"/>',
 food:'<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 3c-3 2-3 8 0 9v9"/>',
 coffee:'<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 10h2a2.500 2.500 0 0 1 0 5h-2M8 3v3M12 3v3"/>',
 stay:'<path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-8v6"/><circle cx="7" cy="11" r="2"/>',
 sight:'<path d="M3 9l9-5 9 5M5 9v8M9.500 9v8M14.500 9v8M19 9v8M3 20h18"/>',
 culture:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 16l3-4 2 2 3-4"/><circle cx="9" cy="8.500" r="1"/>',
 nature:'<path d="M2 20l6-10 4 6 3-4 7 8z"/><circle cx="17" cy="6" r="2"/>',
 beach:'<path d="M3 20c3-2 6 2 9 0s6-2 9 0M12 3a8 8 0 0 1 8 8H4a8 8 0 0 1 8-8zM12 11v6"/>',
 night:'<path d="M20 14.500A8 8 0 1 1 9.500 4a6.500 6.500 0 0 0 10.500 10.500z"/>',
 shop:'<path d="M5 8h14l1 12H4zM9 8V6a3 3 0 0 1 6 0v2"/>',
 move:'<path d="M3 17h18M5 17l1-6h12l1 6M7 11l1-4h8l1 4"/><circle cx="8" cy="19" r="1.500"/><circle cx="16" cy="19" r="1.500"/>',
 guide:'<circle cx="12" cy="12" r="9"/><path d="M15.500 8.500L13.500 13.500 8.500 15.500 10.500 10.500z"/>',
 joy:'<circle cx="12" cy="12" r="9"/><path d="M8 14c1 2.500 7 2.500 8 0"/><circle cx="9" cy="10" r=".6"/><circle cx="15" cy="10" r=".6"/>',
 calm:'<circle cx="12" cy="12" r="9"/><path d="M8 10.500q1-1 2 0M14 10.500q1-1 2 0M9 15c2 1 4 1 6 0"/>',
 wow:'<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r=".6"/><circle cx="15" cy="10" r=".6"/><circle cx="12" cy="15.500" r="1.800"/>',
 fun:'<circle cx="12" cy="12" r="9"/><path d="M8 11q1-2 2 0M14 11q1-2 2 0M8 14h8a4 4 0 0 1-8 0z"/>',
 love:'<path d="M12 20s-7-4.500-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.500-7 10-7 10z"/>',
 nost:'<path d="M3 18h18M6 18a6 6 0 0 1 12 0M12 6v3M5 10l2 2M19 10l-2 2"/>',
 solo:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
 couple:'<circle cx="9" cy="8" r="3"/><path d="M3 20c.5-4 3-6 6-6M16 11a2 2 0 0 1 3.500 1.500c0 2.500-3.500 4-3.500 4s-3.500-1.500-3.500-4A2 2 0 0 1 16 11z"/>',
 friends:'<circle cx="8.500" cy="8" r="3"/><circle cx="15.500" cy="8" r="3"/><path d="M3 20c.5-3 2.500-5 5.500-5M21 20c-.5-3-2.500-5-5.500-5M9 20c.5-2.500 1.500-4 3-4s2.500 1.500 3 4"/>',
 family:'<circle cx="8" cy="7" r="3"/><circle cx="17" cy="10" r="2.200"/><path d="M2 20c.5-4 3-6 6-6s5.500 2 6 6M14 20c.3-2.500 1.500-4 3-4s2.700 1.500 3 4"/>',
 euro:'<path d="M17 6a7 7 0 1 0 0 12M5 10h9M5 14h9"/>',
 pen:'<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3"/>',
 trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 back:'<path d="M15 5l-7 7 7 7"/>',
 next:'<path d="M9 5l7 7-7 7"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
 locate:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>',
 card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M15 9h3v4h-3zM6 10h6M6 14h6"/>',
 chat:'<path d="M4 5h16v11H9l-5 4z"/>',
 star:'<path d="M12 3l2.700 5.800 6.300.7-4.700 4.300 1.300 6.200L12 17l-5.600 3 1.300-6.200L3 9.500l6.300-.7z"/>',
 wish:'<path d="M12 21s-7-6.200-7-11.500a7 7 0 0 1 14 0C19 14.800 12 21 12 21z"/><path d="M12 7v5M9.500 9.500h5"/>'
};
const svg = (n, s, w) => `<svg class="i" viewBox="0 0 24 24" width="${s || 22}" height="${s || 22}" fill="none" stroke="currentColor" stroke-width="${w || 1.8}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n] || ''}</svg>`;
const CITIES = [
 ['Αθήνα','Ελλάδα',37.98,23.73],['Θεσσαλονίκη','Ελλάδα',40.64,22.94],['Σαντορίνη','Ελλάδα',36.39,25.46],['Χανιά','Ελλάδα',35.51,24.02],['Ηράκλειο','Ελλάδα',35.34,25.14],
 ['Ρόδος','Ελλάδα',36.43,28.22],['Μύκονος','Ελλάδα',37.45,25.33],['Κέρκυρα','Ελλάδα',39.62,19.92],['Ναύπλιο','Ελλάδα',37.57,22.80],['Ιωάννινα','Ελλάδα',39.67,20.85],['Ζάκυνθος','Ελλάδα',37.78,20.90],['Πάτμος','Ελλάδα',37.31,26.55],
 ['Ρώμη','Ιταλία',41.90,12.50],['Βενετία','Ιταλία',45.44,12.33],['Φλωρεντία','Ιταλία',43.77,11.25],['Μιλάνο','Ιταλία',45.46,9.19],['Νάπολη','Ιταλία',40.85,14.27],['Παρίσι','Γαλλία',48.86,2.35],['Νίκαια','Γαλλία',43.70,7.27],
 ['Λονδίνο','Ηνωμένο Βασίλειο',51.51,-0.13],['Εδιμβούργο','Ηνωμένο Βασίλειο',55.95,-3.19],['Δουβλίνο','Ιρλανδία',53.35,-6.26],
 ['Βαρκελώνη','Ισπανία',41.39,2.17],['Μαδρίτη','Ισπανία',40.42,-3.70],['Σεβίλλη','Ισπανία',37.39,-5.98],['Λισαβόνα','Πορτογαλία',38.72,-9.14],['Πόρτο','Πορτογαλία',41.15,-8.61],
 ['Άμστερνταμ','Ολλανδία',52.37,4.90],['Βρυξέλλες','Βέλγιο',50.85,4.35],['Βερολίνο','Γερμανία',52.52,13.40],['Μόναχο','Γερμανία',48.14,11.58],['Βιέννη','Αυστρία',48.21,16.37],['Ζυρίχη','Ελβετία',47.38,8.54],['Πράγα','Τσεχία',50.08,14.44],
 ['Βουδαπέστη','Ουγγαρία',47.50,19.04],['Κρακοβία','Πολωνία',50.06,19.94],['Κοπεγχάγη','Δανία',55.68,12.57],['Στοκχόλμη','Σουηδία',59.33,18.07],['Όσλο','Νορβηγία',59.91,10.75],['Ρέικιαβικ','Ισλανδία',64.15,-21.94],
 ['Ντουμπρόβνικ','Κροατία',42.65,18.09],['Βελιγράδι','Σερβία',44.79,20.45],['Σόφια','Βουλγαρία',42.70,23.32],['Τίρανα','Αλβανία',41.33,19.82],
 ['Κωνσταντινούπολη','Τουρκία',41.01,28.98],['Κάιρο','Αίγυπτος',30.04,31.24],['Μαρακές','Μαρόκο',31.63,-8.01],['Κέιπ Τάουν','Νότια Αφρική',-33.92,18.42],
 ['Ντουμπάι','Ηνωμένα Αραβικά Εμιράτα',25.20,55.27],['Τελ Αβίβ','Ισραήλ',32.09,34.78],['Δελχί','Ινδία',28.61,77.21],['Βαγκόκ','Ταϊλάνδη',13.76,100.50],['Σιγκαπούρη','Σιγκαπούρη',1.35,103.82],
 ['Ντενπασάρ (Μπαλί)','Ινδονησία',-8.65,115.22],['Τόκιο','Ιαπωνία',35.68,139.69],['Κιότο','Ιαπωνία',35.01,135.77],['Σεούλ','Νότια Κορέα',37.57,126.98],
 ['Χονγκ Κονγκ','Κίνα',22.32,114.17],['Σίδνεϊ','Αυστραλία',-33.87,151.21],['Νέα Υόρκη','ΗΠΑ',40.71,-74.01],['Σαν Φρανσίσκο','ΗΠΑ',37.77,-122.42],
 ['Λος Άντζελες','ΗΠΑ',34.05,-118.24],['Μαϊάμι','ΗΠΑ',25.76,-80.19],['Μοντρεάλ','Καναδάς',45.50,-73.57],['Πόλη του Μεξικού','Μεξικό',19.43,-99.13],['Ρίο ντε Τζανέιρο','Βραζιλία',-22.91,-43.17],['Μπουένος Άιρες','Αργεντινή',-34.60,-58.38]
];
const SEED = [
 {city:'Λισαβόνα',country:'Πορτογαλία',lat:38.72,lon:-9.14,start:'2023-05-12',end:'2023-05-17',note:'Ανηφόρες, κεραμίδια και ο ήχος από το τραμ 28.',spots:[
   ['Pastéis de Belém','food',3,5,'2023-05-13','Πήγαινε πριν τις 9 για να μην έχει ουρά.','joy'],['Time Out Market','food',2,3,'2023-05-14','Τουριστικό, αλλά βολικό για πολλές επιλογές.','fun'],['Αλφάμα','sight',3,5,'2023-05-15','Χάσου στα σοκάκια το πρωί.','calm']]},
 {city:'Κιότο',country:'Ιαπωνία',lat:35.01,lon:135.77,start:'2024-04-02',end:'2024-04-10',note:'Η πιο ήσυχη πόλη που έχω επισκεφτεί.',spots:[
   ['Παραδοσιακό ryokan στο Gion','stay',3,5,'2024-04-02','Άξιζε κάθε ευρώ.','calm'],['Fushimi Inari','sight',3,5,'2024-04-03','Ανέβα την αυγή, πριν φτάσουν οι εκδρομείς.','wow'],['Καφές στο Arashiyama','coffee',2,3,'2024-04-06','Ωραία θέα, μέτριος καφές.','nost']]},
 {city:'Κωνσταντινούπολη',country:'Τουρκία',lat:41.01,lon:28.98,start:'2022-10-07',end:'2022-10-10',note:'Μπακλαβάς, πορθμεία και απέραντη κίνηση.',spots:[
   ['Hafız Mustafa','food',3,5,'2022-10-07','Γλυκά όλη μέρα.','love'],['Αγία Σοφία','sight',3,5,'2022-10-08','Πήγαινε με ανοιχτό χρονοδιάγραμμα.','wow'],['Μεγάλος Παζάρι','shop',1,2,'2022-10-09','Πολύ πιεστικοί πωλητές.','fun']]},
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
    for (const [name, cat, trust, rating, date, note, mood] of s.spots) out.push({id:uid('s'), kind:'spot', tripId:tid, name, cat, trust, rating, date, note, mood, example:true});
  }
  for (const o of out) { items.push(o); save(o); }
}
function afterLoad(){
  if (!items.some(i => i.id === 'meta2')) seed();
  const first = !ready; ready = true;
  if (first && screen === 'map') fitMap();
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
const ptrs = new Map(); let dragMoved = 0, lastPinch = 0, picking = null;
map.addEventListener('pointerdown', e => {
  if (e.target.closest('.pin,.zoomctl,.pickbar,.pinsheet,.fabtn,.legend')) return;
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
    } else if (dragMoved < 6 && e.type === 'pointerup' && selPin) { selPin = null; renderPinSheet(); }
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

/* ---------- shared bits ---------- */
const photosOf = s => (s.photos && s.photos.length) ? s.photos : (s.photo ? [s.photo] : []);
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const catBg = c => CATBG[c] || '#F5E3BB';
const cover = t => `<span class="cv"${t.photo ? ` style="background-image:url('${esc(t.photo)}')"` : ''}>${t.photo ? '' : art(t)}</span>`;
const plural = (n, a, b) => `${n} ${n === 1 ? a : b}`;
const spotDate = s => s.date ? fmtD(s.date, {day:'numeric', month:'short', year:'numeric'}) : 'Χωρίς ημερομηνία';
let galList = [];

const xcard = s => { const t = tripOf(s.tripId) || {}, ph = photosOf(s)[0];
  return `<button class="xcard" type="button" data-act="openSpot" data-id="${esc(s.id)}"><span class="xim" style="${ph ? `background-image:url('${esc(ph)}')` : `background:${catBg(s.cat)}`}">${ph ? '' : svg(s.cat, 44, 1.5)}<span class="xcat">${svg(s.cat, 16)}</span></span><span class="xb"><b>${esc(s.name)}</b><span class="sub">${esc(t.city || '')}</span>${s.rating ? stars(s.rating) : ''}</span></button>`; };
const tcard = t => { const r = avgRating(t), n = spotsOf(t.id).length, pl = isPlanned(t);
  return `<button class="tc" type="button" data-act="openTrip" data-id="${esc(t.id)}">${cover(t)}<span class="tcb"><span class="tct"><b>${esc(t.city)}</b>${pl ? '<span class="rate plan">Θέλω να πάω</span>' : r ? `<span class="rate">${STAR}${r.toFixed(1)}</span>` : ''}</span><span class="sub">${esc(t.country)}${rangeText(t) ? ' · ' + esc(rangeText(t)) : ''}</span><span class="sub">${plural(n, 'εμπειρία', 'εμπειρίες')}</span></span></button>`; };
const jcard = s => { const t = tripOf(s.tripId) || {}, ph = photosOf(s)[0];
  return `<button class="jc" type="button" data-act="openSpot" data-id="${esc(s.id)}"><span class="jimg" style="${ph ? `background-image:url('${esc(ph)}')` : `background:${catBg(s.cat)}`}">${ph ? '' : svg(s.cat, 46, 1.5)}<span class="xcat">${svg(s.cat, 16)}</span></span><span class="jb"><span class="jm">${esc(spotDate(s))}<i>${CAT[s.cat] || ''}</i></span><h3>${esc(s.name)}</h3><span class="sub">${esc(t.city || '')}${t.country ? ', ' + esc(t.country) : ''}</span><span class="jr">${s.rating ? stars(s.rating) : ''}${s.mood ? `<span class="mood" title="${MOOD[s.mood] || ''}">${svg(s.mood, 18)}</span>` : ''}</span>${s.note ? `<span class="nt">${esc(s.note)}</span>` : ''}</span></button>`; };

/* ---------- screens ---------- */
const SCREENS = ['home', 'map', 'trips', 'me'];
let screen = 'home', mapFitted = false, tripsTab = 'trips', tripFilter = 'all', selPin = null;
function showScreen(n){
  if (!SCREENS.includes(n)) n = 'home'; screen = n;
  SCREENS.forEach(s => $('#s-' + s).hidden = s !== n);
  $$('[data-tab]').forEach(b => b.setAttribute('aria-current', String(b.dataset.tab === n)));
  window.scrollTo(0, 0);
  if (n === 'map') requestAnimationFrame(() => { measure(); if (!mapFitted) { mapFitted = true; fitMap(); } else applyView(); });
  if (n === 'me') initChat();
  updArrows(); observe();
}
addEventListener('hashchange', () => showScreen(location.hash.slice(1)));
function updArrows(){ $$('.rail').forEach(r => { const s = r.querySelector('.scroller'); const hide = !s || s.scrollWidth <= s.clientWidth + 4; r.querySelectorAll('.arrow').forEach(a => a.style.display = hide ? 'none' : ''); }); }
addEventListener('resize', updArrows);

/* ---------- renders ---------- */
function nextHTML(){
  const nx = planned().find(t => t.start), cur = visited().find(t => t.start && TODAY >= t.start && TODAY <= (t.end || t.start));
  return cur ? `<small>Είσαι τώρα εδώ</small><b>${esc(cur.city)}</b><span>${esc(rangeText(cur))}</span><button class="btn small" type="button" data-act="newSpotFor" data-id="${esc(cur.id)}">Κατέγραψε κάτι</button>`
    : nx ? `<small>Επόμενο ταξίδι</small><b>${esc(nx.city)}</b><span>Σε ${fmtN(dayDiff(TODAY, nx.start))} ${dayDiff(TODAY, nx.start) === 1 ? 'ημέρα' : 'ημέρες'} · ${esc(rangeText(nx))}</span><button class="btn small" type="button" data-act="openTrip" data-id="${esc(nx.id)}">Άνοιξε το ταξίδι</button>`
    : `<small>Επόμενο ταξίδι</small><b>Τίποτα ακόμα</b><span>Δεν έχεις προγραμματίσει ταξίδι.</span><button class="btn small" type="button" data-act="newPlan">Σχεδίασε ένα</button>`;
}
function renderHome(){
  const v = visited(), c = new Set(v.map(x => x.country)).size, s = spots().length;
  $('#heroLead').textContent = v.length ? `${plural(v.length, 'ταξίδι', 'ταξίδια')}, ${plural(c, 'χώρα', 'χώρες')} και ${plural(s, 'εμπειρία', 'εμπειρίες')}, όλα σε ένα μέρος.` : 'Κατέγραψε τα μέρη που έχεις επισκεφτεί και όσα έζησες σε καθένα.';
  $('#exChip').hidden = !items.some(i => i.example);
  const last = [...v].reverse().find(t => t.photo), hp = (items.find(i => i.id === 'hero') || {}).photo, pic = hp || (last && last.photo);
  $('#heroBg').style.backgroundImage = pic ? `url('${pic}')` : 'none';
  $('#hills').style.display = pic ? 'none' : '';
  const empty = !trips().length;
  $('#welcome').hidden = !empty; $('#homeBody').hidden = empty;
  $('#nextHome').innerHTML = nextHTML();
  const latest = [...spots()].sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 10);
  $('#hXwrap').hidden = !latest.length; $('#hX').innerHTML = latest.map(xcard).join('');
  const all = [...visited().reverse(), ...planned()];
  $('#hT').innerHTML = all.map(tcard).join('');
  renderRibbons(); renderMemory();
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
function renderPins(){
  pinsEl.innerHTML = trips().map(t => `<button class="pin${isPlanned(t) ? ' plan' : ''}" type="button" data-act="pinTap" data-id="${esc(t.id)}" data-lat="${t.lat}" data-lon="${t.lon}" aria-label="${esc(t.city)}, ${esc(t.country)}">${pinSvg}<span class="lbl">${esc(t.city)}</span></button>`).join('');
  $('#mapEmpty').hidden = trips().length > 0; applyView();
}
function renderPinSheet(){
  const el = $('#pinsheet'), t = selPin && tripOf(selPin);
  if (!t) { el.hidden = true; return; }
  const n = spotsOf(t.id).length;
  el.hidden = false;
  el.innerHTML = `${cover(t)}<span class="pb"><b>${esc(t.city)}</b><span class="sub">${esc(t.country)}${rangeText(t) ? ' · ' + esc(rangeText(t)) : ''}</span><span class="sub">${plural(n, 'εμπειρία', 'εμπειρίες')}</span></span><button class="btn primary small" type="button" data-act="openTrip" data-id="${esc(t.id)}">Άνοιγμα</button><button class="roundb" type="button" data-act="pinClose" aria-label="Κλείσιμο">${svg('x', 18)}</button>`;
}
function renderTripsScreen(){
  $$('#tseg button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.v === tripsTab)));
  ['trips', 'cal', 'xp'].forEach(v => $('#tp-' + v).hidden = v !== tripsTab);
  const all = [...visited().reverse(), ...planned()], list = tripFilter === 'done' ? visited().reverse() : tripFilter === 'wish' ? planned() : all;
  $('#tfilters').innerHTML = [['all', 'Όλα'], ['done', 'Έχω πάει'], ['wish', 'Θέλω να πάω']].map(f => `<button class="fchip" type="button" data-act="tripFilter" data-v="${f[0]}" aria-pressed="${tripFilter === f[0]}">${f[1]}</button>`).join('');
  $('#tgrid').innerHTML = list.length ? list.map(tcard).join('') : '<p class="lead" style="grid-column:1/-1">Δεν υπάρχουν ταξίδια εδώ ακόμα. Πάτα «Νέο ταξίδι» για να προσθέσεις το πρώτο.</p>';
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
    const key = `${cal.y}-${pad(cal.m + 1)}-${pad(d)}`, cv = tr.find(t => key >= t.start && key <= (t.end || t.start));
    const showLbl = cv && (key === cv.start || d === 1 || new Date(cal.y, cal.m, d).getDay() === 1), xs = byDay[key] || [];
    html += `<button class="day${cv ? ' in' + (isPlanned(cv) ? ' pl' : '') : ''}${key === TODAY ? ' today' : ''}${key === calSel ? ' sel' : ''}" type="button" data-act="calDay" data-d="${key}" ${cv ? `style="--tc:${tColor(cv)}"` : ''} aria-label="${esc(fmtD(key))}${cv ? ', ' + esc(cv.city) : ''}${xs.length ? ', ' + xs.length + ' εμπειρίες' : ''}"><span class="n">${d}</span>${showLbl ? `<span class="tl">${esc(cv.city)}</span>` : ''}<span class="xp">${xs.slice(0, 4).map(() => '<i></i>').join('')}</span></button>`;
  }
  $('#days').innerHTML = html;
  $('#next').innerHTML = nextHTML();
  const db = $('#daybox');
  if (!calSel) { db.innerHTML = '<h4>Διάλεξε μια μέρα</h4><p class="hint">Θα δεις τα ταξίδια και τις εμπειρίες της.</p>'; return; }
  const ts = tr.filter(t => calSel >= t.start && calSel <= (t.end || t.start)), xs = byDay[calSel] || [];
  db.innerHTML = `<h4>${esc(fmtD(calSel, {weekday:'long', day:'numeric', month:'long', year:'numeric'}))}</h4>` +
    ts.map(t => `<button class="ditem" type="button" data-act="openTrip" data-id="${esc(t.id)}"><span style="width:12px;height:12px;border-radius:50%;background:${tColor(t)}"></span><span>${esc(t.city)}<small>${esc(t.country)}</small></span></button>`).join('') +
    xs.map(s => `<button class="ditem" type="button" data-act="openSpot" data-id="${esc(s.id)}">${svg(s.cat, 20)}<span>${esc(s.name)}<small>${CAT[s.cat] || ''}</small></span></button>`).join('') +
    (!ts.length && !xs.length ? '<p class="hint">Τίποτα καταγεγραμμένο.</p>' : '') +
    `<button class="btn small" type="button" data-act="newSpotDay" data-d="${calSel}" style="align-self:flex-start">Νέα εμπειρία αυτή τη μέρα</button>`;
}
const hav = (a, b) => { const R = 6371, r = x => x * Math.PI / 180, dl = r(b.lat - a.lat), dn = r(b.lon - a.lon), q = Math.sin(dl / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(q)); };
function setCount(el, to){ el.dataset.to = to; el.textContent = fmtN(to); if (el.dataset.run) return; if (el.dataset.seen && !reduced) animateCount(el); }
function animateCount(el){
  const to = +el.dataset.to, t0 = performance.now(), from = +(el.dataset.from || 0); el.dataset.run = '1';
  const step = now => { const p = Math.min(1, (now - t0) / 1300), e = 1 - Math.pow(1 - p, 3); el.textContent = fmtN(Math.round(from + (to - from) * e)); if (p < 1) requestAnimationFrame(step); else { el.dataset.from = to; delete el.dataset.run; } };
  requestAnimationFrame(step);
}
function renderStats(){
  const v = visited(), sp = spots(), countries = new Set(v.map(x => x.country)).size;
  let km = 0; for (let i = 1; i < v.length; i++) km += hav(v[i - 1], v[i]);
  const X = t => (t.lon + 180) / 3, Y = t => (80 - t.lat) / 3, pts = v.map(t => [X(t), Y(t)]);
  let d = ''; if (pts.length) { d = `M${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`; for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i], dist = Math.hypot(b[0] - a[0], b[1] - a[1]); d += ` Q${((a[0] + b[0]) / 2).toFixed(2)} ${(((a[1] + b[1]) / 2) - dist * .28).toFixed(2)} ${b[0].toFixed(2)} ${b[1].toFixed(2)}`; } }
  $('#routePath').setAttribute('d', d); $('#planeG').hidden = pts.length < 2;
  $('#avs').innerHTML = trips().map(t => `<span class="av" style="left:${(X(t) / 120 * 100).toFixed(2)}%;top:${(Y(t) / 46 * 100).toFixed(2)}%;${thumbStyle(t)}" title="${esc(t.city)}">${t.photo ? '' : esc(t.city.slice(0, 1))}</span>`).join('');
  const photos = sp.reduce((n, s) => n + photosOf(s).length, 0);
  const S = [['trips', v.length, 'Ταξίδια', 'Μέρη που έχω αφήσει pin.'], ['cn', countries, 'Χώρες', 'Από όλο τον κόσμο.'], ['xp', sp.length, 'Εμπειρίες', 'Καταγεγραμμένες στιγμές.'], ['ph', photos, 'Φωτογραφίες', 'Αναμνήσεις σε εικόνες.'], ['km', Math.round(km), 'Χιλιόμετρα', 'Σε ευθεία γραμμή ανάμεσα στα ταξίδια.']];
  if (!$('#stats4').children.length) $('#stats4').innerHTML = S.map(s => `<div class="stat rv"><div class="num count" id="n-${s[0]}">0</div><span class="chipp">${FLAG}${s[2]}</span><p>${s[3]}</p></div>`).join('');
  S.forEach(s => setCount($('#n-' + s[0]), s[1]));
}
let memIdx = 0;
function renderMemory(){
  const sp = spots(), withPh = sp.filter(s => photosOf(s).length), good = sp.filter(s => !photosOf(s).length && (s.rating || 0) >= 4), cand = withPh.concat(good), pool = cand.length ? cand : sp, box = $('#memBox');
  if (!pool.length && !trips().length) { box.innerHTML = ''; $('#memWrap').hidden = true; return; }
  $('#memWrap').hidden = false;
  let item = null, t;
  if (pool.length) { item = pool[memIdx % pool.length]; t = tripOf(item.tripId); } else { t = trips()[memIdx % trips().length]; }
  if (!t) return;
  const photo = (item && photosOf(item)[0]) || t.photo, ph = photo ? `style="background-image:url('${esc(photo)}')"` : '', sid = 'sm' + (++artN);
  box.innerHTML = `<div class="mem-l"><div class="polaroid"><span class="tape"></span><div class="ph" ${ph}>${photo ? '' : art(t)}</div></div></div>
    <div class="mem-r"><div>${stars(item ? item.rating : avgRating(t))}</div><p>${esc((item && item.note) || t.note || 'Μια στιγμή που αξίζει να θυμάσαι.')}</p>
      <div class="who">${esc(item ? item.name : t.city)}</div><div class="sub" style="color:#6B6558">${esc(t.city)}, ${esc(t.country)}${item && item.date ? ' · ' + esc(fmtD(item.date)) : ''}</div>
      <div class="tools"><button class="btn" type="button" data-act="memNext">Άλλη ανάμνηση</button><button class="btn" type="button" data-act="${item ? 'openSpot' : 'openTrip'}" data-id="${esc(item ? item.id : t.id)}">Άνοιξέ την</button></div>
      <svg class="stampc" viewBox="0 0 100 100" aria-hidden="true"><defs><path id="${sid}" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/></defs><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="1.2"/><text><textPath href="#${sid}">WORLD TRAVEL · WORLD TRAVEL · </textPath></text><path d="M38 52 L62 40 L54 62 L50 54Z" fill="currentColor"/></svg></div>`;
}
let jFilter = 'all', jQuery = '', jAll = false;
function renderJournal(){
  const all = spots(), cats = [...new Set(all.map(s => s.cat))];
  $('#filters').innerHTML = `<button class="fchip" type="button" data-act="filterCat" data-c="all" aria-pressed="${jFilter === 'all'}">Όλες</button>` + cats.map(c => `<button class="fchip" type="button" data-act="filterCat" data-c="${c}" aria-pressed="${jFilter === c}">${svg(c, 16)} ${CAT[c] || c}</button>`).join('') +
    `<label class="search" for="jq"><span style="position:absolute;left:-9999px">Αναζήτηση εμπειριών</span><input id="jq" type="search" placeholder="Αναζήτηση…" value="${esc(jQuery)}"></label>`;
  const q = jQuery.trim().toLowerCase();
  let list = all.filter(s => (jFilter === 'all' || s.cat === jFilter) && (!q || (s.name + ' ' + (s.note || '') + ' ' + ((tripOf(s.tripId) || {}).city || '')).toLowerCase().includes(q)));
  list.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const shown = jAll ? list : list.slice(0, 12);
  $('#jgrid').innerHTML = shown.length ? shown.map(jcard).join('') : `<p class="lead" style="grid-column:1/-1">${all.length ? 'Καμία εμπειρία δεν ταιριάζει.' : 'Δεν έχεις καταγράψει ακόμα εμπειρίες. Πάτα «Νέα εμπειρία» για να ξεκινήσεις.'}</p>`;
  $('#jmore').innerHTML = list.length > 12 ? `<button class="btn" type="button" data-act="jmore">${jAll ? 'Λιγότερες' : 'Δες όλες (' + list.length + ')'}</button>` : '';
}
function renderAll(){
  if (!ready) return;
  renderHome(); renderPins(); renderPinSheet(); renderTripsScreen(); renderCalendar(); renderJournal(); renderStats();
  observe(); updArrows();
  if (!ov.hidden && cur && ovKind === 'trip') showTrip(cur, true);
}

/* ---------- overlay ---------- */
const ov = $('#ov'); let cur = null, ovKind = null, ovReturn = null, lb = null;
function openOv(html, kind, narrow){ ov.classList.toggle('opaque', kind === 'trip'); ov.innerHTML = `<div class="sheet${narrow ? ' narrow' : ''}">${html}</div>`; ov.hidden = false; ovKind = kind; document.body.style.overflow = 'hidden'; }
function closeOv(){ ov.hidden = true; ov.innerHTML = ''; ovKind = null; cur = null; ovReturn = null; document.body.style.overflow = ''; }
function backOv(){ if (ovReturn && tripOf(ovReturn)) { const id = ovReturn; ovReturn = null; openTrip(id); } else closeOv(); }
ov.addEventListener('click', e => { if (e.target === ov) closeOv(); });
function closeLB(){ if (lb) { lb.remove(); lb = null; } }
function openLB(list, i){
  closeLB(); lb = document.createElement('div'); lb.className = 'lb';
  lb.innerHTML = `<img alt=""><button class="lbx" type="button" aria-label="Κλείσιμο">${svg('x', 26)}</button>${list.length > 1 ? `<button class="lbp" type="button" aria-label="Προηγούμενη">${svg('back', 28)}</button><button class="lbn" type="button" aria-label="Επόμενη">${svg('next', 28)}</button>` : ''}`;
  const im = lb.querySelector('img'), set = () => { im.src = list[i]; }, mv = d => { i = (i + d + list.length) % list.length; set(); };
  lb.onclick = e => { if (e.target === lb || e.target.closest('.lbx')) closeLB(); else if (e.target.closest('.lbp')) mv(-1); else if (e.target.closest('.lbn')) mv(1); };
  let x0 = null; lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, {passive:true});
  lb.addEventListener('touchend', e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 50 && list.length > 1) mv(dx > 0 ? -1 : 1); });
  document.body.appendChild(lb); set();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (lb) closeLB(); else if (!ov.hidden) closeOv(); }
  else if (lb && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) lb.querySelector(e.key === 'ArrowLeft' ? '.lbp' : '.lbn')?.click();
});
function shrink(file, m){
  return new Promise(res => {
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = () => { const r = Math.min(1, (m || 1000) / Math.max(img.width, img.height)), c = document.createElement('canvas'); c.width = Math.round(img.width * r); c.height = Math.round(img.height * r); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url); res(c.toDataURL('image/jpeg', .72)); };
    img.onerror = () => { URL.revokeObjectURL(url); res(null); };
    img.src = url;
  });
}

/* ---------- trip page ---------- */
function openTrip(id){ cur = id; showTrip(id, false); }
function showTrip(id, keep){
  const t = tripOf(id); if (!t) { closeOv(); return; }
  const top = ov.scrollTop, sp = spotsOf(id), pl = isPlanned(t);
  const ratings = sp.map(s => s.rating).filter(Boolean), avg = ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : null;
  const cost = sp.reduce((n, s) => n + (+s.cost || 0), 0), allPh = sp.flatMap(photosOf);
  galList = [...(t.photo ? [t.photo] : []), ...allPh];
  const days = {}; sp.forEach(s => (days[s.date || ''] = days[s.date || ''] || []).push(s));
  const keys = Object.keys(days).sort((a, b) => !a ? 1 : !b ? -1 : a.localeCompare(b));
  const tl = keys.length ? keys.map(k => `<div class="dayg"><h4>${k ? esc(fmtD(k, {weekday:'long', day:'numeric', month:'long'})) : 'Χωρίς ημερομηνία'}</h4>${days[k].map(s => { const ph = photosOf(s)[0];
    return `<button class="tli" type="button" data-act="openSpot" data-id="${esc(s.id)}"><span class="tlt" style="${ph ? `background-image:url('${esc(ph)}')` : `background:${catBg(s.cat)}`}">${ph ? '' : svg(s.cat, 26)}</span><span class="tlb"><b>${esc(s.name)}</b><span class="sub">${CAT[s.cat] || ''}${s.cost ? ' · ' + esc(fmtN(+s.cost)) + ' €' : ''}</span><span class="jr">${s.rating ? stars(s.rating) : ''}${s.mood ? `<span class="mood" title="${MOOD[s.mood] || ''}">${svg(s.mood, 18)}</span>` : ''}</span>${s.note ? `<span class="nt">${esc(s.note)}</span>` : ''}</span></button>`; }).join('')}</div>`).join('')
    : `<div class="emptyx">${svg('camera', 40, 1.4)}<p>Δεν έχεις γράψει ακόμα εμπειρίες για αυτό το ταξίδι.</p><button class="btn primary" type="button" data-act="newSpotFor" data-id="${esc(id)}">Πρόσθεσε την πρώτη</button></div>`;
  const gal = galList.length ? `<h3 class="sech">Φωτογραφίες</h3><div class="gal">${galList.map((p, i) => `<button type="button" data-act="lb" data-i="${i}" style="background-image:url('${esc(p)}')" aria-label="Φωτογραφία ${i + 1}"></button>`).join('')}</div>` : '';
  openOv(`
    <div class="closebar"><button class="btn" type="button" data-act="closeOv">${svg('back', 16)} Πίσω</button><span class="tools"><button class="btn small" type="button" data-act="openCard" data-id="${esc(id)}">${svg('card', 16)} Καρτ ποστάλ</button><button class="btn small" type="button" data-act="editTrip" data-id="${esc(id)}">${svg('pen', 16)} Επεξεργασία</button></span></div>
    <div class="tv-cover"${t.photo ? ` style="background-image:url('${esc(t.photo)}')"` : ''}>${t.photo ? '' : art(t)}<div class="tv-t"><small>${pl ? 'Θέλω να πάω' : 'Χαιρετίσματα από'}</small><h2>${esc(t.city)}</h2><span>${esc(t.country)}${rangeText(t) ? ' · ' + esc(rangeText(t)) : ''}</span></div></div>
    ${t.note ? `<p class="note2">«${esc(t.note)}»</p>` : ''}
    <div class="sumrow"><div><b>${sp.length}</b><span>εμπειρίες</span></div><div><b>${avg ? avg.toFixed(1) : '–'}</b><span>μέσος βαθμός</span></div><div><b>${cost ? fmtN(Math.round(cost)) + ' €' : '–'}</b><span>έξοδα</span></div><div><b>${allPh.length + (t.photo ? 1 : 0)}</b><span>φωτογραφίες</span></div></div>
    <div class="tools"><button class="btn primary" type="button" data-act="newSpotFor" data-id="${esc(id)}">${svg('plus', 16, 2.4)} Νέα εμπειρία</button><button class="btn" type="button" id="tvPhoto">${svg('img', 16)} ${t.photo ? 'Άλλαξε εξώφυλλο' : 'Βάλε εξώφυλλο'}</button><input type="file" id="tvFile" accept="image/*" hidden></div>
    <h3 class="sech">Χρονολόγιο</h3>${tl}${gal}
    <div class="tools" style="margin-top:8px"><button class="btn danger small" type="button" id="tvDel">${svg('trash', 16)} Διαγραφή ταξιδιού</button></div>`, 'trip');
  if (keep) ov.scrollTop = top;
  $('#tvPhoto').onclick = () => $('#tvFile').click();
  $('#tvFile').onchange = async e => { const f = e.target.files[0]; if (f) { const d = await shrink(f, 1200); if (d) put({...t, photo:d}); } };
  let c = false; $('#tvDel').onclick = () => { if (!c) { c = true; $('#tvDel').lastChild.textContent = ' Σίγουρα; Πάτα ξανά'; return; } const tid = id; closeOv(); spotsOf(tid).forEach(s => del(s.id)); del(tid); renderAll(); toast('Το ταξίδι διαγράφηκε'); };
}
function showCard(id, flipped){
  const t = tripOf(id); if (!t) { closeOv(); return; }
  const sp = spotsOf(id), groups = Object.keys(CAT).map(c => [c, sp.filter(s => s.cat === c)]).filter(g => g[1].length);
  const list = groups.length ? groups.map(([c, arr]) => `<div class="grp"><h4>${CAT[c]}</h4><ul class="spots">${arr.map(s => `<li><span><button class="nm" type="button" data-act="openSpot" data-id="${esc(s.id)}">${esc(s.name)}</button> ${s.rating ? stars(s.rating) : ''}</span><span class="t t${s.trust}">${TRUST[s.trust] || ''}</span>${s.note ? `<em>${esc(s.note)}</em>` : ''}</li>`).join('')}</ul></div>`).join('') : '<p class="note" style="color:var(--paper-muted)">Δεν έχεις γράψει ακόμα εμπειρίες.</p>';
  cur = id; openOv(`
    <div class="closebar"><button class="btn" type="button" data-act="openTrip" data-id="${esc(id)}">${svg('back', 16)} Πίσω</button><button class="btn" type="button" id="cFlip">Γύρνα την κάρτα</button></div>
    <div class="flip"><div class="flipper${flipped ? ' back' : ''}" id="flipper">
      <div class="fside">${front(t, true)}</div>
      <div class="fside rev"><div class="air"><div class="backface">
        <div class="bl">${t.note ? `<p class="note">«${esc(t.note)}»</p>` : ''}${list}</div>
        <div class="br"><div class="stamp"><i></i>${esc(tripYear(t))}</div><div class="addr"><div>${esc(t.city)}</div><div>${esc(t.country)}</div><div>${esc(rangeText(t))}</div></div></div>
      </div></div></div></div></div>`, 'card');
  $('#cFlip').onclick = () => $('#flipper').classList.toggle('back');
}
function showSpot(id){
  const s = items.find(x => x.id === id); if (!s) return; const t = tripOf(s.tripId) || {}, ph = photosOf(s);
  galList = ph;
  const meta = [s.date ? `${svg('cal', 18)}<span>${esc(fmtD(s.date))}</span>` : '', s.mood ? `${svg(s.mood, 18)}<span>${MOOD[s.mood] || ''}</span>` : '', s.who ? `${svg(s.who, 18)}<span>${WHO[s.who] || ''}</span>` : '', s.cost ? `${svg('euro', 18)}<span>${esc(fmtN(+s.cost))} €</span>` : ''].filter(Boolean);
  openOv(`<div class="closebar"><button class="btn" type="button" data-act="back">${svg('back', 16)} Πίσω</button><span class="ctag">${svg(s.cat, 16)} ${CAT[s.cat] || ''}</span></div>
    <div class="dview">${ph.length ? `<div class="pscroll">${ph.map((p, i) => `<button type="button" data-act="lb" data-i="${i}" style="background-image:url('${esc(p)}')" aria-label="Φωτογραφία ${i + 1}"></button>`).join('')}</div>` : `<div class="dimg" style="background:${catBg(s.cat)}">${svg(s.cat, 64, 1.4)}</div>`}
    <h2>${esc(s.name)}</h2>
    <div class="sub">${esc(t.city || '')}${t.country ? ', ' + esc(t.country) : ''}</div>
    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">${s.rating ? stars(s.rating) : ''}<span class="t t${s.trust}">${TRUST[s.trust] || ''}</span></div>
    ${meta.length ? `<div class="metas">${meta.map(m => `<span>${m}</span>`).join('')}</div>` : ''}
    ${s.note ? `<p class="note2">${esc(s.note)}</p>` : '<p class="hint">Χωρίς σημείωση.</p>'}
    <div class="tools"><button class="btn primary" type="button" data-act="editSpot" data-id="${esc(id)}">${svg('pen', 16)} Επεξεργασία</button><button class="btn danger" type="button" id="sDel">${svg('trash', 16)} Διαγραφή</button></div></div>`, 'spot', true);
  let c = false; $('#sDel').onclick = () => { if (!c) { c = true; $('#sDel').lastChild.textContent = ' Σίγουρα; Πάτα ξανά'; return; } del(id); renderAll(); toast('Η εμπειρία διαγράφηκε'); backOv(); };
}

/* ---------- experience sheet ---------- */
function spotSheet(init){
  init = init || {};
  const T = trips().sort((a, b) => sortKey(b).localeCompare(sortKey(a)));
  if (!T.length) { openOv(`<h2>Πρώτα ένα ταξίδι</h2><p class="hint">Κάθε εμπειρία ανήκει σε ένα ταξίδι. Πρόσθεσε πρώτα την πόλη που επισκέφτηκες.</p><div class="tools"><button class="btn primary" type="button" data-act="newTrip">Νέο ταξίδι</button><button class="btn" type="button" data-act="closeOv">Άκυρο</button></div>`, 'form', true); return; }
  const tid = init.tripId || (visited().slice(-1)[0] || T[0]).id, trip = tripOf(tid);
  let st = {cat:init.cat || '', mood:init.mood || '', who:init.who || '', rating:init.rating || 0, trust:init.trust || 3, photos:[...photosOf(init)]};
  const defDate = init.date || (trip && trip.start && trip.start <= TODAY ? trip.start : TODAY);
  const tiles = (obj, key, list) => `<div class="tiles" data-k="${key}">${list.map(k => `<button type="button" class="tile" data-v="${k}" aria-pressed="${st[key] === k}" style="--tb:${key === 'cat' ? catBg(k) : 'var(--bg)'}"><span class="ti">${svg(k, 28)}</span><span>${obj[k]}</span></button>`).join('')}</div>`;
  openOv(`<div class="closebar"><h2>${init.id ? 'Επεξεργασία εμπειρίας' : 'Νέα εμπειρία'}</h2><button class="roundb" type="button" data-act="back" aria-label="Κλείσιμο">${svg('x', 18)}</button></div>
    <form id="sf">
      <label for="sTrip">Στο ταξίδι<select id="sTrip">${T.map(t => `<option value="${esc(t.id)}"${t.id === tid ? ' selected' : ''}>${esc(t.city)} · ${esc(rangeText(t))}</option>`).join('')}</select></label>
      <div><label>Φωτογραφίες</label><div class="pgrid" id="sPh"></div><input type="file" id="sFile" accept="image/*" multiple hidden></div>
      <div><label>Τι ήταν;</label>${tiles(CAT, 'cat', PICK)}</div>
      <label for="sName">Τίτλος<input id="sName" maxlength="90" value="${esc(init.name || '')}" placeholder="Π.χ. Βραδινό στην ταβέρνα του Γιάννη"></label>
      <div><label>Πώς ένιωσες;</label>${tiles(MOOD, 'mood', Object.keys(MOOD))}</div>
      <div><label>Βαθμολογία</label><div class="starpick" id="sStars" role="group" aria-label="Βαθμολογία">${[1,2,3,4,5].map(i => `<button type="button" data-v="${i}" aria-label="${i} στα 5" class="${i <= st.rating ? 'on' : ''}">${STAR}</button>`).join('')}</div></div>
      <label for="sNote">Τι θα θυμάσαι από αυτή τη στιγμή;<textarea id="sNote" maxlength="800" placeholder="Μια φράση, μια μυρωδιά, κάτι που σου είπαν…">${esc(init.note || '')}</textarea></label>
      <details class="more"><summary>Περισσότερα στοιχεία</summary><div class="morei">
        <div class="row"><label for="sDate">Ημερομηνία<input id="sDate" type="date" value="${esc(defDate)}"></label><label for="sCost">Έξοδα (€)<input id="sCost" type="number" min="0" step="0.01" inputmode="decimal" value="${init.cost ?? ''}" placeholder="0"></label></div>
        <div><label>Με ποιον;</label>${tiles(WHO, 'who', Object.keys(WHO))}</div>
        <div><label>Θα το ξανάκανες;</label><div class="tiles tr" data-k="trust">${[3, 2, 1].map(n => `<button type="button" class="tile" data-v="${n}" aria-pressed="${st.trust === n}"><span>${TRUST[n]}</span></button>`).join('')}</div></div>
      </div></details>
      <p class="msg" id="sMsg" role="alert"></p>
      <div class="savebar"><button class="btn primary" type="submit" style="flex:1">Αποθήκευση</button><button class="btn" type="button" data-act="back">Άκυρο</button></div>
    </form>`, 'form', true);
  const drawPh = () => { $('#sPh').innerHTML = st.photos.map((p, i) => `<span class="pth" style="background-image:url('${esc(p)}')"><button type="button" data-rm="${i}" aria-label="Αφαίρεση φωτογραφίας">${svg('x', 14, 2.4)}</button></span>`).join('') + `<button type="button" class="padd" id="sAdd">${svg('camera', 26)}<span>${st.photos.length ? 'Άλλη' : 'Πρόσθεσε'}</span></button>`;
    $('#sAdd').onclick = () => $('#sFile').click(); $$('#sPh [data-rm]').forEach(b => b.onclick = () => { st.photos.splice(+b.dataset.rm, 1); drawPh(); }); };
  drawPh();
  $('#sFile').onchange = async e => {
    const fs = [...e.target.files]; if (!fs.length) return; $('#sMsg').textContent = '';
    for (const f of fs) { const d = await shrink(f, 1000); if (d) st.photos.push(d); }
    drawPh(); e.target.value = '';
    const f0 = fs[0]; if (f0 && f0.lastModified && !init.id) { const d = isoOf(new Date(f0.lastModified)), t = tripOf($('#sTrip').value); if (!t || !t.start || (d >= t.start && d <= (t.end || t.start))) $('#sDate').value = d; }
  };
  $$('#sf .tiles').forEach(g => g.onclick = e => { const b = e.target.closest('.tile'); if (!b) return; const k = g.dataset.k, v = k === 'trust' ? +b.dataset.v : b.dataset.v; st[k] = (st[k] === v && k !== 'trust') ? '' : v; g.querySelectorAll('.tile').forEach(x => x.setAttribute('aria-pressed', String((k === 'trust' ? +x.dataset.v : x.dataset.v) === st[k]))); });
  $('#sStars').onclick = e => { const b = e.target.closest('button'); if (!b) return; const v = +b.dataset.v; st.rating = st.rating === v ? 0 : v; $$('#sStars button').forEach(x => x.classList.toggle('on', +x.dataset.v <= st.rating)); };
  $('#sf').onsubmit = e => {
    e.preventDefault();
    const name = $('#sName').value.trim() || (st.cat ? CAT[st.cat] : '');
    if (!name && !st.photos.length) { $('#sMsg').textContent = 'Γράψε έναν τίτλο ή πρόσθεσε μια φωτογραφία.'; return; }
    const item = {...init, id:init.id || uid('s'), kind:'spot', tripId:$('#sTrip').value, name:name || 'Στιγμή', cat:st.cat || 'sight', mood:st.mood || null, who:st.who || null, rating:st.rating, trust:st.trust, date:$('#sDate').value || null, cost:$('#sCost').value === '' ? null : +$('#sCost').value, note:$('#sNote').value.trim(), photos:st.photos};
    delete item.example; delete item.photo;
    const back = ovReturn || null; closeOv(); put(item); toast('Αποθηκεύτηκε');
    if (back || ovKind === null) openTrip(item.tripId);
  };
}

/* ---------- trip sheet (with place search) ---------- */
let draft = null, searchTimer = null, searchSeq = 0;
function localMatches(q){ const n = norm(q); if (n.length < 2) return []; return CITIES.filter(c => norm(c[0]).includes(n) || norm(c[1]).includes(n)).slice(0, 5).map(c => ({city:c[0], country:c[1], lat:c[2], lon:c[3], sub:c[1]})); }
async function onlineSearch(q){
  const r = await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=6&accept-language=el&q=' + encodeURIComponent(q));
  if (!r.ok) throw new Error('search');
  return (await r.json()).map(x => { const a = x.address || {}; return {city:x.name || a.city || a.town || a.village || a.municipality || a.county || String(x.display_name).split(',')[0], country:a.country || '', lat:+(+x.lat).toFixed(4), lon:+(+x.lon).toFixed(4), sub:x.display_name}; });
}
async function reverseGeo(lat, lon){
  const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&accept-language=el&zoom=10&lat=${lat}&lon=${lon}`);
  if (!r.ok) throw new Error('rev'); const x = await r.json(), a = x.address || {};
  return {city:a.city || a.town || a.village || a.municipality || a.county || x.name || '', country:a.country || ''};
}
function tripSheet(existing, mode){
  const isNew = !(existing && existing.id), d = draft || existing || {}; let photo = d.photo || null, wish = d.wish ?? (mode === 'plan'), found = [];
  openOv(`<div class="closebar"><h2>${isNew ? 'Νέο ταξίδι' : 'Επεξεργασία ταξιδιού'}</h2><button class="roundb" type="button" data-act="back" aria-label="Κλείσιμο">${svg('x', 18)}</button></div>
    <form id="tf">
      <div><label for="tQ">Πού πήγες;</label>
        <div class="sbox">${svg('search', 20)}<input id="tQ" type="search" autocomplete="off" placeholder="Γράψε πόλη ή νησί, π.χ. Λισαβόνα" value="${esc(d.city || '')}"></div>
        <ul class="sres" id="tRes"></ul><p class="hint" id="tHint"></p>
        <div class="tools"><button class="btn small" type="button" id="tHere">${svg('locate', 16)} Είμαι εδώ τώρα</button><button class="btn small" type="button" id="tPick">${svg('map', 16)} Διάλεξε στον χάρτη</button></div></div>
      <div class="chosen" id="tChosen" hidden></div>
      <div class="row"><label for="tCity">Όνομα πόλης<input id="tCity" required value="${esc(d.city || '')}"></label><label for="tCountry">Χώρα<input id="tCountry" required value="${esc(d.country || '')}"></label></div>
      <input type="hidden" id="tLat" value="${d.lat ?? ''}"><input type="hidden" id="tLon" value="${d.lon ?? ''}">
      <div><label>Το ταξίδι</label><div class="tiles tr" id="tWish"><button type="button" class="tile" data-w="0" aria-pressed="${!wish}"><span>Έχω ήδη πάει</span></button><button type="button" class="tile" data-w="1" aria-pressed="${!!wish}"><span>Θέλω να πάω</span></button></div></div>
      <div class="row"><label for="tStart">Από<input id="tStart" type="date" value="${esc(d.start || '')}"></label><label for="tEnd">Έως<input id="tEnd" type="date" value="${esc(d.end || '')}"></label></div>
      <div class="tools"><button class="btn small" type="button" id="tPhotoB">${svg('img', 16)} Φωτογραφία εξωφύλλου</button><span class="hint" id="tPhotoS">${photo ? 'Υπάρχει φωτογραφία.' : ''}</span><input type="file" id="tFile" accept="image/*" hidden></div>
      <label for="tNote">Μια φράση για το ταξίδι<textarea id="tNote" maxlength="240" placeholder="Π.χ. Ανηφόρες, κεραμίδια και ο ήχος του τραμ.">${esc(d.note || '')}</textarea></label>
      <p class="msg" id="tMsg" role="alert"></p>
      <div class="savebar"><button class="btn primary" type="submit" style="flex:1">${isNew ? 'Πρόσθεσε το ταξίδι' : 'Αποθήκευση'}</button><button class="btn" type="button" data-act="back">Άκυρο</button></div>
    </form>`, 'form', true);
  const grab = () => ({...(existing || {}), city:$('#tCity').value.trim(), country:$('#tCountry').value.trim(), start:$('#tStart').value || null, end:$('#tEnd').value || null, wish, photo, lat:$('#tLat').value === '' ? null : +$('#tLat').value, lon:$('#tLon').value === '' ? null : +$('#tLon').value, note:$('#tNote').value.trim()});
  const choose = r => { $('#tQ').value = r.city; $('#tCity').value = r.city; if (r.country) $('#tCountry').value = r.country; $('#tLat').value = r.lat; $('#tLon').value = r.lon; $('#tRes').innerHTML = ''; $('#tHint').textContent = ''; const c = $('#tChosen'); c.hidden = false; c.innerHTML = `${svg('map', 18)}<span>${esc(r.city)}${r.country ? ', ' + esc(r.country) : ''} <small>(${r.lat}, ${r.lon})</small></span>`; };
  if (d.lat != null && d.lon != null) choose({city:d.city || '', country:d.country || '', lat:d.lat, lon:d.lon});
  const drawRes = (list, note) => { found = list; $('#tRes').innerHTML = list.map((r, i) => `<li><button type="button" class="res" data-i="${i}">${svg('map', 18)}<span><b>${esc(r.city)}${r.country ? ', ' + esc(r.country) : ''}</b><small>${esc(r.sub || '')}</small></span></button></li>`).join(''); $('#tHint').textContent = note || ''; };
  $('#tRes').onclick = e => { const b = e.target.closest('.res'); if (b) choose(found[+b.dataset.i]); };
  $('#tQ').addEventListener('input', () => {
    const q = $('#tQ').value.trim(), loc = localMatches(q); drawRes(loc, ''); clearTimeout(searchTimer);
    if (q.length < 3) return;
    const seq = ++searchSeq; $('#tHint').textContent = 'Αναζήτηση…';
    searchTimer = setTimeout(async () => {
      try { const on = await onlineSearch(q); if (seq !== searchSeq || ov.hidden || !$('#tRes')) return; const seen = new Set(loc.map(r => norm(r.city))); drawRes([...loc, ...on.filter(r => !seen.has(norm(r.city)))], on.length || loc.length ? '' : 'Δεν βρέθηκε. Δοκίμασε άλλη γραφή ή διάλεξε στον χάρτη.'); }
      catch(_) { if (seq === searchSeq && $('#tHint')) $('#tHint').textContent = loc.length ? 'Χωρίς σύνδεση: δείχνω μόνο τη λίστα της εφαρμογής.' : 'Χωρίς σύνδεση. Διάλεξε στον χάρτη ή γράψε τις συντεταγμένες από τη φόρμα.'; }
    }, 600);
  });
  $('#tQ').addEventListener('keydown', e => { if (e.key === 'Enter') e.preventDefault(); });
  $('#tHere').onclick = () => {
    if (!navigator.geolocation) { $('#tHint').textContent = 'Η συσκευή δεν δίνει τοποθεσία.'; return; }
    $('#tHint').textContent = 'Βρίσκω τη θέση σου…';
    navigator.geolocation.getCurrentPosition(async pos => { const lat = +pos.coords.latitude.toFixed(4), lon = +pos.coords.longitude.toFixed(4); let r = {city:'', country:''}; try { r = await reverseGeo(lat, lon); } catch(_){} choose({city:r.city, country:r.country, lat, lon}); if (!r.city) $('#tHint').textContent = 'Βρέθηκε η θέση. Γράψε το όνομα της πόλης.'; }, () => { $('#tHint').textContent = 'Δεν δόθηκε άδεια τοποθεσίας.'; }, {timeout:12000});
  };
  $('#tPick').onclick = () => startPick(grab(), existing);
  $('#tWish').onclick = e => { const b = e.target.closest('.tile'); if (!b) return; wish = b.dataset.w === '1'; $$('#tWish .tile').forEach(x => x.setAttribute('aria-pressed', String((x.dataset.w === '1') === wish))); };
  $('#tPhotoB').onclick = () => $('#tFile').click();
  $('#tFile').onchange = async e => { const f = e.target.files[0]; if (f) { photo = await shrink(f, 1200); $('#tPhotoS').textContent = photo ? 'Η φωτογραφία προστέθηκε.' : 'Δεν άνοιξε η φωτογραφία.'; } };
  $('#tf').onsubmit = e => {
    e.preventDefault(); const v = grab();
    if (!v.city || !v.country) { $('#tMsg').textContent = 'Γράψε την πόλη και τη χώρα.'; return; }
    if (v.lat == null || v.lon == null) { $('#tMsg').textContent = 'Λείπει η θέση. Διάλεξε ένα αποτέλεσμα από την αναζήτηση ή πάτα «Διάλεξε στον χάρτη».'; return; }
    if (v.start && v.end && v.end < v.start) { $('#tMsg').textContent = 'Η ημερομηνία λήξης είναι πριν την έναρξη.'; return; }
    const item = {...v, id:v.id || uid('t'), kind:'trip'}; delete item.example; if (!item.wish) delete item.wish; if (!item.photo) delete item.photo;
    draft = null; closeOv(); put(item);
    if (isNew) { toast('Το ταξίδι προστέθηκε'); openTrip(item.id); } else openTrip(item.id);
  };
}
function startPick(d, existing){
  draft = d; ov.hidden = true; document.body.style.overflow = ''; picking = existing || {}; showScreen('map'); map.classList.add('picking');
  const bar = document.createElement('div'); bar.className = 'pickbar'; bar.id = 'pickbar';
  bar.innerHTML = '<span>Πάτησε στον χάρτη εκεί που ήσουν</span><button type="button">Άκυρο</button>';
  bar.querySelector('button').onclick = () => finishPick(null, null);
  map.appendChild(bar);
}
function finishPick(lat, lon){
  const ex = picking; picking = null; map.classList.remove('picking'); const b = $('#pickbar'); if (b) b.remove();
  if (lat != null) { draft.lat = lat; draft.lon = lon; }
  tripSheet(ex && ex.id ? ex : null);
}

/* ---------- settings ---------- */
function settingsForm(){
  openOv(`<div class="closebar"><h2>Ρυθμίσεις</h2><button class="roundb" type="button" data-act="closeOv" aria-label="Κλείσιμο">${svg('x', 18)}</button></div>
    <form id="stf">
      <label for="stKey">Κλειδί Anthropic API (για τη συνομιλία)<input id="stKey" type="password" autocomplete="off" placeholder="sk-ant-…" value="${esc(getKey())}"></label>
      <label for="stModel">Μοντέλο<select id="stModel"><option value="claude-sonnet-5-5">Sonnet 5.5 (πιο έξυπνο)</option><option value="claude-haiku-5-5">Haiku 5.5 (πιο φθηνό)</option></select></label>
      <p class="hint">Το κλειδί αποθηκεύεται μόνο σε αυτή τη συσκευή και στέλνεται μόνο στο Anthropic. Οι ερωτήσεις χρεώνονται στον δικό σου λογαριασμό.</p>
      <div class="tools"><button class="btn primary" type="submit">Αποθήκευση</button></div>
    </form>
    <h3 class="sech">Φωτογραφία εξωφύλλου</h3>
    <p class="hint">Βάλε μια δική σου φωτογραφία στην πρώτη οθόνη.</p>
    <div class="tools"><button class="btn" type="button" id="heroPick">Διάλεξε φωτογραφία</button><button class="btn" type="button" id="heroReset">Αρχική εικόνα</button><input id="heroFile" type="file" accept="image/*" hidden></div>
    <h3 class="sech">Αντίγραφο ασφαλείας</h3>
    <p class="hint">Τα δεδομένα σου υπάρχουν μόνο σε αυτό το κινητό. Αν σβήσεις τα δεδομένα του browser ή την εφαρμογή, χάνονται. Κάνε αντίγραφο κάθε τόσο και κράτα το στο Drive, στο iCloud ή στο email σου.</p>
    <div class="tools"><button class="btn" type="button" data-act="export">Κάνε αντίγραφο</button><button class="btn" type="button" data-act="importPick">Επαναφορά από αντίγραφο</button><input id="impFile" type="file" accept="application/json,.json" hidden></div>`, 'form', true);
  $('#stModel').value = getModel();
  $('#heroPick').onclick = () => $('#heroFile').click();
  $('#heroFile').onchange = async e => { const f = e.target.files[0]; if (f) { const d = await shrink(f, 1600); if (d) { put({id:'hero', kind:'meta', photo:d}); toast('Η φωτογραφία εξωφύλλου άλλαξε'); } } };
  $('#heroReset').onclick = () => { del('hero'); renderAll(); toast('Επαναφέρθηκε η αρχική εικόνα'); };
  $('#stf').onsubmit = e => { e.preventDefault(); try { localStorage.setItem(KEY, $('#stKey').value.trim()); localStorage.setItem(MODELKEY, $('#stModel').value); } catch(_){} closeOv(); toast('Οι ρυθμίσεις αποθηκεύτηκαν'); };
  $('#impFile').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try {
      const arr = JSON.parse(await f.text()); if (!Array.isArray(arr)) throw 0;
      let n = 0; for (const it of arr) { if (it && it.id && (it.kind === 'trip' || it.kind === 'spot' || (it.kind === 'meta' && it.id === 'hero'))) { const i = items.findIndex(x => x.id === it.id); if (i >= 0) items[i] = it; else items.push(it); save(it); n++; } }
      closeOv(); renderAll(); toast('Επαναφέρθηκαν ' + n + ' στοιχεία');
    } catch(_){ toast('Το αρχείο δεν είναι έγκυρο αντίγραφο'); }
  };
}

/* ---------- actions ---------- */
const go = id => { const el = document.getElementById(id); if (el) el.scrollIntoView({behavior:reduced ? 'auto' : 'smooth', block:'start'}); };
const keepTrip = () => { if (ovKind === 'trip' && cur) ovReturn = cur; };
const A = {
  tab: (id, el) => { if (location.hash.slice(1) === el.dataset.to) showScreen(el.dataset.to); else location.hash = el.dataset.to; },
  go: (id, el) => go(el.dataset.to),
  plus: () => openOv(`<div class="closebar"><h2>Τι θέλεις να προσθέσεις;</h2><button class="roundb" type="button" data-act="closeOv" aria-label="Κλείσιμο">${svg('x', 18)}</button></div>
    <div class="bigs"><button class="bigact" type="button" data-act="newTrip"><span class="bi">${svg('trips', 34)}</span><b>Νέο ταξίδι</b><span>Πού πήγες ή πού θέλεις να πας</span></button><button class="bigact" type="button" data-act="newSpot"><span class="bi">${svg('camera', 34)}</span><b>Νέα εμπειρία</b><span>Μια στιγμή, ένα μέρος, φωτογραφίες</span></button></div>`, 'plus', true),
  newTrip: () => { draft = null; ovReturn = null; tripSheet(null); },
  newPlan: () => { draft = null; ovReturn = null; tripSheet(null, 'plan'); },
  newSpot: () => { ovReturn = null; spotSheet(); },
  newSpotFor: id => { keepTrip(); spotSheet({tripId:id}); },
  newSpotDay: (id, el) => { const day = el.dataset.d, t = trips().find(x => x.start && day >= x.start && day <= (x.end || x.start)); spotSheet({date:day, tripId:t && t.id}); },
  editTrip: id => { keepTrip(); tripSheet(tripOf(id)); },
  editSpot: id => { const s = items.find(x => x.id === id); if (s) { ovReturn = ovReturn || s.tripId; spotSheet(s); } },
  openTrip: id => { ovReturn = null; openTrip(id); },
  openCard: id => showCard(id, false),
  openSpot: id => { keepTrip(); showSpot(id); },
  closeOv: () => closeOv(),
  back: () => backOv(),
  lb: (id, el) => openLB(galList, +el.dataset.i),
  pinTap: id => { selPin = id; renderPinSheet(); },
  pinClose: () => { selPin = null; renderPinSheet(); },
  tripsTab: (id, el) => { tripsTab = el.dataset.v; renderTripsScreen(); observe(); },
  tripFilter: (id, el) => { tripFilter = el.dataset.v; renderTripsScreen(); },
  clearEx: () => { items.filter(i => i.example).forEach(i => del(i.id)); renderAll(); toast('Τα παραδείγματα σβήστηκαν'); },
  scr: (id, el) => { const s = document.getElementById(el.dataset.t); s.scrollBy({left:+el.dataset.d * Math.max(260, s.clientWidth * .75), behavior:'smooth'}); },
  filterCat: (id, el) => { jFilter = el.dataset.c; jAll = false; renderJournal(); },
  jmore: () => { jAll = !jAll; renderJournal(); },
  calPrev: () => { cal.m--; if (cal.m < 0) { cal.m = 11; cal.y--; } renderCalendar(); },
  calNext: () => { cal.m++; if (cal.m > 11) { cal.m = 0; cal.y++; } renderCalendar(); },
  calDay: (id, el) => { calSel = el.dataset.d; renderCalendar(); },
  memNext: () => { memIdx++; renderMemory(); },
  settings: () => { ovReturn = null; settingsForm(); },
  importPick: () => $('#impFile').click(),
  export: async () => {
    const data = JSON.stringify(items.filter(i => i.kind !== 'meta' || i.id === 'hero'), null, 2), name = 'world-travel-' + TODAY + '.json';
    try { const f = new File([data], name, {type:'application/json'}); if (navigator.canShare && navigator.canShare({files:[f]})) { await navigator.share({files:[f], title:'World Travel'}); toast('Το αντίγραφο ετοιμάστηκε'); return; } } catch(e){ if (e && e.name === 'AbortError') return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data], {type:'application/json'})); a.download = name; document.body.appendChild(a); a.click(); a.remove(); toast('Το αντίγραφο αποθηκεύτηκε');
  }
};
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const fn = A[el.dataset.act]; if (fn) fn(el.dataset.id, el, e);
});
document.addEventListener('input', e => { if (e.target.id === 'jq') { jQuery = e.target.value; const pos = e.target.selectionStart; renderJournal(); const n = $('#jq'); if (n) { n.focus(); n.setSelectionRange(pos, pos); } } });

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
    εμπειρίες:spotsOf(t.id).map(s => ({όνομα:s.name, κατηγορία:CAT[s.cat], εμπιστοσύνη:TRUST[s.trust], βαθμολογία:s.rating || undefined, ημερομηνία:s.date || undefined, σημείωση:s.note || undefined, διάθεση:MOOD[s.mood] || undefined, με:WHO[s.who] || undefined, έξοδα:s.cost || undefined}))}));
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

/* ---------- hero art ---------- */
(function buildHero(){
  let s = 11; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  let st = ''; for (let i = 0; i < 70; i++) st += `<circle cx="${(rnd() * 1200).toFixed(0)}" cy="${(rnd() * 300).toFixed(0)}" r="${(.4 + rnd() * 1.1).toFixed(1)}" fill="#fff" opacity="${(.25 + rnd() * .6).toFixed(2)}"/>`;
  $('#stars').innerHTML = st;
  const blades = (id, n, y0, yv, hmin, hmax, cols) => { let out = '';
    for (let i = 0; i < n; i++) { const x = rnd() * 1260 - 30, b = y0 + rnd() * yv, h = hmin + rnd() * (hmax - hmin), dx = (rnd() - .5) * 28, c = cols[(rnd() * cols.length) | 0];
      out += `<path d="M${x.toFixed(1)} ${b.toFixed(1)} Q${(x + dx * .3).toFixed(1)} ${(b - h * .6).toFixed(1)} ${(x + dx).toFixed(1)} ${(b - h).toFixed(1)}" stroke="${c}" stroke-width="${(.8 + rnd() * 1.4).toFixed(1)}" stroke-linecap="round" fill="none" opacity="${(.5 + rnd() * .5).toFixed(2)}"/>`; }
    $(id).innerHTML = out; };
  blades('#bladesBack', 520, 560, 50, 26, 70, ['#ffd18a', '#f0a24e', '#d98332', '#ffe0a8']);
  blades('#bladesFront', 620, 640, 120, 40, 110, ['#ffcf7a', '#f29a3d', '#c9701f', '#ffe6b0', '#a8541a']);
})();

/* ---------- boot ---------- */
measure(); applyView();
showScreen(location.hash.slice(1) || 'home');
initStore();
})();
if ('serviceWorker' in navigator) addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
