//select elements and create variables 





function getAll(){
    fetch('http://api.techlaunch.io:88/all')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

function getRandom(){
    fetch('http://api.techlaunch.io:88/random')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

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
    fetch(`http://api.techlaunch.io:88/${getQueryVariable("id")}`) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

// singleQuote(getQueryVariable("id"));

// getRandom();
// getAll();








// //Retrieve Data 

//       //Access JSON from URL
//     var request = new XMLHttpRequest();

//     request.open('GET', 'http://api.techlaunch.io/quotes/all', true);
    
//     request.onload = function () {
//         // begin accessing JSON data here
//     }
//     request.send();

        
// //Connect to API for All Quotes


// //maybe document.write(); for (var i = 0; i????; i++){ document.write (data[i].id + data[i].author + data[i].year);}



// //Connect to API for ID Quotes

// //document.write (data[i].id + data[i].text + data[i].author + data[i].source + data[i].year);


// //Connect to API for Random Quotess
// Math.floor(Math.random() *  [number of quotes]) + 1;
// //document.write (data[i].id + data[i].text + data[i].author + data[i].source + data[i].year);

