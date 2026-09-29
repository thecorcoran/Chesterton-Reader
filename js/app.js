/**
 * G.K. Chesterton Reader — Application Controller & Routing
 */
window.currentWorkId = "orthodoxy";
window.currentView = "main"; // "main" (landing/catalog) or "reader"
let currentCatalogFilter = "all";
let currentCatalogQuery = "";

// Typography & Sizing
const FONT_SIZES = [
  { label: "Small", size: "1.0rem" },
  { label: "Normal", size: "1.15rem" },
  { label: "Large", size: "1.3rem" },
  { label: "Extra Large", size: "1.45rem" }
];
let currentFontSizeIndex = 1;

function initFontSize() {
  try {
    const saved = localStorage.getItem("chesterton_reader_fontsize");
    if (saved !== null) {
      const idx = parseInt(saved, 10);
      if (!isNaN(idx) && idx >= 0 && idx < FONT_SIZES.length) {
        currentFontSizeIndex = idx;
      }
    }
  } catch (e) {}
  applyFontSize();
}

function adjustFontSize(delta) {
  const newIdx = currentFontSizeIndex + delta;
  if (newIdx < 0 || newIdx >= FONT_SIZES.length) return;
  currentFontSizeIndex = newIdx;
  try {
    localStorage.setItem("chesterton_reader_fontsize", currentFontSizeIndex);
  } catch (e) {}
  applyFontSize();
  showToast(`Font Size: ${FONT_SIZES[currentFontSizeIndex].label}`);
}

function applyFontSize() {
  const sizeObj = FONT_SIZES[currentFontSizeIndex];
  if (sizeObj && document.documentElement) {
    document.documentElement.style.setProperty("--reader-font-size", sizeObj.size);
  }
}

// Themes (Paper, Sepia, Dark, Midnight)
function initTheme() {
  let theme = "light";
  try {
    const saved = localStorage.getItem("chesterton_reader_theme");
    if (saved && ["light", "sepia", "dark", "midnight"].includes(saved)) {
      theme = saved;
    }
  } catch (e) {}
  setTheme(theme, false);
}

function setTheme(theme, announce = true) {
  if (document.documentElement) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  try {
    localStorage.setItem("chesterton_reader_theme", theme);
  } catch (e) {}
  const select = document.getElementById("theme-select");
  if (select && select.value !== theme) select.value = theme;
  if (announce) {
    const labels = { light: "📜 Paper Theme", sepia: "🕯️ Sepia Theme", dark: "🌙 Dark Theme", midnight: "🌌 Midnight Theme" };
    showToast(labels[theme] || "Theme Updated");
  }
}

// Toast Notifications
function showToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 200);
  }, 2500);
}

