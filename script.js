const all = document.getElementsByClassName("partie");

let actInd = 0;

const btnLeft = document.getElementById("l");
const btnRight = document.getElementById("r");

btnLeft.addEventListener("click", () => {
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
