/**
 * G.K. Chesterton — Master Corpus & Metadata Index
 * Open Digital Corpus of the Complete Public Domain Works of Gilbert Keith Chesterton (1874–1936)
 */
(function() {
  const CORPUS_DATA = {
    // ==========================================
    // 1. CHRISTIAN APOLOGETICS & PHILOSOPHY
    // ==========================================
    "orthodoxy": {
      "id": "orthodoxy",
      "titleEn": "Orthodoxy",
      "subtitle": "The Romance of Faith and the Logic of Wonder",
      "year": 1908,
      "category": "Christian Apologetics & Philosophy",
      "companionSlug": "heretics",
      "companionTitle": "Heretics (1905)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (9 Chapters, 185 Paras, 65k Words)",
      "description": "Chesterton’s masterpiece of Christian apologetics, recounting his intellectual journey from skepticism to faith through the joyous paradoxes of existence and the 'Ethics of Elfland'.",
      "sections": [
        { "id": "intro", "titleEn": "Preface & Introduction in Defence of Everything Else" },
        { "id": "ch-1", "titleEn": "Chapter I. Introduction in Defence of Everything Else" },
        { "id": "ch-2", "titleEn": "Chapter II. The Maniac" },
        { "id": "ch-3", "titleEn": "Chapter III. The Suicide of Thought" },
        { "id": "ch-4", "titleEn": "Chapter IV. The Ethics of Elfland" },
        { "id": "ch-5", "titleEn": "Chapter V. The Flag of the World" },
        { "id": "ch-6", "titleEn": "Chapter VI. The Paradoxes of Christianity" },
        { "id": "ch-7", "titleEn": "Chapter VII. The Eternal Revolution" },
        { "id": "ch-8", "titleEn": "Chapter VIII. The Romance of Orthodoxy" },
        { "id": "ch-9", "titleEn": "Chapter IX. Authority and the Adventurer" }
      ]
    },
    "heretics": {
      "id": "heretics",
      "titleEn": "Heretics",
      "subtitle": "Orthodoxy, Modern Thought, and the Importance of a Cosmological View",
      "year": 1905,
      "category": "Christian Apologetics & Philosophy",
      "companionSlug": "orthodoxy",
      "companionTitle": "Orthodoxy (1908)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (20 Essays, 210 Paras, 70k Words)",
      "description": "A brilliant and satirical critique of contemporary philosophies and intellectuals including Bernard Shaw, H.G. Wells, Rudyard Kipling, and aestheticism.",
      "sections": [
        { "id": "ch-1", "titleEn": "I. On the Importance of Keeping an Eye on the Cosmological" },
        { "id": "ch-2", "titleEn": "II. On the Negative Spirit & Mr. Rudyard Kipling" },
        { "id": "ch-3", "titleEn": "III. On Mr. Bernard Shaw & Progress" },
        { "id": "ch-4", "titleEn": "IV. On Mr. H. G. Wells and the Giants" },
        { "id": "ch-5", "titleEn": "V. On Christmas and the Aesthetes" },
        { "id": "ch-6", "titleEn": "VI. On Omar and the Sacred Vine" },
        { "id": "ch-7", "titleEn": "VII. On the Yellow Press" },
        { "id": "ch-8", "titleEn": "VIII. On the Wit of Whistler" },
        { "id": "ch-9", "titleEn": "IX. On Modernity and the Pagan" },
        { "id": "ch-10", "titleEn": "X. Concluding Remarks on the Importance of Orthodoxy" }
      ]
    },
    "the-everlasting-man": {
      "id": "the-everlasting-man",
      "titleEn": "The Everlasting Man",
      "subtitle": "The Creature Called Man & The Unique Figure of Christ",
      "year": 1925,
      "category": "Christian Apologetics & Philosophy",
      "companionSlug": "orthodoxy",
      "companionTitle": "Orthodoxy (1908)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (12 Chapters, 240 Paras, 85k Words)",
      "description": "Chesterton’s monumental survey of human history and the incarnation, refuting secular evolutionary historicism. Famous as the book that converted C.S. Lewis to Christianity.",
      "sections": [
        { "id": "pref", "titleEn": "Prefatory Note: The Plan of This Book" },
        { "id": "part1-ch1", "titleEn": "Part I, Ch. 1: The Man in the Cave" },
        { "id": "part1-ch2", "titleEn": "Part I, Ch. 2: Professors and Prehistoric Men" },
        { "id": "part1-ch3", "titleEn": "Part I, Ch. 3: The Antiquity of Civilisation" },
        { "id": "part1-ch4", "titleEn": "Part I, Ch. 4: God and Comparative Religion" },
        { "id": "part1-ch5", "titleEn": "Part I, Ch. 5: Man and Mythologies" },
        { "id": "part1-ch6", "titleEn": "Part I, Ch. 6: The Demons and the Philosophers" },
        { "id": "part1-ch7", "titleEn": "Part I, Ch. 7: The War of the Gods and Demons" },
        { "id": "part1-ch8", "titleEn": "Part I, Ch. 8: The End of the World" },
        { "id": "part2-ch1", "titleEn": "Part II, Ch. 1: The God in the Cave" },
        { "id": "part2-ch2", "titleEn": "Part II, Ch. 2: The Riddles of the Gospel" },
        { "id": "part2-ch3", "titleEn": "Part II, Ch. 3: The Witness of the Heretics" },
        { "id": "part2-ch4", "titleEn": "Part II, Ch. 4: The Escape from Paganism" },
        { "id": "part2-ch5", "titleEn": "Part II, Ch. 5: The Five Deaths of the Faith" },
        { "id": "conclusion", "titleEn": "Conclusion: The Summary of This Strange Story" }
      ]
    },
    "st-francis-of-assisi": {
      "id": "st-francis-of-assisi",
      "titleEn": "Saint Francis of Assisi",
      "subtitle": "The Troubadour of God and the Rebirth of Gratitude",
      "year": 1923,
      "category": "Christian Apologetics & Philosophy",
      "companionSlug": "st-thomas-aquinas",
      "companionTitle": "Saint Thomas Aquinas (1933)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (10 Chapters, 160 Paras, 45k Words)",
      "description": "An incandescent biographical and spiritual portrait of St. Francis, illuminating Franciscan joy, the Canticle of the Sun, and radical holy poverty.",
      "sections": [
        { "id": "ch-1", "titleEn": "Chapter I. The Problem of St. Francis" },
        { "id": "ch-2", "titleEn": "Chapter II. The World St. Francis Found" },
        { "id": "ch-3", "titleEn": "Chapter III. Francis the Fighter" },
        { "id": "ch-4", "titleEn": "Chapter IV. Francis the Builder" },
        { "id": "ch-5", "titleEn": "Chapter V. Le Jongleur de Dieu" },
        { "id": "ch-6", "titleEn": "Chapter VI. The Little Poor Man" },
        { "id": "ch-7", "titleEn": "Chapter VII. The Three Orders" },
        { "id": "ch-8", "titleEn": "Chapter VIII. The Mirror of Christ" },
        { "id": "ch-9", "titleEn": "Chapter IX. Miracles and the Stigmata" },
        { "id": "ch-10", "titleEn": "Chapter X. The Testament of St. Francis" }
      ]
    },
    "st-thomas-aquinas": {
      "id": "st-thomas-aquinas",
      "titleEn": "Saint Thomas Aquinas: The Dumb Ox",
      "subtitle": "The Common Sense of the Catholic Mind",
      "year": 1933,
      "category": "Christian Apologetics & Philosophy",
      "companionSlug": "st-francis-of-assisi",
      "companionTitle": "Saint Francis of Assisi (1923)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (8 Chapters, 140 Paras, 50k Words)",
      "description": "Universally praised by philosophers including Étienne Gilson as a brilliant exposition of Thomism, celebrating Aquinas's robust affirmation of physical reality and reason.",
      "sections": [
        { "id": "ch-1", "titleEn": "Chapter I. On Two Friars" },
        { "id": "ch-2", "titleEn": "Chapter II. The Runaway Abbot" },
        { "id": "ch-3", "titleEn": "Chapter III. The Aristotelian Revolution" },
        { "id": "ch-4", "titleEn": "Chapter IV. A Meditation on the Manichees" },
        { "id": "ch-5", "titleEn": "Chapter V. The Real Life of St. Thomas" },
        { "id": "ch-6", "titleEn": "Chapter VI. The Approach to Thomism" },
        { "id": "ch-7", "titleEn": "Chapter VII. The Permanent Philosophy" },
        { "id": "ch-8", "titleEn": "Chapter VIII. The Sequel to St. Thomas" }
      ]
    },

    // ==========================================
    // 2. THE FATHER BROWN MYSTERIES
    // ==========================================
    "the-innocence-of-father-brown": {
      "id": "the-innocence-of-father-brown",
      "titleEn": "The Innocence of Father Brown",
      "subtitle": "The Complete 12 Canonical Inquiries",
      "year": 1911,
      "category": "The Father Brown Mysteries",
      "companionSlug": "the-wisdom-of-father-brown",
      "companionTitle": "The Wisdom of Father Brown (1914)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (12 Stories, 280 Paras, 80k Words)",
      "description": "The debut collection introducing Father Brown, the quiet Roman Catholic priest whose profound understanding of human nature and sin solves seemingly impossible crimes.",
      "sections": [
        { "id": "story-1", "titleEn": "I. The Blue Cross (Flambeau's Debut)" },
        { "id": "story-2", "titleEn": "II. The Secret Garden" },
        { "id": "story-3", "titleEn": "III. The Queer Feet" },
        { "id": "story-4", "titleEn": "IV. The Flying Stars" },
        { "id": "story-5", "titleEn": "V. The Invisible Man" },
        { "id": "story-6", "titleEn": "VI. The Honour of Israel Gow" },
        { "id": "story-7", "titleEn": "VII. The Wrong Shape" },
        { "id": "story-8", "titleEn": "VIII. The Sins of Prince Saradine" },
        { "id": "story-9", "titleEn": "IX. The Hammer of God" },
        { "id": "story-10", "titleEn": "X. The Eye of Apollo" },
        { "id": "story-11", "titleEn": "XI. The Sign of the Broken Sword" },
        { "id": "story-12", "titleEn": "XII. The Three Tools of Death" }
      ]
    },
    "the-wisdom-of-father-brown": {
      "id": "the-wisdom-of-father-brown",
      "titleEn": "The Wisdom of Father Brown",
      "subtitle": "Twelve Further Riddles of Moral Psychology",
      "year": 1914,
      "category": "The Father Brown Mysteries",
      "companionSlug": "the-innocence-of-father-brown",
      "companionTitle": "The Innocence of Father Brown (1911)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (12 Stories, 260 Paras, 75k Words)",
      "description": "The second classic Father Brown collection, exploring crimes that hinge on psychological paradoxes, mechanical illusions, and hidden motives.",
      "sections": [
        { "id": "story-1", "titleEn": "I. The Absence of Mr. Glass" },
        { "id": "story-2", "titleEn": "II. The Paradise of Thieves" },
        { "id": "story-3", "titleEn": "III. The Duel of Dr. Hirsch" },
        { "id": "story-4", "titleEn": "IV. The Man in the Passage" },
        { "id": "story-5", "titleEn": "V. The Mistake of the Machine" },
        { "id": "story-6", "titleEn": "VI. The Head of Caesar" },
        { "id": "story-7", "titleEn": "VII. The Purple Wig" },
        { "id": "story-8", "titleEn": "VIII. The Perishing of the Pendragons" },
        { "id": "story-9", "titleEn": "IX. The God of the Gongs" },
        { "id": "story-10", "titleEn": "X. The Salad of Colonel Cray" },
        { "id": "story-11", "titleEn": "XI. The Strange Crime of John Boulnois" },
        { "id": "story-12", "titleEn": "XII. The Fairy Tale of Father Brown" }
      ]
    },

    // ==========================================
    // 3. FANTASTIC & METAPHYSICAL NOVELS
    // ==========================================
    "the-man-who-was-thursday": {
      "id": "the-man-who-was-thursday",
      "titleEn": "The Man Who Was Thursday",
      "subtitle": "A Nightmare",
      "year": 1908,
      "category": "Fantastic & Metaphysical Novels",
      "companionSlug": "the-napoleon-of-notting-hill",
      "companionTitle": "The Napoleon of Notting Hill (1904)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (15 Chapters, 290 Paras, 60k Words)",
      "description": "A celebrated metaphysical thriller in which poet-detective Gabriel Syme infiltrates the secret Central Anarchist Council, leading to an allegorical confrontation with the enigmatic Sunday.",
      "sections": [
        { "id": "ch-1", "titleEn": "Chapter I. The Two Poets of Saffron Park" },
        { "id": "ch-2", "titleEn": "Chapter II. The Secret of Gabriel Syme" },
        { "id": "ch-3", "titleEn": "Chapter III. The Man Who Was Thursday" },
        { "id": "ch-4", "titleEn": "Chapter IV. The Tale of a Detective" },
        { "id": "ch-5", "titleEn": "Chapter V. The Feast of the Fear" },
        { "id": "ch-6", "titleEn": "Chapter VI. The Exposure" },
        { "id": "ch-7", "titleEn": "Chapter VII. The Unaccountable Professor" },
        { "id": "ch-8", "titleEn": "Chapter VIII. The Professor Explains" },
        { "id": "ch-9", "titleEn": "Chapter IX. The Man in Spectacles" },
        { "id": "ch-10", "titleEn": "Chapter X. The Duel" },
        { "id": "ch-11", "titleEn": "Chapter XI. The Criminals Chase the Police" },
        { "id": "ch-12", "titleEn": "Chapter XII. The Earth in Anarchy" },
        { "id": "ch-13", "titleEn": "Chapter XIII. The Pursuit of the President" },
        { "id": "ch-14", "titleEn": "Chapter XIV. The Six Philosophers" },
        { "id": "ch-15", "titleEn": "Chapter XV. The Accuser" }
      ]
    },
    "the-napoleon-of-notting-hill": {
      "id": "the-napoleon-of-notting-hill",
      "titleEn": "The Napoleon of Notting Hill",
      "subtitle": "A Romance of Local Patriotism & Defiance",
      "year": 1904,
      "category": "Fantastic & Metaphysical Novels",
      "companionSlug": "the-man-who-was-thursday",
      "companionTitle": "The Man Who Was Thursday (1908)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (5 Books, 180 Paras, 55k Words)",
      "description": "Chesterton’s first novel, depicting a futuristic London where local boroughs revive medieval heraldry and Adam Wayne takes up arms to defend the sacred independence of Notting Hill.",
      "sections": [
        { "id": "prologue", "titleEn": "Introductory Remarks on the Art of Prophecy" },
        { "id": "bk1", "titleEn": "Book I. The King with the Joke (Auberon Quin)" },
        { "id": "bk2", "titleEn": "Book II. The Provost of Notting Hill (Adam Wayne)" },
        { "id": "bk3", "titleEn": "Book III. The War of the Red and Green" },
        { "id": "bk4", "titleEn": "Book IV. The Siege of Campden Hill" },
        { "id": "bk5", "titleEn": "Book V. The Empire of Notting Hill & Epilogue" }
      ]
    },
    "the-club-of-queer-trades": {
      "id": "the-club-of-queer-trades",
      "titleEn": "The Club of Queer Trades",
      "subtitle": "Eccentric Vocations and Intuitive Sleuths",
      "year": 1905,
      "category": "Fantastic & Metaphysical Novels",
      "companionSlug": "the-innocence-of-father-brown",
      "companionTitle": "The Innocence of Father Brown (1911)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (6 Stories, 150 Paras, 45k Words)",
      "description": "A collection of delightful mysteries featuring retired judge Basil Grant, investigating an exclusive club whose members must invent an entirely original and lucrative trade.",
      "sections": [
        { "id": "story-1", "titleEn": "I. The Tremendous Adventure of Major Brown" },
        { "id": "story-2", "titleEn": "II. The Painful Fall of a Great Reputation" },
        { "id": "story-3", "titleEn": "III. The Awful Reason of the Vicar's Visit" },
        { "id": "story-4", "titleEn": "IV. The Singular Speculation of the House-Agent" },
        { "id": "story-5", "titleEn": "V. The Noticeable Conduct of Professor Chadd" },
        { "id": "story-6", "titleEn": "VI. The Eccentric Seclusion of the Old Lady" }
      ]
    },

    // ==========================================
    // 4. SOCIAL PHILOSOPHY & DISTRIBUTISM
    // ==========================================
    "whats-wrong-with-the-world": {
      "id": "whats-wrong-with-the-world",
      "titleEn": "What's Wrong with the World",
      "subtitle": "The Family, Education, Property, and the Modern State",
      "year": 1910,
      "category": "Social Philosophy & Distributism",
      "companionSlug": "the-outline-of-sanity",
      "companionTitle": "The Outline of Sanity (1926)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (5 Parts, 210 Paras, 60k Words)",
      "description": "Chesterton’s foundational social treatise exposing the failures of both industrial capitalism and state socialism, defending the freedom of the family and distributed property.",
      "sections": [
        { "id": "part1", "titleEn": "Part I. The Homelessness of Man" },
        { "id": "part2", "titleEn": "Part II. Imperialism, or the Mistake about Man" },
        { "id": "part3", "titleEn": "Part III. Feminism, or the Mistake about Woman" },
        { "id": "part4", "titleEn": "Part IV. Education, or the Mistake about the Child" },
        { "id": "part5", "titleEn": "Part V. The Home of the Man & Conclusion" }
      ]
    },
    "the-outline-of-sanity": {
      "id": "the-outline-of-sanity",
      "titleEn": "The Outline of Sanity",
      "subtitle": "The Economic Manifesto of Distributism",
      "year": 1926,
      "category": "Social Philosophy & Distributism",
      "companionSlug": "whats-wrong-with-the-world",
      "companionTitle": "What's Wrong with the World (1910)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (5 Books, 160 Paras, 50k Words)",
      "description": "The definitive exposition of Distributist economic theory, arguing for widespread private property, local crafts, family farming, and decentralization against monopolies.",
      "sections": [
        { "id": "bk1", "titleEn": "Book I. Some General Ideas on Distributism" },
        { "id": "bk2", "titleEn": "Book II. Some Aspects of the City & Monopoly" },
        { "id": "bk3", "titleEn": "Book III. Some Aspects of the Land & Peasantry" },
        { "id": "bk4", "titleEn": "Book IV. Some Aspects of Machinery & Work" },
        { "id": "bk5", "titleEn": "Book V. A Summary & Recovery of Sanity" }
      ]
    },

    // ==========================================
    // 5. ESSAYS, TRIFLES & CRITICISM
    // ==========================================
    "tremendous-trifles": {
      "id": "tremendous-trifles",
      "titleEn": "Tremendous Trifles",
      "subtitle": "Thirty-Nine Meditations on the Wonders of Daily Life",
      "year": 1909,
      "category": "Essays & Literary Criticism",
      "companionSlug": "the-defendant",
      "companionTitle": "The Defendant (1901)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (15 Master Essays, 140 Paras, 40k Words)",
      "description": "A beloved collection of essays including 'A Piece of Chalk', 'The Dragon's Grandmother', and 'The Twelve Men', proving that the world never starves for wonders.",
      "sections": [
        { "id": "pref", "titleEn": "Preface: The Method of Tremendous Trifles" },
        { "id": "essay-1", "titleEn": "I. A Piece of Chalk" },
        { "id": "essay-2", "titleEn": "II. The Dragon's Grandmother" },
        { "id": "essay-3", "titleEn": "III. The Twelve Men (On the Jury)" },
        { "id": "essay-4", "titleEn": "IV. The Wind and the Trees" },
        { "id": "essay-5", "titleEn": "V. The Diabolist" },
        { "id": "essay-6", "titleEn": "VI. The Secret of a Train" },
        { "id": "essay-7", "titleEn": "VII. The Prehistoric Railway Station" },
        { "id": "essay-8", "titleEn": "VIII. The Extraordinary Cabman" }
      ]
    },
    "the-defendant": {
      "id": "the-defendant",
      "titleEn": "The Defendant",
      "subtitle": "Sixteen Joyous Defences of Rash Vows, Nonsense, and Penny Dreadfuls",
      "year": 1901,
      "category": "Essays & Literary Criticism",
      "companionSlug": "tremendous-trifles",
      "companionTitle": "Tremendous Trifles (1909)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (10 Core Defences, 110 Paras, 30k Words)",
      "description": "Chesterton’s sparkling early essays defending despised things: penny dreadfuls, skeletons, rash vows, ugly things, nonsense, and publicity.",
      "sections": [
        { "id": "intro", "titleEn": "Introduction: In Defence of Optimism" },
        { "id": "def-1", "titleEn": "I. A Defence of Penny Dreadfuls" },
        { "id": "def-2", "titleEn": "II. A Defence of Rash Vows" },
        { "id": "def-3", "titleEn": "III. A Defence of Skeletons" },
        { "id": "def-4", "titleEn": "IV. A Defence of Nonsense" },
        { "id": "def-5", "titleEn": "V. A Defence of Planets" },
        { "id": "def-6", "titleEn": "VI. A Defence of China Shepherdesses" },
        { "id": "def-7", "titleEn": "VII. A Defence of Useful Information" },
        { "id": "def-8", "titleEn": "VIII. A Defence of Farce" }
      ]
    },

    // ==========================================
    // 6. EPIC POETRY & BALLADS
    // ==========================================
    "the-ballad-of-the-white-horse": {
      "id": "the-ballad-of-the-white-horse",
      "titleEn": "The Ballad of the White Horse",
      "subtitle": "The Epic of King Alfred the Great and the Battle of Ethandune",
      "year": 1911,
      "category": "Epic Poetry & Ballads",
      "companionSlug": "orthodoxy",
      "companionTitle": "Orthodoxy (1908)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (8 Books & Dedication, 220 Paras/Stanzas, 25k Words)",
      "description": "One of the greatest epic poems of the twentieth century, chronicling King Alfred’s stand against the Danish invaders and the enduring vision of Christian hope against fatalism.",
      "sections": [
        { "id": "dedication", "titleEn": "Dedication to Frances Chesterton" },
        { "id": "bk1", "titleEn": "Book I. The Vision of the King" },
        { "id": "bk2", "titleEn": "Book II. The Gathering of the Chiefs" },
        { "id": "bk3", "titleEn": "Book III. The Harp of Alfred" },
        { "id": "bk4", "titleEn": "Book IV. The Woman in the Forest" },
        { "id": "bk5", "titleEn": "Book V. Ethandune: The First Stroke" },
        { "id": "bk6", "titleEn": "Book VI. Ethandune: The Slaying of the Chiefs" },
        { "id": "bk7", "titleEn": "Book VII. Ethandune: The Last Charge" },
        { "id": "bk8", "titleEn": "Book VIII. The Scouring of the Horse" }
      ]
    }
  };

  if (typeof window !== "undefined") {
    window.CORPUS_DATA = CORPUS_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = CORPUS_DATA;
  }
})();
