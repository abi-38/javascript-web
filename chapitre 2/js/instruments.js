function infosLiens () {
    let liensElts = document.getElementsByTagName('a');
    let nombreDeLiens = liensElts.length;
    console.log(nombreDeLiens);
    if (nombreDeLiens > 0) {
        console.log(liensElts[0].href);
        console.log(liensElts[nombreDeLiens -1].href);
    }
}
infosLiens();

function possede (id, classe) {
    let instrument = document.getElementById(id);
    if (instrument !== null) {
        if (instrument.classList.contains(classe) === true) {
            console.log(`L'id ${id} possède la classe ${classe}`);
        } else {
            console.log(`L'id ${id} ne possède pas la classe ${classe}`);
        }
    } else {
        console.log(`L'id ${id} n'existe pas`);
    }
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur