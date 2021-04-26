/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("run").addEventListener("click", function () {
    // Gets value
    const numbers = document.getElementById("numbers").value;
    // Converts value to integer array
    const converted = numbers.split(",").map(Number);
    // Compare function
    function compare(a, b) {
      return a - b;
    }
    // Sorts numbers in ascending order
    converted.sort(compare);
    alert(converted);
  });
})();
