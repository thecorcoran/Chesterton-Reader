/**
 * G.K. Chesterton Reader — Personal Notebook, Highlights, and Annotation Engine
 */
let userNotes = [];
let pendingSelection = null;

function initNotes() {
  try {
    const saved = localStorage.getItem("chesterton_reader_notes");
    if (saved) {
      userNotes = JSON.parse(saved);
    }
  } catch (e) {
    userNotes = [];
  }
  updateNotesBadge();
}

function saveNotesToStorage() {
  try {
    localStorage.setItem("chesterton_reader_notes", JSON.stringify(userNotes));
  } catch (e) {}
  updateNotesBadge();
}

function updateNotesBadge() {
  const badge = document.getElementById("notes-badge");
  if (badge) badge.textContent = userNotes.length;
}

function getUserHighlights(workId) {
  return userNotes.filter(n => n.workId === workId);
}

function handleTextSelection(paraId, event) {
  const selection = window.getSelection();
  const text = selection.toString().trim();
  const popover = document.getElementById("selection-popover");

  if (!text || text.length < 3) {
    if (popover) popover.style.display = "none";
    pendingSelection = null;
    return;
  }

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();

  pendingSelection = {
    workId: window.currentWorkId,
    paraId: paraId,
    quote: text,
    rect: rect
  };

  if (popover) {
    popover.style.display = "flex";
    popover.style.top = `${window.scrollY + rect.top}px`;
    popover.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
  }
}

function applySelectionHighlight(color = "yellow") {
  if (!pendingSelection) return;

  const hlId = "hl-" + Date.now();
  const newNote = {
    id: hlId,
    workId: pendingSelection.workId,
    paraId: pendingSelection.paraId,
    quote: pendingSelection.quote,
    note: "",
    color: color,
    timestamp: new Date().toISOString()
  };

  userNotes.push(newNote);
  saveNotesToStorage();

  const popover = document.getElementById("selection-popover");
  if (popover) popover.style.display = "none";
  window.getSelection().removeAllRanges();

  // Re-render blocks
  if (window.currentActiveWork) {
    window.renderBlocks(window.currentActiveWork, window.currentSectionId);
  }
  renderNotebookList();
  showToast("Highlight added to notebook");
}

function promptAddNote() {
  if (!pendingSelection) return;
  const userText = prompt("Add personal reflection / annotation:", "");
  if (userText !== null) {
    const hlId = "hl-" + Date.now();
    const newNote = {
      id: hlId,
      workId: pendingSelection.workId,
      paraId: pendingSelection.paraId,
      quote: pendingSelection.quote,
      note: userText.trim(),
      color: "amber",
      timestamp: new Date().toISOString()
    };

    userNotes.push(newNote);
    saveNotesToStorage();

    const popover = document.getElementById("selection-popover");
    if (popover) popover.style.display = "none";
    window.getSelection().removeAllRanges();

    if (window.currentActiveWork) {
      window.renderBlocks(window.currentActiveWork, window.currentSectionId);
    }
    renderNotebookList();
    showToast("Note saved to personal notebook");
  }
}

function copySelectedQuote() {
  if (!pendingSelection) return;
  const citation = `"${pendingSelection.quote}" — G.K. Chesterton, ${window.currentActiveWork ? window.currentActiveWork.titleEn : 'Works'}`;
  navigator.clipboard.writeText(citation).then(() => {
    showToast("Quote copied with citation");
    const popover = document.getElementById("selection-popover");
    if (popover) popover.style.display = "none";
  });
}

function handleHighlightClick(hlId, event) {
  event.stopPropagation();
  const note = userNotes.find(n => n.id === hlId);
  if (!note) return;

  if (note.note) {
    alert(`Personal Note:\n\n${note.note}\n\nQuote:\n"${note.quote}"`);
  } else {
    const action = confirm(`Highlight: "${note.quote}"\n\nWould you like to delete this highlight?`);
    if (action) {
      deleteNote(hlId);
    }
  }
}

function deleteNote(hlId) {
  userNotes = userNotes.filter(n => n.id !== hlId);
  saveNotesToStorage();
  if (window.currentActiveWork) {
    window.renderBlocks(window.currentActiveWork, window.currentSectionId);
  }
  renderNotebookList();
  showToast("Highlight removed");
}

function toggleNotebook() {
  const drawer = document.getElementById("notebook-drawer");
  if (!drawer) return;
  drawer.classList.toggle("open");
  if (drawer.classList.contains("open")) {
    renderNotebookList();
  }
}

function renderNotebookList() {
  const container = document.getElementById("notebook-items-container");
  if (!container) return;

  if (userNotes.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem; color:var(--text-muted); font-size:0.9rem;">
        Your notebook is empty. Highlight text in any Chesterton work to save quotes and personal annotations!
      </div>
    `;
    return;
  }

  let html = "";
  userNotes.slice().reverse().forEach(note => {
    const workMeta = window.CORPUS_DATA ? window.CORPUS_DATA[note.workId] : null;
    const workTitle = workMeta ? workMeta.titleEn : note.workId;
    const dateStr = new Date(note.timestamp).toLocaleDateString();

    html += `
      <div class="note-card" id="card-${note.id}">
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--accent); font-weight:700; margin-bottom:0.35rem;">
          <span>${escapeHtmlSafe(workTitle)} • § ${note.paraId}</span>
          <span style="cursor:pointer; color:#ef4444;" onclick="window.deleteNote('${note.id}')" title="Delete Note">✕</span>
        </div>
        <div class="note-quote">
          "${escapeHtmlSafe(note.quote)}"
        </div>
        ${note.note ? `
          <div class="note-user-text">
            📝 ${escapeHtmlSafe(note.note)}
          </div>
        ` : ''}
        <div class="note-card-footer">
          <span>${dateStr}</span>
          <button class="btn btn-icon" style="font-size:0.75rem; padding:0.2rem 0.5rem;" onclick="window.loadWork('${note.workId}', 'all', '${note.paraId}')">
            Jump to Text →
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function exportNotebookMarkdown() {
  if (userNotes.length === 0) {
    showToast("Notebook is empty");
    return;
  }

  let md = `# G.K. Chesterton Reader — Personal Notebook & Quotes\n\n`;
  md += `*Exported on ${new Date().toLocaleDateString()}*\n\n---\n\n`;

  userNotes.forEach((n, idx) => {
    const meta = window.CORPUS_DATA ? window.CORPUS_DATA[n.workId] : null;
    const title = meta ? meta.titleEn : n.workId;
    md += `### ${idx + 1}. ${title} (§ ${n.paraId})\n`;
    md += `> "${n.quote}"\n\n`;
    if (n.note) md += `**Personal Note:** ${n.note}\n\n`;
    md += `*Saved: ${new Date(n.timestamp).toLocaleString()}*\n\n---\n\n`;
  });

  const blob = new Blob([md], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Chesterton_Reader_Notes_${Date.now()}.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Notebook exported as Markdown");
}

if (typeof window !== "undefined") {
  window.initNotes = initNotes;
  window.getUserHighlights = getUserHighlights;
  window.handleTextSelection = handleTextSelection;
  window.applySelectionHighlight = applySelectionHighlight;
  window.promptAddNote = promptAddNote;
  window.copySelectedQuote = copySelectedQuote;
  window.handleHighlightClick = handleHighlightClick;
  window.deleteNote = deleteNote;
  window.toggleNotebook = toggleNotebook;
  window.exportNotebookMarkdown = exportNotebookMarkdown;
}
