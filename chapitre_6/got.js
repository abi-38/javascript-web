// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}



maisons.forEach(function (maison) {
    let selectElt = document.getElementById('maison');
    let newOption = document.createElement('option');
    selectElt.appendChild(newOption);
    newOption.textContent = maison.nom;
    newOption.value = maison.nom;
}) 

let maisonElt = document.querySelector('#maison');

maisonElt.addEventListener('change', function(e) {
    let ulElt = document.getElementById('persos');
    let liElt = document.createElement('li');
    ulElt.appendChild(liElt);
    liElt.textContent = e.target.value;
})