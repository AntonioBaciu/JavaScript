/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Way #1
///////////////////////////////////////////////////////////////////////////
// function colorChanger() {
//   // Adds event listener to button
//   const button = document.getElementById("run");
//   button.addEventListener("click", colorChange);

//   // Function inside function
//   function colorChange() {
//     let color = document.getElementById("color").value;
//     document.body.style.backgroundColor = color;
//   }
// }
// colorChanger();
///////////////////////////////////////////////////////////////////////////

// Way #2 -> using onclick = "functionName()" inside <button>
///////////////////////////////////////////////////////////////////////////
// function colorChanger() {
//   let color = document.getElementById("color").value;
//   document.body.style.backgroundColor = color;
// }
///////////////////////////////////////////////////////////////////////////

// Way #3
///////////////////////////////////////////////////////////////////////////
(function () {
  // Adds event listener to button
  const button = document.getElementById("run");
  button.addEventListener("click", colorChange);

  // Function inside function
  function colorChange() {
    let color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;
  }
})();
///////////////////////////////////////////////////////////////////////////
