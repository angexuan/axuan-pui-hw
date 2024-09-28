const rolls = {
  Original: {
    basePrice: 2.49,
    imageFile: "original-cinnamon-roll.jpg",
  },
  Apple: {
    basePrice: 3.49,
    imageFile: "apple-cinnamon-roll.jpg",
  },
  Raisin: {
    basePrice: 2.99,
    imageFile: "raisin-cinnamon-roll.jpg",
  },
  Walnut: {
    basePrice: 3.49,
    imageFile: "walnut-cinnamon-roll.jpg",
  },
  "Double-Chocolate": {
    basePrice: 3.99,
    imageFile: "double-chocolate-cinnamon-roll.jpg",
  },
  Strawberry: {
    basePrice: 3.99,
    imageFile: "strawberry-cinnamon-roll.jpg",
  },
};

let cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const updateRollType = document.querySelector("#roll-type");
updateRollType.innerText = rollType;

const updateRollImage = document.querySelector("#roll-img");
updateRollImage.src = `../assets/products/${rolls[rollType].imageFile}`;
updateRollImage.alt = `${rollType} Cinnamon Roll`;

const priceDisplayed = document.querySelector(".product-detail-price");
priceDisplayed.innerText = rolls[rollType].basePrice;

const basePrice = rolls[rollType].basePrice;
let currentGlazingPrice = 0;
let currentSizeMultiplier = 1;

function updatePrice() {
  const totalPrice = (basePrice + currentGlazingPrice) * currentSizeMultiplier;
  priceDisplayed.innerText = "$" + totalPrice.toFixed(2);
}

function glazingChange(element) {
  const priceChange = parseFloat(element.value);
  currentGlazingPrice = priceChange;
  updatePrice();
}

function sizeChange(element) {
  const sizeMultiplier = parseFloat(element.value);
  currentSizeMultiplier = sizeMultiplier;
  updatePrice();
}

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

function createNewRoll() {
  console.log("added to cart");
  const glazingSelect = document.querySelector("#glazing");
  const sizeSelect = document.querySelector("#size");

  const rollGlazing =
    glazingSelect.options[glazingSelect.selectedIndex].innerText;
  const packSize = parseInt(
    sizeSelect.options[sizeSelect.selectedIndex].innerText
  );
  //   selectedIndex source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex

  const newRoll = new Roll(
    rollType,
    rollGlazing,
    packSize,
    rolls[rollType].basePrice
  );

  cart.push(newRoll);
  console.log(cart);
}
