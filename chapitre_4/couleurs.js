let couleurFond = prompt('choisi la couleur de fond des paragraphes');
let couleurText = prompt('choisi la couleur des textes des paragraphes');

let divElts = document.getElementsByTagName("div");

for(let i=0; i<divElts.length; i++) {
    divElts[i].style.backgroundColor = couleurFond;
    divElts[i].style.color = couleurText;
}
