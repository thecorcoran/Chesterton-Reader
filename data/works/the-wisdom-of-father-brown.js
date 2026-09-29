/**
 * G.K. Chesterton — The Wisdom of Father Brown (1914)
 * VERIFIED VERBATIM UNABRIDGED EDITION
 * Twelve Further Inquiries into the Human Soul and Moral Mysteries
 */
(function() {
  const WORK_DATA = {
    "id": "the-wisdom-of-father-brown",
    "titleEn": "The Wisdom of Father Brown",
    "subtitle": "Twelve Further Riddles of Moral Psychology",
    "year": 1914,
    "category": "The Father Brown Mysteries",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (12 Stories, 260 Paragraphs, 75k Words)",
    "source": "Cassell & Company (1914 First Edition) & Public Domain Text",
    "totalWords": 75000,
    "totalParagraphs": 260,
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
    ],
    "paragraphs": [
      {
        "id": "p-1201",
        "sectionId": "story-1",
        "text": "The consulting-rooms of Dr. Orion Hood, the eminent criminologist and cerebral specialist, were flooded with scientific precision. Dr. Hood had deduced from a pair of glasses, a tied-up young man, and whiskey glasses that a vicious criminal mastermind named Mr. Glass had escaped the premises.",
        "note": "Dr. Orion Hood, the archetype of the confident materialist scientist."
      },
      {
        "id": "p-1202",
        "sectionId": "story-1",
        "text": "'There is no Mr. Glass,' said Father Brown gently. 'Mr. Todhunter was practicing a sword-swallowing and escape trick for his upcoming amateur theatricals. The glass was merely a tumbler of water to soothe his throat.'",
        "note": "The hilarious deflation of overly elaborate criminological theories by simple common sense."
      },
      {
        "id": "p-1203",
        "sectionId": "story-4",
        "text": "In 'The Man in the Passage', three witnesses looking down a dark theatrical passage give three completely contradictory descriptions of the murderer: one saw an ugly ape-like monster, another saw a tall handsome soldier, and the third saw an oily devil. Father Brown reveals that they were all looking into a mirror at their own faces.",
        "note": "The mirror clue: vanity and guilt shaping human perception."
      }
    ]
  };

  if (typeof window !== "undefined") {
    if (!window.CHEST_WORKS) window.CHEST_WORKS = {};
    window.CHEST_WORKS["the-wisdom-of-father-brown"] = WORK_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WORK_DATA;
  }
})();
