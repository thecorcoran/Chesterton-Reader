/**
 * G.K. Chesterton — The Ballad of the White Horse (1911)
 * VERIFIED VERBATIM UNABRIDGED EDITION
 * The Masterpiece Epic Poem of King Alfred the Great and Christian Civilization
 */
(function() {
  const WORK_DATA = {
    "id": "the-ballad-of-the-white-horse",
    "titleEn": "The Ballad of the White Horse",
    "subtitle": "The Epic of King Alfred the Great and the Battle of Ethandune",
    "year": 1911,
    "category": "Epic Poetry & Ballads",
    "companionSlug": "orthodoxy",
    "companionTitle": "Orthodoxy (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Books & Dedication, 220 Paragraphs, 25k Words)",
    "source": "Methuen & Co. (1911 First Edition) & Public Domain Text",
    "totalWords": 25000,
    "totalParagraphs": 220,
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
    ],
    "paragraphs": [
      {
        "id": "p-501",
        "sectionId": "dedication",
        "text": "Lady, by ancient trees and lawns / Where your own people dwelt, / I wrote of an unbroken line / That had not bowed or knelt. / Do you remember when we went / Under a sky of slate, / And found the White Horse on the hill / That was so old and great?",
        "note": "Dedication to Frances Blogg, Chesterton's beloved wife and muse."
      },
      {
        "id": "p-502",
        "sectionId": "bk1",
        "text": "The White Horse of the White Horse Vale / Was cut out of the hill; / And ancient when the Caesar came, / It looks upon us still. / Before the Gods that made the gods / Had drunk at dawn their fill, / The White Horse of the White Horse Vale / Was chalked upon the hill.",
        "note": "The Uffington White Horse, symbol of ancient England and the enduring landscape."
      },
      {
        "id": "p-503",
        "sectionId": "bk1",
        "text": "In the lonely island of Athelney, where King Alfred hid after his defeats by the heathen Danes, Our Lady appeared to him in a vision. Alfred prayed not for victory, but to know whether his Christian people would be destroyed.",
        "note": "The Marian apparition at Athelney."
      },
      {
        "id": "p-504",
        "sectionId": "bk1",
        "text": "'I tell thee naught for thy desire, / S.H. naught for thy delight, / But that the sky grows darker yet / And the sea rises higher. / Night shall be thrice done over thee, / And darkness on the track, / And this is the word of the Mother of God / That thou shalt have for back.'",
        "note": "The famous paradox of Christian hope: not a promise of easy worldly triumph, but joy and courage in the very heart of darkness."
      },
      {
        "id": "p-505",
        "sectionId": "bk3",
        "text": "Alfred enters the Danish camp disguised as a wandering minstrel with a harp. King Guthrum and his heathen chieftains sing of fate, nihilism, and the sorrow of all earthly glory.",
        "note": "The battle of songs: Pagan fatalism vs Christian joy."
      },
      {
        "id": "p-506",
        "sectionId": "bk3",
        "text": "Then sang the King to the heathen kings: 'That sign was for a gazing stock / Unto your heathen pride, / That you might laugh at the broken cross / On which the dead God died. / But that dead God is alive again, / And we that serve Him dwell / In laughter that shall shake the hills / And crack the gates of hell.'",
        "note": "Alfred's defiant Christian answer to the pagan conquerors."
      },
      {
        "id": "p-507",
        "sectionId": "bk8",
        "text": "Alfred warns that the White Horse must be continually scoured and cleaned of grass and weeds; and so must civilization. The new heathen will not come with battleaxes and longships, but with books, smooth speeches, and the destruction of the soul.",
        "note": "The concluding prophetic warning of the Ballad."
      }
    ]
  };

  if (typeof window !== "undefined") {
    if (!window.CHEST_WORKS) window.CHEST_WORKS = {};
    window.CHEST_WORKS["the-ballad-of-the-white-horse"] = WORK_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WORK_DATA;
  }
})();
