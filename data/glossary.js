/**
 * G.K. Chesterton — Thematic Lexicon & Philosophical Glossary
 * Core Chestertonian Concepts, Paradoxes, Characters, and Literary Principles (12 Core Entries)
 */
(function() {
  const GLOSSARY_DATA = {
    "distributism": {
        "term": "Distributism",
        "category": "Social & Economic Philosophy",
        "definition": "A third-way economic and social philosophy formulated by G.K. Chesterton and Hilaire Belloc based on Catholic social teaching (notably Leo XIII's Rerum Novarum). Distributism asserts that the ownership of the means of production and private property should be spread as widely as possible among families and individuals, rather than concentrated in the hands of the State (Socialism) or a few oligarchic monopolies (Capitalism).",
        "quote": "The problem with capitalism is not that there are too many capitalists, but that there are too few.",
        "source": "The Outline of Sanity (1926) & What's Wrong with the World (1910)"
    },
    "chestertons-fence": {
        "term": "Chesterton's Fence",
        "category": "Epistemology & Reform",
        "definition": "The famous principle of institutional and moral conservatism: before removing or destroying a law, custom, or barrier, one must first discover and understand why it was put there in the first place. If you do not see the reason for the fence, you are not qualified to tear it down.",
        "quote": "In the matter of reforming things, as distinct from deforming them, there is one plain and simple principle; a principle which will probably be called a paradox. There exists in such a case a certain institution or law; let us say, for the sake of simplicity, a fence or gate erected across a road... If he cannot see use in it, we cannot even let him clear it away.",
        "source": "The Thing: Why I Am a Catholic (1929)"
    },
    "ethics-of-elfland": {
        "term": "The Ethics of Elfland",
        "category": "Metaphysics & Wonder",
        "definition": "Chesterton’s doctrine that existence is not a cold mechanical necessity, but an astonishing, unearned fairy tale. Natural laws are not logical inevitabilities but recurring divine rhythms; an apple falls to the ground not because it must by dead law, but because God never tires of saying 'Do it again' to the sun and the seasons.",
        "quote": "A child kicks his legs rhythmically through excess of life, not an absence of it. Because children have abounding vitality, because they are in spirit fierce and free, therefore they want things repeated and unchanged. They always say, 'Do it again'; and the grown-up person does it again until he is nearly dead. For grown-up people are not strong enough to exult in monotony.",
        "source": "Orthodoxy (1908), Chapter IV"
    },
    "paradox": {
        "term": "The Method of Paradox",
        "category": "Literary & Dialectical Method",
        "definition": "Chesterton’s signature literary and theological tool. A paradox is not a contradiction, but truth standing on her head to get attention. By juxtaposing seemingly opposing truths (such as humility and fierce courage, or sanity and wild wonder), paradox captures the multidimensional mystery of human life that narrow logic flattens.",
        "quote": "Paradox simply means a truth standing on her head to attract attention... The real world is not a rational world, but a magic world.",
        "source": "Orthodoxy (1908) & Tremendous Trifles (1909)"
    },
    "the-maniac": {
        "term": "The Maniac vs. The Poet",
        "category": "Psychology & Epistemology",
        "definition": "Chesterton’s refutation of modern rationalism: the madman is not the man who has lost his reason; the madman is the man who has lost everything except his reason. His logic is airtight, circular, and utterly devoid of breadth, humor, and connection to the vastness of the real world.",
        "quote": "The madman's explanation of a thing is always complete, and often in a purely rational sense satisfactory... If you argue with a madman, it is extremely probable that you will get the worst of it; for his mind moves all the quicker for not being delayed by the things that go with good judgment.",
        "source": "Orthodoxy (1908), Chapter II"
    },
    "suicide-of-thought": {
        "term": "The Suicide of Thought",
        "category": "Epistemology & Reason",
        "definition": "The inevitable end of universal skepticism: when human reason begins to doubt its own capacity to know truth, it destroys the foundation of reason itself. Chesterton showed that thought must start with unprovable dogmas (that truth exists, that memory is reliable) in order to think at all.",
        "quote": "The act of defending any of the cardinal virtues has today all the exhilaration of a vice... We shall soon be in a world in which a man may be howled down for saying that two and two make four.",
        "source": "Orthodoxy (1908), Chapter III"
    },
    "father-brown-method": {
        "term": "Father Brown's Method (Moral Introspection)",
        "category": "Detective Fiction & Psychology",
        "definition": "Unlike Sherlock Holmes's purely external, material deductive method, Father Brown solves crimes by internal moral sympathy and identification. He reconstructs the murder by finding within his own human soul the exact root of temptation, pride, or despair that led the criminal to act.",
        "quote": "I had planned out each of the crimes very carefully. I had thought out exactly how a thing like that could be done, and what sort of a man a man would have to be to do it. And when I was quite sure that I felt exactly like the murderer myself, of course I knew who he was.",
        "source": "The Secret of Father Brown (1927)"
    },
    "democracy-of-the-dead": {
        "term": "Tradition as the Democracy of the Dead",
        "category": "Political & Social Philosophy",
        "definition": "Chesterton's famous formulation of tradition: giving a vote to our ancestors. True democracy refuses to submit to the oligarchy of those who merely happen to be walking about at this present moment.",
        "quote": "Tradition means giving votes to the most obscure of all classes, our ancestors. It is the democracy of the dead. Tradition refuses to submit to the small and arrogant oligarchy of those who merely happen to be walking about.",
        "source": "Orthodoxy (1908), Chapter IV"
    },
    "primary-wonder": {
        "term": "Primary Wonder & Cosmic Gratitude",
        "category": "Philosophy of Life",
        "definition": "The fundamental spiritual stance of astonishment that anything exists at all rather than nothing. Chesterton insisted that life is a miraculous gift, and that cosmic gratitude is the only rational starting point for sanity.",
        "quote": "The greatest of poems is the inventory of everything that is. The world will never starve for want of wonders; but only for want of wonder.",
        "source": "Tremendous Trifles (1909)"
    },
    "signature-of-man": {
        "term": "Art as the Signature of Man",
        "category": "Anthropology & Aesthetics",
        "definition": "The insight that artistic creation is unique to humanity and separates mankind infinitely from all other animal species. Cave art demonstrates that man was not a beast slowly evolving into a craftsman, but an artist from the first moment of his appearance.",
        "quote": "Art is the signature of man... When modern science treats man as a mere animal, it forgets that animals do not draw pictures on rock walls.",
        "source": "The Everlasting Man (1925), Chapter I"
    },
    "subsidiarity": {
        "term": "Subsidiarity & Local Autonomy",
        "category": "Political Philosophy",
        "definition": "The governance principle that social tasks and responsibilities should always be performed at the most immediate or local level possible (by the family, the parish, the guild, the town) rather than absorbed by a centralized imperial state.",
        "quote": "Let the small things be governed by the small groups, and the great things by the great; but do not let the empire decide how the cottager boils his cabbage.",
        "source": "The Outline of Sanity (1926)"
    },
    "the-flag-of-the-world": {
        "term": "The Flag of the World",
        "category": "Apologetics & Loyalty",
        "definition": "Chesterton's doctrine that a man must love the universe before it is lovable, just as a patriot must love his country before it is great. Cosmic patriotism requires loyalty to life even amidst suffering, rejecting both cheap optimism and despairing pessimism.",
        "quote": "Can he hate it enough to change it, and yet love it enough to think it worth changing?... Cosmic loyalty is the first condition of sanity.",
        "source": "Orthodoxy (1908), Chapter V"
    }
};

  if (typeof window !== "undefined") {
    window.GLOSSARY_DATA = GLOSSARY_DATA;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = GLOSSARY_DATA;
  }
})();