// View Controllers
function showMainPage() {
  window.currentView = "main";
  const mainContainer = document.getElementById("main-page-container");
  const readerContainer = document.getElementById("reader-container");
  const sectionNav = document.getElementById("section-nav");
  const metaBar = document.getElementById("meta-bar");
  const backBtn = document.getElementById("btn-back-home");

  if (mainContainer) mainContainer.style.display = "block";
  if (readerContainer) readerContainer.style.display = "none";
  if (sectionNav) sectionNav.style.display = "none";
  if (metaBar) metaBar.style.display = "none";
  if (backBtn) backBtn.style.display = "none";

  renderCatalogGrid();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showReaderPage() {
  window.currentView = "reader";
  const mainContainer = document.getElementById("main-page-container");
  const readerContainer = document.getElementById("reader-container");
  const metaBar = document.getElementById("meta-bar");
  const backBtn = document.getElementById("btn-back-home");

  if (mainContainer) mainContainer.style.display = "none";
  if (readerContainer) readerContainer.style.display = "block";
  if (metaBar) metaBar.style.display = "block";
  if (backBtn) backBtn.style.display = "inline-flex";
}

// Work Navigation
function switchWork(workId) {
  loadWork(workId, "all");
}

function loadWork(workId, targetSectionId = "all", targetParaId = null) {
  window.currentWorkId = workId;
  showReaderPage();

  const work = window.CHEST_WORKS ? window.CHEST_WORKS[workId] : null;
  const meta = window.CORPUS_DATA ? window.CORPUS_DATA[workId] : null;

  // Update Work Select dropdown
  const select = document.getElementById("work-select");
  if (select && select.value !== workId) select.value = workId;

  // Update Meta Bar
  updateWorkMetaBar(meta || work);

  if (work) {
    window.renderBlocks(work, targetSectionId);
    window.renderSectionNav(work, targetSectionId);

    if (targetParaId) {
      setTimeout(() => {
        const el = document.getElementById(targetParaId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.boxShadow = "0 0 0 3px var(--accent)";
          setTimeout(() => el.style.boxShadow = "", 2000);
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}

function updateWorkMetaBar(meta) {
  if (!meta) return;
  const details = document.getElementById("work-details");
  const companion = document.getElementById("companion-indicator");

  if (details) {
    details.innerHTML = `<strong>${meta.titleEn}</strong> (${meta.year}) • <em>${meta.category}</em>`;
  }

  if (companion) {
    if (meta.companionSlug && meta.companionTitle) {
      companion.innerHTML = `
        <span class="companion-badge" onclick="window.loadWork('${meta.companionSlug}')">
          🔗 Companion: ${meta.companionTitle}
        </span>
      `;
    } else {
      companion.innerHTML = "";
    }
  }
}

// Catalog Rendering
function renderCatalogGrid() {
  const grid = document.getElementById("corpus-catalog-grid");
  if (!grid || !window.CORPUS_DATA) return;

  const entries = Object.values(window.CORPUS_DATA);
  const filter = currentCatalogFilter;
  const query = normalizeQuery(currentCatalogQuery);

  const filtered = entries.filter(w => {
    if (filter !== "all" && w.category !== filter) return false;
    if (query) {
      const matchTitle = normalizeQuery(w.titleEn).includes(query);
      const matchDesc = normalizeQuery(w.description || "").includes(query);
      if (!matchTitle && !matchDesc) return false;
    }
    return true;
  });

  let html = "";
  filtered.forEach(work => {
    const secCount = work.sections ? work.sections.length : 0;
    html += `
      <div class="work-card">
        <div class="work-card-header">
          <span class="work-year">${work.year}</span>
          <span style="font-size:0.75rem; font-weight:600; color:var(--accent-secondary);">✓ Public Domain</span>
        </div>
        <h3 class="work-card-title">${work.titleEn}</h3>
        ${work.subtitle ? `<div class="work-card-subtitle">${work.subtitle}</div>` : ''}
        <p class="work-card-desc">${work.description || ''}</p>
        <div class="work-card-meta">
          <span>📂 ${work.category}</span>
          <span>📑 ${secCount} Sections</span>
        </div>
        <div class="work-card-actions">
          <button class="btn active" onclick="window.loadWork('${work.id}')">
            📖 Read Work
          </button>
          <button class="btn" onclick="window.openCitationForWork('${work.id}')" title="Cite Work">
            🎓 Cite
          </button>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

function setCatalogFilter(cat) {
  currentCatalogFilter = cat;
  document.querySelectorAll(".catalog-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-filter") === cat);
  });
  renderCatalogGrid();
}

function handleCatalogSearch(val) {
  currentCatalogQuery = val;
  renderCatalogGrid();
}

// Populate Work Select Dropdown
function populateWorkSelect() {
  const select = document.getElementById("work-select");
  if (!select || !window.CORPUS_DATA) return;

  const categories = {};
  Object.values(window.CORPUS_DATA).forEach(w => {
    if (!categories[w.category]) categories[w.category] = [];
    categories[w.category].push(w);
  });

  let html = "";
  Object.entries(categories).forEach(([cat, works]) => {
    html += `<optgroup label="${cat}">`;
    works.forEach(w => {
      html += `<option value="${w.id}">${w.titleEn} (${w.year})</option>`;
    });
    html += `</optgroup>`;
  });

  select.innerHTML = html;
  select.value = window.currentWorkId;
}

// Modals: Citation
function openCitationModal() {
  openCitationForWork(window.currentWorkId);
}

function openCitationForWork(workId) {
  const meta = window.CORPUS_DATA ? window.CORPUS_DATA[workId] : null;
  if (!meta) return;

  const modal = document.getElementById("citation-modal-backdrop");
  if (!modal) return;

  document.getElementById("citation-work-title").textContent = meta.titleEn;
  
  // Format citations
  const chicago = `Chesterton, G. K. ${meta.titleEn}. London: ${meta.year}. G.K. Chesterton Digital Corpus.`;
  const mla = `Chesterton, G. K. ${meta.titleEn}. ${meta.year}. G.K. Chesterton Open Digital Corpus.`;
  const apa = `Chesterton, G. K. (${meta.year}). ${meta.titleEn}. London.`;
  const bibtex = `@book{chesterton${meta.year},\n  author = {Chesterton, G. K.},\n  title = {${meta.titleEn}},\n  year = {${meta.year}},\n  note = {G.K. Chesterton Digital Corpus}\n}`;

  document.getElementById("cite-box-chicago").textContent = chicago;
  document.getElementById("cite-box-mla").textContent = mla;
  document.getElementById("cite-box-apa").textContent = apa;
  document.getElementById("cite-box-bibtex").textContent = bibtex;

  modal.classList.add("open");
}

function closeCitationModal() {
  const modal = document.getElementById("citation-modal-backdrop");
  if (modal) modal.classList.remove("open");
}

function copyCitationText(tabId) {
  const box = document.getElementById(`cite-box-${tabId}`);
  if (!box) return;
  navigator.clipboard.writeText(box.textContent).then(() => {
    showToast("Citation copied to clipboard");
  });
}

function selectCitationTab(tab) {
  ["chicago", "mla", "apa", "bibtex"].forEach(t => {
    const btn = document.getElementById(`tab-cite-${t}`);
    const box = document.getElementById(`box-container-${t}`);
    if (btn) btn.classList.toggle("active", t === tab);
    if (box) box.style.display = (t === tab) ? "block" : "none";
  });
}

// Modals: Grand Oeuvre & Archival Catalog
function openArchivalModal() {
  const modal = document.getElementById("archival-modal-backdrop");
  if (!modal || !window.ARCHIVAL_CATALOG) return;

  const container = document.getElementById("archival-table-body");
  if (container) {
    let html = "";
    window.ARCHIVAL_CATALOG.forEach(item => {
      const isCorpus = item.status === "In Digital Corpus";
      const action = isCorpus ? `<button class="btn btn-icon" style="font-size:0.75rem;" onclick="window.closeArchivalModal(); window.loadWork('${item.slug}')">Read →</button>` : `<span style="color:var(--text-muted); font-size:0.75rem;">Archival Record</span>`;
      html += `
        <tr>
          <td><strong>${item.year}</strong></td>
          <td><strong>${item.title}</strong></td>
          <td>${item.type}</td>
          <td>${item.publisher}</td>
          <td>${action}</td>
        </tr>
      `;
    });
    container.innerHTML = html;
  }

  modal.classList.add("open");
}

function closeArchivalModal() {
  const modal = document.getElementById("archival-modal-backdrop");
  if (modal) modal.classList.remove("open");
}

// Side Drawers: Glossary
function toggleGlossary() {
  const drawer = document.getElementById("glossary-drawer");
  if (!drawer) return;
  drawer.classList.toggle("open");
  if (drawer.classList.contains("open")) {
    renderGlossaryList();
  }
}

function renderGlossaryList(filter = "") {
  const container = document.getElementById("glossary-items-container");
  if (!container || !window.GLOSSARY_DATA) return;

  const norm = normalizeQuery(filter);
  const items = Object.values(window.GLOSSARY_DATA).filter(g => {
    if (!norm) return true;
    return normalizeQuery(g.term).includes(norm) || normalizeQuery(g.definition).includes(norm);
  });

  let html = "";
  items.forEach(item => {
    html += `
      <div class="glossary-card">
        <h4 class="glossary-term">${item.term}</h4>
        <div class="glossary-category">${item.category}</div>
        <p class="glossary-def">${item.definition}</p>
        ${item.quote ? `<div class="glossary-quote">"${item.quote}"</div>` : ''}
        ${item.source ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.4rem;">— ${item.source}</div>` : ''}
      </div>
    `;
  });

  container.innerHTML = html;
}

function openGlossaryItem(term) {
  toggleGlossary();
  const input = document.getElementById("glossary-search-input");
  if (input) {
    input.value = term;
    renderGlossaryList(term);
  }
}

// Keyboard Navigation & Shortcuts
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Ctrl+K or Cmd+K: Open search
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearchModal();
    }
    // Esc: Close all modals and drawers
    if (e.key === "Escape") {
      closeSearchModal();
      closeCitationModal();
      closeArchivalModal();
      const gloss = document.getElementById("glossary-drawer");
      if (gloss) gloss.classList.remove("open");
      const note = document.getElementById("notebook-drawer");
      if (note) note.classList.remove("open");
      const popover = document.getElementById("selection-popover");
      if (popover) popover.style.display = "none";
    }
  });
}

// Initialization on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initFontSize();
  initTheme();
  if (typeof window.initNotes === "function") window.initNotes();
  populateWorkSelect();
  initKeyboardShortcuts();

  // Check URL params
  const urlParams = new URLSearchParams(window.location.search);
  const workParam = urlParams.get("work");
  const secParam = urlParams.get("section") || "all";

  if (workParam && window.CORPUS_DATA && window.CORPUS_DATA[workParam]) {
    loadWork(workParam, secParam);
  } else {
    showMainPage();
  }
});

// Export globals
if (typeof window !== "undefined") {
  window.showMainPage = showMainPage;
  window.showReaderPage = showReaderPage;
  window.switchWork = switchWork;
  window.loadWork = loadWork;
  window.adjustFontSize = adjustFontSize;
  window.setTheme = setTheme;
  window.showToast = showToast;
  window.setCatalogFilter = setCatalogFilter;
  window.handleCatalogSearch = handleCatalogSearch;
  window.openCitationModal = openCitationModal;
  window.openCitationForWork = openCitationForWork;
  window.closeCitationModal = closeCitationModal;
  window.selectCitationTab = selectCitationTab;
  window.copyCitationText = copyCitationText;
  window.openArchivalModal = openArchivalModal;
  window.closeArchivalModal = closeArchivalModal;
  window.toggleGlossary = toggleGlossary;
  window.renderGlossaryList = renderGlossaryList;
  window.openGlossaryItem = openGlossaryItem;
}
