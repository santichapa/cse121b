let factsElement = document.querySelector("#facts");

let list = [];

const getFacts = async () => {
    const response = await fetch("https://dog-api.kinduff.com/api/facts?number=10");
    let data = await response.json();
    list = data.facts;
    reset();
    displayFacts(list);
}

const displayFacts = list => {
    list.forEach(fact => {
        let factNum = 1;
        let article = document.createElement("article");
        let factsHtml = `<label for="fact${factNum}">${fact}</label>
        <input type="checkbox" id="fact${factNum}" name="fact" value="fact${factNum}"><br>`;
        article.innerHTML = factsHtml;
        factsElement.appendChild(article);
        factNum++;
    })
}

const reset = () => {
    factsElement.innerHTML = "";
}

export let checkedValues = [];

const getCheckedValues = () => {
    var checkedValue;
    var checkboxes = document.getElementsByName("fact");
    for (let i = 0; i < checkboxes.length; i++) {
        checkedValue = checkboxes[i].checked;
        checkedValues.push(checkedValue);
    }
    console.log(checkedValues);
}

getFacts();

document.querySelector("#render").addEventListener("click", getCheckedValues);
document.querySelector("#render").addEventListener("click", getFacts);

export default checkedValues;
