var telephones = [

    {

        "marque": "Apple",

        "modele": "iPhone"

    },

    {

        "marque": "Samsung",

        "modele": "Galaxy"

    }

];

var json = JSON.stringify(telephones);

console.log(JSON.parse(json)[1].marque);