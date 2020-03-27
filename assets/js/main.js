var listRow = 1
function addList(category, x) {
    console.log(x)
    var obst = document.getElementById(category).value;
    var amount = document.getElementsByClassName("amount-number")[x].value;
    var unit = document.getElementsByClassName("amount-unit")[x].value;
    var displayList = document.getElementById("list-table");
    var line = document.createElement("p");
    line.innerHTML = listRow;
    listRow++
    var listItem = document.createElement("p");
    listItem.innerHTML = ("Obst - " + obst);
    var listAmount = document.createElement("p");
    listAmount.innerHTML = amount;
    var listUnit = document.createElement("p");
    listUnit.innerHTML = unit;
    displayList.appendChild(line);
    displayList.appendChild(listItem);
    displayList.appendChild(listAmount);
    displayList.appendChild(listUnit);

}