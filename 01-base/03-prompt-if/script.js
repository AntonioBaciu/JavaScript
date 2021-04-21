/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const userRespone = prompt(`Would you enjoy a piece of cake? 🎂 
Answer Options: Y/N`);

if (userRespone === "Y") {
  alert("There you go! 🍰");
} else if (userRespone === "N") {
  alert("More cake for me then :p !");
} else {
  alert(`ERROR: INVALID ANSWER`);
}
