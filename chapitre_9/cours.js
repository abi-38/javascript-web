var articlesElt = document.getElementById("articles");
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.titre;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.contenu;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
    });
});

var premMinElt = document.getElementById("premMin");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {
    var premierMinistre = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = premierMinistre.description;
    var logoElt = document.createElement("img");
    logoElt.src = premierMinistre.logo;
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});

// Accès à la météo de Lyon avec la clé d'accès 50a65432f17cf542
ajaxGet("https://www.prevision-meteo.ch/services/json/paris", function (reponse) {
    var meteo = JSON.parse(reponse);
    // Récupération de certains résultats
    var condition = meteo.current_condition.condition;
    // Affichage des résultats
    var conditionsElt = document.createElement("div");
    conditionsElt.textContent = `Il fait actuellement ${condition}`;
    var meteoElt = document.getElementById("meteo");
    meteoElt.appendChild(conditionsElt);
});