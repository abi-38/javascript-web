/*const send = function() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let reponse = JSON.parse(this.responseText);
        let final = JSON.parse(reponse.postData.text);
          console.log(final);
          let resultElt = document.getElementById('result');
          resultElt.textContent = final;
        }
    }
    request.open('POST', 'https://mockbin.com/request');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(document.getElementById("value").value)); 
}
  
let formElt = document.getElementById('form');
formElt.addEventListener('submit', function(e) {
    send();
    e.preventDefault();
})*/
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let data = document.getElementById("value").value;

    ajaxPost("https://mockbin.com/request", data, function(reponse) {
        console.log(data);
        console.log(reponse);
        console.log("Le film " + JSON.stringify(data) + " a été envoyé au serveur");
        let resultElt = document.getElementById('result');
        resultElt.textContent = JSON.stringify(data);
    }, 
    true
    );
});
