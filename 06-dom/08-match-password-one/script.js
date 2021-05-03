/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("run").addEventListener("click", function () {
    // Gets the inputs and he value of inputs
    const inputOne = document.getElementById("pass-one").value;
    const inputTwo = document.getElementById("pass-two").value;
    const borderOne = document.getElementById("pass-one");
    const borderTwo = document.getElementById("pass-two");

    // Function checks if the two input values are the same and changes the border color
    function compareValues(a, b) {
      if (a != b) {
        borderOne.style.borderColor = "red";
        borderTwo.style.borderColor = "red";
      } else {
        borderOne.style.borderColor = "green";
        borderTwo.style.borderColor = "green";
      }
    }

    compareValues(inputOne, inputTwo);
  });
})();
