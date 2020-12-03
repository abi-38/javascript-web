let boutonElt = document.querySelector('button');
let ulElt = document.querySelector('#desserts');

boutonElt.addEventListener('click', function() {
    let newDessert = prompt('quel dessert');

    let newLi = document.createElement('li');
    newLi.textContent = newDessert;
    ulElt.appendChild(newLi);

    newLi.addEventListener('click', function() {
        let modificationDessert = prompt('tu veux remplace ce dessert par ?');
        newLi.textContent = modificationDessert;
    })


})