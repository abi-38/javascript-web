// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
let parent = document.getElementById('contenu');
let dlElt = document.createElement('dl');
parent.appendChild(dlElt);


/*
for (let i=0; i<mots.length; i++) {
    dt.textContent = mot[i.terme];
    dd.textContent = mot[i.definition];
}*/

mots.forEach(function(mot) {

    let dtElt = document.createElement('dt');
    dlElt.appendChild(dtElt);
    
    let strongElt = document.createElement('strong');
    dtElt.appendChild(strongElt);
    strongElt.textContent = mot.terme;

    let ddElt = document.createElement('dd');
    dlElt.appendChild(ddElt);
    ddElt.textContent = mot.definition;

})
