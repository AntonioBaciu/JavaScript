/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"];
  let button = document.getElementById("run");

  button.addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    let bgContainer = document.body;
    bgContainer.style.backgroundColor = randomColor;
  });
})();

//OR

// (function () {
// Colors array
//   let colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"];
// Event listener
//   let button = document.getElementById("run");
//   button.addEventListener("click", function () {
// Random Color Function
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     let bgContainer = document.getElementById("wrap");
//     bgContainer.style.backgroundColor = randomColor;
//   });
// })();
