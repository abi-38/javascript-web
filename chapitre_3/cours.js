let paragraphe = document.createElement("p"); 
paragraphe.id = "paragraphe"; 
paragraphe.appendChild(document.createTextNode('En voici une ')); 
document.getElementById("contenu").appendChild(paragraphe); 

let lien = document.createElement('a');
lien.id = 'lien';
lien.href = 'https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation';
lien.textContent = 'liste';
paragraphe.appendChild(lien);

paragraphe.appendChild(document.createTextNode(' plus complète.')); 
