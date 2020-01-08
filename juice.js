let tonyJuice = 0;
let tonyJuicePerClick = 1;
let clickLevel = 0;
let clickBonus = 0;
let clickLevelCost = 500;
let autoTonyJuice = 0;

const COST_INCREASE = 1.5;

let juicer = {quantity: 0, juiceYield: 1, cost: 50};
let farm = {quantity: 0, juiceYield: 10, cost: 1500};
let factory = {quantity: 0, juiceYield: 0, cost: 0};
let office = {quantity: 0, juiceYield: 0, cost: 0};
let elon = {quantity: 0, juiceYield: 0, cost: 0};
let kingdom = {quantity: 0, juiceYield: 0, cost: 0};
let planet = {quantity: 0, juiceYield: 0, cost: 0};
let ai = {quantity: 0, juiceYield: 0, cost: 0};

window.onload = function() {
    document.getElementById("bottle").onclick = clickFunction;
    document.getElementById("juicer-button").onclick = buyJuicer;

    autoProduction();
    updateVariables();
};

const clickFunction = function() {
    tonyJuice += tonyJuicePerClick;
    const x = document.getElementById("tj-count");
    x.innerHTML = tonyJuice;
};

const updateVariables = function() {
    clickBonus = Math.ceil(0.1 * autoTonyJuice * clickLevel);
    tonyJuicePerClick += clickBonus;
    autoTonyJuice = (juicer.quantity * juicer.juiceYield);
    const x = document.getElementById("tj-per-sec");
    x.innerHTML = (autoTonyJuice * 10).toLocaleString("en");

    setTimeout(updateVariables, 1);
};

const autoProduction = function() {
    tonyJuice += autoTonyJuice;
    const x = document.getElementById("tj-count");
    x.innerHTML = tonyJuice.toLocaleString("en");

    setTimeout(autoProduction, 100);
};

const buyJuicer = function() {
    if (tonyJuice >= juicer.cost) {
        tonyJuice -= juicer.cost;
        juicer.quantity++;
        juicer.cost = Math.ceil(juicer.cost * COST_INCREASE);

        const x = document.getElementById("juicer-quantity");
        const y = document.getElementById("juicer-cost");
        x.innerHTML = juicer.quantity.toLocaleString("en");
        y.innerHTML = juicer.cost.toLocaleString("en");
    }
};
