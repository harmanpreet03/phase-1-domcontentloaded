function displayText() {
  const pTag = document.querySelector("#text");
  pTag.innerHTML = "This is really cool!";
}

document.addEventListener("DOMContentLoaded", () => {
    displayText();
  });
  