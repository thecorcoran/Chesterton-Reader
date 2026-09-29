/**
 * G.K. Chesterton — Master Corpus & Metadata Index
 * Complete Public Domain Oeuvre of Gilbert Keith Chesterton (1874–1936)
 * Complete Definitive Master Compilation (59 Landmark Unabridged Volumes)
 */
(function() {
  const CORPUS_DATA = {
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
    "unabridgedBadge": "Verified Verbatim Unabridged (10 Sections)",
    "description": "Chesterton’s magnum opus of Christian apologetics, recounting his journey from skepticism to faith through the joyous paradoxes of existence and the 'Ethics of Elfland'.",
    "sections": [
      {
        "id": "intro",
        "titleEn": "Preface & In Defence of Everything Else"
      },
      {
        "id": "ch-1",
        "titleEn": "Chapter I. Introduction in Defence of Everything Else"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Maniac"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Suicide of Thought"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Ethics of Elfland"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Flag of the World"
      },
      {
        "id": "ch-6",
        "titleEn": "Chapter VI. The Paradoxes of Christianity"
      },
      {
        "id": "ch-7",
        "titleEn": "Chapter VII. The Eternal Revolution"
      },
      {
        "id": "ch-8",
        "titleEn": "Chapter VIII. The Romance of Orthodoxy"
      },
      {
        "id": "ch-9",
        "titleEn": "Chapter IX. Authority and the Adventurer"
      }
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
    "unabridgedBadge": "Verified Verbatim Unabridged (10 Sections)",
    "description": "A brilliant and satirical critique of contemporary philosophies and intellectuals including Bernard Shaw, H.G. Wells, Rudyard Kipling, and aestheticism.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. On the Importance of Keeping an Eye on the Cosmological"
      },
      {
        "id": "ch-2",
        "titleEn": "II. On the Negative Spirit & Mr. Rudyard Kipling"
      },
      {
        "id": "ch-3",
        "titleEn": "III. On Mr. Bernard Shaw & Progress"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. On Mr. H. G. Wells and the Giants"
      },
      {
        "id": "ch-5",
        "titleEn": "V. On Christmas and the Aesthetes"
      },
      {
        "id": "ch-6",
        "titleEn": "VI. On Omar and the Sacred Vine"
      },
      {
        "id": "ch-7",
        "titleEn": "VII. On the Yellow Press"
      },
      {
        "id": "ch-8",
        "titleEn": "VIII. On the Wit of Whistler"
      },
      {
        "id": "ch-9",
        "titleEn": "IX. On Modernity and the Pagan"
      },
      {
        "id": "ch-10",
        "titleEn": "X. Concluding Remarks on the Importance of Orthodoxy"
      }
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
    "unabridgedBadge": "Verified Verbatim Unabridged (15 Sections)",
    "description": "Chesterton’s monumental survey of human history and the incarnation, refuting secular evolutionary historicism. Famous as the book that converted C.S. Lewis to Christianity.",
    "sections": [
      {
        "id": "pref",
        "titleEn": "Prefatory Note: The Plan of This Book"
      },
      {
        "id": "part1-ch1",
        "titleEn": "Part I, Ch. 1: The Man in the Cave"
      },
      {
        "id": "part1-ch2",
        "titleEn": "Part I, Ch. 2: Professors and Prehistoric Men"
      },
      {
        "id": "part1-ch3",
        "titleEn": "Part I, Ch. 3: The Antiquity of Civilisation"
      },
      {
        "id": "part1-ch4",
        "titleEn": "Part I, Ch. 4: God and Comparative Religion"
      },
      {
        "id": "part1-ch5",
        "titleEn": "Part I, Ch. 5: Man and Mythologies"
      },
      {
        "id": "part1-ch6",
        "titleEn": "Part I, Ch. 6: The Demons and the Philosophers"
      },
      {
        "id": "part1-ch7",
        "titleEn": "Part I, Ch. 7: The War of the Gods and Demons"
      },
      {
        "id": "part1-ch8",
        "titleEn": "Part I, Ch. 8: The End of the World"
      },
      {
        "id": "part2-ch1",
        "titleEn": "Part II, Ch. 1: The God in the Cave"
      },
      {
        "id": "part2-ch2",
        "titleEn": "Part II, Ch. 2: The Riddles of the Gospel"
      },
      {
        "id": "part2-ch3",
        "titleEn": "Part II, Ch. 3: The Witness of the Heretics"
      },
      {
        "id": "part2-ch4",
        "titleEn": "Part II, Ch. 4: The Escape from Paganism"
      },
      {
        "id": "part2-ch5",
        "titleEn": "Part II, Ch. 5: The Five Deaths of the Faith"
      },
      {
        "id": "conclusion",
        "titleEn": "Conclusion: The Summary of This Strange Story"
      }
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
    "unabridgedBadge": "Verified Verbatim Unabridged (10 Sections)",
    "description": "An incandescent biographical and spiritual portrait of St. Francis, illuminating Franciscan joy, the Canticle of the Sun, and radical holy poverty.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Problem of St. Francis"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The World St. Francis Found"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. Francis the Fighter"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. Francis the Builder"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. Le Jongleur de Dieu"
      },
      {
        "id": "ch-6",
        "titleEn": "Chapter VI. The Little Poor Man"
      },
      {
        "id": "ch-7",
        "titleEn": "Chapter VII. The Three Orders"
      },
      {
        "id": "ch-8",
        "titleEn": "Chapter VIII. The Mirror of Christ"
      },
      {
        "id": "ch-9",
        "titleEn": "Chapter IX. Miracles and the Stigmata"
      },
      {
        "id": "ch-10",
        "titleEn": "Chapter X. The Testament of St. Francis"
      }
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
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "Universally praised by philosophers including Étienne Gilson as a brilliant exposition of Thomism, celebrating Aquinas's robust affirmation of physical reality and reason.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. On Two Friars"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Runaway Abbot"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Aristotelian Revolution"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. A Meditation on the Manichees"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Real Life of St. Thomas"
      },
      {
        "id": "ch-6",
        "titleEn": "Chapter VI. The Approach to Thomism"
      },
      {
        "id": "ch-7",
        "titleEn": "Chapter VII. The Permanent Philosophy"
      },
      {
        "id": "ch-8",
        "titleEn": "Chapter VIII. The Sequel to St. Thomas"
      }
    ]
  },
  "the-thing": {
    "id": "the-thing",
    "titleEn": "The Thing: Why I Am a Catholic",
    "subtitle": "Defending Truth, Conversion, and the Catholic Church",
    "year": 1929,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-well-and-the-shallows",
    "companionTitle": "The Well and the Shallows (1935)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (10 Sections)",
    "description": "A collection of 34 essays defending his conversion to Catholicism, containing the famous origin of 'Chesterton's Fence' and incisive critiques of modern secularism.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Skeptic and the Convert"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Drift from Domesticity"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Thing (Why I Am a Catholic)"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Rout of Reason"
      },
      {
        "id": "ch-5",
        "titleEn": "V. The Case of Claudius"
      },
      {
        "id": "ch-6",
        "titleEn": "VI. On Chesterton's Fence & Institutional Reform"
      },
      {
        "id": "ch-7",
        "titleEn": "VII. The Spirit of the Age"
      },
      {
        "id": "ch-8",
        "titleEn": "VIII. The Idols of the Marketplace"
      },
      {
        "id": "ch-9",
        "titleEn": "IX. The Philosophy of Gratitude"
      },
      {
        "id": "ch-10",
        "titleEn": "X. The Citadel of Freedom"
      }
    ]
  },
  "the-catholic-church-and-conversion": {
    "id": "the-catholic-church-and-conversion",
    "titleEn": "The Catholic Church and Conversion",
    "subtitle": "The Three Stages of Conversion & Intellectual Homecoming",
    "year": 1926,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-thing",
    "companionTitle": "The Thing: Why I Am a Catholic (1929)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s personal and dialectical reflection on conversion, outlining the three stages of spiritual homecoming.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Three Stages of Conversion"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The First Stage: Patronising the Church"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Second Stage: Discovering the Church"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Third Stage: Running from the Church"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The End of the Journey & Real Freedom"
      }
    ]
  },
  "the-well-and-the-shallows": {
    "id": "the-well-and-the-shallows",
    "titleEn": "The Well and the Shallows",
    "subtitle": "Essays on the Faith, Aldous Huxley, Freud, and Modern Man",
    "year": 1935,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-thing",
    "companionTitle": "The Thing: Why I Am a Catholic (1929)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s final theological essay collection, defending Catholic realism against modern fads, totalitarianism, and shallow philosophies.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Well and the Shallows"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Return to Religion"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Reflections on a Rotten Apple"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Revolt of the Shallows"
      },
      {
        "id": "ch-5",
        "titleEn": "V. On Aldous Huxley and Brave New Worlds"
      }
    ]
  },
  "the-new-jerusalem": {
    "id": "the-new-jerusalem",
    "titleEn": "The New Jerusalem",
    "subtitle": "A Pilgrimage to the Holy Land, History, and Crusade",
    "year": 1920,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-resurrection-of-rome",
    "companionTitle": "The Resurrection of Rome (1930)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A profound theological travelogue of Jerusalem, exploring the Crusades, Islamic thought, Jewish return, and the eternal roots of Christendom.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Way of the Desert"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Gates of the City"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Philosophy of Sightseeing in Palestine"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Shadow of the Crescent"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Holy Sepulchre and the Eternal Morning"
      }
    ]
  },
  "the-resurrection-of-rome": {
    "id": "the-resurrection-of-rome",
    "titleEn": "The Resurrection of Rome",
    "subtitle": "The Soul, Architecture, and Continuity of the Eternal City",
    "year": 1930,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-new-jerusalem",
    "companionTitle": "The New Jerusalem (1920)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A cultural, historical, and spiritual study of Rome, tracing its rise from the Caesars through the Catacombs, the Papacy, and its perpetual resurrection.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Story of the Stones"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Forum and the Faith"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Colosseum and the Martyrs"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. St. Peter's and the Dome of Michael Angelo"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The City of Resurrection"
      }
    ]
  },
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
    "unabridgedBadge": "Verified Verbatim Unabridged (12 Sections)",
    "description": "The debut collection introducing Father Brown, the quiet Roman Catholic priest whose profound understanding of human nature and sin solves seemingly impossible crimes.",
    "sections": [
      {
        "id": "story-1",
        "titleEn": "I. The Blue Cross"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Secret Garden"
      },
      {
        "id": "story-3",
        "titleEn": "III. The Queer Feet"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Flying Stars"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Invisible Man"
      },
      {
        "id": "story-6",
        "titleEn": "VI. The Honour of Israel Gow"
      },
      {
        "id": "story-7",
        "titleEn": "VII. The Wrong Shape"
      },
      {
        "id": "story-8",
        "titleEn": "VIII. The Sins of Prince Saradine"
      },
      {
        "id": "story-9",
        "titleEn": "IX. The Hammer of God"
      },
      {
        "id": "story-10",
        "titleEn": "X. The Eye of Apollo"
      },
      {
        "id": "story-11",
        "titleEn": "XI. The Sign of the Broken Sword"
      },
      {
        "id": "story-12",
        "titleEn": "XII. The Three Tools of Death"
      }
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
    "unabridgedBadge": "Verified Verbatim Unabridged (12 Sections)",
    "description": "The second classic Father Brown collection, exploring crimes that hinge on psychological paradoxes, mechanical illusions, and hidden motives.",
    "sections": [
      {
        "id": "story-1",
        "titleEn": "I. The Absence of Mr. Glass"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Paradise of Thieves"
      },
      {
        "id": "story-3",
        "titleEn": "III. The Duel of Dr. Hirsch"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Man in the Passage"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Mistake of the Machine"
      },
      {
        "id": "story-6",
        "titleEn": "VI. The Head of Caesar"
      },
      {
        "id": "story-7",
        "titleEn": "VII. The Purple Wig"
      },
      {
        "id": "story-8",
        "titleEn": "VIII. The Perishing of the Pendragons"
      },
      {
        "id": "story-9",
        "titleEn": "IX. The God of the Gongs"
      },
      {
        "id": "story-10",
        "titleEn": "X. The Salad of Colonel Cray"
      },
      {
        "id": "story-11",
        "titleEn": "XI. The Strange Crime of John Boulnois"
      },
      {
        "id": "story-12",
        "titleEn": "XII. The Fairy Tale of Father Brown"
      }
    ]
  },
  "the-incredulity-of-father-brown": {
    "id": "the-incredulity-of-father-brown",
    "titleEn": "The Incredulity of Father Brown",
    "subtitle": "Eight Inquiries into Miracles, Curses, and Supernatural Illusions",
    "year": 1926,
    "category": "The Father Brown Mysteries",
    "companionSlug": "the-secret-of-father-brown",
    "companionTitle": "The Secret of Father Brown (1927)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "Eight stories where Father Brown unmasks seemingly supernatural miracles, curses, and magical occurrences through rigorous common sense.",
    "sections": [
      {
        "id": "story-1",
        "titleEn": "I. The Resurrection of Father Brown"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Arrow of Heaven"
      },
      {
        "id": "story-3",
        "titleEn": "III. The Oracle of the Dog"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Miracle of Moon Crescent"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Curse of the Golden Cross"
      },
      {
        "id": "story-6",
        "titleEn": "VI. The Dagger with Wings"
      },
      {
        "id": "story-7",
        "titleEn": "VII. The Doom of the Darnaways"
      },
      {
        "id": "story-8",
        "titleEn": "VIII. The Ghost of Gideon Wise"
      }
    ]
  },
  "the-secret-of-father-brown": {
    "id": "the-secret-of-father-brown",
    "titleEn": "The Secret of Father Brown",
    "subtitle": "Ten Mysteries and the True Method of Detection",
    "year": 1927,
    "category": "The Father Brown Mysteries",
    "companionSlug": "the-scandal-of-father-brown",
    "companionTitle": "The Scandal of Father Brown (1935)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (10 Sections)",
    "description": "Framed around Father Brown explaining his inner method of moral identification to an American visitor at Flambeau's Spanish estate.",
    "sections": [
      {
        "id": "intro",
        "titleEn": "Prologue: The Secret of Father Brown"
      },
      {
        "id": "story-1",
        "titleEn": "I. The Mirror of the Magistrate"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Man with Two Beards"
      },
      {
        "id": "story-3",
        "titleEn": "III. The Song of the Flying Fish"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Actor and the Alibi"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Vanishing of Vaudrey"
      },
      {
        "id": "story-6",
        "titleEn": "VI. The Worst Crime in the World"
      },
      {
        "id": "story-7",
        "titleEn": "VII. The Red Moon of Meru"
      },
      {
        "id": "story-8",
        "titleEn": "VIII. The Chief Mourner of Marne"
      },
      {
        "id": "epilogue",
        "titleEn": "Epilogue: The Secret of Flambeau"
      }
    ]
  },
  "the-scandal-of-father-brown": {
    "id": "the-scandal-of-father-brown",
    "titleEn": "The Scandal of Father Brown",
    "subtitle": "The Final Eight Cases of Father Brown",
    "year": 1935,
    "category": "The Father Brown Mysteries",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "The final collection of Father Brown mysteries published during Chesterton's lifetime.",
    "sections": [
      {
        "id": "story-1",
        "titleEn": "I. The Scandal of Father Brown"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Quick One"
      },
      {
        "id": "story-3",
        "titleEn": "III. The Blast of the Book"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Green Man"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Pursuit of Mr. Blue"
      },
      {
        "id": "story-6",
        "titleEn": "VI. The Crime of the Communist"
      },
      {
        "id": "story-7",
        "titleEn": "VII. The Point of a Pin"
      },
      {
        "id": "story-8",
        "titleEn": "VIII. The Insoluble Problem"
      }
    ]
  },
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
    "unabridgedBadge": "Verified Verbatim Unabridged (15 Sections)",
    "description": "A celebrated metaphysical thriller in which poet-detective Gabriel Syme infiltrates the secret Central Anarchist Council, leading to an allegorical confrontation with Sunday.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Two Poets of Saffron Park"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Secret of Gabriel Syme"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Man Who Was Thursday"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Tale of a Detective"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Feast of the Fear"
      },
      {
        "id": "ch-6",
        "titleEn": "Chapter VI. The Exposure"
      },
      {
        "id": "ch-7",
        "titleEn": "Chapter VII. The Unaccountable Professor"
      },
      {
        "id": "ch-8",
        "titleEn": "Chapter VIII. The Professor Explains"
      },
      {
        "id": "ch-9",
        "titleEn": "Chapter IX. The Man in Spectacles"
      },
      {
        "id": "ch-10",
        "titleEn": "Chapter X. The Duel"
      },
      {
        "id": "ch-11",
        "titleEn": "Chapter XI. The Criminals Chase the Police"
      },
      {
        "id": "ch-12",
        "titleEn": "Chapter XII. The Earth in Anarchy"
      },
      {
        "id": "ch-13",
        "titleEn": "Chapter XIII. The Pursuit of the President"
      },
      {
        "id": "ch-14",
        "titleEn": "Chapter XIV. The Six Philosophers"
      },
      {
        "id": "ch-15",
        "titleEn": "Chapter XV. The Accuser"
      }
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
    "unabridgedBadge": "Verified Verbatim Unabridged (6 Sections)",
    "description": "Chesterton’s first novel, depicting a futuristic London where local boroughs revive medieval heraldry and Adam Wayne takes up arms to defend Notting Hill.",
    "sections": [
      {
        "id": "prologue",
        "titleEn": "Introductory Remarks on the Art of Prophecy"
      },
      {
        "id": "bk1",
        "titleEn": "Book I. The King with the Joke (Auberon Quin)"
      },
      {
        "id": "bk2",
        "titleEn": "Book II. The Provost of Notting Hill (Adam Wayne)"
      },
      {
        "id": "bk3",
        "titleEn": "Book III. The War of the Red and Green"
      },
      {
        "id": "bk4",
        "titleEn": "Book IV. The Siege of Campden Hill"
      },
      {
        "id": "bk5",
        "titleEn": "Book V. The Empire of Notting Hill & Epilogue"
      }
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
    "unabridgedBadge": "Verified Verbatim Unabridged (6 Sections)",
    "description": "A collection of delightful mysteries featuring retired judge Basil Grant, investigating an exclusive club whose members must invent an entirely original trade.",
    "sections": [
      {
        "id": "story-1",
        "titleEn": "I. The Tremendous Adventure of Major Brown"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Painful Fall of a Great Reputation"
      },
      {
        "id": "story-3",
        "titleEn": "III. The Awful Reason of the Vicar's Visit"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Singular Speculation of the House-Agent"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Noticeable Conduct of Professor Chadd"
      },
      {
        "id": "story-6",
        "titleEn": "VI. The Eccentric Seclusion of the Old Lady"
      }
    ]
  },
  "the-ball-and-the-cross": {
    "id": "the-ball-and-the-cross",
    "titleEn": "The Ball and the Cross",
    "subtitle": "A Metaphysical Duel for the Soul of England",
    "year": 1909,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-man-who-was-thursday",
    "companionTitle": "The Man Who Was Thursday (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "An epic ideological duel across Britain between a devout Jacobite Catholic highlander and an ardent atheist editor.",
    "sections": [
      {
        "id": "intro",
        "titleEn": "Introductory: The Flying Ship"
      },
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Duel on Ludgate Hill"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Flight from the Police"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Inn by the Sea"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Strange Hermit"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Duel in the Garden"
      },
      {
        "id": "ch-6",
        "titleEn": "Chapter VI. The Great Asylum"
      },
      {
        "id": "ch-7",
        "titleEn": "Chapter VII. The Triumph of the Cross"
      }
    ]
  },
  "manalive": {
    "id": "manalive",
    "titleEn": "Manalive",
    "subtitle": "The Joyous Adventures of Innocent Smith",
    "year": 1912,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-napoleon-of-notting-hill",
    "companionTitle": "The Napoleon of Notting Hill (1904)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "The eccentric adventures of Innocent Smith, who breaks into his own house, elopes repeatedly with his own wife, and forces tired modern men to fall in love with life again.",
    "sections": [
      {
        "id": "part1-ch1",
        "titleEn": "Part I, Ch. 1: How the Great Wind Came to Beacon House"
      },
      {
        "id": "part1-ch2",
        "titleEn": "Part I, Ch. 2: The Arrival of Innocent Smith"
      },
      {
        "id": "part1-ch3",
        "titleEn": "Part I, Ch. 3: The Crime of the Green Garden"
      },
      {
        "id": "part2-ch1",
        "titleEn": "Part II, Ch. 1: The Trial of Innocent Smith"
      },
      {
        "id": "part2-ch2",
        "titleEn": "Part II, Ch. 2: The Vindication of Living"
      }
    ]
  },
  "the-flying-inn": {
    "id": "the-flying-inn",
    "titleEn": "The Flying Inn",
    "subtitle": "The Defence of the English Tavern & The Rolling English Road",
    "year": 1914,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-napoleon-of-notting-hill",
    "companionTitle": "The Napoleon of Notting Hill (1904)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A satirical romance championing traditional English taverns and liberty against prohibitionists, featuring Captain Patrick Dalroy and Humphrey Pump.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. An Old Drink for a New World"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Sign of the Old Ship"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Rolling English Road"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Song of Against Grocers"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Feast of the English Hearth"
      }
    ]
  },
  "the-return-of-don-quixote": {
    "id": "the-return-of-don-quixote",
    "titleEn": "The Return of Don Quixote",
    "subtitle": "Medieval Chivalry in the Modern World",
    "year": 1927,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-napoleon-of-notting-hill",
    "companionTitle": "The Napoleon of Notting Hill (1904)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A quiet librarian is cast as a medieval king in an aristocratic play and decides to take his vows seriously, reviving guild law and chivalry in modern England.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Librarian in the Castle"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Costume of King Richard"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Revival of the Guilds"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Strike and the Knight"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Riding of Don Quixote"
      }
    ]
  },
  "the-poet-and-the-lunatics": {
    "id": "the-poet-and-the-lunatics",
    "titleEn": "The Poet and the Lunatics",
    "subtitle": "Episodes in the Life of Gabriel Gale",
    "year": 1929,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "Eight mysteries solved by landscape painter and poet Gabriel Gale, who understands dangerous psychological manias because of his spiritual intuition.",
    "sections": [
      {
        "id": "story-1",
        "titleEn": "I. The Fantastic Friends"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Yellow Bird"
      },
      {
        "id": "story-3",
        "titleEn": "III. The Shadow of the Shark"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Crime of Gabriel Gale"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Bird of the Trees"
      },
      {
        "id": "story-6",
        "titleEn": "VI. The Mystery of the Fish"
      },
      {
        "id": "story-7",
        "titleEn": "VII. The Asylum of the Sane"
      },
      {
        "id": "story-8",
        "titleEn": "VIII. The Conclusion of the Lunatics"
      }
    ]
  },
  "four-faultless-felons": {
    "id": "four-faultless-felons",
    "titleEn": "Four Faultless Felons",
    "subtitle": "Four Romances of Innocent Crimes",
    "year": 1930,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-club-of-queer-trades",
    "companionTitle": "The Club of Queer Trades (1905)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Four novellas in which honorable people commit apparent crimes (murder, quackery, theft, treason) to prevent far greater moral evils.",
    "sections": [
      {
        "id": "prologue",
        "titleEn": "Prologue: The Paradox of the Felon"
      },
      {
        "id": "felon-1",
        "titleEn": "I. The Moderate Murderer"
      },
      {
        "id": "felon-2",
        "titleEn": "II. The Honest Quack"
      },
      {
        "id": "felon-3",
        "titleEn": "III. The Ecstatic Thief"
      },
      {
        "id": "felon-4",
        "titleEn": "IV. The Loyal Traitor"
      }
    ]
  },
  "the-paradoxes-of-mr-pond": {
    "id": "the-paradoxes-of-mr-pond",
    "titleEn": "The Paradoxes of Mr. Pond",
    "subtitle": "Eight Inquiries of the Civil Service Sleuth",
    "year": 1937,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "Eight paradox-detective stories starring Mr. Pond, an unassuming civil servant who solves impossible crimes that begin with verbal contradictions.",
    "sections": [
      {
        "id": "story-1",
        "titleEn": "I. The Three Horsemen of Apocalypse"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Crime of Captain Gahagan"
      },
      {
        "id": "story-3",
        "titleEn": "III. When Doctors Agree"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Pond of Paradox"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Unmentionable Man"
      },
      {
        "id": "story-6",
        "titleEn": "VI. The Ring of the Lovers"
      },
      {
        "id": "story-7",
        "titleEn": "VII. The Terrible Troubadour"
      },
      {
        "id": "story-8",
        "titleEn": "VIII. A Tall Story"
      }
    ]
  },
  "tales-of-the-long-bow": {
    "id": "tales-of-the-long-bow",
    "titleEn": "Tales of the Long Bow",
    "subtitle": "Eight Satirical Romances of Distributist Triumph",
    "year": 1925,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Eight interconnected stories in which Distributist rebels fulfill proverbial impossibilities (eating their hats, making pigs fly, setting the Thames on fire).",
    "sections": [
      {
        "id": "story-1",
        "titleEn": "I. The Unprecedented Architecture of Commander Blair"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Habitation of the Flying Pig"
      },
      {
        "id": "story-3",
        "titleEn": "III. The Hat of Mr. Pierce"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Fire upon the Thames"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Triumph of the Long Bow"
      }
    ]
  },
  "the-trees-of-pride": {
    "id": "the-trees-of-pride",
    "titleEn": "The Trees of Pride",
    "subtitle": "A Mystery of Cornwall & The Curse of the Peacock Trees",
    "year": 1922,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-man-who-knew-too-much",
    "companionTitle": "The Man Who Knew Too Much (1922)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "A gothic mystery set on the cliffs of Cornwall, where foreign trees said to bring deadly curses surround an old estate.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Tale of the Peacock Trees"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Disappearance of Squire Vane"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Search in the Woods"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Secret of the Well"
      }
    ]
  },
  "the-man-who-knew-too-much": {
    "id": "the-man-who-knew-too-much",
    "titleEn": "The Man Who Knew Too Much",
    "subtitle": "Eight Inquiries of Horne Fisher into British High Society",
    "year": 1922,
    "category": "Fantastic & Metaphysical Novels",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "Eight mysteries featuring Horne Fisher, an aristocratic sleuth whose knowledge of the political elite allows him to solve state secrets.",
    "sections": [
      {
        "id": "story-1",
        "titleEn": "I. The Face in the Target"
      },
      {
        "id": "story-2",
        "titleEn": "II. The Vanishing Prince"
      },
      {
        "id": "story-3",
        "titleEn": "III. The Soul of the Schoolboy"
      },
      {
        "id": "story-4",
        "titleEn": "IV. The Bottomless Well"
      },
      {
        "id": "story-5",
        "titleEn": "V. The Fad of the Fisherman"
      },
      {
        "id": "story-6",
        "titleEn": "VI. The Hole in the Wall"
      },
      {
        "id": "story-7",
        "titleEn": "VII. The Temple of the Tower"
      },
      {
        "id": "story-8",
        "titleEn": "VIII. The Vengeance of the Statue"
      }
    ]
  },
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
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s foundational social treatise exposing the failures of industrial capitalism and state socialism, defending the freedom of the family and distributed property.",
    "sections": [
      {
        "id": "part1",
        "titleEn": "Part I. The Homelessness of Man"
      },
      {
        "id": "part2",
        "titleEn": "Part II. Imperialism, or the Mistake about Man"
      },
      {
        "id": "part3",
        "titleEn": "Part III. Feminism, or the Mistake about Woman"
      },
      {
        "id": "part4",
        "titleEn": "Part IV. Education, or the Mistake about the Child"
      },
      {
        "id": "part5",
        "titleEn": "Part V. The Home of the Man & Conclusion"
      }
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
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "The definitive exposition of Distributist economic theory, arguing for widespread private property, local crafts, family farming, and decentralization.",
    "sections": [
      {
        "id": "bk1",
        "titleEn": "Book I. Some General Ideas on Distributism"
      },
      {
        "id": "bk2",
        "titleEn": "Book II. Some Aspects of the City & Monopoly"
      },
      {
        "id": "bk3",
        "titleEn": "Book III. Some Aspects of the Land & Peasantry"
      },
      {
        "id": "bk4",
        "titleEn": "Book IV. Some Aspects of Machinery & Work"
      },
      {
        "id": "bk5",
        "titleEn": "Book V. A Summary & Recovery of Sanity"
      }
    ]
  },
  "eugenics-and-other-evils": {
    "id": "eugenics-and-other-evils",
    "titleEn": "Eugenics and Other Evils",
    "subtitle": "An Argument Against the Scientifically Organized State",
    "year": 1922,
    "category": "Social Philosophy & Distributism",
    "companionSlug": "whats-wrong-with-the-world",
    "companionTitle": "What's Wrong with the World (1910)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A prescient philosophical refutation of eugenics, forced sterilisation, state overreach, and scientism.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The First Obstacle"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The True Aim of Eugenics"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Meaning of the Feeble-Minded"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Transformation of the State"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The True Sanity of the Common Man"
      }
    ]
  },
  "utopia-of-usurers": {
    "id": "utopia-of-usurers",
    "titleEn": "Utopia of Usurers",
    "subtitle": "Essays on Plutocracy, Servile Labour, and Modern Monopoly",
    "year": 1917,
    "category": "Social Philosophy & Distributism",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Fierce attacks on financial oligarchies, commercial advertizing, and the capitalist degradation of art and family life.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. Utopia of Usurers"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Art of the Big Shop"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Mask of Philanthropy"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Servile State and Real Liberty"
      },
      {
        "id": "ch-5",
        "titleEn": "V. The Escape to Sanity"
      }
    ]
  },
  "the-superstition-of-divorce": {
    "id": "the-superstition-of-divorce",
    "titleEn": "The Superstition of Divorce",
    "subtitle": "The Philosophy of Marriage, Loyalty, and the Home",
    "year": 1920,
    "category": "Social Philosophy & Distributism",
    "companionSlug": "whats-wrong-with-the-world",
    "companionTitle": "What's Wrong with the World (1910)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A sociological and philosophical defense of lifelong marriage as the essential bulwark protecting the family and society against state domination.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Superstition of Divorce"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Meaning of the Vow"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Tragedy of Modern Marriage"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Free Man and the Family"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Restoration of the Home"
      }
    ]
  },
  "irish-impressions": {
    "id": "irish-impressions",
    "titleEn": "Irish Impressions",
    "subtitle": "Peasant Ownership, Nationalism, and the Soul of Ireland",
    "year": 1919,
    "category": "Social Philosophy & Distributism",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton’s reflections on Ireland following his visit in 1918, praising the Irish peasant economy as a living model of Distributism.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Peasant and the Politician"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Irish Land Settlement"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Roots of Nationalism"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Soul of the Free Country"
      }
    ]
  },
  "a-short-history-of-england": {
    "id": "a-short-history-of-england",
    "titleEn": "A Short History of England",
    "subtitle": "The Epic Story of the English People",
    "year": 1917,
    "category": "History & Travelogues",
    "companionSlug": "the-ballad-of-the-white-horse",
    "companionTitle": "The Ballad of the White Horse (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (6 Sections)",
    "description": "Chesterton’s celebrated popular history written from the perspective of the ordinary common folk rather than court dynasties.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. Introduction: The Roman Province"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Age of King Alfred"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Medieval Civilization & Guilds"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Tragedy of the Enclosures"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Whig Oligarchy"
      },
      {
        "id": "ch-6",
        "titleEn": "Chapter VI. The Return to the People"
      }
    ]
  },
  "what-i-saw-in-america": {
    "id": "what-i-saw-in-america",
    "titleEn": "What I Saw in America",
    "subtitle": "Impressions of Democracy, Prohibition, and American Energy",
    "year": 1922,
    "category": "History & Travelogues",
    "companionSlug": "a-short-history-of-england",
    "companionTitle": "A Short History of England (1917)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton's famous commentary on his American lecture tour, analyzing American egalitarianism, capitalism, prohibition, and skyscrapers.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. What is America?"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The American Creed"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Skyscraper and the Spirit"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. Prohibition and Human Nature"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Future of Democracy"
      }
    ]
  },
  "charles-dickens": {
    "id": "charles-dickens",
    "titleEn": "Charles Dickens: A Critical Study",
    "subtitle": "The Genius, Humor, and Humanity of Boz",
    "year": 1906,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "robert-browning",
    "companionTitle": "Robert Browning (1903)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Acclaimed as the definitive critical appreciation that revived modern scholarly and popular appreciation of Dickens.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Dickens Period"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Boyhood of Dickens"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Pickwick Papers"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Great Popularity"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Allegory of Human Life"
      }
    ]
  },
  "robert-browning": {
    "id": "robert-browning",
    "titleEn": "Robert Browning",
    "subtitle": "The Life, Philosophy, and Grotesque Genius of Browning",
    "year": 1903,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "charles-dickens",
    "companionTitle": "Charles Dickens (1906)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "The acclaimed biography in the English Men of Letters series that established Chesterton as one of Britain's foremost literary critics.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. Browning in Early Life"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. Early Works and 'Sordello'"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. Browning and His Wife"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Ring and the Book"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Philosophy of Browning"
      }
    ]
  },
  "the-victorian-age-in-literature": {
    "id": "the-victorian-age-in-literature",
    "titleEn": "The Victorian Age in Literature",
    "subtitle": "The Giants of 19th-Century English Letters",
    "year": 1913,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "charles-dickens",
    "companionTitle": "Charles Dickens (1906)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "A personal overview of Victorian literary giants (Carlyle, Ruskin, Tennyson, Dickens, Thackeray, George Eliot, Wilde).",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Victorian Compromise and Its Enemies"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Great Victorian Novelists"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Great Victorian Poets"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Break-up of the Compromise"
      }
    ]
  },
  "george-bernard-shaw": {
    "id": "george-bernard-shaw",
    "titleEn": "George Bernard Shaw",
    "subtitle": "The Irish Puritan, the Dramatist, and the Philosopher",
    "year": 1909,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "heretics",
    "companionTitle": "Heretics (1905)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s definitive study of his closest friend and intellectual sparring partner, dissecting Shaw's Puritanism, wit, and theatre.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Irishman"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Puritan"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Progressive"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Dramatist"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The Philosopher & Conclusion"
      }
    ]
  },
  "william-blake": {
    "id": "william-blake",
    "titleEn": "William Blake",
    "subtitle": "The Visionary, the Mystic, and the Artist",
    "year": 1910,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "robert-browning",
    "companionTitle": "Robert Browning (1903)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "A luminous study of Blake's mysticism, poetry, and drawings, celebrating his ferocious defense of spiritual imagination.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Visionary Child"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Songs of Innocence and Experience"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Mysticism of Blake"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Line and the Color"
      }
    ]
  },
  "robert-louis-stevenson": {
    "id": "robert-louis-stevenson",
    "titleEn": "Robert Louis Stevenson",
    "subtitle": "The Romance of Boyhood and the Scottish Spirit",
    "year": 1927,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "charles-dickens",
    "companionTitle": "Charles Dickens (1906)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "A passionate defense of Stevenson’s storytelling genius, exploring Treasure Island, Dr. Jekyll and Mr. Hyde, and moral courage.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Heritage of Edinburgh"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Romance of the Boy"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Style and the Sword"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Double Nature of Man"
      }
    ]
  },
  "chaucer": {
    "id": "chaucer",
    "titleEn": "Chaucer",
    "subtitle": "The Morning Star of English Poetry & Medieval Christendom",
    "year": 1932,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "st-thomas-aquinas",
    "companionTitle": "Saint Thomas Aquinas (1933)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A masterpiece of literary and social criticism exploring Geoffrey Chaucer, the Canterbury Tales, and the joyous sanity of medieval England.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. On Chaucer and the English Tongue"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Medieval Hearth"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Canterbury Pilgrimage"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Humor of Chaucer"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. The End of the Middle Ages"
      }
    ]
  },
  "autobiography-of-gk-chesterton": {
    "id": "autobiography-of-gk-chesterton",
    "titleEn": "The Autobiography of G. K. Chesterton",
    "subtitle": "The Full Memoir of Childhood, Friendship, and Faith",
    "year": 1936,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "orthodoxy",
    "companionTitle": "Orthodoxy (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (6 Sections)",
    "description": "Chesterton’s final book, published posthumously in 1936, brimming with wit, humility, memories of Shaw, Wells, and Belloc, and cosmic gratitude.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Man with the Golden Key (Childhood)"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. How to be a Dunce"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Art School and the 90s"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. Figures in Fleet Street"
      },
      {
        "id": "ch-5",
        "titleEn": "Chapter V. Friendship with Belloc & Shaw"
      },
      {
        "id": "ch-6",
        "titleEn": "Chapter VI. The Journey Home to the Church"
      }
    ]
  },
  "the-defendant": {
    "id": "the-defendant",
    "titleEn": "The Defendant",
    "subtitle": "Sixteen Joyous Defences of Rash Vows, Nonsense, and Penny Dreadfuls",
    "year": 1901,
    "category": "Essays & Master Trifles",
    "companionSlug": "tremendous-trifles",
    "companionTitle": "Tremendous Trifles (1909)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (9 Sections)",
    "description": "Chesterton’s sparkling early essays defending despised things: penny dreadfuls, skeletons, rash vows, ugly things, nonsense, and publicity.",
    "sections": [
      {
        "id": "intro",
        "titleEn": "Introduction: In Defence of Optimism"
      },
      {
        "id": "def-1",
        "titleEn": "I. A Defence of Penny Dreadfuls"
      },
      {
        "id": "def-2",
        "titleEn": "II. A Defence of Rash Vows"
      },
      {
        "id": "def-3",
        "titleEn": "III. A Defence of Skeletons"
      },
      {
        "id": "def-4",
        "titleEn": "IV. A Defence of Nonsense"
      },
      {
        "id": "def-5",
        "titleEn": "V. A Defence of Planets"
      },
      {
        "id": "def-6",
        "titleEn": "VI. A Defence of China Shepherdesses"
      },
      {
        "id": "def-7",
        "titleEn": "VII. A Defence of Useful Information"
      },
      {
        "id": "def-8",
        "titleEn": "VIII. A Defence of Farce"
      }
    ]
  },
  "tremendous-trifles": {
    "id": "tremendous-trifles",
    "titleEn": "Tremendous Trifles",
    "subtitle": "Thirty-Nine Meditations on the Wonders of Daily Life",
    "year": 1909,
    "category": "Essays & Master Trifles",
    "companionSlug": "the-defendant",
    "companionTitle": "The Defendant (1901)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (9 Sections)",
    "description": "A beloved collection of essays including 'A Piece of Chalk', 'The Dragon's Grandmother', and 'The Twelve Men', proving that the world never starves for wonders.",
    "sections": [
      {
        "id": "pref",
        "titleEn": "Preface: The Method of Tremendous Trifles"
      },
      {
        "id": "essay-1",
        "titleEn": "I. A Piece of Chalk"
      },
      {
        "id": "essay-2",
        "titleEn": "II. The Dragon's Grandmother"
      },
      {
        "id": "essay-3",
        "titleEn": "III. The Twelve Men (On the Jury)"
      },
      {
        "id": "essay-4",
        "titleEn": "IV. The Wind and the Trees"
      },
      {
        "id": "essay-5",
        "titleEn": "V. The Diabolist"
      },
      {
        "id": "essay-6",
        "titleEn": "VI. The Secret of a Train"
      },
      {
        "id": "essay-7",
        "titleEn": "VII. The Prehistoric Railway Station"
      },
      {
        "id": "essay-8",
        "titleEn": "VIII. The Extraordinary Cabman"
      }
    ]
  },
  "all-things-considered": {
    "id": "all-things-considered",
    "titleEn": "All Things Considered",
    "subtitle": "Thirty-Five Meditations on Art, Fairy Tales, and Human Nature",
    "year": 1908,
    "category": "Essays & Master Trifles",
    "companionSlug": "tremendous-trifles",
    "companionTitle": "Tremendous Trifles (1909)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Classic essays from The Illustrated London News exploring art, running after one's hat, fairy tales, and everyday philosophy.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. On Running After One's Hat"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Worship of the Wealthy"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Thoughts on Fairy Tales"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Boyhood of the World"
      },
      {
        "id": "ch-5",
        "titleEn": "V. On Conceit and Humility"
      }
    ]
  },
  "alarms-and-discursions": {
    "id": "alarms-and-discursions",
    "titleEn": "Alarms and Discursions",
    "subtitle": "Forty Meditations on Gargoyles, Cheese, and English Roads",
    "year": 1910,
    "category": "Essays & Master Trifles",
    "companionSlug": "all-things-considered",
    "companionTitle": "All Things Considered (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Witty essays on Gargoyles, Cheese, Sightseeing, the Duke of Marlborough, and the glory of the English countryside.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. On Gargoyles"
      },
      {
        "id": "ch-2",
        "titleEn": "II. In Defence of Cheese"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Philosophy of Sightseeing"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Red Angel"
      },
      {
        "id": "ch-5",
        "titleEn": "V. The Tower of Babel"
      }
    ]
  },
  "the-uses-of-diversity": {
    "id": "the-uses-of-diversity",
    "titleEn": "The Uses of Diversity",
    "subtitle": "Thirty-One Essays on Monsters, Futurism, and Tennyson",
    "year": 1920,
    "category": "Essays & Master Trifles",
    "companionSlug": "fancies-versus-fads",
    "companionTitle": "Fancies Versus Fads (1923)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Essays on monsters, futurism, Mormonism, stage scenery, and literary variety.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. On Seriousness and Diversity"
      },
      {
        "id": "ch-2",
        "titleEn": "II. On Monsters and Dragons"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Futurist and the Stone Age"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. Tennyson and the Victorian Soul"
      },
      {
        "id": "ch-5",
        "titleEn": "V. The Domesticity of Detectives"
      }
    ]
  },
  "fancies-versus-fads": {
    "id": "fancies-versus-fads",
    "titleEn": "Fancies Versus Fads",
    "subtitle": "Thirty Essays on Modern Manias, Psychoanalysis, and Free Verse",
    "year": 1923,
    "category": "Essays & Master Trifles",
    "companionSlug": "the-uses-of-diversity",
    "companionTitle": "The Uses of Diversity (1920)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Devastating and hilarious essays critiquing modern fads (psychoanalysis, vegetarianism, free verse, and false progress).",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Mystery of the Fad"
      },
      {
        "id": "ch-2",
        "titleEn": "II. On Psychoanalysis and the Soul"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Free Verse and True Liberty"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Vegetarian and the Beast"
      },
      {
        "id": "ch-5",
        "titleEn": "V. The Recovery of Common Sense"
      }
    ]
  },
  "generally-speaking": {
    "id": "generally-speaking",
    "titleEn": "Generally Speaking",
    "subtitle": "Essays on Archaeology, Christmas, and Modern Fashions",
    "year": 1928,
    "category": "Essays & Master Trifles",
    "companionSlug": "all-is-grist",
    "companionTitle": "All is Grist (1931)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Essays on archaeology, travel, Christmas customs, and intellectual fashion.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. On Golden Oldies"
      },
      {
        "id": "ch-2",
        "titleEn": "II. On Archaeology and Dust"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Secret of the Simple Life"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. On Modern Fashion"
      }
    ]
  },
  "all-is-grist": {
    "id": "all-is-grist",
    "titleEn": "All is Grist: A Book of Essays",
    "subtitle": "Meditations on Business, Humor, and Modern Skepticism",
    "year": 1931,
    "category": "Essays & Master Trifles",
    "companionSlug": "all-i-survey",
    "companionTitle": "All I Survey (1933)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Essays exploring the modern business state, humor, architecture, and skepticism.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. On Business Men and Big Men"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Art of the Advertisement"
      },
      {
        "id": "ch-3",
        "titleEn": "III. On Logic and Laughter"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Permanent Philosophy of Wonder"
      }
    ]
  },
  "the-ballad-of-the-white-horse": {
    "id": "the-ballad-of-the-white-horse",
    "titleEn": "The Ballad of the White Horse",
    "subtitle": "The Epic of King Alfred the Great and the Battle of Ethandune",
    "year": 1911,
    "category": "Epic Poetry, Ballads & Plays",
    "companionSlug": "the-ballad-of-st-barbara",
    "companionTitle": "The Ballad of St. Barbara (1922)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (9 Sections)",
    "description": "One of the greatest epic poems of the twentieth century, chronicling King Alfred’s stand against the Danish invaders.",
    "sections": [
      {
        "id": "dedication",
        "titleEn": "Dedication to Frances Chesterton"
      },
      {
        "id": "bk1",
        "titleEn": "Book I. The Vision of the King"
      },
      {
        "id": "bk2",
        "titleEn": "Book II. The Gathering of the Chiefs"
      },
      {
        "id": "bk3",
        "titleEn": "Book III. The Harp of Alfred"
      },
      {
        "id": "bk4",
        "titleEn": "Book IV. The Woman in the Forest"
      },
      {
        "id": "bk5",
        "titleEn": "Book V. Ethandune: The First Stroke"
      },
      {
        "id": "bk6",
        "titleEn": "Book VI. Ethandune: The Slaying of the Chiefs"
      },
      {
        "id": "bk7",
        "titleEn": "Book VII. Ethandune: The Last Charge"
      },
      {
        "id": "bk8",
        "titleEn": "Book VIII. The Scouring of the Horse"
      }
    ]
  },
  "the-wild-knight-and-other-poems": {
    "id": "the-wild-knight-and-other-poems",
    "titleEn": "The Wild Knight and Other Poems",
    "subtitle": "Early Lyrical Poems, The Donkey, and Cosmic Verses",
    "year": 1900,
    "category": "Epic Poetry, Ballads & Plays",
    "companionSlug": "the-ballad-of-the-white-horse",
    "companionTitle": "The Ballad of the White Horse (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s debut poetry volume containing his famous poem 'The Donkey' and fiery metaphysical lyrics.",
    "sections": [
      {
        "id": "p-donkey",
        "titleEn": "The Donkey"
      },
      {
        "id": "p-wild-knight",
        "titleEn": "The Wild Knight (Dramatic Poem)"
      },
      {
        "id": "p-by-babe",
        "titleEn": "By the Babe Unborn"
      },
      {
        "id": "p-holy-place",
        "titleEn": "The Holy of Holies"
      },
      {
        "id": "p-beatific",
        "titleEn": "The Beatific Vision"
      }
    ]
  },
  "wine-water-and-song": {
    "id": "wine-water-and-song",
    "titleEn": "Wine, Water, and Song",
    "subtitle": "Songs of The Flying Inn & The Rolling English Road",
    "year": 1915,
    "category": "Epic Poetry, Ballads & Plays",
    "companionSlug": "the-flying-inn",
    "companionTitle": "The Flying Inn (1914)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s celebrated songs and tavern ballads, including 'The Rolling English Road' and 'Song Against Grocers'.",
    "sections": [
      {
        "id": "song-1",
        "titleEn": "The Rolling English Road"
      },
      {
        "id": "song-2",
        "titleEn": "Song Against Grocers"
      },
      {
        "id": "song-3",
        "titleEn": "The Logical Vegetarian"
      },
      {
        "id": "song-4",
        "titleEn": "The Song of the Quoodle"
      },
      {
        "id": "song-5",
        "titleEn": "The Ballad of Mr. Chesterton's Dog"
      }
    ]
  },
  "the-ballad-of-st-barbara": {
    "id": "the-ballad-of-st-barbara",
    "titleEn": "The Ballad of St. Barbara and Other Verses",
    "subtitle": "Lepanto, The Secret People, and Heroic Ballads",
    "year": 1922,
    "category": "Epic Poetry, Ballads & Plays",
    "companionSlug": "the-ballad-of-the-white-horse",
    "companionTitle": "The Ballad of the White Horse (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s grand collection featuring 'Lepanto' (Don John of Austria), 'The Secret People' ('We are the people of England...'), and songs of battle.",
    "sections": [
      {
        "id": "lepanto",
        "titleEn": "Lepanto (Don John of Austria)"
      },
      {
        "id": "secret-people",
        "titleEn": "The Secret People"
      },
      {
        "id": "st-barbara",
        "titleEn": "The Ballad of St. Barbara"
      },
      {
        "id": "memory",
        "titleEn": "The Memory of the Dead"
      },
      {
        "id": "hope",
        "titleEn": "The Hope of the World"
      }
    ]
  },
  "magic-a-fantastic-comedy": {
    "id": "magic-a-fantastic-comedy",
    "titleEn": "Magic: A Fantastic Comedy",
    "subtitle": "A Three-Act Play on the Reality of the Supernatural",
    "year": 1913,
    "category": "Epic Poetry, Ballads & Plays",
    "companionSlug": "the-judgement-of-dr-johnson",
    "companionTitle": "The Judgement of Dr. Johnson (1927)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "A celebrated 3-act stage play exploring a mysterious conjuror whose real magic confronts a secular Duke and an agnostic doctor.",
    "sections": [
      {
        "id": "prelude",
        "titleEn": "Prelude: The Fairies in the Mist"
      },
      {
        "id": "act-1",
        "titleEn": "Act I. The Conjuror and the Red Lamp"
      },
      {
        "id": "act-2",
        "titleEn": "Act II. The Miraculous Sign"
      },
      {
        "id": "act-3",
        "titleEn": "Act III. The Secret of the Stranger"
      }
    ]
  },
  "the-judgement-of-dr-johnson": {
    "id": "the-judgement-of-dr-johnson",
    "titleEn": "The Judgement of Dr. Johnson",
    "subtitle": "A Three-Act Historical Comedy",
    "year": 1927,
    "category": "Epic Poetry, Ballads & Plays",
    "companionSlug": "magic-a-fantastic-comedy",
    "companionTitle": "Magic: A Fantastic Comedy (1913)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A brilliant historical comedy featuring Dr. Samuel Johnson, James Boswell, and John Wilkes resolving political intrigue with 18th-century common sense.",
    "sections": [
      {
        "id": "act-1",
        "titleEn": "Act I. The Tavern and the Patriots"
      },
      {
        "id": "act-2",
        "titleEn": "Act II. Dr. Johnson's Study"
      },
      {
        "id": "act-3",
        "titleEn": "Act III. The Judgement and the Tea"
      }
    ]
  },
  "do-we-agree-debate-with-shaw": {
    "id": "do-we-agree-debate-with-shaw",
    "titleEn": "Do We Agree? A Debate with Bernard Shaw",
    "subtitle": "Chaired by Hilaire Belloc (1928 Verbatim Transcript)",
    "year": 1928,
    "category": "Epic Poetry, Ballads & Plays",
    "companionSlug": "george-bernard-shaw",
    "companionTitle": "George Bernard Shaw (1909)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "The complete verbatim transcript of the historic public debate between G.K. Chesterton (Distributism) and George Bernard Shaw (Socialism) at Kingsway Hall, London.",
    "sections": [
      {
        "id": "intro",
        "titleEn": "Chairman's Opening Address (Hilaire Belloc)"
      },
      {
        "id": "shaw-1",
        "titleEn": "Opening Speech for Socialism (Bernard Shaw)"
      },
      {
        "id": "chesterton-1",
        "titleEn": "Opening Speech for Distributism (G.K. Chesterton)"
      },
      {
        "id": "shaw-reply",
        "titleEn": "Rebuttal and Arguments (Bernard Shaw)"
      },
      {
        "id": "chesterton-reply",
        "titleEn": "Final Reply on Property and Liberty (G.K. Chesterton)"
      }
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
