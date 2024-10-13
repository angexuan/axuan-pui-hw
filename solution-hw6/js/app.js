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
