let formElt = document.querySelector('form');
let infosElt = document.getElementById('infos');


formElt.addEventListener('submit', function(e) {
    e.preventDefault();
    let nomGitHub = formElt.elements.profil.value;
    ajaxGet("https://api.github.com/users/" + nomGitHub, function(reponse) {
        let retour = JSON.parse(reponse);
        console.log(retour);
        let imageElt = document.createElement('img');
        infosElt.appendChild(imageElt);
        imageElt.src = retour.avatar_url;
        imageElt.style.width = "150px";
        imageElt.style.height = "150px";
        let divElt = document.createElement('div');
        infosElt.appendChild(divElt);
        divElt.textContent = retour.name;
        divElt.style.fontSize = "20px";
        let aElt = document.createElement('a');
        infosElt.appendChild(aElt);
        aElt.textContent = retour.blog;
        aElt.href = retour.blog;


    })
})






























/*let infosElt = document.getElementById("infos");

let formElt = document.querySelector("form");
formElt.addEventListener("submit", function (e) {
    e.preventDefault();
    let nomProfil = formElt.elements.profil.value;
    ajaxGet("https://api.github.com/users", function (reponse) {
        // Transformation de la réponse en un objet JSON
        var profil = JSON.parse(reponse);
        // Création des informations sur le profil
        var avatarElt = document.createElement("img");
        avatarElt.src = profil.avatar_url;
        avatarElt.style.height = "150px";
        avatarElt.style.width = "150px";
        var nomElt = document.createElement("div");
        nomElt.textContent = profil.name;
        nomElt.style.fontSize = "20px";
        var employeurElt = document.createElement("div");
        employeurElt.textContent = profil.company;
        var siteElt = document.createElement("a");
        siteElt.href = profil.blog;
        siteElt.textContent = siteElt.href;
        // Affichage des informations
        infosElt.innerHTML = ""; // Suppression des infos précédentes
        infosElt.appendChild(avatarElt);
        infosElt.appendChild(nomElt);
        infosElt.appendChild(employeurElt);
        infosElt.appendChild(siteElt);
    });
});*/