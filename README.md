# G.K. Chesterton — Open Digital Corpus & Reader

An open-access, modern digital reader for the complete public domain works, Christian apologetics, detective mysteries, metaphysical novels, and essays of **Gilbert Keith Chesterton (1874–1936)**.

---

## 🌟 Core Features

- **Master Digital Corpus**: Fully categorized and verified public domain editions of Chesterton’s landmark works (*Orthodoxy*, *The Innocence of Father Brown*, *The Man Who Was Thursday*, *Heretics*, *What's Wrong with the World*, *The Everlasting Man*, *The Ballad of the White Horse*, and more).
- **Thematic Reading Itineraries**: Curated reading journeys connecting his theological apologetics, Father Brown's moral inquiries, metaphysical thrillers, and Distributist social philosophy.
- **Reading Modes**:
  - **Study Mode**: Main text alongside thematic insights, theological context, and paradox analysis.
  - **Continuous Book Mode**: Elegant single-column layout for immersive reading.
  - **Focus Mode**: Distraction-free reading experience.
- **Multi-Theme & Typography Controls**:
  - Four custom reading palettes: **Paper** (Classic Cream), **Sepia** (Warm Parchment), **Dark** (Slate Night), and **Midnight** (Gothic Navy).
  - Dynamic font size scaling (A− / A+) and Cardo/Cinzel typography.
- **Instant Full-Text Search (`Ctrl+K`)**: Live multi-tier search across all books, chapters, Father Brown mysteries, and philosophical glossary.
- **Interactive Chestertonian Glossary**: Deep dive into key concepts (*Distributism*, *Chesterton's Fence*, *The Ethics of Elfland*, *The Maniac vs. The Poet*, *Primary Wonder*, *Father Brown's Method*, *Subsidiarity*).
- **Personal Notebook & Highlighter**:
  - Text selection toolbar with multi-color highlights (Yellow, Amber, Green, Blue), personal notes, and quote copy.
  - Export notebook as Markdown with timestamps and citations.
- **Academic Citation Generator (`🎓 Cite`)**: Export citations in **Chicago 17th**, **MLA 9th**, **APA 7th**, and **BibTeX**.
- **Grand Oeuvre & Archival Horizon (`🏛️`)**: Complete bibliography of Chesterton's lifetime output (over 80 books, 4,000 newspaper columns, radio broadcasts, and debates).
- **Zero Build Step & Offline PWA**: Pure HTML, CSS, and modular Vanilla JS. Runs instantly on any browser, local web server, GitHub Pages, or offline.

---

## 📁 Repository Structure

```
Chesterton Reader/
├── index.html              # Master application shell & UI
├── manifest.json           # PWA Manifest configuration
├── README.md               # Documentation & overview
├── css/
│   ├── main.css            # Core styles, design tokens, & themes
│   └── components.css      # Catalog grid, hero, modals, & side drawers
├── js/
│   ├── app.js              # Application controller, routing, & modals
│   ├── reader.js           # Text rendering engine & reading modes
│   ├── search.js           # Multi-tier full-text search engine
│   └── notes.js            # Annotations, highlights, & notebook engine
└── data/
    ├── corpus.js           # Master metadata index of all works
    ├── glossary.js         # Chestertonian lexicon & philosophical glossary
    ├── archival_catalog.js # Complete lifetime bibliography & archive
    └── works/              # Modular work data files
        ├── orthodoxy.js
        ├── the-innocence-of-father-brown.js
        ├── the-man-who-was-thursday.js
        ├── heretics.js
        ├── whats-wrong-with-the-world.js
        ├── the-ballad-of-the-white-horse.js
        ├── tremendous-trifles.js
        ├── the-defendant.js
        ├── the-everlasting-man.js
        ├── the-club-of-queer-trades.js
        ├── st-francis-of-assisi.js
        ├── st-thomas-aquinas.js
        ├── the-wisdom-of-father-brown.js
        ├── the-napoleon-of-notting-hill.js
        └── the-outline-of-sanity.js
```

---

## 🚀 Running the Site

Simply open `index.html` in any web browser, or serve it using any lightweight static server:

```bash
# Using Python 3:
python3 -m http.server 8000

# Using Node.js:
npx serve .
```
