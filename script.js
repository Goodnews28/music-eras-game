const startBtn = document.getElementById("startButton");
const subtitle = document.getElementById("subtitle");
const baroquePage = document.getElementById("baroquePage");

startBtn.addEventListener("click", function() {
    const playerName = prompt("Enter your name:");
    alert("Welcome to Music Eras, " + playerName + "!");
    
    // Show first era page and hide landing page
    document.querySelector(".landing").style.display = "none";
    baroquePage.style.display = "block";
});
const backBtn = document.getElementById("backToMenu");
backBtn.addEventListener("click", function() {
    baroquePage.style.display = "none";
    document.querySelector(".landing").style.display = "block";
});

