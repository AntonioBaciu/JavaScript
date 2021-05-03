/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Selects img and gets src value
  const initialValue = document
    .querySelector(".material img")
    .getAttribute("src");

  // Selects img and gets data-hover value
  const newValue = document
    .querySelector(".material img")
    .getAttribute("data-hover");

  // Selects the targeted img
  const targetIMG = document.querySelector(".material img");

  // Runs a function when hovered
  targetIMG.onmouseover = function () {
    targetIMG.src = newValue;
  };

  //   Runs a function when not hovered anymore
  targetIMG.onmouseout = function () {
    targetIMG.src = initialValue;
  };
})();
