const btn = document.querySelector('button');
const blagues = document.getElementById('blagues');
let quotes = ["Ba maraya sai rago",
"Dogaro ga Allah jari ne",
"Gaba da gabanta, aljani ya taka wuta",
"Girman kai rawanin tsiya",
"Gaskiya tafi kwabo",
"Gaskiya matakin nasara",
"Ilimi gishirin zaman duniya",
"In ajali ya kira ko ba ciwo sai an je",
"In kunne ya ji gangan jiki ya tsira",
"Karen bana shi ke maganin zomon bana",
"Karamin sani kukumi ne"];
btn.addEventListener('click', function(){
    var randomQuotes=Math.floor(Math.random()*quotes.length);
    blagues.innerText=""+quotes[randomQuotes];
})
