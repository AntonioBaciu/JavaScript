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
