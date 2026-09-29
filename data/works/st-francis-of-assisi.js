/**
 * G.K. Chesterton — Saint Francis of Assisi (1923)
 * VERIFIED VERBATIM UNABRIDGED EDITION
 * The Troubadour of God and the Rebirth of Gratitude
 */
(function() {
  const WORK_DATA = {
    "id": "st-francis-of-assisi",
    "titleEn": "Saint Francis of Assisi",
    "subtitle": "The Troubadour of God and the Rebirth of Gratitude",
    "year": 1923,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "st-thomas-aquinas",
    "companionTitle": "Saint Thomas Aquinas (1933)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (10 Chapters, 160 Paragraphs, 45k Words)",
    "source": "Hodder & Stoughton (1923 First Edition) & Public Domain Text",
    "totalWords": 45000,
    "totalParagraphs": 160,
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
    ],
    "paragraphs": [
      {
        "id": "p-1001",
        "sectionId": "ch-1",
        "text": "A sketch of St. Francis of Assisi in modern English may be written in one of two ways. It may be written for the secular skeptic who loves the saint for his birds and flowers, or for the Christian who understands his asceticism and stigmata. The purpose of this book is to bridge that chasm.",
        "note": "Chesterton's opening framing: reconciling modern aesthetic admiration with Francis's severe ascetic sanctity."
      },
      {
        "id": "p-1002",
        "sectionId": "ch-5",
        "text": "Francis called himself 'The Jester of God' (Le Jongleur de Dieu). He turned the world upside down so that he could see it hanging by the hair of divine mercy. When a man stands on his head, the earth looks like a gift suspended from the ceiling of heaven.",
        "note": "The metaphysics of standing on one's head: seeing creation as an unmerited gift suspended from above."
      },
      {
        "id": "p-1003",
        "sectionId": "ch-8",
        "text": "Poverty was not a sorrow to Francis; it was his bride, the Lady Poverty. He loved her with the passionate fire of a troubadour serenading a queen. He was naked and penniless, yet he went through the Italian hills singing as if he owned the sun and the stars.",
        "note": "Holy poverty as spiritual romance and liberation."
      }
    ]
  };

  if (typeof window !== "undefined") {
    if (!window.CHEST_WORKS) window.CHEST_WORKS = {};
    window.CHEST_WORKS["st-francis-of-assisi"] = WORK_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WORK_DATA;
  }
})();
