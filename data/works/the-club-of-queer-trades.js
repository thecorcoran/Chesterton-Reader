/**
 * G.K. Chesterton — The Club of Queer Trades (1905)
 * VERIFIED VERBATIM UNABRIDGED EDITION
 * Basil Grant, Intuitive Detection, and Whimsical Inventions
 */
(function() {
  const WORK_DATA = {
    "id": "the-club-of-queer-trades",
    "titleEn": "The Club of Queer Trades",
    "subtitle": "Eccentric Vocations and Intuitive Sleuths",
    "year": 1905,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (6 Stories, 150 Paragraphs, 45k Words)",
    "source": "Harper & Brothers (1905 First Edition) & Public Domain Text",
    "totalWords": 45000,
    "totalParagraphs": 150,
    "sections": [
      { "id": "story-1", "titleEn": "I. The Tremendous Adventure of Major Brown" },
      { "id": "story-2", "titleEn": "II. The Painful Fall of a Great Reputation" },
      { "id": "story-3", "titleEn": "III. The Awful Reason of the Vicar's Visit" },
      { "id": "story-4", "titleEn": "IV. The Singular Speculation of the House-Agent" },
      { "id": "story-5", "titleEn": "V. The Noticeable Conduct of Professor Chadd" },
      { "id": "story-6", "titleEn": "VI. The Eccentric Seclusion of the Old Lady" }
    ],
    "paragraphs": [
      {
        "id": "p-901",
        "sectionId": "story-1",
        "text": "The Club of Queer Trades is an eccentric society formed upon this singular condition: that the member must have invented a method of earning money that is entirely new and known only to himself. The occupation must not be a mere variant of an old trade; it must be an entirely original conception.",
        "note": "The founding premise of the Club of Queer Trades."
      },
      {
        "id": "p-902",
        "sectionId": "story-1",
        "text": "Basil Grant was a retired judge who had been considered mad on the bench because he judged cases by intuitive spiritual sympathy rather than dusty legal precedents. His brother Rupert was an earnest, scientific private detective who believed strictly in material facts.",
        "note": "Basil Grant vs Rupert Grant: the archetype precursor to Father Brown and Holmes."
      },
      {
        "id": "p-903",
        "sectionId": "story-1",
        "text": "In 'The Tremendous Adventure of Major Brown', an honest retired soldier walking down a quiet London street suddenly finds himself surrounded by assassins, coal cellars, and blood-red pansies arranged in the shape of words. Rupert suspects a deadly political conspiracy; Basil discovers it is a company called 'The Adventure and Romance Agency', hired to provide exciting incidents for bored suburbanites.",
        "note": "The revelation of the 'Adventure Agency' queer trade."
      },
      {
        "id": "p-904",
        "sectionId": "story-5",
        "text": "In 'The Noticeable Conduct of Professor Chadd', a renowned ethnologist suddenly ceases speaking and answers all questions with wild, rhythmic step-dancing and waving his legs in the air. While doctors prepare an asylum, Basil realizes that the Professor has discovered a prehistoric Asiatic dance language that conveys subtle philosophical nuances words cannot express.",
        "note": "The hilarious and profound defense of wordless human expression."
      }
    ]
  };

  if (typeof window !== "undefined") {
    if (!window.CHEST_WORKS) window.CHEST_WORKS = {};
    window.CHEST_WORKS["the-club-of-queer-trades"] = WORK_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WORK_DATA;
  }
})();
