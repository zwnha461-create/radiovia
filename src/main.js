import { T, SLICES, sliceSrc, LEVELS, levelOf, LABELS, GLOSSARY, QUIZ, VIEWERS } from './content.js';
import { CHAPTERS, chapterLessons, APPENDIX_LESSONS, findLesson, chapterOf } from './lessons/index.js';
import { BASICS_CHAPTERS, basicsChapterLessons, basicsChapterQuiz, BASICS_VIEWERS, findBasicsLesson, findQuiz, basicsChapterOf } from './basics/index.js';
import { ANATOMY_SETS } from './anatomy-data.js';
import { EXAMS } from './exams.js';

const findAnyLesson = slug => findLesson(slug) || findBasicsLesson(slug);

let lang = localStorage.getItem('radiovia-lang') || 'ar';
const t = () => T[lang];
const $ = s => document.querySelector(s);

const LOGO = `<svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="#0e7c86"/><circle cx="32" cy="32" r="7" fill="#fff"/><g stroke="#fff" stroke-width="5" stroke-linecap="round"><line x1="32" y1="10" x2="32" y2="19"/><line x1="32" y1="45" x2="32" y2="54"/><line x1="10" y1="32" x2="19" y2="32"/><line x1="45" y1="32" x2="54" y2="32"/></g></svg>`;

