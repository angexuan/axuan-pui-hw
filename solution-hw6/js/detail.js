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

class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;

    this.element = null;
  }
}

let cart;

if (cart === undefined) {
  cart = new Set();
}

function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
  const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
  cart.add(newRoll);
}

function saveToLocalStorage() {
  const cartArray = Array.from(cart);
  const cartArrayString = JSON.stringify(cartArray);

  localStorage.setItem("storedRolls", cartArrayString);
  console.log(cart);
}
