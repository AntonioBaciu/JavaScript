/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("addition").addEventListener("click", function () {
    const valueOne_ADD = document.getElementById("op-one").value;
    const valueTwo_ADD = document.getElementById("op-two").value;
    const result_ADD = Number(valueOne_ADD) + Number(valueTwo_ADD);
    alert(result_ADD);
  });

  document
    .getElementById("substraction")
    .addEventListener("click", function () {
      const valueOne_SUB = document.getElementById("op-one").value;
      const valueTwo_SUB = document.getElementById("op-two").value;
      const result_SUB = Number(valueOne_SUB) - Number(valueTwo_SUB);
      alert(result_SUB);
    });

  document
    .getElementById("multiplication")
    .addEventListener("click", function () {
      const valueOne_MULT = document.getElementById("op-one").value;
      const valueTwo_MULT = document.getElementById("op-two").value;
      const result_MULT = Number(valueOne_MULT) * Number(valueTwo_MULT);
      alert(result_MULT);
    });

  document.getElementById("division").addEventListener("click", function () {
    const valueOne_DIV = document.getElementById("op-one").value;
    const valueTwo_DIV = document.getElementById("op-two").value;
    const result_DIV = Number(valueOne_DIV) / Number(valueTwo_DIV);
    alert(result_DIV);
  });
})();
