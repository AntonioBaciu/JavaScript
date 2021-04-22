/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//  Ternary if - else if - else
(function () {
  document.getElementById("target").textContent =
    new Date().getHours() < 17
      ? "Hello"
      : new Date().getHours() >= 17 && new Date().getMinutes() < 30
      ? "Hello"
      : "Good Evening ";
})();

// Reusable function
// (function () {
//   document.getElementById("target").textContent = greeting(18, 45);
// })();

// const greeting = (hours, minutes) => {
//   new Date().getHours() < hours
//     ? "Hello"
//     : new Date().getHours() >= hours && new Date().getMinutes() < minutes
//     ? "Hello"
//     : "Good Evening ";
// };
