let boutonElt = document.getElementById('clic');
let bouton2Elt = document.getElementById('desactiver');
let reponseElt = document.getElementById('compteurClics');

function click (e) {
    reponseElt.textContent ++;
    e.stopPropagation();
}

boutonElt.addEventListener('click', click);

bouton2Elt.addEventListener('click', function () {
    boutonElt.removeEventListener('click', click);
})

