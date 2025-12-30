console.log("Global script loaded");

// Only run this code if we're on index.html
const startButton = document.getElementById("startButton");

if (startButton) {
    startButton.addEventListener("click", () => {
        console.log("Start clicked");
        window.location.href = "timeline.html";
    });
}
