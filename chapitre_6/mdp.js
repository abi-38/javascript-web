let mp1Elt = document.getElementById('mdp1');
let mp2Elt = document.getElementById('mdp2');

mp1Elt.addEventListener('blur', function(e) {
    let mdp = e.target.value;
    let validiteMdp = '';
    let regexMdp = /[0-9]/;
    if (mdp.length < 6) {
        validiteMdp = "mot de passe trop court";
    } else if (!regexMdp.test(mdp)) {
        validiteMdp = "mot de passe doit contenir au moins un chiffre";
    }
    let infoMdpElt = document.getElementById('infoMdp');
    infoMdpElt.textContent = validiteMdp;
})


mp2Elt.addEventListener('blur', function(e) {
    var form = document.querySelector("form");
    let validiteMdp = '';
    if (form.elements[0].value !== e.target.value) {
        validiteMdp = 'les mots de passe doivent être identiques'
    }
    let infoMdpElt = document.getElementById('infoMdp');
    infoMdpElt.textContent = validiteMdp;
})