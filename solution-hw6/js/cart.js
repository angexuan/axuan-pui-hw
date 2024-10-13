function addNewRoll(rollType, rollGlazing, packSize, rollPrice, imageFile) {
  const roll = new Roll(rollType, rollGlazing, packSize, rollPrice, imageFile);
  cart.add(roll);
  return roll;
}

const cartGlazingOptions = {
  options: ["Keep original", "Sugar milk", "Vanilla milk", "Double Chocolate"],
  priceAdaptations: [0, 0, 0.5, 1.5],
};

const cartSizeOptions = {
  options: [1, 3, 6, 12],
  priceAdaptations: [1, 3, 5, 10],
};

let cartTotalPrice = 0;
const cartTotalPriceDisplayed = document.querySelector(".cart-price");

if (localStorage.getItem("storedRolls") != null) {
  retrieveFromLocalStorage();
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
    createElement(roll);
  }
}

function createElement(roll) {
  const template = document.querySelector("#roll-template");
  const clone = template.content.cloneNode(true);
  roll.element = clone.querySelector(".roll");
  const remove = roll.element.querySelector(".remove-item");
  remove.addEventListener("click", () => {
    deleteRoll(roll);
  });

  const rollListElement = document.querySelector(".cart-contents");
  rollListElement.append(roll.element);
  updateElement(roll);
}

function updatePrice(roll) {
  const glazingIndex = cartGlazingOptions.options.indexOf(roll.glazing);
  const sizeIndex = cartSizeOptions.options.indexOf(roll.size);
  const totalPrice = (
    (roll.basePrice + cartGlazingOptions.priceAdaptations[glazingIndex]) *
    cartSizeOptions.priceAdaptations[sizeIndex]
  ).toFixed(2);
  roll.totalPrice = totalPrice;
  updateTotalPrice(totalPrice);
  return totalPrice;
}

function updateElement(roll) {
  const rollTypeElement = roll.element.querySelector(".product-type");
  const rollGlazingElement = roll.element.querySelector(".product-glazing");
  const packSizeElement = roll.element.querySelector(".product-size");
  const rollPriceElement = roll.element.querySelector(".product-price");
  const imageElement = roll.element.querySelector(".product-image");

  rollTypeElement.innerText = roll.type;
  rollGlazingElement.innerText = roll.glazing;
  packSizeElement.innerText = roll.size;
  rollPriceElement.innerText = updatePrice(roll);
  imageElement.src = `../assets/products/${rolls[roll.type]["imageFile"]}`;
}

function deleteRoll(roll) {
  totalPrice = roll.totalPrice * -1;
  updateTotalPrice(totalPrice);
  roll.element.remove();
  cart.delete(roll);
  saveToLocalStorage();
}

function updateTotalPrice(totalPrice) {
  cartTotalPrice += parseFloat(totalPrice);
  if (cartTotalPrice < 0) {
    cartTotalPrice = 0;
  }
  cartTotalPriceDisplayed.innerText = "$" + cartTotalPrice.toFixed(2);
}

console.log(cart);
