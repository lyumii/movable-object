const moveMePlease = document.getElementById("move-me-please");

let topPosition = parseInt(moveMePlease.style.top) || 0;
let leftPosition = parseInt(moveMePlease.style.left) || 0;

document.addEventListener("keydown", (event) => {
  keyPress(event);
});

document.addEventListener("click", (event) => {
  moveMePlease.style.left = `${event.clientX}px`;
  moveMePlease.style.top = `${event.clientY}px`;
  moveMePlease.style.transform = `translate(-20px, -20px)`;
});

function keyPress(event) {
  if (event.key === "a") {
    leftPosition -= 10;
    moveMePlease.style.left = `${leftPosition}px`;
  } else if (event.key === "d") {
    leftPosition += 10;
    moveMePlease.style.left = `${leftPosition}px`;
  } else if (event.key === "w") {
    topPosition -= 10;
    moveMePlease.style.top = `${topPosition}px`;
  } else if (event.key === "s") {
    topPosition += 10;
    moveMePlease.style.top = `${topPosition}px`;
  }
}
