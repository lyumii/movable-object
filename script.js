const moveMePlease = document.getElementById("move-me-please");

let topPosition = parseInt(moveMePlease.style.top) || 0;
let leftPosition = parseInt(moveMePlease.style.left) || 0;

document.addEventListener("keydown", (event) => {
  keyPress(event);
});

document.addEventListener("click", (event) => {
  if (event.target === document.body) {
    moveMePlease.style.left = `${event.clientX}px`;
    moveMePlease.style.top = `${event.clientY}px`;
    moveMePlease.style.transform = `translate(-20px, -20px)`;
  }
});

function keyPress(event) {
  if (event.key === "a") {
    if (leftPosition < 0) {
      moveMePlease.style.left = "0px";
    } else {
      leftPosition -= 10;
      moveMePlease.style.left = `${leftPosition}px`;
    }
  } else if (event.key === "d") {
    if (leftPosition > 706) {
      moveMePlease.style.left = "706px";
    } else {
      leftPosition += 10;
      moveMePlease.style.left = `${leftPosition}px`;
    }
  } else if (event.key === "w") {
    if (topPosition < 0) {
      moveMePlease.style.top = "0px";
    } else {
      topPosition -= 10;
      moveMePlease.style.top = `${topPosition}px`;
    }
  } else if (event.key === "s") {
    if (topPosition > 706) {
      moveMePlease.style.top = "706px";
    } else {
      topPosition += 10;
      moveMePlease.style.top = `${topPosition}px`;
    }
  }
}
console.log(window.innerHeight, window.innerWidth);
