/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = templeList => {
    templeList.forEach(temple => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;
        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);

}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            utahTemples = temples.filter((temple) => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        case "notutah":
            notUtahtemples = temples.filter((temple) => !temple.location.includes("Utah"));
            displayTemples(notUtahtemples);
            break;
        case "older":
            olderTemples = temples.filter((temple) => temple.dedicated < "1950, 0, 1");
            displayTemples(olderTemples);
            break;
        case "all":
            // sortedTemples = temples.sort((a,b) => a.templeName.localeCompare(b.templeName));
            displayTemples(temples);
            break;
    
        default:
            sortedTemples = temples.sort((a,b) => a.templeName.localeCompare(b.templeName));
            displayTemples(sortedTemples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});