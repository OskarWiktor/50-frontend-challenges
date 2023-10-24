const progressLine = document.getElementById("progress-line");
const buttonPrev = document.getElementById("button-prev");
const buttonNext = document.getElementById("button-next");
const number = document.querySelectorAll(".number");

let activeNumbers = 1;

buttonNext.addEventListener("click", () => {
  activeNumbers++;

  if (activeNumbers > number.length) {
    activeNumbers = number.length;
  }

  update();
});

buttonPrev.addEventListener("click", () => {
  activeNumbers--;

  if (activeNumbers < 1) {
    activeNumbers = 1;
  }

  update();
});

function update() {
  number.forEach((number, id) => {
    if (id < activeNumbers) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
    if (activeNumbers === 1) {
      progressLine.style.width = "0%";
    }
    if (activeNumbers === 2) {
      progressLine.style.width = "35%";
    }
    if (activeNumbers === 3) {
      progressLine.style.width = "65%";
    }
    if (activeNumbers === 4) {
      progressLine.style.width = "100%";
    }
    if (activeNumbers > 1) {
      buttonPrev.disabled = false;
    } else {
      buttonPrev.disabled = true;
    }
  });
}
