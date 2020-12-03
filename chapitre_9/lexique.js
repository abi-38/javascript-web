let lettresElt = document.getElementById('lettres');
let lexiqueElt = document.getElementById('lexique');

let lettres = ['A', 'B', 'C', 'D', 'E'];

function afficherLettre (lettre) {
    ajaxGet('https://oc-jswebsrv.herokuapp.com/api/lexique/' + lettre, function(reponse) {
        let mots = JSON.parse(reponse);
        lexiqueElt.innerHTML = " ";

        if (mots.length > 0) {
            mots.forEach(function(mot) {
                let h3Elt = document.createElement('h3');
                lexiqueElt.appendChild(h3Elt);
                h3Elt.textContent = mot.term;
                let pElt = document.createElement('p');
                lexiqueElt.appendChild(pElt);
                pElt.textContent = mot.definition;
            })
        } else {
            let p2Elt = document.createElement('p');
            lexiqueElt.appendChild(p2Elt);
            p2Elt.textContent = 'pas de mot';
        }
       
    })
}

lettres.forEach(function (lettre) {
    let aElt = document.createElement('a');
    lettresElt.appendChild(aElt);
    aElt.textContent = lettre;
    aElt.href = '#';
    let elt = document.createTextNode(" | ");
    aElt.appendChild(elt);

    aElt.addEventListener('click', function() {
    afficherLettre (lettre);
    })
})
