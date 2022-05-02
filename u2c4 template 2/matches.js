// write js code here corresponding to matches.html
var allMatch = JSON.parse(localStorage.getItem("schedule"));
var favourites = JSON.parse(localStorage.getItem("favouriteMatches")) || [];
displayMatches(allMatch);

document
    .querySelector("#filterVenue").addEventListener("change", seleVenue);

function seleVenue() {
    var selected = document.querySelector("#filterVenue").value;
    console.log(selected);

    var filterlist = allMatch.filter(function(el) {
        return el.value == selected
    });

    displayMatches(filterlist);
}

function displayMatches(allMatch) {
    document.querySelector("tbody").innerHTML = "";
    allMatch.forEach(function(elem, i) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td")
        td1.innerText = elem.num;

        var td2 = document.createElement("td")
        td2.innerText = elem.team_a

        var td3 = document.createElement("td")
        td3.innerText = elem.team_b

        var td4 = document.createElement("td")

        td4.innerText = elem.date
        var td5 = document.createElement("td")
        td5.innerText = elem.venue

        var td6 = document.createElement("td")
        td6.innerText = "Add Favourite"
        td6.addEventListener("click", function() {
            addToFavourite(elem);
            removeItem(elem, i);
        });
        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);
    });
}

function removeItem(elem, index) {
    allMatch.splice(index, 1);
    localStorage.setItem("schedule", JSON.stringify(allMatch));
    window.location.reload();
}

function addToFavourite(elem) {
    favourites.push(elem);
    localStorage.setItem("favouriteMatches", JSON.stringify(favourites));
}