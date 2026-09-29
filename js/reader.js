/**
 * G.K. Chesterton Reader — Text Rendering & Reading Engine
 */
let currentReadingMode = "study"; // Options: "study" (annotated sidecar), "book" (continuous single-column), "focus"
let currentActiveWork = null;
let currentSectionId = "all";

function escapeHtmlSafe(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function applyHighlightToHtml(html, searchText, hlId, noteText, hlColor = "yellow") {
  if (!searchText) return html;
  const safeText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const termRegex = new RegExp(safeText, 'i');
  
  const parts = html.split(/(<[^>]+>)/g);
  let replaced = false;
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i].startsWith('<') && !replaced) {
      if (termRegex.test(parts[i])) {
        const noteBadge = noteText ? `<span class="note-indicator" title="${escapeHtmlSafe(noteText)}" onclick="window.openNoteEdit('${hlId}')">📝</span>` : '';
        parts[i] = parts[i].replace(termRegex, `<mark class="user-hl hl-${hlColor}" data-hl-id="${hlId}" onclick="window.handleHighlightClick('${hlId}', event)">$&${noteBadge}</mark>`);
        replaced = true;
      }
    }
  }
  return parts.join('');
}

function setReadingMode(mode) {
  currentReadingMode = mode;
  document.body.classList.toggle("mode-focus", mode === "focus");
  
  ["study", "book", "focus"].forEach(m => {
    const btn = document.getElementById(`btn-mode-${m}`);
    if (btn) btn.classList.toggle("active", m === mode);
  });
  
  if (currentActiveWork) {
    renderBlocks(currentActiveWork, currentSectionId);
  }
  showToast(`Reading Mode: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
}

function selectSection(sectionId) {
  currentSectionId = sectionId;
  if (currentActiveWork) {
    renderBlocks(currentActiveWork, sectionId);
    renderSectionNav(currentActiveWork, sectionId);
    const container = document.getElementById("reader-blocks");
    if (container) container.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderSectionNav(work, targetSectionId) {
  const sectionNav = document.getElementById("section-nav");
  const pillsContainer = document.getElementById("section-pills");
  const progressContainer = document.getElementById("section-progress");

  if (!sectionNav || !pillsContainer) return;

  if (!work.sections || work.sections.length <= 1) {
    sectionNav.style.display = "none";
    return;
  }

  sectionNav.style.display = "flex";
  if (targetSectionId !== null && targetSectionId !== undefined && targetSectionId !== "auto") {
    currentSectionId = targetSectionId;
  } else if (!currentSectionId || currentSectionId === "auto") {
    currentSectionId = "all";
  }

  const allActive = currentSectionId === "all" ? "active" : "";
  let pillsHtml = `
    <button class="section-pill ${allActive}" onclick="window.selectSection('all')">
      All Sections (${work.paragraphs ? work.paragraphs.length : 0})
    </button>
  `;

  work.sections.forEach(sec => {
    const isActive = currentSectionId === sec.id ? "active" : "";
    const secCount = work.paragraphs ? work.paragraphs.filter(p => p.sectionId === sec.id).length : 0;
    pillsHtml += `
      <button class="section-pill ${isActive}" onclick="window.selectSection('${sec.id}')">
        ${escapeHtmlSafe(sec.titleEn)} (${secCount})
      </button>
    `;
  });

  pillsContainer.innerHTML = pillsHtml;

  if (progressContainer && work.paragraphs) {
    const displayedCount = (currentSectionId === "all")
      ? work.paragraphs.length
      : work.paragraphs.filter(p => p.sectionId === currentSectionId).length;
    
    progressContainer.innerHTML = `
      <span>Showing <strong>${displayedCount}</strong> of <strong>${work.paragraphs.length}</strong> paragraphs</span>
      <span style="color:var(--accent-secondary); font-weight:600;">✓ Verified Public Domain Edition</span>
    `;
  }
}

function renderBlocks(work, targetSectionId = "all") {
  const container = document.getElementById("reader-blocks");
  if (!container) return;

  currentActiveWork = work;
  currentSectionId = targetSectionId;

  if (!work.paragraphs || work.paragraphs.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem; color:var(--text-muted);">
        <h3>No paragraphs found for this work.</h3>
      </div>
    `;
    return;
  }

  const filteredParas = (targetSectionId === "all")
    ? work.paragraphs
    : work.paragraphs.filter(p => p.sectionId === targetSectionId);

  // Get highlights for this work
  const userHighlights = (typeof window.getUserHighlights === "function") 
    ? window.getUserHighlights(work.id) 
    : [];

  let html = "";
  const isStudy = currentReadingMode === "study";

  filteredParas.forEach((para, idx) => {
    let paraText = escapeHtmlSafe(para.text);
    
    // Apply user highlights
    userHighlights.filter(h => h.paraId === para.id).forEach(h => {
      paraText = applyHighlightToHtml(paraText, h.quote, h.id, h.note, h.color);
    });

    // Find section title
    const secObj = (work.sections || []).find(s => s.id === para.sectionId);
    const secTitle = secObj ? secObj.titleEn : "";

    html += `
      <div class="reader-block" id="${para.id}" data-para-id="${para.id}">
        <div class="block-content-area">
          <div class="block-meta">
            <span class="block-id-pill">§ ${para.id}</span>
            <span>${escapeHtmlSafe(secTitle)}</span>
          </div>
          <div class="block-body" onmouseup="window.handleTextSelection('${para.id}', event)">
            ${paraText}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

if (typeof window !== "undefined") {
  window.setReadingMode = setReadingMode;
  window.selectSection = selectSection;
  window.renderBlocks = renderBlocks;
  window.renderSectionNav = renderSectionNav;
}
