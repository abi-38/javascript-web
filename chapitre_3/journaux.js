// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
let parent = document.getElementById('contenu');

for (let i=0; i<journaux.length; i++) {
    let lien = document.createElement('a');
    lien.textContent = journaux[i];
    lien.href = journaux[i];
    parent.appendChild(lien);
    parent.appendChild(document.createElement("br"));
}
