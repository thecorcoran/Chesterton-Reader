/**
 * G.K. Chesterton Reader — Full-Text Corpus Search Engine
 */
let currentSearchCategory = "all";
let searchDebounceTimer = null;

function normalizeQuery(str) {
  if (!str) return "";
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function escapeSearchHtml(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function openSearchModal() {
  const modal = document.getElementById("search-modal-backdrop");
  if (!modal) return;
  modal.classList.add("open");
  const input = document.getElementById("global-search-input");
  if (input) {
    input.focus();
    input.select();
  }
  executeGlobalSearch();
}

function closeSearchModal() {
  const modal = document.getElementById("search-modal-backdrop");
  if (modal) modal.classList.remove("open");
}

function handleSearchBackdropClick(e) {
  if (e.target.id === "search-modal-backdrop") closeSearchModal();
}

function setSearchCategoryFilter(cat) {
  currentSearchCategory = cat;
  ["all", "apologetics", "mysteries", "novels", "distributism", "essays", "poetry"].forEach(c => {
    const btn = document.getElementById(`search-cat-${c}`);
    if (btn) btn.classList.toggle("active", c === cat);
  });
  executeGlobalSearch();
}

function handleSearchInput() {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    executeGlobalSearch();
  }, 120);
}

function executeGlobalSearch() {
  const input = document.getElementById("global-search-input");
  const query = (input ? input.value : "").trim();
  const resultsContainer = document.getElementById("search-results-list");
  if (!resultsContainer) return;

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = `
      <div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        Type at least 2 characters to search across Chesterton's complete works, chapters, Father Brown mysteries, and philosophical glossary.
      </div>
    `;
    return;
  }

  const normQuery = normalizeQuery(query);
  const regex = new RegExp(`(${query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
  const results = [];

  // 1. Search in Glossary
  if (window.GLOSSARY_DATA) {
    Object.values(window.GLOSSARY_DATA).forEach(item => {
      const termMatch = normalizeQuery(item.term).includes(normQuery);
      const defMatch = normalizeQuery(item.definition).includes(normQuery);
      const quoteMatch = normalizeQuery(item.quote || "").includes(normQuery);
      
      if (termMatch || defMatch || quoteMatch) {
        results.push({
          type: "glossary",
          title: `Glossary: ${item.term}`,
          subtitle: item.category,
          snippet: item.definition.replace(regex, '<mark>$1</mark>'),
          action: `window.openGlossaryItem('${item.term}')`
        });
      }
    });
  }

  // 2. Search in Loaded Works
  if (window.CHEST_WORKS && window.CORPUS_DATA) {
    Object.entries(window.CHEST_WORKS).forEach(([workId, work]) => {
      const meta = window.CORPUS_DATA[workId] || work;
      
      (work.paragraphs || []).forEach(para => {
        if (normalizeQuery(para.text).includes(normQuery)) {
          // Find section title
          const sec = (work.sections || []).find(s => s.id === para.sectionId);
          const secTitle = sec ? sec.titleEn : "General Section";

          // Snippet generation with highlight
          const idx = para.text.toLowerCase().indexOf(query.toLowerCase());
          const start = Math.max(0, idx - 60);
          const end = Math.min(para.text.length, idx + query.length + 60);
          let snippet = (start > 0 ? "..." : "") + para.text.substring(start, end) + (end < para.text.length ? "..." : "");
          snippet = escapeSearchHtml(snippet).replace(regex, '<mark>$1</mark>');

          results.push({
            type: "work",
            workId: work.id,
            sectionId: para.sectionId,
            paraId: para.id,
            title: `${meta.titleEn}`,
            subtitle: `${secTitle} • § ${para.id}`,
            snippet: snippet,
            action: `window.navigateToSearchResult('${work.id}', '${para.sectionId}', '${para.id}')`
          });
        }
      });
    });
  }

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.95rem;">
        No results found for "<strong>${escapeSearchHtml(query)}</strong>". Try searching for <em>Father Brown</em>, <em>Orthodoxy</em>, <em>Distributism</em>, <em>Elfland</em>, or <em>Maniac</em>.
      </div>
    `;
    return;
  }

  let html = "";
  results.slice(0, 30).forEach(res => {
    html += `
      <div class="search-result-item" onclick="${res.action}">
        <div class="search-result-header">
          <span>${escapeSearchHtml(res.title)}</span>
          <span style="color:var(--text-muted); font-weight:normal;">${escapeSearchHtml(res.subtitle)}</span>
        </div>
        <div class="search-result-snippet">
          ${res.snippet}
        </div>
      </div>
    `;
  });

  resultsContainer.innerHTML = html;
}

function navigateToSearchResult(workId, sectionId, paraId) {
  closeSearchModal();
  if (typeof window.loadWork === "function") {
    window.loadWork(workId, sectionId, paraId);
  }
}

if (typeof window !== "undefined") {
  window.openSearchModal = openSearchModal;
  window.closeSearchModal = closeSearchModal;
  window.handleSearchBackdropClick = handleSearchBackdropClick;
  window.handleSearchInput = handleSearchInput;
  window.setSearchCategoryFilter = setSearchCategoryFilter;
  window.navigateToSearchResult = navigateToSearchResult;
}
