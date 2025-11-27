// --- TAROT DATA (with upright + reversed meanings) ---
// @ts-nocheck

const majorArcana = [
  {
    name: "The Fool",
    keyword: "Beginnings · Innocence · Leap",
    upright: {
      meaning: "A fresh start, new path, trust in the unknown, curiosity guiding growth.",
      affirmations: [
        "I trust the path even before I see it.",
        "I am allowed to begin again without regret.",
        "Curiosity leads me where courage will follow."
      ],
      selfCare: "Do something small today that feels new — a different drink, playlist, or walk route. Let it open your mind gently."
    },
    reversed: {
      meaning: "Fear of change, reckless choices, hesitation, resisting growth.",
      affirmations: [
        "I release the fear that keeps me frozen.",
        "I move with intention, not pressure.",
        "I learn without punishing myself for not knowing."
      ],
      selfCare: "Write down one fear you’ve been avoiding. Then write one gentle action that makes it less scary."
    }
  },

  {
    name: "The Magician",
    keyword: "Power · Skill · Manifestation",
    upright: {
      meaning: "Taking action, using your tools, focus, creation, confidence.",
      affirmations: [
        "Everything I need is already in my hands.",
        "My focus turns ideas into reality.",
        "I create with intention, not impulse."
      ],
      selfCare: "Clean your space for five minutes. Creating clarity around you strengthens the magic within you."
    },
    reversed: {
      meaning: "Blocked potential, distractions, doubt, manipulation of self or others.",
      affirmations: [
        "My power grows when I stop doubting it.",
        "I refuse to let distractions dim my purpose.",
        "I won’t sabotage the future I want."
      ],
      selfCare: "Turn off notifications for a little while and do one task with full presence."
    }
  },

  {
    name: "The High Priestess",
    keyword: "Intuition · Mystery · Inner Voice",
    upright: {
      meaning: "Deep knowing, spiritual insight, stillness, inner guidance.",
      affirmations: [
        "My intuition whispers the truth first.",
        "Silence is a sanctuary, not emptiness.",
        "I honor what I feel before I explain it."
      ],
      selfCare: "Sit in silence for 2–3 minutes. Place your hand on your chest and ask yourself what you need right now."
    },
    reversed: {
      meaning: "Avoiding truth, confusion, ignoring your intuition, secrets.",
      affirmations: [
        "I stop dismissing what I already know.",
        "I choose honesty over comfort.",
        "I trust the wisdom I’ve been avoiding."
      ],
      selfCare: "Journal one question you've been avoiding, even if you don’t answer it yet."
    }
  },

  {
    name: "The Empress",
    keyword: "Nurture · Abundance · Creation",
    upright: {
      meaning: "Self-care, growth, comfort, creativity, emotional nourishment.",
      affirmations: [
        "My softness nourishes my growth.",
        "I deserve abundance and ease.",
        "I become through care, not force."
      ],
      selfCare: "Do a small physical act of care — lotion, soft clothes, warm drink, or resting your body intentionally."
    },
    reversed: {
      meaning: "Creative block, burnout, neglecting your own needs.",
      affirmations: [
        "I refill myself before I pour into others.",
        "My needs are valid and worthy of attention.",
        "I choose rest without guilt."
      ],
      selfCare: "Cancel one non-essential obligation. Use the time for genuine rest, not productivity."
    }
  },

  {
    name: "The Emperor",
    keyword: "Structure · Authority · Boundaries",
    upright: {
      meaning: "Control, stability, leadership, discipline, clear boundaries.",
      affirmations: [
        "I lead my life with clarity and strength.",
        "My boundaries protect my peace.",
        "I build structure that supports me."
      ],
      selfCare: "Create a tiny routine: make your bed, set a timer, plan tomorrow. Choose one and do it intentionally."
    },
    reversed: {
      meaning: "Power struggles, rigid thinking, lack of control, anger.",
      affirmations: [
        "I release my need to control everything.",
        "I allow flexibility where rigidity once lived.",
        "I choose grounded strength over force."
      ],
      selfCare: "Identify one rule you've made for yourself that no longer serves you — and soften it."
    }
  },

  {
    name: "The Hierophant",
    keyword: "Tradition · Learning · Guidance",
    upright: {
      meaning: "Seeking knowledge, mentorship, spiritual guidance, grounding rituals.",
      affirmations: [
        "I learn from the old while shaping the new.",
        "Wisdom grows through practice and patience.",
        "Guidance surrounds me when I’m open to it."
      ],
      selfCare: "Do a grounding ritual: light a candle, make tea, cleanse your room, pray, journal — choose one."
    },
    reversed: {
      meaning: "Rebellion, breaking tradition, finding your own path.",
      affirmations: [
        "I release rules that no longer serve me.",
        "I define my own path with confidence.",
        "I honor my truth even when it differs from others."
      ],
      selfCare: "Do something your way — rewrite a routine or break a rule that limits your expression."
    }
  },

  {
    name: "The Lovers",
    keyword: "Connection · Choice · Alignment",
    upright: {
      meaning: "Harmony, relationships, values aligning, meaningful choices.",
      affirmations: [
        "I choose what aligns with my values.",
        "I deserve connections that feel safe and mutual.",
        "My choices reflect my truth."
      ],
      selfCare: "Text someone loving or supportive. Water a connection that feels reciprocal."
    },
    reversed: {
      meaning: "Disharmony, imbalance, misalignment, difficult decisions.",
      affirmations: [
        "I release relationships that drain me.",
        "I choose alignment over attachment.",
        "I deserve reciprocity, not confusion."
      ],
      selfCare: "Check in with yourself: What am I giving too much of today? What do I need more of?"
    }
  },

  {
    name: "The Chariot",
    keyword: "Willpower · Control · Momentum",
    upright: {
      meaning: "Forward movement, determination, discipline, victory through effort.",
      affirmations: [
        "My steps, even small ones, move me forward.",
        "I steer my life instead of drifting.",
        "My determination is stronger than my doubt."
      ],
      selfCare: "Pick ONE task you’ve avoided. Set a 5-minute timer and only do the first small part."
    },
    reversed: {
      meaning: "Lack of direction, burnout, losing momentum.",
      affirmations: [
        "I move at a pace that protects my energy.",
        "Rest is part of my progress.",
        "Not knowing everything yet doesn’t stop my path."
      ],
      selfCare: "Pause. Delay one task that is not urgent and use the time to reset."
    }
  },

  {
    name: "Strength",
    keyword: "Courage · Compassion · Inner Power",
    upright: {
      meaning: "Patience, inner calm, resilience, gentle strength.",
      affirmations: [
        "My gentleness is a form of power.",
        "I face discomfort with calm courage.",
        "Strength grows in quiet moments."
      ],
      selfCare: "Speak to yourself kindly — out loud or in writing. Use the tone you’d use with someone you love."
    },
    reversed: {
      meaning: "Self-doubt, fear, feeling overwhelmed.",
      affirmations: [
        "I treat myself with kindness when I struggle.",
        "I am stronger than my spirals.",
        "I meet fear with compassion, not judgment."
      ],
      selfCare: "Let yourself rest without criticizing your energy level. You don't have to 'push through' today."
    }
  },

  {
    name: "The Hermit",
    keyword: "Solitude · Reflection · Wisdom",
    upright: {
      meaning: "Inner reflection, solitude, clarity, spiritual insight.",
      affirmations: [
        "My inner world is a place of wisdom.",
        "Solitude helps me hear myself clearly.",
        "I follow the lantern of my intuition."
      ],
      selfCare: "Give yourself 5 minutes alone — no phone, no noise — and breathe into the stillness."
    },
    reversed: {
      meaning: "Loneliness, isolation, withdrawing too much.",
      affirmations: [
        "I allow myself to reach out when I need support.",
        "Connection is safe for me.",
        "I balance solitude with community."
      ],
      selfCare: "Message someone you trust or spend time around gentle company (even online or in a café)."
    }
  },

  {
    name: "Wheel of Fortune",
    keyword: "Cycles · Fate · Change",
    upright: {
      meaning: "Good luck, turning points, destiny, change for the better.",
      affirmations: [
        "Every cycle brings growth.",
        "I trust the timing of my life.",
        "I adapt with grace to what changes."
      ],
      selfCare: "Identify what season you’re in — rest, building, healing, learning — and honor it."
    },
    reversed: {
      meaning: "Resistance to change, setbacks, feeling stuck.",
      affirmations: [
        "I release what keeps me stuck.",
        "My story is allowed to shift.",
        "Even slow change is still movement."
      ],
      selfCare: "Ask yourself: What is one tiny thing I can shift today? Follow that thread."
    }
  },

  {
    name: "Justice",
    keyword: "Truth · Balance · Accountability",
    upright: {
      meaning: "Fairness, truth, clarity, cause and effect.",
      affirmations: [
        "I can face the truth with compassion.",
        "I stay balanced even when life is chaotic.",
        "My decisions shape my path with intention."
      ],
      selfCare: "Balance something small — water, movement, cleaning, emotional check-in. Restore one scale."
    },
    reversed: {
      meaning: "Avoiding accountability, unfairness, imbalance.",
      affirmations: [
        "I hold myself accountable without shame.",
        "Balance returns when I stop avoiding what hurts.",
        "I correct my course with honesty."
      ],
      selfCare: "Make one amends — to yourself or someone else — or forgive yourself for something weighing you down."
    }
  },

  {
    name: "The Hanged Man",
    keyword: "Pause · Perspective · Surrender",
    upright: {
      meaning: "Letting go, new viewpoints, waiting, acceptance.",
      affirmations: [
        "Stillness is not failure.",
        "I see things differently when I slow down.",
        "I surrender what I cannot control."
      ],
      selfCare: "Do nothing for one minute. Let your body unclench. Let the moment be enough."
    },
    reversed: {
      meaning: "Stagnation, fear of letting go, delays.",
      affirmations: [
        "I release what has overstayed its place in my life.",
        "I choose progression over resistance.",
        "I am not stuck — I am shifting."
      ],
      selfCare: "Clear one small thing you’ve been holding onto — a tab, item, expectation, or thought."
    }
  },

  {
    name: "Death",
    keyword: "Endings · Transformation · Release",
    upright: {
      meaning: "Rebirth, change, necessary endings, renewal.",
      affirmations: [
        "I allow old versions of me to rest.",
        "Every ending clears space for growth.",
        "I transform with intention."
      ],
      selfCare: "Release one thing today — a habit, thought, item, or expectation. Create room for who you are becoming."
    },
    reversed: {
      meaning: "Fear of change, clinging, resisting transformation.",
      affirmations: [
        "I stop holding onto what hurts to keep.",
        "I deserve the future waiting for me.",
        "I release outgrown habits with love."
      ],
      selfCare: "Write a goodbye letter to a version of yourself you’ve outgrown — you never have to send it."
    }
  },

  {
    name: "Temperance",
    keyword: "Balance · Harmony · Moderation",
    upright: {
      meaning: "Patience, blending energies, calm, healing.",
      affirmations: [
        "Consistency is its own magic.",
        "I embrace harmony over extremes.",
        "I move with gentle balance."
      ],
      selfCare: "Drink water, breathe deeply, stretch slowly. Restore equilibrium from the inside out."
    },
    reversed: {
      meaning: "Imbalance, excess, impatience.",
      affirmations: [
        "I slow down and recenter myself.",
        "I find balance one small step at a time.",
        "I release the pressure to be perfect."
      ],
      selfCare: "Identify one area of excess and soften it today — overthinking, scrolling, working, or worrying."
    }
  },

  {
    name: "The Devil",
    keyword: "Shadow · Attachment · Temptation",
    upright: {
      meaning: "Shadow work, desires, habits, attachments, awareness.",
      affirmations: [
        "I witness my patterns without shame.",
        "My shadows do not control me.",
        "I choose liberation over temptation."
      ],
      selfCare: "Name a habit that isn’t serving you — then replace it with a gentler one for today only."
    },
    reversed: {
      meaning: "Breaking chains, release, overcoming toxic cycles.",
      affirmations: [
        "I break cycles that hurt me.",
        "I reclaim the power I once gave away.",
        "I walk out of the cages I built."
      ],
      selfCare: "Declutter one symbol of an old cycle — delete an old message, hide an item, or unfollow an account."
    }
  },

  {
    name: "The Tower",
    keyword: "Upheaval · Truth · Breakdown",
    upright: {
      meaning: "Sudden change, revelations, breaking illusions, cleansing destruction.",
      affirmations: [
        "What falls away was not meant to stay.",
        "I rebuild myself stronger than before.",
        "Truth clears the path for healing."
      ],
      selfCare: "Ground yourself: feel your feet, take slow breaths, and remind yourself of one thing that is stable today."
    },
    reversed: {
      meaning: "Avoiding disaster, fear of change, resisting necessary shifts.",
      affirmations: [
        "I release what collapses instead of clinging.",
        "I face change with steady breath.",
        "I grow through what shakes me."
      ],
      selfCare: "Cry, scream, vent, or write — let the pressure release instead of holding it inside."
    }
  },

  {
    name: "The Star",
    keyword: "Hope · Healing · Inspiration",
    upright: {
      meaning: "Renewal, peace, clarity, spiritual healing.",
      affirmations: [
        "My hope is a quiet, steady light.",
        "I allow myself to heal slowly and fully.",
        "I shine even in small ways."
      ],
      selfCare: "Do something that restores your spark — music, a shower, candles, soft lighting, or journaling."
    },
    reversed: {
      meaning: "Doubt, hopelessness, feeling disconnected.",
      affirmations: [
        "I nurture the spark inside me.",
        "I am not as lost as I feel.",
        "I allow light back into my life."
      ],
      selfCare: "Write down three things that are still okay, still beautiful, or still holding you up."
    }
  },

  {
    name: "The Moon",
    keyword: "Illusion · Emotion · Subconscious",
    upright: {
      meaning: "Instincts, dreams, emotional depth, mystery.",
      affirmations: [
        "I embrace the feelings I cannot name yet.",
        "My emotions are valid guides.",
        "I trust what surfaces from my subconscious."
      ],
      selfCare: "Put on music that matches your mood. Let yourself feel, sway, or sit with the emotion instead of hiding it."
    },
    reversed: {
      meaning: "Fear, anxiety, deception, clarity emerging.",
      affirmations: [
        "I see through illusions gently.",
        "I release fear that distorts my vision.",
        "My intuition cuts through confusion."
      ],
      selfCare: "Turn on softer lighting, get cozy, and talk or journal about what you’re afraid of without censoring it."
    }
  },

  {
    name: "The Sun",
    keyword: "Joy · Clarity · Vitality",
    upright: {
      meaning: "Success, happiness, confidence, positive outcomes.",
      affirmations: [
        "I allow myself to feel joy without guilt.",
        "Light surrounds and fills my life.",
        "I radiate confidence effortlessly."
      ],
      selfCare: "Expose yourself to sunlight or warm light — or do something joyful, even quietly, for 5 minutes."
    },
    reversed: {
      meaning: "Clouded joy, doubt, temporary sadness.",
      affirmations: [
        "I let myself feel warmth again.",
        "Joy returns in its own time.",
        "I deserve clarity even after confusion."
      ],
      selfCare: "Do one small bright thing — open a curtain, watch something comforting, or enjoy a sweet treat."
    }
  },

  {
    name: "Judgement",
    keyword: "Awakening · Renewal · Reflection",
    upright: {
      meaning: "Self-evaluation, rebirth, clarity, purpose.",
      affirmations: [
        "I rise into the version of me I’m becoming.",
        "Reflection reveals my truth.",
        "I forgive my past and move forward."
      ],
      selfCare: "Write a letter to your future self or your past self — compassion only, no judgment."
    },
    reversed: {
      meaning: "Self-doubt, ignoring a calling, stagnation.",
      affirmations: [
        "I stop holding myself back.",
        "My calling is loud and clear when I listen.",
        "I am allowed to start again."
      ],
      selfCare: "Do one thing that reminds you of who you want to become — a habit, outfit, playlist, or routine."
    }
  },

  {
    name: "The World",
    keyword: "Completion · Wholeness · Fulfillment",
    upright: {
      meaning: "Achievement, completion, harmony, integration.",
      affirmations: [
        "I celebrate my progress and my becoming.",
        "I am whole in every phase.",
        "I honor the cycle I’ve completed."
      ],
      selfCare: "Celebrate a win — even a small one. Acknowledge how far you've come."
    },
    reversed: {
      meaning: "Incomplete cycles, delay, hesitation to finish.",
      affirmations: [
        "I tie loose ends with care.",
        "I complete what I once avoided.",
        "I allow myself to move forward fully."
      ],
      selfCare: "Finish something tiny today — reply to one message, fold one item, complete one micro-task."
    }
  }
];




