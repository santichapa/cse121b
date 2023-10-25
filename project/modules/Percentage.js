import {checkedValues} from "../scripts/project.js";

let listCounter = 1; 
const renderPercentage = () => {
    let p = document.querySelector("#percentage");
    let percentage = 0;
    let counter = 0;
    
    checkedValues.map(value => {
        if (value) {
        
        counter++;
        }
    });
    
    percentage = (counter/listCounter)*10;
    p.textContent = `You know ${percentage.toPrecision(2)}% of facts!`;
    listCounter++;
}

document.querySelector("#render").addEventListener("click", renderPercentage);




