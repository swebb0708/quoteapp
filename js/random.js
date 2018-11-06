// select elements and create variable
var randomID = document.querySelector("#random")


// define functions
function getRandom(){
    fetch('http://api.techlaunch.io:88/random')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        randomID.innerHTML +=
        `
        <div class= "randomIDContainer">
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

getRandom();