// --- HTML REFERENCES ---
const drawButton = document.getElementById("draw-button");
const cardDisplay = document.getElementById("card-display");
const cardName = document.getElementById("card-name");
const cardKeyword = document.getElementById("card-keyword");
const cardAffirmation = document.getElementById("card-affirmation");
const cardSelfCare = document.getElementById("card-selfcare");
const reverseCheckbox = document.getElementById("reverse-checkbox");

// --- DAILY DRAW LOGIC ---
function getTodayString() {
  const today = new Date();
  return today.toISOString().split("T")[0]; // yyyy-mm-dd
}

function saveDailyCard(cardObj) {
  const data = {
    date: getTodayString(),
    card: cardObj
  };
  localStorage.setItem("dailyTarot", JSON.stringify(data));
}

function loadDailyCard() {
  const saved = localStorage.getItem("dailyTarot");
  if (!saved) return null;

  const parsed = JSON.parse(saved);
  if (parsed.date === getTodayString()) {
    return parsed.card;
  }
  return null;
}

// --- DRAWING FUNCTION ---
function drawRandomCard() {
  const reversed = reverseCheckbox.checked;

  const randomIndex = Math.floor(Math.random() * majorArcana.length);
  const baseCard = majorArcana[randomIndex];

  // Select upright or reversed block
  const meaning = reversed ? baseCard.reversed : baseCard.upright;

  // Pick a random affirmation from the 3
  const randomAff = meaning.affirmations[
    Math.floor(Math.random() * meaning.affirmations.length)
  ];

  const card = {
    name: baseCard.name,
    keyword: baseCard.keyword,
    orientation: reversed ? "Reversed" : "Upright",
    affirmation: randomAff,
    selfCare: meaning.selfCare
  };

  return card;
}


