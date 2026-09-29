/**
 * G.K. Chesterton — Grand Master Archival & Bibliography Catalog
 * Comprehensive Chronological and Categorical Archive of G.K. Chesterton's Lifetime Output (120 Volumes)
 */
(function() {
  const ARCHIVAL_CATALOG = [
    {
        "id": "greybeards-at-play-1900",
        "title": "Greybeards at Play",
        "year": 1900,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "greybeards-at-play",
        "notes": "Chesterton’s very first published book, featuring delightful nonsense verses and comic rhymes."
    },
    {
        "id": "the-wild-knight-and-other-poems-1900",
        "title": "The Wild Knight and Other Poems",
        "year": 1900,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-wild-knight-and-other-poems",
        "notes": "Chesterton’s debut poetry volume containing his famous poem 'The Donkey'."
    },
    {
        "id": "the-defendant-1901",
        "title": "The Defendant",
        "year": 1901,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "the-defendant",
        "notes": "Chesterton’s early essays defending penny dreadfuls, skeletons, rash vows, and nonsense."
    },
    {
        "id": "daily-news-essays-1902",
        "title": "The Daily News Essays & Saturday Columns",
        "year": 1902,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "daily-news-essays",
        "notes": "The sparkling Saturday columns that made Chesterton a national household name."
    },
    {
        "id": "thomas-carlyle-1902",
        "title": "Thomas Carlyle",
        "year": 1902,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "thomas-carlyle",
        "notes": "An incisive critical monograph on Thomas Carlyle, diagnosing his ferocious rhetoric, spiritual struggles, and profound i..."
    },
    {
        "id": "twelve-types-1902",
        "title": "Twelve Types",
        "year": 1902,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "twelve-types",
        "notes": "Chesterton's early landmark literary critical collection examining twelve formidable historical and literary personaliti..."
    },
    {
        "id": "leo-tolstoy-1903",
        "title": "Leo Tolstoy",
        "year": 1903,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "leo-tolstoy",
        "notes": "A collaborative study evaluating the Russian literary colossus, his monumental novels War and Peace and Anna Karenina, a..."
    },
    {
        "id": "robert-browning-1903",
        "title": "Robert Browning",
        "year": 1903,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "robert-browning",
        "notes": "The acclaimed biography in the English Men of Letters series."
    },
    {
        "id": "varied-types-1903",
        "title": "Varied Types",
        "year": 1903,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "varied-types",
        "notes": "Chesterton’s early collection of 20 essays on Savonarola, St. Francis, Byron, Pope, Scott, Carlyle, Tolstoy, Rostand, an..."
    },
    {
        "id": "gf-watts-1904",
        "title": "G.F. Watts",
        "year": 1904,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "gf-watts",
        "notes": "Chesterton’s dedicated art critical biography of the Victorian master George Frederic Watts."
    },
    {
        "id": "simplicity-and-tolstoy-1904",
        "title": "Simplicity and Tolstoy",
        "year": 1904,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "simplicity-and-tolstoy",
        "notes": "A brilliant analysis of Count Leo Tolstoy's radical asceticism, exposing the hidden complexities and spiritual paradoxes..."
    },
    {
        "id": "the-blatchford-controversies-1904",
        "title": "The Blatchford Controversies",
        "year": 1904,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-blatchford-controversies",
        "notes": "Chesterton's historic debate with socialist editor Robert Blatchford in The Clarion, demolishing deterministic materiali..."
    },
    {
        "id": "the-napoleon-of-notting-hill-1904",
        "title": "The Napoleon of Notting Hill",
        "year": 1904,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-napoleon-of-notting-hill",
        "notes": "Chesterton’s first novel, depicting a futuristic London where local boroughs revive medieval heraldry."
    },
    {
        "id": "the-speaker-and-commonwealth-essays-1904",
        "title": "The Speaker & Commonwealth Early Essays",
        "year": 1904,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "the-speaker-and-commonwealth-essays",
        "notes": "Chesterton's brilliant formative essays written for The Speaker and The Commonwealth at the turn of the century, establi..."
    },
    {
        "id": "heretics-1905",
        "title": "Heretics",
        "year": 1905,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "heretics",
        "notes": "A brilliant and satirical critique of contemporary philosophies and intellectuals including Bernard Shaw, H.G. Wells, an..."
    },
    {
        "id": "our-note-book-illustrated-london-news-1905",
        "title": "Our Note Book: The Illustrated London News Essays",
        "year": 1905,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "our-note-book-illustrated-london-news",
        "notes": "Chesterton’s legendary 31-year weekly column in The Illustrated London News."
    },
    {
        "id": "the-club-of-queer-trades-1905",
        "title": "The Club of Queer Trades",
        "year": 1905,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-club-of-queer-trades",
        "notes": "A collection of delightful mysteries featuring retired judge Basil Grant and unique vocations."
    },
    {
        "id": "charles-dickens-1906",
        "title": "Charles Dickens: A Critical Study",
        "year": 1906,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "charles-dickens",
        "notes": "Acclaimed as the definitive critical appreciation of Dickens."
    },
    {
        "id": "the-coulson-kernahan-debate-1906",
        "title": "The Coulson Kernahan Debate on Christianity",
        "year": 1906,
        "type": "Plays, Debates & Public Encounters",
        "publisher": "Martin Secker / Sheed & Ward / Cecil Palmer",
        "status": "In Digital Corpus",
        "slug": "the-coulson-kernahan-debate",
        "notes": "A celebrated public dialogue on whether society can maintain moral standards without the spiritual authority of Christia..."
    },
    {
        "id": "the-campbell-controversy-new-theology-1907",
        "title": "The Campbell Controversy: The New Theology Debate",
        "year": 1907,
        "type": "Plays, Debates & Public Encounters",
        "publisher": "Martin Secker / Sheed & Ward / Cecil Palmer",
        "status": "In Digital Corpus",
        "slug": "the-campbell-controversy-new-theology",
        "notes": "Chesterton's famous public debate with the Rev. R.J. Campbell regarding the New Theology, defending the transcendence of..."
    },
    {
        "id": "all-things-considered-1908",
        "title": "All Things Considered",
        "year": 1908,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "all-things-considered",
        "notes": "Classic essays exploring art, running after one's hat, and fairy tales."
    },
    {
        "id": "orthodoxy-1908",
        "title": "Orthodoxy",
        "year": 1908,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "orthodoxy",
        "notes": "Chesterton’s magnum opus of Christian apologetics, recounting his journey from skepticism to faith through the joyous pa..."
    },
    {
        "id": "the-man-who-was-thursday-1908",
        "title": "The Man Who Was Thursday",
        "year": 1908,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-man-who-was-thursday",
        "notes": "A celebrated metaphysical thriller in which poet-detective Gabriel Syme infiltrates the secret Central Anarchist Council..."
    },
    {
        "id": "george-bernard-shaw-1909",
        "title": "George Bernard Shaw",
        "year": 1909,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "george-bernard-shaw",
        "notes": "Chesterton’s study of his closest friend and intellectual sparring partner."
    },
    {
        "id": "the-ball-and-the-cross-1909",
        "title": "The Ball and the Cross",
        "year": 1909,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-ball-and-the-cross",
        "notes": "An epic ideological duel across Britain between a devout Jacobite Catholic highlander and an ardent atheist editor."
    },
    {
        "id": "tremendous-trifles-1909",
        "title": "Tremendous Trifles",
        "year": 1909,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "tremendous-trifles",
        "notes": "A beloved collection of essays including 'A Piece of Chalk', 'The Dragon's Grandmother', and 'The Twelve Men'."
    },
    {
        "id": "a-defence-of-english-manners-1910",
        "title": "A Defence of English Manners",
        "year": 1910,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "a-defence-of-english-manners",
        "notes": "A delightful essay on the natural courtesy of ordinary working people versus the artificial etiquette of fashionable dra..."
    },
    {
        "id": "alarms-and-discursions-1910",
        "title": "Alarms and Discursions",
        "year": 1910,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "alarms-and-discursions",
        "notes": "Witty essays on Gargoyles, Cheese, Sightseeing, and the English countryside."
    },
    {
        "id": "whats-wrong-with-the-world-1910",
        "title": "What's Wrong with the World",
        "year": 1910,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "whats-wrong-with-the-world",
        "notes": "Chesterton’s foundational social treatise defending the freedom of the family and distributed property."
    },
    {
        "id": "william-blake-1910",
        "title": "William Blake",
        "year": 1910,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "william-blake",
        "notes": "A luminous study of Blake's mysticism, poetry, and drawings."
    },
    {
        "id": "appreciations-and-criticisms-of-dickens-1911",
        "title": "Appreciations and Criticisms of Charles Dickens",
        "year": 1911,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "appreciations-and-criticisms-of-dickens",
        "notes": "Chesterton’s collected prefaces to all of Charles Dickens’s novels."
    },
    {
        "id": "the-ballad-of-the-white-horse-1911",
        "title": "The Ballad of the White Horse",
        "year": 1911,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-ballad-of-the-white-horse",
        "notes": "One of the greatest epic poems of the twentieth century, chronicling King Alfred’s stand against the Danish invaders."
    },
    {
        "id": "the-innocence-of-father-brown-1911",
        "title": "The Innocence of Father Brown",
        "year": 1911,
        "type": "Father Brown Mysteries & Detective Fiction",
        "publisher": "Cassell & Co. / Dodd, Mead / Harper & Brothers",
        "status": "In Digital Corpus",
        "slug": "the-innocence-of-father-brown",
        "notes": "The debut collection introducing Father Brown, the quiet Roman Catholic priest who solves crimes by spiritual empathy."
    },
    {
        "id": "a-miscellany-of-men-1912",
        "title": "A Miscellany of Men",
        "year": 1912,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "a-miscellany-of-men",
        "notes": "Brilliant character sketches analyzing modern human types."
    },
    {
        "id": "manalive-1912",
        "title": "Manalive",
        "year": 1912,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "manalive",
        "notes": "The eccentric adventures of Innocent Smith, who forces tired modern men to fall in love with life again."
    },
    {
        "id": "the-english-agricultural-labourer-1912",
        "title": "The English Agricultural Labourer",
        "year": 1912,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-english-agricultural-labourer",
        "notes": "Chesterton's passionate defense of the rural English worker, diagnosing the tragic historical destruction of the peasant..."
    },
    {
        "id": "magic-a-fantastic-comedy-1913",
        "title": "Magic: A Fantastic Comedy",
        "year": 1913,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "magic-a-fantastic-comedy",
        "notes": "A celebrated 3-act stage play exploring a mysterious conjuror whose real magic confronts a secular Duke."
    },
    {
        "id": "the-victorian-age-in-literature-1913",
        "title": "The Victorian Age in Literature",
        "year": 1913,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "the-victorian-age-in-literature",
        "notes": "A personal overview of Victorian literary giants."
    },
    {
        "id": "the-barbarism-of-berlin-1914",
        "title": "The Barbarism of Berlin",
        "year": 1914,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-barbarism-of-berlin",
        "notes": "The urgent opening salvo of Chesterton's wartime writing, dissecting the cynical doctrine of 'scraps of paper' and the d..."
    },
    {
        "id": "the-flying-inn-1914",
        "title": "The Flying Inn",
        "year": 1914,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-flying-inn",
        "notes": "A satirical romance championing traditional English taverns and liberty against prohibitionists."
    },
    {
        "id": "the-perishing-pharmacy-and-social-reform-1914",
        "title": "The Perishing Pharmacy & Social Reform",
        "year": 1914,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-perishing-pharmacy-and-social-reform",
        "notes": "A searing Distributist pamphlet exposing the alliance between government health bureaucracy, patent medicine monopolies,..."
    },
    {
        "id": "the-wisdom-of-father-brown-1914",
        "title": "The Wisdom of Father Brown",
        "year": 1914,
        "type": "Father Brown Mysteries & Detective Fiction",
        "publisher": "Cassell & Co. / Dodd, Mead / Harper & Brothers",
        "status": "In Digital Corpus",
        "slug": "the-wisdom-of-father-brown",
        "notes": "The second classic Father Brown collection, exploring crimes that hinge on psychological paradoxes."
    },
    {
        "id": "letters-to-an-old-garibaldian-1915",
        "title": "Letters to an Old Garibaldian",
        "year": 1915,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "letters-to-an-old-garibaldian",
        "notes": "Epistolary essays addressed to an Italian veteran of Giuseppe Garibaldi's redshirts, invoking the common Latin heritage ..."
    },
    {
        "id": "the-appetite-of-tyranny-1915",
        "title": "The Appetite of Tyranny",
        "year": 1915,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-appetite-of-tyranny",
        "notes": "Chesterton's fiery wartime critique of Prussian militarism, state absolutism, and the philosophical roots of authoritari..."
    },
    {
        "id": "the-crimes-of-england-1915",
        "title": "The Crimes of England",
        "year": 1915,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-crimes-of-england",
        "notes": "A biting historical analysis examining England's historical errors in supporting Prussian statecraft."
    },
    {
        "id": "wine-water-and-song-1915",
        "title": "Wine, Water, and Song",
        "year": 1915,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "wine-water-and-song",
        "notes": "Chesterton’s celebrated songs and tavern ballads."
    },
    {
        "id": "a-short-history-of-england-1917",
        "title": "A Short History of England",
        "year": 1917,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "a-short-history-of-england",
        "notes": "Chesterton’s celebrated popular history written from the perspective of the ordinary common folk."
    },
    {
        "id": "lord-kitchener-1917",
        "title": "Lord Kitchener",
        "year": 1917,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "lord-kitchener",
        "notes": "A penetrating biographical study of Field Marshal Herbert Kitchener, exploring his stoic persona, military career, and m..."
    },
    {
        "id": "utopia-of-usurers-1917",
        "title": "Utopia of Usurers",
        "year": 1917,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "utopia-of-usurers",
        "notes": "Fierce attacks on financial oligarchies and commercial advertizing."
    },
    {
        "id": "how-to-help-annexation-1918",
        "title": "How to Help Annexation",
        "year": 1918,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "how-to-help-annexation",
        "notes": "Chesterton's sharp diplomatic critique examining the moral necessity of returning Alsace-Lorraine to France and dismantl..."
    },
    {
        "id": "irish-impressions-1919",
        "title": "Irish Impressions",
        "year": 1919,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "irish-impressions",
        "notes": "Chesterton’s reflections on the Irish peasant economy as a living model of Distributism."
    },
    {
        "id": "the-hg-wells-exchanges-1920",
        "title": "The H.G. Wells Exchanges on History and Utopia",
        "year": 1920,
        "type": "Plays, Debates & Public Encounters",
        "publisher": "Martin Secker / Sheed & Ward / Cecil Palmer",
        "status": "In Digital Corpus",
        "slug": "the-hg-wells-exchanges",
        "notes": "The profound and witty public exchanges between G.K. Chesterton and H.G. Wells regarding Wells's Outline of History, evo..."
    },
    {
        "id": "the-new-jerusalem-1920",
        "title": "The New Jerusalem",
        "year": 1920,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-new-jerusalem",
        "notes": "A theological travelogue of Jerusalem, exploring the Crusades, Islamic thought, and the eternal roots of Christendom."
    },
    {
        "id": "the-superstition-of-divorce-1920",
        "title": "The Superstition of Divorce",
        "year": 1920,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-superstition-of-divorce",
        "notes": "A defense of lifelong marriage as the essential bulwark protecting the family."
    },
    {
        "id": "the-uses-of-diversity-1920",
        "title": "The Uses of Diversity",
        "year": 1920,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "the-uses-of-diversity",
        "notes": "Essays on monsters, futurism, Mormonism, stage scenery, and literary variety."
    },
    {
        "id": "thoughts-on-the-present-discontents-1921",
        "title": "Thoughts on the Present Discontents",
        "year": 1921,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "thoughts-on-the-present-discontents",
        "notes": "Chesterton's trenchant post-World War I essays analyzing industrial unrest, labor strikes, and the subtle emergence of H..."
    },
    {
        "id": "eugenics-and-other-evils-1922",
        "title": "Eugenics and Other Evils",
        "year": 1922,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "eugenics-and-other-evils",
        "notes": "A prescient philosophical refutation of eugenics and scientism."
    },
    {
        "id": "the-ballad-of-st-barbara-1922",
        "title": "The Ballad of St. Barbara and Other Verses",
        "year": 1922,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-ballad-of-st-barbara",
        "notes": "Chesterton’s collection featuring 'Lepanto' and 'The Secret People'."
    },
    {
        "id": "the-man-who-knew-too-much-1922",
        "title": "The Man Who Knew Too Much",
        "year": 1922,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-man-who-knew-too-much",
        "notes": "Eight mysteries featuring Horne Fisher, an aristocratic sleuth."
    },
    {
        "id": "the-trees-of-pride-1922",
        "title": "The Trees of Pride",
        "year": 1922,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-trees-of-pride",
        "notes": "A gothic mystery set on the cliffs of Cornwall."
    },
    {
        "id": "what-i-saw-in-america-1922",
        "title": "What I Saw in America",
        "year": 1922,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "what-i-saw-in-america",
        "notes": "Chesterton's commentary on his American lecture tour."
    },
    {
        "id": "where-all-roads-lead-1922",
        "title": "Where All Roads Lead",
        "year": 1922,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "where-all-roads-lead",
        "notes": "Chesterton's first major philosophical essays written for Blackfriars following his conversion to Catholicism, exploring..."
    },
    {
        "id": "fancies-versus-fads-1923",
        "title": "Fancies Versus Fads",
        "year": 1923,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "fancies-versus-fads",
        "notes": "Devastating essays critiquing modern fads (psychoanalysis, vegetarianism, free verse)."
    },
    {
        "id": "st-francis-of-assisi-1923",
        "title": "Saint Francis of Assisi",
        "year": 1923,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "st-francis-of-assisi",
        "notes": "An incandescent biographical and spiritual portrait of St. Francis, illuminating Franciscan joy and holy poverty."
    },
    {
        "id": "the-new-witness-editorials-1923",
        "title": "The New Witness Editorials",
        "year": 1923,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "the-new-witness-editorials",
        "notes": "Chesterton's searing weekly editorials for The New Witness following the Marconi Scandal, exposing parliamentary corrupt..."
    },
    {
        "id": "the-end-of-the-roman-road-1924",
        "title": "The End of the Roman Road",
        "year": 1924,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-end-of-the-roman-road",
        "notes": "A poetic prose meditation following the old Roman road across the English countryside, encountering the pageant of medie..."
    },
    {
        "id": "gks-weekly-and-distributist-essays-1925",
        "title": "G.K.'s Weekly: The Distributist Essays",
        "year": 1925,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "gks-weekly-and-distributist-essays",
        "notes": "Chesterton’s fiery editorial essays in his self-founded weekly review."
    },
    {
        "id": "tales-of-the-long-bow-1925",
        "title": "Tales of the Long Bow",
        "year": 1925,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "tales-of-the-long-bow",
        "notes": "Eight interconnected stories in which Distributist rebels fulfill proverbial impossibilities."
    },
    {
        "id": "the-everlasting-man-1925",
        "title": "The Everlasting Man",
        "year": 1925,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-everlasting-man",
        "notes": "Chesterton’s monumental survey of human history and the incarnation. Famous as the book that converted C.S. Lewis to Chr..."
    },
    {
        "id": "william-cobbett-1925",
        "title": "William Cobbett",
        "year": 1925,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "william-cobbett",
        "notes": "A biography of William Cobbett, the great agrarian champion of the English peasantry against industrialization."
    },
    {
        "id": "the-catholic-church-and-conversion-1926",
        "title": "The Catholic Church and Conversion",
        "year": 1926,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-catholic-church-and-conversion",
        "notes": "Chesterton’s personal reflection on the three stages of conversion to the Catholic Church."
    },
    {
        "id": "the-incredulity-of-father-brown-1926",
        "title": "The Incredulity of Father Brown",
        "year": 1926,
        "type": "Father Brown Mysteries & Detective Fiction",
        "publisher": "Cassell & Co. / Dodd, Mead / Harper & Brothers",
        "status": "In Digital Corpus",
        "slug": "the-incredulity-of-father-brown",
        "notes": "Eight stories where Father Brown unmasks seemingly supernatural miracles and curses through strict common sense."
    },
    {
        "id": "the-outline-of-sanity-1926",
        "title": "The Outline of Sanity",
        "year": 1926,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-outline-of-sanity",
        "notes": "The definitive exposition of Distributist economic theory."
    },
    {
        "id": "the-queen-of-seven-swords-1926",
        "title": "The Queen of Seven Swords",
        "year": 1926,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-queen-of-seven-swords",
        "notes": "Chesterton’s sequence of devotional poems dedicated to Our Lady."
    },
    {
        "id": "robert-louis-stevenson-1927",
        "title": "Robert Louis Stevenson",
        "year": 1927,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "robert-louis-stevenson",
        "notes": "A defense of Stevenson’s storytelling genius."
    },
    {
        "id": "the-collected-poems-of-gk-chesterton-1927",
        "title": "The Collected Poems of G.K. Chesterton",
        "year": 1927,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-collected-poems-of-gk-chesterton",
        "notes": "The definitive lifetime treasury containing his greatest shorter poems."
    },
    {
        "id": "the-judgement-of-dr-johnson-1927",
        "title": "The Judgement of Dr. Johnson",
        "year": 1927,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-judgement-of-dr-johnson",
        "notes": "A historical comedy featuring Dr. Samuel Johnson and James Boswell resolving political intrigue."
    },
    {
        "id": "the-return-of-don-quixote-1927",
        "title": "The Return of Don Quixote",
        "year": 1927,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-return-of-don-quixote",
        "notes": "A quiet librarian is cast as a medieval king in a play and decides to enforce medieval law in modern England."
    },
    {
        "id": "the-secret-of-father-brown-1927",
        "title": "The Secret of Father Brown",
        "year": 1927,
        "type": "Father Brown Mysteries & Detective Fiction",
        "publisher": "Cassell & Co. / Dodd, Mead / Harper & Brothers",
        "status": "In Digital Corpus",
        "slug": "the-secret-of-father-brown",
        "notes": "Framed around Father Brown explaining his inner method of moral identification to an American visitor."
    },
    {
        "id": "do-we-agree-debate-with-shaw-1928",
        "title": "Do We Agree? A Debate with Bernard Shaw",
        "year": 1928,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "do-we-agree-debate-with-shaw",
        "notes": "The complete verbatim transcript of the historic public debate between G.K. Chesterton and George Bernard Shaw."
    },
    {
        "id": "generally-speaking-1928",
        "title": "Generally Speaking",
        "year": 1928,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "generally-speaking",
        "notes": "Essays on archaeology, travel, Christmas customs, and intellectual fashion."
    },
    {
        "id": "the-new-unbelief-1928",
        "title": "The New Unbelief",
        "year": 1928,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-new-unbelief",
        "notes": "Chesterton's trenchant diagnosis of 20th-century secularism, demonstrating how modern skepticism has abandoned rationali..."
    },
    {
        "id": "the-sword-of-wood-1928",
        "title": "The Sword of Wood",
        "year": 1928,
        "type": "Father Brown Mysteries & Detective Fiction",
        "publisher": "Cassell & Co. / Dodd, Mead / Harper & Brothers",
        "status": "In Digital Corpus",
        "slug": "the-sword-of-wood",
        "notes": "A delightful philosophical fantasy tale in which a magnetized rapier that shatters all steel meets its match in a humble..."
    },
    {
        "id": "gkc-as-mc-introductions-1929",
        "title": "G.K.C. as M.C.: Thirty-Seven Introductions",
        "year": 1929,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "gkc-as-mc-introductions",
        "notes": "A magnificent anthology collecting Chesterton's introductions and prefaces to major classics, including The Book of Job,..."
    },
    {
        "id": "the-poet-and-the-lunatics-1929",
        "title": "The Poet and the Lunatics",
        "year": 1929,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-poet-and-the-lunatics",
        "notes": "Eight mysteries solved by landscape painter and poet Gabriel Gale."
    },
    {
        "id": "the-thing-1929",
        "title": "The Thing: Why I Am a Catholic",
        "year": 1929,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-thing",
        "notes": "A collection of 34 essays defending his conversion to Catholicism, containing the origin of 'Chesterton's Fence'."
    },
    {
        "id": "come-to-think-of-it-1930",
        "title": "Come to Think of It: A Book of Essays",
        "year": 1930,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "come-to-think-of-it",
        "notes": "Essays from The Illustrated London News exploring modern slang, detective fiction, psychology, and public life."
    },
    {
        "id": "four-faultless-felons-1930",
        "title": "Four Faultless Felons",
        "year": 1930,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "four-faultless-felons",
        "notes": "Four novellas in which honorable people commit apparent crimes to prevent far greater moral evils."
    },
    {
        "id": "the-catholic-church-and-the-modern-state-1930",
        "title": "The Catholic Church and the Modern State",
        "year": 1930,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-catholic-church-and-the-modern-state",
        "notes": "A prophetic treatise analyzing the growing threat of modern totalitarian statism and asserting the Church and the Family..."
    },
    {
        "id": "the-resurrection-of-rome-1930",
        "title": "The Resurrection of Rome",
        "year": 1930,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-resurrection-of-rome",
        "notes": "A cultural, historical, and spiritual study of Rome and its perpetual resurrection across the centuries."
    },
    {
        "id": "the-turkey-and-the-turk-1930",
        "title": "The Turkey and the Turk",
        "year": 1930,
        "type": "Plays, Debates & Public Encounters",
        "publisher": "Martin Secker / Sheed & Ward / Cecil Palmer",
        "status": "In Digital Corpus",
        "slug": "the-turkey-and-the-turk",
        "notes": "Chesterton's delightful Christmas mummers' play in rhyming couplets, satirizing modern commercialism, political bureaucr..."
    },
    {
        "id": "all-is-grist-1931",
        "title": "All is Grist: A Book of Essays",
        "year": 1931,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "all-is-grist",
        "notes": "Essays exploring the modern business state, humor, and skepticism."
    },
    {
        "id": "chesterton-on-america-and-modernity-1931",
        "title": "Chesterton on America and Modernity",
        "year": 1931,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "chesterton-on-america-and-modernity",
        "notes": "Chesterton's comprehensive essays on the United States, evaluating the Declaration of Independence, Henry Ford, Prohibit..."
    },
    {
        "id": "bbc-radio-talks-and-broadcasts-1931",
        "title": "The BBC Radio Broadcasts & Spoken Talks",
        "year": 1931,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "bbc-radio-talks-and-broadcasts",
        "notes": "Verbatim transcripts of Chesterton’s pioneering BBC radio broadcasts."
    },
    {
        "id": "the-chesterton-darrow-debate-1931",
        "title": "The Chesterton-Darrow Debate",
        "year": 1931,
        "type": "Plays, Debates & Public Encounters",
        "publisher": "Martin Secker / Sheed & Ward / Cecil Palmer",
        "status": "In Digital Corpus",
        "slug": "the-chesterton-darrow-debate",
        "notes": "The legendary debate between G.K. Chesterton and agnostic trial titan Clarence Darrow before 4,000 spectators in New Yor..."
    },
    {
        "id": "chaucer-1932",
        "title": "Chaucer",
        "year": 1932,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "chaucer",
        "notes": "A study of Geoffrey Chaucer, the Canterbury Tales, and medieval England."
    },
    {
        "id": "christendom-in-dublin-1932",
        "title": "Christendom in Dublin",
        "year": 1932,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "christendom-in-dublin",
        "notes": "Chesterton’s vivid first-hand account of the 1932 International Eucharistic Congress in Dublin."
    },
    {
        "id": "sidelights-on-new-london-and-newer-york-1932",
        "title": "Sidelights on New London and Newer York",
        "year": 1932,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "sidelights-on-new-london-and-newer-york",
        "notes": "Essays examining the changing city landscapes of London and New York, Hollywood films, and capitalism."
    },
    {
        "id": "the-surprise-1932",
        "title": "The Surprise: A Play in Two Acts",
        "year": 1932,
        "type": "Poetry & Epic Verse",
        "publisher": "Grant Richards / Methuen & Co. / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-surprise",
        "notes": "A philosophical play in which a puppet-maker creates a perfect play with wooden marionettes and then asks the miracle of..."
    },
    {
        "id": "all-i-survey-1933",
        "title": "All I Survey: A Book of Essays",
        "year": 1933,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "all-i-survey",
        "notes": "Essays on modern fashion, bad temper, memory, and English architecture."
    },
    {
        "id": "st-thomas-aquinas-1933",
        "title": "Saint Thomas Aquinas: The Dumb Ox",
        "year": 1933,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "st-thomas-aquinas",
        "notes": "Universally praised by philosophers as a brilliant exposition of Thomism, celebrating Aquinas's robust affirmation of ph..."
    },
    {
        "id": "avowals-and-denials-1934",
        "title": "Avowals and Denials: A Book of Essays",
        "year": 1934,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "avowals-and-denials",
        "notes": "Sharp reflections on determinism, science, and the sanity of the human spirit."
    },
    {
        "id": "chesterton-on-art-and-aesthetics-1935",
        "title": "Chesterton on Art and Aesthetics",
        "year": 1935,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "chesterton-on-art-and-aesthetics",
        "notes": "A profound aesthetic treatise collecting Chesterton's writings on painting, sculpture, architecture, and the philosophy ..."
    },
    {
        "id": "the-bertrand-russell-encounter-1935",
        "title": "The Bertrand Russell Encounter",
        "year": 1935,
        "type": "Plays, Debates & Public Encounters",
        "publisher": "Martin Secker / Sheed & Ward / Cecil Palmer",
        "status": "In Digital Corpus",
        "slug": "the-bertrand-russell-encounter",
        "notes": "The historic intellectual clash between G.K. Chesterton and philosopher Bertrand Russell examining whether scientific sk..."
    },
    {
        "id": "the-scandal-of-father-brown-1935",
        "title": "The Scandal of Father Brown",
        "year": 1935,
        "type": "Father Brown Mysteries & Detective Fiction",
        "publisher": "Cassell & Co. / Dodd, Mead / Harper & Brothers",
        "status": "In Digital Corpus",
        "slug": "the-scandal-of-father-brown",
        "notes": "The final collection of Father Brown mysteries published during Chesterton's lifetime."
    },
    {
        "id": "the-way-of-the-cross-1935",
        "title": "The Way of the Cross",
        "year": 1935,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-way-of-the-cross",
        "notes": "Chesterton's moving, profound devotional reflections on the fourteen Stations of the Cross, meditating on divine sufferi..."
    },
    {
        "id": "the-well-and-the-shallows-1935",
        "title": "The Well and the Shallows",
        "year": 1935,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "the-well-and-the-shallows",
        "notes": "Chesterton’s final theological essay collection, defending Catholic realism against modern secular fads."
    },
    {
        "id": "as-i-was-saying-1936",
        "title": "As I Was Saying: A Book of Essays",
        "year": 1936,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "as-i-was-saying",
        "notes": "The last essay collection published during Chesterton's lifetime."
    },
    {
        "id": "blackfriars-and-dublin-review-essays-1936",
        "title": "Blackfriars & Dublin Review Inquiries",
        "year": 1936,
        "type": "Christian Apologetics & Philosophy",
        "publisher": "Hodder & Stoughton / Sheed & Ward / Burns & Oates",
        "status": "In Digital Corpus",
        "slug": "blackfriars-and-dublin-review-essays",
        "notes": "Chesterton's mature theological inquiries, historical essays, and philosophical critiques contributed to the premier Cat..."
    },
    {
        "id": "chesterton-on-shakespeare-1936",
        "title": "Chesterton on Shakespeare",
        "year": 1936,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "chesterton-on-shakespeare",
        "notes": "Chesterton's lifetime collection of essays on William Shakespeare, celebrating his Catholic medieval roots, tragic grand..."
    },
    {
        "id": "autobiography-of-gk-chesterton-1936",
        "title": "The Autobiography of G. K. Chesterton",
        "year": 1936,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "autobiography-of-gk-chesterton",
        "notes": "Chesterton’s final memoir, published posthumously in 1936."
    },
    {
        "id": "the-soul-of-wit-aphorisms-1936",
        "title": "The Soul of Wit: Aphorisms and Paradoxes",
        "year": 1936,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "the-soul-of-wit-aphorisms",
        "notes": "An authoritative compilation of Chesterton's sharpest aphorisms, paradoxes, and epigrams on truth, marriage, sanity, dem..."
    },
    {
        "id": "the-spice-of-life-1936",
        "title": "The Spice of Life and Other Essays",
        "year": 1936,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "the-spice-of-life",
        "notes": "Chesterton’s late essays and radio reflections on what makes life worth living."
    },
    {
        "id": "the-coloured-lands-1937",
        "title": "The Coloured Lands",
        "year": 1937,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-coloured-lands",
        "notes": "Fairy stories, juvenile tales, and parodies written and illustrated by Chesterton."
    },
    {
        "id": "the-paradoxes-of-mr-pond-1937",
        "title": "The Paradoxes of Mr. Pond",
        "year": 1937,
        "type": "Novels & Fantastic Romances",
        "publisher": "John Lane / J.W. Arrowsmith / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-paradoxes-of-mr-pond",
        "notes": "Eight paradox-detective stories starring Mr. Pond solving impossible crimes."
    },
    {
        "id": "the-end-of-the-armistice-1940",
        "title": "The End of the Armistice",
        "year": 1940,
        "type": "Distributism, Politics & Social Philosophy",
        "publisher": "Chatto & Windus / Cecil Palmer / Methuen & Co.",
        "status": "In Digital Corpus",
        "slug": "the-end-of-the-armistice",
        "notes": "Chesterton's essays warning of the rise of Nazism, communism, and the moral defense of Western civilization."
    },
    {
        "id": "the-common-man-1950",
        "title": "The Common Man",
        "year": 1950,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "the-common-man",
        "notes": "A collection of essays defending the wisdom and common sense of the ordinary citizen."
    },
    {
        "id": "a-handful-of-authors-1953",
        "title": "A Handful of Authors",
        "year": 1953,
        "type": "Literary Criticism & Biographies",
        "publisher": "Macmillan / Duckworth / Faber & Faber",
        "status": "In Digital Corpus",
        "slug": "a-handful-of-authors",
        "notes": "A posthumous collection of Chesterton's literary essays covering Lewis Carroll, Mark Twain, Victor Hugo, Cervantes, Jane..."
    },
    {
        "id": "the-glass-walking-stick-1955",
        "title": "The Glass Walking-Stick and Other Essays",
        "year": 1955,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "the-glass-walking-stick",
        "notes": "Selected master essays on odd objects, history, and human eccentricity."
    },
    {
        "id": "lunacy-and-letters-1958",
        "title": "Lunacy and Letters",
        "year": 1958,
        "type": "Essays & Fleet Street Journalism",
        "publisher": "Methuen & Co. / Illustrated London News / Daily News",
        "status": "In Digital Corpus",
        "slug": "lunacy-and-letters",
        "notes": "Sparkling early Daily News essays exploring nonsense literature, humor, and books."
    }
];

  if (typeof window !== "undefined") {
    window.ARCHIVAL_CATALOG = ARCHIVAL_CATALOG;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = ARCHIVAL_CATALOG;
  }
})();
