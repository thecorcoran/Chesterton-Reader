/**
 * G.K. Chesterton — Thematic Lexicon & Philosophical Glossary
 * Core Chestertonian Concepts, Paradoxes, Characters, and Literary Principles
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
    "father-brown-method": {
      "term": "Father Brown's Method (Moral Introspection)",
      "category": "Detective Fiction & Psychology",
      "definition": "Unlike Sherlock Holmes's purely external, material deductive method, Father Brown solves crimes by internal moral sympathy and identification. He reconstructs the murder by finding within his own human soul the exact root of temptation, pride, or despair that led the criminal to act.",
      "quote": "I had planned out each of the crimes very carefully. I had thought out exactly how a thing like that could be done, and what sort of a man a man would have to be to do it. And when I was quite sure that I felt exactly like the murderer myself, of course I knew who he was.",
      "source": "The Secret of Father Brown (1927)"
    },
    "flambeau": {
      "term": "Flambeau (Hercule Flambeau)",
      "category": "Characters & Archetypes",
      "definition": "The colossal French master-thief and acrobat of crime who begins as Father Brown's arch-nemesis (introduced in 'The Blue Cross') and is later converted by Father Brown's spiritual insight, becoming a respectable private detective and lifelong companion to the priest.",
      "quote": "He was a Colossus whose crimes were like masterworks of art; but under the quiet gaze of the little Essex priest, the bandit discovered that he had a soul.",
      "source": "The Innocence of Father Brown (1911)"
    },
    "the-maniac": {
      "term": "The Maniac vs. The Poet",
      "category": "Psychology & Epistemology",
      "definition": "Chesterton’s refutation of modern rationalism: the madman is not the man who has lost his reason; the madman is the man who has lost everything except his reason. His logic is airtight, circular, and utterly devoid of breadth, humor, and connection to the vastness of the real world.",
      "quote": "The madman's explanation of a thing is always complete, and often in a purely rational sense satisfactory... If you argue with a madman, it is extremely probable that you will get the worst of it; for his mind moves all the quicker for not being delayed by the things that go with good judgment.",
      "source": "Orthodoxy (1908), Chapter II"
    },
    "primary-wonder": {
      "term": "Primary Wonder & Gratitude",
      "category": "Philosophy of Life",
      "definition": "The fundamental spiritual stance of astonishment that anything exists at all rather than nothing. Chesterton insisted that life is a miraculous gift, and that cosmic gratitude is the only rational starting point for sanity.",
      "quote": "The greatest of poems is the inventory of everything that is. The world is not lacking in wonders, but in the sense of wonder.",
      "source": "Tremendous Trifles (1909) & Saint Francis of Assisi (1923)"
    },
    "the-secret-people": {
      "term": "The Secret People (The Common Man)",
      "category": "Social & Historical Vision",
      "definition": "Chesterton’s championing of ordinary working people against political oligarchies, intellectual snobs, and technocrats. He believed in the profound spiritual wisdom of common sense and the enduring soul of the everyday citizen.",
      "quote": "Smile at us, pay us, pass us; but do not quite forget; For we are the people of England, that never have spoken yet.",
      "source": "The Ballad of 'The Secret People' (1907)"
    },
    "sunday-central-anarchist": {
      "term": "Sunday (The President)",
      "category": "Literary Metaphor & Allegory",
      "definition": "The enigmatic, towering President of the Central Anarchist Council in *The Man Who Was Thursday*. He embodies Nature, Providence, the Sabbath, and the overwhelming, terrifying, yet ultimate goodness of the Creator behind the mask of cosmic terror.",
      "quote": "'I am the Sabbath,' said Sunday. 'I am the peace of God.'",
      "source": "The Man Who Was Thursday (1908)"
    },
    "subsidiarity": {
      "term": "Subsidiarity & The Home",
      "category": "Social & Political Philosophy",
      "definition": "The principle that matters ought to be handled by the smallest, lowest, or least centralized competent authority—starting with the family and the home, which Chesterton celebrated as the ultimate fortress of human liberty and variety.",
      "quote": "The home is the only place of liberty; indeed, it is the only place of anarchy. It is the only place where a man can alter the rules of the house if he wants to sleep on the roof or dine on the floor.",
      "source": "What's Wrong with the World (1910)"
    },
    "flag-of-the-world": {
      "term": "The Flag of the World (Loyalty to Being)",
      "category": "Theology & Metaphysics",
      "definition": "Chesterton’s argument that we must love the cosmos before it is lovable, just as a patriot loves his country before she is victorious. Cosmic optimism is not a detached calculation of benefits, but a primal vow of loyalty to creation.",
      "quote": "No man can love his country because it is great; he must love it because it is his country. Love is not blind; that is the last thing that it is. Love is bound, and the more it is bound the less it is blind.",
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
