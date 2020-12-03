let form = document.querySelector("form");
let divElt = document.getElementById('info');
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    let data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("https://oc-jswebsrv.herokuapp.com/article", data, function () {
        console.log('c\'est bon ! ');
        divElt.textContent = "L'article a bien été ajouté !"
    });
});