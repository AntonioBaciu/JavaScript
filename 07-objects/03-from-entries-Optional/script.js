/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const keys = ["name", "species", "age", "gender", "color"];
  const values = ["Skitty", "cat", 9, "female", "tabby"];

  document.getElementById("run").addEventListener("click", function () {
    // Creates a 'for loop' that combines two Arrays
    //'keys' & 'values' and stores then in a new variable (in a specific order)
    for (let i = 0; i < keys.length; i++) {
      let mergedArray = [[keys[i], values[i]]];
      const convertedArray = Object.fromEntries(mergedArray);
      console.log(convertedArray);
    }
  });
})();
