const apiAddress = "";
const apiKey = "";
const apiArtist = "";
let musicSearchEl = document.querySelector("#search-button");

musicSearchEl.onclick = function (){
    getArtistApi();
    let songTitle = document.getElementById("song").value;
    console.log(songTitle);
    console.log("this");
};

function getArtistApi() {
    let api = apiAddress + apiKey
    event.preventDefault();
    let songTitle = document.getElementById("song").value;
    console.log(songTitle);
    fetch("https://canarado-lyrics.p.rapidapi.com/lyrics/" + songTitle, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "canarado-lyrics.p.rapidapi.com",
            "x-rapidapi-key": "240cf3a120msh185fd7891df65d4p1381afjsn127ca8039ec2"}})
    .then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            

            })
        }
    }
    

    )}
// clicked feature to search
// call api from Genius 
// parse info
// display data to the site

