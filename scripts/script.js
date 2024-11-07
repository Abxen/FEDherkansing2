// JavaScript Document
console.log("hi");

const menuOpenButton = document.querySelector("header ul li button");
const deNav = document.querySelector("header nav");

menuOpenButton.onclick = openMenu;

function openMenu() {
  deNav.classList.add("toonMenu");
}


const menuSluitButton = document.querySelector("nav button");
menuSluitButton.onclick = sluitMenu;

function sluitMenu() {
  deNav.classList.remove("toonMenu");
}


//De code hieronder heb ik vorig jaar samen met een studentassistente geschreven

// variable is jampot, menuknop is het label (naam kan je zelf kiezen)
// tussen de haakjes is wat er in de jampot gaat (wat je ophaalt)
// document zoekt het document door, de queryselector kijkt wel stukje er geselecteerd moet worden 
// (zoekt naar wat er tussen de haakjes staat)
var klantknop = document.querySelector("footer button:nth-of-type(1)");
var vraagknop = document.querySelector("footer article:nth-of-type(3) button");
var vanharenknop = document.querySelector("footer article:nth-of-type(4) button");
var taalknop = document.querySelector("footer article:nth-of-type(5) button");


// nu hoef je var er niet voor te zetten en document.query etc ook niet
// onclick is gewoon een actie. openMenu is de functie
// Eerst zeggen activeer de functie, dan uitleggen wat dat inhoud
klantknop.onclick = openKlant;
vraagknop.onclick = openVraag;
vanharenknop.onclick = openVanharen;
taalknop.onclick = openTalen;

// definieer de functie, haakjes kan je leeglaten
function openKlant () {
  console.log("klant");
  var klantlijst = document.querySelector("footer article:nth-of-type(2) ul");
   klantlijst.classList.toggle("klantopen");
}

function openVraag () {
  console.log("vraag");
  var vraaglijst = document.querySelector("footer article:nth-of-type(3) ul");
   vraaglijst.classList.toggle("vraagopen");
}

function openVanharen () {
  console.log("vanharen");
  var vanharenlijst = document.querySelector("footer article:nth-of-type(4) ul");
   vanharenlijst.classList.toggle("vanharenopen");
}

function openTalen () {
  console.log("taal");
  var taallijst = document.querySelector("footer article:nth-of-type(5) ul");
   taallijst.classList.toggle("taalopen");
}


//pagina 2: schoenpagina

var artikelknop = document.querySelector("main article:nth-of-type(4) button");
var materiaalknop = document.querySelector("main article:nth-of-type(5) button");
var verzendingknop = document.querySelector("main article:nth-of-type(6) button");

artikelknop.onclick = openArtikel;
materiaalknop.onclick = openMateriaal;
verzendingknop.onclick = openVerzending;

function openArtikel () {
  console.log("artikel");
  var artikellijst = document.querySelector("main article:nth-of-type(4) ul");
   artikellijst.classList.toggle("artikelopen");
}

function openMateriaal () {
  console.log("materiaal");
  var materiaallijst = document.querySelector("main article:nth-of-type(5) ul");
   materiaallijst.classList.toggle("materiaalopen");
}

function openVerzending () {
  console.log("verzending");
  var verzendinglijst = document.querySelector("main article:nth-of-type(6) ul");
   verzendinglijst.classList.toggle("verzendingopen");
}