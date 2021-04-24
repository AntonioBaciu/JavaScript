/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // Selects what happens if one of the buttons is clicked
  document.querySelector(".actions").addEventListener("click", (event) => {
    performOperation(event.target.id);
  });

  // Arrow function containing switch statement.
  const performOperation = (operation) => {
    const valueOne = Number(document.getElementById("op-one").value);
    const valueTwo = Number(document.getElementById("op-two").value);
    // Switch statement uses the [operation] parameter from function
    // to switch the performed operation between the two values
    switch (operation) {
      case "addition": {
        alert(valueOne + valueTwo);
        break;
      }
      case "substraction": {
        alert(valueOne - valueTwo);
        break;
      }
      case "division": {
        alert(valueOne / valueTwo);
        break;
      }
      default: {
        alert(valueOne * valueTwo);
      }
    }
  };
})();
