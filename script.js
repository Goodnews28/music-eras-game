const nameInput = document.getElementById("playerNameInput");
const confirmNameBtn = document.getElementById("confirmName");
const startButton = document.getElementById("startButton");

const nameInputBox = document.getElementById("nameInputBox");
const startBox = document.getElementById("startBox");
const welcomeMessage = document.getElementById("welcomeMessage");

let playerName = "";

function confirmName() {
  const enteredName = nameInput.value.trim();

  if (enteredName === "") {
    alert("History requires a name.");
    return;
  }

  playerName = enteredName;
  localStorage.setItem("playerName", playerName);

  nameInputBox.classList.add("hidden");
  startBox.classList.remove("hidden");

  welcomeMessage.textContent = `Welcome, ${playerName}. Your journey through music awaits.`;
}

confirmNameBtn.addEventListener("click", confirmName);

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    confirmName();
  }
});

startButton.addEventListener("click", () => {
  window.location.href = "timeline.html";
});
