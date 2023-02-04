
// Objects
let itemsOwned = {
    click: 0,
    honeyPerSecond: 0,
    flowers: 0,
    beehives : 0,
    apiaries: 0,
    bee_houses: 0,
    science: 0,
    robots: 0,
}

let itemPricing = {
    flowerPrice : 50,
    beehivePrice : 100,
    apiaryPrice: 200,
    beeHousePrice : 400,
    sciencePrice : 800,
    robotPrice : 1600
}

let amountPerSecond = {
    flowerAPS : 1,
    beehiveAPS : 3,
    apiaryAPS: 5,
    beeHouseAPS : 15,
    scienceAPS : 50,
    robotAPS : 100
}

// DOM
const currentTotal = document.querySelector('#currentCount')
const clickBee = document.querySelector('#clicker')
const purchaseItem = document.querySelectorAll('#shop-button')
const honeyMultiplier = document.querySelector('#hps-count')


// In game assets
const flowersOwned = document.querySelector('#flowers')
const beehivesOwned = document.querySelector('#beehive')
const apiariesOwned = document.querySelector('#apiary')
const beeHousesOwned = document.querySelector('#bee-house')
const scienceLevel = document.querySelector('#science')
const robotsOwned = document.querySelector('#robots')


// Item Prices
let flowerCost = itemPricing.flowerPrice;
let beehiveCost = itemPricing.beehivePrice;
let apiaryCost = itemPricing.apiaryPrice;
let beeHouseCost= itemPricing.beeHousePrice;
let scienceCost = itemPricing.sciencePrice;
let robotCost = itemPricing.robotPrice;


// Buttons
clickBee.addEventListener('click', function() {
    itemsOwned.click +=1;
    currentTotal.innerHTML = `${itemsOwned.click}`;
})


// Buy Function

function buyItem(itemName) {
    switch (itemName) {
      case "flower":
        if (itemsOwned.click >= itemPricing.flowerPrice) {
          itemsOwned.click -= itemPricing.flowerPrice;
          itemsOwned.flowers++;
          itemsOwned.honeyPerSecond += amountPerSecond.flowerAPS;
          flowerCost = Math.round(flowerCost * 1.3);
          amountPerSecond.flowerAPS = Math.round(amountPerSecond.flowerAPS * 1.3)
        
        }
        break;
      case "beehive":
        if (itemsOwned.click >= itemPricing.beehivePrice) {
          itemsOwned.click -= itemPricing.beehivePrice;
          itemsOwned.beehives++;
          itemsOwned.honeyPerSecond += amountPerSecond.beehiveAPS;
          beehiveCost = Math.round(beehiveCost * 1.3);
          amountPerSecond.beehiveAPS = Math.round(amountPerSecond.beehiveAPS * 1.3)
        }
        break;
      case "apiary":
        if (itemsOwned.click >= itemPricing.apiaryPrice) {
          itemsOwned.click -= itemPricing.apiaryPrice;
          itemsOwned.apiaries++;
          itemsOwned.honeyPerSecond += amountPerSecond.apiaryAPS;
          apiaryCost = Math.round(apiaryCost * 1.3);
          amountPerSecond.apiaryAPS = Math.round(amountPerSecond.apiaryAPS * 1.3)
        }
        break;
        case "bee_house":
            if (itemsOwned.click >= beeHouseCost) {
                itemsOwned.click = itemsOwned.click - beeHouseCost;
                itemsOwned.bee_houses = itemsOwned.bee_houses +1;
                itemsOwned.honeyPerSecond = itemsOwned.honeyPerSecond +  amountPerSecond.beeHouseAPS;
                beeHouseCost = Math.round(beeHouseCost * 1.3);
                amountPerSecond.beeHouseAPS = Math.round(amountPerSecond.beeHouseAPS * 1.3)
            }
            break;
        case "science":
            if (itemsOwned.click >= scienceCost) {
                itemsOwned.click = itemsOwned.click - scienceCost;
                itemsOwned.science = itemsOwned.science +1;
                itemsOwned.honeyPerSecond = itemsOwned.honeyPerSecond +  amountPerSecond.scienceAPS;
                scienceCost = Math.round(scienceCost * 1.3);
                amountPerSecond.scienceAPS = Math.round(amountPerSecond.scienceAPS * 1.3)
            }
            break;
        case "robots":
            if (itemsOwned.click >= robotCost) {
                itemsOwned.click = itemsOwned.click - robotCost;
                itemsOwned.robots = itemsOwned.robots +1;
                itemsOwned.honeyPerSecond = itemsOwned.honeyPerSecond +  amountPerSecond.robotAPS;
                robotCost = Math.round(robotCost * 1.3);
                amountPerSecond.robotAPS = Math.round(amountPerSecond.robotAPS * 1.3)
            }
            break;
    }
  }

