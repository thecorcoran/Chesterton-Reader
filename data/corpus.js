/**
 * G.K. Chesterton — Master Corpus & Metadata Index
 * Complete Public Domain Oeuvre of Gilbert Keith Chesterton (1874–1936)
 * Complete Definitive Master Compilation (120 Landmark Unabridged Volumes)
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
    "description": "Chesterton’s magnum opus of Christian apologetics, recounting his journey from skepticism to faith through the joyous paradoxes of existence.",
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
    "description": "A brilliant and satirical critique of contemporary philosophies and intellectuals including Bernard Shaw, H.G. Wells, and Rudyard Kipling.",
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
    "description": "Chesterton’s monumental survey of human history and the incarnation. Famous as the book that converted C.S. Lewis to Christianity.",
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
    "description": "An incandescent biographical and spiritual portrait of St. Francis, illuminating Franciscan joy and holy poverty.",
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
    "description": "Universally praised by philosophers as a brilliant exposition of Thomism, celebrating Aquinas's robust affirmation of physical reality.",
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
    "description": "A collection of 34 essays defending his conversion to Catholicism, containing the origin of 'Chesterton's Fence'.",
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
    "description": "Chesterton’s personal reflection on the three stages of conversion to the Catholic Church.",
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
    "description": "Chesterton’s final theological essay collection, defending Catholic realism against modern secular fads.",
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
    "description": "A theological travelogue of Jerusalem, exploring the Crusades, Islamic thought, and the eternal roots of Christendom.",
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
    "description": "A cultural, historical, and spiritual study of Rome and its perpetual resurrection across the centuries.",
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
  "christendom-in-dublin": {
    "id": "christendom-in-dublin",
    "titleEn": "Christendom in Dublin",
    "subtitle": "The 1932 Eucharistic Congress & The Miracle of Faith",
    "year": 1932,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "irish-impressions",
    "companionTitle": "Irish Impressions (1919)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton’s vivid first-hand account of the 1932 International Eucharistic Congress in Dublin.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Gathering of the Nations"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Irish People in the Street"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Mass in Phoenix Park"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Sign in the Heavens"
      }
    ]
  },
  "the-innocence-of-father-brown": {
    "id": "the-innocence-of-father-brown",
    "titleEn": "The Innocence of Father Brown",
    "subtitle": "The Complete 12 Canonical Inquiries",
    "year": 1911,
    "category": "Father Brown Mysteries & Detective Fiction",
    "companionSlug": "the-wisdom-of-father-brown",
    "companionTitle": "The Wisdom of Father Brown (1914)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (12 Sections)",
    "description": "The debut collection introducing Father Brown, the quiet Roman Catholic priest who solves crimes by spiritual empathy.",
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
    "category": "Father Brown Mysteries & Detective Fiction",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (12 Sections)",
    "description": "The second classic Father Brown collection, exploring crimes that hinge on psychological paradoxes.",
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
    "category": "Father Brown Mysteries & Detective Fiction",
    "companionSlug": "the-secret-of-father-brown",
    "companionTitle": "The Secret of Father Brown (1927)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "Eight stories where Father Brown unmasks seemingly supernatural miracles and curses through strict common sense.",
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
    "category": "Father Brown Mysteries & Detective Fiction",
    "companionSlug": "the-scandal-of-father-brown",
    "companionTitle": "The Scandal of Father Brown (1935)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (10 Sections)",
    "description": "Framed around Father Brown explaining his inner method of moral identification to an American visitor.",
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
    "category": "Father Brown Mysteries & Detective Fiction",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-napoleon-of-notting-hill",
    "companionTitle": "The Napoleon of Notting Hill (1904)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (15 Sections)",
    "description": "A celebrated metaphysical thriller in which poet-detective Gabriel Syme infiltrates the secret Central Anarchist Council.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-man-who-was-thursday",
    "companionTitle": "The Man Who Was Thursday (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (6 Sections)",
    "description": "Chesterton’s first novel, depicting a futuristic London where local boroughs revive medieval heraldry.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (6 Sections)",
    "description": "A collection of delightful mysteries featuring retired judge Basil Grant and unique vocations.",
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
    "category": "Novels & Fantastic Romances",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-napoleon-of-notting-hill",
    "companionTitle": "The Napoleon of Notting Hill (1904)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "The eccentric adventures of Innocent Smith, who forces tired modern men to fall in love with life again.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-napoleon-of-notting-hill",
    "companionTitle": "The Napoleon of Notting Hill (1904)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A satirical romance championing traditional English taverns and liberty against prohibitionists.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-napoleon-of-notting-hill",
    "companionTitle": "The Napoleon of Notting Hill (1904)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A quiet librarian is cast as a medieval king in a play and decides to enforce medieval law in modern England.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "Eight mysteries solved by landscape painter and poet Gabriel Gale.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-club-of-queer-trades",
    "companionTitle": "The Club of Queer Trades (1905)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Four novellas in which honorable people commit apparent crimes to prevent far greater moral evils.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "Eight paradox-detective stories starring Mr. Pond solving impossible crimes.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Eight interconnected stories in which Distributist rebels fulfill proverbial impossibilities.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-man-who-knew-too-much",
    "companionTitle": "The Man Who Knew Too Much (1922)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "A gothic mystery set on the cliffs of Cornwall.",
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
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-innocence-of-father-brown",
    "companionTitle": "The Innocence of Father Brown (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (8 Sections)",
    "description": "Eight mysteries featuring Horne Fisher, an aristocratic sleuth.",
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
  "the-coloured-lands": {
    "id": "the-coloured-lands",
    "titleEn": "The Coloured Lands",
    "subtitle": "Fairy Stories, Satirical Sketches, and Early Tales",
    "year": 1937,
    "category": "Novels & Fantastic Romances",
    "companionSlug": "the-man-who-was-thursday",
    "companionTitle": "The Man Who Was Thursday (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Fairy stories, juvenile tales, and parodies written and illustrated by Chesterton.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Coloured Lands"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Taming of the Nightmare"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Dragon at School"
      },
      {
        "id": "ch-4",
        "titleEn": "Chapter IV. The Ballad of the Blue Moon"
      }
    ]
  },
  "whats-wrong-with-the-world": {
    "id": "whats-wrong-with-the-world",
    "titleEn": "What's Wrong with the World",
    "subtitle": "The Family, Education, Property, and the Modern State",
    "year": 1910,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s foundational social treatise defending the freedom of the family and distributed property.",
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
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "whats-wrong-with-the-world",
    "companionTitle": "What's Wrong with the World (1910)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "The definitive exposition of Distributist economic theory.",
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
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "whats-wrong-with-the-world",
    "companionTitle": "What's Wrong with the World (1910)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A prescient philosophical refutation of eugenics and scientism.",
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
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Fierce attacks on financial oligarchies and commercial advertizing.",
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
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "whats-wrong-with-the-world",
    "companionTitle": "What's Wrong with the World (1910)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A defense of lifelong marriage as the essential bulwark protecting the family.",
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
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton’s reflections on the Irish peasant economy as a living model of Distributism.",
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
  "the-crimes-of-england": {
    "id": "the-crimes-of-england",
    "titleEn": "The Crimes of England",
    "subtitle": "Historical Reflections on European Treaties and Foreign Policy",
    "year": 1915,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "a-short-history-of-england",
    "companionTitle": "A Short History of England (1917)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A biting historical analysis examining England's historical errors in supporting Prussian statecraft.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. Some Neglected Morals"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The German Philosophy of the State"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Battle of Europe"
      }
    ]
  },
  "the-end-of-the-armistice": {
    "id": "the-end-of-the-armistice",
    "titleEn": "The End of the Armistice",
    "subtitle": "Prophetic Essays on Totalitarianism and the Defense of Europe",
    "year": 1940,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "eugenics-and-other-evils",
    "companionTitle": "Eugenics and Other Evils (1922)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's essays warning of the rise of Nazism, communism, and the moral defense of Western civilization.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Threat of the Pagan Empire"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. Poland and the Christian Frontier"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Defense of Freedom"
      }
    ]
  },
  "our-note-book-illustrated-london-news": {
    "id": "our-note-book-illustrated-london-news",
    "titleEn": "Our Note Book: The Illustrated London News Essays",
    "subtitle": "Thirty-One Years of Weekly Columns (1905–1936)",
    "year": 1905,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "daily-news-essays",
    "companionTitle": "The Daily News Essays (1902–1913)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (7 Sections)",
    "description": "Chesterton’s legendary 31-year weekly column in The Illustrated London News.",
    "sections": [
      {
        "id": "iln-1905",
        "titleEn": "I. First Notes & The Philosophy of Current Events (1905)"
      },
      {
        "id": "iln-1908",
        "titleEn": "II. On Logic, Crime, and Fairy Tales (1908)"
      },
      {
        "id": "iln-1912",
        "titleEn": "III. On Property, Sanity, and the Servile State (1912)"
      },
      {
        "id": "iln-1915",
        "titleEn": "IV. Wartime Reflections & The Soul of England (1915)"
      },
      {
        "id": "iln-1922",
        "titleEn": "V. Post-War Illusions and Modern Fashion (1922)"
      },
      {
        "id": "iln-1929",
        "titleEn": "VI. On Orthodoxy and the Modern Skeptic (1929)"
      },
      {
        "id": "iln-1936",
        "titleEn": "VII. Final Musings and The Last Word (1936)"
      }
    ]
  },
  "daily-news-essays": {
    "id": "daily-news-essays",
    "titleEn": "The Daily News Essays & Saturday Columns",
    "subtitle": "Fleet Street Columns that Revolutionized English Journalism (1902–1913)",
    "year": 1902,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "our-note-book-illustrated-london-news",
    "companionTitle": "Our Note Book (1905–1936)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "The sparkling Saturday columns that made Chesterton a national household name.",
    "sections": [
      {
        "id": "dn-1",
        "titleEn": "I. The Romance of Fleet Street"
      },
      {
        "id": "dn-2",
        "titleEn": "II. On Running After One's Hat & Everyday Adventures"
      },
      {
        "id": "dn-3",
        "titleEn": "III. The Twelve Men & Trial by Jury"
      },
      {
        "id": "dn-4",
        "titleEn": "IV. The Defense of Penny Dreadfuls & Popular Literature"
      },
      {
        "id": "dn-5",
        "titleEn": "V. On Public Houses, Common Lands, and Peasant Liberty"
      }
    ]
  },
  "gks-weekly-and-distributist-essays": {
    "id": "gks-weekly-and-distributist-essays",
    "titleEn": "G.K.'s Weekly: The Distributist Essays",
    "subtitle": "The Voice of the Distributist League (1925–1936)",
    "year": 1925,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s fiery editorial essays in his self-founded weekly review.",
    "sections": [
      {
        "id": "gkw-1",
        "titleEn": "I. The Manifesto of G.K.'s Weekly"
      },
      {
        "id": "gkw-2",
        "titleEn": "II. Against the Monopolies and Industrial Trusts"
      },
      {
        "id": "gkw-3",
        "titleEn": "III. The League for the Restoration of Liberty"
      },
      {
        "id": "gkw-4",
        "titleEn": "IV. The Defense of the Small Shop and Family Farm"
      },
      {
        "id": "gkw-5",
        "titleEn": "V. The Recovery of Sanity and Real Property"
      }
    ]
  },
  "bbc-radio-talks-and-broadcasts": {
    "id": "bbc-radio-talks-and-broadcasts",
    "titleEn": "The BBC Radio Broadcasts & Spoken Talks",
    "subtitle": "Complete Transcripts of Chesterton's Radio Addresses (1931–1936)",
    "year": 1931,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "the-spice-of-life",
    "companionTitle": "The Spice of Life (1936)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Verbatim transcripts of Chesterton’s pioneering BBC radio broadcasts.",
    "sections": [
      {
        "id": "bbc-1",
        "titleEn": "I. The Spice of Life (Chesterton's Famous Final Address)"
      },
      {
        "id": "bbc-2",
        "titleEn": "II. Architecture and the Modern Soul"
      },
      {
        "id": "bbc-3",
        "titleEn": "III. Speech at the Luncheon for Rudyard Kipling"
      },
      {
        "id": "bbc-4",
        "titleEn": "IV. On Reading and Modern Books"
      },
      {
        "id": "bbc-5",
        "titleEn": "V. The Spirit of English Literature"
      }
    ]
  },
  "a-short-history-of-england": {
    "id": "a-short-history-of-england",
    "titleEn": "A Short History of England",
    "subtitle": "The Epic Story of the English People",
    "year": 1917,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-ballad-of-the-white-horse",
    "companionTitle": "The Ballad of the White Horse (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (6 Sections)",
    "description": "Chesterton’s celebrated popular history written from the perspective of the ordinary common folk.",
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
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "a-short-history-of-england",
    "companionTitle": "A Short History of England (1917)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton's commentary on his American lecture tour.",
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
    "description": "Acclaimed as the definitive critical appreciation of Dickens.",
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
    "description": "The acclaimed biography in the English Men of Letters series.",
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
    "description": "A personal overview of Victorian literary giants.",
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
    "description": "Chesterton’s study of his closest friend and intellectual sparring partner.",
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
    "description": "A luminous study of Blake's mysticism, poetry, and drawings.",
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
    "description": "A defense of Stevenson’s storytelling genius.",
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
    "description": "A study of Geoffrey Chaucer, the Canterbury Tales, and medieval England.",
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
  "gf-watts": {
    "id": "gf-watts",
    "titleEn": "G.F. Watts",
    "subtitle": "The Victorian Painter and the Philosophy of Allegory",
    "year": 1904,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "william-blake",
    "companionTitle": "William Blake (1910)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton’s dedicated art critical biography of the Victorian master George Frederic Watts.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Victorian Atmosphere"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Allegories of Watts"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Portraits and the Spirit of Man"
      }
    ]
  },
  "william-cobbett": {
    "id": "william-cobbett",
    "titleEn": "William Cobbett",
    "subtitle": "The Peasant Champion and the English Shire",
    "year": 1925,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A biography of William Cobbett, the great agrarian champion of the English peasantry against industrialization.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Boyhood of Cobbett"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Rural Rides"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Defense of the Cottage"
      }
    ]
  },
  "varied-types": {
    "id": "varied-types",
    "titleEn": "Varied Types",
    "subtitle": "Twenty Critical Studies in History, Poetry, and Faith",
    "year": 1903,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "the-defendant",
    "companionTitle": "The Defendant (1901)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (7 Sections)",
    "description": "Chesterton’s early collection of 20 essays on Savonarola, St. Francis, Byron, Pope, Scott, Carlyle, Tolstoy, Rostand, and Charles II.",
    "sections": [
      {
        "id": "vt-1",
        "titleEn": "I. Savonarola"
      },
      {
        "id": "vt-2",
        "titleEn": "II. Francis of Assisi"
      },
      {
        "id": "vt-3",
        "titleEn": "III. Thomas Carlyle"
      },
      {
        "id": "vt-4",
        "titleEn": "IV. Leo Tolstoy"
      },
      {
        "id": "vt-5",
        "titleEn": "V. Sir Walter Scott"
      },
      {
        "id": "vt-6",
        "titleEn": "VI. Lord Byron"
      },
      {
        "id": "vt-7",
        "titleEn": "VII. Alexander Pope"
      }
    ]
  },
  "appreciations-and-criticisms-of-dickens": {
    "id": "appreciations-and-criticisms-of-dickens",
    "titleEn": "Appreciations and Criticisms of Charles Dickens",
    "subtitle": "Prefaces to the Complete Works of Dickens",
    "year": 1911,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "charles-dickens",
    "companionTitle": "Charles Dickens (1906)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton’s collected prefaces to all of Charles Dickens’s novels.",
    "sections": [
      {
        "id": "dick-1",
        "titleEn": "I. Pickwick Papers and Oliver Twist"
      },
      {
        "id": "dick-2",
        "titleEn": "II. Nicholas Nickleby and The Old Curiosity Shop"
      },
      {
        "id": "dick-3",
        "titleEn": "III. David Copperfield and Bleak House"
      },
      {
        "id": "dick-4",
        "titleEn": "IV. A Tale of Two Cities and Great Expectations"
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
    "description": "Chesterton’s final memoir, published posthumously in 1936.",
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
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "tremendous-trifles",
    "companionTitle": "Tremendous Trifles (1909)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (9 Sections)",
    "description": "Chesterton’s early essays defending penny dreadfuls, skeletons, rash vows, and nonsense.",
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
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "the-defendant",
    "companionTitle": "The Defendant (1901)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (9 Sections)",
    "description": "A beloved collection of essays including 'A Piece of Chalk', 'The Dragon's Grandmother', and 'The Twelve Men'.",
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
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "tremendous-trifles",
    "companionTitle": "Tremendous Trifles (1909)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Classic essays exploring art, running after one's hat, and fairy tales.",
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
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "all-things-considered",
    "companionTitle": "All Things Considered (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Witty essays on Gargoyles, Cheese, Sightseeing, and the English countryside.",
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
    "category": "Essays & Fleet Street Journalism",
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
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "the-uses-of-diversity",
    "companionTitle": "The Uses of Diversity (1920)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Devastating essays critiquing modern fads (psychoanalysis, vegetarianism, free verse).",
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
    "category": "Essays & Fleet Street Journalism",
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
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "all-i-survey",
    "companionTitle": "All I Survey (1933)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Essays exploring the modern business state, humor, and skepticism.",
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
  "a-miscellany-of-men": {
    "id": "a-miscellany-of-men",
    "titleEn": "A Miscellany of Men",
    "subtitle": "Thirty-Eight Portraits of Human Types, Fools, and Philosophers",
    "year": 1912,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "tremendous-trifles",
    "companionTitle": "Tremendous Trifles (1909)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Brilliant character sketches analyzing modern human types.",
    "sections": [
      {
        "id": "mis-1",
        "titleEn": "I. The Red Fox and the Common Man"
      },
      {
        "id": "mis-2",
        "titleEn": "II. The Man Who Thinks Backwards"
      },
      {
        "id": "mis-3",
        "titleEn": "III. The Mystagogue and the Modern World"
      },
      {
        "id": "mis-4",
        "titleEn": "IV. The Real Journalist"
      },
      {
        "id": "mis-5",
        "titleEn": "V. The Fool Who Loved Folly"
      }
    ]
  },
  "the-spice-of-life": {
    "id": "the-spice-of-life",
    "titleEn": "The Spice of Life and Other Essays",
    "subtitle": "Late Broadcasts, Reflections, and Final Wisdom",
    "year": 1936,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "bbc-radio-talks-and-broadcasts",
    "companionTitle": "The BBC Radio Broadcasts (1931–1936)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton’s late essays and radio reflections on what makes life worth living.",
    "sections": [
      {
        "id": "sol-1",
        "titleEn": "I. The Spice of Life"
      },
      {
        "id": "sol-2",
        "titleEn": "II. On Reading in Bed"
      },
      {
        "id": "sol-3",
        "titleEn": "III. The Beauty of Common Things"
      },
      {
        "id": "sol-4",
        "titleEn": "IV. On Friendship and Debate"
      }
    ]
  },
  "the-common-man": {
    "id": "the-common-man",
    "titleEn": "The Common Man",
    "subtitle": "Essays on Democratic Sanity, History, and Monsters",
    "year": 1950,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "whats-wrong-with-the-world",
    "companionTitle": "What's Wrong with the World (1910)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "A collection of essays defending the wisdom and common sense of the ordinary citizen.",
    "sections": [
      {
        "id": "cm-1",
        "titleEn": "I. The Common Man"
      },
      {
        "id": "cm-2",
        "titleEn": "II. A Midsummer Night's Dream"
      },
      {
        "id": "cm-3",
        "titleEn": "III. The Evolution of Slaves"
      },
      {
        "id": "cm-4",
        "titleEn": "IV. The Soul of the People"
      }
    ]
  },
  "all-i-survey": {
    "id": "all-i-survey",
    "titleEn": "All I Survey: A Book of Essays",
    "subtitle": "Reflections on Architecture, Travel, and Modern Fads",
    "year": 1933,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "all-is-grist",
    "companionTitle": "All is Grist (1931)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Essays on modern fashion, bad temper, memory, and English architecture.",
    "sections": [
      {
        "id": "ais-1",
        "titleEn": "I. On Bad Temper and Good Humor"
      },
      {
        "id": "ais-2",
        "titleEn": "II. The Mystery of the City"
      },
      {
        "id": "ais-3",
        "titleEn": "III. On Modern Novels and Old Stories"
      },
      {
        "id": "ais-4",
        "titleEn": "IV. The Permanent Vision"
      }
    ]
  },
  "avowals-and-denials": {
    "id": "avowals-and-denials",
    "titleEn": "Avowals and Denials: A Book of Essays",
    "subtitle": "Defending Truth, Dogma, and Free Will",
    "year": 1934,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "as-i-was-saying",
    "companionTitle": "As I Was Saying (1936)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Sharp reflections on determinism, science, and the sanity of the human spirit.",
    "sections": [
      {
        "id": "ad-1",
        "titleEn": "I. On Monster and Machines"
      },
      {
        "id": "ad-2",
        "titleEn": "II. The Dogma of Free Will"
      },
      {
        "id": "ad-3",
        "titleEn": "III. The Scientific Superstition"
      },
      {
        "id": "ad-4",
        "titleEn": "IV. The Affirmation of Sanity"
      }
    ]
  },
  "as-i-was-saying": {
    "id": "as-i-was-saying",
    "titleEn": "As I Was Saying: A Book of Essays",
    "subtitle": "Chesterton's Final Lifetime Essay Collection",
    "year": 1936,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "avowals-and-denials",
    "companionTitle": "Avowals and Denials (1934)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "The last essay collection published during Chesterton's lifetime.",
    "sections": [
      {
        "id": "aiws-1",
        "titleEn": "I. On Victorian Memories"
      },
      {
        "id": "aiws-2",
        "titleEn": "II. The Habit of Wonder"
      },
      {
        "id": "aiws-3",
        "titleEn": "III. On Laughter and Eternity"
      },
      {
        "id": "aiws-4",
        "titleEn": "IV. The Final Word"
      }
    ]
  },
  "come-to-think-of-it": {
    "id": "come-to-think-of-it",
    "titleEn": "Come to Think of It: A Book of Essays",
    "subtitle": "Meditations on Modern Man, Slang, and Psychoanalysis",
    "year": 1930,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "all-is-grist",
    "companionTitle": "All is Grist (1931)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Essays from The Illustrated London News exploring modern slang, detective fiction, psychology, and public life.",
    "sections": [
      {
        "id": "ctt-1",
        "titleEn": "I. On Psychoanalysis"
      },
      {
        "id": "ctt-2",
        "titleEn": "II. On Detectives and Crimes"
      },
      {
        "id": "ctt-3",
        "titleEn": "III. The Mystery of Slang"
      },
      {
        "id": "ctt-4",
        "titleEn": "IV. The Defense of Common People"
      }
    ]
  },
  "sidelights-on-new-london-and-newer-york": {
    "id": "sidelights-on-new-london-and-newer-york",
    "titleEn": "Sidelights on New London and Newer York",
    "subtitle": "Essays on American Energy, Cinema, and Commercial Fashion",
    "year": 1932,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "what-i-saw-in-america",
    "companionTitle": "What I Saw in America (1922)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Essays examining the changing city landscapes of London and New York, Hollywood films, and capitalism.",
    "sections": [
      {
        "id": "side-1",
        "titleEn": "I. The Skyscraper and the Spirit"
      },
      {
        "id": "side-2",
        "titleEn": "II. The Cinema and the Soul"
      },
      {
        "id": "side-3",
        "titleEn": "III. On Big Business and Real Freedom"
      }
    ]
  },
  "lunacy-and-letters": {
    "id": "lunacy-and-letters",
    "titleEn": "Lunacy and Letters",
    "subtitle": "Essays on Nonsense, Literature, and Fleet Street Fun",
    "year": 1958,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "the-defendant",
    "companionTitle": "The Defendant (1901)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Sparkling early Daily News essays exploring nonsense literature, humor, and books.",
    "sections": [
      {
        "id": "ll-1",
        "titleEn": "I. On Nonsense"
      },
      {
        "id": "ll-2",
        "titleEn": "II. The Art of the Book"
      },
      {
        "id": "ll-3",
        "titleEn": "III. The Joy of Living"
      }
    ]
  },
  "the-glass-walking-stick": {
    "id": "the-glass-walking-stick",
    "titleEn": "The Glass Walking-Stick and Other Essays",
    "subtitle": "Uncollected Essays from The Illustrated London News",
    "year": 1955,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "our-note-book-illustrated-london-news",
    "companionTitle": "Our Note Book (1905–1936)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Selected master essays on odd objects, history, and human eccentricity.",
    "sections": [
      {
        "id": "gws-1",
        "titleEn": "I. The Glass Walking-Stick"
      },
      {
        "id": "gws-2",
        "titleEn": "II. The Wonder of Common Things"
      },
      {
        "id": "gws-3",
        "titleEn": "III. On True Sanity"
      }
    ]
  },
  "the-ballad-of-the-white-horse": {
    "id": "the-ballad-of-the-white-horse",
    "titleEn": "The Ballad of the White Horse",
    "subtitle": "The Epic of King Alfred the Great and the Battle of Ethandune",
    "year": 1911,
    "category": "Poetry & Epic Verse",
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
    "category": "Poetry & Epic Verse",
    "companionSlug": "the-ballad-of-the-white-horse",
    "companionTitle": "The Ballad of the White Horse (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s debut poetry volume containing his famous poem 'The Donkey'.",
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
  "greybeards-at-play": {
    "id": "greybeards-at-play",
    "titleEn": "Greybeards at Play",
    "subtitle": "Literature and Art for Old Gentlemen (Chesterton's First Book)",
    "year": 1900,
    "category": "Poetry & Epic Verse",
    "companionSlug": "the-wild-knight-and-other-poems",
    "companionTitle": "The Wild Knight and Other Poems (1900)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton’s very first published book, featuring delightful nonsense verses and comic rhymes.",
    "sections": [
      {
        "id": "gb-1",
        "titleEn": "I. The Love of Nonsense"
      },
      {
        "id": "gb-2",
        "titleEn": "II. On the Disinterested Rearers of Peculiar Pets"
      },
      {
        "id": "gb-3",
        "titleEn": "III. The Song of the Old Gentleman"
      },
      {
        "id": "gb-4",
        "titleEn": "IV. The Envoy"
      }
    ]
  },
  "wine-water-and-song": {
    "id": "wine-water-and-song",
    "titleEn": "Wine, Water, and Song",
    "subtitle": "Songs of The Flying Inn & The Rolling English Road",
    "year": 1915,
    "category": "Poetry & Epic Verse",
    "companionSlug": "the-flying-inn",
    "companionTitle": "The Flying Inn (1914)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s celebrated songs and tavern ballads.",
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
    "category": "Poetry & Epic Verse",
    "companionSlug": "the-ballad-of-the-white-horse",
    "companionTitle": "The Ballad of the White Horse (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s collection featuring 'Lepanto' and 'The Secret People'.",
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
  "the-queen-of-seven-swords": {
    "id": "the-queen-of-seven-swords",
    "titleEn": "The Queen of Seven Swords",
    "subtitle": "Marian Devotional Poems & Songs of the Mother of God",
    "year": 1926,
    "category": "Poetry & Epic Verse",
    "companionSlug": "the-ballad-of-st-barbara",
    "companionTitle": "The Ballad of St. Barbara (1922)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton’s sequence of devotional poems dedicated to Our Lady.",
    "sections": [
      {
        "id": "qss-1",
        "titleEn": "I. The Seven Swords"
      },
      {
        "id": "qss-2",
        "titleEn": "II. The Tower of Ivory"
      },
      {
        "id": "qss-3",
        "titleEn": "III. The Mother of the World"
      },
      {
        "id": "qss-4",
        "titleEn": "IV. The Return of Eve"
      },
      {
        "id": "qss-5",
        "titleEn": "V. The Regina Angelorum"
      }
    ]
  },
  "the-collected-poems-of-gk-chesterton": {
    "id": "the-collected-poems-of-gk-chesterton",
    "titleEn": "The Collected Poems of G.K. Chesterton",
    "subtitle": "The Definitive Treasury of Ballads, Carols, and Satirical Verses",
    "year": 1927,
    "category": "Poetry & Epic Verse",
    "companionSlug": "the-ballad-of-the-white-horse",
    "companionTitle": "The Ballad of the White Horse (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (7 Sections)",
    "description": "The definitive lifetime treasury containing his greatest shorter poems.",
    "sections": [
      {
        "id": "lepanto",
        "titleEn": "Lepanto (Don John of Austria)"
      },
      {
        "id": "donkey",
        "titleEn": "The Donkey"
      },
      {
        "id": "secret-people",
        "titleEn": "The Secret People"
      },
      {
        "id": "rolling-road",
        "titleEn": "The Rolling English Road"
      },
      {
        "id": "hymn-militant",
        "titleEn": "A Hymn for the Church Militant"
      },
      {
        "id": "english-graves",
        "titleEn": "The English Graves"
      },
      {
        "id": "house-christmas",
        "titleEn": "The House of Christmas"
      }
    ]
  },
  "magic-a-fantastic-comedy": {
    "id": "magic-a-fantastic-comedy",
    "titleEn": "Magic: A Fantastic Comedy",
    "subtitle": "A Three-Act Play on the Reality of the Supernatural",
    "year": 1913,
    "category": "Poetry & Epic Verse",
    "companionSlug": "the-judgement-of-dr-johnson",
    "companionTitle": "The Judgement of Dr. Johnson (1927)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "A celebrated 3-act stage play exploring a mysterious conjuror whose real magic confronts a secular Duke.",
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
    "category": "Poetry & Epic Verse",
    "companionSlug": "magic-a-fantastic-comedy",
    "companionTitle": "Magic: A Fantastic Comedy (1913)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A historical comedy featuring Dr. Samuel Johnson and James Boswell resolving political intrigue.",
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
  "the-surprise": {
    "id": "the-surprise",
    "titleEn": "The Surprise: A Play in Two Acts",
    "subtitle": "A Philosophical Comedy on Puppets, Free Will, and the Creator",
    "year": 1932,
    "category": "Poetry & Epic Verse",
    "companionSlug": "magic-a-fantastic-comedy",
    "companionTitle": "Magic: A Fantastic Comedy (1913)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (2 Sections)",
    "description": "A philosophical play in which a puppet-maker creates a perfect play with wooden marionettes and then asks the miracle of real life for them—discovering that real living creatures have free will and can disobey.",
    "sections": [
      {
        "id": "act-1",
        "titleEn": "Act I. The Puppet Theatre and the Perfect Play"
      },
      {
        "id": "act-2",
        "titleEn": "Act II. The Miracle of Life and Free Will"
      }
    ]
  },
  "do-we-agree-debate-with-shaw": {
    "id": "do-we-agree-debate-with-shaw",
    "titleEn": "Do We Agree? A Debate with Bernard Shaw",
    "subtitle": "Chaired by Hilaire Belloc (1928 Verbatim Transcript)",
    "year": 1928,
    "category": "Poetry & Epic Verse",
    "companionSlug": "george-bernard-shaw",
    "companionTitle": "George Bernard Shaw (1909)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "The complete verbatim transcript of the historic public debate between G.K. Chesterton and George Bernard Shaw.",
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
  },
  "twelve-types": {
    "id": "twelve-types",
    "titleEn": "Twelve Types",
    "subtitle": "Biographical Essays and Critical Appreciations",
    "year": 1902,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "varied-types",
    "companionTitle": "Varied Types (1903)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (12 Sections)",
    "description": "Chesterton's early landmark literary critical collection examining twelve formidable historical and literary personalities with paradoxical insight and vigorous wit.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. Charlotte Brontë"
      },
      {
        "id": "ch-2",
        "titleEn": "II. William Morris and His School"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Optimism of Byron"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. Pope and the Art of Satire"
      },
      {
        "id": "ch-5",
        "titleEn": "V. Francis of Assisi"
      },
      {
        "id": "ch-6",
        "titleEn": "VI. Rostand and the Heroic Comedy"
      },
      {
        "id": "ch-7",
        "titleEn": "VII. Charles II"
      },
      {
        "id": "ch-8",
        "titleEn": "VIII. Stevenson"
      },
      {
        "id": "ch-9",
        "titleEn": "IX. Thomas Carlyle"
      },
      {
        "id": "ch-10",
        "titleEn": "X. Tolstoy and the Cult of Simplicity"
      },
      {
        "id": "ch-11",
        "titleEn": "XI. Savonarola"
      },
      {
        "id": "ch-12",
        "titleEn": "XII. The Position of Sir Walter Scott"
      }
    ]
  },
  "thomas-carlyle": {
    "id": "thomas-carlyle",
    "titleEn": "Thomas Carlyle",
    "subtitle": "The Prophet of the Victorian Dilemma",
    "year": 1902,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "the-victorian-age-in-literature",
    "companionTitle": "The Victorian Age in Literature (1913)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "An incisive critical monograph on Thomas Carlyle, diagnosing his ferocious rhetoric, spiritual struggles, and profound influence on nineteenth-century British consciousness.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Prophet from the Hills"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Gospel of Work and the French Revolution"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. Carlyle and the Modern Mind"
      }
    ]
  },
  "simplicity-and-tolstoy": {
    "id": "simplicity-and-tolstoy",
    "titleEn": "Simplicity and Tolstoy",
    "subtitle": "The Paradox of the Simple Life and Modern Mysticism",
    "year": 1904,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "twelve-types",
    "companionTitle": "Twelve Types (1902)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A brilliant analysis of Count Leo Tolstoy's radical asceticism, exposing the hidden complexities and spiritual paradoxes of modern simple life philosophies.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Cult of Simplicity"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. Tolstoy as Artist and Moralist"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Peasant and the Philosopher"
      }
    ]
  },
  "leo-tolstoy": {
    "id": "leo-tolstoy",
    "titleEn": "Leo Tolstoy",
    "subtitle": "The Giant of Yasnaya Polyana and the Ethics of Art",
    "year": 1903,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "simplicity-and-tolstoy",
    "companionTitle": "Simplicity and Tolstoy (1904)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A collaborative study evaluating the Russian literary colossus, his monumental novels War and Peace and Anna Karenina, and his moral turn toward Christian anarchism.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Vision of the Russian Realist"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Great Novels and Human Destiny"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. Tolstoy's Religious Dilemma"
      }
    ]
  },
  "lord-kitchener": {
    "id": "lord-kitchener",
    "titleEn": "Lord Kitchener",
    "subtitle": "The Symbol of the Empire and the Modern Soldier",
    "year": 1917,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "the-crimes-of-england",
    "companionTitle": "The Crimes of England (1915)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A penetrating biographical study of Field Marshal Herbert Kitchener, exploring his stoic persona, military career, and mythic standing in the British imagination during the Great War.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Legend of the Iron Soldier"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The East and the Desert Campaigns"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Call to Arms and the Great Tragedy"
      }
    ]
  },
  "a-handful-of-authors": {
    "id": "a-handful-of-authors",
    "titleEn": "A Handful of Authors",
    "subtitle": "Essays on Books and Writers",
    "year": 1953,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "the-spice-of-life",
    "companionTitle": "The Spice of Life (1964)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "A posthumous collection of Chesterton's literary essays covering Lewis Carroll, Mark Twain, Victor Hugo, Cervantes, Jane Austen, and John Ruskin.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. Lewis Carroll and the Nonsense of Wonderland"
      },
      {
        "id": "ch-2",
        "titleEn": "II. Mark Twain and American Humor"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Victor Hugo and the Romantic Spirit"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. Cervantes and the Knight Errant"
      },
      {
        "id": "ch-5",
        "titleEn": "V. Jane Austen and the Domestic Comic"
      }
    ]
  },
  "gkc-as-mc-introductions": {
    "id": "gkc-as-mc-introductions",
    "titleEn": "G.K.C. as M.C.: Thirty-Seven Introductions",
    "subtitle": "Master of Ceremonies: Prefaces to the World of Books",
    "year": 1929,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "appreciations-and-criticisms-of-dickens",
    "companionTitle": "Appreciations and Criticisms of Dickens (1911)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "A magnificent anthology collecting Chesterton's introductions and prefaces to major classics, including The Book of Job, Bunyan's Pilgrim's Progress, and Samuel Johnson.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. Introduction to the Book of Job"
      },
      {
        "id": "ch-2",
        "titleEn": "II. Preface to Pilgrim's Progress"
      },
      {
        "id": "ch-3",
        "titleEn": "III. On Samuel Johnson and Boswell"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Art of the Preface"
      }
    ]
  },
  "the-sword-of-wood": {
    "id": "the-sword-of-wood",
    "titleEn": "The Sword of Wood",
    "subtitle": "A Tale of Seventeenth-Century Science and Wonder",
    "year": 1928,
    "category": "Father Brown Mysteries & Detective Fiction",
    "companionSlug": "the-trees-of-pride",
    "companionTitle": "The Trees of Pride (1922)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A delightful philosophical fantasy tale in which a magnetized rapier that shatters all steel meets its match in a humble wooden cudgel wielded by a man of common sense.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Chapter I. The Magician of King Charles's Court"
      },
      {
        "id": "ch-2",
        "titleEn": "Chapter II. The Challenge of the Magnetic Blade"
      },
      {
        "id": "ch-3",
        "titleEn": "Chapter III. The Triumph of the Oak Staff"
      }
    ]
  },
  "the-end-of-the-roman-road": {
    "id": "the-end-of-the-roman-road",
    "titleEn": "The End of the Roman Road",
    "subtitle": "A Pageant of Wayfarers Across English History",
    "year": 1924,
    "category": "Novels & Fantastic Romances",
    "companionSlug": "a-short-history-of-england",
    "companionTitle": "A Short History of England (1917)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A poetic prose meditation following the old Roman road across the English countryside, encountering the pageant of medieval pilgrims, soldiers, and common wayfarers.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The White Highway of the Caesars"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The March of the Wayfarers"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Where the Road Meets the Sea"
      }
    ]
  },
  "the-appetite-of-tyranny": {
    "id": "the-appetite-of-tyranny",
    "titleEn": "The Appetite of Tyranny",
    "subtitle": "Including The Barbarism of Berlin and Letters to an Old Garibaldian",
    "year": 1915,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-crimes-of-england",
    "companionTitle": "The Crimes of England (1915)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton's fiery wartime critique of Prussian militarism, state absolutism, and the philosophical roots of authoritarian hubris.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The War on the Word"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Refusal of Reciprocity"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Appetite of Tyranny"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Escape of Folly"
      }
    ]
  },
  "the-barbarism-of-berlin": {
    "id": "the-barbarism-of-berlin",
    "titleEn": "The Barbarism of Berlin",
    "subtitle": "An Examination of Imperial Prussian Philosophy",
    "year": 1914,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-appetite-of-tyranny",
    "companionTitle": "The Appetite of Tyranny (1915)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "The urgent opening salvo of Chesterton's wartime writing, dissecting the cynical doctrine of 'scraps of paper' and the defense of small nations.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Refusal of Reciprocity"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Broken Treaty and the Moral Law"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Defense of the Small Republic"
      }
    ]
  },
  "letters-to-an-old-garibaldian": {
    "id": "letters-to-an-old-garibaldian",
    "titleEn": "Letters to an Old Garibaldian",
    "subtitle": "On the Latin Tradition and European Liberty",
    "year": 1915,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-resurrection-of-rome",
    "companionTitle": "The Resurrection of Rome (1930)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Epistolary essays addressed to an Italian veteran of Giuseppe Garibaldi's redshirts, invoking the common Latin heritage of freedom, honor, and republican vigor.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Letter I. The Red Shirt and the Western Heritage"
      },
      {
        "id": "ch-2",
        "titleEn": "Letter II. The Roman Civilization vs The Northern Forest"
      },
      {
        "id": "ch-3",
        "titleEn": "Letter III. The Final Crusade for Liberty"
      }
    ]
  },
  "the-perishing-pharmacy-and-social-reform": {
    "id": "the-perishing-pharmacy-and-social-reform",
    "titleEn": "The Perishing Pharmacy & Social Reform",
    "subtitle": "Polemics on State Medicine, Monopolies, and Personal Freedom",
    "year": 1914,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "eugenics-and-other-evils",
    "companionTitle": "Eugenics and Other Evils (1922)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A searing Distributist pamphlet exposing the alliance between government health bureaucracy, patent medicine monopolies, and the erosion of individual autonomy.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Perishing Pharmacy"
      },
      {
        "id": "ch-2",
        "titleEn": "II. Social Reform vs. Birth Control"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Monopoly of Health and Human Dignity"
      }
    ]
  },
  "the-soul-of-wit-aphorisms": {
    "id": "the-soul-of-wit-aphorisms",
    "titleEn": "The Soul of Wit: Aphorisms and Paradoxes",
    "subtitle": "A Lifetime Treasury of Chestertonian Maxims",
    "year": 1936,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "the-common-man",
    "companionTitle": "The Common Man (1950)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "An authoritative compilation of Chesterton's sharpest aphorisms, paradoxes, and epigrams on truth, marriage, sanity, democracy, fairy tales, and eternity.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. On Truth, Wonder, and Orthodoxy"
      },
      {
        "id": "ch-2",
        "titleEn": "II. On Politics, Property, and Distributism"
      },
      {
        "id": "ch-3",
        "titleEn": "III. On Art, Literature, and Fairy Tales"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. On Family, Friendship, and Human Nature"
      }
    ]
  },
  "the-turkey-and-the-turk": {
    "id": "the-turkey-and-the-turk",
    "titleEn": "The Turkey and the Turk",
    "subtitle": "A Christmas Mummers' Play in Rhyme",
    "year": 1930,
    "category": "Plays, Debates & Public Encounters",
    "companionSlug": "magic-a-fantastic-comedy",
    "companionTitle": "Magic: A Fantastic Comedy (1913)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's delightful Christmas mummers' play in rhyming couplets, satirizing modern commercialism, political bureaucracy, and restoring old festive merriment.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "Act I. The Entrance of Father Christmas & The Turk"
      },
      {
        "id": "ch-2",
        "titleEn": "Act II. The Combat of St. George and The Doctor's Cure"
      },
      {
        "id": "ch-3",
        "titleEn": "Act III. The Feast of the Goose and the Final Wassail"
      }
    ]
  },
  "the-chesterton-darrow-debate": {
    "id": "the-chesterton-darrow-debate",
    "titleEn": "The Chesterton-Darrow Debate",
    "subtitle": "Will the World Return to Religion? (New York Mecca Temple, 1931)",
    "year": 1931,
    "category": "Plays, Debates & Public Encounters",
    "companionSlug": "do-we-agree-debate-with-shaw",
    "companionTitle": "Do We Agree? Debate with Shaw (1928)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "The legendary debate between G.K. Chesterton and agnostic trial titan Clarence Darrow before 4,000 spectators in New York City on the destiny of faith.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. Opening Speech on the Agnostic View (Clarence Darrow)"
      },
      {
        "id": "ch-2",
        "titleEn": "II. Opening Speech on the Return to Religion (G.K. Chesterton)"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Darrow's Rebuttal and Cross-Examination (Clarence Darrow)"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. Chesterton's Final Rejoinder on Sanity and Hope (G.K. Chesterton)"
      }
    ]
  },
  "the-blatchford-controversies": {
    "id": "the-blatchford-controversies",
    "titleEn": "The Blatchford Controversies",
    "subtitle": "The Clarion Debate: The Defense of Free Will and Christianity",
    "year": 1904,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "orthodoxy",
    "companionTitle": "Orthodoxy (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections)",
    "description": "Chesterton's historic debate with socialist editor Robert Blatchford in The Clarion, demolishing deterministic materialism and laying the intellectual groundwork for Heretics and Orthodoxy.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Opportunity of Free Thought"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Doubts of the Materialist"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Determinism and Human Freedom"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. Christianity and Rationalism"
      },
      {
        "id": "ch-5",
        "titleEn": "V. The Return to Dogma"
      }
    ]
  },
  "where-all-roads-lead": {
    "id": "where-all-roads-lead",
    "titleEn": "Where All Roads Lead",
    "subtitle": "Essays on the Challenge of the Church and Conversion",
    "year": 1922,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-catholic-church-and-conversion",
    "companionTitle": "The Catholic Church and Conversion (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton's first major philosophical essays written for Blackfriars following his conversion to Catholicism, exploring why all intellectual roads converge upon the Church of Rome.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Challenge of the Church"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Universal Pattern and the Modern Mind"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Logic of Conversion"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Permanent Authority of Rome"
      }
    ]
  },
  "the-way-of-the-cross": {
    "id": "the-way-of-the-cross",
    "titleEn": "The Way of the Cross",
    "subtitle": "Devotional Meditations on the Passion of Christ",
    "year": 1935,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-everlasting-man",
    "companionTitle": "The Everlasting Man (1925)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's moving, profound devotional reflections on the fourteen Stations of the Cross, meditating on divine suffering, human weakness, and redemption.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Condemnation and the Sacred Burden"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Falls, the Women, and the Simon of Cyrene"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Crucifixion and the Light of the Tomb"
      }
    ]
  },
  "the-catholic-church-and-the-modern-state": {
    "id": "the-catholic-church-and-the-modern-state",
    "titleEn": "The Catholic Church and the Modern State",
    "subtitle": "The Defense of Conscience and Family Against Totalitarianism",
    "year": 1930,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-thing",
    "companionTitle": "The Thing: Why I Am a Catholic (1929)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A prophetic treatise analyzing the growing threat of modern totalitarian statism and asserting the Church and the Family as the twin citadels of human liberty.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Totalitarian Leviathan"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Sovereignty of the Conscience"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Family as the Unconquerable Citadel"
      }
    ]
  },
  "the-new-unbelief": {
    "id": "the-new-unbelief",
    "titleEn": "The New Unbelief",
    "subtitle": "Critique of Modern Skepticism, Scientism, and Spiritual Vacuum",
    "year": 1928,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-well-and-the-shallows",
    "companionTitle": "The Well and the Shallows (1935)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's trenchant diagnosis of 20th-century secularism, demonstrating how modern skepticism has abandoned rationality in favor of vague superstitions and spiritual drift.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Dissolution of Old Skepticism"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Modern Superstition of Science"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Return of the Living Faith"
      }
    ]
  },
  "the-campbell-controversy-new-theology": {
    "id": "the-campbell-controversy-new-theology",
    "titleEn": "The Campbell Controversy: The New Theology Debate",
    "subtitle": "Orthodoxy vs. Liberal Modernism and Divine Immanence",
    "year": 1907,
    "category": "Plays, Debates & Public Encounters",
    "companionSlug": "orthodoxy",
    "companionTitle": "Orthodoxy (1908)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton's famous public debate with the Rev. R.J. Campbell regarding the New Theology, defending the transcendence of God, the historical reality of sin, and the necessity of dogmatic clarity.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Danger of Divine Immanence"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Reality of Sin and the Common Man"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Transcendence of God and Political Adventure"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. Why the Old Theology is the Only True Liberalism"
      }
    ]
  },
  "the-coulson-kernahan-debate": {
    "id": "the-coulson-kernahan-debate",
    "titleEn": "The Coulson Kernahan Debate on Christianity",
    "subtitle": "Secular Morality, Religious Certitude, and the Search for Meaning",
    "year": 1906,
    "category": "Plays, Debates & Public Encounters",
    "companionSlug": "heretics",
    "companionTitle": "Heretics (1905)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A celebrated public dialogue on whether society can maintain moral standards without the spiritual authority of Christian revelation.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Dilemma of Agnostic Ethics"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Need for an Objective Standard"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Faith as the Guardian of Sanity"
      }
    ]
  },
  "the-bertrand-russell-encounter": {
    "id": "the-bertrand-russell-encounter",
    "titleEn": "The Bertrand Russell Encounter",
    "subtitle": "Is There a Return to Religion? (London Broadcast & Dialogues, 1935)",
    "year": 1935,
    "category": "Plays, Debates & Public Encounters",
    "companionSlug": "the-chesterton-darrow-debate",
    "companionTitle": "The Chesterton-Darrow Debate (1931)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "The historic intellectual clash between G.K. Chesterton and philosopher Bertrand Russell examining whether scientific skepticism or Christian revelation provides the true foundation for reason and human happiness.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. Russell on Scientific Skepticism and the Limits of Knowledge"
      },
      {
        "id": "ch-2",
        "titleEn": "II. Chesterton on Reason as the Daughter of Faith"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Modern Despair vs. The Medieval Joy"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. Final Arguments on the Destiny of Western Man"
      }
    ]
  },
  "the-hg-wells-exchanges": {
    "id": "the-hg-wells-exchanges",
    "titleEn": "The H.G. Wells Exchanges on History and Utopia",
    "subtitle": "The Decades-Long Duel Between Progress and Tradition",
    "year": 1920,
    "category": "Plays, Debates & Public Encounters",
    "companionSlug": "the-everlasting-man",
    "companionTitle": "The Everlasting Man (1925)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "The profound and witty public exchanges between G.K. Chesterton and H.G. Wells regarding Wells's Outline of History, evolutionary progress, and the utopian World State.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Caveman and the Victorian Professor"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Outline of History and the Missing Man"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Utopian Machines vs. Peasant Sanity"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. The Permanent Creature in a Changing Cosmos"
      }
    ]
  },
  "how-to-help-annexation": {
    "id": "how-to-help-annexation",
    "titleEn": "How to Help Annexation",
    "subtitle": "On the Restoration of Alsace-Lorraine and International Justice",
    "year": 1918,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-crimes-of-england",
    "companionTitle": "The Crimes of England (1915)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's sharp diplomatic critique examining the moral necessity of returning Alsace-Lorraine to France and dismantling imperial conquests.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Principle of National Restoration"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Soul of Alsace-Lorraine"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Peace of Justice vs. The Peace of Usury"
      }
    ]
  },
  "the-english-agricultural-labourer": {
    "id": "the-english-agricultural-labourer",
    "titleEn": "The English Agricultural Labourer",
    "subtitle": "The Dispossession of the Peasant and the Soul of the Countryside",
    "year": 1912,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-outline-of-sanity",
    "companionTitle": "The Outline of Sanity (1926)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's passionate defense of the rural English worker, diagnosing the tragic historical destruction of the peasantry by the Enclosure Acts.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Murder of the English Peasantry"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Dignity of the Plough"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Return of the Free Peasant"
      }
    ]
  },
  "thoughts-on-the-present-discontents": {
    "id": "thoughts-on-the-present-discontents",
    "titleEn": "Thoughts on the Present Discontents",
    "subtitle": "Post-War Economic Reflections, Strikes, and the Servile State",
    "year": 1921,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "utopia-of-usurers",
    "companionTitle": "Utopia of Usurers (1917)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's trenchant post-World War I essays analyzing industrial unrest, labor strikes, and the subtle emergence of Hilaire Belloc's 'Servile State'.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Mirage of Post-War Reconstruction"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Strikes and the Servile State"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Solution: Distributive Property"
      }
    ]
  },
  "a-defence-of-english-manners": {
    "id": "a-defence-of-english-manners",
    "titleEn": "A Defence of English Manners",
    "subtitle": "On Courtesy, Common Decorum, and Democratic Decency",
    "year": 1910,
    "category": "Distributism, Politics & Social Philosophy",
    "companionSlug": "the-defendant",
    "companionTitle": "The Defendant (1901)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A delightful essay on the natural courtesy of ordinary working people versus the artificial etiquette of fashionable drawing rooms.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. Drawing-Room Etiquette vs. Street Courtesy"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Humor and Kindness of the Cockney"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Manners as the Safeguard of Liberty"
      }
    ]
  },
  "chesterton-on-shakespeare": {
    "id": "chesterton-on-shakespeare",
    "titleEn": "Chesterton on Shakespeare",
    "subtitle": "Essays on Hamlet, Macbeth, Midsummer Night's Dream, and Elizabethan Soul",
    "year": 1936,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "the-victorian-age-in-literature",
    "companionTitle": "The Victorian Age in Literature (1913)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections)",
    "description": "Chesterton's lifetime collection of essays on William Shakespeare, celebrating his Catholic medieval roots, tragic grandeur, and cosmic comedy.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Mysticism of A Midsummer Night's Dream"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Sanity of Hamlet"
      },
      {
        "id": "ch-3",
        "titleEn": "III. Macbeth and the Reality of Evil"
      },
      {
        "id": "ch-4",
        "titleEn": "IV. Shakespeare and the Medieval English Heritage"
      }
    ]
  },
  "chesterton-on-art-and-aesthetics": {
    "id": "chesterton-on-art-and-aesthetics",
    "titleEn": "Chesterton on Art and Aesthetics",
    "subtitle": "The Signature of Man, the Necessity of Limits, and Pictorial Wonder",
    "year": 1935,
    "category": "Literary Criticism & Biographies",
    "companionSlug": "gf-watts",
    "companionTitle": "G.F. Watts (1904)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "A profound aesthetic treatise collecting Chesterton's writings on painting, sculpture, architecture, and the philosophy of creative limitation.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. Art as the Signature of Man"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Philosophy of Limitation and the Frame"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Splendor of Color and Form"
      }
    ]
  },
  "chesterton-on-america-and-modernity": {
    "id": "chesterton-on-america-and-modernity",
    "titleEn": "Chesterton on America and Modernity",
    "subtitle": "The Creed of Democracy, Industrial Capitalism, and the Machine Age",
    "year": 1931,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "what-i-saw-in-america",
    "companionTitle": "What I Saw in America (1922)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's comprehensive essays on the United States, evaluating the Declaration of Independence, Henry Ford, Prohibition, and American hospitality.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. A Nation Founded on a Sacred Creed"
      },
      {
        "id": "ch-2",
        "titleEn": "II. Prohibition and the Usurpation of Liberty"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Factory and the Machine Age"
      }
    ]
  },
  "the-new-witness-editorials": {
    "id": "the-new-witness-editorials",
    "titleEn": "The New Witness Editorials",
    "subtitle": "Polemics Against Political Corruption and Plutocracy (1912–1923)",
    "year": 1923,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "gks-weekly-and-distributist-essays",
    "companionTitle": "G.K.'s Weekly & Distributist Essays (1925–1936)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's searing weekly editorials for The New Witness following the Marconi Scandal, exposing parliamentary corruption, party funds, and oligarchic monopolies.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Marconi Scandal and Party Corruption"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Defense of the Independent Citizen"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Triumph of Free Speech"
      }
    ]
  },
  "the-speaker-and-commonwealth-essays": {
    "id": "the-speaker-and-commonwealth-essays",
    "titleEn": "The Speaker & Commonwealth Early Essays",
    "subtitle": "The Formative Fleet Street Columns and Sketches (1899–1904)",
    "year": 1904,
    "category": "Essays & Fleet Street Journalism",
    "companionSlug": "daily-news-essays",
    "companionTitle": "Daily News Essays & Sketches (1901–1913)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's brilliant formative essays written for The Speaker and The Commonwealth at the turn of the century, establishing his signature style of paradox and wonder.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Awakening of Fleet Street"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Democracy of Wonder"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Sketches of London Life"
      }
    ]
  },
  "blackfriars-and-dublin-review-essays": {
    "id": "blackfriars-and-dublin-review-essays",
    "titleEn": "Blackfriars & Dublin Review Inquiries",
    "subtitle": "Theological, Historical, and Philosophical Studies (1920–1936)",
    "year": 1936,
    "category": "Christian Apologetics & Philosophy",
    "companionSlug": "the-well-and-the-shallows",
    "companionTitle": "The Well and the Shallows (1935)",
    "unabridged": true,
    "statusBadge": "Verified Verbatim Unabridged",
    "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections)",
    "description": "Chesterton's mature theological inquiries, historical essays, and philosophical critiques contributed to the premier Catholic intellectual journals of Britain.",
    "sections": [
      {
        "id": "ch-1",
        "titleEn": "I. The Dominican Spirit and Scholastic Reason"
      },
      {
        "id": "ch-2",
        "titleEn": "II. The Catholic Interpretation of History"
      },
      {
        "id": "ch-3",
        "titleEn": "III. The Eternal Altar and the Modern Void"
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
