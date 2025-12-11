console.log("JS loaded correctly");

// Helper functions
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// START BUTTON
document.getElementById("startButton").addEventListener("click", () => {
    console.log("Start button clicked");
    showScreen("eraSelect");
});

// ERA DATA
const eraInfo = {
    baroque: {
        title: "Baroque Era (1600–1750)",
        text: "Characterized by drama, contrast, and ornate musical forms. Think Bach."
    },
    classical: {
        title: "Classical Era (1750–1820)",
        text: "Clean, structured forms. Mozart and Haydn ruled this era."
    },
    romantic: {
        title: "Romantic Era (1820–1900)",
        text: "Emotional, expressive, and dramatic. Enter Chopin, Liszt, and Tchaikovsky."
    },
    modern: {
        title: "Modern Era (1900–Present)",
        text: "Experimentation, technology, atonality, jazz, electronic music… chaos but fun."
    }
};

// ERA BUTTONS
document.querySelectorAll(".eraBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        const era = btn.dataset.era;
        console.log("Era selected:", era);

        document.getElementById("eraTitle").textContent = eraInfo[era].title;
        document.getElementById("eraDescription").textContent = eraInfo[era].text;

        showScreen("eraScreen");
    });
});

// BACK BUTTON
document.getElementById("backButton").addEventListener("click", () => {
    showScreen("eraSelect");
});
