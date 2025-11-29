
// Grab buttons + result box
let moodButtons = document.querySelectorAll(".mood-buttons button");
let resultBox = document.querySelector("#result-box");

// ----------------------------
// ORACLE DECK
// ----------------------------
let oracleDeck = {
    Calm: [
        { card: "The Hollow Moon", meaning: "Your quiet is a sacred reset. Stillness cleanses you." },
        { card: "Soft Requiem", meaning: "Something old is dissolving gently. Let it go without force." },
        { card: "The Velvet Well", meaning: "Peace is found by turning inward. Your depth is a refuge." }
    ],
    Happy: [
        { card: "Golden Serpent", meaning: "Joy unwinds the knots you forgot were there." },
        { card: "Daughter of Sparks", meaning: "Your light is magnetic today, let it expand freely." },
        { card: "Wild Bloom", meaning: "Happiness is an act of rebellion. Let yourself feel alive." }
    ],
    Stressed: [
        { card: "The Fraying Cord", meaning: "Your spirit is pulled too tight. Release the smallest tension." },
        { card: "Ashen Crown", meaning: "You've been carrying too much. Step back and soften your grip." },
        { card: "The Overwound Heart", meaning: "Your system is tired, not weak. You deserve to breathe." }
    ],
    Mad: [
        { card: "Blood Rose", meaning: "Your anger protects the parts of you that were dismissed." },
        { card: "The Ember Queen", meaning: "Your fire becomes power when directed with intention." },
        { card: "Severed Thread", meaning: "Something no longer deserves your energy. Release it." }
    ],
    Sad: [
        { card: "Saltwater Heart", meaning: "Your tears cleanse more than they break. Let them fall." },
        { card: "The Fading Lantern", meaning: "It’s okay to dim. Rest until your light returns." },
        { card: "Grief’s Garden", meaning: "Something is growing beneath your sorrow. Trust the soil." }
    ]
};

// ----------------------------
// AFFIRMATIONS BY MOOD
// ----------------------------
let affirmations = {
    Calm: [
        "Stillness is my power.",
        "My softness is strength.",
        "I am allowed to rest deeply."
    ],
    Happy: [
        "Joy is not fragile.",
        "I’m allowed to feel good without apology.",
        "My happiness is valid and sacred."
    ],
    Stressed: [
        "Pressure is not my identity.",
        "I can choose peace in small doses.",
        "I am safe to slow down."
    ],
    Mad: [
        "My anger is a compass.",
        "My fire is mine to wield, not fear.",
        "I am reclaiming my power with clarity."
    ],
    Sad: [
        "My sadness is not shameful.",
        "I am held by my own softness.",
        "My heart is allowed to feel fully."
    ]
};

// ----------------------------
// SELF-CARE BY MOOD
// ----------------------------
let selfCare = {
    Calm: ["Breathe in warm silence.", "Wrap yourself in a soft blanket.", "Light a gentle scent."],
    Happy: ["Dance for one minute.", "Share your joy with someone.", "Do something indulgent."],
    Stressed: ["Unclench your jaw + shoulders.", "Take a 1-minute pause.", "Stop multitasking."],
    Mad: ["Shake out your body.", "Cold water on the wrists.", "Write the unsent message."],
    Sad: ["Place a hand on your heart.", "Let yourself cry 1% more.", "Rest under a blanket."]
};

// ----------------------------
// CREATE ORACLE READING
// ----------------------------
function generateReading(mood) {
    let cardList = oracleDeck[mood];
    let chosenCard = cardList[Math.floor(Math.random() * cardList.length)];

    let affList = affirmations[mood];
    let chosenAff = affList[Math.floor(Math.random() * affList.length)];

    let careList = selfCare[mood];
    let chosenCare = careList[Math.floor(Math.random() * careList.length)];

    let oracleHTML = `
        <div class="oracle-title">Mood: ${mood}</div>
        <div class="card-name">${chosenCard.card}</div>
        <div class="card-meaning">${chosenCard.meaning}</div>
        <div class="card-affirmation"><strong>Affirmation:</strong> ${chosenAff}</div>
        <div class="card-selfcare"><strong>Self-Care:</strong> ${chosenCare}</div>
    `;

    resultBox.innerHTML = oracleHTML;
    resultBox.classList.add("show");

    localStorage.setItem("oracleReading", oracleHTML);
}

// ----------------------------
// EVENT LISTENERS
// ----------------------------
moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let mood = btn.dataset.mood;
        generateReading(mood);
    });
});

// RESET
document.querySelector("#reset-btn").addEventListener("click", () => {
    localStorage.removeItem("oracleReading");
    resultBox.innerHTML = "";
    resultBox.classList.remove("show");
});

// LOAD SAVED READING
let saved = localStorage.getItem("oracleReading");
if (saved) {
    resultBox.innerHTML = saved;
    resultBox.classList.add("show");
}
