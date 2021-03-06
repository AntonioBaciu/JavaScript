(() => {
  // Copy template
  const temp1 = document.getElementById("tpl-hero").content;
  const copyHTML = document.importNode(temp1, true);
  document.getElementById("target").appendChild(copyHTML);

  // Variables
  const api_url = "http://localhost:3000/heroes";
  const buttonClick = document.getElementById("run");
  const inputValue = document.getElementById("hero-id");
  const location = document.querySelector(".name");

  // Gets hero name
  async function getHeroes(id) {
    id -= 1;
    const response = await fetch(api_url);
    const data = await response.json();
    const heroName = data[id].name;
    location.textContent = heroName;
  }

  // Button function
  buttonClick.addEventListener("click", function () {
    const inputVal = inputValue.value;
    getHeroes(inputVal);
  });
})();

// Personal note:
// Could use url/id .
// Visible [1.].
// The hero names do not get displayed one under another. Let's call it a feature.
// Kinda understood what an API is and how I can access it.

// Future me, watch these(they might help ya):
// https://www.youtube.com/watch?v=uxf0--uiX0I&list=LL&index=2  -> FETCH API
// https://www.youtube.com/watch?v=OSficvLDefM  -> TEMPLATE
