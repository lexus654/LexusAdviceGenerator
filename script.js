const adviceTitle = document.querySelector(".adviceTitle");
const adviceMessage = document.querySelector(".adviceMessage");

function adviceGenerate() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceTitle.textContent = `Advice #${data.slip.id}`;
      adviceMessage.textContent = `" ${data.slip.advice} "`;
    });
}

adviceGenerate();
