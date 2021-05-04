/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//   document.getElementById("run").addEventListener("click", () => {
//     var inputValue = document.getElementById("hero-id").value; // Gets input value
//     var heroLocation = document.getElementById("target"); // Gets location for the hero name

//     // Gets json object
//     async function getHeroesData() {
//       let data = await fetch("../../_shared/api.json");
//       let main = await data.json();

//       const objectVal = main.heroes; // Selects the values from the hero object

//       // Assigns a value from the object to the input and places the value inside the [target]
//       switch (inputValue) {
//         case "1":
//           heroLocation.textContent = objectVal[0].name;
//           break;
//         case "2":
//           heroLocation.textContent = objectVal[1].name;
//           break;
//         case "3":
//           heroLocation.textContent = objectVal[2].name;
//           break;
//         case "4":
//           heroLocation.textContent = objectVal[3].name;
//           break;
//         case "5":
//           heroLocation.textContent = objectVal[4].name;
//           break;
//         default:
//           heroLocation.textContent = "";
//           break;
//       }
//     }
//     getHeroesData();
//   });
// })();

// Get the value of the input
// Compare the input value with the json file and
// grab the suitable name from the object
// Place the object value inside the [target]

// names = [0] to [4]

// objectVal[0].id to objectVal[4].id -> hero id
// objectVal[0].name to objectVal[4].name -> hero names
///////////////////////////////////////////////////////////

(() => {
  const inputValue = document.getElementById("hero-id").value;

  async function getHeroesData() {
    let data = await fetch("http://localhost:3000/heroes");
    let main = await data.json();
    const objectVal = main;
    console.log(objectVal);
  }
  getHeroesData();
})();

// get the input value
// access the api
// get the hero id and the value from the api
// compare the input  with the api
// copy [template] and move the copy inside [target]

// API URL: http://localhost:3000/heroes
