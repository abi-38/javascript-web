let ballon = document.getElementById("ballon");
let cadre = document.getElementById("cadre");
let demarrer = document.getElementById("demarrer");
let arreter = document.getElementById("arreter");
let vitesse = 7;
let xMin = 0;
let direction = 1;

let largeurBallon = parseFloat(getComputedStyle(ballon).width);
let animationId = null; 

function deplacerballon() {
    let xBallon = parseFloat(getComputedStyle(ballon).left);
    let xMax = parseFloat(getComputedStyle(cadre).width);
    if ((xBallon < xMin) || (xBallon + largeurBallon > xMax)) {
        direction *= -1;
    }
    ballon.style.left = (xBallon + vitesse * direction) + "px"; 
    animationId = requestAnimationFrame(deplacerballon);
}

demarrer.addEventListener('click', function() {
    animationId = requestAnimationFrame(deplacerballon);
    arreter.disabled = false;
    demarrer.disabled = true;
});

arreter.addEventListener('click', function() {
    arreter.disabled = true;
    demarrer.disabled = false;
    cancelAnimationFrame(animationId);
})


