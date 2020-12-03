let form = document.querySelector("form");
let divElt = document.getElementById('info');
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let temoignages = {
        pseudo: e.target.elements.pseudo.value,
        evaluation: e.target.elements.evaluation.value,
        message: e.target.elements.contenu.value,
    };
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", temoignages, function (reponse) {
        console.log('c\'est bon ! ');
        divElt.textContent = "Le témoignage a bien été ajouté !"
    },
    true
    );
});