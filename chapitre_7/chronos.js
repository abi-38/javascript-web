let compteurElt = document.getElementById("compteur");
let boutonElt = document.getElementById("bouton");
let intervalId = null;
let demarre = false; 

function augmenterCompteur() {
    let compteur = Number(compteurElt.textContent);
    compteurElt.textContent = compteur + 1;
}

boutonElt.addEventListener('click', function() {
    if (!demarre) {
        intervalId = setInterval(augmenterCompteur, 1000);
        boutonElt.textContent = "Arrêter"
    } else {
        clearInterval(intervalId);
        boutonElt.textContent = "Démarrer";
    }
    demarre = !demarre;
});