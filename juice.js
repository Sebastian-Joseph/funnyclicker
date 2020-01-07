let tonyJuice = 0;
let tonyJuicePerClick = 1;

let juicerQuantity = 0;
let farmQuantity = 0;
let factoryQuantity = 0;
let officeQuantity = 0;
let elonQuantity = 0;
let kingdomQuantity = 0;
let planetQuantity = 0;
let aiQuantity = 0;

window.onload = function() {
    document.getElementById("bottle").onclick = clickFunction;
};

const clickFunction = function() {
    tonyJuice += tonyJuicePerClick;
    const x = document.getElementById("tj-per-sec");
    x.innerHTML = tonyJuice;
};

const clickBoost = function() {

};

const buyJuicer = function() {
    juicerQuantity++;
    const x = document.getElementById("juicer-quantity");
    x.innerHTML = juicerQuantity;
};
