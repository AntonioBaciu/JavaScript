/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function colorChanger() {
  // Buttons
  let redButton = document.getElementById("red");
  let greenButton = document.getElementById("green");
  let yellowButton = document.getElementById("yellow");
  let blueButton = document.getElementById("blue");

  // Adds event listener
  redButton.addEventListener("click", function () {
    wrap.style.backgroundColor = "#FF2D27";
  });

  greenButton.addEventListener("click", function () {
    wrap.style.backgroundColor = "#28794B";
  });

  yellowButton.addEventListener("click", function () {
    wrap.style.backgroundColor = "#F9F34B";
  });

  blueButton.addEventListener("click", function () {
    wrap.style.backgroundColor = "#317A9E";
  });
}

colorChanger();
