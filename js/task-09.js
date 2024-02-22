function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");

  button.addEventListener("click", function () {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
  });
});
