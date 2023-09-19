const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute('src', 'https://picsum.photos/200', )
newImage.setAttribute('alt', 'an image from the internet', )
document.body.appendChild(newImage);

const newSection = document.createElement("section");

const newHeader = document.createElement("h2");
newHeader.innerText = "CSE 121b";
newSection.appendChild(newHeader);

const newPara = document.createElement("p");
newPara.innerText = "Welcome to Javascript Language"
newSection.appendChild(newPara);

document.body.appendChild(newSection);