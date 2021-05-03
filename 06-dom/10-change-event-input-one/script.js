/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Sets character limit
  const inputLimit = document
    .getElementById("pass-one")
    .setAttribute("maxlength", "10");

  // Assigns input and counter to variables
  let passValue = document.getElementById("pass-one");
  let valCount = document.getElementById("counter");

  // Adds event listener for the input
  // When any key is pressed to provide input,
  // the counter is increased using the for loop.
  passValue.addEventListener("keydown", function () {
    valCount = passValue.value.length + 1;
    for (i = 0; i < 10; i++) {
      if (valCount < 11) {
        document.querySelector(".indicator").textContent = `${valCount}/10`;
        if (passValue.length < valCount) {
          document.querySelector(".indicator").textContent = `${valCount--}/10`;
        }
      }
    }
  });
})();

// Kinda working.
// To fix:
// *decreasing counter when the input length decreases
// *counter must get to 0 when input is empty (stays at 1)
