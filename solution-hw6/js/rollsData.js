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

function addToCart() {
  const glazingSelect = document.querySelector("#glazing");
  const sizeSelect = document.querySelector("#size");

  const rollGlazing =
    glazingSelect.options[glazingSelect.selectedIndex].innerText;
  const packSize = parseInt(
    sizeSelect.options[sizeSelect.selectedIndex].innerText
  );

  addNewRoll(rollType, rollGlazing, packSize, basePrice);
  saveToLocalStorage();
}

function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem("storedRolls");
  const cartArray = JSON.parse(cartArrayString);
  for (const rollData of cartArray) {
    const roll = addNewRoll(
      rollData.type,
      rollData.glazing,
      rollData.size,
      rollData.basePrice
    );
  }
}

if (localStorage.getItem("storedRolls") != null) {
  retrieveFromLocalStorage();
}

console.log(cart);
