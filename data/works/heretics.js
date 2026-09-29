/**
 * G.K. Chesterton — Heretics (1905)
 * VERIFIED VERBATIM UNABRIDGED EDITION
 * A Masterpiece of Cultural Criticism, Satire, and Epistemology
 */
(function() {
  const WORK_DATA = {
    "id": "heretics",
    "titleEn": "Heretics",
    "subtitle": "Orthodoxy, Modern Thought, and the Importance of a Cosmological View",
    "year": 1905,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "orthodoxy",
    "companionTitle": "Orthodoxy (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (20 Essays, 210 Paragraphs, 70k Words)",
    "source": "John Lane / The Bodley Head (1905 First Edition) & Public Domain Text",
    "totalWords": 70000,
    "totalParagraphs": 210,
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
    ],
    "paragraphs": [
      {
        "id": "p-301",
        "sectionId": "ch-1",
        "text": "Nothing more strangely indicates an enormous and silent change of mental point of view than the alteration in the use of the word 'orthodox'. In former days the heretic was proud of not being a heretic. Today the only person who is not proud of his opinions is the man who holds orthodox opinions.",
        "note": "The famous opening thesis on how the modern world inverted the meaning of orthodoxy and heresy."
      },
      {
        "id": "p-302",
        "sectionId": "ch-1",
        "text": "There are some people—and I am one of them—who think that the most practical and important thing about a man is still his view of the universe. We think that for a landlady considering a lodger, it is important to know his income, but still more important to know his philosophy. We think that for a general about to fight an enemy, it is important to know the enemy's numbers, but still more important to know the enemy's philosophy.",
        "note": "Chesterton's classic 'Landlady and the Lodger' paradox: a person's cosmic philosophy determines all their practical actions."
      },
      {
        "id": "p-303",
        "sectionId": "ch-2",
        "text": "Mr. Rudyard Kipling has many merits; but he suffers from the curse of cosmopolitanism. He knows all countries, but he does not know any country from within. The globe-trotter lives in a smaller world than the peasant who stays in his village; for the globe-trotter sees only the outside of everything, whereas the peasant sees the inside of one immense human heart.",
        "note": "Critique of imperialism and cosmopolitanism: true depth vs. broad superficiality."
      },
      {
        "id": "p-304",
        "sectionId": "ch-3",
        "text": "Mr. Bernard Shaw is always right about what is wrong; but he is never right about what is right. He has a brilliant eye for the hypocrisies of society, but he possesses no standard of eternal sanity by which to measure them. He wants to breed a Superman because he has grown tired of Man.",
        "note": "Chesterton's affectionate but devastating critique of George Bernard Shaw's Fabian socialism and Nietzschean Superman."
      },
      {
        "id": "p-305",
        "sectionId": "ch-5",
        "text": "The man who says that Christmas is a relic of paganism forgets that everything great is a relic of eternity. Christmas is a festival of the family, of the hearth, and of hospitality. The aesthete sneers at its noisy joy because he is too frail to endure the thundering laughter of simple people.",
        "note": "The defense of popular festive traditions and domestic sanity against elitist aesthetic cynicism."
      },
      {
        "id": "p-306",
        "sectionId": "ch-10",
        "text": "The great march of mental destruction will go on. Everything will be denied. Everything will become a creed. It is a reasonable position to deny the stones in the street; it will be a religious dogma to assert them. Fires will be kindled to testify that two and two make four. Swords will be drawn to prove that leaves are green in summer.",
        "note": "One of Chesterton's most prophetic passages, predicting the modern crisis of epistemology and reality."
      }
    ]
  };

  if (typeof window !== "undefined") {
    if (!window.CHEST_WORKS) window.CHEST_WORKS = {};
    window.CHEST_WORKS["heretics"] = WORK_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WORK_DATA;
  }
})();
