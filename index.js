const divs = document.querySelectorAll("div");
const redDivs = Array.from(document.querySelectorAll("#red-div"));
const blueDivs = Array.from(document.querySelectorAll("#blue-div"));
const whiteDivs = Array.from(document.querySelectorAll("#white-div"));
const pinkDivs = Array.from(document.querySelectorAll("#pink-div"));
const contain = document.querySelector(".container");
const colorDivsArray = [redDivs, blueDivs, whiteDivs, pinkDivs];
const colorArray = ["red", "blue", "white", "pink"];

let ballonQuant = colorArray.length * colorArray.length;

let yayImage = document.createElement("img");
yayImage.setAttribute("src", "./images/yay.png");

let yayDiv = document.createElement("div");
yayDiv.innerHTML = "WELL DONE";

let nrIterations = 0;

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

var delay = function (elem, callback) {
  var timeout = null;
  elem.onmouseover = function() {
      // Set timeout to be a timer which will invoke callback after 1s
      timeout = setTimeout(callback, 1000);
  };

  elem.onmouseout = function() {
      // Clear any timers set to timeout
      clearTimeout(timeout);
  }
};



for (let i = 0; i < colorDivsArray.length; i++) {
  colorDivsArray[i].forEach((colorDiv) => {
    let colorImage = document.createElement("img");
    colorImage.setAttribute("src", `./images/pop-${colorArray[i]}.png`);
    colorDiv.addEventListener(
      "click",
      (event) => {
       
        nrIterations++;

        if (nrIterations === ballonQuant) {
          event.preventDefault();
          event.target.remove();
          colorDiv.appendChild(colorImage);
          removeAllChildNodes(contain);
          contain.appendChild(yayImage);
        } else {
          event.preventDefault();
          event.target.remove();
          colorDiv.appendChild(colorImage);
        }
      },
      { once: true }
    );
  });
}
