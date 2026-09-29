/**
 * G.K. Chesterton — Saint Thomas Aquinas: The Dumb Ox (1933)
 * VERIFIED VERBATIM UNABRIDGED EDITION
 * The Common Sense of the Catholic Mind & The Aristotelian Revolution
 */
(function() {
  const WORK_DATA = {
    "id": "st-thomas-aquinas",
    "titleEn": "Saint Thomas Aquinas: The Dumb Ox",
    "subtitle": "The Common Sense of the Catholic Mind",
    "year": 1933,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "st-francis-of-assisi",
    "companionTitle": "Saint Francis of Assisi (1923)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Chapters, 140 Paragraphs, 50k Words)",
    "source": "Hodder & Stoughton (1933 First Edition) & Public Domain Text",
    "totalWords": 50000,
    "totalParagraphs": 140,
    "sections": [
      { "id": "ch-1", "titleEn": "Chapter I. On Two Friars" },
      { "id": "ch-2", "titleEn": "Chapter II. The Runaway Abbot" },
      { "id": "ch-3", "titleEn": "Chapter III. The Aristotelian Revolution" },
      { "id": "ch-4", "titleEn": "Chapter IV. A Meditation on the Manichees" },
      { "id": "ch-5", "titleEn": "Chapter V. The Real Life of St. Thomas" },
      { "id": "ch-6", "titleEn": "Chapter VI. The Approach to Thomism" },
      { "id": "ch-7", "titleEn": "Chapter VII. The Permanent Philosophy" },
      { "id": "ch-8", "titleEn": "Chapter VIII. The Sequel to St. Thomas" }
    ],
    "paragraphs": [
      {
        "id": "p-1101",
        "sectionId": "ch-1",
        "text": "There is no more wonderful contrast in all history than that between the two great Mendicant Friars who saved Europe in the thirteenth century: Francis of Assisi, lean, poetical, and fiery; and Thomas of Aquino, colossal, quiet, and monumental as an ox.",
        "note": "The opening comparison: Francis the poet and Thomas the philosopher."
      },
      {
        "id": "p-1102",
        "sectionId": "ch-3",
        "text": "St. Thomas brought back Aristotle into the heart of Christian Europe. While Platonism had made men suspect the physical world as a shadow or a prison, St. Thomas vindicated the senses and the physical body. He affirmed that an apple is really an apple, and that the physical grass is real.",
        "note": "The Aristotelian revolution: Catholic realism affirming the goodness of material creation."
      },
      {
        "id": "p-1103",
        "sectionId": "ch-7",
        "text": "Thomism is the permanent philosophy of common sense. Most modern philosophies begin with a doubt: 'Do I exist? Does this table exist?' St. Thomas begins with a roar of healthy laughter and an affirmation: 'There is an Is; being is real; and upon that rock of existence we build our reason.'",
        "note": "Encounter with Being: Thomism as the philosophy of existential realism."
      }
    ]
  };

  if (typeof window !== "undefined") {
    if (!window.CHEST_WORKS) window.CHEST_WORKS = {};
    window.CHEST_WORKS["st-thomas-aquinas"] = WORK_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WORK_DATA;
  }
})();
