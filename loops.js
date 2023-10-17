// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);

  const favoriteFoodsList = document.querySelector("#favorite-foods");

// .forEach approach
myInfo.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
  });

// .map approach
myInfo.favoriteFoods.map(food => {
    let li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
  });

const StringToHtmlLi = (stringItem) => {
    return `<li>${stringItem}</li> `;
}

const MakeHtmlString = (place) => {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

const MakeHtmlTemplate = (list, callbackFunc) => {
    let newList = list.map(callbackFunc);
    return newList 
}

let foodList = MakeHtmlTemplate(myInfo.favoriteFoods, StringToHtmlLi)

document.querySelector("#favorite-foods").innerHTML = foodList.join("");

let placesList = MakeHtmlTemplate(myInfo.placesLived, MakeHtmlString);

document.querySelector("#places-lived").innerHTML = placesList.join("");
 