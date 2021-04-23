/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  document.getElementById("run").addEventListener("click", function () {
    // removes 1st element
    fruits.shift();
    // removes last element
    fruits.pop();
    // adds new element at the beginning
    fruits.unshift("banana");
    // adds new element at the end
    fruits.push("kiwi");
    console.log(fruits);
  });
})();
