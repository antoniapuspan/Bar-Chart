"use strict";
const bars = document.getElementById("bars");
//created a variable for the queue as an empy array
const queue = [];
init();

//calls modifyModel at every 0.3s
function init() {
    setInterval(modifyModel, 300);
}

//when called returns a random int between 0-32
function getNumberOfCustomers() {
    let result = Math.floor(Math.random() * 32);
    return result;
}

function displayData() {
    //remove the old bars and then add new ones
    bars.innerHTML = "";
    for (let i = 0; i < queue.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        //adjusting the hight of the bar according to the maximum nr. in the queue, 32.
        bar.style.height = queue[i] * 100/32 + "%";
        bars.appendChild(bar);
    }

}


function modifyModel() {
    let random = getNumberOfCustomers();
    //add a random no. to the end of the queue
    queue.push(random);
    //if the no. exceeds 40, removes 1 from the beginning of the queue
    if (queue.length > 40) {
        queue.shift();
    }
    displayData();
}