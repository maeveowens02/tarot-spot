// --------------------------------------
// 🌙 TAROT CARD OF THE DAY
// --------------------------------------

// You can expand to the full 78 cards later!
// These match your site's soft, intuitive vibe.
const tarotDeck = [
    {
        name: "The Star",
        meaning: "Hope, renewal, gentle healing.",
        advice: "Trust your timing — softness is guiding your next step."
    },
    {
        name: "The High Priestess",
        meaning: "Intuition, inner knowing, deep insight.",
        advice: "Your inner voice is speaking clearly; slow down and listen."
    },
    {
        name: "The Empress",
        meaning: "Nurturing, comfort, creation.",
        advice: "Lean into softness and tend to your body with affection."
    },
    {
        name: "Strength",
        meaning: "Patience, compassion, quiet resilience.",
        advice: "Move with tenderness. Your heart is stronger than your fears."
    },
    {
        name: "The Hermit",
        meaning: "Reflection, wisdom, solitude.",
        advice: "Answers reveal themselves in stillness today."
    }
];

// Select the Tarot card container
const tarotBox = document.querySelector("#tarot-card-box");

// Pull a random tarot card
const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];

// Insert content into the Tarot card box
tarotBox.innerText =
    `🌙 Card of the Day: ${randomCard.name}\n\n` +
    `${randomCard.meaning}\n\n` +
    `✨ A message from Spirit:\n${randomCard.advice}`;

tarotBox.classList.add("show");



// --------------------------------------
// 🌙 AFFIRMATION OF THE DAY
// --------------------------------------

const affirmations = [
    "I move gently and trust my timing.",
    "My energy is sacred and protected.",
    "I breathe in softness and release tension.",
    "I welcome calm, clarity, and ease.",
    "I honor the version of me that is trying."
];

const affirmBox = document.querySelector("#affirm-box");
const chosenAffirm = affirmations[Math.floor(Math.random() * affirmations.length)];

affirmBox.innerText = `“${chosenAffirm}”`;
affirmBox.classList.add("show");



// --------------------------------------
// 🌙 SELF-CARE PROMPT
// --------------------------------------

const selfPrompts = [
    "Unclench your jaw and take 3 slow breaths.",
    "Drink water and place one hand over your heart.",
    "Wrap yourself in a blanket and breathe deeply.",
    "Put your phone down for 2 minutes and just exist.",
    "Step outside and feel the air on your skin."
];

const selfBox = document.querySelector("#self-box");
const chosenSelf = selfPrompts[Math.floor(Math.random() * selfPrompts.length)];

selfBox.innerText = chosenSelf;
selfBox.classList.add("show");



// --------------------------------------
// 🌙 JOURNAL PROMPT
// --------------------------------------

const journalPrompts = [
    "What emotion is asking to be witnessed today?",
    "Where can I soften instead of forcing?",
    "What part of myself needs compassion right now?",
    "What is something small I can celebrate today?",
    "What would feel grounding to my body right now?"
];

const journalBox = document.querySelector("#journal-box");
const chosenJournal = journalPrompts[Math.floor(Math.random() * journalPrompts.length)];

journalBox.innerText = chosenJournal;
journalBox.classList.add("show");



// --------------------------------------
// 🌙 ENERGY SUMMARY
// --------------------------------------

const summaryBox = document.querySelector("#summary-box");

summaryBox.innerText =
    `✨ Today’s Energy Summary:\n` +
    `You are moving through the energy of ${randomCard.name}. ` +
    `Let its guidance shape your pace today.\n\n` +
    `Honor softness. Honor your timing. Honor your heart.`;

summaryBox.classList.add("show");
