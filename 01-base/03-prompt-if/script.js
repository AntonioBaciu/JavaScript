/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function serveCake() {
  // Stores the prompted message in a variable
  let userResponse = prompt(`Would you enjoy a piece of cake? 🎂 
  Answer Options: yes | no`);
  // if else statement
  if (userResponse === "yes" || userResponse === "Yes") {
    alert("There you go! 🍰");
  } else if (userResponse === "no" || userResponse === "No") {
    alert("More cake for me then :p !");
  } else {
    alert(`ERROR: INVALID ANSWER`);
  }
}
// Calls the function
serveCake();