// Toggling Buttons

function checkButtonsFlower () {
    if (itemsOwned.click < (flowerCost / 2)) {
        document.getElementById('flower-button').style.display = "none"
    } else {
        document.getElementById('flower-button').style.display = "flex"
    }
}

function checkButtonsHive () {
    if (itemsOwned.click < (beehiveCost / 2)) {
        document.getElementById('beehive-button').style.display = "none"
    } else {
        document.getElementById('beehive-button').style.display = "flex"
    }
}

function checkButtonsApiary () {
    if (itemsOwned.click < (apiaryCost / 2)) {
        document.getElementById('apiary-button').style.display = "none"
    } else {
        document.getElementById('apiary-button').style.display = "flex"
    }
}

function checkButtonsHouse () {
    if (itemsOwned.click < (beeHouseCost / 2)) {
        document.getElementById('bee-house-button').style.display = "none"
    } else {
        document.getElementById('bee-house-button').style.display = "flex"
    }
}

function checkButtonsScience () {
    if (itemsOwned.click < (scienceCost / 2)) {
        document.getElementById('bee-science-button').style.display = "none"
    } else {
        document.getElementById('bee-science-button').style.display = "flex"
    }
}

function checkButtonsRobot () {
    if (itemsOwned.click < (robotCost / 2)) {
        document.getElementById('robotic-bees').style.display = "none"
    } else {
        document.getElementById('robotic-bees').style.display = "flex"
    }
}

function startGame () {
    if (itemsOwned.click === 0) {
        document.getElementById('filler').style.display = "flex"
    } else {
        document.getElementById('filler').style.display = 'none'
    }
}
function autoIncrease() {
    itemsOwned.click += itemsOwned.honeyPerSecond;
}


// Loop

window.setInterval(function () {
    
    startGame();
    autoIncrease();
    checkButtonsFlower();
    checkButtonsHive();
    checkButtonsApiary();
    checkButtonsHouse();
    checkButtonsScience();
    checkButtonsRobot();

    document.getElementById('scalingFlowerPrice').innerHTML = `${flowerCost}`
    document.getElementById('scalingHivePrice').innerHTML = `${beehiveCost}`
    document.getElementById('scalingApiaryPrice').innerHTML = `${apiaryCost}`
    document.getElementById('scalingBeeHousePrice').innerHTML = `${beeHouseCost}`
    document.getElementById('scalingSciencePrice').innerHTML = `${scienceCost}`
    document.getElementById('scalingRobotPrice').innerHTML = `${robotCost}`

    document.getElementById('scalingFlowerAPS').innerHTML = `${amountPerSecond.flowerAPS}`
    document.getElementById('scalingHiveAPS').innerHTML = `${amountPerSecond.beehiveAPS}`
    document.getElementById('scalingApiaryAPS').innerHTML = `${amountPerSecond.apiaryAPS}`
    document.getElementById('scalingBeeHouseAPS').innerHTML = `${amountPerSecond.beeHouseAPS}`
    document.getElementById('scalingScienceAPS').innerHTML = `${amountPerSecond.scienceAPS}`
    document.getElementById('scalingRobotAPS').innerHTML = `${amountPerSecond.robotAPS}`
    
    currentTotal.innerHTML = `${itemsOwned.click}`;
    flowersOwned.innerHTML = `${itemsOwned.flowers}`
    beehivesOwned.innerHTML = `${itemsOwned.beehives}`
    apiariesOwned.innerHTML = `${itemsOwned.apiaries}`
    beeHousesOwned.innerHTML = `${itemsOwned.bee_houses}`
    scienceLevel.innerHTML = `${itemsOwned.science}`
    robotsOwned.innerHTML = `${itemsOwned.robots}`
    honeyMultiplier.innerHTML = `${itemsOwned.honeyPerSecond}`

}, 1000)
