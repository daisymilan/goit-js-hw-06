function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const controlsDiv = document.getElementById("controls");
  const input = controlsDiv.querySelector("input");
  const createButton = controlsDiv.querySelector("[data-create]");
  const destroyButton = controlsDiv.querySelector("[data-destroy]");
  const boxesDiv = document.getElementById("boxes");

  createButton.addEventListener("click", function () {
    createBoxes(input.value);
  });

  destroyButton.addEventListener("click", function () {
    destroyBoxes();
  });

  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = "";
  }
});
