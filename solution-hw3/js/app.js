const glazingOptions = {
  options: ["Keep original", "Sugar milk", "Vanilla milk", "Double Chocolate"],
  priceAdaptations: [0, 0, 0.5, 1.5],
};

const sizeOptions = {
  options: [1, 3, 6, 12],
  priceAdaptations: [1, 3, 5, 10],
};

const glazingOptionsSelect = document.querySelector("#glazing");
for (let i = 0; i < 4; i++) {
  const option = document.createElement("option");
  option.innerText = glazingOptions.options[i];
  option.value = glazingOptions.priceAdaptations[i];
  glazingOptionsSelect.add(option);
}

const sizeOptionsSelect = document.querySelector("#size");
for (let i = 0; i < 4; i++) {
  const option = document.createElement("option");
  option.innerText = sizeOptions.options[i];
  option.value = sizeOptions.priceAdaptations[i];
  sizeOptionsSelect.add(option);
}

const basePrice = 2.49;
const priceDisplayed = document.querySelector(".product-detail-price");
let currentGlazingPrice = 0;
let currentSizeMultiplier = 1;

function updatePrice() {
  const totalPrice = (basePrice + currentGlazingPrice) * currentSizeMultiplier;
  priceDisplayed.innerText = "$" + totalPrice.toFixed(2);
  // source for rounding: https://coreui.io/blog/how-to-round-a-number-to-two-decimal-places-in-javascript/#1-using-tofixed-method
}

function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = parseFloat(element.value);

  // add your code to do update the price ...
  currentGlazingPrice = priceChange;
  updatePrice();
}

function sizeChange(element) {
  // get value of selected size option
  const sizeMultiplier = parseFloat(element.value);

  // add your code to do update the price ...
  currentSizeMultiplier = sizeMultiplier;
  updatePrice();
}
