// NAVIGATION
const navButtons = document.querySelectorAll(".nav-btn");

const sections = {
  tarot: document.querySelector("#tarot"),
  dictionary: document.querySelector("#dictionary"),
  resources: document.getElementById("resources"),
  about: document.getElementById("about"),
  privacy: document.getElementById("privacy")
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

// NAV BUTTON LISTENERS
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    switchPage(btn.dataset.page);
  });
});

// DAILY DRAW
const drawButton = document.getElementById("draw-button");
const cardDisplay = document.getElementById("card-display");
const reverseCheckbox = document.getElementById("reverse-checkbox");

const cardName = document.getElementById("card-name");
const cardKeyword = document.getElementById("card-keyword");
const cardAffirmation = document.getElementById("card-affirmation");
const cardSelfCare = document.getElementById("card-selfcare");

function drawRandomCard() {
  const reversed = reverseCheckbox.checked;
  const idx = Math.floor(Math.random() * majorArcana.length);

  const baseCard = majorArcana[idx];
  const meaning = reversed ? baseCard.reversed : baseCard.upright;

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

function showCard(card) {
  cardName.textContent = `${card.name} (${card.orientation})`;
  cardKeyword.textContent = card.keyword;
  cardAffirmation.textContent = card.affirmation;
  cardSelfCare.textContent = card.selfCare;
  cardDisplay.classList.remove("hidden");
}

drawButton.addEventListener("click", () => {
  const card = drawRandomCard();
  showCard(card);
});

// DICTIONARY BUILDER
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

      <h4>Upright Self-Care</h4>
      <p>${card.upright.selfCare}</p>

      <h4>Reversed Meaning</h4>
      <p>${card.reversed.meaning}</p>

      <h4>Reversed Affirmations</h4>
      <ul>${card.reversed.affirmations.map(a => `<li>${a}</li>`).join("")}</ul>

      <h4>Reversed Self-Care</h4>
      <p>${card.reversed.selfCare}</p>
    `;

    container.appendChild(block);
  });
}
// Make sure privacy page always scrolls to the top
document.addEventListener("DOMContentLoaded", () => {
  const privacySection = document.getElementById("privacy");
  if (privacySection) {
    privacySection.scrollTop = 0;
  }
});

// COOKIE POPUP
document.addEventListener("DOMContentLoaded", () => {
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptBtn = document.getElementById("cookie-accept");
  const learnBtn = document.getElementById("cookie-learn");

  if (!localStorage.getItem("cookieConsent")) {
    cookiePopup.classList.remove("hidden");
    setTimeout(() => {
      cookiePopup.classList.add("show");
    }, 150);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "true");
    cookiePopup.classList.remove("show");
    setTimeout(() => {
      cookiePopup.classList.add("hidden");
    }, 350);
  });

  learnBtn.addEventListener("click", () => {
    switchPage("privacy");
  });
});
