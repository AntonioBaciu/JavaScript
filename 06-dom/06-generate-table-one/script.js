/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Gets the location of the target div
  var tableLocation = document.getElementById("target");
  var tableTag = document.createElement("table"); // Creates table tag

  // Creates 10 rows respecting the for loop
  // and places the items: ROWS in TABLE in DIV
  for (let i = 1; i <= 10; i++) {
    var tableRow = document.createElement("tr");
    tableTag.appendChild(tableRow);
    tableLocation.appendChild(tableTag);
  }
})();
