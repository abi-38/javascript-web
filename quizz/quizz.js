document.getElementById("div").addEventListener("click", function () {

    console.log("Clic sur l'élément div");

});

document.getElementById("span").addEventListener("click", function () {

    console.log("Clic sur l'élément span");

});

document.getElementById("input").addEventListener("input", function () {

    console.log("Coucou");

});

setTimeout(function () {

    setInterval(

        function () {

            console.log("Top");

        },

        1000);

}, 2000);