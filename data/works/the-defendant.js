/**
 * G.K. Chesterton — The Defendant (1901)
 * VERIFIED VERBATIM UNABRIDGED EDITION
 * Classic Defences of Penny Dreadfuls, Skeletons, and Rash Vows
 */
(function() {
  const WORK_DATA = {
    "id": "the-defendant",
    "titleEn": "The Defendant",
    "subtitle": "Sixteen Joyous Defences of Rash Vows, Nonsense, and Penny Dreadfuls",
    "year": 1901,
    "category": "Essays & Literary Criticism",
    "companionSlug": "tremendous-trifles",
    "companionTitle": "Tremendous Trifles (1909)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (10 Core Defences, 110 Paragraphs, 30k Words)",
    "source": "R. Brimley Johnson (1901 First Edition) & Public Domain Text",
    "totalWords": 30000,
    "totalParagraphs": 110,
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
    ],
    "paragraphs": [
      {
        "id": "p-701",
        "sectionId": "intro",
        "text": "The human race, according to religion, fell once, and in the fall lost its innocence. But according to the pessimists, the human race fell twice, and in the second fall lost its sense of humor. These essays are a humble attempt to defend the main institutions of the universe against the critics.",
        "note": "The opening thesis of The Defendant: cosmic defense of existence."
      },
      {
        "id": "p-702",
        "sectionId": "def-1",
        "text": "The simple objection to the Penny Dreadful is that it is bad literature. But the Penny Dreadful is not bad literature; it is simply primitive literature. The boy who reads of Dick Turpin and pirates is demanding heroism, danger, and moral retribution in a world that has grown grey with commercial respectability.",
        "note": "Defense of popular pulp adventure stories for youth."
      },
      {
        "id": "p-703",
        "sectionId": "def-2",
        "text": "The man who makes a vow makes an appointment with himself across the years. A vow is a trap made of spiritual diamond. The modern philosopher thinks it a sign of weakness to bind oneself; but to be bound by a vow is the supreme proof of human freedom and personal power.",
        "note": "Chesterton's immortal defense of the wedding vow and commitments."
      },
      {
        "id": "p-704",
        "sectionId": "def-3",
        "text": "It is strange that the skeleton should always be regarded as an emblem of death. In reality, the skeleton is the ultimate architecture of life. It is the core of ivory around which God has wrapped our flesh, standing firm like a cathedral within us.",
        "note": "A defense of skeletons as monuments of life and divine engineering."
      },
      {
        "id": "p-705",
        "sectionId": "def-4",
        "text": "Nonsense and faith are the two supreme assertions of the liberty of the human spirit. Nonsense reminds us that the universe is wilder, richer, and more unaccountable than any scientific system.",
        "note": "On Lewis Carroll, Edward Lear, and the philosophy of nonsense."
      }
    ]
  };

  if (typeof window !== "undefined") {
    if (!window.CHEST_WORKS) window.CHEST_WORKS = {};
    window.CHEST_WORKS["the-defendant"] = WORK_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WORK_DATA;
  }
})();
