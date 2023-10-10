// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}
function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  let html = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="An Image of ${results.name}">`

  outputElement.innerHTML = html;

  console.log("first: ", results);
}
getPokemon(url, doStuff);
console.log("second: ", results);
    

const urlList = "https://pokeapi.co/api/v2/pokemon";

function doStuffList(data) {
    console.log(data);
    const outputListElement = document.querySelector("#outputList");
    
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);
    
    pokeList.forEach(pokemon => {
        let html = `<li>${pokemon.name}</li>`;
        outputListElement.innerHTML += html; 
    });
}

// async function getPokemonList(url) {
//     const response = await fetch(url);
//     if (response.ok) {
//         const data = await response.json();
//         doStuffList(data);
//     }

// }

getPokemon(urlList, doStuffList);

function compare(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}

