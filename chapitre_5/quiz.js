// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

let i = 1;

questions.forEach(function (question) {

    let contenuElt = document.querySelector('#contenu');
    let zoneParagraphe = document.createElement('p');
    contenuElt.appendChild(zoneParagraphe);
    
    // Zone de titre
    let zoneTitre = document.createElement('h2');
    zoneParagraphe.appendChild(zoneTitre);
    zoneTitre.textContent = 'Question ' + i;

    // Zone énnoncé
    let zoneEnnonce = document.createElement('p');
    zoneParagraphe.appendChild(zoneEnnonce);
    zoneEnnonce.textContent = question.enonce;

    // Zone réponse
    let zoneReponse = document.createElement('div');
    zoneParagraphe.appendChild(zoneReponse);

    // Bouton
    let boutonElt = document.createElement('button');
    zoneReponse.appendChild(boutonElt);
    boutonElt.textContent = 'Affichez la réponse'

    // Remplacement du bouton par la réponse au click
    boutonElt.addEventListener('click', function() {
        let pElt = document.createElement('p');
        zoneReponse.textContent = "";
        zoneReponse.appendChild(pElt);
        pElt.textContent = question.reponse;
    })

    i++;
})
