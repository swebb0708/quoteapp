// select elements and create variable
var quoteID = document.querySelector("#quote");


// define functions
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
  }

function singleQuote(num){
    fetch(`http://api.techlaunch.io:88/${num}`) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        quoteID.innerHTML +=
        `
        <div class= "quoteIDContainer">
            <p> "${data.text}" <br> -${data.author} <br>
            <a href="${data.source}" target="_blank"> ${data.source} </a> </p>
        </div>
        `
    })
    .catch(function(error){
        console.log("There was an error!")
    })
}


// call functions and add eventListeners 

singleQuote(getQueryVariable("id"));

