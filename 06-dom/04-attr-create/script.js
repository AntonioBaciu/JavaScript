/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Gets the value of data-image
  const sourceLink = document
    .getElementById("source") // From the element with id 'source'
    .getAttribute("data-image"); // Get the value of 'data-image'

  // Stores the new image inside 'figure'
  const locationIMG = document.getElementById("target"); // Gets the location where the new img will be stored
  const newIMG = document.createElement("img"); // Creates a new img element
  newIMG.src = sourceLink; // Gives the created img the src value of the sourceLink value
  locationIMG.appendChild(newIMG); // Places the newIMG inside the location

  const mainWrap = document.querySelector(".material"); // Selects the container element

  const sourceLocation = document.getElementById("source"); // Gets the entire 'span element'
  mainWrap.removeChild(sourceLocation); // Removes the 'span' element
})();
