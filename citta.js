const params = new URLSearchParams(window.location.search);
const citta = params.get("q")

const titolo = document.getElementById('titolo');
const body = document.querySelector('body');

const cantante = document.querySelectorAll('.nome');
const luogo = document.querySelectorAll('.luogo');
const quando = document.querySelectorAll('.data');
const ora = document.querySelectorAll('.ora');
const ticketone = document.querySelectorAll('.ticketone');
const spotify = document.querySelectorAll('.spotify');

function assegnaEvento(data, citta) {
switch (citta) {
case "bologna":
titolo.textContent = 'Bologna';
body.style.backgroundImage = 'url(images/bologna2.jpg)';
break;
case "milano":
titolo.textContent = 'Milano';
body.style.backgroundImage = 'url(images/milano2.jpg)';
break;
case "padova":
titolo.textContent = 'Padova';
body.style.backgroundImage = 'url(images/padova2.webp)';
break;
case "torino":
titolo.textContent = 'Torino';
body.style.backgroundImage = 'url(images/torino2.jpg)';
break;
case "catania":
titolo.textContent = 'Catania';
body.style.backgroundImage = 'url(images/catania2.jpg)';
break;
case "firenze":
titolo.textContent = 'Firenze';
body.style.backgroundImage = 'url(images/firenze2.jpg)';
break;
case "napoli":
titolo.textContent = 'Napoli';
body.style.backgroundImage = 'url(images/napoli2.jpg)';
break;
case "roma":
titolo.textContent = 'Roma';
body.style.backgroundImage = 'url(images/roma2.jpeg)';
break;
}
let eventi = data[citta];
for (let i = 0; i < eventi.length; i++) {
cantante[i].textContent = eventi[i].titolo;
luogo[i].textContent = eventi[i].luogo;
quando[i].textContent = eventi[i].data + " ore " + eventi[i].ore;
ticketone[i].href = eventi[i].ticketone;
spotify[i].href = eventi[i].spotify;
}
}

fetch('eventi.json')
  .then(response => response.json())
  .then(res => assegnaEvento(res, citta))
  .catch(error => console.error('Error fetching JSON:', error));