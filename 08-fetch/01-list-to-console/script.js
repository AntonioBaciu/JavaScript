/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    fetch("../../_shared/api.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  });
})();

/* 
#1 Get the file:

fetch("../../_shared/api.json") -> via [fetch] we can retrieve the json file
                                -> [fetch] return a promise 
"example:" 
get-the-file-and-it's-content(file-path)

#2 Return and convert the text file:

[fetch("path")] -> returns a promise

We can handle the promise with a [.then] method.
.then(function(response) -> will use the [.then] method to handle the returned promise
 function(response) -> will use a function with the [response] parameter to take the received response and return the response 
                    -> the return will be a text 
{
  return response.json() -> Using the [.json()] method we can convert the returned text into a [.json] file 
})

#3 Use the file

.then(function(data) -> using a new [.then] method, we will handle the data from the [.json] file

Time to console log the data form the [.json] file with console.log(data);

*/
