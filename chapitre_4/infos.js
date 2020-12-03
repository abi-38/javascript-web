let styleContenu = getComputedStyle(document.getElementById("contenu"));

let ulElt = document.createElement('ul');
document.querySelector("body").appendChild(ulElt);

let divElt = document.createElement("li"); 
divElt.textContent = 'Largeur : ' + styleContenu.width; 
ulElt.appendChild(divElt);

let divBisElt = document.createElement("li"); 
divBisElt.textContent = 'Hauteur : ' + styleContenu.height;
ulElt.appendChild(divBisElt);

let infos = document.getElementById('infos');
document.querySelector("body").appendChild(infos);

infos.textContent = 'Informations sur l\'élement';
console.log(document.getElementsByTagName("li")[1]);