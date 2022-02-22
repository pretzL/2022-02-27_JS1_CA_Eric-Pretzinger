//Explanation hidden function

const explanationButton = document.querySelector(".btn");
const explanationText = document.querySelector(".explanation-text");

explanationButton.onclick = function () {
  console.log("Button has been clicked!");
  explanationText.style.display = "block";
};
