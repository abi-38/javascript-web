function afficher(reponse) {
    console.log(reponse);
    let tableaux = JSON.parse(reponse);
    console.log(tableaux);
    let bodyElt = document.querySelector('body');
    let tableElt = document.createElement('table');
    bodyElt.appendChild(tableElt);
    let ligne1 = document.createElement('tr');
    tableElt.appendChild(ligne1);

    let cellule1 = document.createElement('td');
    ligne1.appendChild(cellule1);
    cellule1.textContent = 'nom';

    let cellule2 = document.createElement('td');
    ligne1.appendChild(cellule2);
    cellule2.textContent = 'année';

    let cellule3 = document.createElement('td');
    ligne1.appendChild(cellule3);
    cellule3.textContent = 'auteur';
    
    tableaux.forEach(function(tableau) {
        
        let ligne2 = document.createElement('tr');
        tableElt.appendChild(ligne2);
        let cellule21 = document.createElement('td');
        ligne2.appendChild(cellule21);
        cellule21.textContent = tableau.titre;

        let cellule22 = document.createElement('td');
        ligne2.appendChild(cellule22);
        cellule22.textContent = tableau.annee;

        let cellule23 = document.createElement('td');
        ligne2.appendChild(cellule23);
        cellule23.textContent = tableau.auteur;
    })
}

ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", afficher);