// write js code here corresponding to favourites.html

var favourites = JSON.parse(localStorage.getItem("favouriteMatches"))

displayMatches(favourites);

function displayMatches(allMatch) {
    allMatch.forEach(function(elem) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.num

        var td2 = document.createElement("td");
        td2.innerText = elem.team_a

        var td3 = document.createElement("td");
        td3.innerText = elem.team_b

        var td4 = document.createElement("td");
        td4.innerText = elem.date

        var td5 = document.createElement("td");
        td5.innerText = elem.venue

        var td6 = document.createElement("td");
        td6.innerText = "Remove";
        td6.addEventListener("click", rmv)

        function rmv() {
            removeItem(elem, i)
        }
        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr)
    })

    function removeItem(elem, i) {
        favourites.splice(i, 1);
        localStorage.setItem("favoriteMatches", JSON.stringify(favourites));
        window.location.reload();
    }

}