function renderChrome(){
  document.documentElement.lang = lang;
  document.documentElement.dir = t().dir;
  const route = location.hash || '#/';
  const nav = [
    ['#/', t().nav_home, route==='#/'],
    ['#/basics', t().nav_basics, route.startsWith('#/basics') || route.startsWith('#/quiz') || route.startsWith('#/anatomy')],
    ['#/physics', t().nav_physics, route.startsWith('#/physics') || route.startsWith('#/lesson')],
    ['#/exams', t().nav_exams, route.startsWith('#/exams') || route.startsWith('#/exam/')],
    ['#/dicom', t().nav_dicom, route==='#/dicom'],
  ];
  $('#site-header').innerHTML = `<div class="site"><div class="wrap"><div class="bar">
    <a class="logo" href="#/">${LOGO}<span>Radiovia<small>${lang==='ar'?'راديوفيا — تعليم الأشعة التشخيصية':'Diagnostic radiology education'}</small></span></a>
    <nav class="main">${nav.map(([h,l,a])=>`<a href="${h}" class="${a?'active':''}">${l}</a>`).join('')}</nav>
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
  if(!html) return '';
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
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }), {threshold:.08});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ---------- quiz (generic) ---------- */
function quizHTML(quiz){
  return quiz.map((q,qi)=>`<div class="quiz-q" data-q="${qi}">
      <p class="q">${qi+1}. ${glossify(q.q[lang])}</p>
      ${q.opts.map((o,oi)=>`<button class="quiz-opt" data-o="${oi}">${o[lang]}</button>`).join('')}
      <div class="quiz-fb"></div>
    </div>`).join('');
}
function bindQuiz(quiz){
  const answered = new Set(); let score = 0;
  document.querySelectorAll('.quiz-q').forEach(qEl=>{
    const qi = +qEl.dataset.q, q = quiz[qi]; if(!q) return;
    const fb = qEl.querySelector('.quiz-fb');
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
        if(answered.size===quiz.length){
          const el = $('#quiz-score');
          if(el) el.textContent = `${t().quiz_score} ${score} ${t().quiz_of} ${quiz.length}`;
        }
      };
    });
  });
}

/* ---------- HOME ---------- */
function viewHome(){
  const cards = [
    {ico:'🫁', tt:t().c_basics_t, p:t().c_basics_p, badge:`<span class="badge live">${t().live}</span>`, link:'#/basics'},
    {ico:'⚛️', tt:t().c_physics_t, p:t().c_physics_p, badge:`<span class="badge live">${t().live}</span>`, link:'#/physics'},
    {ico:'🎯', tt:t().c_exams_t, p:t().c_exams_p, badge:`<span class="badge live">${t().live}</span>`, link:'#/exams'},
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

/* ---------- PHYSICS INDEX & CHAPTERS ---------- */
function viewPhysicsIndex(){
  const cards = CHAPTERS.map((c,i)=>{
    const n = chapterLessons(c.key).length;
    return `<div class="card reveal" style="transition-delay:${i*50}ms">
      <div class="ico">${c.icon}</div><h3>${c[lang]}</h3>
      <p>${n} ${t().lessons_word}</p>
      ${n?`<span class="badge live">${t().live}</span>`:`<span class="badge soon">${t().soon}</span>`}
      ${n?`<a class="go" href="#/physics/${c.key}">${t().open}</a>`:''}
    </div>`;
  }).join('');
  const app = APPENDIX_LESSONS.length ? `<div class="card reveal">
      <div class="ico">📎</div><h3>${t().appendix_t}</h3><p>${t().appendix_p}</p>
      <span class="badge live">${t().live}</span><a class="go" href="#/lesson/${APPENDIX_LESSONS[0].slug}">${t().open}</a></div>` : '';
  return `<div class="page"><div class="wrap">
    <p class="crumb">${t().crumb_home} ← ${t().nav_physics}</p>
    <h1>${t().phys_title}</h1>
    <p class="intro">${t().phys_sub}</p>
    <div class="grid">${cards}${app}</div>
  </div></div>`;
}
function viewChapter(key){
  const ch = chapterOf(key); if(!ch) return viewPhysicsIndex();
  const lessons = chapterLessons(key);
  const items = lessons.map((l,i)=>`<a class="lesson-row reveal" href="#/lesson/${l.slug}">
      <span class="lesson-num">${i+1}</span>
      <span class="lesson-name">${l.title[lang]}</span>
      ${l.featured?`<span class="badge live">${t().featured_badge}</span>`:''}
      <span class="lesson-arrow">←</span></a>`).join('');
  return `<div class="page"><div class="wrap">
    <p class="crumb"><a href="#/physics">${t().nav_physics}</a> ← ${ch[lang]}</p>
    <h1>${ch.icon} ${ch[lang]}</h1>
    <p class="intro">${lessons.length} ${t().lessons_word}</p>
    <div class="lesson-list">${items}</div>
  </div></div>`;
}

/* ---------- GENERIC LESSON ---------- */
function sectionHTML(s){
  let h = `<div class="panel reveal"><h2>${glossify(s.h[lang])}</h2>`;
  if(s.nums) h += `<div class="numcards">${s.nums.map(n=>`<div class="numcard"><b>${n.v}</b>${n[lang]}</div>`).join('')}</div>`;
  if(s.paras) h += s.paras.map(p=>`<p>${glossify(p[lang])}</p>`).join('');
  if(s.bullets) h += `<ul>${s.bullets.map(b=>`<li>${glossify(b[lang])}</li>`).join('')}</ul>`;
  if(s.table) h += `<table class="cmp"><tr>${s.table.head.map(x=>`<th>${glossify(x[lang])}</th>`).join('')}</tr>${
    s.table.rows.map(r=>`<tr>${r.map((c,ci)=> ci===0?`<th>${glossify(c[lang])}</th>`:`<td>${glossify(c[lang])}</td>`).join('')}</tr>`).join('')}</table>`;
  return h + `</div>`;
}
function viewLesson(slug){
  const phys = findLesson(slug);
  const lesson = phys || findBasicsLesson(slug);
  if(!lesson) return viewPhysicsIndex();
  if(lesson.featured) return viewProduction();
  let ch, siblings, crumb;
  if(phys){
    ch = chapterOf(lesson.chapter);
    siblings = lesson.chapter === 'appendix' ? APPENDIX_LESSONS : chapterLessons(lesson.chapter);
    crumb = `<a href="#/physics">${t().nav_physics}</a>${ch?` ← <a href="#/physics/${ch.key}">${ch[lang]}</a>`:''} ← ${lesson.title[lang]}`;
  } else {
    ch = basicsChapterOf(lesson.chapter);
    siblings = basicsChapterLessons(lesson.chapter);
    crumb = `<a href="#/basics">${t().nav_basics}</a>${ch?` ← <a href="#/basics/${ch.key}">${ch[lang]}</a>`:''} ← ${lesson.title[lang]}`;
  }
  const idx = siblings.findIndex(l=>l.slug===slug);
  const prev = idx>0 ? siblings[idx-1] : null;
  const next = idx>=0 && idx<siblings.length-1 ? siblings[idx+1] : null;
  return `<div class="page"><div class="wrap">
    <p class="crumb">${crumb}</p>
    <h1>${lesson.title[lang]}</h1>
    <p class="intro">${glossify(lesson.intro[lang])}</p>
    ${lesson.sections.map(sectionHTML).join('')}
    ${lesson.quiz?.length?`<div class="panel reveal"><h2>${t().end_quiz}</h2><div id="quiz">${quizHTML(lesson.quiz)}</div><p class="quiz-score" id="quiz-score"></p></div>`:''}
    <div class="lesson-nav">
      ${prev?`<a class="v-nav-btn" href="#/lesson/${prev.slug}">${t().prev_lesson}<br><small>${prev.title[lang]}</small></a>`:'<span></span>'}
      ${next?`<a class="v-nav-btn" href="#/lesson/${next.slug}">${t().next_lesson}<br><small>${next.title[lang]}</small></a>`:'<span></span>'}
    </div>
  </div></div>`;
}

/* ---------- FEATURED LESSON: Production of X-rays ---------- */
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
function viewProduction(){
  const steps = t().steps.map(s=>`<li>${glossify(s)}</li>`).join('');
  const rows = t().cmp_rows.map(r=>`<tr><th>${r[0]}</th><td>${glossify(r[1])}</td><td>${glossify(r[2])}</td></tr>`).join('');
  return `<div class="page"><div class="wrap">
    <p class="crumb"><a href="#/physics">${t().nav_physics}</a> ← <a href="#/physics/xray">${lang==='ar'?'تصوير الأشعة السينية':'X-ray Imaging'}</a> ← ${t().phys_title.includes('Production')?'':''}${lang==='ar'?'إنتاج الأشعة السينية':'Production of X-rays'}</p>
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

    <div class="panel reveal"><h2>${t().quiz_title}</h2><div id="quiz">${quizHTML(QUIZ)}</div>
      <p class="quiz-score" id="quiz-score"></p></div>
  </div></div>`;
}

/* ---------- ANATOMY VIEWERS ---------- */
let viewerState = { set:'chest', frame: 7, labels: true, test: false, timer: null };
const CHEST_SET = { slices: SLICES, src: sliceSrc, levelOf, labels: LABELS, total:'106', head:'CT Chest — Axial',
  title:()=>t().ana_title, intro:()=>t().ana_intro, crumb:()=>t().ana_crumb, note:()=>t().v_note };
function activeSet(){
  if(viewerState.set === 'chest') return CHEST_SET;
  const s = ANATOMY_SETS[viewerState.set];
  if(!s) return null;
  return { ...s, title:()=>s.title[lang], intro:()=>s.intro[lang], crumb:()=>s.crumb[lang], note:()=>s.note[lang] };
}
function viewAnatomy(setKey = 'chest'){
  if(setKey !== viewerState.set){ viewerState.set = setKey; viewerState.frame = setKey==='chest' ? 7 : 0; }
  const S = activeSet();
  if(!S || !S.slices?.length){
    const v = Object.values(BASICS_VIEWERS).find(x => x.link === '#/anatomy-' + setKey);
    return `<div class="page"><div class="wrap">
      <p class="crumb"><a href="#/basics">${t().nav_basics}</a></p>
      <h1>${v ? v.title[lang] : ''}</h1>
      <p class="intro"><span class="badge soon">${t().soon}</span></p>
    </div></div>`;
  }
  return `<div class="page"><div class="wrap">
    <p class="crumb">${S.crumb()}</p>
    <h1>${S.title()}</h1>
    <p class="intro">${S.intro()}</p>
    <div class="viewer reveal in">
      <div class="v-head"><b>${S.head}</b>
        <span>${t().level} <span class="level-name" id="v-level"></span></span>
        <span style="margin-inline-start:auto">${t().v_slice} <b id="v-num"></b> / ${S.total}</span></div>
      <div class="test-banner" id="v-banner">${t().v_testbanner}</div>
      <div class="frame-box" id="v-box">
        <img class="slice" id="v-img" alt="Axial CT slice" draggable="false"/>
        <div id="v-labels"></div>
      </div>
      <input type="range" id="v-slider" min="0" max="${S.slices.length-1}" value="${viewerState.frame}" step="1"/>
      <div class="v-controls">
        <button class="v-btn" id="v-play">${t().v_play}</button>
        <button class="v-btn on" id="v-labels-btn">${t().v_labels}</button>
        <button class="v-btn" id="v-test-btn">${t().v_test}</button>
      </div>
      <p class="v-note">${S.note()}</p>
    </div>
  </div></div>`;
}
function setFrame(i){
  const S = activeSet(); if(!S) return;
  viewerState.frame = Math.max(0, Math.min(S.slices.length-1, i));
  const n = S.slices[viewerState.frame];
  $('#v-img').src = S.src(n);
  $('#v-num').textContent = n;
  $('#v-level').textContent = S.levelOf(viewerState.frame)[lang];
  $('#v-slider').value = viewerState.frame;
  const box = $('#v-labels');
  const labs = S.labels[viewerState.frame];
  if(labs && viewerState.labels && !viewerState.test){
    box.innerHTML = labs.map(l=>`<span class="slice-label" style="left:${l.x}%;top:${l.y}%">${l[lang]}</span>`).join('');
  } else box.innerHTML = '';
}
function bindAnatomy(){
  const S = activeSet(); if(!S) return;
  S.slices.forEach(n => { const im = new Image(); im.src = S.src(n); });
  setFrame(viewerState.frame);
  $('#v-slider').oninput = e => setFrame(+e.target.value);
  $('#v-box').addEventListener('wheel', e => { e.preventDefault(); setFrame(viewerState.frame + (e.deltaY>0?1:-1)); }, {passive:false});
  const playBtn = $('#v-play');
  const stop = () => { clearInterval(viewerState.timer); viewerState.timer=null; playBtn.textContent = t().v_play; };
  playBtn.onclick = () => {
    if(viewerState.timer){ stop(); return; }
    playBtn.textContent = t().v_pause;
    viewerState.timer = setInterval(()=> {
      if(viewerState.frame >= S.slices.length-1){ stop(); return; }
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

/* ---------- BASICS INDEX, CHAPTERS & QUIZZES ---------- */
function viewBasicsIndex(){
  const cards = BASICS_CHAPTERS.map((c,i)=>{
    const n = basicsChapterLessons(c.key).length + (BASICS_VIEWERS[c.key] ? 1 : 0) + (basicsChapterQuiz(c.key) ? 1 : 0);
    return `<div class="card reveal" style="transition-delay:${i*50}ms">
      <div class="ico">${c.icon}</div><h3>${c[lang]}</h3>
      <p>${basicsChapterLessons(c.key).length} ${t().lessons_word}${BASICS_VIEWERS[c.key] ? ` + ${t().img_anatomy}` : ''}${basicsChapterQuiz(c.key) ? ` + ${t().section_quiz}` : ''}</p>
      ${n?`<span class="badge live">${t().live}</span>`:`<span class="badge soon">${t().soon}</span>`}
      ${n?`<a class="go" href="#/basics/${c.key}">${t().open}</a>`:''}
    </div>`;
  }).join('');
  return `<div class="page"><div class="wrap">
    <p class="crumb">${t().crumb_home} ← ${t().nav_basics}</p>
    <h1>${t().basics_title}</h1>
    <p class="intro">${t().basics_sub}</p>
    <div class="grid">${cards}</div>
  </div></div>`;
}
function viewBasicsChapter(key){
  const ch = basicsChapterOf(key); if(!ch) return viewBasicsIndex();
  const lessons = basicsChapterLessons(key);
  const viewer = BASICS_VIEWERS[key];
  const quiz = basicsChapterQuiz(key);
  let n = 0;
  const rows = [];
  if(viewer){
    n++;
    rows.push(`<a class="lesson-row reveal" href="${viewer.link}">
      <span class="lesson-num">${n}</span>
      <span class="lesson-name">${viewer.title[lang]}</span>
      <span class="badge live">${t().img_anatomy}</span>
      <span class="lesson-arrow">←</span></a>`);
  }
  lessons.forEach(l=>{
    n++;
    rows.push(`<a class="lesson-row reveal" href="#/lesson/${l.slug}">
      <span class="lesson-num">${n}</span>
      <span class="lesson-name">${l.title[lang]}</span>
      <span class="lesson-arrow">←</span></a>`);
  });
  if(quiz){
    n++;
    rows.push(`<a class="lesson-row reveal" href="#/quiz/${quiz.slug}">
      <span class="lesson-num">${n}</span>
      <span class="lesson-name">${quiz.title[lang]}</span>
      <span class="badge live">${t().section_quiz} — ${quiz.questions.length} ${t().questions_word}</span>
      <span class="lesson-arrow">←</span></a>`);
  }
  return `<div class="page"><div class="wrap">
    <p class="crumb"><a href="#/basics">${t().nav_basics}</a> ← ${ch[lang]}</p>
    <h1>${ch.icon} ${ch[lang]}</h1>
    <p class="intro">${rows.length} ${t().lessons_word}</p>
    <div class="lesson-list">${rows.join('')}</div>
  </div></div>`;
}
function viewQuizPage(slug){
  const quiz = findQuiz(slug);
  if(!quiz) return viewBasicsIndex();
  const ch = basicsChapterOf(quiz.chapter);
  return `<div class="page"><div class="wrap">
    <p class="crumb"><a href="#/basics">${t().nav_basics}</a>${ch?` ← <a href="#/basics/${ch.key}">${ch[lang]}</a>`:''} ← ${quiz.title[lang]}</p>
    <h1>${quiz.title[lang]}</h1>
    <p class="intro">${glossify(quiz.intro[lang])}</p>
    <div class="panel reveal"><div id="quiz">${quizHTML(quiz.questions)}</div><p class="quiz-score" id="quiz-score"></p></div>
  </div></div>`;
}

/* ---------- MOCK ANATOMY EXAMS ---------- */
function examSrc(q){
  if(q.set === 'chest') return sliceSrc(SLICES[q.frame]);
  const S = ANATOMY_SETS[q.set];
  return S.src(S.slices[q.frame]);
}
function viewExamsIndex(){
  const cards = EXAMS.map((e,i)=>{
    const best = localStorage.getItem('radiovia_best_' + e.id);
    return `<div class="card reveal" style="transition-delay:${i*50}ms">
      <div class="ico">🎯</div><h3>${e.title[lang]}</h3>
      <p>${e.desc[lang]}</p>
      <p>${e.questions.length} ${t().questions_word}${best ? ` — ${t().exam_best}: ${best}%` : ''}</p>
      <span class="badge live">${t().live}</span>
      <a class="go" href="#/exam/${e.id}">${t().exam_start}</a>
    </div>`;
  }).join('');
  return `<div class="page"><div class="wrap">
    <p class="crumb">${t().crumb_home} ← ${t().nav_exams}</p>
    <h1>${t().exams_title}</h1>
    <p class="intro">${t().exams_sub}</p>
    <div class="grid">${cards}</div>
    <div class="panel reveal"><h3>${t().exams_how_t}</h3><p>${t().exams_how}</p></div>
  </div></div>`;
}
let examState = null;
function viewExam(id){
  const exam = EXAMS.find(e => e.id === id);
  if(!exam) return viewExamsIndex();
  return `<div class="page"><div class="wrap">
    <p class="crumb"><a href="#/exams">${t().nav_exams}</a> ← ${exam.title[lang]}</p>
    <h1>${exam.title[lang]}</h1>
    <div id="exam-root"></div>
  </div></div>`;
}
function fmtTime(s){ return Math.floor(s/60) + ':' + String(s%60).padStart(2,'0'); }
function bindExam(id){
  const exam = EXAMS.find(e => e.id === id);
  if(!exam) return;
  exam.questions.forEach(q => { const im = new Image(); im.src = examSrc(q); });
  examState = { exam, idx: 0, picked: [], start: Date.now(), locked: false, timer: null };
  const root = $('#exam-root');
  const drawTimer = () => {
    const elx = $('#exam-clock');
    if(elx) elx.textContent = fmtTime(Math.floor((Date.now() - examState.start)/1000));
  };
  examState.timer = setInterval(drawTimer, 1000);
  function renderQ(){
    const st = examState, q = st.exam.questions[st.idx], n = st.exam.questions.length;
    st.locked = false;
    root.innerHTML = `
      <div class="exam-meta"><span>${t().exam_q} ${st.idx+1} ${t().exam_of} ${n}</span><span>⏱ <span id="exam-clock">${fmtTime(Math.floor((Date.now()-st.start)/1000))}</span></span></div>
      <div class="progress"><span style="width:${(st.idx)/n*100}%"></span></div>
      <div class="exam-box">
        <img class="slice" src="${examSrc(q)}" alt="CT slice" draggable="false"/>
        <span class="exam-marker" style="left:${q.x}%;top:${q.y}%"></span>
      </div>
      <div class="opt-grid">${q.opts.map((o,i)=>`<button class="opt-btn" data-i="${i}">${o[lang]}</button>`).join('')}</div>
      <div class="exam-nav"></div>`;
    root.querySelectorAll('.opt-btn').forEach(btn => btn.onclick = () => {
      if(st.locked) return;
      st.locked = true;
      const pick = +btn.dataset.i;
      st.picked[st.idx] = pick;
      root.querySelectorAll('.opt-btn').forEach(b => {
        const i = +b.dataset.i;
        if(i === q.a) b.classList.add('correct');
        else if(i === pick) b.classList.add('wrong');
        b.disabled = true;
      });
      const last = st.idx === n - 1;
      root.querySelector('.exam-nav').innerHTML =
        `<button class="v-btn on" id="exam-next">${last ? t().exam_result_btn : t().exam_next}</button>`;
      $('#exam-next').onclick = () => { if(last) renderResult(); else { st.idx++; renderQ(); } };
    });
  }
  function renderResult(){
    const st = examState;
    clearInterval(st.timer);
    const n = st.exam.questions.length;
    const correct = st.exam.questions.reduce((s,q,i) => s + (st.picked[i] === q.a ? 1 : 0), 0);
    const pct = Math.round(correct / n * 100);
    const secs = Math.floor((Date.now() - st.start)/1000);
    const prev = +(localStorage.getItem('radiovia_best_' + st.exam.id) || 0);
    if(pct > prev) localStorage.setItem('radiovia_best_' + st.exam.id, pct);
    const rows = st.exam.questions.map((q,i) => {
      const ok = st.picked[i] === q.a;
      return `<div class="review-row ${ok ? 'ok' : 'bad'}">
        <span class="review-num">${i+1}</span>
        <span class="review-name">${q.opts[q.a][lang]}</span>
        <span class="review-pick">${ok ? '✓' : `${t().exam_you}: ${q.opts[st.picked[i]][lang]}`}</span>
      </div>`;
    }).join('');
    root.innerHTML = `
      <div class="panel result-panel">
        <h2>${t().exam_result_t}</h2>
        <div class="big-score">${pct}%</div>
        <p>${t().exam_score}: ${correct} / ${n} — ${t().exam_time}: ${fmtTime(secs)}${prev ? ` — ${t().exam_best}: ${Math.max(prev, pct)}%` : ''}</p>
        <div class="exam-nav">
          <button class="v-btn on" id="exam-retake">${t().exam_retake}</button>
          <a class="v-btn" href="#/exams">${t().exam_back}</a>
        </div>
      </div>
      <h3 class="review-title">${t().exam_review_t}</h3>
      <div class="review-list">${rows}</div>`;
    $('#exam-retake').onclick = () => bindExam(st.exam.id);
    window.scrollTo({top: 0});
  }
  renderQ();
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
  stopViewerTimer();
  if(route === '#/physics') app.innerHTML = viewPhysicsIndex();
  else if(route.startsWith('#/physics/')) app.innerHTML = viewChapter(route.split('/')[2]);
  else if(route === '#/basics') app.innerHTML = viewBasicsIndex();
  else if(route.startsWith('#/basics/')) app.innerHTML = viewBasicsChapter(route.split('/')[2]);
  else if(route.startsWith('#/quiz/')){
    const slug = route.split('/')[2];
    app.innerHTML = viewQuizPage(slug);
    const quiz = findQuiz(slug);
    if(quiz) bindQuiz(quiz.questions);
  }
  else if(route.startsWith('#/lesson/')){
    const slug = route.split('/')[2];
    app.innerHTML = viewLesson(slug);
    const lesson = findAnyLesson(slug);
    if(lesson?.featured) bindQuiz(QUIZ);
    else if(lesson?.quiz) bindQuiz(lesson.quiz);
  }
  else if(route === '#/anatomy'){ app.innerHTML = viewAnatomy('chest'); bindAnatomy(); }
  else if(route === '#/anatomy-abdomen'){ app.innerHTML = viewAnatomy('abdomen'); bindAnatomy(); }
  else if(route === '#/anatomy-head'){ app.innerHTML = viewAnatomy('head'); bindAnatomy(); }
  else if(route === '#/exams') app.innerHTML = viewExamsIndex();
  else if(route.startsWith('#/exam/')){
    const id = route.split('/')[2];
    app.innerHTML = viewExam(id);
    bindExam(id);
  }
  else if(route === '#/dicom'){ app.innerHTML = viewDicom(); }
  else app.innerHTML = viewHome();
  bindGloss(); bindReveal();
  window.scrollTo({top:0});
}
function stopViewerTimer(){ if(viewerState.timer){ clearInterval(viewerState.timer); viewerState.timer = null; } }
window.addEventListener('hashchange', render);
render();
