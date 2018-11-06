// select elements and create variable
var allQuotes = document.querySelector("#list");


// define functionsv
function getAll(){
    fetch('http://api.techlaunch.io:88/all')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for(var i=0; i<data.length; i++ ){
            allQuotes.innerHTML +=
            `
            <div class= "quoteContainer">
                <p> "${data[i].text}" 
                <a href="quote.html?id=${data[i].id}"> ${data[i].author} </a> </p>
            </div>
            `
        }
    })
    .catch(function(error){
        console.log("There was an error!")
    })
}

// call functions and add eventListeners 
getAll();