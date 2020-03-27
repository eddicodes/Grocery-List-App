var listRow = 1
var listDisplay = false
function addList(category, x) {
    console.log(x)
    console.log(category)
    var item = document.getElementById(category).value;
    var amount = document.getElementsByClassName("amount-number")[x].value;
    if (amount == "") {
        alert("Geben Sie bitte eine Menge an")

    } else {
        if (listDisplay === false) {
            listDisplay = true;
            document.getElementById("list").style.display = "block"
        }
        var unit = document.getElementsByClassName("amount-unit")[x].value;
        var displayList = document.getElementById("list-table");
        var line = document.createElement("p");
        line.innerHTML = listRow;
        listRow++
        var listItem = document.createElement("p");
        listItem.innerHTML = (category + " - " + item);
        var listAmount = document.createElement("p");
        listAmount.innerHTML = amount;
        var listUnit = document.createElement("p");
        listUnit.innerHTML = unit;
        displayList.appendChild(line);
        displayList.appendChild(listItem);
        displayList.appendChild(listAmount);
        displayList.appendChild(listUnit);
    }
}
function imageChanger(category, y) {
    var z = document.getElementById(category).value;
    console.log(z)
    var image = document.getElementsByClassName("image")[y].src = `assets/img/${z}_icon.png`;
}