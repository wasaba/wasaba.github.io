const all = document.getElementsByClassName("partie");
let played = false;

let actInd = 0;

const btnLeft = document.getElementById("l");
const btnRight = document.getElementById("r");

btnLeft.addEventListener("click", () => {
  if (!played) {
    played = true;
    audio = new Audio("villa.mp3");
    audio.play();
  }
  if (actInd > 0) {
    actInd--;
    for (const elem of all) {
      elem.style.display = "none";
    }
    all[actInd].style.display = "flex";
  }
});

btnRight.addEventListener("click", () => {
  if (actInd < all.length - 1) {
    actInd++;
  } else {
    actInd = 0;
  }
  for (const elem of all) {
    elem.style.display = "none";
  }
  all[actInd].style.display = "flex";
});
