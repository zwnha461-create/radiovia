import { T, SLICES, sliceSrc, LEVELS, levelOf, LABELS, GLOSSARY, QUIZ, VIEWERS } from './content.js';

let lang = localStorage.getItem('radiovia-lang') || 'ar';
const t = () => T[lang];
const $ = s => document.querySelector(s);

const LOGO = `<svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="#0e7c86"/><circle cx="32" cy="32" r="7" fill="#fff"/><g stroke="#fff" stroke-width="5" stroke-linecap="round"><line x1="32" y1="10" x2="32" y2="19"/><line x1="32" y1="45" x2="32" y2="54"/><line x1="10" y1="32" x2="19" y2="32"/><line x1="45" y1="32" x2="54" y2="32"/></g></svg>`;

function renderChrome(){
  document.documentElement.lang = lang;
  document.documentElement.dir = t().dir;
  const route = location.hash || '#/';
  const nav = [
    ['#/', t().nav_home], ['#/physics', t().nav_physics],
    ['#/anatomy', t().nav_anatomy], ['#/dicom', t().nav_dicom],
  ];
  $('#site-header').innerHTML = `<div class="site"><div class="wrap"><div class="bar">
    <a class="logo" href="#/">${LOGO}<span>Radiovia<small>${lang==='ar'?'راديوفيا — تعليم الأشعة التشخيصية':'Diagnostic radiology education'}</small></span></a>
    <nav class="main">${nav.map(([h,l])=>`<a href="${h}" class="${route===h?'active':''}">${l}</a>`).join('')}</nav>
    <button class="lang-toggle" id="lang-btn">${t().langName}</button>
  </div></div></div>`;
  $('#lang-btn').onclick = () => { lang = lang==='ar' ? 'en' : 'ar'; localStorage.setItem('radiovia-lang', lang); render(); };
  $('#site-footer').innerHTML = `<div class="site"><div class="wrap"><div class="cols">
    <div style="max-width:520px"><b>Radiovia</b><br>${t().foot_about}</div>
    <div>${t().foot_credit}<br>${t().foot_note}</div>
  </div></div></div>`;
}

