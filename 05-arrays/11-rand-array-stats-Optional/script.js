/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("run").addEventListener("click", function () {
    // Array with 10 auto generated numbers
    const tableNumbers = [];
    tableNumbers[0] = Math.floor(Math.random() * 100) + 1;
    tableNumbers[1] = Math.floor(Math.random() * 100) + 1;
    tableNumbers[2] = Math.floor(Math.random() * 100) + 1;
    tableNumbers[3] = Math.floor(Math.random() * 100) + 1;
    tableNumbers[4] = Math.floor(Math.random() * 100) + 1;
    tableNumbers[5] = Math.floor(Math.random() * 100) + 1;
    tableNumbers[6] = Math.floor(Math.random() * 100) + 1;
    tableNumbers[7] = Math.floor(Math.random() * 100) + 1;
    tableNumbers[8] = Math.floor(Math.random() * 100) + 1;
    tableNumbers[9] = Math.floor(Math.random() * 100) + 1;

    // Assigns each number to tabel
    document.getElementById("n-1").textContent = tableNumbers[0];
    document.getElementById("n-2").textContent = tableNumbers[1];
    document.getElementById("n-3").textContent = tableNumbers[2];
    document.getElementById("n-4").textContent = tableNumbers[3];
    document.getElementById("n-5").textContent = tableNumbers[4];
    document.getElementById("n-6").textContent = tableNumbers[5];
    document.getElementById("n-7").textContent = tableNumbers[6];
    document.getElementById("n-8").textContent = tableNumbers[7];
    document.getElementById("n-9").textContent = tableNumbers[8];
    document.getElementById("n-10").textContent = tableNumbers[9];

    // Smallest number
    const numberSmall = Math.min.apply(Math, tableNumbers);
    // Biggest number
    const numberBig = Math.max.apply(Math, tableNumbers);
    // Sum of numbers
    const numberSum = tableNumbers.reduce((a, b) => a + b);
    // Average of numbers
    const numberAvg = numberSum / tableNumbers.length;

    // Displays answers in definition list
    document.getElementById("min").textContent = numberSmall;
    document.getElementById("max").textContent = numberBig;
    document.getElementById("sum").textContent = numberSum;
    document.getElementById("average").textContent = numberAvg;
  });
})();
