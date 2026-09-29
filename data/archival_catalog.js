/**
 * G.K. Chesterton — Grand Oeuvre & Archival Horizon Catalog
 * Comprehensive Chronological and Thematic Archive of G.K. Chesterton's Lifetime Output
 */
(function() {
  const ARCHIVAL_CATALOG = [
    // --- NOVELS & LONG FICTION ---
    {
      "id": "notting-hill-1904",
      "title": "The Napoleon of Notting Hill",
      "year": 1904,
      "type": "Novel / Satire",
      "publisher": "John Lane / The Bodley Head",
      "status": "In Digital Corpus",
      "slug": "the-napoleon-of-notting-hill",
      "notes": "Futuristic London romance celebrating local patriotism and the rebellion of Notting Hill."
    },
    {
      "id": "thursday-1908",
      "title": "The Man Who Was Thursday: A Nightmare",
      "year": 1908,
      "type": "Metaphysical Thriller / Allegory",
      "publisher": "J. W. Arrowsmith",
      "status": "In Digital Corpus",
      "slug": "the-man-who-was-thursday",
      "notes": "Masterpiece philosophical mystery confronting anarchism, cosmic order, and the enigmas of Creation."
    },
    {
      "id": "ball-and-cross-1909",
      "title": "The Ball and the Cross",
      "year": 1909,
      "type": "Novel / Dialectical Romance",
      "publisher": "Wells Gardner, Darton & Co.",
      "status": "Archival Catalog",
      "notes": "An ideological duel across Britain between a devout Jacobite Catholic and an ardent atheist editor."
    },
    {
      "id": "manalive-1912",
      "title": "Manalive",
      "year": 1912,
      "type": "Novel / Parable",
      "publisher": "Thomas Nelson & Sons",
      "status": "Archival Catalog",
      "notes": "The eccentric adventures of Innocent Smith, who forces tired modern men to fall in love with life again."
    },
    {
      "id": "flying-inn-1914",
      "title": "The Flying Inn",
      "year": 1914,
      "type": "Novel / Political Satire & Songs",
      "publisher": "Methuen & Co.",
      "status": "Archival Catalog",
      "notes": "The defense of traditional English inns against prohibitionist elites; contains classic drinking songs."
    },
    {
      "id": "return-of-don-quixote-1927",
      "title": "The Return of Don Quixote",
      "year": 1927,
      "type": "Novel",
      "publisher": "Chatto & Windus",
      "status": "Archival Catalog",
      "notes": "A librarian is cast as a medieval king in a play and decides to enforce medieval law in modern England."
    },

    // --- SHORT STORY COLLECTIONS & DETECTIVE MYSTERIES ---
    {
      "id": "queer-trades-1905",
      "title": "The Club of Queer Trades",
      "year": 1905,
      "type": "Detective / Mystery Collection",
      "publisher": "Harper & Brothers",
      "status": "In Digital Corpus",
      "slug": "the-club-of-queer-trades",
      "notes": "Six mysteries featuring retired Judge Basil Grant and unique vocations."
    },
    {
      "id": "innocence-fb-1911",
      "title": "The Innocence of Father Brown",
      "year": 1911,
      "type": "Detective Collection",
      "publisher": "Cassell & Co.",
      "status": "In Digital Corpus",
      "slug": "the-innocence-of-father-brown",
      "notes": "The legendary debut of Father Brown; 12 canonical mysteries including 'The Blue Cross'."
    },
    {
      "id": "wisdom-fb-1914",
      "title": "The Wisdom of Father Brown",
      "year": 1914,
      "type": "Detective Collection",
      "publisher": "Cassell & Co.",
      "status": "In Digital Corpus",
      "slug": "the-wisdom-of-father-brown",
      "notes": "Second Father Brown collection featuring 12 psychological and moral mysteries."
    },
    {
      "id": "man-who-knew-too-much-1922",
      "title": "The Man Who Knew Too Much",
      "year": 1922,
      "type": "Mystery Collection",
      "publisher": "Cassell & Co.",
      "status": "Archival Catalog",
      "notes": "Featuring aristocratic sleuth Horne Fisher, who solves crimes among British political elites."
    },
    {
      "id": "incredulity-fb-1926",
      "title": "The Incredulity of Father Brown",
      "year": 1926,
      "type": "Detective Collection",
      "publisher": "Cassell & Co.",
      "status": "Archival Catalog",
      "notes": "Eight stories where Father Brown unmasks seemingly supernatural miracles and curses."
    },
    {
      "id": "secret-fb-1927",
      "title": "The Secret of Father Brown",
      "year": 1927,
      "type": "Detective Collection",
      "publisher": "Cassell & Co.",
      "status": "Archival Catalog",
      "notes": "Framed around Father Brown explaining his inner method of moral identification to an American admirer."
    },
    {
      "id": "poet-and-lunatics-1929",
      "title": "The Poet and the Lunatics",
      "year": 1929,
      "type": "Mystery Collection",
      "publisher": "Cassell & Co.",
      "status": "Archival Catalog",
      "notes": "Featuring Gabriel Gale, a painter and poet who understands madness because of his artistic vision."
    },
    {
      "id": "scandal-fb-1935",
      "title": "The Scandal of Father Brown",
      "year": 1935,
      "type": "Detective Collection",
      "publisher": "Cassell & Co.",
      "status": "Archival Catalog",
      "notes": "Final Father Brown collection published during Chesterton's lifetime."
    },

    // --- PHILOSOPHY, APOLOGETICS & THEOLOGY ---
    {
      "id": "heretics-1905",
      "title": "Heretics",
      "year": 1905,
      "type": "Philosophy & Cultural Criticism",
      "publisher": "John Lane / The Bodley Head",
      "status": "In Digital Corpus",
      "slug": "heretics",
      "notes": "Critique of fashionable contemporary philosophies; set the stage for Orthodoxy."
    },
    {
      "id": "orthodoxy-1908",
      "title": "Orthodoxy",
      "year": 1908,
      "type": "Christian Apologetics / Spiritual Autobiography",
      "publisher": "John Lane / The Bodley Head",
      "status": "In Digital Corpus",
      "slug": "orthodoxy",
      "notes": "Chesterton's masterpiece on the rationality of wonder and the Christian faith."
    },
    {
      "id": "st-francis-1923",
      "title": "Saint Francis of Assisi",
      "year": 1923,
      "type": "Spiritual Biography",
      "publisher": "Hodder & Stoughton",
      "status": "In Digital Corpus",
      "slug": "st-francis-of-assisi",
      "notes": "Luminous exploration of Franciscan gratitude, humility, and the Canticle of the Sun."
    },
    {
      "id": "everlasting-man-1925",
      "title": "The Everlasting Man",
      "year": 1925,
      "type": "Philosophy of History / Apologetics",
      "publisher": "Hodder & Stoughton",
      "status": "In Digital Corpus",
      "slug": "the-everlasting-man",
      "notes": "Sweep of human and religious history; key influence on C.S. Lewis's conversion."
    },
    {
      "id": "the-thing-1929",
      "title": "The Thing: Why I Am a Catholic",
      "year": 1929,
      "type": "Theological Essays",
      "publisher": "Sheed & Ward",
      "status": "Archival Catalog",
      "notes": "Defends Catholic conversion; origin of 'Chesterton's Fence'."
    },
    {
      "id": "st-thomas-1933",
      "title": "Saint Thomas Aquinas: The Dumb Ox",
      "year": 1933,
      "type": "Philosophical Biography",
      "publisher": "Hodder & Stoughton",
      "status": "In Digital Corpus",
      "slug": "st-thomas-aquinas",
      "notes": "Étienne Gilson praised this as the finest and most insightful work on Aquinas ever written."
    },

    // --- SOCIAL & ECONOMIC PHILOSOPHY (DISTRIBUTISM) ---
    {
      "id": "whats-wrong-1910",
      "title": "What's Wrong with the World",
      "year": 1910,
      "type": "Social & Cultural Treatise",
      "publisher": "Cassell & Co.",
      "status": "In Digital Corpus",
      "slug": "whats-wrong-with-the-world",
      "notes": "Classic defense of the private family, distributed property, and human-scale education."
    },
    {
      "id": "utopia-of-usurers-1917",
      "title": "Utopia of Usurers and Other Essays",
      "year": 1917,
      "type": "Social Criticism",
      "publisher": "Boni & Liveright",
      "status": "Archival Catalog",
      "notes": "Fierce attacks on financial oligarchies and capitalist exploitation of culture."
    },
    {
      "id": "superstition-divorce-1920",
      "title": "The Superstition of Divorce",
      "year": 1920,
      "type": "Social Treatise",
      "publisher": "Chatto & Windus",
      "status": "Archival Catalog",
      "notes": "Philosophical and sociological defense of the lifelong marital bond."
    },
    {
      "id": "eugenics-1922",
      "title": "Eugenics and Other Evils: An Argument Against the Scientifically Organized State",
      "year": 1922,
      "type": "Political & Bioethical Treatise",
      "publisher": "Cassell & Co.",
      "status": "Archival Catalog",
      "notes": "Remarkably prescient refutation of eugenics, forced sterilisation, and scientism."
    },
    {
      "id": "outline-of-sanity-1926",
      "title": "The Outline of Sanity",
      "year": 1926,
      "type": "Economic Manifesto / Distributism",
      "publisher": "Methuen & Co.",
      "status": "In Digital Corpus",
      "slug": "the-outline-of-sanity",
      "notes": "Comprehensive blueprint for Distributism: small shops, peasant agriculture, and property for all."
    },

    // --- ESSAYS & CRITICISM ---
    {
      "id": "the-defendant-1901",
      "title": "The Defendant",
      "year": 1901,
      "type": "Essay Collection",
      "publisher": "R. Brimley Johnson",
      "status": "In Digital Corpus",
      "slug": "the-defendant",
      "notes": "Early sparkling essays in defence of penny dreadfuls, rash vows, skeletons, and nonsense."
    },
    {
      "id": "robert-browning-1903",
      "title": "Robert Browning",
      "year": 1903,
      "type": "Literary Biography",
      "publisher": "Macmillan & Co.",
      "status": "Archival Catalog",
      "notes": "English Men of Letters series; established Chesterton as a foremost literary critic."
    },
    {
      "id": "charles-dickens-1906",
      "title": "Charles Dickens",
      "year": 1906,
      "type": "Literary Biography & Criticism",
      "publisher": "Methuen & Co.",
      "status": "Archival Catalog",
      "notes": "Acclaimed as the definitive critical appreciation that revived modern interest in Dickens."
    },
    {
      "id": "all-things-considered-1908",
      "title": "All Things Considered",
      "year": 1908,
      "type": "Essay Collection",
      "publisher": "Methuen & Co.",
      "status": "Archival Catalog",
      "notes": "Essays from The Illustrated London News exploring art, fairy tales, and everyday philosophy."
    },
    {
      "id": "tremendous-trifles-1909",
      "title": "Tremendous Trifles",
      "year": 1909,
      "type": "Essay Collection",
      "publisher": "Methuen & Co.",
      "status": "In Digital Corpus",
      "slug": "tremendous-trifles",
      "notes": "Classic meditations on everyday wonders, chalk, juries, and cabmen."
    },
    {
      "id": "alarms-and-discursions-1910",
      "title": "Alarms and Discursions",
      "year": 1910,
      "type": "Essay Collection",
      "publisher": "Methuen & Co.",
      "status": "Archival Catalog",
      "notes": "Witty essays on Gargoyles, Cheese, Sightseeing, and the Duke of Marlborough."
    },
    {
      "id": "victorian-age-1913",
      "title": "The Victorian Age in Literature",
      "year": 1913,
      "type": "Literary History",
      "publisher": "Williams and Norgate / Home University Library",
      "status": "Archival Catalog",
      "notes": "Brilliant and personal overview of Victorian literary giants and movements."
    },
    {
      "id": "uses-of-diversity-1920",
      "title": "The Uses of Diversity",
      "year": 1920,
      "type": "Essay Collection",
      "publisher": "Methuen & Co.",
      "status": "Archival Catalog",
      "notes": "Essays on monsters, futurism, Tennyson, Mormonism, and stage scenery."
    },
    {
      "id": "autobiography-1936",
      "title": "The Autobiography of G. K. Chesterton",
      "year": 1936,
      "type": "Autobiography / Memoir",
      "publisher": "Hutchinson & Co.",
      "status": "Archival Catalog",
      "notes": "Chesterton's final book, published posthumously, brimming with wit, friendship, and humility."
    },

    // --- EPIC POETRY & DRAMA ---
    {
      "id": "wild-knight-1900",
      "title": "The Wild Knight and Other Poems",
      "year": 1900,
      "type": "Poetry Collection",
      "publisher": "Grant Richards",
      "status": "Archival Catalog",
      "notes": "Contains 'The Donkey' and Chesterton's earliest lyrical verse."
    },
    {
      "id": "ballad-white-horse-1911",
      "title": "The Ballad of the White Horse",
      "year": 1911,
      "type": "Epic Poem",
      "publisher": "Methuen & Co.",
      "status": "In Digital Corpus",
      "slug": "the-ballad-of-the-white-horse",
      "notes": "Grand epic poem of King Alfred, the Vale of the White Horse, and Christian civilization."
    },
    {
      "id": "magic-play-1913",
      "title": "Magic: A Fantastic Comedy",
      "year": 1913,
      "type": "Theatrical Play",
      "publisher": "Martin Secker",
      "status": "Archival Catalog",
      "notes": "A celebrated stage play on the reality of the supernatural, praised by George Bernard Shaw."
    },
    {
      "id": "wine-water-song-1915",
      "title": "Wine, Water, and Song",
      "year": 1915,
      "type": "Poetry / Songs",
      "publisher": "Methuen & Co.",
      "status": "Archival Catalog",
      "notes": "Songs from The Flying Inn, including 'The Rolling English Road'."
    },
    {
      "id": "collected-poems-1927",
      "title": "The Collected Poems of G.K. Chesterton",
      "year": 1927,
      "type": "Collected Poetry",
      "publisher": "Cecil Palmer",
      "status": "Archival Catalog",
      "notes": "Comprehensive edition including 'Lepanto', 'The Secret People', and religious carols."
    }
  ];

  if (typeof window !== "undefined") {
    window.ARCHIVAL_CATALOG = ARCHIVAL_CATALOG;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = ARCHIVAL_CATALOG;
  }
})();
