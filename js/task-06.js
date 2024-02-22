document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("validation-input");

  input.addEventListener("blur", function () {
    const enteredLength = input.value.length;
    const requiredLength = parseInt(input.getAttribute("data-length"));

    if (enteredLength === requiredLength) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
});