/* ---------- glossary popover ---------- */
function glossify(html){
  const map = [
    ['Characteristic radiation','characteristic radiation'], ['characteristic radiation','characteristic radiation'],
    ['Bremsstrahlung','bremsstrahlung'], ['Thermionic emission','thermionic emission'],
    ['thermionic emission','thermionic emission'], ['kVp','kVp'],
    ['الانبعاث الحراري','thermionic emission'], ['إشعاع الكبح','bremsstrahlung'], ['الإشعاع المميز','characteristic radiation'],
  ];
  const rx = new RegExp(map.map(([s])=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'), 'g');
  const termOf = txt => { const f = map.find(([s])=>s===txt); return f ? f[1] : null; };
  return html.replace(rx, m => `<span class="gloss-term" data-term="${termOf(m)}">${m}</span>`);
}
function bindGloss(){
  const pop = $('#gloss-pop');
  document.querySelectorAll('.gloss-term').forEach(el=>{
    el.onclick = e => {
      e.stopPropagation();
      const g = GLOSSARY[el.dataset.term]; if(!g) return;
      pop.innerHTML = `<b>${el.textContent}</b><br>${g[lang]}`;
      const r = el.getBoundingClientRect();
      pop.hidden = false;
      pop.style.top = (r.bottom + 8) + 'px';
      pop.style.insetInlineStart = Math.max(10, Math.min(r.left, innerWidth-320)) + 'px';
    };
  });
  document.onclick = () => { pop.hidden = true; };
}

/* ---------- reveal on scroll ---------- */
function bindReveal(){
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ---------- HOME ---------- */
function viewHome(){
  const cards = [
    {ico:'🫁', tt:t().c_basics_t, p:t().c_basics_p, badge:`<span class="badge live">${t().live}</span>`, link:'#/anatomy'},
    {ico:'⚛️', tt:t().c_physics_t, p:t().c_physics_p, badge:`<span class="badge live">${t().live}</span>`, link:'#/physics'},
    {ico:'🎯', tt:t().c_exams_t, p:t().c_exams_p, badge:`<span class="badge soon">${t().soon}</span>`, link:null},
    {ico:'🖥️', tt:t().c_dicom_t, p:t().c_dicom_p, badge:`<span class="badge live">${t().live}</span>`, link:'#/dicom'},
  ];
  return `<section class="hero"><div class="wrap">
    <div class="hero-art"><svg width="150" height="150" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="none" stroke="#0e7c86" stroke-width="2" opacity=".25"/>
      <g class="ring-spin"><circle cx="60" cy="60" r="44" fill="none" stroke="#0e7c86" stroke-width="3" stroke-dasharray="40 236" stroke-linecap="round"/></g>
      <g class="ring-spin-rev"><circle cx="60" cy="60" r="33" fill="none" stroke="#38a3ad" stroke-width="3" stroke-dasharray="26 181" stroke-linecap="round"/></g>
      <circle class="pulse-dot" cx="60" cy="60" r="9" fill="#0e7c86"/>
    </svg></div>
    <p style="color:var(--accent);font-weight:700;margin:0">${t().hero_kicker}</p>
    <h1><span class="brand">${t().hero_brand}</span> — ${t().hero_title}</h1>
    <p class="lead">${t().hero_lead}</p>
    <div class="stats">
      <div class="stat"><b>113</b><span>${t().stat_pages}</span></div>
      <div class="stat"><b>1800</b><span>${t().stat_exams}</span></div>
      <div class="stat"><b>4</b><span>${t().stat_sections}</span></div>
    </div>
    <p style="color:var(--muted);font-size:.9rem">${t().pilot_note}</p>
  </div></section>
  <section><div class="wrap">
    <h2 class="section-title">${t().sec_title}</h2><p class="section-sub">${t().sec_sub}</p>
    <div class="grid">${cards.map((c,i)=>`<div class="card reveal" style="transition-delay:${i*70}ms">
      <div class="ico">${c.ico}</div><h3>${c.tt}</h3><p>${c.p}</p>${c.badge}
      ${c.link?`<a class="go" href="${c.link}">${t().open}</a>`:''}
    </div>`).join('')}</div>
  </div></section>`;
}

/* ---------- PHYSICS ---------- */
function tubeSVG(){
  const electrons = Array.from({length:5},(_,i)=>`
    <circle r="4" fill="#ffb703"><animateMotion dur="1.6s" begin="${i*0.32}s" repeatCount="indefinite"
      path="M150,150 L330,150"/></circle>`).join('');
  const photons = Array.from({length:4},(_,i)=>`
    <circle r="3" fill="#0e7c86"><animateMotion dur="1.1s" begin="${0.4+i*0.27}s" repeatCount="indefinite"
      path="M345,150 L470,${120+i*22}"/></circle>`).join('');
  return `<svg viewBox="0 0 560 300" style="width:100%;height:auto" role="img" aria-label="X-ray tube diagram">
    <rect x="70" y="60" width="330" height="180" rx="90" fill="#eef4f6" stroke="#b9ccd4" stroke-width="2"/>
    <text x="235" y="48" text-anchor="middle" fill="#5b7183" font-size="13">${t().tube_vac}</text>
    <rect x="118" y="128" width="14" height="44" rx="4" fill="#c0392b"/>
    <path d="M118,138 q10,-14 20,0 q-10,14 -20,0" fill="none" stroke="#e67e22" stroke-width="3">
      <animate attributeName="opacity" values="1;.4;1" dur="1.2s" repeatCount="indefinite"/></path>
    <text x="125" y="200" text-anchor="middle" font-size="13" font-weight="700">${t().tube_cathode}</text>
    <rect x="322" y="105" width="16" height="90" rx="3" fill="#7a8b96" transform="rotate(18 330 150)"/>
    <text x="330" y="225" text-anchor="middle" font-size="13" font-weight="700">${t().tube_anode}</text>
    ${electrons}
    <polygon points="345,140 480,95 480,205 345,160" fill="#0e7c86" opacity=".14"/>
    ${photons}
    <rect x="492" y="90" width="10" height="120" rx="3" fill="#10222e"/>
    <text x="497" y="235" text-anchor="middle" font-size="13" font-weight="700">${lang==='ar'?'الكاشف':'Detector'}</text>
    <text x="420" y="80" text-anchor="middle" fill="#0e7c86" font-size="13" font-weight="700">${t().tube_beam}</text>
  </svg>`;
}
function spectrumSVG(){
  return `<svg viewBox="0 0 560 220" style="width:100%;height:auto" role="img" aria-label="X-ray spectrum">
    <line x1="50" y1="180" x2="530" y2="180" stroke="#5b7183" stroke-width="2"/>
    <line x1="50" y1="180" x2="50" y2="20" stroke="#5b7183" stroke-width="2"/>
    <path d="M55,178 Q180,40 300,95 T520,150" fill="none" stroke="#0e7c86" stroke-width="3"/>
    <line x1="330" y1="180" x2="330" y2="55" stroke="#e67e22" stroke-width="4"/>
    <line x1="352" y1="180" x2="352" y2="85" stroke="#e67e22" stroke-width="4"/>
    <text x="290" y="205" text-anchor="middle" fill="#5b7183" font-size="13">${lang==='ar'?'طاقة الفوتون (keV) ←':'Photon energy (keV) →'}</text>
    <text x="200" y="60" fill="#0e7c86" font-size="13" font-weight="700">Bremsstrahlung</text>
    <text x="345" y="40" fill="#e67e22" font-size="13" font-weight="700">${lang==='ar'?'قمم مميزة':'Characteristic peaks'}</text>
  </svg>`;
}
function viewPhysics(){
  const steps = t().steps.map(s=>`<li>${glossify(s)}</li>`).join('');
  const rows = t().cmp_rows.map(r=>`<tr><th>${r[0]}</th><td>${glossify(r[1])}</td><td>${glossify(r[2])}</td></tr>`).join('');
  const quiz = QUIZ.map((q,qi)=>`<div class="quiz-q" data-q="${qi}">
      <p class="q">${qi+1}. ${glossify(q.q[lang])}</p>
      ${q.opts.map((o,oi)=>`<button class="quiz-opt" data-o="${oi}">${o[lang]}</button>`).join('')}
      <div class="quiz-fb"></div>
    </div>`).join('');
  return `<div class="page"><div class="wrap">
    <p class="crumb">${t().phys_crumb}</p>
    <h1>${t().phys_title}</h1>
    <p class="intro">${glossify(t().phys_intro)}</p>

    <div class="panel reveal"><h2>${t().tube_title}</h2>${tubeSVG()}</div>

    <div class="panel reveal"><h2>${t().steps_title}</h2><ol class="steps">${steps}</ol></div>

    <div class="panel reveal"><h2>${t().nums_title}</h2><div class="numcards">
      <div class="numcard"><b>~99%</b>${t().num1}</div>
      <div class="numcard"><b>~80%</b>${t().num2}</div>
      <div class="numcard"><b>~1%</b>${t().num3}</div>
    </div></div>

    <div class="panel reveal"><h2>${t().cmp_title}</h2>
      <table class="cmp"><tr><th>${t().cmp_head[0]}</th><th>${t().cmp_head[1]}</th><th>${t().cmp_head[2]}</th></tr>${rows}</table></div>

    <div class="panel reveal"><h2>${t().spectrum_title}</h2>${spectrumSVG()}<p>${glossify(t().spectrum_p)}</p></div>

    <div class="panel reveal"><h2>${t().quiz_title}</h2><div id="quiz">${quiz}</div>
      <p class="quiz-score" id="quiz-score"></p></div>
  </div></div>`;
}
function bindQuiz(){
  const answered = new Set(); let score = 0;
  document.querySelectorAll('.quiz-q').forEach(qEl=>{
    const qi = +qEl.dataset.q, q = QUIZ[qi], fb = qEl.querySelector('.quiz-fb');
    qEl.querySelectorAll('.quiz-opt').forEach(btn=>{
      btn.onclick = () => {
        if(answered.has(qi)) return;
        answered.add(qi);
        const oi = +btn.dataset.o;
        qEl.querySelectorAll('.quiz-opt').forEach(b=>{
          const bo = +b.dataset.o;
          if(bo===q.a) b.classList.add('right'); else if(bo===oi) b.classList.add('wrong');
          b.disabled = true;
        });
        if(oi===q.a) score++;
        fb.textContent = (oi===q.a ? '✓ ' : '✗ ') + q.why[lang];
        fb.classList.add('show');
        if(answered.size===QUIZ.length)
          $('#quiz-score').textContent = `${t().quiz_score} ${score} ${t().quiz_of} ${QUIZ.length}`;
      };
    });
  });
}

/* ---------- ANATOMY ---------- */
let viewerState = { frame: 7, labels: true, test: false, timer: null };
function viewAnatomy(){
  return `<div class="page"><div class="wrap">
    <p class="crumb">${t().ana_crumb}</p>
    <h1>${t().ana_title}</h1>
    <p class="intro">${t().ana_intro}</p>
    <div class="viewer reveal in">
      <div class="v-head"><b>CT Chest — Axial</b>
        <span>${t().level} <span class="level-name" id="v-level"></span></span>
        <span style="margin-inline-start:auto">${t().v_slice} <b id="v-num"></b> / 106</span></div>
      <div class="test-banner" id="v-banner">${t().v_testbanner}</div>
      <div class="frame-box" id="v-box">
        <img class="slice" id="v-img" alt="Axial chest CT slice" draggable="false"/>
        <div id="v-labels"></div>
      </div>
      <input type="range" id="v-slider" min="0" max="${SLICES.length-1}" value="${viewerState.frame}" step="1"/>
      <div class="v-controls">
        <button class="v-btn" id="v-play">${t().v_play}</button>
        <button class="v-btn on" id="v-labels-btn">${t().v_labels}</button>
        <button class="v-btn" id="v-test-btn">${t().v_test}</button>
      </div>
      <p class="v-note">${t().v_note}</p>
    </div>
  </div></div>`;
}
function setFrame(i){
  viewerState.frame = Math.max(0, Math.min(SLICES.length-1, i));
  const n = SLICES[viewerState.frame];
  $('#v-img').src = sliceSrc(n);
  $('#v-num').textContent = n;
  $('#v-level').textContent = levelOf(viewerState.frame)[lang];
  $('#v-slider').value = viewerState.frame;
  const box = $('#v-labels');
  const labs = LABELS[viewerState.frame];
  if(labs && viewerState.labels && !viewerState.test){
    box.innerHTML = labs.map(l=>`<span class="slice-label" style="inset-inline-start:${l.x}%;top:${l.y}%">${l[lang]}</span>`).join('');
  } else box.innerHTML = '';
}
function bindAnatomy(){
  SLICES.forEach(n => { const im = new Image(); im.src = sliceSrc(n); });
  setFrame(viewerState.frame);
  $('#v-slider').oninput = e => setFrame(+e.target.value);
  $('#v-box').addEventListener('wheel', e => { e.preventDefault(); setFrame(viewerState.frame + (e.deltaY>0?1:-1)); }, {passive:false});
  const playBtn = $('#v-play');
  const stop = () => { clearInterval(viewerState.timer); viewerState.timer=null; playBtn.textContent = t().v_play; };
  playBtn.onclick = () => {
    if(viewerState.timer){ stop(); return; }
    playBtn.textContent = t().v_pause;
    viewerState.timer = setInterval(()=> {
      if(viewerState.frame >= SLICES.length-1){ stop(); return; }
      setFrame(viewerState.frame+1);
    }, 450);
  };
  const labBtn = $('#v-labels-btn');
  labBtn.onclick = () => { viewerState.labels = !viewerState.labels; labBtn.classList.toggle('on', viewerState.labels); setFrame(viewerState.frame); };
  const testBtn = $('#v-test-btn');
  testBtn.onclick = () => {
    viewerState.test = !viewerState.test;
    testBtn.classList.toggle('on', viewerState.test);
    $('#v-banner').classList.toggle('show', viewerState.test);
    setFrame(viewerState.frame);
  };
}

/* ---------- DICOM ---------- */
function viewDicom(){
  const cards = VIEWERS.map((v,i)=>`<div class="card reveal" style="transition-delay:${i*60}ms">
    ${v.pick?`<span class="pick">★ ${lang==='ar'?'خيار مميز':'Top pick'}</span>`:''}
    <h3>${v.name}</h3>
    <div>${v.os.map(o=>`<span class="os-badge">${o}</span>`).join('')}</div>
    <p><b>${v[lang].tag}</b></p>
    <ul>${v[lang].points.map(p=>`<li>${p}</li>`).join('')}</ul>
    <a class="go" href="${v.link}" target="_blank" rel="noopener">${t().visit}</a>
  </div>`).join('');
  return `<div class="page"><div class="wrap">
    <p class="crumb">${t().dicom_crumb}</p>
    <h1>${t().dicom_title}</h1>
    <p class="intro">${t().dicom_intro}</p>
    <div class="panel reveal"><p style="margin:0">${t().dicom_what}</p></div>
    <div class="grid">${cards}</div>
  </div></div>`;
}

/* ---------- router ---------- */
function render(){
  renderChrome();
  const route = location.hash || '#/';
  const app = $('#app');
  if(route === '#/physics'){ app.innerHTML = viewPhysics(); bindQuiz(); }
  else if(route === '#/anatomy'){ app.innerHTML = viewAnatomy(); bindAnatomy(); }
  else if(route === '#/dicom'){ app.innerHTML = viewDicom(); }
  else app.innerHTML = viewHome();
  bindGloss(); bindReveal();
  window.scrollTo({top:0});
}
window.addEventListener('hashchange', render);
render();
