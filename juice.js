let tonyJuice = 0;
let tonyJuicePerClick = 1;
let clickLevel = 0;
let clickBonus = 0;
let clickLevelCost = 500;
let autoTonyJuice = 0;

const COST_INCREASE = 1.4;
const CLICK_COST_INCREASE = 5;

let juicer = {quantity: 0, juiceYield: 1, cost: 30};
let farm = {quantity: 0, juiceYield: 8, cost: 1500};
let factory = {quantity: 0, juiceYield: 64, cost: 35000};
let office = {quantity: 0, juiceYield: 0, cost: };
let elon = {quantity: 0, juiceYield: 0, cost: 0};
let kingdom = {quantity: 0, juiceYield: 0, cost: 0};
let planet = {quantity: 0, juiceYield: 0, cost: 0};
let ai = {quantity: 0, juiceYield: 0, cost: 0};

window.onload = function() {
    document.getElementById("bottle").onclick = clickFunction;
    document.getElementById("click-bonus-button").onclick = clickLevelUp;
    document.getElementById("juicer-button").onclick = buyJuicer;
    document.getElementById("farm-button").onclick = buyFarm;
    document.getElementById("factory-button").onclick = buyFactory;

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

const buyFactory = function() {
    if (tonyJuice >= factory.cost) {
        tonyJuice -= factory.cost;
        factory.quantity++;
        factory.cost = Math.ceil(factory.cost * COST_INCREASE);

        const x = document.getElementById("factory-quantity");
        const y = document.getElementById("factory-cost");
        x.innerHTML = factory.quantity.toLocaleString("en");
        y.innerHTML = factory.cost.toLocaleString("en");
    }
};

const buyOffice = function() {
    if (tonyJuice >= office.cost) {
        tonyJuice -= office.cost;
        office.quantity++;
        office.cost = Math.ceil(office.cost * COST_INCREASE);

        const x = document.getElementById("office-quantity");
        const y = document.getElementById("office-cost");
        x.innerHTML = office.quantity.toLocaleString("en");
        y.innerHTML = office.cost.toLocaleString("en");
    }
};

const buyElon = function() {
    if (tonyJuice >= elon.cost) {
        tonyJuice -= elon.cost;
        elon.quantity++;
        elon.cost = Math.ceil(elon.cost * COST_INCREASE);

        const x = document.getElementById("elon-quantity");
        const y = document.getElementById("elon-cost");
        x.innerHTML = elon.quantity.toLocaleString("en");
        y.innerHTML = elon.cost.toLocaleString("en");
    }
};

const buyKingdom = function() {
    if (tonyJuice >= kingdom.cost) {
        tonyJuice -= kingdom.cost;
        kingdom.quantity++;
        kingdom.cost = Math.ceil(kingdom.cost * COST_INCREASE);

        const x = document.getElementById("kingdom-quantity");
        const y = document.getElementById("kingdomy-cost");
        x.innerHTML = kingdom.quantity.toLocaleString("en");
        y.innerHTML = kingdom.cost.toLocaleString("en");
    }
};

const buyPlanet = function() {
    if (tonyJuice >= planet.cost) {
        tonyJuice -= planet.cost;
        planet.quantity++;
        planet.cost = Math.ceil(factory.cost * COST_INCREASE);

        const x = document.getElementById("planet-quantity");
        const y = document.getElementById("planet-cost");
        x.innerHTML = planet.quantity.toLocaleString("en");
        y.innerHTML = planet.cost.toLocaleString("en");
    }
};

const buyAi = function() {
    if (tonyJuice >= ai.cost) {
        tonyJuice -= ai.cost;
        ai.quantity++;
        ai.cost = Math.ceil(ai.cost * COST_INCREASE);

        const x = document.getElementById("ai-quantity");
        const y = document.getElementById("ai-cost");
        x.innerHTML = ai.quantity.toLocaleString("en");
        y.innerHTML = ai.cost.toLocaleString("en");
    }
};
