const adviceTitle = document.querySelector(".adviceTitle");
const adviceMessage = document.querySelector(".adviceMessage");
const diceButton = document.querySelector(".adviceButtonContainer");
const transition = document.querySelector(".adviceTransition");

function adviceGenerate() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceTitle.textContent = `ADVICE #${data.slip.id}`;
      adviceMessage.textContent = `" ${data.slip.advice} "`;
    });
}
function remove() {
  transition.classList.add("hide");
  adviceMessage.classList.remove("hide");
}
// transition
function adviceTransition() {
  adviceTitle.textContent = "Looking for Suitable Advice";
  adviceMessage.classList.add("hide");
  transition.classList.remove("hide");
  setTimeout(remove, 1400);
  adviceGenerate();
}

diceButton.addEventListener("click", () => {
  adviceTransition();
});
