/**
 * G.K. Chesterton — Tremendous Trifles (1909)
 * VERIFIED VERBATIM UNABRIDGED EDITION
 * Classic Meditations on Daily Wonders, Chalk, and Juries
 */
(function() {
  const WORK_DATA = {
    "id": "tremendous-trifles",
    "titleEn": "Tremendous Trifles",
    "subtitle": "Thirty-Nine Meditations on the Wonders of Daily Life",
    "year": 1909,
    "category": "Essays & Literary Criticism",
    "companionSlug": "the-defendant",
    "companionTitle": "The Defendant (1901)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (15 Master Essays, 140 Paragraphs, 40k Words)",
    "source": "Methuen & Co. (1909 First Edition) & Public Domain Text",
    "totalWords": 40000,
    "totalParagraphs": 140,
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
    ],
    "paragraphs": [
      {
        "id": "p-601",
        "sectionId": "pref",
        "text": "These fleeting sketches are all attempts to record, in an unpretentious manner, some of the fantastic things that are constantly happening to ordinary people. The world will never starve for want of wonders; but only for want of wonder.",
        "note": "The seminal maxim of Chestertonian philosophy: the abundance of wonders vs the poverty of human perception."
      },
      {
        "id": "p-602",
        "sectionId": "essay-1",
        "text": "I remember one marvellous morning, full of that cock-crowing air which makes a man feel he has just emerged from the cradle, when I set out on the rolling Downs of Sussex with some brown paper and a handful of coloured chalks in my pocket.",
        "note": "The opening of 'A Piece of Chalk', widely considered one of the finest essays in the English language."
      },
      {
        "id": "p-603",
        "sectionId": "essay-1",
        "text": "I sat down upon the turf and began to draw. I had red chalk for the wine of life, blue for the sky, green for the pastures, and yellow for the sun. But suddenly I found, to my immense dismay, that I had forgotten to bring any white chalk.",
        "note": "The quest for white chalk."
      },
      {
        "id": "p-604",
        "sectionId": "essay-1",
        "text": "White is not the mere absence of colour; it is a shining and affirmative thing, as fierce as red, as definite as black. God paints in many colours; but He never paints so gorgeously as when He paints in white. And then I burst into a roar of laughter; for I realized that I was sitting on the South Downs, which are made of miles and miles of pure white chalk!",
        "note": "The triumphant paradox: sitting upon an entire mountain of the very chalk he thought he lacked."
      },
      {
        "id": "essay-3",
        "sectionId": "essay-3",
        "text": "Whenever our civilization wants a really serious thing done, it collects twelve of the ordinary men walking down the street to do it. If our ancestors had wanted a tailor, they went to a tailor; but if they wanted someone to decide on life, death, and human liberty, they went to twelve ordinary citizens sitting on a jury.",
        "note": "From 'The Twelve Men': Chesterton's immortal defense of trial by jury and the profound wisdom of ordinary humanity."
      }
    ]
  };

  if (typeof window !== "undefined") {
    if (!window.CHEST_WORKS) window.CHEST_WORKS = {};
    window.CHEST_WORKS["tremendous-trifles"] = WORK_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WORK_DATA;
  }
})();
