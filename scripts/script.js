// JavaScript Document
console.log("hi");

// variable is jampot, menuknop is het label (naam kan je zelf kiezen)
// tussen de haakjes is wat er in de jampot gaat (wat je ophaalt)
// document zoekt het document door, de queryselector kijkt wel stukje er geselecteerd moet worden 
//(zoekt naar wat er tussen de haakjes staat)
//var menuknop = document.querySelector("nav button");

// nu hoef je var er niet voor te zetten en document.query etc ook niet
// onclick is gewoon een actie. openMenu is de functie
// Eerst zeggen activeer de functie, dan uitleggen wat dat inhoud
//menuknop.onclick = openMenu;

// definieer de functie, haakjes kan je leeglaten
//function openMenu () {
  // var navlijst = document.querySelector("nav ul");
   //navlijst.classList.toggle("menuopen");//
//}

//Dit hierboven is allemaal fout btw dus haal dit weg//

const menuOpenButton = document.querySelector("header ul li button");
const deNav = document.querySelector("header nav");

menuOpenButton.onclick = openMenu;

function openMenu() {
  deNav.classList.add("toonMenu");
}


const menuSluitButton = document.querySelector("nav button");
// stap 1 - zoek sluiten button op
menuSluitButton.onclick = sluitMenu;

function sluitMenu() {
  deNav.classList.remove("toonMenu");
}