// --- DISPLAY CARD ---
function showCard(card) {
  cardName.textContent = `${card.name} (${card.orientation})`;
  cardKeyword.textContent = card.keyword;
  cardAffirmation.textContent = card.affirmation;
  cardSelfCare.textContent = card.selfCare;

  cardDisplay.classList.remove("hidden");
  cardDisplay.classList.remove("fade-in");
  void cardDisplay.offsetWidth; // reset animation
  cardDisplay.classList.add("fade-in");
}

// --- ON PAGE LOAD: Check daily draw ---
window.addEventListener("DOMContentLoaded", () => {
  const todayCard = loadDailyCard();
  if (todayCard) {
    showCard(todayCard);
  }
});

// --- BUTTON ---
drawButton.addEventListener("click", () => {
  const todayCard = loadDailyCard();
  if (todayCard) {
    showCard(todayCard);
    return;
  }

  const newCard = drawRandomCard();
  saveDailyCard(newCard);
  showCard(newCard);
});

// --- CARD DICTIONARY GENERATION ---
function generateDictionary() {
  const container = document.getElementById("dictionary-container");
  container.innerHTML = "";

  majorArcana.forEach(card => {
    const block = document.createElement("div");
    block.classList.add("card-meaning");

    block.innerHTML = `
      <h3>${card.name}</h3>
      <p class="keywords">${card.keyword}</p>

      <h4>Upright Meaning</h4>
      <p>${card.upright.meaning}</p>

      <h4>Upright Affirmations</h4>
      <ul>${card.upright.affirmations.map(a => `<li>${a}</li>`).join("")}</ul>

      <h4>Reversed Meaning</h4>
      <p>${card.reversed.meaning}</p>

      <h4>Reversed Affirmations</h4>
      <ul>${card.reversed.affirmations.map(a => `<li>${a}</li>`).join("")}</ul>
    `;

    container.appendChild(block);
  });
}

// --- PAGE NAVIGATION ---
const navButtons = document.querySelectorAll(".nav-btn");
const sections = {
  tarot: document.querySelector("main"),
  dictionary: document.getElementById("dictionary"),
  resources: document.getElementById("resources"),
  about: document.getElementById("about")
};

function switchPage(pageName) {
  Object.values(sections).forEach(section => {
    section.classList.add("hidden");
  });

  sections[pageName].classList.remove("hidden");

  if (pageName === "dictionary") {
    generateDictionary();
  }
}

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    switchPage(btn.dataset.page);
  });
});

