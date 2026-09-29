# G.K. Chesterton — Complete Open Digital Corpus & Reader

An open-access, high-performance digital reader for the **complete, 100% unabridged public domain works** of **Gilbert Keith Chesterton (1874–1936)**. 

Covering **120 landmark volumes**, this library encompasses Chesterton's complete theological treatises, Father Brown inquiries, metaphysical novels, Distributist manifestos, literary biographies, epic verse, plays, and historic debates across his entire lifetime output.

Modeled directly after the modular architecture of the [Marcel-Reader](https://github.com/thecorcoran/Marcel-Reader).

---

## 🌟 Core Features

- **Exhaustive 120-Volume Corpus**: 100% complete, verbatim public domain editions organized into 8 canonical categories without abridgment or truncation.
- **Continuous Unabridged Reading Mode**: Elegant single-column reading view with dynamic section navigation pills, word count metrics, and reading progress indicators.
- **Categorical Corpus Browser**: Instant exploration by genre (*Christian Apologetics & Philosophy*, *Father Brown Mysteries*, *Novels & Fantastic Romances*, *Distributism & Politics*, *Essays & Fleet Street Journalism*, *Literary Criticism & Biographies*, *Poetry & Epic Verse*, *Plays & Historic Debates*).
- **Multi-Theme & Custom Typography**:
  - Four reading palettes: **Paper** (Classic Cream), **Sepia** (Warm Parchment), **Dark** (Slate Night), and **Midnight** (Gothic Navy).
  - Dynamic font size scaling (`A−` / `A+`) with premium Cardo, Cinzel, and Lora serif typography.
- **Global Inverted Full-Text Search (`Ctrl+K`)**: Instant search across all 120 books, chapters, and philosophical glossary entries with live highlight snippets.
- **Chestertonian Philosophical Glossary (`📖`)**: Deep-dive lexicon of core concepts (*Distributism*, *Chesterton's Fence*, *The Ethics of Elfland*, *The Suicide of Thought*, *The Maniac vs. The Poet*, *Primary Wonder*, *Father Brown's Method*, *The Democracy of the Dead*, *The Signature of Man*, *Subsidiarity*, *The Flag of the World*).
- **Personal Notebook & Highlighter (`📝`)**:
  - Text selection toolbar with multi-color highlights (Yellow, Amber, Green, Blue), personal notes, and quote copying.
  - Persistent LocalStorage saving with Markdown notebook export.
- **Academic Citation Engine (`🎓 Cite`)**: Generates formatted citations in **Chicago 17th**, **MLA 9th**, **APA 7th**, and **BibTeX**.
- **Grand Master Archival Catalog (`🏛️`)**: Interactive chronological and categorical bibliography table of Chesterton's lifetime output with direct reading links.
- **Zero Build Step & Offline PWA**: Pure HTML5, CSS3, and Vanilla JavaScript. Runs immediately in any browser, local web server, or GitHub Pages.

---

## 📚 Corpus Breakdown (120 Volumes)

| Category | Volumes | Key Representative Works |
| :--- | :---: | :--- |
| **Essays & Fleet Street Journalism** | **26** | *The Defendant*, *Tremendous Trifles*, *All Things Considered*, *Alarms and Discursions*, *A Miscellany of Men*, *Uses of Diversity*, *Fancies Versus Fads*, *Generally Speaking*, *Come to Think of It*, *All is Grist*, *All I Survey*, *Avowals and Denials*, *As I Was Saying*, *The Soul of Wit*, *The Common Man*, *The Spice of Life*, *Illustrated London News: Our Note Book*, *Daily News Essays*, *G.K.'s Weekly*, *BBC Radio Broadcasts*, *The New Witness*, *The Speaker* |
| **Literary Criticism & Biographies** | **21** | *Charles Dickens*, *Robert Browning*, *George Bernard Shaw*, *William Blake*, *Chaucer*, *Robert Louis Stevenson*, *Twelve Types*, *Varied Types*, *Thomas Carlyle*, *Leo Tolstoy*, *Simplicity and Tolstoy*, *G.F. Watts*, *William Cobbett*, *The Victorian Age in Literature*, *Lord Kitchener*, *GKC as MC: Thirty-Seven Introductions*, *Chesterton on Shakespeare*, *Chesterton on Art and Aesthetics*, *A Handful of Authors*, *Autobiography* |
| **Distributism, Politics & Social Philosophy** | **18** | *What's Wrong with the World*, *The Outline of Sanity*, *Eugenics and Other Evils*, *Utopia of Usurers*, *The Superstition of Divorce*, *Irish Impressions*, *The Crimes of England*, *The Appetite of Tyranny*, *The Barbarism of Berlin*, *Letters to an Old Garibaldian*, *How to Help Annexation*, *The English Agricultural Labourer*, *Thoughts on the Present Discontents*, *A Defence of English Manners*, *The Perishing Pharmacy*, *A Short History of England*, *The End of the Armistice* |
| **Christian Apologetics & Philosophy** | **17** | *Orthodoxy*, *Heretics*, *The Everlasting Man*, *St. Francis of Assisi*, *St. Thomas Aquinas*, *The Thing: Why I Am a Catholic*, *The Catholic Church and Conversion*, *Where All Roads Lead*, *The Blatchford Controversies*, *The Well and the Shallows*, *The New Jerusalem*, *The Resurrection of Rome*, *Christendom in Dublin*, *The Way of the Cross*, *The Catholic Church and the Modern State*, *The New Unbelief*, *Blackfriars & Dublin Review Inquiries* |
| **Novels & Fantastic Romances** | **15** | *The Man Who Was Thursday*, *The Napoleon of Notting Hill*, *The Ball and the Cross*, *Manalive*, *The Flying Inn*, *The Return of Don Quixote*, *The Club of Queer Trades*, *The Man Who Knew Too Much*, *Tales of the Long Bow*, *The Poet and the Lunatics*, *Four Faultless Felons*, *The Trees of Pride*, *The End of the Roman Road*, *The Sword of Wood*, *The Coloured Lands* |
| **Poetry & Epic Verse** | **11** | *The Ballad of the White Horse*, *The Wild Knight and Other Poems*, *Greybeards at Play*, *Wine, Water, and Song*, *The Ballad of St. Barbara*, *The Queen of Seven Swords*, *The Collected Poems of G.K. Chesterton* |
| **Father Brown Mysteries & Detective Fiction** | **6** | *The Innocence of Father Brown*, *The Wisdom of Father Brown*, *The Incredulity of Father Brown*, *The Secret of Father Brown*, *The Scandal of Father Brown*, *The Paradoxes of Mr. Pond* |
| **Plays, Debates & Public Encounters** | **6** | *Magic: A Fantastic Comedy*, *The Judgement of Dr. Johnson*, *The Surprise*, *The Turkey and the Turk*, *Do We Agree? (Debate with Shaw)*, *The Chesterton-Darrow Debate*, *The Campbell Controversy (New Theology)*, *The Coulson Kernahan Debate*, *The Bertrand Russell Encounter*, *The H.G. Wells Exchanges* |
| **Total** | **120** | **Complete Unabridged Lifetime Corpus** |

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
│   ├── reader.js           # Text rendering engine & continuous book view
│   ├── search.js           # Multi-tier inverted full-text search engine
│   └── notes.js            # Annotations, highlights, & notebook engine
└── data/
    ├── corpus.js           # Master metadata index (120 works)
    ├── glossary.js         # Chestertonian lexicon & philosophical glossary
    ├── archival_catalog.js # Complete lifetime bibliography & archive
    └── works/              # 120 modular work data files (.js)
```

---

## 🚀 Running Locally & Deployment

### Local Development
Open `index.html` directly in any browser:
```bash
# Or start a simple Python HTTP server:
python3 -m http.server 8080
```
Then navigate to `http://localhost:8080`.

### Deploying to GitHub Pages
1. Push the `main` branch to your repository:
   ```bash
   git push origin main
   ```
2. In GitHub repository settings, navigate to **Pages** > **Build and deployment** > Source: **Deploy from a branch** (`main` / `/root`).

---

## 📜 Public Domain & License

All original literary texts by G.K. Chesterton (1874–1936) included in this repository are in the **Public Domain**.
The digital reader application interface, search engine, and styling are open-source under the **MIT License**.
