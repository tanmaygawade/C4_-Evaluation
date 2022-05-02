// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", mattc);
var bigmatch = JSON.parse(localStorage.getItem("schedule")) || [];

function mattc() {
    event.preventDefault();

    var matchObj = {
        num: masaiForm.matchNum.value,
        team_a: masaiForm.teamA.value,
        team_b: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value,
    }
    bigmatch.push(matchObj)
    localStorage.setItem("schedule", JSON.stringify(bigmatch));