let tonyJuice = 0;
let tonyJuicePerClick = 1;
let clickLevel = 0;
let clickBonus = 0;
let clickLevelCost = 500;
let autoTonyJuice = 0;

const COST_INCREASE = 1.6;
const CLICK_COST_INCREASE = 5;

let juicer = {quantity: 0, juiceYield: 1, cost: 30};
let farm = {quantity: 0, juiceYield: 8, cost: 1500};
let factory = {quantity: 0, juiceYield: 0, cost: 0};
let office = {quantity: 0, juiceYield: 0, cost: 0};
let elon = {quantity: 0, juiceYield: 0, cost: 0};
let kingdom = {quantity: 0, juiceYield: 0, cost: 0};
let planet = {quantity: 0, juiceYield: 0, cost: 0};
let ai = {quantity: 0, juiceYield: 0, cost: 0};

window.onload = function() {
    document.getElementById("bottle").onclick = clickFunction;
    document.getElementById("click-bonus-button").onclick = clickLevelUp;
    document.getElementById("juicer-button").onclick = buyJuicer;
    document.getElementById("farm-button").onclick = buyFarm;

    autoProduction();
    updateVariables();
};

const updateVariables = function() {
    clickBonus = Math.round(0.01 * autoTonyJuice * clickLevel * 8);
    tonyJuicePerClick = 1 + clickBonus;
    autoTonyJuice = (juicer.quantity * juicer.juiceYield) + (farm.quantity * farm.juiceYield) + (factory.quantity * factory.juiceYield) + (office.quantity * office.juiceYield)
     + (elon.quantity * elon.juiceYield) + (kingdom.quantity * kingdom.juiceYield) + (planet.quantity * planet.juiceYield) + (ai.quantity * ai.juiceYield);

    const x = document.getElementById("tj-per-sec");
    const y = document.getElementById("tj-per-click");
    x.innerHTML = (autoTonyJuice * 8).toLocaleString("en");
    y.innerHTML = tonyJuicePerClick.toLocaleString("en");;

    setTimeout(updateVariables, 10);
};

const clickFunction = function() {
    tonyJuice += tonyJuicePerClick;

    const x = document.getElementById("tj-count");
    x.innerHTML = tonyJuice.toLocaleString("en");
};

const clickLevelUp = function() {
    if (tonyJuice >= clickLevelCost) {
        tonyJuice -= clickLevelCost;
        clickLevel++;
        clickLevelCost *= CLICK_COST_INCREASE;

        const x = document.getElementById("clicking-bonus");
        const y = document.getElementById("click-upgrade-cost");
        x.innerHTML = clickLevel.toLocaleString("en");
        y.innerHTML = clickLevelCost.toLocaleString("en");
    }
}

const autoProduction = function() {
    tonyJuice += autoTonyJuice;
    const x = document.getElementById("tj-count");
    x.innerHTML = tonyJuice.toLocaleString("en");

    setTimeout(autoProduction, 125);
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

const buyFarm = function() {
    if (tonyJuice >= farm.cost) {
        tonyJuice -= farm.cost;
        farm.quantity++;
        farm.cost = Math.ceil(farm.cost * COST_INCREASE);

        const x = document.getElementById("farm-quantity");
        const y = document.getElementById("farm-cost");
        x.innerHTML = farm.quantity.toLocaleString("en");
        y.innerHTML = farm.cost.toLocaleString("en");
    }
};
