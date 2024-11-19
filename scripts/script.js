// JavaScript Document

//menu openen en sluiten
const menuOpenButton = document.querySelector("header ul li button");
const deNav = document.querySelector("header nav");

menuOpenButton.onclick = openMenu;

function openMenu() {
  deNav.classList.add("toonMenu");
}

//2 buttons om het menu mee te sluiten
const menuSluitButton = document.querySelector("nav button");
const menuSluitButton2 = document.querySelector("nav button:nth-of-type(2)");
menuSluitButton.onclick = sluitMenu;
menuSluitButton2.onclick = sluitMenu;

function sluitMenu() {
  deNav.classList.remove("toonMenu");
}


//De code hieronder heb ik vorig jaar samen met een studentassistente geschreven
var klantknop = document.querySelector("footer button:nth-of-type(1)");
var vraagknop = document.querySelector("footer article:nth-of-type(3) button");
var vanharenknop = document.querySelector("footer article:nth-of-type(4) button");
var taalknop = document.querySelector("footer article:nth-of-type(5) button");

klantknop.onclick = openKlant;
vraagknop.onclick = openVraag;
vanharenknop.onclick = openVanharen;
taalknop.onclick = openTalen;

function openKlant () {
  var klantlijst = document.querySelector("footer article:nth-of-type(2) ul");
   klantlijst.classList.toggle("klantopen");
}

function openVraag () {
  var vraaglijst = document.querySelector("footer article:nth-of-type(3) ul");
   vraaglijst.classList.toggle("vraagopen");
}

function openVanharen () {
  var vanharenlijst = document.querySelector("footer article:nth-of-type(4) ul");
   vanharenlijst.classList.toggle("vanharenopen");
}

function openTalen () {
  var taallijst = document.querySelector("footer article:nth-of-type(5) ul");
   taallijst.classList.toggle("taalopen");
}


//pagina 2: schoenpagina dropdowns
var artikelknop = document.querySelector("main article:nth-of-type(4) button");
var materiaalknop = document.querySelector("main article:nth-of-type(5) button");
var verzendingknop = document.querySelector("main article:nth-of-type(6) button");

artikelknop.onclick = openArtikel;
materiaalknop.onclick = openMateriaal;
verzendingknop.onclick = openVerzending;

function openArtikel () {
  var artikellijst = document.querySelector("main article:nth-of-type(4) ul");
   artikellijst.classList.toggle("artikelopen");
}

function openMateriaal () {
  var materiaallijst = document.querySelector("main article:nth-of-type(5) ul");
   materiaallijst.classList.toggle("materiaalopen");
}

function openVerzending () {
  var verzendinglijst = document.querySelector("main article:nth-of-type(6) ul");
   verzendinglijst.classList.toggle("verzendingopen");
}


//button lijntje
const button = document.querySelector("main article:nth-of-type(2) ul li button img");
button.addEventListener('click', function() {
  button.classList.toggle('active');
});