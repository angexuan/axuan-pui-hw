const rollSet = new Set();

class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice, imageFile) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;
    this.imageFile = imageFile;

    this.element = null;
  }
}

function addNewRoll(rollType, rollGlazing, packSize, rollPrice, imageFile) {
  const roll = new Roll(rollType, rollGlazing, packSize, rollPrice, imageFile);
  rollSet.add(roll);
  return roll;
}

const newRoll1 = addNewRoll(
  "Original",
  "Sugar milk",
  1,
  2.49,
  "original-cinnamon-roll.jpg"
);
const newRoll2 = addNewRoll(
  "Walnut",
  "Vanilla milk",
  12,
  3.49,
  "walnut-cinnamon-roll.jpg"
);
const newRoll3 = addNewRoll(
  "Raisin",
  "Sugar milk",
  3,
  2.99,
  "raisin-cinnamon-roll.jpg"
);
const newRoll4 = addNewRoll(
  "Apple",
  "Keep original",
  3,
  3.49,
  "apple-cinnamon-roll.jpg"
);

const glazingOptions = {
  options: ["Keep original", "Sugar milk", "Vanilla milk", "Double Chocolate"],
  priceAdaptations: [0, 0, 0.5, 1.5],
};

const sizeOptions = {
  options: [1, 3, 6, 12],
  priceAdaptations: [1, 3, 5, 10],
};

let cartTotalPrice = 0;
const cartTotalPriceDisplayed = document.querySelector(".cart-price");

for (const roll of rollSet) {
  createElement(roll);
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
  const glazingIndex = glazingOptions.options.indexOf(roll.glazing);
  const sizeIndex = sizeOptions.options.indexOf(roll.size);
  const totalPrice = (
    (roll.basePrice + glazingOptions.priceAdaptations[glazingIndex]) *
    sizeOptions.priceAdaptations[sizeIndex]
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
  imageElement.src = `../assets/products/${roll.imageFile}`;
}

function deleteRoll(roll) {
  totalPrice = roll.totalPrice * -1;
  updateTotalPrice(totalPrice);
  roll.element.remove();
  rollSet.delete(roll);
}

function updateTotalPrice(totalPrice) {
  cartTotalPrice += parseFloat(totalPrice);
  if (cartTotalPrice < 0) {
    cartTotalPrice = 0;
  }
  cartTotalPriceDisplayed.innerText = "$" + cartTotalPrice.toFixed(2);
}
