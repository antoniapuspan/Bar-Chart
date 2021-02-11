"use strict";
const bars = document.getElementById("bars");
const queue = [];
init();

function init() {
    setInterval(modifyModel, 300);
}

function getNumberOfCustomers() {
    let result = Math.floor(Math.random() * 32);
    return result;
}

function displayData() {
    bars.innerHTML = ''
    for (let i = 0; i < queue.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = queue[i] * 100/32 + "%";
        bars.appendChild(bar);
    }

}

function modifyModel() {
    let random = getNumberOfCustomers();
    queue.push(random);
    if (queue.length > 40) {
        queue.shift();
    }
    displayData();
}