/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const tableTag = document.createElement("table"); // Creates 'table tag'
  const tableRow = document.createElement("tr"); // Creates 'table row'
  const table = target.appendChild(tableTag); // Another way to place 'table tag' inside the' target div'

  for (rows = 0; rows < 10; rows++) {
    let newRow = table.insertRow();

    for (cell = 0; cell < 10; cell++) {
      let newCell = newRow.insertCell();
      let innerCell = (rows + 1) * (cell + 1);
      newCell.appendChild(document.createTextNode(innerCell));
    }
  }
})();
