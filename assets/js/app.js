/* =========================================================
   Sayt mantigʻi: sarlavha/futer, qidiruv, progress, testlar,
   va har bir sahifaning interaktiv qismlari.
   Mazmun data.js da — bu faylni odatda oʻzgartirish shart emas.
   ========================================================= */
(function () {
  "use strict";
  const D = window.SITE_DATA;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const slug = (s) => String(s).toLowerCase().replace(/[ʻʼ'’`]/g, "").replace(/[^a-z0-9а-яё]+/gi, "-").replace(/^-|-$/g, "");
  const modById = (id) => D.modules.find((m) => m.id === id);
  const MONTHS = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];

  /* ---------- Saqlash (brauzer xotirasi) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem("jixim-" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("jixim-" + k, JSON.stringify(v)); } catch (e) {} }
  };
  const progress = {
    all() { return store.get("progress", {}); },
    done(mid) { return this.all()[mid] || []; },
    toggle(mid, i) {
      const p = this.all(); const set = new Set(p[mid] || []);
      set.has(i) ? set.delete(i) : set.add(i);
      p[mid] = [...set]; store.set("progress", p);
    },
    pct(m) { return m.topics.length ? Math.round((this.done(m.id).length / m.topics.length) * 100) : 0; }
  };
  const scores = {
    get(id) { return store.get("scores", {})[id]; },
    save(id, pct) { const s = store.get("scores", {}); if (s[id] == null || pct > s[id]) s[id] = pct; store.set("scores", s); }
  };

  /* ---------- Mavzu (yorugʻ/qorongʻi) ---------- */
  const savedTheme = store.get("theme", null);
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  function toggleTheme() {
    const cur = document.documentElement.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next; store.set("theme", next);
  }

  /* ---------- Ikonkalar ---------- */
  const I = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    chev: '<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5v.01"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5"/></svg>',
    calc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5"/></svg>'
  };

  /* ---------- Sarlavha va futer ---------- */
  const NAV = [
    { href: "index.html", label: "Bosh sahifa", page: "home" },
    { href: "index.html#modullar", label: "Modullar", page: "module" },
    { href: "testlar.html", label: "Testlar", page: "tests" },
    { href: "lugat.html", label: "Lugʻat", page: "glossary" },
    { href: "vositalar.html", label: "Vositalar", page: "tools" }
  ];
  function renderChrome() {
    const page = document.body.dataset.page;
    const h = $("#site-header");
    if (h) {
      h.className = "site-header";
      h.innerHTML = `
      <nav class="container nav" aria-label="Asosiy menyu">
        <a class="brand" href="index.html">
          <span class="brand-mark">JI</span>
          <span class="brand-text"><strong>${esc(D.site.short)} kafedrasi</strong><span>${esc(D.site.tagline)}</span></span>
        </a>
        <ul class="nav-links" id="nav-links">
          ${NAV.map((n) => `<li><a href="${n.href}" class="${n.page === page ? "active" : ""}">${n.label}</a></li>`).join("")}
        </ul>
        <div class="nav-tools">
          <button class="icon-btn search-btn" id="open-search" aria-label="Qidirish">${I.search}<span class="search-label">Qidirish</span><span class="kbd">/</span></button>
          <button class="icon-btn" id="theme-btn" aria-label="Rang rejimini almashtirish">${I.moon}</button>
          <button class="icon-btn menu-btn" id="menu-btn" aria-label="Menyu" aria-expanded="false">${I.menu}</button>
        </div>
      </nav>`;
      $("#theme-btn").onclick = toggleTheme;
      $("#open-search").onclick = openSearch;
      $("#menu-btn").onclick = (e) => {
        const open = $("#nav-links").classList.toggle("open");
        e.currentTarget.setAttribute("aria-expanded", open);
      };
    }
    const f = $("#site-footer");
    if (f) {
      f.className = "site-footer";
      const contacts = [
        D.site.telegram && `<a href="${esc(D.site.telegram)}" target="_blank" rel="noopener">Telegram</a>`,
        D.site.email && `<a href="mailto:${esc(D.site.email)}">${esc(D.site.email)}</a>`
      ].filter(Boolean).join("");
      f.innerHTML = `
      <div class="container foot">
        <div>
          <strong style="color:var(--ink)">${esc(D.site.name)}</strong><br>
          ${D.site.university ? esc(D.site.university) + " · " : ""}${esc(D.site.tagline)}
        </div>
        <div>${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")}${contacts}</div>
      </div>`;
    }
    buildSearchModal();
  }

  /* ---------- Global qidiruv (/ yoki Ctrl+K) ---------- */
  let searchIndex = null;
  function buildIndex() {
    const idx = [];
    D.modules.forEach((m) => {
      idx.push({ type: "Modul", title: m.title, sub: `${m.kurs}-kurs · ${m.desc}`, href: `modul.html?id=${m.id}` });
      m.topics.forEach((t, i) => idx.push({ type: "Mavzu", title: t.t, sub: m.title, href: `modul.html?id=${m.id}#mavzular-${i + 1}` }));
    });
    D.glossary.forEach((g) => idx.push({ type: "Atama", title: g.t, sub: g.en + " — " + g.d, href: `lugat.html#${slug(g.t)}` }));
    idx.push({ type: "Sahifa", title: "Testlar markazi", sub: "Barcha modullar boʻyicha testlar", href: "testlar.html" });
    idx.push({ type: "Sahifa", title: "Vositalar", sub: "Qiyosiy ustunlik, bojxona va savdo balansi kalkulyatorlari", href: "vositalar.html" });
    return idx;
  }
  function buildSearchModal() {
    const bg = document.createElement("div");
    bg.className = "modal-bg"; bg.id = "search-modal";
    bg.innerHTML = `<div class="modal" role="dialog" aria-label="Qidiruv">
      <input class="search-input" id="global-q" placeholder="Modul, mavzu yoki atamani qidiring…" autocomplete="off">
      <div class="results" id="global-results"></div></div>`;
    document.body.appendChild(bg);
    bg.addEventListener("click", (e) => { if (e.target === bg) closeSearch(); });
    const q = $("#global-q"); let sel = 0;
    const draw = () => {
      searchIndex = searchIndex || buildIndex();
      const term = q.value.trim().toLowerCase();
      const list = term ? searchIndex.filter((r) => (r.title + " " + r.sub).toLowerCase().includes(term)).slice(0, 12)
                        : searchIndex.filter((r) => r.type === "Modul" || r.type === "Sahifa");
      sel = Math.min(sel, Math.max(list.length - 1, 0));
      $("#global-results").innerHTML = list.length ? list.map((r, i) =>
        `<a class="result ${i === sel ? "sel" : ""}" href="${r.href}"><span class="tag ${r.type === "Atama" ? "tag-accent" : "tag-brand"}">${r.type}</span>
         <span style="min-width:0"><b>${esc(r.title)}</b><small style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(r.sub)}</small></span></a>`).join("")
        : `<div class="results-empty">Hech narsa topilmadi</div>`;
    };
    q.addEventListener("input", () => { sel = 0; draw(); });
    q.addEventListener("keydown", (e) => {
      const items = $$("#global-results .result");
      if (e.key === "ArrowDown") { sel = Math.min(sel + 1, items.length - 1); draw(); e.preventDefault(); }
      if (e.key === "ArrowUp") { sel = Math.max(sel - 1, 0); draw(); e.preventDefault(); }
      if (e.key === "Enter" && items[sel]) { items[sel].click(); closeSearch(); }
    });
    $("#global-results").addEventListener("click", (e) => { if (e.target.closest("a")) closeSearch(); });
    document.addEventListener("keydown", (e) => {
      const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
      if ((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); openSearch(); }
      if (e.key === "Escape") closeSearch();
    });
    bg._draw = draw;
  }
  function openSearch() { const m = $("#search-modal"); m.classList.add("open"); m._draw(); setTimeout(() => $("#global-q").focus(), 10); }
  function closeSearch() { const m = $("#search-modal"); if (m) { m.classList.remove("open"); $("#global-q").value = ""; } }

  /* ---------- Test komponenti ---------- */
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function runQuiz(box, questions, opts = {}) {
    const qs = questions.map((q) => {
      const order = shuffle(q.o.map((_, i) => i));
      return { ...q, o: order.map((i) => q.o[i]), a: order.indexOf(q.a) };
    });
    let i = 0, right = 0;
    const L = "ABCD";
    const show = () => {
      const q = qs[i];
      box.innerHTML = `<div class="quiz">
        <div class="quiz-top"><span>${opts.label ? esc(opts.label) + " · " : ""}Savol ${i + 1} / ${qs.length}</span><span>Toʻgʻri: ${right}</span></div>
        <div class="progress"><i style="width:${(i / qs.length) * 100}%"></i></div>
        ${q.mod ? `<div class="muted" style="margin-top:14px;font-size:.82rem">${esc(q.mod)}</div>` : ""}
        <p class="quiz-q">${esc(q.q)}</p>
        <div>${q.o.map((o, k) => `<button class="opt" data-k="${k}"><span class="opt-letter">${L[k]}</span><span>${esc(o)}</span></button>`).join("")}</div>
        <div id="quiz-after"></div></div>`;
      $$(".opt", box).forEach((b) => b.onclick = () => {
        const k = +b.dataset.k, ok = k === q.a;
        if (ok) right++;
        $$(".opt", box).forEach((x) => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add("correct"); });
        if (!ok) b.classList.add("wrong");
        $(".quiz-top span:last-child", box).textContent = "Toʻgʻri: " + right;
        $("#quiz-after", box).innerHTML = `<div class="explain"><b>${ok ? "✓ Toʻgʻri." : "✗ Notoʻgʻri."}</b> ${esc(q.e || "")}</div>
          <button class="btn btn-primary" id="quiz-next">${i + 1 < qs.length ? "Keyingi savol →" : "Natijani koʻrish"}</button>`;
        $("#quiz-next", box).onclick = () => { i++; i < qs.length ? show() : finish(); };
        $("#quiz-next", box).focus();
      });
    };
    const finish = () => {
      const pct = Math.round((right / qs.length) * 100);
      if (opts.id) scores.save(opts.id, pct);
      const msg = pct >= 86 ? "Aʼlo!" : pct >= 71 ? "Yaxshi natija" : pct >= 55 ? "Qoniqarli — mavzularni takrorlang" : "Mavzularni qayta oʻrganishni tavsiya qilamiz";
      box.innerHTML = `<div class="quiz card quiz-result">
        <p class="big" style="color:${pct >= 55 ? "var(--ok)" : "var(--bad)"}">${pct}%</p>
        <p><b>${msg}</b><br><span class="muted">${qs.length} ta savoldan ${right} tasiga toʻgʻri javob berdingiz.</span></p>
        <div class="hero-actions" style="justify-content:center"><button class="btn btn-primary" id="quiz-retry">Qayta ishlash</button>
        ${opts.onBack ? '<button class="btn btn-ghost" id="quiz-back">Ortga</button>' : ""}</div></div>`;
      $("#quiz-retry", box).onclick = () => runQuiz(box, questions, opts);
      if (opts.onBack) $("#quiz-back", box).onclick = opts.onBack;
      if (opts.onFinish) opts.onFinish(pct);
    };
    show();
  }

  /* ---------- Kichik yordamchilar ---------- */
  const modCode = (m, cls = "mod-code") => `<span class="${cls}" style="background:${m.color}">${esc(m.code)}</span>`;
  const progressRow = (pct) => `<div class="progress-row"><div class="progress"><i style="width:${pct}%"></i></div><span>${pct}%</span></div>`;
  function fmtDate(s) { const d = new Date(s + "T00:00:00"); return { day: d.getDate(), mon: MONTHS[d.getMonth()] }; }

  /* =========================================================
     SAHIFALAR
     ========================================================= */
  const pages = {};

  /* ---------- Bosh sahifa ---------- */
  pages.home = function () {
    const topicsCount = D.modules.reduce((s, m) => s + m.topics.length, 0);
    $("#stat-mod").textContent = D.modules.length;
    $("#stat-top").textContent = topicsCount;
    $("#stat-term").textContent = D.glossary.length;

    let filter = "all";
    const grid = $("#module-grid");
    const kurslar = [...new Set(D.modules.map((m) => m.kurs))].sort();
    $("#kurs-filter").innerHTML = `<button class="chip active" data-k="all">Barchasi</button>` +
      kurslar.map((k) => `<button class="chip" data-k="${k}">${k}-kurs</button>`).join("");
    const draw = () => {
      const list = D.modules.filter((m) => filter === "all" || String(m.kurs) === filter);
      grid.innerHTML = list.map((m) => `
        <a class="card mod-card" href="modul.html?id=${m.id}">
          <div class="mod-head">${modCode(m)}<div><h3>${esc(m.title)}</h3>
            <div class="mod-meta">${m.kurs}-kurs · ${m.semestr}-semestr · ${m.kredit} kredit</div></div></div>
          <p>${esc(m.desc)}</p>
          ${progressRow(progress.pct(m))}
        </a>`).join("");
    };
    $("#kurs-filter").addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      filter = b.dataset.k; $$("#kurs-filter .chip").forEach((c) => c.classList.toggle("active", c === b)); draw();
    });
    draw();

    // Davom ettirish
    const last = modById(store.get("last", ""));
    const cont = $("#continue");
    if (last) {
      const done = progress.done(last.id);
      const next = last.topics.findIndex((_, i) => !done.includes(i));
      cont.innerHTML = `<div class="eyebrow">Davom ettiring</div>
        <div class="mod-head" style="margin-bottom:12px">${modCode(last)}<div><h3 style="margin:0">${esc(last.title)}</h3>
        <div class="mod-meta">${done.length} / ${last.topics.length} mavzu oʻzlashtirildi</div></div></div>
        ${progressRow(progress.pct(last))}
        <p class="muted" style="margin:14px 0">${next >= 0 ? "Keyingi mavzu: <b style='color:var(--ink)'>" + esc(last.topics[next].t) + "</b>" : "Barcha mavzular tugallandi — endi testni sinab koʻring."}</p>
        <a class="btn btn-primary" href="modul.html?id=${last.id}${next >= 0 ? "#mavzular-" + (next + 1) : "#test"}">Davom etish →</a>`;
    } else {
      cont.innerHTML = `<div class="eyebrow">Qayerdan boshlash kerak?</div>
        <h3>Oʻz kursingizni tanlang</h3>
        <p class="muted">Modulni oching, mavzularni oʻqib “Oʻzlashtirdim” deb belgilang — progressingiz shu brauzerda saqlanadi va bu yerda koʻrinadi.</p>
        <a class="btn btn-primary" href="#modullar">Modullarni koʻrish</a>`;
    }

    // Sanalar
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const ev = D.events.filter((e) => new Date(e.date + "T00:00:00") >= today).slice(0, 4);
    $("#events").innerHTML = `<div class="eyebrow">Muhim sanalar</div>` + (ev.length ? ev.map((e) => {
      const d = fmtDate(e.date);
      const days = Math.round((new Date(e.date + "T00:00:00") - today) / 864e5);
      return `<div class="event"><div class="event-date"><b>${d.day}</b><small>${d.mon}</small></div>
        <div><h4>${esc(e.title)}</h4><p>${esc(e.note)} · <b>${days === 0 ? "bugun" : days + " kun qoldi"}</b></p></div></div>`;
    }).join("") : `<p class="muted">Yaqin kunlarda tadbirlar yoʻq.</p>`);
  };

  /* ---------- Modul sahifasi ---------- */
  pages.module = function () {
    const id = new URLSearchParams(location.search).get("id");
    const m = modById(id) || D.modules[0];
    store.set("last", m.id);
    document.title = m.title + " — " + D.site.short + " kafedrasi";

    // Yon menyu
    $("#sidebar").innerHTML = `<h4>Modullar</h4><div class="side-list">` +
      D.modules.map((x) => `<a class="side-link ${x.id === m.id ? "active" : ""}" href="modul.html?id=${x.id}">${modCode(x, "side-dot")}<span>${esc(x.title)}</span></a>`).join("") +
      `</div><select class="side-select" aria-label="Modulni tanlash">` +
      D.modules.map((x) => `<option value="${x.id}" ${x.id === m.id ? "selected" : ""}>${esc(x.title)}</option>`).join("") + `</select>`;
    $(".side-select").onchange = (e) => { location.href = "modul.html?id=" + e.target.value; };

    $("#mod-top").innerHTML = `
      <div class="crumbs"><a href="index.html">Bosh sahifa</a> / <a href="index.html#modullar">Modullar</a> / ${esc(m.title)}</div>
      <div class="mod-hero">${modCode(m)}<div><h1 style="margin:0">${esc(m.title)}</h1>
        <div class="meta-row"><span class="tag tag-brand">${m.kurs}-kurs</span><span class="tag">${m.semestr}-semestr</span><span class="tag">${m.kredit} kredit</span><span class="tag">${m.topics.length} mavzu</span></div></div></div>`;

    const TABS = [
      { id: "umumiy", label: "Umumiy" },
      { id: "mavzular", label: "Mavzular", count: m.topics.length },
      { id: "seminarlar", label: "Seminarlar", count: m.seminars.length },
      { id: "test", label: "Test", count: m.quiz.length },
      { id: "resurslar", label: "Resurslar", count: m.resources.length }
    ];
    $("#tabs").innerHTML = TABS.map((t) => `<button class="tab" role="tab" data-tab="${t.id}">${t.label}${t.count ? `<span class="count">${t.count}</span>` : ""}</button>`).join("");

    const panel = $("#panel");
    const render = {
      umumiy() {
        const pct = progress.pct(m), sc = scores.get(m.id), C = 2 * Math.PI * 52;
        panel.innerHTML = `<div class="overview-grid">
          <div>
            <div class="card" style="margin-bottom:18px"><h3>Modul haqida</h3><p class="muted" style="margin:0">${esc(m.desc)}</p></div>
            <div class="card"><h3>Oʻquv natijalari</h3><p class="muted">Modulni tugatgach siz quyidagilarni bajara olasiz:</p>
              <ul class="list-check">${m.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul></div>
          </div>
          <div class="card" style="text-align:center">
            <svg class="ring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="var(--surface-2)" stroke-width="10"/>
              <circle cx="60" cy="60" r="52" fill="none" stroke="var(--ok)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(C * pct) / 100} ${C}" transform="rotate(-90 60 60)"/>
              <text x="60" y="66" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)">${pct}%</text></svg>
            <div class="muted" style="font-size:.88rem">${progress.done(m.id).length} / ${m.topics.length} mavzu</div>
            <hr style="border:0;border-top:1px solid var(--line);margin:16px 0">
            <div class="muted" style="font-size:.85rem">Eng yaxshi test natijasi</div>
            <div style="font-family:var(--font-head);font-size:1.6rem">${sc != null ? sc + "%" : "—"}</div>
            <button class="btn btn-primary" style="margin-top:12px;width:100%;justify-content:center" data-go="mavzular">Oʻqishni boshlash</button>
          </div></div>`;
        $("[data-go]", panel).onclick = () => go("mavzular");
      },
      mavzular(open) {
        const done = progress.done(m.id);
        panel.innerHTML = m.topics.map((t, i) => `
          <div class="topic ${done.includes(i) ? "done" : ""} ${open === i ? "open" : ""}" id="mavzu-${i + 1}">
            <button class="topic-head" aria-expanded="${open === i}"><span class="topic-num">${done.includes(i) ? "✓" : i + 1}</span><span class="topic-title">${esc(t.t)}</span>${I.chev}</button>
            <div class="topic-body">
              <p>${esc(t.d)}</p>
              ${t.k && t.k.length ? `<div class="kw">${t.k.map((k) => `<a class="tag tag-accent" href="lugat.html#${slug(k)}">${esc(k)}</a>`).join("")}</div>` : ""}
              <p class="muted" style="font-size:.85rem;font-style:italic">Maʼruza matni, slaydlar va video shu yerga qoʻshiladi.</p>
              <label class="check"><input type="checkbox" data-i="${i}" ${done.includes(i) ? "checked" : ""}> Oʻzlashtirdim</label>
            </div></div>`).join("");
        $$(".topic-head", panel).forEach((h) => h.onclick = () => {
          const t = h.parentElement; t.classList.toggle("open"); h.setAttribute("aria-expanded", t.classList.contains("open"));
        });
        $$(".check input", panel).forEach((c) => c.onchange = () => {
          const i = +c.dataset.i; progress.toggle(m.id, i);
          const t = c.closest(".topic"); t.classList.toggle("done", c.checked);
          $(".topic-num", t).textContent = c.checked ? "✓" : i + 1;
        });
        if (open != null) setTimeout(() => $("#mavzu-" + (open + 1)).scrollIntoView({ block: "center" }), 50);
      },
      seminarlar() {
        panel.innerHTML = `<div class="card"><h3>Seminar va amaliy topshiriqlar</h3>
          ${m.seminars.map((s, i) => `<div class="event"><div class="event-date" style="background:var(--brand-soft);color:var(--brand)"><b>${i + 1}</b><small>topshiriq</small></div><div><h4 style="font-weight:500">${esc(s)}</h4></div></div>`).join("")}</div>`;
      },
      test() {
        const sc = scores.get(m.id);
        panel.innerHTML = `<div class="card quiz"><h3>Oʻz-oʻzini tekshirish testi</h3>
          <p class="muted">${m.quiz.length} ta savol, javoblar aralashtiriladi. Har bir javobdan keyin izoh koʻrsatiladi.${sc != null ? " Eng yaxshi natijangiz: <b>" + sc + "%</b>." : ""}</p>
          <button class="btn btn-primary" id="start-quiz">Testni boshlash</button></div>`;
        $("#start-quiz").onclick = () => runQuiz(panel, m.quiz, { id: m.id, label: m.title });
      },
      resurslar() {
        panel.innerHTML = `<div class="card">${m.resources.map((r) => `
          <a class="res" href="${esc(r.url)}" target="_blank" rel="noopener"><span class="tag tag-brand">${esc(r.type)}</span>
          <span><span class="res-title">${esc(r.t)}</span><br><small>${esc(r.url.replace(/^https?:\/\//, "").replace(/\/$/, ""))} ↗</small></span></a>`).join("")}</div>`;
      }
    };
    function go(tab, sub) {
      if (!render[tab]) tab = "umumiy";
      $$(".tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === tab));
      render[tab](sub);
      const h = "#" + tab + (sub != null ? "-" + (sub + 1) : "");
      if (location.hash !== h) history.replaceState(null, "", h);
    }
    $("#tabs").addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (b) go(b.dataset.tab); });
    const fromHash = () => {
      const [tab, n] = location.hash.slice(1).split("-");
      go(tab || "umumiy", n ? +n - 1 : undefined);
    };
    window.addEventListener("hashchange", fromHash);
    fromHash();
  };

  /* ---------- Testlar markazi ---------- */
  pages.tests = function () {
    const box = $("#tests-box");
    const hub = () => {
      const total = D.modules.reduce((s, m) => s + m.quiz.length, 0);
      box.innerHTML = `
        <div class="card" style="margin-bottom:18px;display:flex;gap:18px;align-items:center;flex-wrap:wrap;justify-content:space-between">
          <div><div class="eyebrow">Aralash test</div><h3 style="margin:0">Barcha modullardan 10 ta tasodifiy savol</h3>
          <p class="muted" style="margin:4px 0 0">Bazada jami ${total} ta savol. Imtihon oldidan umumiy takrorlash uchun.</p></div>
          <button class="btn btn-primary" id="mix">Boshlash</button></div>
        <div class="grid grid-3">${D.modules.map((m) => {
          const sc = scores.get(m.id);
          return `<div class="card mod-card" style="cursor:default"><div class="mod-head">${modCode(m)}<div><h3>${esc(m.title)}</h3>
            <div class="mod-meta">${m.quiz.length} savol · ${m.kurs}-kurs</div></div></div>
            <div class="progress-row"><span>Eng yaxshi natija:</span><b style="color:var(--ink)">${sc != null ? sc + "%" : "—"}</b></div>
            <button class="btn btn-ghost" data-id="${m.id}">Testni boshlash</button></div>`;
        }).join("")}</div>`;
      $("#mix").onclick = () => {
        const all = D.modules.flatMap((m) => m.quiz.map((q) => ({ ...q, mod: m.title })));
        start(shuffle(all).slice(0, 10), { id: "aralash", label: "Aralash test" });
      };
      $$("[data-id]", box).forEach((b) => b.onclick = () => { const m = modById(b.dataset.id); start(m.quiz, { id: m.id, label: m.title }); });
    };
    const start = (qs, o) => { runQuiz(box, qs, { ...o, onBack: hub }); window.scrollTo({ top: 0, behavior: "smooth" }); };
    hub();
  };

  /* ---------- Lugʻat ---------- */
  pages.glossary = function () {
    const terms = D.glossary.slice().sort((a, b) => a.t.localeCompare(b.t, "uz"));
    let q = "", letter = "", mod = "", mode = "list";
    const firstLetter = (t) => t.t[0].toUpperCase();
    const letters = [...new Set(terms.map(firstLetter))];
    $("#g-mod").innerHTML = `<option value="">Barcha modullar</option>` + D.modules.map((m) => `<option value="${m.id}">${esc(m.title)}</option>`).join("");

    const filtered = () => terms.filter((t) =>
      (!q || (t.t + " " + t.en + " " + t.d).toLowerCase().includes(q)) &&
      (!letter || firstLetter(t) === letter) && (!mod || t.m === mod));

    const drawLetters = () => {
      $("#letters").innerHTML = `<button class="${!letter ? "active" : ""}" data-l="" style="width:auto;padding:0 10px">Hammasi</button>` +
        letters.map((l) => `<button data-l="${l}" class="${letter === l ? "active" : ""}">${l}</button>`).join("");
    };
    const drawList = () => {
      const list = filtered();
      $("#g-count").textContent = list.length + " ta atama";
      $("#g-out").innerHTML = list.length ? `<div class="grid grid-2">${list.map((t) => {
        const m = modById(t.m);
        return `<div class="card term" id="${slug(t.t)}"><h3>${esc(t.t)} <small>${esc(t.en)}</small></h3><p>${esc(t.d)}</p>
          ${m ? `<a class="tag tag-brand" style="text-decoration:none" href="modul.html?id=${m.id}">${esc(m.title)}</a>` : ""}</div>`;
      }).join("")}</div>` : `<div class="empty">Hech narsa topilmadi. Boshqa soʻz bilan qidirib koʻring.</div>`;
    };
    let fi = 0, deck = [];
    const drawFlash = () => {
      if (!deck.length) { $("#g-out").innerHTML = `<div class="empty">Kartochkalar uchun atama yoʻq.</div>`; return; }
      const t = deck[fi];
      $("#g-count").textContent = `Kartochka ${fi + 1} / ${deck.length}`;
      $("#g-out").innerHTML = `<div class="flashcard" id="fc" tabindex="0" role="button" aria-label="Kartochkani aylantirish">
        <div class="flash-inner"><div class="flash-face"><div class="eyebrow">Atama</div><h3>${esc(t.t)}</h3><span class="muted">${esc(t.en)}</span><small class="muted" style="margin-top:18px">Taʼrifni koʻrish uchun bosing</small></div>
        <div class="flash-face back"><div class="eyebrow">Taʼrif</div><p style="font-size:1.05rem">${esc(t.d)}</p></div></div></div>
        <div class="flash-controls"><button class="btn btn-ghost" id="fc-prev">← Oldingi</button><button class="btn btn-ghost" id="fc-shuf">Aralashtirish</button><button class="btn btn-primary" id="fc-next">Keyingi →</button></div>`;
      const fc = $("#fc"); fc.onclick = () => fc.classList.toggle("flipped");
      fc.onkeydown = (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); fc.classList.toggle("flipped"); } };
      $("#fc-prev").onclick = () => { fi = (fi - 1 + deck.length) % deck.length; drawFlash(); };
      $("#fc-next").onclick = () => { fi = (fi + 1) % deck.length; drawFlash(); };
      $("#fc-shuf").onclick = () => { deck = shuffle(deck); fi = 0; drawFlash(); };
    };
    const draw = () => { drawLetters(); if (mode === "list") drawList(); else { deck = filtered(); fi = 0; drawFlash(); } };

    $("#g-q").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); draw(); });
    $("#g-mod").addEventListener("change", (e) => { mod = e.target.value; draw(); });
    $("#letters").addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; letter = b.dataset.l; draw(); });
    $("#g-mode").addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      mode = b.dataset.mode; $$("#g-mode .chip").forEach((c) => c.classList.toggle("active", c === b)); draw();
    });
    draw();
    const jump = () => {
      const t = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (t) { t.scrollIntoView({ block: "center" }); t.classList.remove("flash"); void t.offsetWidth; t.classList.add("flash"); }
    };
    window.addEventListener("hashchange", jump);
    setTimeout(jump, 60);
  };

  /* ---------- Vositalar (kalkulyatorlar) ---------- */
  pages.tools = function () {
    const n = (id) => parseFloat($(id).value) || 0;
    const fmt = (x, d = 2) => (isFinite(x) ? x.toLocaleString("uz-UZ", { maximumFractionDigits: d }) : "—");

    // 1. Qiyosiy ustunlik
    const ca = () => {
      const a1 = n("#ca-a1"), a2 = n("#ca-a2"), b1 = n("#ca-b1"), b2 = n("#ca-b2");
      const g1 = $("#ca-g1").value || "1-tovar", g2 = $("#ca-g2").value || "2-tovar";
      const ocA = a1 / a2, ocB = b1 / b2; // 1-tovarning muqobil xarajati (2-tovar birligida)
      let v;
      if (!a1 || !a2 || !b1 || !b2) v = "Barcha maydonlarni toʻldiring.";
      else if (Math.abs(ocA - ocB) < 1e-9) v = "Muqobil xarajatlar teng — savdodan yutuq yoʻq.";
      else {
        const aGood = ocA < ocB ? g1 : g2, bGood = ocA < ocB ? g2 : g1;
        v = `A mamlakat <b>${esc(aGood)}</b>, B mamlakat <b>${esc(bGood)}</b> ishlab chiqarishga ixtisoslashishi kerak. Savdo nisbati: 1 ${esc(g1)} = ${fmt(Math.min(ocA, ocB))}…${fmt(Math.max(ocA, ocB))} ${esc(g2)}.`;
      }
      const absA = a1 < b1 && a2 < b2 ? "A mamlakat ikkala tovar boʻyicha mutlaq ustunlikka ega." :
                   b1 < a1 && b2 < a2 ? "B mamlakat ikkala tovar boʻyicha mutlaq ustunlikka ega." : "Mutlaq ustunliklar taqsimlangan.";
      $("#ca-out").innerHTML = `
        <div class="out-row"><span>A: 1 ${esc(g1)} muqobil xarajati</span><b>${fmt(ocA)} ${esc(g2)}</b></div>
        <div class="out-row"><span>B: 1 ${esc(g1)} muqobil xarajati</span><b>${fmt(ocB)} ${esc(g2)}</b></div>
        <div class="out-row"><span>A: 1 ${esc(g2)} muqobil xarajati</span><b>${fmt(1 / ocA)} ${esc(g1)}</b></div>
        <div class="out-row"><span>B: 1 ${esc(g2)} muqobil xarajati</span><b>${fmt(1 / ocB)} ${esc(g1)}</b></div>
        <div class="muted" style="font-size:.85rem;margin-top:6px">${absA}</div>
        <div class="verdict">${v}</div>`;
      $$(".g1-name").forEach((e) => e.textContent = g1); $$(".g2-name").forEach((e) => e.textContent = g2);
    };
    $$("#tool-ca input").forEach((i) => i.addEventListener("input", ca)); ca();

    // 2. Bojxona toʻlovlari
    const cu = () => {
      const val = n("#cu-val"), duty = n("#cu-duty"), exc = n("#cu-exc"), vat = n("#cu-vat"), fee = n("#cu-fee");
      const d = val * duty / 100, e = val * exc / 100, v = (val + d + e) * vat / 100, tot = d + e + v + fee;
      const parts = [["Boj", d, "var(--brand)"], ["Aksiz", e, "var(--accent)"], ["QQS", v, "var(--ok)"], ["Yigʻim", fee, "var(--muted)"]];
      $("#cu-out").innerHTML = parts.map(([l, x]) => `<div class="out-row"><span>${l}</span><b>${fmt(x)}</b></div>`).join("") +
        `<div class="out-row out-total"><span>Jami bojxona toʻlovlari</span><b>${fmt(tot)}</b></div>
         <div class="out-row"><span>Tovarning chegaradagi umumiy qiymati</span><b>${fmt(val + tot)}</b></div>
         <div class="bar-viz">${tot > 0 ? parts.filter((p) => p[1] > 0).map(([l, x, c]) => `<span style="flex:${x};background:${c}">${Math.round((x / tot) * 100)}%</span>`).join("") : ""}</div>
         <div class="muted" style="font-size:.8rem">Toʻlovlar tarkibi · Yuklama: ${val ? fmt((tot / val) * 100, 1) : 0}% bojxona qiymatidan</div>`;
    };
    $$("#tool-cu input").forEach((i) => i.addEventListener("input", cu)); cu();

    // 3. Savdo balansi va ochiqlik
    const tb = () => {
      const x = n("#tb-x"), m = n("#tb-m"), gdp = n("#tb-gdp");
      const bal = x - m, turn = x + m, open = gdp ? (turn / gdp) * 100 : NaN, cov = m ? (x / m) * 100 : NaN;
      $("#tb-out").innerHTML = `
        <div class="out-row"><span>Savdo balansi (X − M)</span><b style="color:${bal >= 0 ? "var(--ok)" : "var(--bad)"}">${bal >= 0 ? "+" : ""}${fmt(bal)} (${bal >= 0 ? "profitsit" : "defitsit"})</b></div>
        <div class="out-row"><span>Tashqi savdo aylanmasi (X + M)</span><b>${fmt(turn)}</b></div>
        <div class="out-row"><span>Eksportning importni qoplashi</span><b>${fmt(cov, 1)}%</b></div>
        <div class="out-row"><span>Iqtisodiyot ochiqligi ((X+M)/YaIM)</span><b>${fmt(open, 1)}%</b></div>
        <div class="out-row"><span>Eksport kvotasi (X/YaIM)</span><b>${gdp ? fmt((x / gdp) * 100, 1) : "—"}%</b></div>
        <div class="bar-viz"><span style="flex:${x || 0.0001};background:var(--ok)">Eksport</span><span style="flex:${m || 0.0001};background:var(--bad)">Import</span></div>`;
    };
    $$("#tool-tb input").forEach((i) => i.addEventListener("input", tb)); tb();

    // 4. Valyuta: kross-kurs va oʻzgarish
    const fx = () => {
      const a = n("#fx-a"), b = n("#fx-b"), old = n("#fx-old"), now = n("#fx-new");
      const cross = a && b ? a * b : NaN; // EUR/UZS = EUR/USD × USD/UZS
      const ch = old ? ((now - old) / old) * 100 : NaN;
      $("#fx-out").innerHTML = `
        <div class="out-row"><span>Kross-kurs: 1 EUR =</span><b>${fmt(cross, 2)} soʻm</b></div>
        <div class="out-row"><span>Kurs oʻzgarishi</span><b>${isFinite(ch) ? (ch > 0 ? "+" : "") + fmt(ch, 2) + "%" : "—"}</b></div>
        <div class="muted" style="font-size:.85rem;margin-top:6px">${!isFinite(ch) || ch === 0 ? "" : ch > 0 ? "1 USD uchun koʻproq soʻm toʻlanmoqda → soʻm <b>qadrsizlangan</b> (depresiatsiya)." : "1 USD uchun kamroq soʻm toʻlanmoqda → soʻm <b>mustahkamlangan</b> (appresiatsiya)."}</div>`;
    };
    $$("#tool-fx input").forEach((i) => i.addEventListener("input", fx)); fx();
  };

  /* ---------- Ishga tushirish ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderChrome();
    const p = pages[document.body.dataset.page];
    if (p) p();
  });
})();
