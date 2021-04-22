/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function test() {
  const userAge = prompt("Type in your current age:");
  const userGender = prompt("Type in your gender:");
  const userLocation = prompt("Type in the name of your Town:");

  const userInfo = confirm(`Your responses:
Age: ${userAge}
Gender: ${userGender}
Town: ${userLocation}
To proceed further, confirm your responses by clicking on the OK button.`);
  if (userInfo !== true) {
    test();
  }
})();

// OR

// function userData() {
//   const userAge = prompt("Type in your current age:");
//   const userGender = prompt("Type in your gender:");
//   const userLocation = prompt("Type in the name of your Town:");

//   const userInfo = confirm(`Your responses:
// Age: ${userAge}
// Gender: ${userGender}
// Town: ${userLocation}
// To proceed further, confirm your responses by clicking on the OK button.`);
//   if (userInfo !== true) {
//     userData();
//   }
// }

// userData();
