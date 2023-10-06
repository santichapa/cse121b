/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Santiago Ariel Chaparro",
    photo: "images/small-profile-crop.jpg",
    favoriteFoods: ["Milanesa", "Asado", "Lasagna", "Omelettes", "Crispy Chicken Wings"],
    hobbies: ["Soccer", "Board Games", "Bike Riding", "Video Games"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push( 
    {
    place: "Buenos Aires, Argentina",
    length: "19 years",
    },
    {
    place: "Salta, Argentina",
    length: "3 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let newElement = document.createElement("li");
    newElement.textContent = food;
    document.querySelector("#favorite-foods").appendChild(newElement);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
let newElement = document.createElement("li");
newElement.textContent = hobby;
document.querySelector("#hobbies").appendChild(newElement);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});


